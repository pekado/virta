import * as React from "react";
import { Input } from "@virtahealth/components";
import { ScreenProps, InputScreen, saveButtonDescriptor } from "./InputScreen";

const goalPlaceholderDescriptor = {
  id: "patientProfileGoalPlaceholder",
  defaultMessage: "Enter your personal goal",
  description: "Personal goal placholder in patient profile",
};

export const PersonalGoalScreen: React.FunctionComponent<ScreenProps> = (
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
          placeholderMessage={goalPlaceholderDescriptor}
          value={value}
          multiline
          numberOfLines={3}
          onChangeText={(val) => {
            setValue(val);
          }}
        />
      }
    />
  );
};
