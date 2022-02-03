import gql from "graphql-tag";
import { parseISO } from "date-fns";
import {
  ApolloClient as GraphQLClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { SingleAction, SingleActionOrSeries, RefreshBooleans } from "./types";

/**
 * Fetch all of a user's assigned Single Actions and Action Series
 * @param virtaId User's virtaId to lookup their actions by
 * @param gqlClient The already-setup gql client
 */
export const getAllActions = async (
  virtaId: string,
  gqlClient: GraphQLClient<NormalizedCacheObject>
): Promise<Array<SingleActionOrSeries>> => {
  // TODO dont reset store on every call TM-3905
  await gqlClient.resetStore();
  const result = await gqlClient.query({
    query: gql`
      query GetAllActions {
        seriesList(virtaId: "${virtaId}", isActive: true) {
          patientSeriesId
          title
          oneTimeActions {
              patientActionId
              title
              minutesToComplete
              whatDetails
              whenDetails
              ctaLink
              ctaLabel
              createdOnUtc
              updatedOnUtc
              endDateUtc
              contentType
              type
              actionContentId
              calloutText
          }
        }
        actions(virtaId: "${virtaId}", filterHasSeries: true, isActive: true) {
          oneTimeActions {
            patientActionId
            title
            minutesToComplete
            whatDetails
            whenDetails
            ctaLink
            ctaLabel
            createdOnUtc
            updatedOnUtc
            contentType
            type
            actionContentId
            calloutText
          }
        }
      }
    `,
  });

  // if we have any errors, throw an exception
  if (result.errors) {
    throw new Error("Error retrieving actions");
  }

  // we're constructing a list of series + actions
  const finalActionList = new Array<SingleActionOrSeries>();
  const actionSeriesList = result.data?.seriesList;
  const singleActionList = result.data?.actions?.oneTimeActions;

  // go through the raw list of series and parse them, skipping any that arent active
  if (actionSeriesList) {
    for (const seriesInstance of actionSeriesList) {
      finalActionList.push({
        actionSeries: {
          title: {
            id: "seriesTitle" + seriesInstance.patientSeriesId,
            defaultMessage: seriesInstance.title,
          },
          actions: seriesInstance.oneTimeActions.map((act: any) =>
            parseSingleAction(act, seriesInstance.patientSeriesId)
          ),
        },
      });
    }
  }
  // go through the raw list of single actions and parse them, skipping any that arent active
  if (singleActionList) {
    for (const actionInstance of singleActionList) {
      finalActionList.push({
        singleAction: parseSingleAction(actionInstance),
      });
    }
  }

  // now sort everything based on its creation date
  const getDate = (act: SingleActionOrSeries): Date | undefined => {
    if (act.singleAction) {
      return act.singleAction.createdAt;
    }
    if (act.actionSeries && act.actionSeries.actions.length) {
      return act.actionSeries.actions[0].createdAt;
    }
    return undefined;
  };
  finalActionList.sort((act1, act2) => {
    const date1 = getDate(act1);
    const date2 = getDate(act2);
    // typescript requires this weird formatting
    if (!date1 || !date2) {
      if (!date1 && date2) {
        return 1;
      }
      if (!date2 && date1) {
        return -1;
      }
      if (!date1 && !date2) {
        return 0;
      }
      return 0;
    }
    // sort by oldest first, newest last
    return date1.getTime() - date2.getTime();
  });

  return finalActionList;
};

// converts be syntax to fe syntax for a single action
export const parseSingleAction = (
  singleAction: any,
  seriesId?: string
): SingleAction => {
  const appendId = seriesId ?? singleAction.patientActionId ?? "";
  const frontEndId = singleAction.actionContentId + appendId;
  let createdDate;
  let updatedDate;
  let endDate;

  // Android doesnt like our backend UTC format, so we have to adjust it here
  try {
    // we dont keep time precision for updated or end date, because timezone is buggy
    // across devices, and we only care about the date
    if (singleAction.endDateUtc?.length >= 10) {
      endDate = parseISO(singleAction.endDateUtc.substr(0, 10));
    }
    if (singleAction.updatedOnUtc?.length >= 10) {
      updatedDate = parseISO(singleAction.updatedOnUtc.substr(0, 10));
    }
    // we keep time precision for created date, however dont adjust for UTC vs user's timezone
    // this is because we only care about createdDate relative to other createdDates
    if (singleAction.createdOnUtc?.length) {
      createdDate = parseISO(singleAction.createdOnUtc.replace(" ", "T"));
    }
  } catch (e) {
    // this catch block is probably unnecessary
  }

  return {
    id: frontEndId,
    backendId: singleAction.patientActionId,
    actionType: singleAction.contentType,
    type: singleAction.type,
    title: {
      id: "actionTitle" + frontEndId,
      defaultMessage: singleAction.title,
    },
    ...(singleAction.minutesToComplete && {
      timeToComplete: singleAction.minutesToComplete,
    }),
    ...(singleAction.whatDetails && {
      whatDetails: {
        id: "whatDetails" + frontEndId,
        defaultMessage: singleAction.whatDetails,
      },
    }),
    ...(singleAction.whenDetails && {
      whenDetails: {
        id: "whenDetails" + frontEndId,
        defaultMessage: singleAction.whenDetails,
      },
    }),
    ...(createdDate && {
      createdAt: createdDate,
    }),
    ...(updatedDate && {
      updatedAt: updatedDate,
    }),
    ...(endDate && {
      endDate: endDate,
    }),
    ...(singleAction.ctaLink && { ctaLink: singleAction.ctaLink }),
    ...(singleAction.ctaLabel && {
      ctaLabel: {
        id: "actionLabel" + frontEndId,
        defaultMessage: singleAction.ctaLabel,
      },
    }),
    ...(singleAction.calloutText && {
      calloutText: {
        id: `actionCalloutText ${frontEndId}`,
        defaultMessage: singleAction.calloutText,
      },
    }),
  };
};

/**
 * Mark an action as complete. This returns 2 booleans indicating whether we need to
 * re-fetch our action + healthy habbits list or not, as well as the FE id of the action we
 * just marked and the BE id of the next action in the series if we're in a series
 * @param virtaId User's virtaId who completed the action
 * @param action one-time action you wish to update
 * @param gqlClient The already-setup gql client
 * @param timezone user timezone
 */
export const markAction = async (
  virtaId: string,
  action: SingleAction | null,
  gqlClient: GraphQLClient<NormalizedCacheObject>,
  timezone: string
): Promise<RefreshBooleans> => {
  if (!action) {
    throw new Error("Error marking action : no action provided");
  }

  // if we get into the situation where our action backend id hasn't been populated yet, try retrieving it from the BE now
  if (!action.backendId) {
    const listOfActions = await getAllActions(virtaId, gqlClient);
    // search through all the actions and subactions to find the one that matches
    for (const curAction of listOfActions) {
      if (curAction?.singleAction?.id === action.id) {
        action = curAction.singleAction;
        break;
      } else if (curAction?.actionSeries?.actions?.length) {
        for (const subAction of curAction.actionSeries.actions) {
          if (subAction.id === action.id) {
            action = subAction;
            break;
          }
        }
      }
    }
  }

  // if by now we haven't got an action backend id, we cant proceed
  if (!action.backendId) {
    throw new Error("Error marking action : no action backend id");
  }

  // questionnaires mark themselves, calling this function for questionnaires
  // is just to keep the FE happy
  if (action.type === "questionnaire") {
    return {
      refreshHH: false,
      justMarkedId: action.id,
    };
  }

  const result = await gqlClient.mutate({
    mutation: gql`
      mutation {
        markAction(virtaId: "${virtaId}",
        entityType: "checkmark",
        entityValue: "true",
        patientActionId: "${action.backendId}",
        userTimezone: "${timezone}",
        completedOnUtc: "${new Date().toUTCString()}") {
          hasNewHabitualAction,
          patientActionId
        }
      }`,
  });

  if (result.errors) {
    throw new Error("Error marking action : " + JSON.stringify(result.errors));
  }

  return {
    refreshHH: result.data.markAction.hasNewHabitualAction,
    justMarkedId: action.id,
    nextBackendId: result.data.markAction.patientActionId,
  };
};
