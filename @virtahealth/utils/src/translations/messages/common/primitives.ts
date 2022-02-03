import { MessageDescriptor } from "react-intl";

export const en = {
  x: "{x}",
};

export const es = {
  x: "{x}",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  x: {
    id: "x",
    defaultMessage: en.x,
    description:
      "A utility that is essentially a identity function. This can be used when text must be fed to a translation function but doesn't actually need to be translated.",
  },
};
