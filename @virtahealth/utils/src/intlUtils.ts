import React from "react";
import { IntlShape, MessageDescriptor } from "react-intl";
import { FormatXMLElementFn, PrimitiveType, Options } from "intl-messageformat";
import { get } from "lodash";

import { messageTree, messages } from "./translations";

export type IntlValues =
  | Record<
      string,
      PrimitiveType | FormatXMLElementFn<string, React.ReactNode | string>
    >
  | undefined;

export type IntlFormatOptions = Options;

export interface MessageDescriptorObject {
  message: MessageDescriptor;
  values?: IntlValues;
  options?: Options;
}

export type VirtaIntlMessage = MessageDescriptor | MessageDescriptorObject;

export type VirtaIntlMessageOrString = string | VirtaIntlMessage;

/**
 * checks a value to make sure it is a valid VirtaIntlMessage with
 * either an `id` property or a `message` property
 */
export function isVirtaIntlMessage(message?: VirtaIntlMessage): boolean {
  return (
    Boolean(message) &&
    (Boolean((message as MessageDescriptorObject).message) ||
      Boolean((message as MessageDescriptor).id))
  );
}

export const safeIntlFormatMessage =
  (intl: IntlShape) =>
  (
    message: MessageDescriptor,
    values?: IntlValues,
    opts?: Options
  ): string | React.ReactNode =>
    message ? intl.formatMessage(message, values, opts) : "";

export const translationMessageToArgs = (
  translation: VirtaIntlMessage,
  // Extra values is for places where values was passed in separately
  // It's not easy to refactor all use cases for now
  extraValues?: IntlValues
): [MessageDescriptor, IntlValues?, Options?] => {
  const { message, values, options } = translation as MessageDescriptorObject;

  if (message && !(translation as MessageDescriptor).id) {
    return [message, values, options];
  }
  return [translation as MessageDescriptor, extraValues];
};

export const formatVirtaMessageOrString =
  (intl: IntlShape) =>
  (
    message?: VirtaIntlMessageOrString,
    extraValues?: IntlValues
  ): React.ReactNode | string => {
    if (!message) {
      return "";
    }

    if (typeof message === "string") {
      return message;
    }

    return intl.formatMessage(
      ...translationMessageToArgs(message, extraValues)
    );
  };

export const getMessageDescriptor = (
  x: VirtaIntlMessage
): MessageDescriptor => {
  const isMessageDescriptor = (x: VirtaIntlMessage): x is MessageDescriptor => {
    return (x as MessageDescriptor).id !== undefined;
  };

  return isMessageDescriptor(x) ? x : x.message;
};

export const getMessageId = (x: VirtaIntlMessage): MessageDescriptor["id"] => {
  return getMessageDescriptor(x).id;
};

export const getMessageFromTreeOrKey = (key: string): MessageDescriptor =>
  get(messageTree, key) || messages[key];
