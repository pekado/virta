import { MessageDescriptor } from "react-intl";

export const en = {
  healthHistory: "Health History",
  aboutYouHeader: "About You",
  weNeedMoreInfo: "We need a little more information.",
  nextStepHealthHistory:
    "The next step for enrolling in Virta is filling out your health history, which will be used by your Enrollment Advisor and our Virta Medical Providers to ensure you get the best care possible.", //
  healthFamiliarity:
    "In general, how familiar are you with your health history?",
  notFamiliar: "Not very familiar",
  limitedUnderstanding:
    "I have a very limited understanding of my health history",
  somewhatFamiliar: "Somewhat familiar",
  decentUnderstanding: "I have a decent understanding of my health history",
  veryFamiliar: "Very familiar",
  strongUnderstanding:
    "I have a very strong understanding of my health history",
  howConfident:
    "How confident are you that you can control and manage most of your health problems?",
  whatPrimaryReasons:
    "What are your primary reasons for being interested in Virta?",
  reversingType2: "Reversing type 2 diabetes or prediabetes",
  drugReduction: "Reducing/eliminating diabetes medication",
  a1cReduction: "Reducing A1c",
  weightLoss: "Losing weight",
  controlBloodSugar: "Getting control of blood sugar",
  betterUnderstandingBloodSugar: "Better understanding my blood sugar",
  trackBloodSugar: "Getting supplies to track my blood sugar",
  havingMoreEnergy: "Having more energy",
  metabolicHealth: "Improving metabolic health",
  doYouKnowHowVirtaWorks: "Do you know how the Virta treatment works?",
  knowEnough: "I know enough about how the Virta treatment works.",
  knowBitMore: "I know a little bit about how the Virta treatment works.",
  dontKnowHowVirtaWorks: "I don’t know how the Virta treatment works.",
  readyTryNewDiabetesRx: "Are you ready to try a new diabetes treatment?",
  readyAsap: "I am ready to start as soon as possible!",
  wantToStartBut:
    "I want to start, but I'd like answers to a few questions first.",
  notSureAboutStarting:
    "I am not sure if I want to start. I need to learn more.",
  willingReduceCarbs:
    "Are you willing to reduce your daily carbohydrate intake?", ////
};

