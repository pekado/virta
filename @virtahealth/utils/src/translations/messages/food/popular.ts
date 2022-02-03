import { MessageDescriptor } from "react-intl";

export const en = {
  cucumber: "Cucumber",
  greenSalad: "Green salad",
};

// Note: because search is currently only supported in English
//   it doesn't make sense to translate food items as it will give
//   patient the impression spanish search terms are supported.
// Keeping English for now..
export const es = {
  cucumber: "Cucumber",
  greenSalad: "Green salad",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  cucumber: {
    id: "cucumber",
    defaultMessage: en.cucumber,
    description: "Cucumber, used in Atlas",
  },
  greenSalad: {
    id: "greenSalad",
    defaultMessage: en.greenSalad,
    description: "Used in Atlas",
  },
};
