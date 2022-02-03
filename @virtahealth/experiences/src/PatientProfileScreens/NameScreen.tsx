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

const nameTipDescriptor = {
  id: "patientProfileNameContactSupport",
  defaultMessage: "To change your name, contact support.",
  description:
    "Suggestion to contact support to change name in patient profile",
};

export const NameScreen: React.FunctionComponent<ScreenProps> = (props) => {
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
          <LightTip>{intl.formatMessage(nameTipDescriptor)}</LightTip>
        </CenteredColumn>
      }
    />
  );
};
