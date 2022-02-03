import { MessageDescriptor } from "react-intl";

export const en = {
  allergies: "Allergies",
  haveAllergiesFoods: "Do you have allergies or intolerances to any foods?",
  haveAllergiesMedications:
    "Do you have allergies or intolerances to any medications?",
  foodAllergy: "Food Allergy or Intolerance",
  exBanana: "ex. Banana",
  foodAllergyReaction: "What is your reaction to this food?",
  exTongueSwelling: "ex. tongue swelling",
  addFoodAllergy: "Add Food Allergy",
  medAllergy: "Medication Allergy or Intolerance",
  exTylenol: "ex. Tylenol",
  medicationAllergyReaction: "What is your reaction to this medication?",
  exHives: "ex. hives",
  addMedAllergy: "Add Medication Allergy",
};

export const es = {
  allergies: "Alergias",
  haveAllergiesFoods: "¿Es alérgico o intolerante a algún alimento?",
  haveAllergiesMedications: "¿Es alérgico o intolerante a algún medicamento?",
  foodAllergy: "Alergia o intolerancia alimenticia",
  exBanana: "Ejemplo: banana",
  foodAllergyReaction: "¿Cuál es su reacción a esta comida?",
  exTongueSwelling: "Ejemplo: hinchazón de la lengua",
  addFoodAllergy: "Agregar alergia alimentaria",
  medAllergy: "Alergia o intolerancia a un medicamento",
  exTylenol: "Ejemplo: Tylenol",
  medicationAllergyReaction: "¿Cuál es su reacción a este medicamento?",
  exHives: "Ejemplo: urticaria",
  addMedAllergy: "Agregar alergia a un medicamento",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  allergies: {
    id: "allergies",
    defaultMessage: en.allergies,
    description: "The word Allergies, used in EP",
  },
  haveAllergiesFoods: {
    id: "haveAllergiesFoods",
    defaultMessage: en.haveAllergiesFoods,
    description: "Question about any allergies the user has to foods",
  },
  haveAllergiesMedications: {
    id: "haveAllergiesMedications",
    defaultMessage: en.haveAllergiesMedications,
    description: "Question about any allergies the user has to medications",
  },
  foodAllergy: {
    id: "foodAllergy",
    description: "The phrase Food Allergy or Intolerance, used in EP",
    defaultMessage: en.foodAllergy,
  },
  exBanana: {
    id: "exBanana",
    description: "Banana, as an example of a food, used in EP",
    defaultMessage: en.exBanana,
  },
  foodAllergyReaction: {
    id: "foodAllergyReaction",
    description:
      "Question to the user about what their recaction to the allergy is",
    defaultMessage: en.foodAllergyReaction,
  },
  exTongueSwelling: {
    id: "exTongueSwelling",
    description:
      "Tongue swelling as an example of an allergic reaction, used in EP",
    defaultMessage: en.exTongueSwelling,
  },
  addFoodAllergy: {
    id: "addFoodAllergy",
    description: "the phrase Add Food Allergy, used in EP",
    defaultMessage: en.addFoodAllergy,
  },
  medAllergy: {
    id: "medAllergy",
    description: "The phrase Medication Allergy or Intolerance, used in EP",
    defaultMessage: en.medAllergy,
  },
  exTylenol: {
    id: "exTylenol",
    description: "Tylenol as an example of a medication, used in EP",
    defaultMessage: en.exTylenol,
  },
  medicationAllergyReaction: {
    id: "medicationAllergyReaction",
    description:
      "Question to the user about what their recaction to the allergy is",
    defaultMessage: en.medicationAllergyReaction,
  },
  exHives: {
    id: "exHives",
    description: "Hives as an example of an allergic reaction, used in EP",
    defaultMessage: en.exHives,
  },
  addMedAllergy: {
    id: "addMedAllergy",
    description: "The phrase Add Medication Allergy, used in EP",
    defaultMessage: en.addMedAllergy,
  },
};
