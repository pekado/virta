import {
  styled,
  Heading3,
  Heading4,
  ProgressBar,
  BodySpaced,
  PlayIcon,
  Button,
  CopyIcon,
  VideoIcon,
  ReadingIcon,
  ThemeContext,
  TaskIcon,
  TipIcon,
  QuizIcon,
  css,
} from "@virtahealth/components";
import * as React from "react";
import { View, ScrollView } from "react-native";
import { MessageDescriptor, useIntl } from "react-intl";
import { SingleAction } from "@virtahealth/utils";
import { markCompleteDescriptor, undoDescriptor } from "../ActionCard";

interface DetailsProps {
  action: SingleAction;
  isComplete: boolean;
  goToLink?: (link: string, action: SingleAction) => void;
  toggleComplete?: () => void;
  actionSeriesDetails?: {
    title: MessageDescriptor;
    totalActions: number;
    completedActions: number;
  };
}

const whenDescriptor = {
  id: "actionDetailsWhenHeader",
  defaultMessage: "When",
  description:
    "Header for block describing when an action should be completed in action details",
};

const seriesProgressDescriptor = {
  id: "actionDetailsSeriesProgress",
  defaultMessage: "{completed} of {total} completed in this series",
  description:
    "Describes a user's progress in a series beneath the progress bar in action details",
};

const StyledScrollView = styled(ScrollView)`
  padding: ${({ theme }) => theme.standardSpacingMedium}px;
  padding-top: ${({ theme }) => theme.standardSpacingLarge}px;
  height: 100%;
`;

const Row = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const CenteredRow = styled(Row)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CenteredHeader = styled(Heading3)<Pick<DetailsProps, "isComplete">>`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: ${({ theme }) => theme.textHeading1FontWeight};
  ${({ isComplete, theme }) =>
    isComplete
      ? css`
          color: ${theme.textColorDisabled};
          text-decoration-line: line-through;
        `
      : ""}
`;

const LightText = styled(BodySpaced)`
  color: ${({ theme }) => theme.textColorSubtitle};
  padding-left: ${({ theme }) => theme.standardSpacingSmall}px;
  font-weight: ${({ theme }) => theme.textHelperTextFontWeight};
`;

const LargeLightText = styled(LightText)`
  font-size: ${({ theme }) => theme.textLabelLargeFontSize}px;
`;

const Paragraph = styled(BodySpaced)`
  font-size: ${({ theme }) => theme.textBodySmallFontSize}px;
`;

const WhatSection = styled(Paragraph)`
  margin-top: ${({ theme }) => theme.standardSpacingLarge}px;
`;

const SectionHeader = styled(Heading4)`
  margin-top: ${({ theme }) => theme.standardSpacingLarge}px;
  font-weight: ${({ theme }) => theme.textHeading2FontWeight};
`;

const PrimaryButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const StyledProgressBar = styled(ProgressBar)`
  margin-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const BottomSection = styled.View`
  margin-top: auto;
  padding: ${({ theme }) => theme.standardSpacingMedium}px;
  border-top-width: ${({ theme }) => theme.dividerDefaultThickness}px;
  border-top-color: ${({ theme }) => theme.dividerColor};
`;

export const ActionDetails: React.FC<DetailsProps> = ({
  action,
  actionSeriesDetails,
  toggleComplete,
  goToLink,
  isComplete,
}) => {
  const intl = useIntl();
  const theme = React.useContext(ThemeContext);
  // if this action is to watch a video, show the play icon in its primary button
  let watchIcon;
  if (action.ctaLabel?.defaultMessage === "Watch") {
    watchIcon = {
      iconBefore: <PlayIcon />,
    };
  } else {
    watchIcon = {};
  }

  return (
    <View>
      <StyledScrollView showsVerticalScrollIndicator={false}>
        <CenteredHeader message={action.title} isComplete={isComplete} />
        {action.timeToComplete && (
          <CenteredRow>
            {getIcon(action.actionType)}
            <LargeLightText>
              {intl.formatMessage(getTime(action.actionType), {
                time: action.timeToComplete,
              })}
            </LargeLightText>
          </CenteredRow>
        )}
        {actionSeriesDetails && (
          <View>
            <SectionHeader message={actionSeriesDetails.title} />
            <StyledProgressBar
              total={actionSeriesDetails.totalActions}
              current={actionSeriesDetails.completedActions}
              colorInProgress={theme.greenProgress}
            />
            <Row>
              <CopyIcon />
              <LightText>
                {intl.formatMessage(seriesProgressDescriptor, {
                  completed: actionSeriesDetails.completedActions,
                  total: actionSeriesDetails.totalActions,
                })}
              </LightText>
            </Row>
          </View>
        )}
        {action.whatDetails && <WhatSection message={action.whatDetails} />}
        {action.whenDetails && (
          <View>
            <SectionHeader message={whenDescriptor} />
            <Paragraph message={action.whenDetails} />
          </View>
        )}
      </StyledScrollView>
      <BottomSection>
        {action.ctaLabel && goToLink && action.ctaLink && (
          <PrimaryButton
            labelMessage={action.ctaLabel}
            onPress={() => goToLink(action.ctaLink || "", action)}
            intent={"secondary"}
            {...watchIcon}
          />
        )}
        {toggleComplete && (
          <Button
            labelMessage={isComplete ? undoDescriptor : markCompleteDescriptor}
            onPress={toggleComplete}
            intent={isComplete ? "none" : "secondary"}
            appearance={"outline"}
          />
        )}
      </BottomSection>
    </View>
  );
};

const getIcon = (actionType: SingleAction["actionType"]): React.ReactNode => {
  switch (actionType) {
    case "video":
      return (
        <View style={{ marginRight: 8 }}>
          <VideoIcon />
        </View>
      );
    case "article":
      return (
        <View style={{ marginRight: 8 }}>
          <ReadingIcon />
        </View>
      );
    case "tip":
      return (
        <View style={{ marginRight: 8 }}>
          <TipIcon />
        </View>
      );
    case "quiz":
      return (
        <View style={{ marginRight: 8 }}>
          <QuizIcon />
        </View>
      );
    default:
      return (
        <View style={{ marginRight: 8 }}>
          <TaskIcon />
        </View>
      );
  }
};

const getTime = (actionType: SingleAction["actionType"]): MessageDescriptor => {
  const genericDescriptor = {
    id: "genericTimeToComplete",
    defaultMessage: `{time} {time, plural,
      one {minute}
      other {minutes}
    } to complete`,
  };
  switch (actionType) {
    case "video":
      return {
        id: "videoTimeToComplete",
        defaultMessage: "{time} minute watch",
      };
    case "article":
      return {
        id: "articleTimeToComplete",
        defaultMessage: "{time} minute read",
      };
    case "task":
      return genericDescriptor;
    case "tip":
      return genericDescriptor;
    case "quiz":
      return genericDescriptor;
    default:
      return genericDescriptor;
  }
};
