import { MessageDescriptor } from "react-intl";

export interface AnswerChoice {
  id: number;
  label: string;
  code?: string;
}

export const getAnswerChoicesFromContainedValueSet: (
  valueSet: fhir.ValueSet
) => AnswerChoice[] = (valueSet) => {
  if (valueSet?.compose?.include?.length) {
    const valueSetComposeInclude = valueSet.compose.include[0];
    if (valueSetComposeInclude.concept) {
      return valueSetComposeInclude.concept.map((concept, index) => ({
        id: index,
        label: concept.display || "",
        code: concept.code,
      }));
    }
  }

  return [];
};

export const getValueSetById: (
  reference: string,
  valueSets?: fhir.Resource[]
) => fhir.Resource | undefined = (reference, valueSets) => {
  if (valueSets && reference.length && reference[0] === "#") {
    const id = reference.substring(1);
    return valueSets.find((valueSet) => valueSet.id === id);
  }
  return undefined;
};

export const getMinValueFromExtension = (
  item: fhir.QuestionnaireItem,
  // @ts-ignore - TODO: type this properly
  answerType
) => {
  const extension = item.extension?.find(
    (ext) => ext.url === "http://hl7.org/fhir/StructureDefinition/minValue"
  );
  if (!extension) {
    return null;
  }
  // @ts-ignore - TODO: type this properly
  return extension[answerType];
};

export const getMaxValueFromExtension = (
  item: fhir.QuestionnaireItem,
  // @ts-ignore - TODO: type this properly
  answerType
) => {
  const extension = item.extension?.find(
    (ext) => ext.url === "http://hl7.org/fhir/StructureDefinition/maxValue"
  );
  if (!extension) {
    return null;
  }
  // @ts-ignore - TODO: type this properly
  return extension[answerType];
};

const nonNumericErrorMessage = {
  id: "fhirQuestionItemInput.errorMessages.nonNumericError",
  description: "The error message displayed when an answer should be numeric",
  defaultMessage: "Not a numeric value",
};

// Not sure how to make this more a user friendly message
// @ts-ignore - TODO: add types
const failedRegexErrorMessage = (regex) => {
  return {
    id: "fhirQuestionItemInput.errorMessages.failedRegexError",
    description:
      "The error message displayed when an answer does not match the regex format in the question item",
    defaultMessage: `Does not match format: ${regex}`,
  };
};

// @ts-ignore - TODO: add types
const minErrorMessage = (minValue) => {
  return {
    id: "fhirQuestionItemInput.errorMessages.minValueError",
    description:
      "The error message displayed when an answer is below the min value",
    defaultMessage: `Value should be above ${minValue}`,
  };
};

// @ts-ignore - TODO: add types
const maxErrorMessage = (maxValue) => {
  return {
    id: "fhirQuestionItemInput.errorMessages.maxValueError",
    description:
      "The error message displayed when an answer is above the max value",
    defaultMessage: `Value should be below ${maxValue}`,
  };
};

export const validateAnswer = (
  text: string,
  itemData: fhir.QuestionnaireItem,
  answerType: string,
  setValidationError: (error?: MessageDescriptor) => void,
  validationError?: MessageDescriptor,
  regexExtension?: fhir.Extension
) => {
  // Only do numeric validation for decimal and integer answers
  if (
    answerType !== "valueDecimal" &&
    answerType !== "valueInteger" &&
    answerType !== "valueQuantity"
  ) {
    return;
  }

  if (text.length === 0 && validationError) {
    return setValidationError(undefined);
  }

  const parsedAnswer = Number(text);
  if (isNaN(parsedAnswer)) {
    if (regexExtension?.valueString) {
      const regex = new RegExp(regexExtension.valueString);
      const isValid = regex.test(text);
      if (!isValid) {
        return setValidationError(
          failedRegexErrorMessage(regexExtension.valueString)
        );
      } else {
        if (validationError) {
          return setValidationError(undefined);
        }
        return;
      }
    }
    return setValidationError(nonNumericErrorMessage);
  }

  const minValue = getMinValueFromExtension(itemData, answerType);
  if ((minValue || minValue === 0) && parsedAnswer < minValue) {
    return setValidationError(minErrorMessage(minValue));
  }

  const maxValue = getMaxValueFromExtension(itemData, answerType);
  if (maxValue && parsedAnswer > maxValue) {
    return setValidationError(maxErrorMessage(maxValue));
  }

  // Reset error if none are caught by the checks above
  if (validationError) {
    return setValidationError(undefined);
  }
};
