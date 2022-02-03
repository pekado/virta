import { defineMessages } from "react-intl";

export const errors = defineMessages({
  completeDate: {
    id: "patientLookup.errors.completeDate",
    description: "Error for incomplete date",
    defaultMessage: "Please enter a complete date",
  },
  invalidEmail: {
    id: "contactEdit.error.invalidEmail",
    description: "The error message for invalid email",
    defaultMessage: "Invalid email",
  },
  required: {
    id: "contactEdit.error.required",
    description: "The error message for a generic required field",
    defaultMessage: "Required",
  },
});

export const helpers = defineMessages({
  dob: {
    id: "contactEdit.helpers.dob",
    description: "The helper text for the form's DOB input",
    defaultMessage: "MM/DD/YYYY",
  },
  phone: {
    id: "contactEdit.helpers.phone",
    description: "The helper text for the form's phone input",
    defaultMessage: "999-999-9999",
  },
});

export const labels = defineMessages({
  address1: {
    id: "contactEdit.label.address1",
    description: "The label for the Address 1 input",
    defaultMessage: "Address 1",
  },
  address2: {
    id: "contactEdit.label.address2",
    description: "The label for the Address 2 input",
    defaultMessage: "Address 2",
  },
  city: {
    id: "contactEdit.label.city",
    description: "The label for the City input",
    defaultMessage: "City",
  },
  dob: {
    id: "contactEdit.label.dob",
    description: "The label for the Date of Birth input",
    defaultMessage: "Date of Birth",
  },
  email: {
    id: "contactEdit.label.email",
    description: "The label for the Email Address input",
    defaultMessage: "Email Address",
  },
  isPrimary: {
    id: "contactEdit.label.isPrimary",
    description:
      "The label for the checkbox to indicate whether address is primary",
    defaultMessage: "Set as Primary/Home address",
  },
  legalFirstName: {
    id: "contactEdit.label.legalFirstName",
    description: "The label for the Legal First Name input",
    defaultMessage: "Legal First Name",
  },
  legalLastName: {
    id: "contactEdit.label.legalLastName",
    description: "The label for the Legal Last Name input",
    defaultMessage: "Legal Last Name",
  },
  phone: {
    id: "contactEdit.label.phone",
    description: "The label for the Phone Number input",
    defaultMessage: "Phone Number",
  },
  postCode: {
    id: "contactEdit.label.postCode",
    description: "The label for the Postal Code input",
    defaultMessage: "Postal Code",
  },
  preferredName: {
    id: "contactEdit.label.preferredName",
    description: "The label for the Preferred Name input",
    defaultMessage: "Preferred Name",
  },
  state: {
    id: "contactEdit.label.state",
    description: "The label for the State input",
    defaultMessage: "State",
  },
  submitButton: {
    id: "contactEdit.label.submitButton",
    description: "The label for the submit button",
    defaultMessage: "Save",
  },
});

export const sections = defineMessages({
  address: {
    id: "contactEdit.section.address",
    description: "The label for the form's address section",
    defaultMessage: "Shipping Address",
  },
  contactInfo: {
    id: "contactEdit.section.contactInfo",
    description: "The label for the form's contact information section",
    defaultMessage: "Contact Information",
  },
});
