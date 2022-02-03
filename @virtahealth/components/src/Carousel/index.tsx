import * as React from "react";
import {
  View,
  FlatList,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface CarouselProps {
  contentContainerStyle?: StyleProp<ViewStyle>;
  carouselItems: Array<any>;
  renderFunction: ListRenderItem<any>;
}

export { CarouselCard, CarouselCardProps } from "./CarouselCard";

/**
 *
 * @param carouselItems: provide an array of carousel item objects to render
 */
export const Carousel: React.FC<CarouselProps> = ({
  contentContainerStyle,
  carouselItems,
  renderFunction,
}) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        horizontal={true}
        renderItem={renderFunction}
        data={carouselItems}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
