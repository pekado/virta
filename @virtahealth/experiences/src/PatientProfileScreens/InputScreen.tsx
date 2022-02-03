import * as React from "react";
import { MessageDescriptor } from "react-intl";
import { Button, styled, BodySpaced, ErrorText } from "@virtahealth/components";

export const saveButtonDescriptor = {
  id: "patientProfileSave",
  defaultMessage: "Save",
  description: "Save button in patient profile",
};

export const contactButtonDescriptor = {
  id: "patientProfileContactSupport",
  defaultMessage: "Contact Support",
  description: "Contact support button in patient profile",
};

export const phoneExampleDescriptor = {
  id: "patientProfilePhoneExample",
  defaultMessage: "Example: 408-175-3857",
  description: "Example phone number in patient profile",
};

export interface ScreenProps {
  value: string;
  changeValue: (value: string) => void;
  disableSave: boolean;
}

export interface InputProps {
  input: React.ReactNode;
  buttonText: MessageDescriptor;
  onPress: () => void;
  disableSave: boolean;
}

export const StyledError = styled(ErrorText)`
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-left: ${({ theme }) => theme.standardSpacingSmall}px;
  font-size: ${({ theme }) => theme.textBodyFontSize}px;
`;

export const AutoCompleteContainer = styled.View`
  z-index: 10;
`;

export const CenteredColumn = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const LightTip = styled(BodySpaced)`
  color: ${({ theme }) => theme.textHelperTextColor};
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-bottom: -10px;
`;

const StyledColumn = styled.View`
  flex-direction: column;
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-left: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-right: ${({ theme }) => theme.standardSpacingMedium}px;
`;
const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  z-index: -1;
`;

export const InputScreen: React.FunctionComponent<InputProps> = (props) => {
  return (
    <StyledColumn>
      {props.input}
      <StyledButton
        disabled={props.disableSave}
        labelMessage={props.buttonText}
        onPress={props.onPress}
        intent={"secondary"}
        labelStyle={{ fontSize: 16 }}
      />
    </StyledColumn>
  );
};
