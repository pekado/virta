import { MessageDescriptor } from "react-intl";

export const en = {
  dqIsPregnantNursing: "Pregnancy",
  dqType1Diabetes: "Type 1 Diabetes",
  dqHasHeartAttack: "Heart Attack",
  dqCannotCommunicateInEnglish: "Unsupported Primary Language",
  dqNoSmartphone: "No Smartphone",
  dqNoComputer: "No Computer",
  dqAgeUpperLimit: "Age Limit Exceeded",
  dqAgeLowerLimit: "Age Minimum Not Met",
  dqIsOnDialysis: "Dialysis",
};

export const es = {
  dqIsPregnantNursing: "Embarazo",
  dqType1Diabetes: "Diabetes tipo 1",
  dqHasHeartAttack: "Ataque cardíaco",
  dqCannotCommunicateInEnglish: "Idioma principal no disponible",
  dqNoSmartphone: "Sin teléfono inteligente",
  dqNoComputer: "Sin computadora",
  dqAgeUpperLimit: "Excede el límite de edad",
  dqAgeLowerLimit: "No alcanza la edad mínima",
  dqIsOnDialysis: "Diálisis",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  dqIsPregnantNursing: {
    id: "dqIsPregnantNursing",
    defaultMessage: en.dqIsPregnantNursing,
    description: "Label for disqualifcation due to pregnancy",
  },
  dqType1Diabetes: {
    id: "dqType1Diabetes",
    defaultMessage: en.dqType1Diabetes,
    description: "Label for disqualifcation due to Type 1 Diabetes diagnosis",
  },
  dqHasHeartAttack: {
    id: "dqHasHeartAttack",
    defaultMessage: en.dqHasHeartAttack,
    description: "Label for disqualifcation due to heart attack",
  },
  dqCannotCommunicateInEnglish: {
    id: "dqCannotCommunicateInEnglish",
    defaultMessage: en.dqCannotCommunicateInEnglish,
    description:
      "Label for disqualifcation due to lack of support for applicant's primary language",
  },
  dqNoSmartphone: {
    id: "dqNoSmartphone",
    defaultMessage: en.dqNoSmartphone,
    description:
      "Label for disqualifcation due to applicant's lack of access to a smartphone",
  },
  dqNoComputer: {
    id: "dqNoComputer",
    defaultMessage: en.dqNoComputer,
    description:
      "Label for disqualifcation due to applicant's lack of access to a computer",
  },
  dqAgeUpperLimit: {
    id: "dqAgeUpperLimit",
    defaultMessage: en.dqAgeUpperLimit,
    description:
      "Label for disqualifcation due to applicant exceeding age upper limit",
  },
  dqAgeLowerLimit: {
    id: "dqAgeLowerLimit",
    defaultMessage: en.dqAgeLowerLimit,
    description:
      "Label for disqualifcation due to applicant not meeting age lower limit",
  },
  dqIsOnDialysis: {
    id: "dqIsOnDialysis",
    defaultMessage: en.dqIsOnDialysis,
    description: "Label for disqualifcation due to dialysis",
  },
};
