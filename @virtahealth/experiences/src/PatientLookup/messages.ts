import { defineMessages } from "react-intl";

export const labels = defineMessages({
  dob: {
    id: "patientLookup.label.dob",
    description: "The label for the Date of Birth input",
    defaultMessage: "Date of Birth",
  },
  firstName: {
    id: "patientLookup.label.firstName",
    description: "The label for the First Name input",
    defaultMessage: "First Name",
  },
  lastName: {
    id: "patientLookup.label.lastName",
    description: "The label for the Last Name input",
    defaultMessage: "Last Name",
  },
  submitButton: {
    id: "patientLookup.label.button",
    description: "The label for the lookup button",
    defaultMessage: "Lookup",
  },
  virtaId: {
    id: "patientLookup.label.button",
    description: "The label for the Virta ID input",
    defaultMessage: "Virta ID",
  },
});

export const copy = defineMessages({
  or: {
    id: "patientLookup.copy.or",
    description: "To link alternatives",
    defaultMessage: "or",
  },
});

export const helpers = defineMessages({
  optional: {
    id: "patientLookup.helpers.optional",
    description: "Indicating an optional field",
    defaultMessage: "Optional",
  },
  dateMask: {
    id: "patientLookup.helpers.dateMask",
    description: "The date mask string",
    defaultMessage: "MM/DD/YYYY",
  },
});

export const errors = defineMessages({
  completeDate: {
    id: "patientLookup.errors.completeDate",
    description: "Error for incomplete date",
    defaultMessage: "Please enter a complete date",
  },
  searchRequirement: {
    id: "patientLookup.errors.searchRequirement",
    description: "Indicates required search parameters",
    defaultMessage: "Please specify either Date of Birth or Virta ID",
  },
});
