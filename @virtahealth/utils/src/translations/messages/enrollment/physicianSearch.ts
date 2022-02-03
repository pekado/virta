import { MessageDescriptor } from "react-intl";

export const en = {
  yourHealthProfile: "Your Health Profile",
  doYouHavePCP: "Do you have a Primary Care Provider?",
  providerContact: "Provider Contact Information",
  providerInfo: "Your Provider's Information",
  providerContactDescription:
    "A primary care provider (PCP) is a health care professional who practices general medicine and is the person you see for routine checkups or non-emergency medical care.",
  findPrimaryCareProvider: "Find your Primary Care Provider",
  searchProviderText: "Search within 25 miles of {postalCode}",
  postalCodeInputPlaceholder: "Enter Provider Postal Code",
  providerNameInputPlaceholder: "Enter Provider Name",
  manuallyAddDetails: "+ Add provider details manually",
  noProvidersFound: "No providers were found",
};

export const es = {
  yourHealthProfile: "Su perfil de salud",
  doYouHavePCP: "¿Cuenta con un proveedor de atención primaria?",
  providerContact: "Información de contacto del proveedor",
  providerInfo: "Información sobre su proveedor",
  providerContactDescription:
    "Un proveedor de atención primaria (PCP) es un profesional de la salud que practica la medicina general y es quien realiza sus chequeos de rutina y le brinda atención médica que no es de emergencia.",
  findPrimaryCareProvider: "Encuentre a su proveedor de atención primaria",
  searchProviderText: "Buscar dentro de las 25 millas de {postalCode}",
  postalCodeInputPlaceholder: "Ingrese el código postal de su proveedor",
  providerNameInputPlaceholder: "Ingresar nombre del proveedor",
  manuallyAddDetails: "+ Agregar la información del proveedor de forma manual",
  noProvidersFound: "",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  yourHealthProfile: {
    id: "yourHealthProfile",
    defaultMessage: en.yourHealthProfile,
    description: "Main header",
  },
  providerContact: {
    id: "providerContact",
    defaultMessage: en.providerContact,
    description: "Section header",
  },
  providerContactDescription: {
    id: "providerContactDescription",
    defaultMessage: en.providerContactDescription,
    description: "section description",
  },
  doYouHavePCP: {
    id: "doYouHavePCP",
    defaultMessage: en.doYouHavePCP,
    description: "Input label",
  },
  providerInfo: {
    id: "providerInfo",
    defaultMessage: en.providerInfo,
    description: "Section header",
  },
  findPrimaryCareProvider: {
    id: "findPrimaryCareProvider",
    defaultMessage: en.findPrimaryCareProvider,
    description: "Input Label",
  },
  searchProviderText: {
    id: "searchProviderText",
    defaultMessage: en.searchProviderText,
    description: "Input Label",
  },
  postalCodeInputPlaceholder: {
    id: "postalCodeInputPlaceholder",
    defaultMessage: en.postalCodeInputPlaceholder,
    description: "Placeholder text",
  },
  providerNameInputPlaceholder: {
    id: "providerNameInputPlaceholder",
    defaultMessage: en.providerNameInputPlaceholder,
    description: "Placeholder text",
  },
  manuallyAddDetails: {
    id: "manuallyAddDetails",
    defaultMessage: en.manuallyAddDetails,
    description: "Add manual details button label",
  },
  noProvidersFound: {
    id: "noProvidersFound",
    defaultMessage: en.noProvidersFound,
    description: "No results text",
  },
};
