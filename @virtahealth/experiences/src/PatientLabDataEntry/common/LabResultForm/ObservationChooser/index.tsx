import * as React from "react";
import {
  Checkbox,
  FhirQuestionnaire,
  Label,
  Spacer,
  styled,
} from "@virtahealth/components";
import { View } from "react-native";

import { headingMessages } from "../../../messages";
import { QUESTIONNAIRES } from "../../../questionnaires";
import { WrappingRow } from "../..";

interface ObservationChooserProps {
  observationQuestionnaires: fhir.Questionnaire[];
  setObservationQuestionnaires: (questionnaires: fhir.Questionnaire[]) => void;
  observationResponses: fhir.QuestionnaireResponse[];
  setObservationResponses: (responses: fhir.QuestionnaireResponse[]) => void;
}

const StyledLabel = styled(Label)`
  font-weight: 600;
  padding-bottom: 12px;
`;

function deleteFromQuestionnaireArray(
  questionnaires: fhir.Questionnaire[],
  linkId: string
) {
  const foundQuestionnaireIndex = questionnaires.findIndex(
    (questionnaire) => questionnaireFirstItemCode(questionnaire) === linkId
  );
  const result = Object.assign(questionnaires);
  if (foundQuestionnaireIndex > -1) {
    result.splice(foundQuestionnaireIndex, 1);
  }
  return result;
}

function deleteFromResponseArray(
  responses: fhir.QuestionnaireResponse[],
  linkId: string
) {
  const foundResponseIndex = responses.findIndex(
    (response) => responseFirstItemCode(response) === linkId
  );
  const result = Object.assign(responses);
  if (foundResponseIndex > -1) {
    result.splice(foundResponseIndex, 1);
  }
  return result;
}

function questionnaireFirstItemCode(questionnaire: fhir.Questionnaire) {
  // @ts-ignore - fix type
  return questionnaire.item[0].linkId;
}

function responseFirstItemCode(response: fhir.QuestionnaireResponse) {
  // @ts-ignore - fix type
  return response.item[0] ? response.item[0].linkId : undefined;
}

const checkboxOrder = [
  "a1c",
  "metabolicPanel",
  "lipid",
  "antiGad",
  "cPeptide",
  "hsCrp",
  "albuminCreatinine",
  "nmrLipoprofile",
  "serumInsulin",
  "tsh",
  "clinicalTrial",
  "biometric",
];

export const ObservationChooser: React.FC<ObservationChooserProps> = ({
  observationQuestionnaires,
  setObservationQuestionnaires,
  observationResponses,
  setObservationResponses,
}) => {
  const isQuestionnaireSelected = (questionnaireName: string) => {
    return observationQuestionnaires.some((questionnaire) => {
      return (
        questionnaire.item &&
        questionnaire.item[0].linkId ===
          "/" +
            QUESTIONNAIRES[questionnaireName as keyof typeof QUESTIONNAIRES]
              .loinc
      );
    });
  };

  const handleCheckBox = (questionnaireName: string) => {
    const questionnaireLinkId =
      QUESTIONNAIRES[questionnaireName as keyof typeof QUESTIONNAIRES].linkId;
    if (isQuestionnaireSelected(questionnaireName)) {
      setObservationQuestionnaires(
        deleteFromQuestionnaireArray(
          observationQuestionnaires,
          questionnaireLinkId
        )
      );
      setObservationResponses(
        deleteFromResponseArray(observationResponses, questionnaireLinkId)
      );
    } else {
      setObservationQuestionnaires(
        observationQuestionnaires.concat([
          QUESTIONNAIRES[questionnaireName as keyof typeof QUESTIONNAIRES]
            .questionnaire,
        ])
      );
    }
  };

  function updateResponse(questionnaireResponse: fhir.QuestionnaireResponse) {
    const foundResponseIndex = observationResponses.findIndex(
      (response) =>
        responseFirstItemCode(response) ===
        responseFirstItemCode(questionnaireResponse)
    );
    if (foundResponseIndex > -1) {
      observationResponses[foundResponseIndex] = questionnaireResponse;
      setObservationResponses(Object.assign(observationResponses));
    } else {
      setObservationResponses(
        observationResponses.concat([questionnaireResponse])
      );
    }
  }

  return (
    <>
      <StyledLabel message={headingMessages.testsOrderedMessage} />
      <WrappingRow>
        {checkboxOrder.map((questionnaireName) => {
          return (
            <>
              <View key={questionnaireName}>
                <Checkbox
                  onPress={() => handleCheckBox(questionnaireName)}
                  labelMessage={
                    QUESTIONNAIRES[
                      questionnaireName as keyof typeof QUESTIONNAIRES
                    ].displayMessage
                  }
                  isChecked={isQuestionnaireSelected(questionnaireName)}
                  testID={questionnaireName}
                />
                <Spacer height={12} />
              </View>
              <Spacer width={8} />
            </>
          );
        })}
      </WrappingRow>
      <Spacer height={10} />
      {observationQuestionnaires.map((questionnaire) => {
        const firstItemCode = questionnaireFirstItemCode(questionnaire);
        return (
          <FhirQuestionnaire
            questionnaire={questionnaire}
            questionnaireResponse={observationResponses.find((response) => {
              return response.item && response.item[0].linkId === firstItemCode;
            })}
            setQuestionnaireResponse={updateResponse}
            key={firstItemCode}
          />
        );
      })}
    </>
  );
};
