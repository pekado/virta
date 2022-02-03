import * as React from "react";
import { Animated, StyleProp, StyleSheet, ViewStyle } from "react-native";

import styled from "../styled-components";

export interface ProgressBarProps {
  current: number;
  total: number;
  colorInProgress?: string;
  colorComplete?: string;
  style?: StyleProp<ViewStyle>;
}

// if this is used in-line, Prettier converts it to lowercase
// but the Jest snapshot is rendered with it uppercase so it fails
const colorCode = "E6E8EB";

const Bar = styled.View`
  width: 90%;
  height: 8px;
  border-radius: 100px;
  background-color: #${colorCode};
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  colorInProgress = "#23AFFF",
  colorComplete = "#00AC47",
  style,
}) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: current,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [current, animation]);

  const fillWidth = animation.interpolate({
    inputRange: [0, total],
    outputRange: ["0%", "100%"],
  });

  const fillColor = animation.interpolate({
    inputRange: [0, total - 1, total],
    outputRange: [colorInProgress, colorInProgress, colorComplete],
  });

  return (
    <Bar style={style}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: fillColor,
            width: fillWidth,
            borderRadius: 100,
          },
        ]}
      />
    </Bar>
  );
};
