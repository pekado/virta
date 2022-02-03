import * as React from "react";
import { View } from "react-native";
import { getPlatformFontFamilySuffix, messages } from "@virtahealth/utils";
import {
  Form,
  styled,
  SubmitButton,
  Spacer,
  Body,
  Button,
  InputField,
  Link,
  ErrorText,
  ComboBoxField,
  ComboBoxOption,
} from "@virtahealth/components";
import { MessageDescriptor, useIntl } from "react-intl";
import * as Yup from "yup";
import { FormikValues } from "formik";
import { DefaultTheme } from "styled-components/native";
import {
  InsuranceCard,
  InsuranceHeading2,
  InsuranceHeadingContainer,
} from "..";

const StyledInputContainer = styled(View)`
  width: 95%;
  text-align: left;
  z-index: 2;
`;

const StyledContainer = styled(View)`
  align-items: center;
`;

const StyledButton = styled(Button)`
  min-width: 150px;
`;

const StyledForm = styled(Form)`
  min-width: 300px;
  max-width: 425px;
`;

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Disclaimer = styled(View)`
  line-height: 24px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "${({ theme }) =>
    theme[
      `avatarBaseFontFamily${getPlatformFontFamilySuffix()}` as keyof DefaultTheme
    ]}";
`;

interface InsuranceFormProps {
  editable?: boolean;
  onContinue?: (values: FormikValues) => void;
  onSkip?: () => void;
  card: InsuranceCard;
  subheader?: MessageDescriptor;
  error?: MessageDescriptor;
  onRetry?: () => void;
  insurerOptions: Array<string>;
  displayValidateButton?: boolean;
  onEditForm?: (updates: FormikValues, existing: InsuranceCard) => void;
  hideInsuranceGroupId?: boolean;
  isDtp?: boolean;
  isSubmitting: boolean;
}

export const InsuranceForm: React.FC<InsuranceFormProps> = ({
  editable = false,
  onContinue,
  card,
  subheader,
  onRetry,
  error,
  insurerOptions = [],
  displayValidateButton = false,
  onSkip,
  onEditForm,
  hideInsuranceGroupId = false,
  isDtp = false,
  isSubmitting,
}) => {
  const intl = useIntl();

  let InsuranceSchema = Yup.object().shape({
    insuranceCarrier: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    insuranceMemberId: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    insuranceGroupId: Yup.string().notRequired(),
  });

  if (!hideInsuranceGroupId) {
    InsuranceSchema = InsuranceSchema.omit(["insuranceGroupId"]);
  }

  const InsurerComboBox: React.FC = () => {
    return (
      <ComboBoxField
        testID="insuranceCarrierInputField"
        name="insuranceCarrier"
        editable={editable}
        limitDropdownHeight={true}
        labelMessage={messages.insuranceProviderInput}
        placeholderMessage={messages.insuranceProviderInputPlaceholder}
      >
        {insurerOptions.map((option, idx) => (
          <ComboBoxOption key={idx} value={option}>
            {option}
          </ComboBoxOption>
        ))}
      </ComboBoxField>
    );
  };

  return (
    <StyledForm
      initialValues={card}
      onSubmit={(values: FormikValues) => {
        if (values !== card) {
          onEditForm?.(values, card);
        }
        onContinue?.(values);
      }}
      enableReinitialize={true}
      validationSchema={InsuranceSchema}
    >
      <InsuranceHeadingContainer>
        <InsuranceHeading2>
          {intl.formatMessage(messages.insuranceFormHeader)}
        </InsuranceHeading2>
        <Spacer height={16} />
        <Body>
          {intl.formatMessage(
            subheader
              ? subheader
              : isDtp
              ? messages.newInsuranceCoverage
              : messages.manualInsuranceText
          )}
        </Body>
      </InsuranceHeadingContainer>
      <StyledInputContainer>
        <Spacer height={16} />
        <InsurerComboBox />
        <Spacer height={16} />
        <InputField
          testID="insuranceMemberIdInputField"
          name={"insuranceMemberId"}
          editable={editable}
          labelMessage={messages.insuranceMemberInput}
          placeholderMessage={messages.insuranceMemberInputPlaceholder}
        />
        {!hideInsuranceGroupId && (
          <>
            <Spacer height={16} />
            <InputField
              name={"insuranceGroupId"}
              testID="insuranceGroupIdInputField"
              editable={editable}
              labelMessage={messages.insuranceGroupInput}
              helperText={messages.insuranceGroupInputHelperText}
              placeholderMessage={messages.insuranceGroupInputPlaceholder}
            />
          </>
        )}
      </StyledInputContainer>
      <Spacer height={16} />
      {error && <ErrorText message={error} />}
      <Spacer height={8} />
      <ButtonContainer>
        {onRetry && (
          <StyledButton
            size="medium"
            intent="tertiary"
            testID="insuranceFormRetryButton"
            labelMessage={messages.insuranceRetakeButton}
            onPress={onRetry}
          />
        )}
        {onContinue && (
          <SubmitButton
            intent="secondary"
            testID="insuranceFormSubmitButton"
            labelMessage={
              displayValidateButton
                ? messages.insuranceNextConfirmButton
                : messages.insuranceNextButton
            }
            loading={isSubmitting}
          />
        )}
      </ButtonContainer>
      {isDtp && (
        <Disclaimer>
          <p>{intl.formatMessage(messages.insuranceDisclaimer)}</p>
        </Disclaimer>
      )}
      {onSkip && (
        <StyledContainer>
          <Spacer height={32} />
          <Link onPress={onSkip}>{intl.formatMessage(messages.skipInput)}</Link>
        </StyledContainer>
      )}
    </StyledForm>
  );
};
