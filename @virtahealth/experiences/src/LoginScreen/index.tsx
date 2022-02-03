import * as React from "react";
import { TextInput, Animated, Platform } from "react-native";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Button,
  SubstrateBody,
  Heading,
  styled,
  InputField,
  SubmitButton,
  CheckboxField,
  Callout,
} from "@virtahealth/components";
import { primitives } from "@virtahealth/styles";
import { tID, messageTree } from "@virtahealth/utils";
import { useIntl } from "react-intl";

export interface LoginScreenFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface LoginScreenProps {
  initialValues?: Partial<LoginScreenFormValues>;
  onForgotPassword: () => void;
  onLogIn: (values: LoginScreenFormValues) => void;
  onEnrollNow?: () => void;
}

const Wrapper = styled.View`
  justify-content: center;
`;

const InnerWrapper = styled.View`
  padding: 0 25px;
`;

const HeadingWrapper = styled.View`
  align-items: center;
  padding-bottom: 15px;
`;

const InputWrapper = styled.View`
  margin-bottom: 20px;
`;

const OptionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const EnrollWrapper = styled.View`
  flex-direction: row;
  margin-top: 30px;
  padding-top: 30px;
  justify-content: center;
  border-color: ${primitives.color.carbonGray200};
  border-top-width: 1px;
`;

const ErrorCallout = styled(Callout)`
  margin-bottom: 20px;
  flex-basis: auto;
`;

const INITIAL_VALUES = {
  password: "",
  email: "",
  rememberMe: false,
};

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({
  initialValues,
  onForgotPassword,
  onLogIn,
  onEnrollNow = () => undefined,
}) => {
  const intl = useIntl();
  const LeadCaptureFormSchema = Yup.object().shape({
    password: Yup.string().required(
      intl.formatMessage(messageTree.common.forms.required)
    ),
    email: Yup.string()
      .email()
      .required(intl.formatMessage(messageTree.common.forms.enterValidEmail)),
  });

  // Refs
  const passwordInput = React.useRef<TextInput>();
  const opacity = React.useRef(new Animated.Value(0)).current;

  const focusPassword = React.useCallback(() => {
    passwordInput.current?.focus();
  }, []);

  React.useEffect(() => {
    // Web doesn't like doing the animation on the first render tick, lets force it out of this tick.
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: Platform.OS !== "web",
      }).start();
    });
  }, []);

  // Functions
  const handleContinue = async (
    values: LoginScreenFormValues,
    actions: FormikHelpers<LoginScreenFormValues>
  ) => {
    actions.setStatus("");
    actions.setSubmitting(true);

    try {
      await onLogIn(values);
    } catch (e) {
      actions.setSubmitting(false);
      actions.setStatus(e);
    }
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <HeadingWrapper>
          <Heading>
            {intl.formatMessage(messageTree.common.login.signIntoAccount)}
          </Heading>
        </HeadingWrapper>
        <Formik
          initialValues={{ ...INITIAL_VALUES, ...initialValues }}
          validationSchema={LeadCaptureFormSchema}
          onSubmit={handleContinue}
          enableReinitialize={false}
        >
          {({ isSubmitting, isValid, status, submitForm, submitCount }) => {
            return (
              <Animated.View style={{ opacity }}>
                <InputWrapper>
                  <InputField
                    testID={tID("login-email-input")}
                    name="email"
                    labelMessage={messageTree.common.forms.email}
                    isLarge
                    autoCapitalize="none"
                    autoComplete="email"
                    textContentType="emailAddress"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={focusPassword}
                    accessibilityLabel={
                      messageTree.common.forms.email.description as string
                    }
                  />
                </InputWrapper>
                <InputWrapper>
                  <InputField
                    testID={tID("login-password-input")}
                    name="password"
                    labelMessage={messageTree.common.forms.password}
                    secureTextEntry
                    isLarge
                    autoCorrect={false}
                    autoComplete="password"
                    textContentType="password"
                    returnKeyType="go"
                    inputRef={passwordInput}
                    onSubmitEditing={submitForm}
                    accessibilityLabel={
                      messageTree.common.forms.password.description as string
                    }
                  />
                </InputWrapper>
                <OptionsWrapper>
                  <CheckboxField
                    testID={tID("login-rememberMe-checkbox")}
                    labelMessage={messageTree.common.login.rememberMe}
                    name="rememberMe"
                  />
                  <Button
                    labelMessage={messageTree.common.login.forgotPassword}
                    appearance="link"
                    intent="secondary"
                    onPress={onForgotPassword}
                  />
                </OptionsWrapper>
                {!!status && (
                  <ErrorCallout intent="danger" description={status} />
                )}
                <SubmitButton
                  testID={tID("login-login-button")}
                  intent="secondary"
                  labelMessage={messageTree.common.navigation.logIn}
                  loading={isSubmitting}
                  disabled={(!isValid && !!submitCount) || isSubmitting}
                />
                <EnrollWrapper>
                  <SubstrateBody weight="regular">
                    {intl.formatMessage(
                      messageTree.enrollment.leadCapture.dontHaveAccount,
                      {
                        enrollButton: (
                          <Button
                            testID={tID("login-enrollNow-button")}
                            labelStyle={{ textDecorationLine: "underline" }}
                            appearance="link"
                            intent="secondary"
                            labelMessage={
                              messageTree.enrollment.leadCapture.enrollNow
                            }
                            onPress={onEnrollNow}
                          />
                        ),
                      }
                    )}
                  </SubstrateBody>
                </EnrollWrapper>
              </Animated.View>
            );
          }}
        </Formik>
      </InnerWrapper>
    </Wrapper>
  );
};
