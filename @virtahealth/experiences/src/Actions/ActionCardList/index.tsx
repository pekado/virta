// TODO: This rule should be turned on here and all issues fixed. Conditionally rendered hooks can break the entire component tree. Leaving for another ticket though.
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import {
  VirtaContextComponents,
  Callout,
  VirtaContextComponentsProps,
} from "@virtahealth/components";
import { Animated, AppState, View } from "react-native";
import {
  getAllActions,
  markAction,
  messages,
  SingleAction,
  SingleActionOrSeries,
  RefreshBooleans,
  noop,
} from "@virtahealth/utils";
import { differenceInDays } from "date-fns";
import { MessageDescriptor } from "react-intl";
import { useImperativeHandle } from "react";
import Collapsible from "react-native-collapsible";
import { ActionDetails } from "../ActionDetails";
import { ActionCard, IndividualActionCardProps } from "../ActionCard";

export const componentId = "action_card";
const detailsComponentId = "action_card";
const UPDATE_BE_TIME = 2500;

export interface ActionCardListProps {
  goToLink: (link: string, action: SingleAction) => void;
  displayActionDetails: (details: React.ReactElement) => void;
  closeActionDetails: () => void;
  refreshHealthyHabits: () => void;
  scrollToHealthyHabits: () => void;
  // noDisplay will only hide displaying on initial load. If it's set to false and then true again, it will only prevent
  // newly loaded actions (or reloads) from being visible
  noDisplay: boolean;
  doneLoading?: () => void;
  optionalBottomPadding?: number;
  context?: VirtaContextComponentsProps;
}

const errorTitleDescriptor = {
  id: "actionCardListErrorTitle",
  defaultMessage: "We couldn’t get your actions",
  description:
    "Title of error callout when action card list encounters a network error",
};

const errorDescriptionDescriptor = {
  id: "actionCardListErrorDescription",
  defaultMessage: "Something went wrong. Try again in a bit.",
  description:
    "Description of error callout when action card list encounters a network error",
};

const errorButtonDescriptor = {
  id: "actionCardListErrorButton",
  defaultMessage: "Retry",
  description:
    "Button label of error callout when action card list encounters a network error",
};

