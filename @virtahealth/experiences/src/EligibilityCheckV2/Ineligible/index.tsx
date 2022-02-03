import * as React from "react";
import { View } from "react-native";
import { styled, Spacer, SubstrateBody, Button } from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
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
  trackPageViewed,
  trackButtonClicked,
}) => {
  const intl = useIntl();

  React.useEffect(() => {
    trackPageViewed(PATHNAME);
  }, [trackPageViewed]);

  const button = () => {
    return (
      <StyledButtons>
        <StyledButton
          width={"wide"}
          intent="secondary"
          testID="continueButton"
          onPress={() => {
            trackButtonClicked(PATHNAME, "Next");
            onContinue && onContinue();
          }}
          labelMessage={messages.next}
        />
      </StyledButtons>
    );
  };

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.lookingIntoIt)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <SubstrateBody size={"small"}>
        {intl.formatMessage(messages.unableToVerifyEligibility)}
      </SubstrateBody>
      <Spacer height={16} />
      {button()}
    </InsuranceHeadingContainer>
  );
};
