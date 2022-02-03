import * as React from "react";
import {
  styled,
  Spacer,
  Body,
  Spinner,
  InsuranceCardIcon,
} from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const SpinnerContainer = styled.View`
  flex-direction: row;
`;

interface Props {
  trackPageViewed: (pathname: string) => void;
}

const PATHNAME = "/polling";

export const Polling: React.FC<Props> = ({ trackPageViewed }) => {
  const intl = useIntl();
  React.useEffect(() => {
    trackPageViewed(PATHNAME);
  }, []);

  return (
    <InsuranceHeadingContainer>
      <SpinnerContainer>
        <Spinner size="small" />
        <Spacer width={16} />
        <InsuranceHeading2>
          {intl.formatMessage(messages.verifyingCoverage)}
        </InsuranceHeading2>
      </SpinnerContainer>
      <Spacer height={16} />
      <Body>{intl.formatMessage(messages.checkingEligibility)}</Body>
      <Spacer height={16} />
      <InsuranceCardIcon />
    </InsuranceHeadingContainer>
  );
};
