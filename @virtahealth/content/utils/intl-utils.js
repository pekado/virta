import i18n from "../documentTranslation";

// injects the i18n config into a document schema
export const withIntl = (schema) => ({ ...schema, i18n });
