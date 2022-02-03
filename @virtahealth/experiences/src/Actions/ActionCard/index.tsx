import * as React from "react";
import { MessageDescriptor, useIntl } from "react-intl";
import {
  styled,
  ArrowRight,
  MenuItemText,
  MenuItemTextBold,
  Button,
  PlayIcon,
  ThemeContext,
  Chiclet,
  ProgressBar,
  VirtaContextComponentsProps,
  VirtaContextComponents,
} from "@virtahealth/components";
import {
  Animated,
  Easing,
  TouchableOpacityProps,
  Platform,
  LayoutChangeEvent,
} from "react-native";
import { primitives } from "@virtahealth/styles";
import { componentId } from "../ActionCardList";

export interface ActionCardProps {
  // Either actionCardSingle or actionCardSeries is required
  // DO NOT pass both
  actionCardSingle?: IndividualActionCardProps;
  actionCardSeries?: Array<IndividualActionCardProps>;
  // If actionCardSeries is passed, so too should seriesTitle
  seriesTitle?: MessageDescriptor;
  isNew?: boolean;
  // cards in action series will not slide unless this is true
  slideCards?: boolean;
  context?: VirtaContextComponentsProps;
}

export interface IndividualActionCardProps {
  title: MessageDescriptor;
  id: string;
  backendId?: string;
  description?: MessageDescriptor;
  timeToComplete?: number;
  onPress: TouchableOpacityProps["onPress"];
  // If toggleComplete is given, the buttons "Mark as Complete" and "Undo" will display based on isComplete
  toggleComplete?: () => void;
  isComplete?: boolean;
  // in order to display a primary button, it must have a label and an onPress action
  primaryButtonLabel?: MessageDescriptor;
  onPressPrimaryButton?: () => void;
  calloutText?: MessageDescriptor;
}

export const undoDescriptor = {
  id: "actionCardUndo",
  defaultMessage: "Undo",
  description: "Undo button label",
};

const newDescriptor = {
  id: "actionCardNew",
  defaultMessage: "NEW",
  description: "Chiclet label indicating this action is new",
};

export const markCompleteDescriptor = {
  id: "actionCardMarkComplete",
  defaultMessage: "Mark as Complete",
  description: "Mark complete button label",
};

const actionsCompletedDescriptor = {
  id: "actionCardProgressActionsCompleted",
  defaultMessage: "{completed} of {total} completed",
  description:
    "Describes how many actions have been completed in a series relative to the total",
};

const minutesToCompleteDescriptor = {
  id: "minutesToComplete",
  defaultMessage: "{minutes} min",
  description: "Describes time to complete an action in minutes",
};

const Container = styled.View`
  border-width: ${({ theme }) => theme.cardBorderThickness}px;
  border-radius: ${({ theme }) => theme.roundedContainerBorderRadius}px;
  border-color: ${({ theme }) => theme.cardBorderColor};
  background-color: ${({ theme }) => theme.defaultBackground};
  max-width: 600px;
  width: 100%;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const FloatingContainer = styled(Animated.View)`
  width: 100%;
  position: relative;
`;

const Column = styled.View`
  flex-direction: column;
  flex-shrink: 10000;
  flex-grow: 1;
  padding-right: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const Row = styled.View`
  flex-direction: row;
  padding-right: 15px;
`;
const ButtonRow = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.optionInputSpacing}px;
  flex-wrap: wrap;
`;
const CalloutRow = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.optionInputSpacing}px;
`;
const ActionCalloutText = styled(MenuItemText)`
  font-weight: ${Platform.OS === "android"
    ? primitives.font.fontWeight7
    : primitives.font.fontWeight6};
  color: ${primitives.color.clorineGreen500};
`;

const ActionCardContentRow = styled(Animated.View)`
  flex-direction: row;
`;

const PrimaryButton = styled(Button)`
  margin-right: ${({ theme }) => theme.standardSpacingSmall}px;
  margin-top: ${({ theme }) => theme.standardSpacingSmall}px;
`;

const SecondaryButton = styled(Button)`
  margin-top: ${({ theme }) => theme.standardSpacingSmall}px;
`;

