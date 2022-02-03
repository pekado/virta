import React from "react";
import { FormikValues } from "formik";
import { IntlShape } from "react-intl";
import * as Yup from "yup";
import { toPath, set } from "lodash";
import {
  safeIntlFormatMessage,
  getMessageFromTreeOrKey,
} from "@virtahealth/utils";

import { Page, Validation, QuestionProps, ShowWhen } from "./types";

type BaseSchemaType = Yup.BaseSchema;

type ArraySchemaType = Yup.ArraySchema<
  Yup.ObjectSchema<FormikValues> | Yup.StringSchema
>;
type ObjectSchemaType = Yup.ObjectSchema<FormikValues>;

type SchemaTypes =
  | Yup.StringSchema
  | Yup.NumberSchema
  | ArraySchemaType
  | ObjectSchemaType
  | BaseSchemaType;

type SchemaTypesKeys = keyof (
  | Pick<BaseSchemaType, "oneOf">
  | Pick<Yup.StringSchema, "min" | "max" | "length" | "matches" | "required">
  | Pick<Yup.NumberSchema, "min" | "max" | "required">
  | Pick<ArraySchemaType, "min" | "max" | "length" | "of" | "required">
);

const buildShowWhenSchema = (showWhen: QuestionProps["showWhen"]) => {
  const keyChecks = showWhen?.map((sw) => sw.key) ?? [];
  return (
    schema: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [index: string]: any;
    },
    type: SchemaTypesKeys,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arg1: any,
    arg2?: React.ReactNode
  ) => {
    if (!schema) {
      return schema;
    }

    if (keyChecks.length) {
      return schema.when(keyChecks, {
        is: (...args: (string | number)[]) =>
          showWhen?.reduce(
            (result, current, index) =>
              result && current.value?.includes(args[index]),
            true
          ),
        then: schema[type](arg1, arg2),
        otherwise: schema,
      });
    } else {
      return schema[type](arg1, arg2);
    }
  };
};

const buildValidationSchema =
  (intl: IntlShape) =>
  (
    inputSchema: SchemaTypes,
    validation: Validation,
    showWhen: QuestionProps["showWhen"]
  ) => {
    const formatMessage = safeIntlFormatMessage(intl);
    let schema = inputSchema;
    const showWhenBuilder = buildShowWhenSchema(showWhen);
    const validationLabel = getMessageFromTreeOrKey(validation.label);

    switch (validation.type) {
      case "min":
        if (inputSchema.type !== "object") {
          schema = showWhenBuilder(
            schema,
            "min" as keyof Yup.StringSchema["min"],
            validation.value,
            formatMessage(validationLabel, {
              min: validation.value,
            })
          );
        }
        break;
      case "max":
        if (inputSchema.type !== "object") {
          schema = showWhenBuilder(
            schema,
            "max" as keyof Yup.StringSchema["max"],
            validation.value,
            formatMessage(validationLabel, {
              max: validation.value,
            })
          );
        }
        break;
      case "length":
        if (inputSchema.type !== "object" && inputSchema.type !== "number") {
          schema = showWhenBuilder(
            schema,
            "length" as keyof Yup.StringSchema["length"],
            validation.value,
            formatMessage(validationLabel)
          );
        }
        break;
      case "regex":
        if (inputSchema.type === "string") {
          schema = showWhenBuilder(
            schema,
            "matches" as keyof Yup.StringSchema["matches"],
            new RegExp(validation.value),
            formatMessage(validationLabel)
          );
        }
        break;
      case "oneOf":
        if (
          inputSchema.type === "string" ||
          inputSchema.type === "boolean" ||
          inputSchema.type === "number"
        ) {
          schema = showWhenBuilder(
            schema,
            "oneOf" as keyof Yup.BaseSchema["oneOf"],
            validation.value,
            formatMessage(validationLabel)
          );
        }
        break;
      case "required":
        schema = showWhenBuilder(
          schema,
          "required" as keyof Yup.BaseSchema["required"],
          formatMessage(validationLabel)
        );
        break;
    }

    return schema;
  };

const recursiveSchemaBuilder =
  (intl: IntlShape) =>
  (
    question: QuestionProps,
    currentSchema: SchemaTypes
  ): Yup.ObjectSchema<{ [key: string]: SchemaTypes }> => {
    const validationBuilder = buildValidationSchema(intl);
    const [key, ...childKeys] = toPath(question.key);

    if (childKeys.length) {
      currentSchema = recursiveSchemaBuilder(intl)(
        {
          ...question,
          key: childKeys.join("."),
        },
        currentSchema
      );
    }

    question.validation?.forEach((v) => {
      currentSchema = validationBuilder(currentSchema, v, question.showWhen);
    });

    return Yup.object({ [key]: currentSchema });
  };

