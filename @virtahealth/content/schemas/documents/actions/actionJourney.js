import { validateMaxLength } from "../../../utils/validators";
import { slugify } from "../../../utils/field-utils";

export default {
  name: "actionJourney",
  title: "Journey",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "The name for this sequence of multiple series for a patient to progress through",
      validation: (Rule) => [
        Rule.required(),
        ...validateMaxLength(Rule, 140, 70),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        'Used as a human readable url to easily access this resource. Just click "generate" after writing the title :)',
      options: {
        source: "title",
        slugify: slugify(200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "series",
      title: "Series",
      type: "array",
      description:
        "All of the series needed to be completed in order for this series to be done. Make sure they are listed in the order the patient should complete them in!",
      of: [
        {
          type: "reference",
          to: [{ type: "actionSeries" }],
        },
      ],
      validation: (Rule) => [Rule.min(1), Rule.unique()],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "A list of tags under which a patient could find this journey",
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
      description: "All of the care protocols that this journey applies to",
      of: [
        {
          type: "reference",
          to: [{ type: "careProtocol" }],
        },
      ],
    },
    {
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Indicates whether a patient journey can be created from this template. Should always be True, unless you don't want patients to be able to be assigned this journey anymore.",
    },
  ],
  initialValue: {
    isActive: true,
  },
};
