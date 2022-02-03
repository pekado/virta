import { MessageDescriptor } from "react-intl";

export type Quantity = {
  amount: number;
  unit: {
    abbreviation?: string;
    label: string;
    labelPlural?: string;
  };
};

export type NutritionalInfo = {
  protein?: Quantity;
  fat?: Quantity;
  carbohydrate?: Quantity;
  calories?: number;
};

export type BaseFoodData = {
  id?: MessageDescriptor;
  name?: MessageDescriptor;
  picture?: MessageDescriptor;
  description?: MessageDescriptor;
};

export type BrandData = {
  brandId?: MessageDescriptor;
  brandName?: MessageDescriptor;
  location?: MessageDescriptor;
  price?: number;
};

export type FoodItem = {
  baseFoodData?: BaseFoodData;
  nutritionalInformation?: NutritionalInfo;
  brandData?: BrandData;
};

export type FoodDetails = {
  foodItem?: FoodItem;
  packagedFoodItem?: FoodItem;
  restaurantMeal?: FoodItem;
};

export type DiscoverFoodContent = {
  foodItems: FoodItem[];
  packagedFoodItems: FoodItem[];
  restaurantMeals: FoodItem[];
};
