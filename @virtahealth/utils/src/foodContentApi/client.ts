import gql from "graphql-tag";
import {
  ApolloClient as GraphQLClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { FoodItem, FoodDetails, DiscoverFoodContent } from "./types";

const brandDataFields = gql`
  fragment BrandDataFields on BrandData {
    brandId
    brandName
    location
    price
  }
`;
const nutritionalInformationFields = gql`
  fragment NutritionalInformationFields on NutritionalInformation {
    protein {
      amount
      unit {
        abbrevation
        label
      }
    }
    fat {
      amount
      unit {
        abbrevation
        label
      }
    }
    carbohydrate {
      amount
      unit {
        abbrevation
        label
      }
    }
    calories
    servingSize {
      amount
      unit {
        abbrevation
        label
      }
    }
  }
`;

const baseFoodDataFields = gql`
  fragment BaseFoodFields on BaseFoodData {
    id
    name
    description
    picture
  }
`;
const foodItemFields = gql`
    fragment FoodItemFields on FoodItem {
        baseFoodData {
            ...BaseFoodFields
        }
        nutritionalInformation {
            ...NutritionalInformationFields
        }
    }
    ${baseFoodDataFields}, ${nutritionalInformationFields}
`;
const packagedFoodFields = gql`
  fragment PackagedFoodFields on PackagedFood {
    baseFoodData {
        ...BaseFoodFields
    }
    nutritionalInformation {
        ...NutritionalInformationFields
    }
    brandData {
      ...BrandDataFields
    }
  }
  ${foodItemFields}, ${brandDataFields}
`;
const restaurantMealFields = gql`
  fragment RestaurantMealFields on RestaurantMeal {
    baseFoodData {
        ...BaseFoodFields
    }
    nutritionalInformation {
        ...NutritionalInformationFields
    }
    brandData {
      ...BrandDataFields
    }
  }
  ${baseFoodDataFields}, ${nutritionalInformationFields}, ${brandDataFields}
`;
const discoverFoodContentQuery = gql`
  query DiscoverFood($term: String!) {
    discoverFoodContent(openText: $term, includeNutritionalInformation: true) {
      foodItems {
        ...FoodItemFields
      }
      packagedFoodItems {
        ...PackagedFoodFields
      }
      restaurantMeals {
        ...RestaurantMealFields
      }
    }
  }
  ${foodItemFields}, ${packagedFoodFields}, ${restaurantMealFields}
`;
const foodContentDetailsQuery = gql`
  query FoodContentDetails($foodItemName: String, $foodItemId: String) {
    foodContentDetails(foodItemName: $foodItemName, foodItemId: $foodItemId) {
      foodItem {
        ...FoodItemFields
      }
      packagedFoodItem {
        ...PackagedFoodFields
      }
      restaurantMeal {
        ...RestaurantMealFields
      }
    }
  }
  ${foodItemFields}, ${packagedFoodFields}, ${restaurantMealFields}
`;

export const discoverFoodContent = async (
  gqlClient: GraphQLClient<NormalizedCacheObject>,
  openText: string
): Promise<DiscoverFoodContent> => {
  // We need to reset cache on FoodDetails to abide by Contractual obligations
  await gqlClient.resetStore();
  const result = await gqlClient.query({
    query: discoverFoodContentQuery,
    variables: {
      term: openText,
    },
  });
  if (result.errors) {
    throw new Error("error retrieving discover food content");
  }

  return result?.data as DiscoverFoodContent;
};

export const getFoodDetails = async (
  gqlClient: GraphQLClient<NormalizedCacheObject>,
  foodItemName?: string,
  foodItemId?: string
): Promise<FoodItem> => {
  // We need to reset cache on FoodDetails to abide by Contractual obligations
  await gqlClient.resetStore();
  const result = await gqlClient.query({
    query: foodContentDetailsQuery,
    variables: {
      foodItemName: foodItemName,
      foodItemId: foodItemId,
    },
  });

  if (result.errors) {
    throw new Error("Error retrieving food details");
  }
  const foodDetails = result?.data?.foodContentDetails as FoodDetails;

  if (foodDetails.foodItem) {
    return foodDetails.foodItem as FoodItem;
  } else if (foodDetails.packagedFoodItem) {
    return foodDetails.packagedFoodItem as FoodItem;
  } else if (foodDetails.restaurantMeal) {
    return foodDetails.restaurantMeal as FoodItem;
  } else {
    throw new Error("No valid response from food details");
  }
};
