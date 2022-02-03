import { validateMaxLength } from "../../../utils/validators";
import { slugify } from "../../../utils/field-utils";

export default {
  name: "actionSeries",
  title: "Series",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "The name for this sequence of actions related to a specific topic",
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
      name: "actions",
      title: "One Time Actions",
      type: "array",
      description:
        "All of the one time actions needed to be completed in order for this series to be done. Make sure they are listed in the order the patient should complete them in!",
      of: [
        {
          type: "reference",
          to: [{ type: "oneTimeAction" }],
        },
      ],
      validation: (Rule) => [Rule.min(1), Rule.unique()],
    },
    {
      name: "habitualAction",
      title: "Habitual Action",
      type: "reference",
      to: [{ type: "habitualAction" }],
      description:
        "A series may end with a healthy habit for a patient to complete on a recurring basis. They will be assinged this action after they have completed all one time actions in the list above.",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "A list of tags under which a patient could find this series",
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
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Indicates whether a patient series can be created from this template. Should always be True, unless you don't want patients to be able to be assigned this series anymore.",
    },
  ],
  initialValue: {
    isActive: true,
  },
};
