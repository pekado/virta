import * as React from "react";
import { Platform } from "react-native";
import { useIntl } from "react-intl";
import { FormikValues, useFormikContext } from "formik";
import {
  CheckboxField,
  CheckboxListField,
  styled,
  InputField,
  LabeledBasicDropdownField,
  BasicDropdownField,
  CreatableDropdownField,
  LabeledCreatableDropdownField,
  RadioInputListField,
  Callout,
  CalloutProps,
  DropdownOptionProps,
  DateInputField,
} from "@virtahealth/components";
import {
  getMessageFromTreeOrKey,
  messageTree,
  formatVirtaMessageOrString,
  VirtaIntlMessage,
} from "@virtahealth/utils";

import { QuestionProps } from "../types";
import { generateInterpolationValues } from "../interpolationUtils";
import { ObjectListQuestionField } from "./customQuestions/ObjectList";
import { PhysicianSearchField } from "./customQuestions/PhysicianSearch";
import {
  AddressType,
  AddressValidationQuestionField,
} from "./customQuestions/AddressValidation";
import { InsuranceValidationQuestionField } from "./customQuestions/InsuranceValidation";
import { FileUpload } from "./customQuestions/FileUpload";

const isWeb = Platform.OS === "web";

const StyledInputField = styled(InputField).attrs(({ theme }) => ({
  wrapperStyle: {
    marginBottom: theme.dynamicFormsQuestionSpacing,
    width: "100%",
  },
}))``;

const StyledDateInputField = styled(DateInputField).attrs(({ theme }) => ({
  wrapperStyle: {
    marginBottom: theme.dynamicFormsQuestionSpacing,
  },
}))``;

const StyledBasicDropDownField = styled(BasicDropdownField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
  ${isWeb ? "z-index: auto;" : ""}
`;

const StyledLabeledDropDownField = styled(LabeledBasicDropdownField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
  ${isWeb ? "z-index: auto;" : ""}
`;

const StyledCreatableDropDownField = styled(CreatableDropdownField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
  ${isWeb ? "z-index: auto;" : ""}
`;

const StyledLabeledCreatableDropDownField = styled(
  LabeledCreatableDropdownField
)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
  ${isWeb ? "z-index: auto;" : ""}
`;

const StyledRadioListField = styled(RadioInputListField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledCheckboxField = styled(CheckboxField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledLabelError = styled(Callout).attrs({
  type: "danger",
})`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
  flex-basis: auto;
`;

const StyledCallout = styled(Callout)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledCheckboxListField = styled(CheckboxListField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledObjectListQuestionField = styled(ObjectListQuestionField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledAddressValidationQuestionField = styled(
  AddressValidationQuestionField
)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledInsuranceValidationQuestionField = styled(
  InsuranceValidationQuestionField
)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledPhysicianSearchField = styled(PhysicianSearchField)`
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const DynamicFormQuestion: React.FC<Omit<QuestionProps, "key">> = ({
  id,
  type,
  label,
  placeholder,
  options = [],
  skipOptionTranslation,
  intent,
  description,
  exclusiveWith,
  interpolation,
  optionsSchema = [],
  addLabel,
  isCreatable,
}) => {
  const labelMessage = getMessageFromTreeOrKey(label);
  const placeholderMessage = getMessageFromTreeOrKey(placeholder!);
  const descriptionMessage = getMessageFromTreeOrKey(description!);

  const { values: allFormikValues } = useFormikContext<FormikValues>();

  const labelMessageValues = generateInterpolationValues(
    allFormikValues,
    interpolation
  );

  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const sharedProps = {
    name: id,
    testID: `dynamic-form-${id}-field`,
    labelMessage:
      label !== null
        ? {
            message: labelMessage,
            values: labelMessageValues,
          }
        : undefined,
    placeholderMessage,
    helperText: descriptionMessage,
    isLarge: true,
  };

  const translatedOptions = options?.map((o) => {
    const translated = {
      value: o.value.toString(),
      description: o.description
        ? skipOptionTranslation
          ? {
              message: messageTree.common.primitives.x,
              values: { x: o.description },
            }
          : getMessageFromTreeOrKey(o.description)
        : undefined,
      label: skipOptionTranslation
        ? {
            message: messageTree.common.primitives.x,
            values: { x: o.label },
          }
        : getMessageFromTreeOrKey(o.label),
    };

    return translated;
  });

  // This is to handle the state where a label key is messed up for translations
  if (!(label === null) && !labelMessage) {
    return (
      <StyledLabelError
        description={`Oh no something went wrong with the --${id.toUpperCase()}---${type.toUpperCase()}-- field`}
      />
    );
  }

  const sharedDropdownProps = {
    ...sharedProps,
    options: translatedOptions,
    filterFunction: (
      item: DropdownOptionProps<unknown>,
      inputValue: unknown
    ) => {
      return (formatMessage(item.label) as string)
        .toLowerCase()
        .includes((inputValue as string).toLowerCase());
    },
    fieldName: id,
    overlap: true,
  };

  switch (type) {
    case "text":
    case "number":
      return <StyledInputField {...sharedProps} />;
    case "textArea":
      return <StyledInputField {...sharedProps} multiline numberOfLines={4} />;
    case "date":
      return <StyledDateInputField {...sharedProps} />;
    case "dropdown":
      if (label !== null) {
        return isCreatable ? (
          <StyledLabeledCreatableDropDownField
            {...sharedDropdownProps}
            labelMessage={sharedProps.labelMessage as VirtaIntlMessage}
          />
        ) : (
          <StyledLabeledDropDownField
            {...sharedDropdownProps}
            labelMessage={sharedProps.labelMessage as VirtaIntlMessage}
          />
        );
      }
      return isCreatable ? (
        <StyledCreatableDropDownField {...sharedDropdownProps} />
      ) : (
        <StyledBasicDropDownField {...sharedDropdownProps} />
      );
    case "radio":
      return (
        <StyledRadioListField
          {...sharedProps}
          options={translatedOptions}
          isButton
        />
      );
    case "checkbox":
      return <StyledCheckboxField {...sharedProps} />;
    case "checklist":
      return (
        <StyledCheckboxListField
          {...sharedProps}
          options={translatedOptions}
          isButton
          multiple
          exclusiveWith={exclusiveWith}
        />
      );
    case "callout":
      return (
        <StyledCallout
          title={label !== null ? sharedProps.labelMessage : undefined}
          intent={intent as CalloutProps["intent"]}
          description={{
            message: descriptionMessage,
            values: labelMessageValues,
          }}
        />
      );
    case "objectList":
      return (
        <StyledObjectListQuestionField
          name={id}
          optionsSchema={optionsSchema as QuestionProps[]}
          addLabel={addLabel as string}
        />
      );
    case "addressValidation":
      return <StyledAddressValidationQuestionField name={id as AddressType} />;
    case "insuranceValidation":
      return <StyledInsuranceValidationQuestionField name={id} />;
    case "pcpSearch":
      return (
        <StyledPhysicianSearchField
          {...sharedProps}
          labelMessage={sharedProps.labelMessage as VirtaIntlMessage}
        />
      );
    case "fileUpload":
      return (
        <FileUpload
          name={id}
          label={sharedProps.labelMessage as VirtaIntlMessage}
        />
      );
    default:
      return null;
  }
};

export default DynamicFormQuestion;