export const es = {
  healthHistory: "Antecedentes de salud",
  aboutYouHeader: "Acerca de usted",
  weNeedMoreInfo: "Necesitamos un poco más de información.",
  nextStepHealthHistory:
    "El próximo paso para inscribirse en Virta es completar sus antecedentes de salud, que serán utilizados por su asesor de inscripción y nuestros proveedores médicos de Virta para garantizar que reciba la mejor atención posible.",
  healthFamiliarity:
    "En general, ¿cuánta información tiene sobre sus antecedentes de salud?",
  notFamiliar: "No muy familiarizado",
  limitedUnderstanding: "Sé muy poco sobre mis antecedentes de salud",
  somewhatFamiliar: "Algo familiarizado",
  decentUnderstanding: "Sé algo sobre mis antecedentes de salud",
  veryFamiliar: "Muy familiarizado",
  strongUnderstanding: "Sé bastante sobre mis antecedentes de salud",
  howConfident:
    "¿Con cuánta seguridad considera que puede controlar y manejar la mayoría de sus problemas de salud?",
  whatPrimaryReasons:
    "¿Cuáles son los motivos principales por los que está interesado en Virta?",
  reversingType2: "Revertir la diabetes tipo 2 o prediabetes",
  drugReduction: "Reducir o eliminar los medicamentos para la diabetes",
  a1cReduction: "Reducción de A1c",
  weightLoss: "Bajar de peso",
  controlBloodSugar: "Controlar el azúcar en sangre",
  betterUnderstandingBloodSugar:
    "Cómo entender mejor mi nivel de azúcar en sangre",
  trackBloodSugar:
    "Cómo recibir los suministros para registrar mi nivel de azúcar en sangre",
  havingMoreEnergy: "Tener más energía",
  metabolicHealth: "Mejorar la salud metabólica",
  doYouKnowHowVirtaWorks: "¿Sabe cómo funciona el tratamiento Virta?",
  knowEnough: "Sé lo suficiente sobre cómo funciona el tratamiento Virta.",
  knowBitMore: "Sé un poco sobre cómo funciona el tratamiento Virta.",
  dontKnowHowVirtaWorks: "No sé cómo funciona el tratamiento Virta.",
  readyTryNewDiabetesRx:
    "¿Cuán preparado está para probar un nuevo tratamiento para la diabetes?",
  readyAsap: "¡Estoy listo para comenzar tan pronto como sea posible!",
  wantToStartBut:
    "Quiero empezar, pero primero me gustaría tener respuestas a algunas preguntas.",
  notSureAboutStarting:
    "No estoy seguro de querer empezar. Debo tener más información.",
  willingReduceCarbs:
    "Para tener éxito en Virta, debe adoptar una dieta cetogénica y baja en carbohidratos. ¿Está listo para cambiar su dieta?",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  healthHistory: {
    id: "healthHistory",
    defaultMessage: en.healthHistory,
    description: "The title Health History, used in EP",
  },
  aboutYouHeader: {
    id: "aboutYouHeader",
    defaultMessage: en.aboutYouHeader,
    description: "Title of the first health history form",
  },
  weNeedMoreInfo: {
    id: "weNeedMoreInfo",
    defaultMessage: en.weNeedMoreInfo,
    description: "Description the first health history form",
  },
  nextStepHealthHistory: {
    id: "nextStepHealthHistory",
    defaultMessage: en.nextStepHealthHistory,
    description: "Continued escription the first health history form",
  },
  healthFamiliarity: {
    id: "healthFamiliarity",
    defaultMessage: en.healthFamiliarity,
    description: "Asks how familiar user is with health history, used in EP",
  },
  notFamiliar: {
    id: "notFamiliar",
    defaultMessage: en.notFamiliar,
    description:
      "A negative response to a question about how much knowledge someone has on a topic",
  },
  limitedUnderstanding: {
    id: "limitedUnderstanding",
    defaultMessage: en.limitedUnderstanding,
    description:
      "States user has a limited understanding of health history, used in EP",
  },
  somewhatFamiliar: {
    id: "somewhatFamiliar",
    defaultMessage: en.somewhatFamiliar,
    description:
      "An inconclusive response to a question about how much knowledge someone has on a topic",
  },
  decentUnderstanding: {
    id: "decentUnderstanding",
    defaultMessage: en.decentUnderstanding,
    description:
      "States user has a decent understanding of health history, used in EP",
  },
  veryFamiliar: {
    id: "veryFamiliar",
    defaultMessage: en.veryFamiliar,
    description:
      "An positive response to a question about how much knowledge someone has on a topic",
  },
  strongUnderstanding: {
    id: "strongUnderstanding",
    defaultMessage: en.strongUnderstanding,
    description:
      "States user has a strong understanding of health history, used in EP",
  },
  howConfident: {
    id: "howConfident",
    defaultMessage: en.howConfident,
    description: "Question about confidence in managing health, used in EP",
  },
  whatPrimaryReasons: {
    id: "whatPrimaryReasons",
    defaultMessage: en.whatPrimaryReasons,
    description: "Question about reasons for joining virta, used in EP",
  },
  reversingType2: {
    id: "reversingType2",
    description: "Motivated to reverse type 2 diabetes, used in EP",
    defaultMessage: en.reversingType2,
  },
  drugReduction: {
    id: "drugReduction",
    description: "Motivated to reduce diabetes drugs, used in EP",
    defaultMessage: en.drugReduction,
  },
  a1cReduction: {
    id: "a1cReduction",
    description: "Motivated to reduce A1c, used in EP",
    defaultMessage: en.a1cReduction,
  },
  weightLoss: {
    id: "weightLoss",
    description: "Motivated to lose weight, used in EP",
    defaultMessage: en.weightLoss,
  },
  controlBloodSugar: {
    id: "controlBloodSugar",
    description: "Motivated to control blood sugar, used in EP",
    defaultMessage: en.controlBloodSugar,
  },
  betterUnderstandingBloodSugar: {
    id: "betterUnderstandingBloodSugar",
    description: "Better Understanding My Blood Sugar, used in EP",
    defaultMessage: en.betterUnderstandingBloodSugar,
  },
  trackBloodSugar: {
    id: "trackBloodSugar",
    description: "Getting Supplies to Track My Blood Sugar, used in EP",
    defaultMessage: en.trackBloodSugar,
  },
  havingMoreEnergy: {
    id: "havingMoreEnergy",
    description: "Motivated to have more energy, used in EP",
    defaultMessage: en.havingMoreEnergy,
  },
  metabolicHealth: {
    id: "metabolicHealth",
    description: "Motivated to improve metabolic health, used in EP",
    defaultMessage: en.metabolicHealth,
  },
  doYouKnowHowVirtaWorks: {
    id: "doYouKnowHowVirtaWorks",
    description:
      "The question text for the intake question about knowledge on Virta treatment",
    defaultMessage: en.doYouKnowHowVirtaWorks,
  },
  knowEnough: {
    id: "knowEnough",
    description:
      "The positive response text for the intake question about knowledge on Virta treatment",
    defaultMessage: en.knowEnough,
  },
  knowBitMore: {
    id: "knowBitMore",
    description:
      "The intermediate response text for the intake question about knowledge on Virta treatment",
    defaultMessage: en.knowBitMore,
  },
  dontKnowHowVirtaWorks: {
    id: "dontKnowHowVirtaWorks",
    description:
      "The negative response text for the intake question about knowledge on Virta treatment",
    defaultMessage: en.dontKnowHowVirtaWorks,
  },
  readyTryNewDiabetesRx: {
    id: "readyTryNewDiabetesRx",
    description:
      "The question text for the intake question about readiness to begin treatment",
    defaultMessage: en.readyTryNewDiabetesRx,
  },
  readyAsap: {
    id: "readyAsap",
    description: "Expressing eagerness to start treatment",
    defaultMessage: en.readyAsap,
  },
  wantToStartBut: {
    id: "wantToStartBut",
    description: "Inconclusive about readiness to start treatment",
    defaultMessage: en.wantToStartBut,
  },
  notSureAboutStarting: {
    id: "notSureAboutStarting",
    description: "Negative response about readiness to start treatment",
    defaultMessage: en.notSureAboutStarting,
  },
  willingReduceCarbs: {
    id: "willingReduceCarbs",
    description:
      "The question text for the intake question about willingness to adopt keto",
    defaultMessage: en.willingReduceCarbs,
  },
};
