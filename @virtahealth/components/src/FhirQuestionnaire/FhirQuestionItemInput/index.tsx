import * as React from "react";
import { TouchableOpacityProps, View } from "react-native";
import { MessageDescriptor } from "@formatjs/intl";
import styled from "../../styled-components";
import { Base } from "../../Text";
import { Button } from "../../Button";
import { Input } from "../../Input";
import {
  AnswerChoice,
  getAnswerChoicesFromContainedValueSet,
  getValueSetById,
  validateAnswer,
} from "./utils";

const StyledInput = styled(Input)`
  margin-top: 0px;
  margin-right: 0px;
  min-width: 205px;
`;

const InputWrapper = styled.View`
  margin-right: 32px;
`;

const Spacer = styled.View`
  height: 36px;
`;

const ChoiceInputWrapper = styled.View`
  width: 100%;
  max-width: 350px;
`;

const StyledButton = styled(Button)`
  margin: 5px 0;
`;

const ChoiceItemText = styled(Base)`
  margin-bottom: 12px;
  font-weight: ${({ theme }) => theme.choiceQuestionItemTextFontWeight};
`;

const ChoiceButton: React.FunctionComponent<ChoiceButtonProps> = ({
  label,
  isSelected,
  onPress,
}) => (
  <StyledButton
    intent="secondary"
    appearance={isSelected ? "solid" : "outline"}
    labelMessage={{ defaultMessage: label, id: label }}
    onPress={onPress}
    alignLabel="left"
  />
);

const ChoiceInput: React.FunctionComponent<FhirQuestionItemInputProps> = ({
  itemData,
  questionnaireResponseItem,
  setQuestionnaireResponseItem,
  contained,
}) => {
  let answerChoiceButtons;
  const onPress = (answerChoice: AnswerChoice) => {
    const answer: fhir.QuestionnaireResponseItemAnswer = {
      [ANSWER_TYPE_MAPPING.code]: {
        code: answerChoice.code,
        display: answerChoice.label,
      },
    };
    setQuestionnaireResponseItem({
      linkId: itemData.linkId,
      answer: [answer],
    });
  };
  if (itemData?.options?.reference) {
    const valueSet = getValueSetById(
      itemData.options.reference,
      contained
    ) as fhir.ValueSet;
    if (valueSet) {
      const answerChoices = getAnswerChoicesFromContainedValueSet(valueSet);
      answerChoiceButtons = answerChoices.map((answerChoice) => (
        <ChoiceButton
          key={answerChoice.id}
          label={answerChoice.label}
          isSelected={
            questionnaireResponseItem
              ? // @ts-ignore - figure out how to better access this object
                questionnaireResponseItem.answer![0][ANSWER_TYPE_MAPPING.code]
                  .display === answerChoice.label
              : false
          }
          onPress={() => onPress(answerChoice)}
        />
      ));
    }
  }
  return answerChoiceButtons ? <View>{answerChoiceButtons}</View> : null;
};

export interface ChoiceButtonProps
  extends Pick<
    TouchableOpacityProps,
    "onPress" | "testID" | "style" | "disabled"
  > {
  label: string;
  isSelected: boolean;
}

// An input field for a single question item
export interface FhirQuestionItemInputProps {
  itemData: fhir.QuestionnaireItem;
  setQuestionnaireResponseItem: (item: fhir.QuestionnaireResponseItem) => void;
  questionnaireResponseItem?: fhir.QuestionnaireResponseItem;
  contained?: fhir.Resource[];
}

const ANSWER_TYPE_MAPPING = {
  boolean: "valueBoolean",
  dateTime: "valueDateTime",
  decimal: "valueDecimal",
  integer: "valueInteger",
  quantity: "valueQuantity",
  string: "valueString",
  code: "valueCoding",
};

export const findRegexExtension = (questionItem: fhir.QuestionnaireItem) => {
  return questionItem.extension?.find(
    (ext) => ext.url === "http://hl7.org/fhir/StructureDefinition/regex"
  );
};

export const FhirQuestionItemInput: React.FC<FhirQuestionItemInputProps> = (
  props
) => {
  const { itemData, setQuestionnaireResponseItem, questionnaireResponseItem } =
    props;
  const [validationError, setValidationError] =
    React.useState<MessageDescriptor>();

  const regexExtension = findRegexExtension(itemData);
  const answerType =
    ANSWER_TYPE_MAPPING[itemData.type as keyof typeof ANSWER_TYPE_MAPPING] ||
    "valueString";

  // @ts-ignore - need to type `answerValue`
  const hasAnswerValue = (answerValue) => {
    return (
      answerValue || // if evaluates to false, make sure it's not just a 0 value for a numeric answer
      ((answerType === ANSWER_TYPE_MAPPING.quantity ||
        answerType === ANSWER_TYPE_MAPPING.decimal) &&
        answerValue === 0)
    );
  };

  const setResponseItemValue = (text: string) => {
    const answer: Record<string, string | { value: string }> = {};
    if (answerType === ANSWER_TYPE_MAPPING.quantity) {
      answer[answerType] = { value: text };
    } else {
      answer[answerType] = text;
    }

    setQuestionnaireResponseItem({
      linkId: itemData.linkId,
      answer: [answer],
    });
    // Display any warnings about invalid answers
    validateAnswer(
      text,
      itemData,
      answerType,
      setValidationError,
      validationError,
      regexExtension
    );
  };
  if (itemData.type !== "display" && itemData.code) {
    if (itemData.type === "choice") {
      return (
        <ChoiceInputWrapper>
          <ChoiceItemText>{itemData.text}</ChoiceItemText>
          <ChoiceInput {...props} />
        </ChoiceInputWrapper>
      );
    }
    if (itemData.code[0].code) {
      const itemCode = itemData.code[0] && itemData.code[0].code;
      const itemDisplay = itemData.code[0] && itemData.code[0].display;
      const itemUnit =
        itemData.extension &&
        itemData.extension[0].valueCoding &&
        itemData.extension[0].valueCoding.display;

      let value = "";
      if (questionnaireResponseItem) {
        // @ts-ignore - TODO: type this
        if (hasAnswerValue(questionnaireResponseItem.answer![0][answerType])) {
          if (answerType === ANSWER_TYPE_MAPPING.quantity) {
            value =
              // @ts-ignore - TODO: type this
              questionnaireResponseItem.answer![0][answerType].value.toString();
          } else {
            // @ts-ignore - TODO: type this
            value = questionnaireResponseItem.answer![0][answerType].toString();
          }
        } else if (questionnaireResponseItem.answer![0].valueString) {
          value = questionnaireResponseItem.answer![0].valueString;
        }
      }

      return (
        <InputWrapper key={itemCode || itemData.linkId}>
          <StyledInput
            testID={itemData.linkId}
            onChangeText={setResponseItemValue}
            errorMessage={validationError}
            value={value}
            labelMessage={{ id: itemDisplay, defaultMessage: itemDisplay }}
            insetText={itemUnit}
          />
          <Spacer />
        </InputWrapper>
      );
    }
  }

  return null;
};
