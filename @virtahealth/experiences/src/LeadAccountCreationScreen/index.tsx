import * as React from "react";
import { TextInput, ScrollView } from "react-native";
import { useIntl } from "react-intl";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  InputField,
  Button,
  SubstrateBody,
  styled,
  Heading,
  DateInputField,
  PhoneInputField,
  SubmitButton,
  Callout,
} from "@virtahealth/components";
import { messageTree } from "@virtahealth/utils";

import { phoneNumberRegex, dateRegex } from "../utils/regexValidation";

export interface LeadAccountCreationScreenProps {
  onContinue: (values: LeadAccountCreationScreenFormValues) => void;
  onGoToLogIn: () => void;
}

export interface LeadAccountCreationScreenFormValues {
  dateOfBirth: string;
  mobile: string;
  password: string;
}

const Wrapper = styled.View`
  justify-content: center;
  margin: 10px 15px;
`;

const HeadingWrapper = styled.View`
  align-items: center;
  padding-bottom: 15px;
`;

const InputWrapper = styled.View`
  padding-bottom: 15px;
`;

const ContinueWrapper = styled.View`
  padding-bottom: 35px;
`;

const HaveAccountWrapper = styled.View`
  align-items: center;
`;

const ErrorCallout = styled(Callout)`
  margin-bottom: 20px;
  flex-basis: auto;
`;

const INITIAL_VALUES = {
  dateOfBirth: "",
  mobile: "",
  password: "",
};

const REQUIRED_MESSAGE = messageTree.common.forms.required;

export const LeadAccountCreationScreen: React.FunctionComponent<LeadAccountCreationScreenProps> =
  ({ onContinue, onGoToLogIn }) => {
    const intl = useIntl();
    const LeadCaptureFormSchema = Yup.object().shape({
      dateOfBirth: Yup.string()
        .matches(
          dateRegex,
          intl.formatMessage(messageTree.common.forms.invalidDate)
        )
        .required(intl.formatMessage(REQUIRED_MESSAGE)),
      mobile: Yup.string()
        .matches(
          phoneNumberRegex,
          intl.formatMessage(messageTree.common.forms.invalidPhone)
        )
        .required(intl.formatMessage(REQUIRED_MESSAGE)),
      password: Yup.string()
        .min(
          8,
          intl.formatMessage(
            messageTree.enrollment.leadCapture.passwordMinLength
          )
        )
        .matches(
          /[a-z]/,
          intl.formatMessage(
            messageTree.enrollment.leadCapture.oneLowercaseCharacter
          )
        )
        .matches(
          /[A-Z]/,
          intl.formatMessage(
            messageTree.enrollment.leadCapture.oneUppercaseCharacter
          )
        )
        .matches(
          /[0-9]/,
          intl.formatMessage(messageTree.enrollment.leadCapture.minOneNumber)
        )
        .matches(
          /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/, // Has to match identity service.
          intl.formatMessage(
            messageTree.enrollment.leadCapture.minOneSpecialCharacter
          )
        )
        .required(intl.formatMessage(REQUIRED_MESSAGE)),
    });

    // Refs
    const passwordInput = React.useRef<TextInput>();

    const focusPassword = React.useCallback(() => {
      passwordInput.current?.focus();
    }, []);

    // Functions
    const handleContinue = async (
      values: LeadAccountCreationScreenFormValues,
      actions: FormikHelpers<LeadAccountCreationScreenFormValues>
    ) => {
      actions.setStatus("");
      actions.setSubmitting(true);

      try {
        await onContinue(values);
      } catch (e) {
        actions.setSubmitting(false);
        actions.setStatus(e);
      }
    };

    return (
      <ScrollView>
        <Wrapper>
          <HeadingWrapper>
            <Heading>
              {intl.formatMessage(
                messageTree.enrollment.leadCapture.letsKeepInfoSafe
              )}
            </Heading>
          </HeadingWrapper>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={LeadCaptureFormSchema}
            onSubmit={handleContinue}
            enableReinitialize={false}
          >
            {({ isSubmitting, isValid, status, submitForm, submitCount }) => {
              return (
                <>
                  <InputWrapper>
                    <DateInputField
                      testID="lead-account-creation-dob-input"
                      isLarge
                      labelMessage={messageTree.common.profile.dateOfBirth}
                      name="dateOfBirth"
                      placeholderMessage={
                        messageTree.common.forms.dateFormatString
                      }
                      accessibilityLabel={
                        messageTree.common.profile.dateOfBirth
                          .description as string
                      }
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <PhoneInputField
                      testID="lead-account-creation-mobile-input"
                      isLarge
                      labelMessage={messageTree.common.profile.mobileNumber}
                      name="mobile"
                      autoComplete="tel"
                      onSubmitText={focusPassword}
                      accessibilityLabel={
                        messageTree.common.profile.mobileNumber
                          .description as string
                      }
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      testID="lead-account-creation-password-input"
                      isLarge
                      labelMessage={
                        messageTree.enrollment.leadCapture.setPassword
                      }
                      name="password"
                      secureTextEntry
                      onSubmitEditing={submitForm}
                      inputRef={passwordInput}
                      accessibilityLabel={
                        messageTree.enrollment.leadCapture.setPassword
                          .description as string
                      }
                    />
                  </InputWrapper>
                  {!!status && (
                    <ErrorCallout intent="danger" description={status} />
                  )}
                  <ContinueWrapper>
                    <SubmitButton
                      testID="lead-account-creation-submit-button"
                      intent="secondary"
                      labelMessage={messageTree.common.navigation.continue}
                      loading={isSubmitting}
                      disabled={(!isValid && !!submitCount) || isSubmitting}
                    />
                  </ContinueWrapper>
                </>
              );
            }}
          </Formik>
          <HaveAccountWrapper>
            <SubstrateBody weight="regular">
              {intl.formatMessage(
                messageTree.enrollment.leadCapture.alreadyHaveApplication
              )}
            </SubstrateBody>
            <Button
              testID="lead-account-creation-login-button"
              appearance="link"
              intent="secondary"
              labelMessage={messageTree.common.navigation.logIn}
              onPress={onGoToLogIn}
            />
          </HaveAccountWrapper>
        </Wrapper>
      </ScrollView>
    );
  };
