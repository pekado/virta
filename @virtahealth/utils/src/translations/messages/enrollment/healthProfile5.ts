import { MessageDescriptor } from "react-intl";

export const en = {
  providerContactInformation: "Provider Contact Information",
  pcpDefinition:
    "A primary care provider (PCP) is a health care professional who practices general medicine and is the person you see for routine checkups or non-emergency medical care.",
  havePcp: "Do you have a Primary Care Provider?",
  yourProvidersInfo: "Your Provider's Information",
  findYourPcp: "Find your Primary Care Provider",
  enterProviderZip: "Enter Provider Postal Code",
  searchWithin: "Search within 25 miles of {postalCode}",
  enterProvider: "Enter Provider Name",
  addProviderDetailsManually: "Add Provider details manually",
  specialty: "Specialty",
  cardiologist: "Cardiologist",
  endocrinologist: "Endocrinologist",
  internist: "Internist",
  oncologist: "Oncologist",
  pcp: "Primary Care Physician",
  faxNumber: "Fax Number*",
  faxNumberNoticeInstruction:
    "If you would like us to update your Primary Care Provider or Specialist on your progress and medication changes on Virta, please enter the fax number for your provider.",
  faxNumberAsteriskText:
    "*If you don't know your provider’s fax number now, but would like your provider updated, you can email the information to your Enrollment Advisor",
};

export const es = {
  providerContactInformation: "Información de contacto del proveedor",
  pcpDefinition:
    "Un proveedor de atención primaria (PCP) es un profesional de la salud que practica la medicina general y es quien realiza sus chequeos de rutina y le brinda atención médica que no es de emergencia.",
  havePcp: "¿Cuenta con un proveedor de atención primaria?",
  yourProvidersInfo: "Información sobre su proveedor",
  findYourPcp: "Encuentre a su proveedor de atención primaria",
  enterProviderZip: "Ingrese el código postal de su proveedor",
  searchWithin: "Buscar dentro de las 25 millas de {postalCode}",
  enterProvider: "Ingresar nombre del proveedor",
  addProviderDetailsManually:
    "Agregar la información del proveedor de forma manual",
  specialty: "Especialidad",
  cardiologist: "Cardiólogo",
  endocrinologist: "Endocrinólogo",
  internist: "Médico internista",
  oncologist: "Oncólogo",
  pcp: "Médico de atención primaria",
  faxNumber: "Número de fax",
  faxNumberNoticeInstruction:
    "Si desea que enviemos información actualizada sobre su progreso y cambios de medicación en Virta a su proveedor de atención primaria o a su especialista, ingrese el número de fax de su proveedor.",
  faxNumberAsteriskText:
    "*Si no sabe el número de fax de su proveedor ahora, pero quisiera que enviemos información actualizada a su proveedor, puede enviar la información por correo electrónico a su asesor de inscripción.",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  providerContactInformation: {
    id: "providerContactInformation",
    defaultMessage: en.providerContactInformation,
    description: "Provider Contact Information, used in EP",
  },
  pcpDefinition: {
    id: "pcpDefinition",
    defaultMessage: en.pcpDefinition,
    description: "Definition about what a primary care provider is",
  },
  havePcp: {
    id: "havePcp",
    defaultMessage: en.havePcp,
    description:
      "Question to the user about whether they have a primary care provider",
  },
  yourProvidersInfo: {
    id: "yourProvidersInfo",
    defaultMessage: en.yourProvidersInfo,
    description:
      "Title for the user's primary care provider information section",
  },
  findYourPcp: {
    id: "findYourPcp",
    defaultMessage: en.findYourPcp,
    description:
      "Imperative action to search for or find the primary care provider",
  },
  enterProviderZip: {
    id: "enterProviderZip",
    defaultMessage: en.enterProviderZip,
    description: "Imperative action to enter the provider's zip code",
  },
  searchWithin: {
    id: "searchWithin",
    defaultMessage: en.searchWithin,
    description: "Instruction to search within a radius, used in EP",
  },
  enterProvider: {
    id: "enterProvider",
    defaultMessage: en.enterProvider,
    description: "Provider name for search, used in EP",
  },
  addProviderDetailsManually: {
    id: "addProviderDetailsManually",
    defaultMessage: en.addProviderDetailsManually,
    description: "Prompt to add provider details manually, used in EP",
  },
  specialty: {
    id: "specialty",
    description: "The title for the type of provider",
    defaultMessage: en.specialty,
  },
  cardiologist: {
    id: "cardiologist",
    description: "Cardiologist specialist title, used in EP",
    defaultMessage: en.cardiologist,
  },
  endocrinologist: {
    id: "endocrinologist",
    description: "Endocrinologist specialist title, used in EP",
    defaultMessage: en.endocrinologist,
  },
  internist: {
    id: "internist",
    description: "Internist specialist title, used in EP",
    defaultMessage: en.internist,
  },
  oncologist: {
    id: "oncologist",
    description: "Oncologist specialist title, used in EP",
    defaultMessage: en.oncologist,
  },
  pcp: {
    id: "pcp",
    description: "PCP specialist title, used in EP",
    defaultMessage: en.pcp,
  },

  faxNumberNoticeInstruction: {
    id: "faxNumberNoticeInstruction",
    defaultMessage: en.faxNumberNoticeInstruction,
    description: "instruction notice about fax number field, used in EP",
  },
  faxNumberAsteriskText: {
    id: "faxNumberAsteriskText",
    defaultMessage: en.faxNumberAsteriskText,
    description: "helper text for fax number field, used in EP",
  },
};
