import * as React from "react";
import { View } from "react-native";
import {
  styled,
  Spacer,
  Button,
  CheckedInsuranceCardIcon,
  SubstrateBody,
} from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import {
  FINAL_STEPS_LOCATION,
  BI_APPLICATION_LOCATION,
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

const CenteredView = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
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
  }, [trackPageViewed]);

  const intl = useIntl();
  const button = () => {
    return (
      <StyledButtons>
        <StyledButton
          intent="secondary"
          width={"wide"}
          testID="continueButton"
          onPress={() => {
            trackButtonClicked(PATHNAME, "Continue");
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
        {intl.formatMessage(messages.goodNewsCovered)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <SubstrateBody size={"small"}>
        {epLocation === STAND_ALONE_LOCATION && (
          <>{intl.formatMessage(messages.eligibilityVerified)}</>
        )}
        {epLocation === BI_APPLICATION_LOCATION && (
          <>{intl.formatMessage(messages.eligibilityVerifiedEnrollment)}</>
        )}
        <>
          <p>{intl.formatMessage(messages.eligibilityVerifiedFinalSteps)}</p>
          <p>
            {intl.formatMessage(
              messages.eligibilityStatusCoveredSecondParagraphNext
            )}
          </p>
        </>
        {epLocation === FINAL_STEPS_LOCATION && (
          <>{intl.formatMessage(messages.eligibilityVerifiedFinalSteps)}</>
        )}
      </SubstrateBody>
      <Spacer height={16} />
      <CenteredView>
        <CheckedInsuranceCardIcon height={126} width={184} />
      </CenteredView>
      <Spacer height={16} />
      {button()}
    </InsuranceHeadingContainer>
  );
};
