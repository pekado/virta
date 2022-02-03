import * as React from "react";
import { View } from "react-native";
import { styled, Spacer, Button, SubstrateBody } from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import { HH_APPLICATION_LOCATION } from "../utils";
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
  }, [epLocation, onContinue, trackPageViewed]);

  const button = (
    <StyledButtons>
      <StyledButton
        intent="secondary"
        testID="timeoutContinueButton"
        onPress={() => {
          trackButtonClicked(PATHNAME, "Next");
          onContinue && onContinue();
        }}
        labelMessage={messages.next}
      />
    </StyledButtons>
  );

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.thanksForSubmittingNoName)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <SubstrateBody size={"small"}>
        <>{intl.formatMessage(messages.timeoutCoverage)}</>
      </SubstrateBody>
      <Spacer height={16} />
      {button}
    </InsuranceHeadingContainer>
  );
};
