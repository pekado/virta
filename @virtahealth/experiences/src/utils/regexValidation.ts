// Disabling this rule here because changing regex can be risky. When this file is touched again we should fix the rule violations
/* eslint-disable no-useless-escape */

// Regex validation which will fail PO Box address (and as many variations)
// stackoverflow.com answer: https://stackoverflow.com/a/34140301
// Regex unit tests: https://regex101.com/r/JjwR4r/5
export const poBoxRegex =
  /^(?!(?:(\bP(ost|ostal)?([ \.]*(O|0)(ffice)?)?([ \.]*Box)?\b)|^(b(ox|in)[ \.]*[\#\d]))).*/i;

export const zipCodeRegex = /^\d{5}$/i;

export const verificationCodeRegex = /^\d{6}$/i;

export const phoneNumberRegex = /^[1-9]\d{2}-\d{3}-\d{4}/;

export const dateRegex =
  /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
/* eslint-enable no-useless-escape */
