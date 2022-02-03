import * as React from "react";
import { useIntl } from "react-intl";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { Platform } from "react-native";
import {
  Heading,
  SubstrateBody,
  SubmitButton,
  Button,
  styled,
  ErrorText,
} from "@virtahealth/components";
import {
  getMessageFromTreeOrKey,
  formatVirtaMessageOrString,
} from "@virtahealth/utils";

import { merge, isEmpty, keys, some } from "lodash";
import { Page } from "../types";
import {
  generateInitialValuesAndValidationSchema,
  shouldShowDynamicFormComponent,
} from "../utils";
import { generateInterpolationValues } from "../interpolationUtils";
import DynamicFormSection from "./Section";

export interface Props {
  initialValues?: FormikValues;
  isLastPage: boolean;
  isFirstPage: boolean;
  isSinglePage: boolean;
  hideBackButton: boolean;
  schema: Page;
  onSubmit: (values: FormikValues, isFinalPage: boolean) => Promise<unknown>;
  onGoBack?: () => void;
  isApiLoading: boolean;
}

interface IsWebStyleProps {
  isWeb?: boolean;
}

interface ButtonStyleProps {
  isSinglePage?: boolean;
  hideBackButton?: boolean;
  reverseControls?: boolean;
}

const FormWrapper = styled.View<IsWebStyleProps>`
  background-color: white;
  padding: 20px;
  border-radius: ${({ isWeb }) => (isWeb ? 10 : 0)}px;
  position: relative;
  margin-bottom: 20px;
  ${({ isWeb }) => (isWeb ? "z-index: auto;" : "")}
`;

const PageInfoContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.dynamicFormsPageInfoSpacing}px;
`;

const PageHeader = styled(Heading).attrs({
  size: 1,
})``;

const PageDescription = styled(SubstrateBody).attrs({
  lineHeightMultiplier: 1.4,
})`
  margin-top: ${({ theme }) => theme.dynamicFormsPageDescriptionSpacing}px;
`;

const StyledButtonWrapper = styled.View<ButtonStyleProps>`
  display: flex;
  flex-direction: ${({ reverseControls }) =>
    !reverseControls ? "row" : "row-reverse"};
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledSubmitButton = styled(SubmitButton)<ButtonStyleProps>`
  ${({ isSinglePage, hideBackButton }) =>
    isSinglePage || hideBackButton ? "flex: 1;" : ""}
`;

const DynamicFormPage: React.FC<Props> = ({
  onSubmit,
  schema,
  initialValues = {},
  isLastPage,
  isFirstPage,
  isSinglePage,
  hideBackButton,
  onGoBack,
  isApiLoading,
}: Props) => {
  const {
    heading,
    description,
    sections,
    interpolation,
    hideActionButtons = false,
    reverseControls,
    backButtonLabel,
    nextButtonLabel,
  } = schema;
  const isWeb = Platform.OS === "web";
  const submitButtonLabel =
    nextButtonLabel !== undefined
      ? getMessageFromTreeOrKey(nextButtonLabel)
      : isLastPage
      ? getMessageFromTreeOrKey("common.navigation.submit")
      : getMessageFromTreeOrKey("common.navigation.next");
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);
  const { initialValues: baseInitialValues, formSchema } = React.useMemo(() => {
    return generateInitialValuesAndValidationSchema(schema, intl);
  }, [schema, intl]);

  const headingMessage = getMessageFromTreeOrKey(heading);

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    actions.setSubmitting(true);
    actions.setStatus(undefined);
    try {
      await onSubmit(values, isLastPage);
      actions.setSubmitting(false);
    } catch (error) {
      actions.setSubmitting(false);
      actions.setStatus(error);
    }
  };

  return (
    <Formik
      initialValues={merge(baseInitialValues, initialValues)}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
      // setting this to true so we can update form based on API responses
      enableReinitialize={true}
    >
      {({ isSubmitting, values, errors, touched }) => {
        const isDisplayingErrors =
          errors &&
          touched &&
          !isEmpty(errors) &&
          !isEmpty(touched) &&
          some(keys(errors), (k) => keys(touched).includes(k));

        return (
          <FormWrapper isWeb={isWeb}>
            <PageInfoContainer>
              <PageHeader>{formatMessage(headingMessage)}</PageHeader>
              {description?.map((d) => (
                <PageDescription key={d} size="small">
                  {formatMessage({
                    message: getMessageFromTreeOrKey(d),
                    values: generateInterpolationValues(values, interpolation),
                  })}
                </PageDescription>
              ))}
            </PageInfoContainer>
            {sections
              ?.filter((sectionSchema) =>
                shouldShowDynamicFormComponent(values, sectionSchema.showWhen)
              )
              .map((sectionSchema) => (
                <DynamicFormSection
                  key={sectionSchema.heading}
                  schema={sectionSchema}
                />
              ))}
            {isDisplayingErrors && (
              <ErrorText
                message={getMessageFromTreeOrKey("common.forms.checkResponses")}
              />
            )}
            {!hideActionButtons && (
              <StyledButtonWrapper
                hideBackButton={hideBackButton}
                reverseControls={reverseControls}
              >
                {!hideBackButton && (
                  <Button
                    testID={"dynamic-form-back-button"}
                    appearance="outline"
                    disabled={isFirstPage}
                    intent="secondary"
                    labelMessage={getMessageFromTreeOrKey(
                      backButtonLabel || "common.navigation.back"
                    )}
                    onPress={onGoBack}
                  />
                )}
                <StyledSubmitButton
                  testID={"dynamic-form-submit-button"}
                  appearance="solid"
                  disabled={isSubmitting}
                  intent="secondary"
                  labelMessage={submitButtonLabel}
                  loading={isSubmitting || isApiLoading}
                  isSinglePage={isSinglePage}
                  hideBackButton={hideBackButton}
                />
              </StyledButtonWrapper>
            )}
          </FormWrapper>
        );
      }}
    </Formik>
  );
};

export default DynamicFormPage;
