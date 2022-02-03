import * as React from "react";
import { View } from "react-native";
import {
  styled,
  Spacer,
  Body,
  Button,
  CheckedInsuranceCardIcon,
} from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import {
  FINAL_STEPS_LOCATION,
  BI_APPLICATION_LOCATION,
  HH_APPLICATION_LOCATION,
  STAND_ALONE_LOCATION,
} from "../utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";
const PATHNAME = "/eligible";

interface EligibleProps {
  onContinue?: () => void;
  epLocation: string;
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
}

const StyledButtons = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const StyledButton = styled(Button)`
  min-width: 150px;
`;

export const Eligible: React.FC<EligibleProps> = ({
  onContinue,
  epLocation,
  trackPageViewed,
  trackButtonClicked,
}) => {
  React.useEffect(() => {
    trackPageViewed(PATHNAME);
    if (onContinue && epLocation === HH_APPLICATION_LOCATION) {
      onContinue();
    }
  }, []);

  const intl = useIntl();
  const button = () => {
    if (
      epLocation === FINAL_STEPS_LOCATION ||
      epLocation === BI_APPLICATION_LOCATION
    ) {
      return (
        <StyledButtons>
          <StyledButton
            intent="primary"
            testID="continueButton"
            onPress={() => {
              trackButtonClicked(
                PATHNAME,
                epLocation === FINAL_STEPS_LOCATION ? "Back" : "Next"
              );
              onContinue && onContinue();
            }}
            labelMessage={
              epLocation === FINAL_STEPS_LOCATION
                ? messages.back
                : messages.next
            }
          />
        </StyledButtons>
      );
    } else {
      return null;
    }
  };

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.goodNewsCovered)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <Body>
        {epLocation === STAND_ALONE_LOCATION && (
          <>{intl.formatMessage(messages.eligibilityVerified)}</>
        )}
        {epLocation === BI_APPLICATION_LOCATION && (
          <>{intl.formatMessage(messages.eligibilityVerifiedEnrollment)}</>
        )}
        {epLocation === HH_APPLICATION_LOCATION && (
          <>
            <p>{intl.formatMessage(messages.eligibilityVerifiedFinalSteps)}</p>
            <p>
              {intl.formatMessage(
                messages.eligibilityStatusCoveredSecondParagraphNext
              )}
            </p>
          </>
        )}
        {epLocation === FINAL_STEPS_LOCATION && (
          <>{intl.formatMessage(messages.eligibilityVerifiedFinalSteps)}</>
        )}
      </Body>
      <Spacer height={16} />
      <CheckedInsuranceCardIcon />
      <Spacer height={16} />
      {button()}
    </InsuranceHeadingContainer>
  );
};
