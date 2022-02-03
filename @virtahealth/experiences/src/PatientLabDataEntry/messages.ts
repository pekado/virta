import { defineMessages } from "react-intl";
import { LAB_CORP_NAME, QUEST_NAME } from "./common";

export const headingMessages = {
  resultSetMessage: {
    id: "patientLabDataEntry.headingMessages.resultSet",
    description: "The heading for the result set",
    defaultMessage: "Result Set Information",
  },
  testsOrderedMessage: {
    id: "patientLabDataEntry.headingMessages.testsOrdered",
    description: "The heading for the tests ordered",
    defaultMessage: "Tests Ordered",
  },
  editResults: {
    id: "patientLabDataEntry.headingMessages.editResults",
    description: "The heading for the edit lab result form",
    defaultMessage: "Edit Result Set Information",
  },
};

export const labelMessages = defineMessages({
  address: {
    id: "patientLabDataEntry.labelMessage.address",
    description: "The label for the patient address",
    defaultMessage: "Address",
  },
  antiGad: {
    id: "patientLabDataEntry.labelMessage.antiGad",
    description: "The label for choosing a Anti GAD Panel",
    defaultMessage: "GAD65 Antibody",
  },
  a1c: {
    id: "patientLabDataEntry.labelMessage.a1c",
    description: "The label for choosing a HbA1C panel",
    defaultMessage: "A1C",
  },
  cancel: {
    id: "patientLabDataEntry.labelMessage.cancel",
    description: "The label for the cancel button",
    defaultMessage: "Cancel",
  },
  metabolicPanel: {
    id: "patientLabDataEntry.labelMessage.metabolicPanel",
    description: "The label for choosing a Metabolic Panel",
    defaultMessage: "Metabolic Panel",
  },
  cPeptide: {
    id: "patientLabDataEntry.labelMessage.cPeptide",
    description: "The label for choosing a C-Peptide Panel",
    defaultMessage: "C-Peptide",
  },
  createResult: {
    id: "patientLabDataEntry.labelMessage.createResult",
    description: "The label for the Create Result button",
    defaultMessage: "Add New Result",
  },
  birthDay: {
    id: "patientLabDataEntry.labelMessage.birthDay",
    description: "The label for the patient's date of birth",
    defaultMessage: "Date of Birth",
  },
  hsCrp: {
    id: "patientLabDataEntry.labelMessage.hsCrp",
    description: "The label for choosing a hsCRP Panel",
    defaultMessage: "hsCRP",
  },
  collectionDate: {
    id: "patientLabDataEntry.labelMessages.collectionDate",
    description: "The label for the collection date input",
    defaultMessage: "Collection Date",
  },
  labCorpVendorOption: {
    id: "patientLabDataEntry.labelMessage.vendor.labCorp",
    description: "The label for Lab Corp vendor option",
    defaultMessage: LAB_CORP_NAME,
  },
  lipid: {
    id: "patientLabDataEntry.labelMessage.lipid",
    description: "The label for choosing a lipid panel",
    defaultMessage: "Lipids",
  },
  albuminCreatinine: {
    id: "patientLabDataEntry.labelMessage.albuminCreatinine",
    description: "The label for choosing an albumin/creatinine urine panel",
    defaultMessage: "Albumin/Creatinine, Urine",
  },
  nmrLipoprofile: {
    id: "patientLabDataEntry.labelMessage.nmrLipoprofile",
    description: "The label for choosing a NMR Lipoprofile Panel",
    defaultMessage: "Lipid NMR",
  },
  orderingPhysician: {
    id: "patientLabDataEntry.labelMessage.orderingPhysician",
    description: "The label for the ordering physician field",
    defaultMessage: "Ordering Physician",
  },
  otherVendorOption: {
    id: "patientLabDataEntry.labelMessage.vendor.other",
    description: "The label for Other option",
    defaultMessage: "Other",
  },
  questVendorOption: {
    id: "patientLabDataEntry.labelMessage.vendor.quest",
    description: "The label for Quest vendor option",
    defaultMessage: QUEST_NAME,
  },
  save: {
    id: "patientLabDataEntry.labelMessage.save",
    description: "The label for the save button",
    defaultMessage: "Save",
  },
  serumInsulin: {
    id: "patientLabDataEntry.labelMessage.serumInsulin",
    description: "The label for choosing a Serum Insulin Panel",
    defaultMessage: "Serum Insulin",
  },
  saveAndStartNew: {
    id: "patientLabDataEntry.labelMessage.saveAndStartNew",
    description: "The label for the button to save and clear the form",
    defaultMessage: "Save and Start New",
  },
  tsh: {
    id: "patientLabDataEntry.labelMessage.tsh",
    description: "The label for choosing a TSH Panel",
    defaultMessage: "TSH",
  },
  clinicalTrial: {
    id: "patientLabDataEntry.labelMessage.clinicalTrial",
    description: "The label for choosing a Clinical Trial Panel",
    defaultMessage: "Clinical Trial",
  },
  biometric: {
    id: "patientLabDataEntry.labelMessage.biometric",
    description: "The label for choosing a Biometric Panel",
    defaultMessage: "Biometric",
  },
  vendor: {
    id: "patientLabDataEntry.labelMessage.vendor",
    description: "The label for the radio buttons to select a vendor",
    defaultMessage: "Vendor",
  },
});

export const toastMessages = {
  saveSuccess: {
    id: "patientLabDataEntry.toasterMessage.saveSuccess",
    description:
      "Text for the toast pop-up after a lab result is successfully saved",
    defaultMessage: "Lab result saved",
  },
  saveError: {
    id: "patientLabDataEntry.toasterMessage.saveError",
    description:
      "Text for the toast pop-up after saving a lab result results in an error",
    defaultMessage: "Unable to save lab result",
  },
  invalidFormValuesError: {
    id: "patientLabDataEntry.toasterMessage.invalidFormValuesError",
    description:
      "Text for the toast pop up after form validation results in an error",
    defaultMessage: "Missing or invalid values",
  },
};
