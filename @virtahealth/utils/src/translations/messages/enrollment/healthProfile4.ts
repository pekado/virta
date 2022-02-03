import { MessageDescriptor } from "react-intl";

export const en = {
  medications: "Medications",
  pleaseListMeds:
    "Please list all medications you are currently taking, including dosage and frequency. They can be prescription, over–the–counter, herbals, vitamins or supplements.",
  haveMedications: "Do you have any medications to report?",
  fullMedName: "Full Medication Name",
  exMetformin: "ex. Metformin IR",
  strength: "Strength",
  ex500mg: "ex. 500mg",
  doseAndFrequency: "Dose AND Frequency (including time of day)",
  ex1TabAm: "ex: 1 tab in morning, 2 tabs with dinner",
  addMedication: "Add Medication",
};

export const es = {
  medications: "Medicamentos",
  pleaseListMeds:
    "Enumere todos los medicamentos que está tomando, incluida la dosis y la frecuencia. Pueden ser medicamentos con receta, de venta libre, fitoterápicos, vitaminas o suplementos.",
  haveMedications: "¿Quiere informar sobre algún medicamento?",
  fullMedName: "Nombre completo del medicamento",
  exMetformin: "Ejemplo: metformina LI",
  strength: "Concentración",
  ex500mg: "Ejemplo: 500 mg",
  doseAndFrequency: "Dosis Y frecuencia (incluido el momento del día)",
  ex1TabAm: "Ejemplo: 1 comprimido por la mañana, 2 comprimidos con la cena",
  addMedication: "Agregar medicamento",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  medications: {
    id: "medications",
    defaultMessage: en.medications,
    description: "The word Medications, used in EP",
  },
  pleaseListMeds: {
    id: "pleaseListMeds",
    defaultMessage: en.pleaseListMeds,
    description: "An instruction to list all current medications, used in EP",
  },
  haveMedications: {
    id: "haveMedications",
    defaultMessage: en.haveMedications,
    description:
      "Question to the user about whether they are taking any medications",
  },
  fullMedName: {
    id: "fullMedName",
    defaultMessage: en.fullMedName,
    description: "Field descriptor for the name of a medication, used in EP",
  },
  exMetformin: {
    id: "exMetformin",
    defaultMessage: en.exMetformin,
    description: "Metformin as an example of a medication, used in EP",
  },
  strength: {
    id: "strength",
    defaultMessage: en.strength,
    description: "Descriptor of the strength of a medication, used in EP",
  },
  ex500mg: {
    id: "ex500mg",
    defaultMessage: en.ex500mg,
    description: "500 milligrams, as an example of a dosage, used in EP",
  },
  doseAndFrequency: {
    id: "doseAndFrequency",
    defaultMessage: en.doseAndFrequency,
    description:
      "Prompt to provide the dose and frequency of use of a medication, used in EP",
  },
  ex1TabAm: {
    id: "ex1TabAm",
    defaultMessage: en.ex1TabAm,
    description: "Example of dose and frequency information, used in EP",
  },
  addMedication: {
    id: "addMedication",
    defaultMessage: en.addMedication,
    description: "The action Add Medication, used in EP",
  },
};
