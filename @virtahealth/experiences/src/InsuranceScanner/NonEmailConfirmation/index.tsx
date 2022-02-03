import * as React from "react";
import { Body, HelperText, Spacer } from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { useIntl } from "react-intl";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

export const NonEmailConfirmation = () => {
  const intl = useIntl();
  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.nonEmailConfirmationHeader)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <Body>{intl.formatMessage(messages.nonEmailConfirmationBody)}</Body>
      <Spacer height={8} />
      <Body>{intl.formatMessage(messages.nonEmailConfirmationBodytwo)}</Body>
      <Spacer height={8} />
      <HelperText>
        {intl.formatMessage(messages.nonEmailConfirmationSubBody)}
      </HelperText>
      <Spacer height={16} />
    </InsuranceHeadingContainer>
  );
};
