import { defineMessages } from "react-intl";

export const errors = defineMessages({
  completeDate: {
    id: "coverageInput.errors.completeDate",
    description: "Error for incomplete date",
    defaultMessage: "Please enter a complete date",
  },
  required: {
    id: "coverageInput.error.required",
    description: "The error message for a generic required field",
    defaultMessage: "Required",
  },
});

export const helpers = defineMessages({
  dob: {
    id: "coverageInput.helpers.dob",
    description: "The helper text for the form's DOB input",
    defaultMessage: "MM/DD/YYYY",
  },
});

export const labels = defineMessages({
  dob: {
    id: "coverageInput.label.dob",
    description: "The label for the Subscriber  Date of Birth input",
    defaultMessage: "Subscriber Date of Birth",
  },
  groupId: {
    id: "coverageInput.label.groupId",
    description: "The label for the group id number",
    defaultMessage: "Group Id",
  },
  genderInputPlaceholder: {
    id: "coverageInput.label.genderPlaceholder",
    description: "Gender Placeholder",
    defaultMessage: "e.g. Female",
  },
  firstName: {
    id: "coverageInput.label.first_name",
    description: "The label for the Subscriber First Name input",
    defaultMessage: "Subscriber First Name",
  },
  lastName: {
    id: "coverageInput.label.lastName",
    description: "The label for the Subscriber Legal Last Name input",
    defaultMessage: "Subscriber Last Name",
  },
  gender: {
    id: "coverageInput.label.gender",
    description: "The label for the Subscriber Gender",
    defaultMessage: "Subscriber Gender",
  },
  plan: {
    id: "coverageInput.label.plan",
    description: "The label for the insurance carrier inputted by user",
    defaultMessage: "User Inputted Insurance Name",
  },
  planValue: {
    id: "coverageInput.label.planValue",
    description:
      "The label for the insurance carrier used for eligibility checking",
    defaultMessage: "Insurance Carrier for Eligibility Check",
  },
  subscriberId: {
    id: "coverageInput.label.subscriberId",
    description: "The label for the insurance member id",
    defaultMessage: "Insurance Member Id",
  },
  eligibilityExclusion: {
    id: "coverageInput.label.eligibilityExclusion",
    description: "The label for the always eligible flag",
    defaultMessage: "Eligibility Exclusion",
  },
  updateButton: {
    id: "contactEdit.label.updateButton",
    description: "The label for the update and check eligibility button",
    defaultMessage: "Update and Check Eligibility",
  },
});
