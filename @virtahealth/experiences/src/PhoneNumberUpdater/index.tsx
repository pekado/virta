import * as React from "react";
import { TextInput, ScrollView, Linking } from "react-native";
import { useIntl } from "react-intl";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  SubstrateBody,
  styled,
  Heading,
  SubmitButton,
  Callout,
  Link,
  PhoneInputField,
} from "@virtahealth/components";
import { messageTree } from "@virtahealth/utils";

export interface FormValues {
  phoneNumber: string;
}
export interface PhoneNumberUpdaterProps {
  onUpdate: (values: FormValues) => Promise<void>;
  existingPhoneNumber: string;
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

const NeedHelp = styled.View`
  align-items: center;
  padding-bottom: 35px;
  flex-direction: row;
  justify-content: center;
`;

const DirectionsWrapper = styled.View`
  align-items: center;
  padding-bottom: 35px;
`;

const InlineSubstrateBody = styled(SubstrateBody)`
  display: flex;
  align-items: center;
`;

const SupportEmailLink: React.FC<{ message: string[] }> = ({ message }) => (
  <Link onPress={() => Linking.openURL("mailto:support@virtahealth.com")}>
    {message}
  </Link>
);
// regex for determining if 10 digit phone number
const rPhone = /^\d{3}-?\d{3}-?\d{4}$/;

export const PhoneNumberUpdater: React.FunctionComponent<PhoneNumberUpdaterProps> =
  ({ onUpdate, existingPhoneNumber }) => {
    const INITIAL_VALUES = {
      phoneNumber: existingPhoneNumber,
    };

    const intl = useIntl();

    const SMSVerificationSchema = Yup.object().shape({
      phoneNumber: Yup.string()
        .transform((v) => (!v ? undefined : v))
        .matches(
          rPhone,
          intl.formatMessage(messageTree.common.forms.invalidPhone)
        ),
    });

    // Refs
    const phoneInput = React.useRef<TextInput>();

    const focusPhoneNumber = React.useCallback(() => {
      phoneInput.current?.focus();
    }, []);

    // Functions
    const handleUpdate = async (
      values: FormValues,
      actions: FormikHelpers<FormValues>
    ) => {
      actions.setStatus("");
      actions.setSubmitting(true);

      try {
        await onUpdate(values);
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
                messageTree.enrollment.leadCapture.verifyYourMobileNumber
              )}
            </Heading>
          </HeadingWrapper>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={SMSVerificationSchema}
            onSubmit={handleUpdate}
            enableReinitialize={false}
          >
            {({ isSubmitting, isValid, status, submitCount }) => {
              return (
                <>
                  <DirectionsWrapper>
                    <SubstrateBody weight="regular">
                      {intl.formatMessage(
                        messageTree.enrollment.leadCapture
                          .confirmOrEditPhoneNumber
                      )}
                    </SubstrateBody>
                  </DirectionsWrapper>
                  <InputWrapper>
                    <PhoneInputField
                      testID="phone-updater-input"
                      name="phoneNumber"
                      isLarge
                      autoCorrect={false}
                      autoComplete="name"
                      labelMessage={messageTree.common.profile.mobileNumber}
                      textContentType="name"
                      returnKeyType="next"
                      onSubmitEditing={focusPhoneNumber}
                      accessibilityLabel={
                        messageTree.common.profile.mobileNumber
                          .description as string
                      }
                    />
                  </InputWrapper>
                  <ContinueWrapper>
                    {!!status && (
                      <ErrorCallout intent="danger" description={status} />
                    )}
                    <SubmitButton
                      testID="phone-updater-update-button"
                      intent="secondary"
                      labelMessage={messageTree.enrollment.leadCapture.sendCode}
                      loading={isSubmitting}
                      disabled={(!isValid && !!submitCount) || isSubmitting}
                    />
                  </ContinueWrapper>
                </>
              );
            }}
          </Formik>
          <NeedHelp>
            <InlineSubstrateBody weight="regular">
              {intl.formatMessage(
                messageTree.enrollment.leadCapture.stillHavingTrouble,
                {
                  e: (chunks) => <SupportEmailLink message={chunks} />,
                }
              )}
            </InlineSubstrateBody>
          </NeedHelp>
        </Wrapper>
      </ScrollView>
    );
  };