const AnimatedButtonHolder = styled(Animated.View)`
  overflow: hidden;
`;

const CurrentActionSection = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${({ theme }) => theme.cardPaddingDefault}px;
`;

const TitleTextBold = styled(MenuItemTextBold)`
  font-weight: 700;
`;

const AlignArrow = styled.View`
  justify-content: center;
`;

const ProgressSection = styled.View`
  border-top-width: ${({ theme }) => theme.cardBorderThickness}px;
  border-top-color: ${({ theme }) => theme.cardBorderColor};
  padding: ${({ theme }) => theme.cardPaddingDefault}px;
`;

const SeriesText = styled(MenuItemText)`
  margin-top: ${({ theme }) => theme.standardSpacingSmall}px;
`;

const MenuItemTextWithPadding = styled(MenuItemText)`
  padding-right: ${({ theme }) => theme.standardSpacingMedium}px;
`;

// returns an array where -1 means an action is before the current one, 0 is the current one, and 1 is after
const getActionOrder = (
  actionCardSeries: Array<IndividualActionCardProps> | undefined
) => {
  if (!actionCardSeries) {
    return [];
  }
  let foundFirstIncomplete = false;
  const possibleOrder = actionCardSeries.map((action) => {
    if (action.isComplete) {
      return -1;
    } else {
      if (foundFirstIncomplete) {
        return 1;
      } else {
        foundFirstIncomplete = true;
        return 0;
      }
    }
  });
  // if all actions are completed, we set the last one to be current
  if (!foundFirstIncomplete && actionCardSeries.length) {
    possibleOrder[actionCardSeries.length - 1] = 0;
  }
  return possibleOrder;
};

/**
 * ActionCard is pretty simple when only actionCardSingle is passed. It shows a card with a title, description,
 * primary button (if it has one), mark complete button (if function is passed), arrow, and new flag (if new). When
 * the isComplete function is called, the height of the buttons section lessens to 0 to hide the primary button (won't
 * do this if it has the optional mark complete button)
 *
 * Things get more complicated if its given an actionCardSeries. It has all of the above, plus a progress bar showing
 * how many of these actions have been marked complete. It displays all of the actions in this series at once, however the
 * user can't see any of them except the current one (the first incomplete action in the list). The others float to the left (if complete)
 * and right (if incomplete) of the ActionCard, hidden. Whenever the isComplete props change, the current action will shift to the
 * appropriate side (animate left) while fading out (animate opacity). Simultaniously, the appropriate action (the new first incomplete
 * action) will shift into the center (animate left), while fading in (animate opacity). Whenever these shifts occur, the ActionCard will
 * animate its height to accomidate the new current action (animate height). When the last action in the array is marked complete, it will
 * not fade out or shift (no animation to left or opacity). Because there's no shift, animate height will also not occur. Instead, it will
 * do what an actionCardSingle would do, which is animate the height of the button container in order to hide any primary button if there's
 * no mark complete button.
 */
export const ActionCard: React.FunctionComponent<ActionCardProps> = ({
  actionCardSeries,
  actionCardSingle,
  seriesTitle,
  isNew,
  slideCards,
  context,
}) => {
  const theme = React.useContext(ThemeContext);
  const intl = useIntl();
  let virtaContext = React.useContext(VirtaContextComponents);
  if (context) {
    virtaContext = context;
  }
  const analyticsClient = virtaContext?.analyticsClient;

  // setup the progress section for action series
  let progressCurrent = 0;
  let progressTotal = 0;
  let progressLabel = "";
  if (actionCardSeries?.length) {
    // count up how many actions are completed
    actionCardSeries.forEach((action) =>
      action.isComplete ? progressCurrent++ : null
    );
    progressTotal = actionCardSeries.length;

    if (seriesTitle) {
      progressLabel = intl.formatMessage(seriesTitle);
    }
    progressLabel += "  ·  ";
    progressLabel += intl.formatMessage(actionsCompletedDescriptor, {
      completed: progressCurrent,
      total: progressTotal,
    });
  }

  // setup the animated ActionCardContents (ACCs) for action series
  // init our positions so all ACCs are off-screen
  // init our opacities so all ACCs are invisible
  // init our heights to 0 until ACCs calculate them for us
  const defaultWidth = -10000;
  const [leftPositions, setLeftPositions] = React.useState(
    actionCardSeries?.map(() => new Animated.Value(defaultWidth))
  );
  const [opacities, setOpacities] = React.useState(
    actionCardSeries?.map(() => new Animated.Value(0))
  );
  const [heights, setHeights] = React.useState<number[]>(
    actionCardSeries?.map(() => 0) || []
  );
  const [animatedHeight] = React.useState(new Animated.Value(100));
  const [containerWidth, setContainerWidth] = React.useState(defaultWidth);
  const order = getActionOrder(actionCardSeries);
  // Keep track of which actions we've logged view events for
  const loggedViewedActions: string[] = React.useRef([]).current;

  // on our first render, the container's width will be calculated and we can set the positions of all ACC correctly
  // use this opportunity to set opacities correctly too
  const calculateAnimatedValues = (newContainerWidth: number) => {
    if (containerWidth == newContainerWidth) {
      return;
    }
    setContainerWidth(newContainerWidth);
    setLeftPositions(
      actionCardSeries?.map((_action, index) => {
        const baseLeft = -newContainerWidth * index;
        if (order[index] < 0) {
          // action already completed, hide this to the right of our container
          return new Animated.Value(baseLeft + newContainerWidth);
        } else if (order[index] > 0) {
          // action incomplete but is not current action, hide this to the left of our container
          return new Animated.Value(baseLeft - newContainerWidth);
        } else {
          // action incomplete and is our current action, display inside container
          return new Animated.Value(baseLeft);
        }
      })
    );
    setOpacities(
      actionCardSeries?.map((_action, index) => {
        if (order[index] !== 0) {
          // action is not our current action, make it invisible
          return new Animated.Value(0);
        } else {
          // action is our current action, make visible
          return new Animated.Value(1);
        }
      })
    );
    // tell analytics of our displayed starting action in series. Use setTimeout to avoid performance issues
    actionCardSeries?.forEach((action, index) => {
      if (order[index] === 0 && !loggedViewedActions.includes(action.id)) {
        loggedViewedActions.push(action.id);
        setTimeout(() => {
          analyticsClient?.logViewEvent?.("Action Card Viewed", {
            screen_name: componentId,
            screen_path: componentId,
            action_id: action.backendId,
            content_id: action.id,
            action_title: String(action.title.defaultMessage),
            // This long timeout is to make sure all other action card animations have finished
          });
        }, 10000);
      }
    });
  };

  // also on our first render we'll find out the height of each of our ACC. record them
  const setSingleHeight = (index: number, height: number) => {
    const setStateFun: React.SetStateAction<Array<number>> = (realHeights) => {
      const newHeights = realHeights ? [...realHeights] : [];
      if (index > newHeights.length - 1) {
        return realHeights;
      }
      newHeights[index] = height;
      return newHeights;
    };
    setHeights(setStateFun);
    // if we're currently showing the given index, set our current height to its height
    if (order.indexOf(0) == index) {
      animatedHeight.setValue(height);
    }
  };

  // watch to see if any of our "isComplete" props changed on IndividualActionCards
  // if so, and we're told we're allowed to with slideCards, animate the ACCs sliding
  const isCompleteList = actionCardSeries?.map((action) => action.isComplete);
  isCompleteList?.push(slideCards);
  React.useEffect(() => {
    if (!slideCards) {
      return;
    }
    // dont run before the containerWidth has been set
    if (containerWidth == defaultWidth) {
      return;
    }
    if (!leftPositions || !opacities || !heights) {
      return;
    }
    const animations: Array<Animated.CompositeAnimation> = [];
    const easing = Easing.inOut(Easing.quad);
    // go through the 3 possibly affected ACCs and animate them to where they should be
    const indexLastCompleted = order.lastIndexOf(-1);
    const indexFirstIncomplete = order.indexOf(1);
    const indexCurrent = order.indexOf(0);
    let baseLeft;
    if (indexLastCompleted > -1) {
      baseLeft = -containerWidth * indexLastCompleted;
      // action already completed, hide this to the right of our container and make invisible
      animations.push(
        Animated.timing(leftPositions[indexLastCompleted], {
          toValue: baseLeft + containerWidth,
          duration: 750,
          useNativeDriver: true,
          easing,
        })
      );
      animations.push(
        Animated.timing(opacities[indexLastCompleted], {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        })
      );
    }
    if (indexFirstIncomplete > -1) {
      baseLeft = -containerWidth * indexFirstIncomplete;
      // action incomplete but is not current action, hide this to the left of our container and make invisible
      animations.push(
        Animated.timing(leftPositions[indexFirstIncomplete], {
          toValue: baseLeft - containerWidth,
          duration: 750,
          useNativeDriver: true,
          easing,
        })
      );
      animations.push(
        Animated.timing(opacities[indexFirstIncomplete], {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        })
      );
    }
    if (indexCurrent > -1) {
      baseLeft = -containerWidth * indexCurrent;
      // action incomplete and is our current action, display inside container and make visible
      animations.push(
        Animated.timing(leftPositions[indexCurrent], {
          toValue: baseLeft,
          duration: 750,
          useNativeDriver: true,
          easing,
        })
      );
      animations.push(
        Animated.timing(opacities[indexCurrent], {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      );
      // we cannot animate heights using the native driver, so start this one seperately
      Animated.timing(animatedHeight, {
        toValue: heights[indexCurrent],
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    Animated.parallel(animations, { stopTogether: false }).start(() => {
      // tell analytics we displayed the next card
      if (actionCardSeries?.[indexCurrent]) {
        const actionAsSingle: IndividualActionCardProps =
          actionCardSeries[indexCurrent];
        if (!loggedViewedActions.includes(actionAsSingle.id)) {
          loggedViewedActions.push(actionAsSingle.id);
          analyticsClient?.logViewEvent?.("Action Card Viewed", {
            screen_name: componentId,
            screen_path: componentId,
            action_id: actionAsSingle.backendId,
            content_id: actionAsSingle.id,
            action_title: String(actionAsSingle.title.defaultMessage),
          });
        }
      }
    });
  }, isCompleteList);

  // render time
  return (
    // keep up-to-date about the container's width so we can slide our action cards (if we have a series) the proper amount to the right/left
    <Container
      onLayout={(event) => {
        calculateAnimatedValues(
          event.nativeEvent.layout.width - 2 * theme.cardBorderThickness
        );
      }}
    >
      {isNew && (
        <Chiclet
          color={"orange"}
          label={intl.formatMessage(newDescriptor)}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            paddingTop: theme.chicletLargePaddingVerticle,
            paddingBottom: theme.chicletLargePaddingVerticle,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopRightRadius: theme.roundedContainerBorderRadius - 2,
            marginTop: 0,
          }}
          labelStyle={{ fontWeight: "bold" }}
        />
      )}
      <ActionCardContentRow style={{ height: animatedHeight }}>
        {actionCardSingle && (
          <ActionCardContent
            {...actionCardSingle}
            onLayout={(event) =>
              animatedHeight.setValue(event.nativeEvent.layout.height)
            }
          />
        )}
        {actionCardSeries?.map((currentAction, index) => (
          <ActionCardContent
            {...currentAction}
            key={currentAction.id}
            left={leftPositions && leftPositions[index]}
            opacity={opacities && opacities[index]}
            onLayout={(event) =>
              setSingleHeight(index, event.nativeEvent.layout.height)
            }
            notLast={index < actionCardSeries.length - 1}
          />
        ))}
      </ActionCardContentRow>
      {actionCardSeries && (
        <ProgressSection>
          <ProgressBar
            current={progressCurrent}
            total={progressTotal}
            style={{ width: "100%" }}
            colorInProgress={theme.greenProgress}
          />
          <SeriesText textSize={"Small"} lightSubtitleValue={true}>
            {progressLabel}
          </SeriesText>
        </ProgressSection>
      )}
    </Container>
  );
};

interface ActionCardContentProps extends IndividualActionCardProps {
  left?: Animated.Value;
  opacity?: Animated.Value;
  onLayout?: (event: LayoutChangeEvent) => void;
  notLast?: boolean;
}

const ActionCardContent: React.FunctionComponent<ActionCardContentProps> = ({
  title,
  description,
  timeToComplete,
  onPress,
  toggleComplete,
  isComplete,
  primaryButtonLabel,
  onPressPrimaryButton,
  left = 0,
  opacity = 1,
  onLayout,
  notLast,
  calloutText,
}) => {
  // Multi-line titles sometimes fluctuate height while first rendering, which
  // can cause our parent to render us smaller than it should. This is a hack to fix that
  const [minHeight, setMinHeight] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const theme = React.useContext(ThemeContext);
  const intl = useIntl();

  const timePortion = timeToComplete
    ? intl.formatMessage(minutesToCompleteDescriptor, {
        minutes: timeToComplete,
      })
    : "";
  const descriptionPortion = description ? intl.formatMessage(description) : "";
  const dotPortion = descriptionPortion && timePortion ? " · " : "";
  const timeDescriptionMessage = {
    id: "timeDescriptionMessage",
    defaultMessage: `${timePortion}${dotPortion}${descriptionPortion}`,
  };

  // if this action is to watch a video, show the play icon in its primary button
  let watchIcon;
  if (primaryButtonLabel?.defaultMessage === "Watch") {
    watchIcon = {
      iconBefore: <PlayIcon />,
    };
  } else {
    watchIcon = {};
  }

  // if we finish this action card / series and its only (primary) button disappears, we want
  // the height to gradually shrink to 0
  const [shrinkHeight, setShrinkHeight] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    if (!toggleComplete && primaryButtonLabel && isComplete && !notLast) {
      setAnimating(true);
      Animated.timing(shrinkHeight, {
        toValue: 0,
        duration: 750,
        useNativeDriver: false,
      }).start();
    }
  }, [isComplete]);

  return (
    <FloatingContainer style={{ transform: [{ translateX: left }], opacity }}>
      <CurrentActionSection
        onPress={onPress}
        onLayout={(e) => {
          if (onLayout) {
            onLayout(e);
          }
          if (e.nativeEvent.layout.height > minHeight) {
            setMinHeight(e.nativeEvent.layout.height);
          }
        }}
        style={{ minHeight: animating ? 0 : minHeight }}
      >
        <Column>
          <TitleTextBold
            message={title}
            hasStrike={isComplete}
            textSize={"Large"}
          />
          <Row>
            <MenuItemTextWithPadding
              message={timeDescriptionMessage}
              textSize={"Small"}
              numberOfLines={1}
              lightSubtitleValue={true}
            />
          </Row>
          <ButtonRow>
            {primaryButtonLabel &&
              onPressPrimaryButton &&
              (!toggleComplete || !isComplete) && (
                <AnimatedButtonHolder style={{ height: shrinkHeight }}>
                  <PrimaryButton
                    onLayout={(event) =>
                      setShrinkHeight(
                        new Animated.Value(
                          event.nativeEvent.layout.height +
                            theme.standardSpacingSmall
                        )
                      )
                    }
                    labelMessage={primaryButtonLabel}
                    onPress={onPressPrimaryButton}
                    intent={"secondary"}
                    size={"small"}
                    labelStyle={{
                      fontSize: theme.textBodySpacedSmallFontSize,
                      lineHeight: theme.textBodySpacedSmallFontSize,
                    }}
                    {...watchIcon}
                  />
                </AnimatedButtonHolder>
              )}
            {toggleComplete && (
              <SecondaryButton
                labelMessage={
                  isComplete ? undoDescriptor : markCompleteDescriptor
                }
                onPress={toggleComplete}
                intent={"secondary"}
                size={"small"}
                labelStyle={{
                  fontSize: theme.textBodySpacedSmallFontSize,
                  lineHeight: theme.textBodySpacedSmallFontSize,
                }}
                appearance={"outline"}
              />
            )}
          </ButtonRow>
          {calloutText ? (
            <CalloutRow>
              <ActionCalloutText message={calloutText} textSize="Small" />
            </CalloutRow>
          ) : null}
        </Column>
        {!isComplete && (
          <AlignArrow>
            <ArrowRight />
          </AlignArrow>
        )}
      </CurrentActionSection>
    </FloatingContainer>
  );
};
