import { MessageDescriptor } from "react-intl";

export const en = {
  additionalInformation: "Additional Information",
  additionalInformationDetails:
    "Please list anything else you'd like the Virta medical provider to know before your visit.",
  onlySubmitOnceWarning:
    "For safety reasons, we cannot allow you to resubmit medical responses. Please be sure your information is correct before submitting.",
  pleaseNote: "Please note:",
};

export const es = {
  additionalInformation: "Información adicional",
  additionalInformationDetails:
    "Indique todo aquello que le gustaría que el proveedor médico Virta supiera antes de su visita.",
  onlySubmitOnceWarning:
    "Por razones de seguridad, no podemos permitirle reenviar sus respuestas médicas. Asegúrese de que su información sea correcta antes de enviarla.",
  pleaseNote: "Nota:",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  additionalInformation: {
    id: "additionalInformation",
    defaultMessage: en.additionalInformation,
    description: "Additional Information header text, used in EP",
  },
  additionalInformationDetails: {
    id: "additionalInformationDetails",
    defaultMessage: en.additionalInformationDetails,
    description: "Additional Information details, used in EP",
  },
  onlySubmitOnceWarning: {
    id: "onlySubmitOnceWarning",
    defaultMessage: en.onlySubmitOnceWarning,
    description:
      "Warning before submit that describes why HH cannot be edited after being submitted, used in EP",
  },
  pleaseNote: {
    id: "pleaseNote",
    defaultMessage: en.pleaseNote,
    description: "Header for warning at end of health profile",
  },
};
