const recipeIngredient = {
  name: "recipeIngredient",
  title: "Recipe Ingredient",
  type: "object",
  fields: [
    {
      name: "ingredient",
      title: "Ingredient",
      type: "reference",
      to: [{ type: "ingredient" }],
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "quantity",
    },
    {
      name: "notes",
      title: "Notes",
      type: "string",
      description:
        '(Optional) Additional information pertaining to this ingredient ("thinly sliced", "diced", "peeled", etc)',
    },
  ],
};

const quantity = {
  name: "quantity",
  title: "Quantity",
  type: "object",
  fields: [
    {
      name: "amount",
      title: "Amount",
      type: "number",
    },
    {
      name: "unit",
      title: "Unit",
      type: "reference",
      to: [{ type: "unit" }],
    },
  ],
};

const recipeNutrition = {
  name: "recipeNutrition",
  title: "Nutrition Facts",
  type: "object",
  fields: [
    {
      name: "servingCount",
      title: "Servings per recipe",
      type: "number",
      description: "The number of servings yielded by this recipe",
    },
    {
      name: "servingSize",
      title: "Serving size",
      type: "quantity",
      description: "The size of one serving (e.g. 1 cup)",
    },
    {
      name: "calorieCount",
      title: "Calories",
      type: "number",
      description: "The calorie count for one serving",
    },
    {
      name: "fat",
      title: "Fat",
      type: "quantity",
      description: "The amount of fat in one serving (e.g. 5 grams)",
    },
    {
      name: "protein",
      title: "Protein",
      type: "quantity",
      description: "The amount of protein in one serving (e.g. 5 grams)",
    },
    {
      name: "carbohydrates",
      title: "Carbohydrates",
      type: "quantity",
      description:
        "The amount of total carbohydrates in one serving (e.g. 5 grams)",
    },
    {
      name: "fiber",
      title: "fiber",
      type: "quantity",
      description: "The amount of fiber in one serving (e.g. 5 grams)",
    },
    {
      name: "sugarAlcohol",
      title: "Sugar Alcohol",
      type: "quantity",
      description: "The amount of sugar alcohol in one serving (e.g. 5 grams)",
    },
    {
      name: "sugarAdded",
      title: "Added Sugar",
      type: "quantity",
      description: "The amount of fiber in one serving (e.g. 5 grams)",
    },
  ],
};

export { recipeIngredient, recipeNutrition, quantity };
