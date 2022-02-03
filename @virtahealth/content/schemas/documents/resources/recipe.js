import { slugify } from "~/utils/field-utils";

const ingredient = {
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of this ingredient",
    },
  ],
};

const unit = {
  name: "unit",
  title: "Unit",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      description:
        "The label for a singular quantity of this unit (e.g. pound, cup, teaspoon)",
    },
    {
      name: "labelPlural",
      title: "Plural Label",
      type: "string",
      description:
        "(Optional) The label for plural amounts of this unit. If omitted, the letter 's' will be added to the label when specifiying plural amounts.",
    },
    {
      name: "abbreviation",
      title: "Abbreviation",
      type: "string",
      description: "The abbreviation for this unit (e.g. lbs, kg, ml)",
    },
  ],
};

const recipe = {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Recipe Name",
      type: "string",
      description: "The name of this recipe",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "figure",
      description: "A picture of the finished product",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: slugify(200),
      },
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
      name: "prepTime",
      title: "Prep Time",
      type: "quantity",
      description: "The preparation time for this dish",
    },
    {
      name: "totalTime",
      title: "Total Time",
      type: "quantity",
      description:
        "The total amount of time to follow this recipe (including prep time, cook time, etc)",
    },
    {
      name: "nutritionFacts",
      title: "Nutrition Facts",
      type: "recipeNutrition",
      description: "A breakdown of nutrition facts for this recipe.",
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "recipeIngredient" }],
      description:
        "A list of ingredients and their quantities used to prepare this dish",
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "string" }],
      description:
        "A list of steps to prepare this dish. Note, you do not need to indicate the step numbers (e.g. 1, 2, 3) when adding steps.",
    },
    {
      name: "recipeType",
      title: "Recipe Type",
      type: "string",
      description: "What kind of recipe is this? E.g. breakfast, snack, etc",
    },
    {
      name: "preface",
      title: "Preface",
      type: "richText",
      description:
        "Some introductory text about this recipe. This will be displayed before the ingredients and steps.",
    },
    {
      name: "nutritionNotes",
      title: "Nutrition Notes",
      type: "string",
    },
    {
      name: "requiresCoachApproval",
      title: "Requires Coach Approval",
      type: "boolean",
      description:
        "Value which indicates recipes requiring call-out text, which have ingredients that we recommend patients wait to add in until after adaptation.",
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
      description: "All of the care protocols that this recipe applies to",
      of: [
        {
          type: "reference",
          to: [{ type: "careProtocol" }],
        },
      ],
    },
    {
      name: "hideFromSearch",
      title: "Hide From Search",
      type: "boolean",
      description:
        "Indicator of whether this recipe should be hidden in search results",
    },
  ],
};

export { recipe, ingredient, unit };
