import { validateMaxLength } from "~/utils/validators";
import { slugify } from "~/utils/field-utils";

export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Article Title",
      type: "string",
      description: "A title for this article",
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
      name: "wordpressSlug",
      title: "Wordpress Slug",
      type: "string",
      hidden: true,
      description:
        "This is the slug of the equivalent content in Wordpress. This field is only used for migration and backwards compatibility purposes and will be hidden in Studio.",
    },
    {
      name: "wordpressPostId",
      title: "Wordpress Post ID",
      type: "string",
      description:
        "This is the Post ID of the equivalent post in Wordpress. This field is only used for migration and backwards compatibility purposes and will be hidden in Studio.",
    },
    {
      name: "previewText",
      title: "Preview Text",
      type: "string",
      description:
        "(Optional) A short preview of this article that a user may see before clicking into the full article",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "figure",
      description:
        "The image that will be displayed in this article and in previews, thumbnails, etc.",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
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
      description: "All of the care protocols that this article applies to",
      of: [
        {
          type: "reference",
          to: [{ type: "careProtocol" }],
        },
      ],
    },
    {
      name: "body",
      title: "Article Body",
      type: "richText",
      description: "The contents of this article",
    },
    {
      name: "timeToComplete",
      title: "Time to Read",
      type: "quantity",
      description: "The amount of time required to read this article",
    },
    {
      name: "hideFromSearch",
      title: "Hide From Search",
      type: "boolean",
      description:
        "Indicator of whether this article should be hidden in search results",
    },
  ],
};
