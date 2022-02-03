import * as React from "react";
import {
  styled,
  Spacer,
  Row,
  LabeledBasicDropdownField,
  InputField,
  DateInputField,
} from "@virtahealth/components";
import { messages, messageTree } from "@virtahealth/utils";
import { useFormikContext } from "formik";
import { User } from "../utils";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

interface UserInputProps {
  user?: User;
}

interface UserFields {
  values: {
    gender: string;
  };
}

const StyledRow = styled(Row)`
  margin-bottom: 30px;
  width: ${isMobile ? "100%" : "675px"};
`;

export const UserInput: React.FC<UserInputProps> = () => {
  const { values }: UserFields = useFormikContext();

  return (
    <>
      <StyledRow alignItems={"flex-start"}>
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
      </StyledRow>
      <StyledRow alignItems={"flex-start"}>
        <DateInputField
          customValueFormat={"yyyy-MM-dd"}
          helperText={messages.insuranceIssueDateInputPlaceholder}
          labelMessage={messages.dob}
          name="dateOfBirth"
        />
      </StyledRow>
      <StyledRow alignItems={"flex-start"}>
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
      </StyledRow>
    </>
  );
};
