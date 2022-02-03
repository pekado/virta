import { MessageDescriptor } from "react-intl";

export const en = {
  diabetesHistoryTitle: "Diabetes Diagnosis History",
  howDiagnosed: "How was your diabetes/prediabetes diagnosed?",
  routineScreening: "Routine screening (no symptoms)",
  notHavingSymptoms:
    "I wasn’t having symptoms, but I was diagnosed based on routine screening tests",
  symptomsNotCritical: "Symptoms (not critical)",
  minorSymptoms:
    "I was having minor symptoms but wasn’t hospitalized at the time of diagnosis",
  hospitalization: "Hospitalization",
  hospitalized:
    "I was having symptoms for which I was hospitalized at the time of diagnosis",
  undiagnosed: "Undiagnosed",
  notDiagnosed: "I have not been diagnosed with prediabetes or type 2 diabetes",
  notSureDiagnosis:
    "I am not sure if I have been diagnosed with prediabetes or type 2 diabetes",
  haveYouBeenTreated:
    "Have you ever been treated with insulin in a hospital or urgent care center because your blood sugar was very high?",
};

export const es = {
  diabetesHistoryTitle: "Antecedentes de diagnóstico de diabetes",
  howDiagnosed: "¿Cómo se estableció su diagnóstico de diabetes o prediabetes?",
  routineScreening: "Examen de rutina (sin síntomas)",
  notHavingSymptoms:
    "No tenía síntomas; el diagnóstico se estableció a partir de pruebas de detección de rutina ",
  symptomsNotCritical: "Síntomas (no críticos)",
  minorSymptoms:
    "Tenía síntomas leves, pero no me hospitalizaron en el momento del diagnóstico",
  hospitalization: "Hospitalización",
  hospitalized:
    "Tenía síntomas por los cuales me internaron en el momento del diagnóstico",
  undiagnosed: "No diagnosticado",
  notDiagnosed: "No me han diagnosticado prediabetes o diabetes tipo 2",
  notSureDiagnosis:
    "No estoy seguro de si me han diagnosticado prediabetes o diabetes tipo 2",
  haveYouBeenTreated:
    "¿Alguna vez fue tratado con insulina en un hospital o centro de atención de urgencia porque su nivel de azúcar en sangre era muy elevado?",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  diabetesHistoryTitle: {
    id: "diabetesHistoryTitle",
    defaultMessage: en.diabetesHistoryTitle,
    description: "The title Diabetes Diagnosis History, used in EP",
  },
  howDiagnosed: {
    id: "howDiagnosed",
    defaultMessage: en.howDiagnosed,
    description: "A question asking how the user was diagnosed, used in EP",
  },
  routineScreening: {
    id: "routineScreening",
    defaultMessage: en.routineScreening,
    description:
      "When a condition is diagnosed in the course of a regular healthcare visit",
  },
  notHavingSymptoms: {
    id: "notHavingSymptoms",
    defaultMessage: en.notHavingSymptoms,
    description:
      "Statement that user wasn't having symptoms when diagnosed, used in EP",
  },
  symptomsNotCritical: {
    id: "symptomsNotCritical",
    defaultMessage: en.symptomsNotCritical,
    description:
      "When a condition is diagnosed because of symtoms that were not serious",
  },
  minorSymptoms: {
    id: "minorSymptoms",
    defaultMessage: en.minorSymptoms,
    description:
      "Statement that hte user was having minor symptoms when diagnosed, used in EP",
  },
  hospitalization: {
    id: "hospitalization",
    defaultMessage: en.hospitalization,
    description:
      "When a condition is diagnosed because of symtoms that were serious",
  },
  hospitalized: {
    id: "hospitalized",
    defaultMessage: en.hospitalized,
    description:
      "Statement that the user was hospitalized for symptoms when diagnosed, used in EP",
  },
  undiagnosed: {
    id: "undiagnosed",
    defaultMessage: en.undiagnosed,
    description: "When a condition has not yet been diagnosed",
  },
  notDiagnosed: {
    id: "notDiagnosed",
    defaultMessage: en.notDiagnosed,
    description:
      "States the user has never been diagnosed with diabetes or similar, used in EP",
  },
  notSureDiagnosis: {
    id: "notSureDiagnosis",
    defaultMessage: en.notSureDiagnosis,
    description:
      "When someone is unsure whether a condition has been diagnosed",
  },
  haveYouBeenTreated: {
    id: "haveYouBeenTreated",
    defaultMessage: en.haveYouBeenTreated,
    description:
      "Question asking about hospitalization for high blood sugar, used in EP",
  },
};
