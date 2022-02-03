import * as React from "react";
import { Input } from "@virtahealth/components";
import { ScreenProps, InputScreen, saveButtonDescriptor } from "./InputScreen";

const namePlaceholderDescriptor = {
  id: "patientProfileNamePlaceholder",
  defaultMessage: "Enter your preferred name",
  description: "Preferred name placholder in patient profile",
};

export const PreferredNameScreen: React.FunctionComponent<ScreenProps> = (
  props
) => {
  const [value, setValue] = React.useState(props.value);

  return (
    <InputScreen
      disableSave={props.disableSave}
      onPress={() => {
        props.changeValue(value);
      }}
      buttonText={saveButtonDescriptor}
      input={
        <Input
          isThick={true}
          placeholderMessage={namePlaceholderDescriptor}
          value={value}
          onChangeText={(val) => {
            setValue(val);
          }}
        />
      }
    />
  );
};
