import * as React from "react";
import { Body } from "@virtahealth/components";
import { useIntl } from "react-intl";
import {
  ScreenProps,
  InputScreen,
  contactButtonDescriptor,
  CenteredColumn,
  LightTip,
} from "./InputScreen";

const emailTipDescriptor = {
  id: "patientProfileEmailContactSupport",
  defaultMessage: "To change your email, contact support.",
  description:
    "Suggestion to contact support to change email in patient profile",
};

export const EmailScreen: React.FunctionComponent<ScreenProps> = (props) => {
  const intl = useIntl();
  return (
    <InputScreen
      disableSave={props.disableSave}
      onPress={() => {
        props.changeValue("");
      }}
      buttonText={contactButtonDescriptor}
      input={
        <CenteredColumn>
          <Body>{props.value}</Body>
          <LightTip>{intl.formatMessage(emailTipDescriptor)}</LightTip>
        </CenteredColumn>
      }
    />
  );
};
