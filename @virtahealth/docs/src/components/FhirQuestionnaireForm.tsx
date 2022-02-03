import * as React from "react";
import { FhirQuestionnaire } from "@virtahealth/components";
import * as fhirQuestionnaireExample from "./mock_data/sampleQuestionnaire.json";

export const FhirQuestionnaireForm: React.FC = () => {
  const [response, setResponse] = React.useState<any>(); // using any

  return (
    <FhirQuestionnaire
      questionnaireResponse={response}
      setQuestionnaireResponse={(response) => {
        console.log(response);
        setResponse(response);
      }}
      questionnaire={fhirQuestionnaireExample}
    />
  );
};
