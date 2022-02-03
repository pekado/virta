import { defineMessages } from "react-intl";

export const text = {
  formTitle: {
    id: "requestSuppliesForm.text.formTitle",
    description: "Text in form header",
    defaultMessage: "Which supplies do you need?",
  },
  formTitleHelper: {
    id: "requestSuppliesForm.text.formTitleHelper",
    description: "Text below form title text",
    defaultMessage:
      "We will send you a 90 day supply based on your logging frequency in the Virta app.",
  },
  shippingTitle: {
    id: "requestSuppliesForm.text.shippingTitle",
    description: "Text above shipping prompt",
    defaultMessage: "Shipping address",
  },
  shippingInfo: {
    id: "requestSuppliesForm.text.shippingInfo",
    description: "Info text above submit button",
    defaultMessage:
      "Supplies will be sent via USPS, so please make sure you provide an address where USPS delivers.",
  },
};

export const successText = {
  heading: {
    id: "requestSuppliesForm.successText.heading",
    description: "Success heading",
    defaultMessage: "You're all set!",
  },
  shippingDetails: {
    id: "requestSuppliesForm.successText.shippingDetails",
    description: "Details about shipping",
    defaultMessage:
      "Your order will ship within 1 business day. Tracking info will be emailed once it does.",
  },
  needHelp: {
    id: "requestSuppliesForm.successText.needHelp",
    description: "Help question",
    defaultMessage: "Need help?",
  },
  supportEmail: {
    id: "requestSuppliesForm.successText.supportEmail",
    description: "Support email",
    defaultMessage: "support@virtahealth.com",
  },
  close: {
    id: "requestSuppliesForm.successText.close",
    description: "Close button text",
    defaultMessage: "Close",
  },
};

export const validationText = {
  street1: {
    id: "requestSuppliesForm.validationText.street1",
    description: "Error text for Street Address input field",
    defaultMessage: "Street Address is required",
  },
  poBox: {
    id: "requestSuppliesForm.validationText.street1",
    description: "Error text for Street Address input field",
    defaultMessage: "Street Address can not be a PO box",
  },
  city: {
    id: "requestSuppliesForm.validationText.city",
    description: "Error text for City input field",
    defaultMessage: "City is required",
  },
  state: {
    id: "requestSuppliesForm.validationText.state",
    description: "Error text for State input field",
    defaultMessage: "State is required",
  },
  zip: {
    id: "requestSuppliesForm.validationText.zip",
    description: "Error text for Zip Code input field",
    defaultMessage: "Zip Code is required",
  },
  zipCodeRegex: {
    id: "requestSuppliesForm.validationText.zipCodeRegex",
    description: "Error text for Zip Code input field",
    defaultMessage: "Zip Code should be 5 digits",
  },
  supplies: {
    id: "requestSuppliesForm.validationText.supplies",
    description: "Error text for supplies checkbox list",
    defaultMessage: "Please select at least one Supply",
  },
};

export const errorText = {
  submitErrorTitle: {
    id: "requestSuppliesForm.errorText.submitErrorTitle",
    description: "Error callout title",
    defaultMessage:
      "There was an error submitting the request form, please try again",
  },
};

export const labels = defineMessages({
  name: {
    id: "requestSupplies.label.name",
    description: "The label for the Name input",
    defaultMessage: "Name",
  },
  address1: {
    id: "requestSupplies.label.address1",
    description: "The label for the Address 1 input",
    defaultMessage: "Street Address",
  },
  address2: {
    id: "requestSupplies.label.address2",
    description: "The label for the Address 2 input",
    defaultMessage: "Apt / Unit #(optional)",
  },
  alcoholSwabs: {
    id: "requestSupplies.label.alcoholSwabs",
    description: "Alcohol Swabs",
    defaultMessage: "Alcohol Swabs",
  },
  changeAddressButton: {
    id: "requestSuppliesForm.changeAddressButton",
    defaultMessage: "Change",
    description: "Change shipping address button",
  },
  city: {
    id: "requestSupplies.label.city",
    description: "The label for the City input",
    defaultMessage: "City",
  },
  glucoseStrips: {
    id: "requestSupplies.label.glucoseStrips",
    description: "Glucose Strips",
    defaultMessage: "Glucose Strips",
  },
  ketoneStrips: {
    id: "requestSupplies.label.ketoneStrips",
    description: "Ketone Strips",
    defaultMessage: "Ketone Strips",
  },
  lancets: {
    id: "requestSupplies.label.lancets",
    description: "Lancets",
    defaultMessage: "Lancets",
  },
  makeDefault: {
    id: "requestSupplies.label.makeDefault",
    description:
      "The label for the checkbox to indicate whether address should be made primary",
    defaultMessage: "Make above address my main shipping address",
  },
  state: {
    id: "requestSupplies.label.state",
    description: "The label for the State input",
    defaultMessage: "State",
  },
  stateEmptyAutoComplete: {
    id: "requestSupplies.state.autoComplete",
    description: "Empty state message",
    defaultMessage: "No State Found",
  },
  statePlaceholderSearch: {
    id: "requestSupplies.state.search",
    description: "Placeholder state message",
    defaultMessage: "Search State",
  },
  submitButton: {
    id: "requestSupplies.label.submitButton",
    description: "The label for the submit button",
    defaultMessage: "Submit",
  },
  zip: {
    id: "requestSupplies.label.zip",
    description: "The label for the Zip Code input",
    defaultMessage: "Zip Code",
  },
});
