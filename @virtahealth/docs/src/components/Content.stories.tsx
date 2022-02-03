import * as React from "react";
import { Recipe } from "@virtahealth/components";
import { View } from "react-native";

export default {
  title: "Components / Recipe",
  component: Recipe,
};

export const Example = () => {
  return (
    <View>
      <Recipe
        data={{
          _type: "recipe",
          _id: "1",
          _i18NLang: "en",
          careProtocols: [],
          heroImage: {
            altText: "altext",
            caption: "caption",
            imageUrl:
              "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
          },
          previewText: "text",
          slug: {
            current: "slug",
          },
          tags: [],
          body: ["body"],
          ingredients: [
            {
              ingredient: "apple",
              quantity: {
                amount: 1,
                unit: {
                  label: "s",
                },
              },
            },
          ],
          nutritionNotes: "notes",
          preface: ["1"],
          prepTime: {
            amount: 100,
            unit: {
              label: "s",
            },
          },
          totalTime: {
            amount: 100,
            unit: {
              label: "s",
            },
          },
          instructions: ["1", "2"],
          name: "my name",
          nutritionFacts: {
            calorieCount: 100,
            carbohydrates: {
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
            fiber: {
              amount: 10,
              unit: {
                label: "fiber",
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
            servingCount: 1,
          },
        }}
        isMobile={true}
      />
    </View>
  );
};
