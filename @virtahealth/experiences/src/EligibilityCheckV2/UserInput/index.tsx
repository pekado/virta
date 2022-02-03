import * as React from "react";
import {
  Spacer,
  LabeledBasicDropdownField,
  InputField,
  DateInputField,
} from "@virtahealth/components";
import { messages, messageTree } from "@virtahealth/utils";
import { useFormikContext } from "formik";
import { User } from "../utils";

interface UserInputProps {
  user?: User;
}

interface UserFields {
  values: {
    gender: string;
  };
}

export const UserInput: React.FC<UserInputProps> = () => {
  const { values }: UserFields = useFormikContext();

  return (
    <>
      <InputField
        testID="firstName"
        name="firstName"
        helperText={messages.legalFName}
        labelMessage={messages.firstName}
        placeholderMessage={messages.insuranceMemberInputPlaceholder}
      />
      <Spacer width={30} />
      <InputField
        testID="lastName"
        name="lastName"
        helperText={messages.legalLName}
        labelMessage={messages.lastName}
        placeholderMessage={messages.insuranceMemberInputPlaceholder}
      />
      <DateInputField
        customValueFormat={"yyyy-MM-dd"}
        helperText={messages.insuranceIssueDateInputPlaceholder}
        labelMessage={messages.dob}
        name="dateOfBirth"
      />
      <LabeledBasicDropdownField
        editable={false}
        overlap={false}
        name="gender"
        options={[
          {
            value: "f",
            label: messageTree.common.profile.female,
          },
          {
            value: "m",
            label: messageTree.common.profile.male,
          },
          {
            value: "o",
            label: messageTree.common.profile.other,
          },
        ]}
        fieldName="gender"
        labelMessage={messageTree.common.profile.gender}
        placeholderMessage={messageTree.common.profile.select}
      />
      <Spacer width={30} />
      {values.gender === "o" && (
        <LabeledBasicDropdownField
          editable={false}
          overlap={false}
          name="sexAtBirth"
          options={[
            {
              value: "f",
              label: messageTree.common.profile.female,
            },
            {
              value: "m",
              label: messageTree.common.profile.male,
            },
          ]}
          fieldName="sexAtBirth"
          labelMessage={messageTree.common.profile.sexAtBirth}
          placeholderMessage={messageTree.common.profile.select}
        />
      )}
    </>
  );
};
