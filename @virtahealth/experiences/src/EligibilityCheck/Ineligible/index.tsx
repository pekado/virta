import * as React from "react";
import { View } from "react-native";
import { styled, Spacer, Body, Button } from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import {
  FINAL_STEPS_LOCATION,
  BI_APPLICATION_LOCATION,
  HH_APPLICATION_LOCATION,
} from "../utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const PATHNAME = "/ineligible";

interface IneligibleProps {
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

export const Ineligible: React.FC<IneligibleProps> = ({
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
        {intl.formatMessage(messages.lookingIntoIt)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <Body>{intl.formatMessage(messages.unableToVerifyEligibility)}</Body>
      <Spacer height={16} />
      {button()}
    </InsuranceHeadingContainer>
  );
};
