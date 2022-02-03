import * as React from "react";
import { Image, Platform, View } from "react-native";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  HelperText,
  Heading,
  Spacer,
  SubmitButton,
  Callout,
  styled,
  ErrorText,
  RadioInputField,
} from "@virtahealth/components";
import { poBoxRegex, zipCodeRegex } from "../utils/regexValidation";
import { SuccessScreen } from "../SuccessScreen";
import {
  labels,
  text,
  validationText,
  errorText,
  successText,
  radioButtonLabels,
} from "./messages";
import ShippingSection from "./components/ShippingSection";
import { generateQuestionnaireResponse, initialAnswersToValues } from "./utils";
// Disabling for now. It is because this file is a .d.ts. We probably don't want it to be a .d.ts
// eslint-disable-next-line import/no-unresolved
import { GoogleHealthCare } from "./types";

enum FormState {
  Default,
  Success,
  Error,
}

export enum PlanDefinitionName {
  DiabetesManagement = "diabetes-management",
  DiabetesManagementNonClinical = "diabetes-management-non-clinical",
  Reversal = "reversal",
}

export type Address = {
  street?: string;
  aptUnit?: string;
  city?: string;
  state?: string;
  zip?: string;
  isMain?: boolean;
};

export interface FormValues {
  shippingAddress?: Address;
  hasBloodPressureCuff?: boolean;
  hasXLScale?: boolean;
}

export interface Props {
  virtaId: string;
  planDefinitionName: PlanDefinitionName;
  questionnaire: GoogleHealthCare.Questionnaire.FhirQuestionnaire;
  initialAnswers?: GoogleHealthCare.InitialAnswer[];
  onSubmit: (values: any) => void;
  onSuccessClose: () => void;
  openLearnButtonLink: () => void;
}

const SPACE = 16;

const StyledHelperText = styled(HelperText)`
  font-size: 16px;
  line-height: 22px;
`;

