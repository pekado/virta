import { MessageDescriptor } from "react-intl";

export const en = {
  glucoseMeterHeader: "Glucose Meter Benefit",
  meterQuestionText:
    "Are you using a OneTouch glucose meter provided through your CVS Pharmacy benefit?",
  hasMeterLabel: "Great!",
  hasMeterMessage:
    "The Home Depot patients will continue to use a OneTouch glucose meter and refill glucose strips through their CVS/Caremark prescription drug benefit.",
  noOrUnsureMeterLabel: "No problem",
  noOrUnsureMeterDescription:
    "To register for a free glucose meter through your CVS/Caremark prescription drug benefit, please call 1-800-588-4456 or visit <a>https://info.caremark.com/managingdiabetes</a>.",
  // leaving the item below in place temporarily for EP backwards compatibility
  noOrUnsureMeterMessage:
    "To register for a free glucose meter through your CVS/Caremark prescription drug benefit, please call 1-800-588-4456 or visit <l>https://info.caremark.com/managingdiabetes</l>.",
  preferredPharmacy: "Preferred Pharmacy",
  preferredPharmacyDetails:
    "Please enter your preferred pharmacy details, where Virta can send glucose strip prescriptions.",
};

export const es = {
  glucoseMeterHeader: "Beneficio del medidor de glucosa",
  meterQuestionText:
    "¿Está utilizando un medidor de glucosa OneTouch proporcionado a través de su beneficio de CVS Pharmacy?",
  hasMeterLabel: "¡Genial!",
  hasMeterMessage:
    "Los pacientes de The Home Depot seguirán utilizando un medidor de glucosa OneTouch y reponiendo las tiras de glucosa a través de su beneficio de medicamentos de venta con receta de CVS/Caremark.",
  noOrUnsureMeterLabel: "No hay problema",
  noOrUnsureMeterDescription:
    "Para registrarse y obtener un medidor de glucosa gratuito a través de su beneficio de medicamentos de venta con receta de CVS/Caremark, llame al 1-800-588-4456 o visite <a>https://info.caremark.com/managingdiabetes</a>.",
  // leaving the item below in place temporarily for EP backwards compatibility
  noOrUnsureMeterMessage:
    "Para registrarse y obtener un medidor de glucosa gratuito a través de su beneficio de medicamentos de venta con receta de CVS/Caremark, llame al 1-800-588-4456 o visite <l>https://info.caremark.com/managingdiabetes</l>.",
  preferredPharmacy: "Farmacia preferida",
  preferredPharmacyDetails:
    "Ingrese los datos de su farmacia preferida, donde Virta puede enviar las recetas de tiras de glucosa.",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  glucoseMeterHeader: {
    id: "glucoseMeterHeader",
    description: "header to describe the glucose meter benefit, used in EP",
    defaultMessage: en.glucoseMeterHeader,
  },
  meterQuestionText: {
    id: "meterQuestionText",
    defaultMessage: en.meterQuestionText,
    description:
      "Question text for The Home Depot applicants as to whether they have the meter, used in EP",
  },
  hasMeterLabel: {
    id: "hasMeterLabel",
    defaultMessage: en.hasMeterLabel,
    description: "Callout title when the applicant has a CVS meter",
  },
  hasMeterMessage: {
    id: "hasMeterMessage",
    defaultMessage: en.hasMeterMessage,
    description: "Callout description when the applicant has a CVS meter",
  },
  noOrUnsureMeterLabel: {
    id: "noOrUnsureMeterLabel",
    defaultMessage: en.noOrUnsureMeterLabel,
    description: "Callout title when the applicant does not have a CVS meter",
  },
  noOrUnsureMeterDescription: {
    id: "noOrUnsureMeterDescription",
    defaultMessage: en.noOrUnsureMeterDescription,
    description:
      "Callout description when the applicant does not have a CVS meter",
  },
  // leaving the item below in place temporarily for EP backwards compatibility
  noOrUnsureMeterMessage: {
    id: "noOrUnsureMeterMessage",
    defaultMessage: en.noOrUnsureMeterMessage,
    description:
      "Callout description when the applicant does not have a CVS meter",
  },
  preferredPharmacy: {
    id: "preferredPharmacy",
    defaultMessage: en.preferredPharmacy,
    description: "Preferred Pharmacy header text, used in EP",
  },
  preferredPharmacyDetails: {
    id: "preferredPharmacyDetails",
    defaultMessage: en.preferredPharmacyDetails,
    description: "Preferred Pharmacy details, used in EP",
  },
};
