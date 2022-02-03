import { MessageDescriptor } from "react-intl";

export const en = {
  yourHealthProfile: "Your Health Profile",
  ancestry: "Ancestry",
  yourRace:
    "With which racial or ethnic group(s) do you most identify? Please check all that apply to you.",
  americanNative: "American Indian or Alaska Native",
  asian: "Asian",
  africanDescent: "Black or African American",
  latinx: "Hispanic or Latino",
  pacificIslander: "Native Hawaiian or Other Pacific Islander",
  europeanDescent: "White",
  raceNotDescribed: "My race/ethnicity is not described by any of the labels",
  preferNotSay: "I prefer not to say",
  familyHealthTitle: "Family Health History",
  provideBestCareFamilyHistory:
    "In order to provide the best care, it's important for us to know your family's health history. If you are unsure about your biological family's health history, you can skip this section.",
  fatherAge: "Father's age (or age at death)",
  motherAge: "Mother's age (or age at death)",
  addSibling: "Add Sibling",
  siblingAge: "Sibling's age (or age at death)",
  fatherDeceased: "My biological father is deceased",
  motherDeceased: "My biological mother is deceased",
  siblingDeceased: "My biological sibling is deceased",
  doYouHaveSiblings: "Do you have any biological siblings?",
  listMedProblems:
    "Please provide a list of this family member's medical problems:",
};

export const es = {
  yourHealthProfile: "Su perfil de salud",
  ancestry: "Ascendencia",
  yourRace:
    "¿Con qué grupo racial o étnico se identifica más? Marque todas las opciones que correspondan.",
  americanNative: "Indio americano y nativo de Alaska",
  asian: "Asiático",
  africanDescent: "Negro o afroestadounidense",
  latinx: "Hispano o latino",
  pacificIslander: "Nativo de Hawái u otra isla del Pacífico",
  europeanDescent: "Blanco",
  raceNotDescribed: "Ninguna de estas categorías describe mi raza/etnia",
  preferNotSay: "Prefiero no decirlo",
  familyHealthTitle: "Antecedentes de salud familiares",
  provideBestCareFamilyHistory:
    "Para poder ofrecer la mejor atención, es importante que conozcamos los antecedentes médicos de su familia. Si no está seguro de los antecedentes médicos de su familia biológica, puede omitir esta sección.",
  fatherAge: "Edad del padre (o edad al morir)",
  motherAge: "Edad de la madre (o edad al morir)",
  addSibling: "Agregar hermano",
  siblingAge: "Edad del hermano (o edad al morir)",
  fatherDeceased: "Mi padre biológico falleció",
  motherDeceased: "Mi madre biológica falleció",
  siblingDeceased: "Mi hermano(a) biológico(a) falleció",
  doYouHaveSiblings: "¿Tiene hermanos biológicos?",
  listMedProblems: "Enumere los problemas médicos de este familiar:",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  yourHealthProfile: {
    id: "yourHealthProfile",
    defaultMessage: en.yourHealthProfile,
    description: "Title for a health history form",
  },
  ancestry: {
    id: "ancestry",
    defaultMessage: en.ancestry,
    description: "The word Ancestry, used in EP",
  },
  yourRace: {
    id: "yourRace",
    defaultMessage: en.yourRace,
    description: "Prompt to identify racial or ethnic groups, used in EP",
  },
  americanNative: {
    id: "americanNative",
    defaultMessage: en.americanNative,
    description: "American native heritige descriptor, used in EP",
  },
  asian: {
    id: "asian",
    defaultMessage: en.asian,
    description: "Asian heritage descriptor, used in EP",
  },
  africanDescent: {
    id: "africanDescent",
    defaultMessage: en.africanDescent,
    description: "African heritage descriptor, used in EP",
  },
  latinx: {
    id: "latinx",
    defaultMessage: en.latinx,
    description: "Latinx heritige descriptor, used in EP",
  },
  pacificIslander: {
    id: "pacificIslander",
    defaultMessage: en.pacificIslander,
    description: "Pacific islander heritage descriptor, used in EP",
  },
  europeanDescent: {
    id: "europeanDescent",
    defaultMessage: en.europeanDescent,
    description: "European heritage descriptor, used in EP",
  },
  raceNotDescribed: {
    id: "raceNotDescribed",
    defaultMessage: en.raceNotDescribed,
    description:
      "Statement that the users race is not described by the above options, used in EP",
  },
  preferNotSay: {
    id: "preferNotSay",
    defaultMessage: en.preferNotSay,
    description: "The phrase 'I prefer not to say', used in EP",
  },
  familyHealthTitle: {
    id: "familyHealthTitle",
    defaultMessage: en.familyHealthTitle,
    description: "Title for the family health section, used in EP",
  },
  provideBestCareFamilyHistory: {
    id: "provideBestCareFamilyHistory",
    defaultMessage: en.provideBestCareFamilyHistory,
    description:
      "Message to the user about why we need to know their family health history",
  },
  fatherAge: {
    id: "fatherAge",
    defaultMessage: en.fatherAge,
    description: "Prompt for fathers age or age at death, used in EP",
  },
  motherAge: {
    id: "motherAge",
    defaultMessage: en.motherAge,
    description: "Prompt for mothers age or age at death, used in EP",
  },
  addSibling: {
    id: "addSibling",
    defaultMessage: en.addSibling,
    description: "Action to add a sibling, used in EP",
  },
  siblingAge: {
    id: "siblingAge",
    defaultMessage: en.siblingAge,
    description: "Asks for the age of a sibling or age at death, used in EP",
  },
  fatherDeceased: {
    id: "fatherDeceased",
    defaultMessage: en.fatherDeceased,
    description: "Statement that one's father is deceased",
  },
  motherDeceased: {
    id: "motherDeceased",
    defaultMessage: en.motherDeceased,
    description: "Statement that one's mother is deceased",
  },
  siblingDeceased: {
    id: "siblingDeceased",
    defaultMessage: en.siblingDeceased,
    description: "Statement that one's sibling is deceased",
  },
  doYouHaveSiblings: {
    id: "doYouHaveSiblings",
    defaultMessage: en.doYouHaveSiblings,
    description: "Question to check if user has siblings",
  },
  listMedProblems: {
    id: "listMedProblems",
    defaultMessage: en.listMedProblems,
    description: "Prompt to provide family health history, used in EP",
  },
};