export const ActionCardList: React.FunctionComponent<ActionCardListProps> =
  React.forwardRef(
    (
      {
        // TODO: Figure out how you are supposed to set the interface for forwardRef so this stops yelling.
        /* eslint-disable react/prop-types */
        goToLink,
        displayActionDetails,
        closeActionDetails,
        refreshHealthyHabits,
        scrollToHealthyHabits,
        noDisplay,
        doneLoading,
        optionalBottomPadding,
        context,
        /* eslint-enable react/prop-types */
      },
      ref
    ) => {
      // virtaId and and gqlClient are required in VirtaContext
      let virtaContext = React.useContext(VirtaContextComponents);
      if (context) {
        virtaContext = context;
      }
      const analyticsClient = virtaContext?.analyticsClient;
      const virtaId = virtaContext?.virtaId;
      const gqlClient = virtaContext?.gqlClient;
      const timezone = virtaContext?.timezone || "UTC";
      if (!gqlClient || !virtaId) {
        return null;
      }

      // this allows the action cards to expand/collapse
      const [visibleCards, setVisibleCards] = React.useState<{
        [key: string]: boolean;
      }>({});
      // this fades in/out action cards
      const [opacities, setOpacities] = React.useState<{
        [key: string]: Animated.Value;
      }>({});
      // these keep track so we dont re-animate opacities on subsequent renders
      const [faded, setFaded] = React.useState<{ [key: string]: boolean }>({});
      // after being marked complete, after 5 seconds, action series will slide their cards
      const [slideCards, setSlideCards] = React.useState(false);
      // we keep track of our actions and their completion states locally
      const [actions, setActions] = React.useState(
        new Array<SingleActionOrSeries>()
      );
      const [completedActions, setCompletedActions] = React.useState(
        new Array<string>()
      );
      // we send action updates to the backend in batches. this represents the current batch
      const updateActionsBatch = React.useRef(new Array<string>());
      // this Id represent the queued BE update, which may be canceled with clearTimeout
      const updateBETimeoutId = React.useRef<ReturnType<typeof setTimeout>>(
        setTimeout(() => undefined, 0)
      );
      // cleanup a minor timeout
      const callIsDoneTimeoutId = React.useRef<ReturnType<typeof setTimeout>>(
        setTimeout(() => undefined, 0)
      );
      // whether we're currently updating the BE and should refuse updating actions
      const updating = React.useRef(false);
      // When a network error occurs, first retry, then show an error message
      let retryError = React.useRef(false).current;
      const [showError, setShowError] = React.useState(false);
      // When a new healthy habbit is assigned, show the banner
      const [hhBanner, setHHBanner] = React.useState(false);
      // Keep track of which actions we've logged view events for
      let loggedViewedActions: string[] = React.useRef([]).current;

      // When a network error occurs, we assume we are in a bad state and need to reload the component
      const onError = () => {
        // if we already tried re-fetching actions, show the error message
        if (retryError) {
          setShowError(true);
          retryError = false;
        }
        // if we haven't retried yet, do so
        else {
          retryError = true;
          loggedViewedActions = [];
          setActions([]);
          setFaded({});
          setOpacities({});
          setVisibleCards({});
          setCompletedActions([]);
          initActionList();
        }
      };

      // used for initializing our action list on mount or error
      const initActionList = async (noAnimations?: boolean) => {
        updating.current = true;
        // this should be the only call to getAllActions in this file
        return getAllActions(virtaId, gqlClient)
          .then((allActions) => {
            // look through the actions to determine which have an endDate, indicating they are complete,
            // and set up our isComplete array accordingly
            const isCompleteArray = new Array<string>();
            allActions.forEach((singleActionOrSeries) => {
              if (singleActionOrSeries.singleAction) {
                const action = singleActionOrSeries.singleAction;
                if (action.endDate) {
                  isCompleteArray.push(action.id);
                }
              } else if (singleActionOrSeries.actionSeries) {
                singleActionOrSeries.actionSeries.actions.forEach((action) => {
                  if (action.endDate) {
                    isCompleteArray.push(action.id);
                  }
                });
              }
            });
            // on initial load, we dont want any animations
            if (noAnimations) {
              displayAllCards(allActions);
            }
            setActions(allActions);
            setCompletedActions(isCompleteArray);
            updating.current = false;
            retryError = false;
            setShowError(false);
            // this gives us a little buffer time when initially loading cards to measure layouts
            callIsDoneTimeoutId.current = setTimeout(
              () => doneLoading?.(),
              333
            );
          })
          .catch(onError);
      };

      // fetch actions from BE once on mount
      React.useEffect(() => {
        initActionList(true);
      }, []);

      // log viewed event in analytics for the displayed action
      // note this occurs when an action is displayed, but not when a series progresses
      const logViewAction = (action: SingleActionOrSeries) => {
        let actionAsSingle: SingleAction | null;
        if (action.singleAction) {
          actionAsSingle = action.singleAction;
        } else {
          actionAsSingle = getCurrentInSeries(action);
        }

        if (
          actionAsSingle &&
          !loggedViewedActions.includes(actionAsSingle.id)
        ) {
          // make sure we don't re-log this event in the future
          loggedViewedActions.push(actionAsSingle.id);
          // log event
          analyticsClient?.logViewEvent?.("Action Card Viewed", {
            screen_name: componentId,
            screen_path: componentId,
            action_id: actionAsSingle.backendId,
            content_id: actionAsSingle.id,
            action_title: String(actionAsSingle.title.defaultMessage),
          });
        }
      };

      // this will display all incomplete cards without animations
      const displayAllCards = (newActions: SingleActionOrSeries[]) => {
        const newVisibleCards: {
          [key: string]: boolean;
        } = {};
        const newOpacities: {
          [key: string]: Animated.Value;
        } = {};
        const newFaded: {
          [key: string]: boolean;
        } = {};
        // go through all actions and set them to visible
        for (const curAction of newActions) {
          const id = getId(curAction);
          if (completedActions.includes(id)) {
            continue;
          }
          logViewAction(curAction);
          newVisibleCards[id] = true;
          newFaded[id] = true;
          newOpacities[id] = new Animated.Value(1);
        }
        setVisibleCards(newVisibleCards);
        setOpacities(newOpacities);
        setFaded(newFaded);
      };

      // this will expand (animate in) the next incomplete card in the list
      const displayNextCard = () => {
        if (!noDisplay && actions?.length) {
          setVisibleCards((currentlyVisible: { [key: string]: boolean }) => {
            let didChange = false;
            for (const action of actions) {
              const id = getId(action);
              if (completedActions.includes(id)) {
                continue;
              }
              if (currentlyVisible[id]) {
                continue;
              }
              currentlyVisible[id] = true;
              didChange = true;
              // break so we only display the first card available
              break;
            }
            // when we're done with displaying cards, log the viewed event
            if (!didChange) {
              for (const action of actions) {
                logViewAction(action);
              }
            }
            // if nothing changed, return the original object to prevent re-render
            return didChange ? { ...currentlyVisible } : currentlyVisible;
          });
        }
      };

      // we start expanding cards whenever we have new cards to display (excluding initial load)
      React.useEffect(displayNextCard, [actions]);

      // whenever cards are newly expanded/collapsed, we animate them in/out simultaniously
      React.useEffect(() => {
        setTimeout(() => {
          const newFaded = { ...faded };
          const newOpacities = { ...opacities };
          let didChange = false;
          for (const action of actions) {
            const id = getId(action);
            // fade in
            if (visibleCards[id] && !newFaded[id]) {
              newFaded[id] = true;
              didChange = true;
              if (!newOpacities[id]) {
                newOpacities[id] = new Animated.Value(0);
              }
              Animated.timing(newOpacities[id], {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
              }).start();
            }
            // fade out
            if (!visibleCards[id] && newFaded[id]) {
              newFaded[id] = false;
              didChange = true;
              // this should never happen, but if we try to fade out an element with no animated opacity value,
              // that means they're already defaulting to 0 opacity, so just continue
              if (!newOpacities[id]) {
                continue;
              }
              Animated.timing(newOpacities[id], {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
              }).start();
            }
          }
          if (didChange) {
            setOpacities(newOpacities);
            setFaded(newFaded);
          }
        }, 0);
      }, [visibleCards]);

      // expose these functions to our parent
      useImperativeHandle(ref, () => ({
        toggleComplete,
        forceReload: () => {
          if (updating.current) {
            return;
          }
          // this checks to see if we've had a successful load yet of at least 1 action
          if (Object.keys(faded).length && !showError) {
            loggedViewedActions = [];
            initActionList();
          } else {
            onError();
          }
        },
      }));

      // when the user marks an action as complete or undoes that marking,
      // we first update our list of completed actions to add/remove the action id.
      // then we queue a call to update our BE and do animations (see below)
      const toggleComplete = async (
        id: string,
        instantlyPushBE?: boolean
      ): Promise<void> => {
        // don't update anything if we're talking to the BE, wait for it to complete
        if (updating.current) {
          return;
        }

        // ==Update our completed actions list==
        // if our completedActions dont include this id, it is now complete since we're toggling it
        const completed = !completedActions.includes(id);
        const newCompletedActions = completed
          ? // add the newly completed action to our list
            completedActions.concat([id])
          : // or remove the newly incomplete item from our list
            completedActions.filter((curCompletedId) => curCompletedId !== id);
        // update local list
        setCompletedActions(newCompletedActions);

        // ==Update our actions BE batch==
        // If the current batch includes this action, remove it (this is the user undoing what they just did)
        // if the batch doesn't include this action, add it
        const index = updateActionsBatch.current.indexOf(id);
        if (index > -1) {
          updateActionsBatch.current.splice(index, 1);
        } else {
          updateActionsBatch.current.push(id);
        }
        // clear our currently queued BE call and queue a new one for the current batch
        clearTimeout(updateBETimeoutId.current);
        updateBETimeoutId.current = setTimeout(
          () => {
            markCompleteOnBEAndAnimate();
          },
          instantlyPushBE ? 1 : UPDATE_BE_TIME
        );
      };

      // make a BE call to update the actions' completion status and recieve
      // a message back to decide whether to refetch all actions or not.
      // Also hide any completed actions / series, and slide actions in an incomplete series
      const markCompleteOnBEAndAnimate = async () => {
        // we have nothing to update
        if (updateActionsBatch.current.length === 0) {
          return;
        }
        // pause all action interaction until we finish updating
        updating.current = true;

        // close the action details so the user cannot undo the completion
        closeActionDetails();

        // tell action series to slide their cards. The value of this doesn't actually matter,
        // only the fact that its changing. We set it back to false after a split second to set
        // it up for future slides.
        setSlideCards(true);
        setTimeout(() => setSlideCards(false), 500);

        // make a call to the BE to update any actions in our batch asynchronously.
        // Also initiate collapsing animations + sliding cards for any completed actions.
        // keep track of these animations so we can update the action list after they all complete if needed
        const promiseArray = new Array<Promise<RefreshBooleans>>();
        // we need to see if we completed any series
        let seriesComplete = false;

        updateActionsBatch.current.forEach((actionId) => {
          seriesComplete = seriesComplete || isLastInSeries(actionId);
          // hide cards if completed
          // note this has no effect on actions in a series that aren't the last one in that series
          if (visibleCards[actionId]) {
            // this will trigger collapsing and fade out
            setVisibleCards((cards) => ({
              ...cards,
              [actionId]: false,
            }));
          }

          // now mark the actions on the BE
          const action = getActionById(actionId);
          promiseArray.push(markAction(virtaId, action, gqlClient, timezone));
        });

        // clear the batch
        updateActionsBatch.current = [];

        // wait for all BE updates to resolve
        Promise.all(promiseArray)
          .then((results) => {
            let hhUpdate = noop;
            // check if healthy habbits needs to be updated
            if (results.some((res) => res.refreshHH)) {
              hhUpdate = () => {
                setHHBanner(true);
                refreshHealthyHabits();
              };
            }
            // if we just finished a series, refresh actions
            if (seriesComplete) {
              // fetch new actions
              initActionList().then(hhUpdate);
            } else {
              // no new actions need to be fetched
              // check to see if we need to update any series with new ids
              // (actions in a series dont have backend ids until they're the currently-active one, so we need to pass those ids along as they become currently active)
              if (results.some((res) => res.nextBackendId)) {
                // we're updating our actions array
                setActions((newActions) => {
                  // look through the results and find any that provide a new backend id
                  results.forEach((res) => {
                    if (!res.nextBackendId) {
                      return;
                    }
                    // then look through all actions and find an action series that contains the id we just marked
                    for (const act of newActions) {
                      if (act?.actionSeries?.actions?.length) {
                        let modifyNext = false;
                        for (const subAct of act.actionSeries.actions) {
                          // update the next action in the series after the one that was marked
                          if (modifyNext) {
                            subAct.backendId = res.nextBackendId;
                            break;
                          }
                          // check if this is the one that was marked
                          if (subAct.id === res.justMarkedId) {
                            modifyNext = true;
                          }
                        }
                      }
                    }
                  });
                  return [...newActions];
                });
              }
              hhUpdate();
              // then allow interactions
              updating.current = false;
            }
          })
          .catch(onError);
      };

      // If the app / tab is navigated away from before our timer goes off, we want to force the timer to 0
      // and send the BE requests immediately
      const forceQueue = () => {
        clearTimeout(updateBETimeoutId.current);
        clearTimeout(callIsDoneTimeoutId.current);
        markCompleteOnBEAndAnimate();
      };
      React.useEffect(() => {
        if (window?.addEventListener) {
          window.addEventListener("beforeunload", forceQueue);
        } else {
          AppState.addEventListener("change", forceQueue);
        }
        return () => {
          if (window?.removeEventListener) {
            window.removeEventListener("beforeunload", forceQueue);
          } else {
            AppState.removeEventListener("change", forceQueue);
          }
          forceQueue();
        };
      }, []);

      // converts the props from a SingleAction into ActionCard props
      const convertAction = (
        action: SingleAction,
        series?: Array<SingleAction>,
        title?: MessageDescriptor
      ): IndividualActionCardProps => {
        return {
          id: action.id,
          backendId: action.backendId,
          title: action.title,
          description: action.whatDetails,
          timeToComplete: action.timeToComplete,
          onPress: () => {
            if (updating.current) {
              return;
            }
            analyticsClient?.logClickEvent("Open Action Card Details", {
              screen_name: componentId,
              screen_path: componentId,
              destination_path: detailsComponentId,
              action_id: action.backendId,
              content_id: action.id,
              action_title: String(action.title.defaultMessage),
            });
            displayActionDetails(createActionDetails(action, series, title));
          },
          toggleComplete:
            action.type === "checkmark"
              ? () => {
                  analyticsClient?.logClickEvent(
                    "Action Card Toggle Complete",
                    {
                      screen_name: componentId,
                      screen_path: componentId,
                      action_id: action.backendId,
                      content_id: action.id,
                      action_title: String(action.title.defaultMessage),
                    }
                  );
                  toggleComplete(action.id);
                }
              : undefined,
          isComplete: completedActions.includes(action.id),
          primaryButtonLabel: action.ctaLabel,
          onPressPrimaryButton: action.ctaLink
            ? () => {
                analyticsClient?.logClickEvent("Action Card Primary Button", {
                  screen_name: componentId,
                  screen_path: componentId,
                  destination_path: action.ctaLink || "",
                  action_id: action.backendId,
                  content_id: action.id,
                  action_title: String(action.title.defaultMessage),
                });
                goToLink(action.ctaLink || "", action);
              }
            : undefined,
          calloutText: action.calloutText,
        };
      };

      // TODO when we move our local actions state to redux, we can have the parent construct the ActionDetails instead of us
      // TM-3334
      const createActionDetails = (
        action: SingleAction,
        series?: Array<SingleAction>,
        title?: MessageDescriptor
      ): React.ReactElement => {
        return (
          <ActionDetails
            isComplete={completedActions.includes(action.id)}
            action={action}
            goToLink={(link, act) => {
              analyticsClient?.logClickEvent(
                "Action Card Details Primary Button",
                {
                  screen_name: detailsComponentId,
                  screen_path: detailsComponentId,
                  destination_path: link,
                  action_id: action.backendId,
                  content_id: action.id,
                  action_title: String(action.title.defaultMessage),
                }
              );
              goToLink(link, act);
            }}
            toggleComplete={
              action.type === "checkmark"
                ? () => {
                    analyticsClient?.logClickEvent(
                      "Action Card Details Toggle Complete",
                      {
                        screen_name: detailsComponentId,
                        screen_path: detailsComponentId,
                        destination_path: componentId,
                        action_id: action.backendId,
                        content_id: action.id,
                        action_title: String(action.title.defaultMessage),
                      }
                    );
                    toggleComplete(action.id);
                    closeActionDetails();
                  }
                : undefined
            }
            actionSeriesDetails={
              series && title
                ? {
                    title,
                    completedActions: series.filter((action) =>
                      completedActions.includes(action.id)
                    ).length,
                    totalActions: series.length,
                  }
                : undefined
            }
          />
        );
      };

      const getId = (act: SingleActionOrSeries): string => {
        const series = act.actionSeries;
        const single = act.singleAction;
        let id;
        if (single) {
          id = single.id;
        }
        if (series) {
          id = series.actions[series.actions.length - 1].id;
        }
        return id as string;
      };

      const getActionById = (id: string): SingleAction | null => {
        for (const action of actions) {
          if (action?.singleAction?.id === id) {
            return action.singleAction;
          }
          if (action?.actionSeries?.actions.length) {
            for (const subAction of action.actionSeries.actions) {
              if (subAction.id === id) {
                return subAction;
              }
            }
          }
        }
        return null;
      };

      const isLastInSeries = (id: string): boolean => {
        for (const action of actions) {
          if (action?.singleAction?.id === id) {
            return false;
          }
          const series = action?.actionSeries?.actions;
          if (series?.length) {
            if (series[series.length - 1].id === id) {
              return true;
            }
          }
        }
        return false;
      };

      const getCurrentInSeries = (
        action: SingleActionOrSeries
      ): SingleAction | null => {
        const series: SingleAction[] | undefined = action.actionSeries?.actions;
        if (!series) {
          return null;
        }
        for (const curSingleAction of series) {
          if (!curSingleAction.endDate) {
            return curSingleAction;
          }
        }
        return null;
      };

      // we render the list of actions by mapping them to either single or series action cards.
      // these are placed inside animatable views so we can condense their height when they're completed
      // or expand their height when they're added to the screen (as well as fading in and out)
      return (
        <View
          style={
            optionalBottomPadding && actions.length
              ? { paddingBottom: optionalBottomPadding }
              : {}
          }
        >
          <Collapsible collapsed={!showError || noDisplay} duration={700}>
            <Callout
              intent="danger"
              title={errorTitleDescriptor}
              description={errorDescriptionDescriptor}
              secondaryActionProps={{
                onPress: () => {
                  // retry fetching
                  setShowError(false);
                  initActionList();
                },
                labelMessage: errorButtonDescriptor,
              }}
              style={{ flexBasis: "auto", marginTop: 16 }}
            />
          </Collapsible>
          <Collapsible
            collapsed={!hhBanner || noDisplay}
            duration={700}
            onAnimationEnd={() => {
              if (!hhBanner) {
                setTimeout(scrollToHealthyHabits, 100);
              }
            }}
          >
            <Callout
              intent="success"
              title={messages.newHHTitle}
              description={messages.newHHDescription}
              primaryActionProps={{
                onPress: () => {
                  setHHBanner(false);
                },
                labelMessage: messages.newHHButtonLabel,
              }}
              secondaryActionProps={{
                onPress: () => setHHBanner(false),
                labelMessage: messages.dismiss,
              }}
              style={{ flexBasis: "auto", marginTop: 16 }}
            />
          </Collapsible>
          {actions.map((action) => {
            // single action card
            if (action.singleAction) {
              const singleAction = action.singleAction;
              return (
                <Animated.View
                  key={singleAction.id}
                  style={[
                    { opacity: opacities[singleAction.id] || 0 },
                    // fixes flickering bug
                    faded[singleAction.id] === undefined || noDisplay
                      ? { height: 0.1, overflow: "hidden" }
                      : {},
                  ]}
                >
                  <Collapsible
                    collapsed={!visibleCards[singleAction.id]}
                    onAnimationEnd={displayNextCard}
                    duration={700}
                  >
                    <ActionCard
                      actionCardSingle={{ ...convertAction(singleAction) }}
                      isNew={isNew(singleAction)}
                      context={context}
                    />
                  </Collapsible>
                </Animated.View>
              );
            }
            // action series card
            else if (action.actionSeries) {
              const actionSeries = action.actionSeries.actions;
              // use the last action in the series as our identifier, since that will determine
              // when the series as a whole has been completed
              const lastId = actionSeries[actionSeries.length - 1].id;
              return (
                <Animated.View
                  key={actionSeries[0].id}
                  style={[
                    { opacity: opacities[lastId] || 0 },
                    // fixes flickering bug
                    faded[lastId] === undefined || noDisplay
                      ? { height: 0.1, overflow: "hidden" }
                      : {},
                  ]}
                >
                  <Collapsible
                    collapsed={!visibleCards[lastId]}
                    onAnimationEnd={displayNextCard}
                    duration={700}
                  >
                    <ActionCard
                      actionCardSeries={
                        // convert all the actions in our series into action card objects
                        actionSeries.map((curAction) =>
                          convertAction(
                            curAction,
                            actionSeries,
                            action.actionSeries?.title
                          )
                        )
                      }
                      seriesTitle={action.actionSeries.title}
                      isNew={isNew(actionSeries[0])}
                      // Changes to this property signal the card that its ok to slide. The actual value of this
                      // property doesn't matter, the component is only watching for changes in it
                      slideCards={slideCards}
                      context={context}
                    />
                  </Collapsible>
                </Animated.View>
              );
            }
          })}
        </View>
      );
    }
  );

// an action is new if it was created within the last 3 days
const isNew = (action: SingleAction): boolean => {
  if (action.createdAt) {
    return differenceInDays(action.createdAt, new Date()) < 4;
  } else {
    return false;
  }
};

/* eslint-enable react-hooks/rules-of-hooks */
