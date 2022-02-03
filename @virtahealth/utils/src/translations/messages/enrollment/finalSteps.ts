import { MessageDescriptor } from "react-intl";

export const en = {
  finalSteps: "Final Steps",
  thanksForSubmittingInfo: "Thanks for submitting your information, {name}!",
  thanksForSubmittingYourInfoNoName: "Thanks for submitting your information!",
  currentlyReviewing:
    "Our clinical team is currently reviewing your information to make sure that Virta is a good fit for you.",
  mayRequireVideoVisit:
    "You may be asked to schedule a video visit with one of our providers and send us the results of a basic set of labs. Your Enrollment Advisor will discuss your next steps during your intake call.",
  keepEyeNextSteps: "Keep an eye on your inbox for next steps.",
  intakeIsScheduled: "Your Intake Call is Scheduled",
  intakeNotScheduled: "Your Intake Call is Not Scheduled",
  haveQuestionsGetAnswered:
    "Have questions about Virta? Get them answered on your call.",
  viewAppointmentDetails: "View Appointment Details",
};

export const es = {
  finalSteps: "Últimos pasos",
  thanksForSubmittingInfo: "¡Gracias por presentar su información, {name}!",
  thanksForSubmittingYourInfoNoName: "¡Gracias por presentar su información!",
  currentlyReviewing:
    "Nuestro equipo clínico está revisando su información para asegurarse de que Virta sea una buena opción para usted.",
  mayRequireVideoVisit:
    "Es posible que se le solicite que programe una visita por video con uno de nuestros proveedores y que nos envíe los resultados de un conjunto básico de pruebas de laboratorio. Su asesor de inscripción hablará sobre los próximos pasos durante su llamada de admisión.",
  keepEyeNextSteps:
    "Esté atento a su bandeja de entrada para conocer los próximos pasos.",
  intakeIsScheduled: "Su llamada de admisión está programada",
  intakeNotScheduled: "Su llamada de admisión no está programada",
  haveQuestionsGetAnswered:
    "¿Tiene preguntas sobre Virta? Obtenga respuestas durante su llamada.",
  viewAppointmentDetails: "Ver detalles de la cita",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  finalSteps: {
    id: "finalSteps",
    defaultMessage: en.finalSteps,
    description: "The title Final Steps, used in EP",
  },
  thanksForSubmittingInfo: {
    id: "thanksForSubmittingInfo",
    description: "Thanks the user for submitting their enrollment forms",
    defaultMessage: en.thanksForSubmittingInfo,
  },
  thanksForSubmittingYourInfoNoName: {
    id: "thanksForSubmittingYourInfoNoName",
    description:
      "Thanks the user for submitting their enrollment forms without name",
    defaultMessage: en.thanksForSubmittingYourInfoNoName,
  },
  currentlyReviewing: {
    id: "currentlyReviewing",
    description: "Explains that we are reviewing information, used in EP",
    defaultMessage: en.currentlyReviewing,
  },
  mayRequireVideoVisit: {
    id: "mayRequireVideoVisit",
    description:
      "Lets the applicant know that a provider video visit may be required",
    defaultMessage: en.mayRequireVideoVisit,
  },
  keepEyeNextSteps: {
    id: "keepEyeNextSteps",
    description: "An imperative call to await action from us on next steps",
    defaultMessage: en.keepEyeNextSteps,
  },
  intakeIsScheduled: {
    id: "intakeIsScheduled",
    description: "Affirmative statement that the call is scheduled",
    defaultMessage: en.intakeIsScheduled,
  },
  intakeNotScheduled: {
    id: "intakeNotScheduled",
    description: "Negative statement that the call is not scheduled",
    defaultMessage: en.intakeNotScheduled,
  },
  haveQuestionsGetAnswered: {
    id: "haveQuestionsGetAnswered",
    description:
      "Retorical question about whether the user has questions, letting them know we can answer them",
    defaultMessage: en.haveQuestionsGetAnswered,
  },
  viewAppointmentDetails: {
    id: "viewAppointmentDetails",
    description: "Call to action to view appointment details",
    defaultMessage: en.viewAppointmentDetails,
  },
};
