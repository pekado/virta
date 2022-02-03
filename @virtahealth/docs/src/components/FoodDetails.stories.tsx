import * as React from "react";
import { FoodDetails } from "@virtahealth/components";
import { View } from "react-native";

export default {
  title: "Components / FoodDetails",
  component: FoodDetails,
};

export const Example = () => {
  return (
    <View>
      <FoodDetails
        data={{
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
        }}
        isMobile={true}
      />
    </View>
  );
};
