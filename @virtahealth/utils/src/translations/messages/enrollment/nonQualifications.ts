import { MessageDescriptor } from "react-intl";

export const en = {
  nqType2: "Type 2 Diabetes",
  nqType2WithMedsBeyondMetformin:
    "Type 2 Diabetes with a qualifying medication",
  nqPrediabetesWithBmiAbove35: "Prediabetes with a BMI over 35",
  nqPrediabetesWithBmiAbove34: "Prediabetes with a BMI over 34",
  nqPrediabetes: "Prediabetes",
  nqObesityWithBmiAbove30: "Obesity with BMI over 30",
  nqNotQualified: "Does not meet qualification criteria",
  nqQualifiedNoDx: "Meets qualification criteria",
};

export const es = {
  nqType2: "Diabetes tipo 2",
  nqType2WithMedsBeyondMetformin:
    "Diabetes de tipo 2 con una medicación que cubre los requisitos",
  nqPrediabetesWithBmiAbove35: "Prediabetes con un IMC superior a 35",
  nqPrediabetesWithBmiAbove34: "Prediabetes con un IMC superior a 34",
  nqPrediabetes: "Prediabetes",
  nqObesityWithBmiAbove30: "Obesidad con IMC superior a 30",
  nqNotQualified: "No cumple los criterios de calificación",
  nqQualifiedNoDx: "Cumple los criterios de calificación",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  nqType2: {
    id: "nqType2",
    defaultMessage: en.nqType2,
    description: "Label for type 2 diabetes qualifier",
  },
  nqType2WithMedsBeyondMetformin: {
    id: "nqType2WithMedsBeyondMetformin",
    defaultMessage: en.nqType2WithMedsBeyondMetformin,
    description:
      "Label for type 2 diabetes with a qualifying medication qualifier",
  },
  nqPrediabetes: {
    id: "nqPrediabetes",
    defaultMessage: en.nqPrediabetes,
    description: "Label for prediabetes qualifier",
  },
  nqPrediabetesWithBmiAbove35: {
    id: "nqPrediabetesWithBmiAbove35",
    defaultMessage: en.nqPrediabetesWithBmiAbove35,
    description: "Label for prediabetes with a BMI over 35 qualifier",
  },
  nqPrediabetesWithBmiAbove34: {
    id: "nqPrediabetesWithBmiAbove34",
    defaultMessage: en.nqPrediabetesWithBmiAbove34,
    description: "Label for prediabetes with a BMI over 34 qualifier",
  },
  nqObesityWithBmiAbove30: {
    id: "nqObesityWithBmiAbove30",
    defaultMessage: en.nqObesityWithBmiAbove30,
    description: "Label for obesity with BMI over 30  qualifier",
  },
  nqNotQualified: {
    id: "nqNotQualified",
    defaultMessage: en.nqNotQualified,
    description: "Label for not qualified eligibility qualification",
  },
  nqQualifiedNoDx: {
    id: "nqQualifiedNoDx",
    defaultMessage: en.nqQualifiedNoDx,
    description:
      "Label for qualified without diagnosis eligibility qualification",
  },
};