const generateQuestionSchemaObject =
  (intl: IntlShape) => (questions: QuestionProps[]) => {
    let schema = Yup.object({});
    const initialValues: FormikValues = {};
    const formatMessage = safeIntlFormatMessage(intl);
    const schemaBuilder = recursiveSchemaBuilder(intl);
    let questionSchemaData;

    questions.forEach((question) => {
      set(initialValues, question.key, question.defaultValue || "");
      let currentSchema: SchemaTypes = Yup.object({});
      switch (question.type) {
        case "checklist":
          initialValues[question.key] = [];
          currentSchema = Yup.array();
          break;
        case "objectList":
          questionSchemaData = generateQuestionSchemaObject(intl)(
            question.optionsSchema!
          );

          initialValues[question.key] = [questionSchemaData.initialValues];
          currentSchema = buildShowWhenSchema(question.showWhen)(
            Yup.array(),
            "of" as keyof ArraySchemaType["of"],
            questionSchemaData.schema
          );
          break;
        case "pcpSearch":
          initialValues[question.key] = undefined;
          currentSchema = Yup.object();
          break;
        case "text":
          // All text components map to fields with 255 character database schema restriction,
          // setting this here once instead of in the form schema for every field
          currentSchema = Yup.string().max(
            255,
            formatMessage(getMessageFromTreeOrKey("common.forms.longString"), {
              max: 255,
            }) as string
          );
          break;
        case "number":
          currentSchema = Yup.number().typeError(
            formatMessage(
              getMessageFromTreeOrKey("common.forms.invalidNumber")
            ) as string
          );
          break;
        default:
          currentSchema = Yup.string();
      }

      schema = schema.concat(schemaBuilder(question, currentSchema));
    });

    return {
      schema,
      initialValues,
    };
  };

/**
 * @param questions: list of dynamic form questions to update
 * @param sectionShowWhen: list of section showWhen clauses to add to questions
 * @returns updated version of questions with section showWhen on them so they aren't required if section is hidden
 */
const addSectionShowWhenToQuestions = (
  questions: QuestionProps[],
  sectionShowWhen?: ShowWhen[]
) => {
  return questions.map((question) => {
    if (sectionShowWhen && question.showWhen) {
      question.showWhen.concat(sectionShowWhen);
    } else if (sectionShowWhen && !question.showWhen) {
      question.showWhen = sectionShowWhen;
    }
    return question;
  });
};

export const generateInitialValuesAndValidationSchema = (
  pageSchema: Page,
  intl: IntlShape
): {
  initialValues: FormikValues;
  formSchema: Yup.ObjectSchema<FormikValues>;
} => {
  const { schema, initialValues } = pageSchema.sections.reduce(
    (results, section) => {
      const sectionResults = generateQuestionSchemaObject(intl)(
        addSectionShowWhenToQuestions(section.questions, section.showWhen)
      );
      return {
        schema: results.schema.concat(sectionResults.schema),
        initialValues: {
          ...results.initialValues,
          ...sectionResults.initialValues,
        },
      };
    },
    { schema: Yup.object({}), initialValues: {} }
  );

  return {
    initialValues,
    formSchema: schema,
  };
};

export const generateInitialValuesFromQuestions = (
  questions: QuestionProps[]
): FormikValues => {
  return questions.reduce((results: FormikValues, question) => {
    switch (question.type) {
      case "checklist":
        results[question.key] = undefined;
        break;
      case "objectList":
        results[question.key] = [
          generateInitialValuesFromQuestions(question.optionsSchema!),
        ];
        break;
      default:
        results[question.key] = "";
    }
    return results;
  }, {});
};

/**
 * Method parses a list of objects that determine whether to show a component or not. All conditions
 * must evaluate to true
 * @param values list of values in form
 * @param showWhen object containing a key to verify and a value to assert against
 * @returns boolean that tells client whether to display component
 */
export const shouldShowDynamicFormComponent = (
  values: FormikValues,
  showWhen?: ShowWhen[]
): boolean => {
  if (!showWhen) {
    return true;
  }
  const showField: boolean = showWhen.reduce(
    (result: boolean, current: ShowWhen) => {
      if (!result) {
        // if false then skip all this logic, we want all true conditions
        return result;
      }
      const fieldValue =
        typeof values[current.key] === "boolean"
          ? String(values[current.key])
          : values[current.key];
      const hasValueKey = current?.value?.includes("has_value");
      const hasValue = hasValueKey
        ? fieldValue !== "" && fieldValue !== undefined
        : fieldValue instanceof Array
        ? fieldValue.some((r) => current.value?.includes(r))
        : current.value?.includes(fieldValue);
      return hasValue;
    },
    true
  );

  return showField;
};
