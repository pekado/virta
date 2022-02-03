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
  Callout,
} from "@virtahealth/components";
import { messageTree, VirtaIntlMessageOrString } from "@virtahealth/utils";

import { verificationCodeRegex } from "../utils/regexValidation";

export interface FormValues {
  verificationCode: string;
}
export interface SMSVerificationProps {
  onContinue: (values: FormValues) => void;
  onGoToUpdatePhone: () => void;
  onResendCode: () => void;
  phoneEnding: string; // last four digits of the phone number to display in the component text
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
  padding-bottom: 25px;
`;

const ErrorCallout = styled(Callout)`
  margin-bottom: 20px;
  flex-basis: auto;
`;

const ContinueWrapper = styled.View`
  padding-bottom: 35px;
`;

const NeedToEditMobileNumber = styled.View`
  align-items: center;
  padding-bottom: 35px;
  flex-direction: row;
  justify-content: center;
`;

const DirectionsWrapper = styled.View`
  align-items: center;
  padding-bottom: 35px;
`;

const NeedToResend = styled.View`
  padding-bottom: 35px;
`;

const INITIAL_VALUES = {
  verificationCode: "",
};

export const SMSVerification: React.FunctionComponent<SMSVerificationProps> = ({
  onContinue,
  onGoToUpdatePhone,
  onResendCode,
  phoneEnding,
}) => {
  const intl = useIntl();
  const SMSVerificationSchema = Yup.object().shape({
    verificationCode: Yup.string()
      .matches(
        verificationCodeRegex,
        intl.formatMessage(
          messageTree.enrollment.leadCapture.codeRequiredLength
        )
      )
      .required(intl.formatMessage(messageTree.common.forms.required)),
  });

  const [error, setError] = React.useState<VirtaIntlMessageOrString | null>(
    null
  );
  const [isResending, setIsResending] = React.useState(false);

  // Refs
  const codeInput = React.useRef<TextInput>();

  const focusCode = React.useCallback(() => {
    codeInput.current?.focus();
  }, []);

  // Functions
  const handleContinue = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
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

  const handleResend = async () => {
    setError(null);
    setIsResending(true);
    try {
      await onResendCode();
    } catch (e) {
      setError(e as VirtaIntlMessageOrString);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <ScrollView>
      <Wrapper>
        <HeadingWrapper>
          <Heading>
            {intl.formatMessage(
              messageTree.enrollment.leadCapture.verifyYourMobileNumber
            )}
          </Heading>
        </HeadingWrapper>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={SMSVerificationSchema}
          onSubmit={handleContinue}
          enableReinitialize={false}
        >
          {({ isSubmitting, isValid, status, submitCount }) => {
            return (
              <>
                <DirectionsWrapper>
                  <SubstrateBody weight="regular">
                    {intl.formatMessage(
                      messageTree.enrollment.leadCapture.sentVerificationCode,
                      {
                        phoneNumber: (
                          <SubstrateBody weight="bold">
                            {phoneEnding}
                          </SubstrateBody>
                        ),
                      }
                    )}
                  </SubstrateBody>
                </DirectionsWrapper>
                <InputWrapper>
                  <InputField
                    testID="sms-verification-code-input"
                    name="verificationCode"
                    isLarge
                    autoCorrect={false}
                    autoComplete="name"
                    textContentType="name"
                    returnKeyType="next"
                    accessibilityLabel={
                      messageTree.enrollment.leadCapture.sentVerificationCode
                        .description as string
                    }
                    onSubmitEditing={focusCode}
                  />
                </InputWrapper>
                <ContinueWrapper>
                  {!!status && (
                    <ErrorCallout intent="danger" description={status} />
                  )}
                  {!!error && (
                    <ErrorCallout intent="danger" description={error} />
                  )}
                  <SubmitButton
                    testID="sms-verification-verify-button"
                    intent="secondary"
                    labelMessage={messageTree.common.navigation.verifyButton}
                    loading={isSubmitting}
                    disabled={(!isValid && !!submitCount) || isSubmitting}
                  />
                </ContinueWrapper>
              </>
            );
          }}
        </Formik>
        <NeedToResend>
          <Button
            testID="sms-verification-update-phone-button"
            appearance="link"
            intent="secondary"
            labelMessage={
              messageTree.enrollment.leadCapture.resentVerificationCode
            }
            onPress={handleResend}
            loading={isResending}
          />
        </NeedToResend>
        <NeedToEditMobileNumber>
          <Button
            testID="sms-verification-update-phone-button"
            appearance="link"
            intent="secondary"
            labelMessage={messageTree.enrollment.leadCapture.editPhoneNumber}
            onPress={onGoToUpdatePhone}
          />
        </NeedToEditMobileNumber>
      </Wrapper>
    </ScrollView>
  );
};
