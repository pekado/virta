import { MessageDescriptor } from "react-intl";

export const en = {
  goodJob: "Good job!",
  thanksInfoSubmitted: "Thanks. Your information has been submitted.",
  nextStepIntake:
    "Your next step is to schedule a free, no obilgation call with an Enrollment Advisor. You'll be able to get any questions you have answered and discuss how Virta can help you achieve your health goals.",
  scheduleYourCall: "Schedule Your Call",
  scheduleIntake: "Schedule Intake",
  pickCallDateTime: "Pick a date and time for your call",
  intakeCallScheduled: "Your intake call is scheduled!",
  prepareForCallFillForms:
    "To prepare for your call, we need to know a little more about your health history. Please fill out the form to the best of your ability. During your call, you'll learn more about how Virta works and can get any questions you have answered.",
};

export const es = {
  goodJob: "¡Buen trabajo!",
  thanksInfoSubmitted: "Gracias. Su información se ha enviado.",
  nextStepIntake:
    "Su próximo paso es programar una llamada sin costo y sin obligaciones con un asesor de inscripción. Este asesor podrá responder cualquier pregunta que usted tenga y hablar sobre cómo Virta puede ayudarlo a lograr sus objetivos de salud.",
  scheduleYourCall: "Programe su llamada de admisión",
  scheduleIntake: "Llamada de admisión",
  pickCallDateTime: "Elija una fecha y hora para su llamada",
  intakeCallScheduled: "¡Su llamada de admisión está programada!",
  prepareForCallFillForms:
    "Para prepararnos para su llamada, necesitamos saber un poco más sobre su historial médico. Por favor, complete el formulario lo mejor que pueda. Durante su llamada, conocerá cómo funciona Virta y podrá obtener una respuesta a cualquier pregunta que tenga.",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  goodJob: {
    id: "goodJob",
    defaultMessage: en.goodJob,
    description: "An encouragement to the user that they've done well",
  },
  thanksInfoSubmitted: {
    id: "thanksInfoSubmitted",
    defaultMessage: en.thanksInfoSubmitted,
    description:
      "Lets the user know that their information is successfully received",
  },
  nextStepIntake: {
    id: "nextStepIntake",
    defaultMessage: en.nextStepIntake,
    description:
      "Description to the user of the next step in the process which is an intake call",
  },
  scheduleYourCall: {
    id: "scheduleYourCall",
    defaultMessage: en.scheduleYourCall,
    description:
      "Imperative to the user to schedule their personal intake call",
  },
  scheduleIntake: {
    id: "scheduleIntake",
    defaultMessage: en.scheduleIntake,
    description: "Imperative to the user to schedule an intake call",
  },
  pickCallDateTime: {
    id: "pickCallDateTime",
    defaultMessage: en.pickCallDateTime,
    description:
      "Imperative to the user to select a date and time for the call",
  },
  intakeCallScheduled: {
    id: "intakeCallScheduled",
    defaultMessage: en.intakeCallScheduled,
    description:
      "Letting the user know that the call is scheduled successfully",
  },
  prepareForCallFillForms: {
    id: "prepareForCallFillForms",
    defaultMessage: en.prepareForCallFillForms,
    description:
      "Letting the user know the next step in the process which is filling out more health history",
  },
};
