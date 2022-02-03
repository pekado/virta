export namespace FoodDetailTypes {
  export interface Quantity {
    amount: number;
    unit: {
      abbreviation?: string;
      label: string;
      labelPlural?: string;
    };
  }
  export interface NutritionalInformation {
    protein: Quantity;
    fat: Quantity;
    carbohydrate: Quantity;
    calories: number;
    servingSize: Quantity;
  }
  export interface BaseFoodData {
    id?: string;
    name: string;
    picture: string;
    description: string;
  }
  export interface BrandData {
    brandId: string;
    brandName: string;
    location: string;
    price: number;
  }
  export interface FoodItem {
    baseFoodData: BaseFoodData;
    nutritionalInformation: NutritionalInformation;
    brandData?: BrandData;
  }
}
