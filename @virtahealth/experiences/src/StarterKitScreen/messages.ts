import { defineMessages } from "react-intl";

export const text = {
  formTitleHelper: {
    id: "starterKitForm.text.formTitleHelper",
    description: "Text below form title text",
    defaultMessage:
      "Fill in the form below and we'll ship you the items you need.",
  },
  bloodCuffTitle: {
    id: "starterKitForm.text.bloodCuffTitle",
    description: "Text above blood cuff question",
    defaultMessage: "Do you need a blood pressure cuff?",
  },
  bloodCuffInfo: {
    id: "starterKitForm.text.bloodCuffInfo",
    description: "Text below blood cuff title",
    defaultMessage:
      "If you already have one that you use at home, you don't need another.",
  },
  scaleTitle: {
    id: "starterKitForm.text.scaleTitle",
    description: "Text above scale question",
    defaultMessage:
      "We'll send everyone a connected scale. Do you need an XL one too?",
  },
  scaleInfo: {
    id: "starterKitForm.text.scaleInfo",
    description: "Text below blood blood cuff title",
    defaultMessage:
      "If you weigh over 440 pounds, we can send you a XL scale if you don't already have one (unlike our connected scale, it will not automatically upload your weight to the app).",
  },
  shippingTitle: {
    id: "starterKitForm.text.shippingTitle",
    description: "Text above shipping prompt",
    defaultMessage: "Shipping address",
  },
  shippingInfo: {
    id: "starterKitForm.text.shippingInfo",
    description: "Info text above submit button",
    defaultMessage:
      "Supplies will be sent via USPS, so please make sure you provide an address where USPS delivers.",
  },
};

export const radioButtonLabels = {
  yes: {
    id: "components.radio.label.yes",
    description: "The label for the radio button",
    defaultMessage: "Yes",
  },
  no: {
    id: "components.radio.label.no",
    description: "The label for the radio button",
    defaultMessage: "No",
  },
};

export const successText = {
  heading: {
    id: "starterKitForm.successText.heading",
    description: "Success heading",
    defaultMessage: "You're all set!",
  },
  shippingDetails: {
    id: "starterKitForm.successText.shippingDetails",
    description: "Details about shipping",
    defaultMessage:
      "Your order will ship within one business day and arrive in 3-5 business days. You'll be emailed tracking info once it ships.",
  },
  learnButton: {
    id: "starterKitForm.successText.learnButton",
    description: "Secondary action button",
    defaultMessage: "Learn about starter kit",
  },
};

export const validationText = {
  street: {
    id: "starterKitForm.validationText.street1",
    description: "Error text for Street Address input field",
    defaultMessage: "Street Address is required",
  },
  poBox: {
    id: "starterKitForm.validationText.street1",
    description: "Error text for Street Address input field",
    defaultMessage: "Street Address can not be a PO box",
  },
  city: {
    id: "starterKitForm.validationText.city",
    description: "Error text for City input field",
    defaultMessage: "City is required",
  },
  state: {
    id: "starterKitForm.validationText.state",
    description: "Error text for State input field",
    defaultMessage: "State is required",
  },
  zip: {
    id: "starterKitForm.validationText.zip",
    description: "Error text for Zip Code input field",
    defaultMessage: "Zip Code is required",
  },
  zipCodeRegex: {
    id: "starterKitForm.validationText.zipCodeRegex",
    description: "Error text for Zip Code input field",
    defaultMessage: "Zip Code should be 5 digits",
  },
  supplies: {
    id: "starterKitForm.validationText.supplies",
    description: "Error text for supplies checkbox list",
    defaultMessage: "Please select at least one Supply",
  },
  hasBloodPressureCuff: {
    id: "starterKitForm.validationText.supplies",
    description: "Error text for blood pressure cuff",
    defaultMessage: "Please select yes or no",
  },
  hasXLScale: {
    id: "starterKitForm.validationText.supplies",
    description: "Error text for XL scale",
    defaultMessage: "Please select yes or no",
  },
};

export const errorText = {
  submitErrorTitle: {
    id: "starterKitForm.errorText.submitErrorTitle",
    description: "Error callout title",
    defaultMessage:
      "There was an error submitting the request form, please try again",
  },
};

export const labels = defineMessages({
  street: {
    id: "requestSupplies.label.address1",
    description: "The label for the Address 1 input",
    defaultMessage: "Street Address",
  },
  aptUnit: {
    id: "requestSupplies.label.address2",
    description: "The label for the Address 2 input",
    defaultMessage: "Apt / Unit #",
    helperText: "(optional)",
  },
  city: {
    id: "requestSupplies.label.city",
    description: "The label for the City input",
    defaultMessage: "City",
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
  submitButton: {
    id: "requestSupplies.label.submitButton",
    description: "The label for the submit button",
    defaultMessage: "Place Your Order",
  },
  zip: {
    id: "requestSupplies.label.zip",
    description: "The label for the Zip Code input",
    defaultMessage: "Zip Code",
  },
});
