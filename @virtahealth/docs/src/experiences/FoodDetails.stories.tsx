import * as React from "react";
import { FoodDetailsPage } from "@virtahealth/experiences";
import { FoodDetailTypes } from "@virtahealth/components";
export default {
  title: "Experiences / FoodDetails",
  component: FoodDetailsPage,
};

export const Example = () => {
  return (
    <FoodDetailsPage
      gqlClient={
        {
          query: () => {
            return {
              data: {
                foodItem: {},
              },
            };
          },
          resetStore: () => undefined,
        } as any
      }
      packagedFoodItem={
        {
          nutritionalInformation: {
            calories: 100,
            carbohydrate: {
              amount: 10,
              unit: {
                label: "carbs",
              },
            },
            fat: {
              amount: 10,
              unit: {
                label: "fat",
              },
            },
            protein: {
              amount: 10,
              unit: {
                label: "protein",
              },
            },
            servingSize: {
              amount: 10,
              unit: {
                label: "servingSize",
              },
            },
          },
          baseFoodData: {
            id: "1",
            name: "Burger",
            picture:
              "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
            description: "Cat Burger",
          },
          brandData: {
            brandId: "1",
            brandName: "Cat",
            location: "",
            price: 10,
          },
        } as FoodDetailTypes.FoodItem
      }
      isMobile={true}
    />
  );
};

export const Example2 = () => {
  return (
    <FoodDetailsPage
      gqlClient={
        {
          query: () => {
            return {
              data: {
                foodItem: {},
              },
            };
          },
          resetStore: () => undefined,
        } as any
      }
      foodItem={
        {
          nutritionalInformation: {
            calories: 100,
            carbohydrate: {
              amount: 10,
              unit: {
                label: "carbs",
              },
            },
            fat: {
              amount: 10,
              unit: {
                label: "fat",
              },
            },
            protein: {
              amount: 10,
              unit: {
                label: "protein",
              },
            },
            servingSize: {
              amount: 10,
              unit: {
                label: "servingSize",
              },
            },
          },
          baseFoodData: {
            id: "1",
            name: "Burger",
            picture:
              "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
            description: "Cat Burger",
          },
        } as FoodDetailTypes.FoodItem
      }
      isMobile={true}
    />
  );
};

export const QueryForGenericFood = () => {
  return (
    <FoodDetailsPage
      isMobile={true}
      gqlClient={
        {
          query: () => {
            return {
              data: {
                packagedFoodItem: {
                  baseFoodData: {
                    name: "Name",
                    picture:
                      "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
                    description: "my desc",
                  },
                  nutritionalInformation: {
                    protein: 10,
                    fat: 10,
                    carb: 10,
                    calories: 10,
                    servingSize: 10,
                  },
                },
              },
            };
          },
          resetStore: () => undefined,
        } as any
      }
    />
  );
};

export const QueryForRestaurantFood = () => {
  return (
    <FoodDetailsPage
      isMobile={true}
      gqlClient={
        {
          query: () => {
            return {
              data: {
                packagedFoodItem: {
                  brandData: {
                    brandId: "123566",
                    brandName: "McDeezNuts",
                    location: "over there",
                    price: 10,
                  },
                  baseFoodData: {
                    id: "1234",
                    name: "Name",
                    picture:
                      "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
                    description: "my desc",
                  },
                  nutritionalInformation: {
                    protein: 10,
                    fat: 10,
                    carb: 10,
                    calories: 10,
                    servingSize: 10,
                  },
                },
              },
            };
          },
          resetStore: () => undefined,
        } as any
      }
    />
  );
};

export const QueryForPackagedFood = () => {
  return (
    <FoodDetailsPage
      isMobile={true}
      gqlClient={
        {
          query: () => {
            return {
              data: {
                packagedFoodItem: {
                  brandData: {
                    brandId: "123566",
                    brandName: "McDeezNuts",
                    location: "over there",
                    price: 10,
                  },
                  baseFoodData: {
                    id: "1234",
                    name: "Name",
                    picture:
                      "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
                    description: "my desc",
                  },
                  nutritionalInformation: {
                    protein: 10,
                    fat: 10,
                    carb: 10,
                    calories: 10,
                    servingSize: 10,
                  },
                },
              },
            };
          },
          resetStore: () => undefined,
        } as any
      }
    />
  );
};
