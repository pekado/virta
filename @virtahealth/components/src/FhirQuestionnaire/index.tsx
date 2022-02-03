import * as React from "react";
import { View, ViewProps } from "react-native";
import { FhirQuestionItem } from "./FhirQuestionItem";
import { findResponse, setSubItemResponse } from "./utils";

export { findRegexExtension } from "./FhirQuestionItemInput";

export interface FhirQuestionnaireResponseProps {
  setQuestionnaireResponse: (
    questionnaireResponse: fhir.QuestionnaireResponse
  ) => void;
  questionnaireResponse: fhir.QuestionnaireResponse;
}

export interface FhirQuestionnaireProps extends Pick<ViewProps, "style"> {
  questionnaire: fhir.Questionnaire;
  setQuestionnaireResponse: (
    questionnaireResponse: fhir.QuestionnaireResponse
  ) => void;
  questionnaireResponse?: fhir.QuestionnaireResponse;
}

const defaultQuestionnaireResponse = {
  status: "in-progress",
  item: [],
};

export const FhirQuestionnaire: React.FC<FhirQuestionnaireProps> = ({
  questionnaire,
  setQuestionnaireResponse,
  questionnaireResponse,
  children,
  style,
}) => {
  if (questionnaire.item) {
    const questionnaireInputs = questionnaire.item.map(
      (questionItem: fhir.QuestionnaireItem) => {
        const initializedQuestionnaireResponse = questionnaireResponse
          ? questionnaireResponse
          : defaultQuestionnaireResponse;
        return (
          <FhirQuestionItem
            key={`fhir-question-item-${questionItem.linkId}`}
            questionItem={questionItem}
            setQuestionnaireResponseItem={(item) =>
              setSubItemResponse(
                item,
                // @ts-ignore - TODO: type this properly
                initializedQuestionnaireResponse,
                setQuestionnaireResponse
              )
            }
            questionnaireResponseItem={findResponse(
              questionItem.linkId,
              initializedQuestionnaireResponse.item
            )}
            contained={questionnaire.contained}
          />
        );
      }
    );

    return <View style={style}>{questionnaireInputs}</View>;
  }
  return <View style={style}>{children}</View>;
};
