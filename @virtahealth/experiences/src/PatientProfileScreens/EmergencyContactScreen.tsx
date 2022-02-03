import * as React from "react";
import {
  Input,
  LabeledFormElement,
  styled,
  PhoneInput,
} from "@virtahealth/components";
import { View } from "react-native";
import {
  InputScreen,
  saveButtonDescriptor,
  phoneExampleDescriptor,
} from "./InputScreen";

const contactNameExampleDescriptor = {
  id: "patientProfileContactNameExample",
  defaultMessage: "Example: Jane Doe",
  description: "Example emergency contact name in patient profile",
};

const relationshipExampleDescriptor = {
  id: "patientProfileRelationshipExample",
  defaultMessage: "Example: Sister",
  description: "Example emergency contact relationship in patient profile",
};

const contactNameDescriptor = {
  id: "patientProfileContactNameLabel",
  defaultMessage: "Name",
  description: "Emergency contact name label in patient profile",
};

const contactPhoneDescriptor = {
  id: "patientProfileContactPhoneLabel",
  defaultMessage: "Phone",
  description: "Emergency contact phone label in patient profile",
};

const contactRelationshipDescriptor = {
  id: "patientProfileContactRelationshipLabel",
  defaultMessage: "Relationship",
  description: "Emergency contact relationship label in patient profile",
};

export interface ContactScreenProps {
  value: ContactObject;
  changeValue: (value: ContactObject) => void;
  disableSave: boolean;
}

export interface ContactObject {
  name: string;
  phone: string;
  relationship: string;
}
const StyledLabelFormElement = styled(LabeledFormElement)`
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
`;

export const EmergencyContactScreen: React.FunctionComponent<ContactScreenProps> =
  (props) => {
    const [name, setName] = React.useState(props.value.name);
    const [phone, setPhone] = React.useState(props.value.phone);
    const [relationship, setRelationship] = React.useState(
      props.value.relationship
    );

    return (
      <InputScreen
        disableSave={props.disableSave}
        onPress={() => {
          props.changeValue({ name, phone, relationship });
        }}
        buttonText={saveButtonDescriptor}
        input={
          <View>
            <LabeledFormElement
              labelMessage={contactNameDescriptor}
              isLarge={true}
            >
              <Input
                isThick={true}
                placeholderMessage={contactNameExampleDescriptor}
                value={name}
                onChangeText={(val) => {
                  setName(val);
                }}
              />
            </LabeledFormElement>
            <StyledLabelFormElement
              labelMessage={contactRelationshipDescriptor}
              isLarge={true}
            >
              <Input
                isThick={true}
                placeholderMessage={relationshipExampleDescriptor}
                value={relationship}
                onChangeText={(val) => {
                  setRelationship(val);
                }}
              />
            </StyledLabelFormElement>
            <StyledLabelFormElement
              labelMessage={contactPhoneDescriptor}
              isLarge={true}
            >
              <PhoneInput
                isThick={true}
                placeholderMessage={phoneExampleDescriptor}
                value={phone}
                onChangeText={(val) => {
                  setPhone(val);
                }}
              />
            </StyledLabelFormElement>
          </View>
        }
      />
    );
  };
