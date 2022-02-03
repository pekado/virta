import { MessageDescriptor } from "react-intl";

export const en = {
  surgeries: "Surgeries",
  haveUndergoneSurgeriesTwentyYears:
    "Have you undergone any surgeries in the last 20 years?",
  surgeryNameDescription: "Surgery name or short description",
  whatYearSurgery: "What year was this surgery?",
  addSurgery: "Add Surgery",
};

export const es = {
  surgeries: "Cirugías",
  haveUndergoneSurgeriesTwentyYears:
    "¿Se ha sometido a alguna cirugía en los últimos 20 años?",
  surgeryNameDescription: "Nombre o descripción breve de la cirugía",
  whatYearSurgery: "¿En qué año ocurrió esta cirugía?",
  addSurgery: "Agregar cirugía",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  surgeries: {
    id: "surgeries",
    defaultMessage: en.surgeries,
    description: "The word Surgeries, used in EP",
  },
  haveUndergoneSurgeriesTwentyYears: {
    id: "haveUndergoneSurgeriesTwentyYears",
    defaultMessage: en.haveUndergoneSurgeriesTwentyYears,
    description: "Question to the user about recent surgeries they've had",
  },
  surgeryNameDescription: {
    id: "surgeryNameDescription",
    defaultMessage: en.surgeryNameDescription,
    description: "Question about the name or type of a surgery",
  },
  whatYearSurgery: {
    id: "whatYearSurgery",
    defaultMessage: en.whatYearSurgery,
    description: "Question about the year in which a surgery occured",
  },
  addSurgery: {
    id: "addSurgery",
    defaultMessage: en.addSurgery,
    description:
      "Imperative action to add a surgery to the list of surgeries one has had",
  },
};
