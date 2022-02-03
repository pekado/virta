import { validateMaxLength } from "../../../utils/validators";
import { slugify } from "../../../utils/field-utils";

export default {
  name: "oneTimeAction",
  title: "One Time Action",
  type: "document",
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (!fields.ctaLink && !fields.ctaLabel) return true;

      if (fields.ctaLink?.length > 0 && fields.ctaLabel?.length > 0)
        return true;

      return "Fields 'CTA Link' and 'CTA Label' must both be populated, or must both be empty";
    }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "A piece of practical guidance for a patient to implement",
      validation: (Rule) => [
        Rule.required(),
        ...validateMaxLength(Rule, 140, 70),
      ],
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
      name: "whatDetails",
      title: '"What" Details',
      type: "text",
      description:
        "Optional additional details for the patient about the action",
    },
    {
      name: "whenDetails",
      title: '"When" Details',
      type: "text",
      description:
        "Optional additional details about the time frame in which a patient should complete the action",
    },
    {
      name: "ctaLink",
      title: "CTA Link",
      // After CP - Phase 2, this can also be a reference to another content piece such as directly linking to
      // a resource center article instead of being a string
      type: "string",
      description:
        "A link to where the CTA should take the patient. Ex. a link to the video or article for this action",
    },
    {
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
      description:
        'The label on the CTA button. Ex. "Message Coach" or "See Guide"',
      validation: (Rule) => [...validateMaxLength(Rule, 20)],
    },
    {
      name: "contentType",
      title: "Content Type",
      type: "string",
      description:
        "Describes the action. Not seen directly by the patient but used to determine some UI details",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Video", value: "video" },
          { title: "Task", value: "task" },
          { title: "Tip", value: "tip" },
          { title: "Quiz", value: "quiz" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "timeToComplete",
      title: "Time to complete action",
      type: "number",
      description:
        "The number of minutes it is estimated the action will take to complete",
      validation: (Rule) => [Rule.required(), Rule.integer(), Rule.positive()],
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
        "Used to determine where in the app this action is displayed. Usually should be Action Card",
      options: {
        list: [
          { title: "Action Card", value: "checkmark" },
          { title: "FHIR Questionaire", value: "questionnaire" },
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
};
