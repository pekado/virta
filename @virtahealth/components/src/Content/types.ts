// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ContentTypes {
  interface ContentBase {
    _id: string;
    _i18NLang: string;
    careProtocols: Array<any>;
    heroImage: HeroImage;
    previewText: string;
    slug: Slug;
    tags: Array<Tag>;
  }

  export interface ArticleType extends ContentBase {
    body: Array<any>;
    title: string;
    _type: "article";
  }

  export interface Tag {
    tagName: string;
    tagSrc: string;
  }

  export interface Slug {
    current: string;
  }

  export interface HeroImage {
    altText: string;
    caption: string;
    imageUrl: string;
  }

  export interface RecipeType extends ContentBase {
    body: Array<any>;
    name: string;
    ingredients: RecipeIngredient[];
    nutritionFacts: {
      calorieCount: number;
      carbohydrates: Quantity;
      fat: Quantity;
      fiber: Quantity;
      protein: Quantity;
      sugarAlcohol?: Quantity;
      sugarAdded?: Quantity;
      servingSize: Quantity;
      servingCount: number;
    };
    nutritionNotes?: string;
    preface: Array<any>;
    prepTime: Quantity;
    totalTime: Quantity;
    instructions: string[];
    _type: "recipe";
  }

  export interface RecipeIngredient {
    ingredient: string;
    notes?: string;
    quantity: Quantity;
  }

  export interface Quantity {
    amount: number;
    unit: {
      abbreviation?: string;
      label: string;
      labelPlural?: string;
    };
  }
}
