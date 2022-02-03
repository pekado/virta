import * as React from "react";
import { TextInput, ScrollView } from "react-native";
import { useIntl } from "react-intl";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Button,
  SubstrateBody,
  styled,
  Heading,
  InputField,
  SubmitButton,
  CheckboxField,
  Callout,
} from "@virtahealth/components";
import { messageTree } from "@virtahealth/utils";
export interface LeadCaptureScreenFormValues {
  firstName: string;
  lastName: string;
  email: string;
  agreeTerms: boolean;
}
export interface LeadCaptureScreenProps {
  onTermsPress: () => void;
  onPrivacyPress: () => void;
  onContinue: (values: LeadCaptureScreenFormValues) => void;
  onGoToLogIn: () => void;
  initialValues?: LeadCaptureScreenFormValues;
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

const TermsFieldWrapper = styled.View`
  padding-bottom: 15px;
`;

const ErrorCallout = styled(Callout)`
  margin-bottom: 20px;
  flex-basis: auto;
`;

const ContinueWrapper = styled.View`
  padding-bottom: 35px;
`;

const HaveAccountWrapper = styled.View`
  align-items: center;
`;

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  agreeTerms: false,
};

const REQUIRED_MESSAGE = messageTree.common.forms.required;

export const LeadCaptureScreen: React.FunctionComponent<LeadCaptureScreenProps> =
  ({
    onTermsPress,
    onPrivacyPress,
    onContinue,
    onGoToLogIn,
    initialValues = INITIAL_VALUES,
  }) => {
    const intl = useIntl();
    const LeadCaptureFormSchema = Yup.object().shape({
      firstName: Yup.string().required(intl.formatMessage(REQUIRED_MESSAGE)),
      lastName: Yup.string().required(intl.formatMessage(REQUIRED_MESSAGE)),
      email: Yup.string()
        .email(intl.formatMessage(messageTree.common.forms.enterValidEmail))
        .required(intl.formatMessage(REQUIRED_MESSAGE)),
      agreeTerms: Yup.boolean().isTrue(intl.formatMessage(REQUIRED_MESSAGE)),
    });

    // Refs
    const lastNameInput = React.useRef<TextInput>();
    const emailInput = React.useRef<TextInput>();

    const focusLastName = React.useCallback(() => {
      lastNameInput.current?.focus();
    }, []);

    const focusEmail = React.useCallback(() => {
      emailInput.current?.focus();
    }, []);

    // Functions
    const handleContinue = async (
      values: LeadCaptureScreenFormValues,
      actions: FormikHelpers<LeadCaptureScreenFormValues>
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
                messageTree.enrollment.leadCapture.getInTouch
              )}
            </Heading>
          </HeadingWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={LeadCaptureFormSchema}
            onSubmit={handleContinue}
            enableReinitialize={false}
          >
            {({ isSubmitting, isValid, status, submitForm, submitCount }) => {
              return (
                <>
                  <InputWrapper>
                    <InputField
                      testID="lead-capture-firstName-input"
                      labelMessage={messageTree.common.profile.firstName}
                      name="firstName"
                      isLarge
                      autoCorrect={false}
                      autoComplete="name"
                      textContentType="name"
                      returnKeyType="next"
                      accessibilityLabel={
                        messageTree.common.profile.firstName
                          .description as string
                      }
                      onSubmitEditing={focusLastName}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      testID="lead-capture-lastName-input"
                      labelMessage={messageTree.common.profile.lastName}
                      name="lastName"
                      isLarge
                      autoCorrect={false}
                      autoComplete="name"
                      textContentType="familyName"
                      returnKeyType="next"
                      inputRef={lastNameInput}
                      accessibilityLabel={
                        messageTree.common.profile.lastName
                          .description as string
                      }
                      onSubmitEditing={focusEmail}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      testID="lead-capture-email-input"
                      labelMessage={messageTree.common.profile.emailAddress}
                      name="email"
                      isLarge
                      autoCorrect={false}
                      autoComplete="email"
                      textContentType="emailAddress"
                      returnKeyType="done"
                      inputRef={emailInput}
                      accessibilityLabel={
                        messageTree.common.profile.emailAddress
                          .description as string
                      }
                      onSubmitEditing={submitForm}
                    />
                  </InputWrapper>
                  <TermsFieldWrapper>
                    <CheckboxField
                      name="agreeTerms"
                      testID="lead-capture-agreeTerms-checkbox"
                      labelMessage={{
                        message:
                          messageTree.enrollment.leadCapture
                            .agreementToTermsAndPrivacy,
                        values: {
                          t: (chunks) => (
                            <SubstrateBody
                              weight="bold"
                              size="small"
                              color="secondary"
                              onPress={onTermsPress}
                            >
                              {chunks}
                            </SubstrateBody>
                          ),
                          p: (chunks) => (
                            <SubstrateBody
                              weight="bold"
                              size="small"
                              color="secondary"
                              onPress={onPrivacyPress}
                            >
                              {chunks}
                            </SubstrateBody>
                          ),
                        },
                      }}
                    />
                  </TermsFieldWrapper>
                  <ContinueWrapper>
                    {!!status && (
                      <ErrorCallout intent="danger" description={status} />
                    )}
                    <SubmitButton
                      testID="lead-capture-submit-button"
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
              testID="lead-capture-login-button"
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
