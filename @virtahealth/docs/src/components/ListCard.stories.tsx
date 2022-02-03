import * as React from "react";
import { ListCard, ListCardProps } from "@virtahealth/components";
import { View, FlatList, Platform } from "react-native";

export default {
  title: "Components / ListCard",
  component: ListCard,
};

const data: (ListCardProps & { key: number })[] = [
  {
    key: 1,
    title: "Kitteh Consumes Owner and It Hurt",
    description: "This chonk did a big nom on its owner, and now it's full",
    typeIcon: "read",
    typeInfo: "13 mins",
    onPress: () => console.log("pressed"),
    imageUrl: {
      uri: "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
    },
  },
  {
    key: 2,
    title: "Kitteh Consumes Owner and It Hurt",
    description: "This chonk did a big nom on its owner, and now it's full",
    typeInfo: "3 mins",
    typeIcon: "watch",
    onPress: () => console.log("pressed"),
    imageUrl: {
      uri: "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
    },
  },
  {
    key: 3,
    title: "Chicken Pot Pie",
    description: "5g carbs ·13g protein · 2g fat",
    typeInfo: "13 mins, 5 steps",
    typeIcon: "recipe",
    onPress: () => console.log("pressed"),
    imageUrl: {
      uri: "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
    },
  },
  {
    key: 4,
    title: "Double Double Burger",
    description: "21g carbs · 2g protein · 3g fat",
    typeInfo: "In N Out",
    typeIcon: "restaurant",
    onPress: () => console.log("pressed"),
    imageUrl: {
      uri: "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
    },
  },
  {
    key: 5,
    title: "Pamplemousse sparkling water",
    description: "0 carbs · 0g protein · 0g fat",
    typeInfo: "La Croix",
    typeIcon: "grocery",
    onPress: () => console.log("pressed"),
    imageUrl: {
      uri: "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
    },
  },
  {
    key: 6,
    title:
      "Kitteh Consumes Owner and It Hurt Kitteh Consumes Owner and It Hurt Kitteh Consumes Owner and It Hur. Kitteh Consumes Owner and It Hurt",
    description:
      "This chonk did a big nom on its owner, and now it's full. This chonk did a big nom on its owner, and now it's full. This chonk did a big nom on its owner, and now it's full.",
    typeInfo: "33 mins",
    typeIcon: "listen",
    onPress: () => console.log("pressed"),
    imageUrl: {
      uri: "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
    },
  },
];

export const Example = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      renderItem={({ item }) => (
        <ListCard item={item} isMobile={Platform.OS !== "web"} />
      )}
      data={data}
    />
  </View>
);
