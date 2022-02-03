import { MessageDescriptor, IntlShape } from "react-intl";
import { uniqueId } from "lodash";
import { ReactNode } from "react";

const globalAny: any = global;

export const initTranslationHelpers = (intl: IntlShape) => {
  globalAny.helpersIntl = intl;
};

// Use this to format your message with values and receive a MessageDescriptor in return that can be passed around as normal
export const formatMessageWithValues = (
  message: MessageDescriptor,
  values?: Record<string, number | string> | undefined
): MessageDescriptor => {
  if (!globalAny.helpersIntl) {
    return message;
  }

  return {
    id: uniqueId(),
    defaultMessage: globalAny.helpersIntl.formatMessage(message, values),
  };
};

// Use this to format your message with or without values and recieve the translated string in return
// Useful when you need to translate outside of a functional component that cannot use useIntl()
export const intlFormatMessage = (
  message: MessageDescriptor,
  values?: Record<string, number | string> | ReactNode | undefined
): string => {
  if (!globalAny.helpersIntl) {
    return typeof message.defaultMessage == "string"
      ? message.defaultMessage
      : "";
  }

  return globalAny.helpersIntl.formatMessage(message, values);
};

// Use this to retrieve the user's current locale
// Defaults to en if none is set yet
export const intlLocale = (): string => {
  if (!globalAny.helpersIntl) {
    return "en";
  }

  return globalAny.helpersIntl.locale;
};
