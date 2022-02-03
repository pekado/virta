import { MessageDescriptor } from "react-intl";

export const en = {
  lifestyle: "Lifestyle",
  alcoholFrequency: "How often do you drink alcohol on average?",
  lessOneDrink: "Less than 1 drink per day",
  oneDrink: "1 drink per day",
  twoDrinks: "2 drinks per day",
  moreThanTwoDrinks: "More than 2 drinks per day",
  noAlcohol: "I do not consume alcohol",
  tobaccoFrequency: "How often do you smoke or consume tobacco?",
  smokeDaily: "I smoke or use other tobacco about every day",
  smokeOccasionally: "I smoke or use tobacco occasionally",
  pastSmoker: "I used to smoke or use tobacco but quit completely",
  neverSmoked: "I have never smoked or used tobacco",
  whatIsYourOccupation: "What is your current occupation?",
  liveWith: "Who, if anyone, lives with you at home?",
  foodDiet: "Foods & Diet",
  onMedicalDiet:
    "Do you follow a medically supervised or medically prescribed diet?",
  moreDetails: "Please provide more details",
};

export const es = {
  lifestyle: "Estilo de vida",
  alcoholFrequency: "¿Con qué frecuencia bebe alcohol en promedio?",
  lessOneDrink: "Menos de un vaso por día",
  oneDrink: "Un vaso por día",
  twoDrinks: "Dos vasos por día",
  moreThanTwoDrinks: "Más de dos vasos por día",
  noAlcohol: "No consumo alcohol",
  tobaccoFrequency: "¿Con qué frecuencia fuma o consume tabaco?",
  smokeDaily: "Fumo o consumo otro tipo de tabaco casi todos los días",
  smokeOccasionally: "Fumo o consumo tabaco de forma ocasional",
  pastSmoker: "Solía fumar o consumir tabaco, pero lo dejé por completo",
  neverSmoked: "Nunca fumé ni consumí tabaco",
  whatIsYourOccupation: "¿Cuál es su ocupación actual?",
  liveWith: "¿Quién vive con usted?",
  foodDiet: "Alimentos y dieta",
  onMedicalDiet: "¿Mantiene una dieta indicada o supervisada por un médico?",
  moreDetails: "Proporcione más detalles",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  lifestyle: {
    id: "lifestyle",
    defaultMessage: en.lifestyle,
    description: "The word Lifestyle, used in EP",
  },
  alcoholFrequency: {
    id: "alcoholFrequency",
    defaultMessage: en.alcoholFrequency,
    description: "Question about alcohol use, used in EP",
  },
  lessOneDrink: {
    id: "lessOneDrink",
    defaultMessage: en.lessOneDrink,
    description:
      "Statement user drinks less than one drink per day, used in EP",
  },
  oneDrink: {
    id: "oneDrink",
    defaultMessage: en.oneDrink,
    description: "States user drinks one drink per day, used in EP",
  },
  twoDrinks: {
    id: "twoDrinks",
    defaultMessage: en.twoDrinks,
    description: "States user drinks two drinks per day, used in EP",
  },
  moreThanTwoDrinks: {
    id: "moreThanTwoDrinks",
    defaultMessage: en.moreThanTwoDrinks,
    description: "States user drinks more than 2 drinks per day, used in EP",
  },
  noAlcohol: {
    id: "noAlcohol",
    defaultMessage: en.noAlcohol,
    description: "States user does not drink, used in EP",
  },
  tobaccoFrequency: {
    id: "tobaccoFrequency",
    defaultMessage: en.tobaccoFrequency,
    description: "Question about tobacco use, used in EP",
  },
  smokeDaily: {
    id: "smokeDaily",
    defaultMessage: en.smokeDaily,
    description: "States user uses tobacco daily, used in EP",
  },
  smokeOccasionally: {
    id: "smokeOccasionally",
    defaultMessage: en.smokeOccasionally,
    description: "States user uses tobacco occasionaly, used in EP",
  },
  pastSmoker: {
    id: "pastSmoker",
    defaultMessage: en.pastSmoker,
    description: "States user has quit tobacco, used in EP",
  },
  neverSmoked: {
    id: "neverSmoked",
    defaultMessage: en.neverSmoked,
    description: "States user has never used tobacco, used in EP",
  },
  whatIsYourOccupation: {
    id: "whatIsYourOccupation",
    defaultMessage: en.whatIsYourOccupation,
    description: "Question about occupation, used in EP",
  },
  liveWith: {
    id: "liveWith",
    defaultMessage: en.liveWith,
    description: "Question about who user lives with, used in EP",
  },
  foodDiet: {
    id: "foodDiet",
    defaultMessage: en.foodDiet,
    description: "Food and Diet, used in EP",
  },
  onMedicalDiet: {
    id: "onMedicalDiet",
    defaultMessage: en.onMedicalDiet,
    description: "Question about medically supervised diet, used in EP",
  },
  moreDetails: {
    id: "moreDetails",
    defaultMessage: en.moreDetails,
    description: "Prompt for more details, used in EP",
  },
};