const StyledRadioInput = styled(RadioInputField)`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const StyledLastRadioInput = styled(RadioInputField)``;

const isMobile = Platform.OS !== "web";

let StarterKitFormSchema = Yup.object().shape({
  shippingAddress: Yup.object().shape({
    street: Yup.string()
      .matches(poBoxRegex, validationText.poBox.defaultMessage)
      .required(validationText.street.defaultMessage),
    aptUnit: Yup.string().matches(
      poBoxRegex,
      validationText.poBox.defaultMessage
    ),
    city: Yup.string().required(validationText.city.defaultMessage),
    state: Yup.string().required(validationText.state.defaultMessage),
    zip: Yup.string()
      .matches(zipCodeRegex, validationText.zipCodeRegex.defaultMessage)
      .required(validationText.zip.defaultMessage),
  }),
  hasXLScale: Yup.string().required(validationText.hasXLScale.defaultMessage),
  hasBloodPressureCuff: Yup.string().required(
    validationText.hasBloodPressureCuff.defaultMessage
  ),
});

export const StarterKitScreen: React.FC<Props> = ({
  onSubmit,
  onSuccessClose,
  questionnaire,
  initialAnswers,
  virtaId,
  planDefinitionName,
  openLearnButtonLink,
}: Props) => {
  const isReversal = planDefinitionName === PlanDefinitionName.Reversal;
  const headerImageUrl = isReversal
    ? "https://ketomodulesprod.s3.us-west-2.amazonaws.com/lineup1280.png"
    : "https://ketomodulesprod.s3.us-west-2.amazonaws.com/lineupglucose1280.png";

  const [formState, updateFormState] = React.useState(FormState.Default);
  const initialValues = initialAnswersToValues(initialAnswers, questionnaire);

  if (!isReversal || !initialValues.enableXLScale) {
    StarterKitFormSchema = StarterKitFormSchema.omit(["hasXLScale"]);
  }

  if (!isReversal || !initialValues.isBMOC) {
    StarterKitFormSchema = StarterKitFormSchema.omit(["hasBloodPressureCuff"]);
  }

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    updateFormState(FormState.Default);

    try {
      const response = generateQuestionnaireResponse(questionnaire, values, {
        virtaId,
      });
      await onSubmit(response);
      actions.setSubmitting(false);
      updateFormState(FormState.Success);
    } catch (error) {
      actions.setSubmitting(false);
      updateFormState(FormState.Error);
    }
  };

  switch (formState) {
    case FormState.Success:
      return (
        <SuccessScreen
          onClose={onSuccessClose}
          title={successText.heading.defaultMessage}
          description={successText.shippingDetails.defaultMessage}
          secondaryActionText={successText.learnButton}
          onSecondaryAction={openLearnButtonLink}
        />
      );
    default:
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={StarterKitFormSchema}
          onSubmit={handleSubmit}
          enableReinitialize={false}
        >
          {({
            isSubmitting,
            isValid,
            values,
            errors,
            touched,
            submitCount,
          }) => {
            return (
              <>
                <Image
                  source={{
                    height: 496,
                    width: 1280,
                    uri: headerImageUrl,
                  }}
                  style={{
                    resizeMode: "contain",
                    maxHeight: isMobile ? 150 : 235,
                    maxWidth: "100%",
                  }}
                />
                <Spacer height={4} />
                <StyledHelperText>
                  {text.formTitleHelper.defaultMessage}
                </StyledHelperText>
                {isReversal && (
                  <>
                    {
                      // @ts-ignore - type the form values
                      values.isBMOC && (
                        <>
                          <Spacer height={24} />
                          <Heading size={2}>
                            {text.bloodCuffTitle.defaultMessage}
                          </Heading>
                          <Spacer height={4} />
                          <StyledHelperText>
                            {text.bloodCuffInfo.defaultMessage}
                          </StyledHelperText>
                          <StyledRadioInput
                            value="true"
                            name="hasBloodPressureCuff"
                            labelMessage={radioButtonLabels.yes}
                            isButton
                          />
                          <StyledLastRadioInput
                            value="false"
                            name="hasBloodPressureCuff"
                            labelMessage={radioButtonLabels.no}
                            isButton
                          />
                          {errors.hasBloodPressureCuff &&
                            (submitCount || touched.hasBloodPressureCuff) && (
                              <ErrorText style={{ marginTop: 8 }}>
                                {errors.hasBloodPressureCuff}
                              </ErrorText>
                            )}
                        </>
                      )
                    }
                    {
                      // @ts-ignore - type the form values
                      values.enableXLScale && (
                        <>
                          <Spacer height={24} />
                          <Heading size={2}>
                            {text.scaleTitle.defaultMessage}
                          </Heading>
                          <Spacer height={4} />
                          <StyledHelperText>
                            {text.scaleInfo.defaultMessage}
                          </StyledHelperText>
                          <StyledRadioInput
                            value="true"
                            name="hasXLScale"
                            labelMessage={radioButtonLabels.yes}
                            isButton
                          />
                          <StyledLastRadioInput
                            value="false"
                            name="hasXLScale"
                            labelMessage={radioButtonLabels.no}
                            isButton
                          />
                          {errors.hasXLScale &&
                            (submitCount || touched.hasXLScale) && (
                              <ErrorText style={{ marginTop: 8 }}>
                                {errors.hasXLScale}
                              </ErrorText>
                            )}
                        </>
                      )
                    }
                  </>
                )}
                <Spacer height={24} />
                <ShippingSection />
                <Spacer height={24} />
                {formState === FormState.Error && (
                  <View style={{ marginBottom: SPACE }}>
                    <Callout
                      intent="danger"
                      title={errorText.submitErrorTitle}
                      style={{ flexBasis: "auto" }}
                    />
                  </View>
                )}
                <SubmitButton
                  appearance="solid"
                  disabled={(!isValid && !!submitCount) || isSubmitting}
                  intent="secondary"
                  labelMessage={labels.submitButton}
                  loading={isSubmitting}
                />
              </>
            );
          }}
        </Formik>
      );
  }
};
