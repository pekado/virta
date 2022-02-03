import { validateMaxLength } from "../../../utils/validators";
import { slugify } from "../../../utils/field-utils";
import * as pluralize from "pluralize";

export default {
  name: "habitualAction",
  title: "Habitual Action",
  type: "document",
  validation: (Rule) =>
    Rule.custom((fields) => {
      let isDefaultVariableSet = Number.isInteger(fields.defaultVariableValue);
      let doesTitleUseVariable = fields.title.includes("{x}");
      if (isDefaultVariableSet !== doesTitleUseVariable) {
        if (isDefaultVariableSet)
          return 'Default Variable value is set, but not used in the Title. The variable value can be used by inserting "{x}" in the title';
        else return "Title is expecting a Default Variable, but none is set";
      }

      let isDefaultUnitsSet = !!fields.defaultUnits;
      let doesTitleUseUnits = fields.title.includes("{units}");
      if (isDefaultUnitsSet !== doesTitleUseUnits) {
        if (isDefaultUnitsSet)
          return 'Default Unit value is set, but not used in the Title. The units value can be used by inserting "{units}" in the title';
        else return "Title is expecting a Default Unit, but none is set";
      }

      return true;
    }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        'A piece of practical guidance for a patient to implement on a regular basis. To include a custom unit, enter "{units}". To include a custom variable, enter "{x}". For example, "Eat at least {x} homemade Virta-friendly {units}"',
      validation: (Rule) => [
        Rule.required(),
        ...validateMaxLength(Rule, 150, 70),
      ],
    },
    {
      name: "defaultVariableValue",
      title: "Default Variable Value",
      type: "number",
      description: "A number used to replace the {x} field in the Title.",
      validation: (Rule) => [Rule.positive()],
    },
    {
      name: "defaultUnits",
      title: "Default Units",
      type: "string",
      description:
        'A word used to replace the {units} field in the Title. If the plurality of this word should change based on the value in "Default Variable Value", then this field should use the singular form of the word, ie "meal" instead of "meals"',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: slugify(200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "actionDetails",
      title: "Action Details",
      type: "text",
      description:
        "Optional additional details for the patient about the action",
    },
    {
      name: "defaultFrequency",
      title: "Default Frequency",
      type: "number",
      description:
        'The number of times this action should be completed in a given period. Ex. If Default Frequency is 3, and Default Cadence (defined below) is "Weekly", it would appear to the patient as 3x/week',
      validation: (Rule) => [
        Rule.required(),
        Rule.integer(),
        Rule.positive(),
        Rule.max(7),
      ],
    },
    {
      name: "defaultCadence",
      title: "Default Cadence",
      type: "string",
      description:
        'The cadence at which this action should be completed. Ex. If Default Cadence is "Weekly" and Default Frequency (defined above) is 3, it would appear to the patient as 3x/week',
      options: {
        list: [
          { title: "Daily", value: "day" },
          { title: "Weekly", value: "week" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "A list of tags under which a Coach could find this action when assigning new actions manually",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      name: "careProtocols",
      title: "Care Protocols",
      type: "array",
      description: "All of the care protocols that this series applies to",
      of: [
        {
          type: "reference",
          to: [{ type: "careProtocol" }],
        },
      ],
    },
    {
      name: "actionType",
      title: "Action Type",
      type: "string",
      description:
        "Used to determine where in the app this action is displayed. Should almost always be Action Card",
      options: {
        list: [
          { title: "Action Card", value: "checkmark" },
          { title: "Log Weight", value: "weight" },
          { title: "Log Symptom", value: "symptom" },
          { title: "Log Ketones", value: "ketone" },
          { title: "Log Glucose", value: "glucose" },
          { title: "Log Blood Pressure", value: "blood pressure" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "actionTemplateId",
      title: "Action Template Id",
      type: "number",
      description:
        'If this is an action that exists in our current action templates database, this should match the "action_template_id" field in the db. If this is a brand new action in Sanity only, leave this blank.',
      validation: (Rule) => [Rule.integer(), Rule.positive()],
    },
    {
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Indicates whether a patient action can be created from this template. Should always be True, unless you don't want patients to be able to be assigned this action anymore.",
    },
  ],
  initialValue: {
    actionType: "checkmark",
    isActive: true,
  },
  preview: {
    select: {
      title: "title",
      variable: "defaultVariableValue",
      unit: "defaultUnits",
    },
    prepare(selection) {
      let { title, variable, unit } = selection;
      if (Number.isInteger(variable)) {
        unit = pluralize(unit, variable);
      }
      let populatedTitle = title
        .replace("{x}", variable)
        .replace("{units}", unit);

      return {
        title: populatedTitle,
      };
    },
  },
};
