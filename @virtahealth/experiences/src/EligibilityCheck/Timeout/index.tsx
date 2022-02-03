import * as React from "react";
import { View } from "react-native";
import { styled, Spacer, Button, Body } from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import {
  FINAL_STEPS_LOCATION,
  STAND_ALONE_LOCATION,
  BI_APPLICATION_LOCATION,
  HH_APPLICATION_LOCATION,
} from "../utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const PATHNAME = "/timeout";

const StyledButtons = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const StyledButton = styled(Button)`
  min-width: 150px;
`;

interface TimeoutProps {
  onContinue?: () => void;
  epLocation: string;
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
}
export const Timeout: React.FC<TimeoutProps> = ({
  onContinue,
  epLocation,
  trackPageViewed,
  trackButtonClicked,
}) => {
  const intl = useIntl();

  React.useEffect(() => {
    trackPageViewed(PATHNAME);
    if (epLocation === HH_APPLICATION_LOCATION && onContinue) {
      onContinue();
    }
  }, []);

  const button = () => {
    if (
      epLocation === FINAL_STEPS_LOCATION ||
      epLocation === BI_APPLICATION_LOCATION
    ) {
      return (
        <StyledButtons>
          <StyledButton
            intent="primary"
            testID="timeoutContinueButton"
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
        {intl.formatMessage(messages.thanksForSubmittingNoName)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <Body>
        {(epLocation === FINAL_STEPS_LOCATION ||
          epLocation === STAND_ALONE_LOCATION) &&
          intl.formatMessage(messages.verifyingCoverageParagraph)}
        {(epLocation === BI_APPLICATION_LOCATION ||
          epLocation === HH_APPLICATION_LOCATION) && (
          <>{intl.formatMessage(messages.timeoutCoverage)}</>
        )}
      </Body>
      <Spacer height={16} />
      {button()}
    </InsuranceHeadingContainer>
  );
};
