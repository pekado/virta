import * as React from "react";
import { View } from "react-native";
import {
  styled,
  Spacer,
  ErrorText,
  ButtonRadioInput,
  Button,
  Body,
  HelperText,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { MessageDescriptor, useIntl } from "react-intl";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const BoxedLabel = styled(View)`
  border: 1px solid #d6d9dd;
  border-radius: 4px;
  width: 335px;
  height: 140px;
  background-color: white;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: center;
  padding: 0 16px 0 16px;
`;

const StyledButtons = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const StyledButton = styled(Button)`
  min-width: 150px;
`;

const InnerContainer = styled(View)`
  width: 335px;
`;

const options = [
  {
    labelMessage: {
      id: "pages.applynoaccount.basicinformation.primaryinsurance.primaryinsuanceoptionyes",
      description: "Primary insurance option",
      defaultMessage: "Yes",
    },
    value: "yes",
  },
  {
    labelMessage: {
      id: "pages.applynoaccount.basicinformation.primaryinsurance.primaryinsuanceoptionno",
      description: "Primary insurance option",
      defaultMessage: "No",
    },
    value: "no",
  },
];

interface PrimaryInsuranceProps {
  onBack: () => void;
  onSubmit: () => void;
  onSelectPrimary: (val: any) => void;
  isPrimaryInsurance: string;
  error?: MessageDescriptor;
}
export const PrimaryInsurance: React.FC<PrimaryInsuranceProps> = ({
  onBack,
  error,
  onSubmit,
  onSelectPrimary,
  isPrimaryInsurance,
}) => {
  const intl = useIntl();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmitInsurance = () => {
    setIsSubmitting(true);
    onSubmit();
  };

  return (
    <InnerContainer>
      <InsuranceHeadingContainer>
        <InsuranceHeading2>
          {intl.formatMessage(messages.primaryInsuranceHeader)}
        </InsuranceHeading2>
        <Spacer height={8} />
        <Body style={{ width: "90%" }}>
          {intl.formatMessage(messages.primaryInsuranceRequirementLbl)}
        </Body>
        <Spacer height={16} />
      </InsuranceHeadingContainer>
      <ButtonRadioInput
        id="primaryInsuranceRadioInput"
        value={isPrimaryInsurance}
        onPress={onSelectPrimary}
        labelMessage={messages.primaryInsuranceRadioLbl}
        options={options}
      />
      <Spacer height={16} />
      <BoxedLabel>
        <HelperText>
          {intl.formatMessage(messages.primaryInsuranceClarificationLbl)}
        </HelperText>
      </BoxedLabel>
      <Spacer height={16} />
      {error && <ErrorText message={error} />}
      <StyledButtons>
        <StyledButton
          intent="tertiary"
          onPress={onBack}
          testID="primaryInsuranceBackButton"
          labelMessage={messages.backButton}
        />
        <StyledButton
          intent="secondary"
          testID="primaryInsuranceSubmitButton"
          onPress={onSubmitInsurance}
          loading={isSubmitting}
          labelMessage={messages.submitButton}
        />
      </StyledButtons>
    </InnerContainer>
  );
};
