import * as React from "react";
import { PhoneInput } from "@virtahealth/components";
import {
  ScreenProps,
  InputScreen,
  saveButtonDescriptor,
  phoneExampleDescriptor,
} from "./InputScreen";

export const PhoneScreen: React.FunctionComponent<ScreenProps> = (props) => {
  const [value, setValue] = React.useState(props.value);

  return (
    <InputScreen
      disableSave={props.disableSave}
      onPress={() => {
        props.changeValue(value);
      }}
      buttonText={saveButtonDescriptor}
      input={
        <PhoneInput
          isThick={true}
          placeholderMessage={phoneExampleDescriptor}
          value={value}
          onChangeText={(val) => {
            setValue(val);
          }}
        />
      }
    />
  );
};
