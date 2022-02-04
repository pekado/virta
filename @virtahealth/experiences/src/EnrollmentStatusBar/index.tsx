import { keys } from "lodash";
import * as React from "react";
import { MessageDescriptor, useIntl } from "react-intl";
import { View, useWindowDimensions } from "react-native";
import {
  ActiveCheckmarkPathIcon,
  Body,
  ChecklistIcon,
  IconClipboard,
  IconForm,
  IconHeadset,
  Spacer,
  styled,
  WarningIcon,
} from "@virtahealth/components";
import { primitives } from "@virtahealth/styles";
import { messageTree } from "@virtahealth/utils";

const MOBILE_STANDARD_BREAKPOINT = 530;

export const ACTIVE = "active";
export const PENDING = "pending";
export const COMPLETE = "complete";

type StepType = typeof ACTIVE | typeof PENDING | typeof COMPLETE;

export interface Steps {
  getStarted?: StepType;
  scheduleIntake?: StepType;
  healthHistory?: StepType;
  finalSteps?: StepType;
}

// Step names
const GET_STARTED = "getStarted";
const SCHEDULE_INTAKE = "scheduleIntake";
const HEALTH_HISTORY = "healthHistory";
const FINAL_STEPS = "finalSteps";

const stepToName: Record<string, string> = {
  getStarted: GET_STARTED,
  scheduleIntake: SCHEDULE_INTAKE,
  healthHistory: HEALTH_HISTORY,
  finalSteps: FINAL_STEPS,
};

const stepToMessage: Record<string, MessageDescriptor> = {
  getStarted: messageTree.enrollment.leadCapture.getStarted,
  scheduleIntake: messageTree.enrollment.intakeScheduling.scheduleIntake,
  healthHistory: messageTree.enrollment.aboutYou1.healthHistory,
  finalSteps: messageTree.enrollment.finalSteps.finalSteps,
};

export interface EnrollmentStatusBarProps {
  steps: Steps;
}

const StyledRow = styled(View) <{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  ${({ isLast }) => !isLast && `margin-right: 16px;`}
`;

const StyledBody = styled(Body) <{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.buttonSmallTextFontSize};
`;

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EnrollmentStatusBar: React.FunctionComponent<EnrollmentStatusBarProps> =
  ({ steps }) => {
    const intl = useIntl();
    const { width: screenWidth } = useWindowDimensions();
    const isScreenSmall = screenWidth <= MOBILE_STANDARD_BREAKPOINT;

    const getIcon = (stepStatus: string, stepName: string) => {
      if (stepStatus === COMPLETE) {
        return <ActiveCheckmarkPathIcon width={32} height={32} />;
      }
      if (stepName === GET_STARTED) {
        return <IconForm color={bodyColor(stepStatus)} />;
      } else if (stepName === SCHEDULE_INTAKE) {
        return <IconHeadset color={bodyColor(stepStatus)} />;
      } else if (stepName === HEALTH_HISTORY) {
        return <IconClipboard color={bodyColor(stepStatus)} />;
      } else if (stepName === FINAL_STEPS) {
        return (
          <ChecklistIcon height={27} width={27} color={bodyColor(stepStatus)} />
        );
      } else {
        // should never happen, signals that something is wrong
        return <WarningIcon />;
      }
    };

    const bodyColor = (stepStatus: string) => {
      if (stepStatus === ACTIVE) {
        return primitives.color.oxygenBlue700;
      } else {
        return primitives.color.carbonGray700;
      }
    };

    const getRow = (
      icon: JSX.Element,
      message: MessageDescriptor,
      state: string,
      index: number,
      isLast: boolean
    ) => {
      return (
        <StyledRow isLast={isLast} key={index}>
          {icon}
          {!isScreenSmall && (
            <>
              <Spacer height={8} />
              <StyledBody color={bodyColor(state)}>
                {intl.formatMessage(message)}
              </StyledBody>
            </>
          )}
        </StyledRow>
      );
    };

    return (
      <StyledView>
        {keys(steps).map((s, idx) =>
          getRow(
            getIcon((steps as Record<string, StepType>)[s], stepToName[s]),
            stepToMessage[s],
            (steps as Record<string, StepType>)[s],
            idx,
            idx + 1 === keys(steps).length
          )
        )}
      </StyledView>
    );
  };
