import * as React from "react";
import { Animated } from "react-native";

interface AnimatedWrapperProps {
  minHeight: number;
  maxHeight: number;
  completionCallback?: () => void;
}

export const AnimatedHeight: React.FC<
  React.PropsWithChildren<AnimatedWrapperProps>
> = ({
  minHeight = 100,
  maxHeight = 100,
  completionCallback = () => undefined,
  children,
}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const heightAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(heightAnim, {
        toValue: 100,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        completionCallback();
      }
    });
  }, [fadeAnim, heightAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        minHeight: heightAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [0, minHeight],
        }),
        maxHeight: heightAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [0, maxHeight],
        }),
        width: "100%",
      }}
    >
      {children}
    </Animated.View>
  );
};
