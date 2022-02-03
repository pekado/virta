import * as React from "react";
import { Easing, Animated } from "react-native";
import styled, { ThemeContext } from "../styled-components";

interface Props {
  // 0 to 100, if this property changes it'll animate. Going over 100 or below 0 will cause your value to be trimmed
  percent: number;
  radius: number;
  color?: string;
  shadowColor?: string;
  bgColor?: string;
  borderWidth?: number;
  animationTime?: number;
  children?: React.ReactNode;
}

const OuterCircle = styled.View`
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
const InnerCircle = styled.View`
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
const LeftWrap = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`;
const HalfCircle = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ProgressCircle: React.FC<Props> = ({
  radius,
  percent,
  color,
  shadowColor,
  bgColor,
  borderWidth = 4,
  animationTime = 1000,
  children = null,
}) => {
  // get defaults for colors
  const theme = React.useContext(ThemeContext);
  if (!color) {
    color = theme.buttonSecondaryBackgroundColor;
  }
  if (!shadowColor) {
    shadowColor = theme.emptyProgressCircle;
  }
  if (!bgColor) {
    bgColor = theme.defaultBackground;
  }

  // trim percent so it never goes over 100 or under 0
  let trimmedPercent = percent;
  if (trimmedPercent > 100) {
    trimmedPercent = 100;
  }
  if (trimmedPercent < 0) {
    trimmedPercent = 0;
  }

  // we reuse the same animated value forever
  const circleProgress = React.useRef(new Animated.Value(0)).current;
  // calculated our interpolated half circles with the possibly new colors
  const interpolationValuesHalfCircle2 = calcInterpolationValuesForHalfCircle2({
    circleProgress,
    shadowColor,
  });
  const interpolationValuesHalfCircle3 = calcInterpolationValuesForHalfCircle3({
    circleProgress,
    color,
  });
  const interpolationValuesHalfCircle1 = calcInterpolationValuesForHalfCircle1({
    circleProgress,
    color,
  });
  // restart animation incase the percent changed
  circleProgress.stopAnimation();
  restartAnimation({ circleProgress, percent: trimmedPercent, animationTime });

  // render our circles and half-circles. The summary of how this component works is this:
  // Outer circle is a grey circle. That's it
  // Inner circle is a smaller, centered, white circle. This gives the appearence of a circle with a grey border and white innard
  // The three half circles are what makes the border colored. The first one is colored and starts off covering the
  // left half of the circle. It rotates around the center to "fill in" the right half of the circle's border with color
  // The second half is grey and overlays the color half, however remains in place on the left half of the circle. This means that,
  // if we didn't rotate either of them, the circle border would be entirely grey. As we start to rotate the colored half out from
  // underneath the grey half clockwise, the right half of the circle's border becomes colored. When we get to 50%, the colored half
  // circle is fully on the right side. At this point we simultaniously turn the grey half circle invisible and make visible the third half circle,
  // which is a colored one also on the right side (so now there's 2 colored on the right side). The left half is still grey because of the original
  // "outer circle" grey border. As we go above 50%, we rotate the new, colored 3rd half circle out from the right side clockwise to start filling
  // in the left half of the circle border with color. At 100% the 1st and 3rd half circle fully inhabits each half of the circle, and is colored,
  // causing the border to appear colored. All this time the center white circle is overlayed in the middle, leaving room for content
  return (
    <OuterCircle
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: shadowColor,
      }}
    >
      {renderHalfCircle(
        interpolationValuesHalfCircle1,
        { radius, percent: trimmedPercent },
        circleProgress,
        false
      )}
      {renderHalfCircle(
        interpolationValuesHalfCircle2,
        { radius, percent: trimmedPercent },
        circleProgress,
        true
      )}
      {renderHalfCircle(
        interpolationValuesHalfCircle3,
        { radius, percent: trimmedPercent },
        circleProgress,
        true
      )}
      {renderInnerCircle({ children, radius, borderWidth, bgColor })}
    </OuterCircle>
  );
};

// the colored half circle that starts hidden on the left side then rotates around to cover the right
// as we go from 0-50% progress
const calcInterpolationValuesForHalfCircle1 = ({
  circleProgress,
  color,
}: {
  circleProgress: Animated.Value;
  color: string;
}) => {
  const rotate = circleProgress.interpolate({
    inputRange: [0, 50, 50, 100],
    outputRange: ["0deg", "180deg", "180deg", "180deg"],
  });

  const backgroundColor = color;
  return { rotate, backgroundColor, opacity: 1 };
};

// the grey half of the circle that covers half1 from being seen when its on the left side
const calcInterpolationValuesForHalfCircle2 = ({
  circleProgress,
  shadowColor,
}: {
  circleProgress: Animated.Value;
  shadowColor: string;
}) => {
  const backgroundColor = shadowColor;

  const opacity = circleProgress.interpolate({
    inputRange: [0, 50, 50, 100],
    outputRange: [1, 1, 0, 0],
  });

  return { rotate: "0deg", backgroundColor, opacity };
};

// the colored part of the circle that starts on the right side and rotates to cover the left
// as we go from 50-100% progress
const calcInterpolationValuesForHalfCircle3 = ({
  circleProgress,
  color,
}: {
  circleProgress: Animated.Value;
  color: string;
}) => {
  const rotate = circleProgress.interpolate({
    inputRange: [50, 100],
    outputRange: ["180deg", "360deg"],
  });

  const backgroundColor = color;

  const opacity = circleProgress.interpolate({
    inputRange: [0, 50, 50, 100],
    outputRange: [0, 0, 1, 1],
  });

  return { rotate, backgroundColor, opacity };
};

// start animating the two half circles
const restartAnimation = ({
  circleProgress,
  percent,
  animationTime,
}: {
  circleProgress: Animated.Value;
  percent: number;
  animationTime: number;
}) => {
  Animated.timing(circleProgress, {
    toValue: percent,
    duration: animationTime,
    useNativeDriver: true,
    easing: Easing.linear,
  }).start();
};

const renderHalfCircle = (
  {
    rotate,
    backgroundColor,
    opacity,
  }: ReturnType<
    | typeof calcInterpolationValuesForHalfCircle1
    | typeof calcInterpolationValuesForHalfCircle2
    | typeof calcInterpolationValuesForHalfCircle3
  >,
  { radius, percent }: { radius: number; percent: number },
  circleProgress: Animated.Value,
  expandHeight: boolean
) => {
  // fixes wierd bug where thin line appears on left of circle. need to interpolate so it doesnt
  // cause the colored semicircle to overlap itself in the very beginning. Line sliver still shows a little
  // during beginning animation, but good enough
  let left;
  if (percent === 0 && !expandHeight) {
    left = -radius;
  } else if (percent < 50 && !expandHeight) {
    left = circleProgress.interpolate({
      inputRange: [0, percent],
      outputRange: [0, 1],
    });
  } else {
    left = 0;
  }

  return (
    <LeftWrap
      style={{
        width: radius,
        height: radius * 2,
      }}
    >
      <HalfCircle
        style={{
          opacity,
          width: radius,
          height: expandHeight ? radius * 3 : radius * 2,
          top: expandHeight ? -radius / 2 : 0,
          borderRadius: radius,
          backgroundColor,
          transform: [
            { translateX: left },
            { translateX: radius / 2 },
            { rotate },
            { translateX: -radius / 2 },
          ],
        }}
      />
    </LeftWrap>
  );
};

const renderInnerCircle = ({
  children,
  radius,
  borderWidth,
  bgColor,
}: {
  children: React.ReactNode;
  radius: number;
  borderWidth: number;
  bgColor: string;
}) => {
  const radiusMinusBorder = radius - (borderWidth || 2);
  return (
    <InnerCircle
      style={{
        width: radiusMinusBorder * 2,
        height: radiusMinusBorder * 2,
        borderRadius: radiusMinusBorder,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </InnerCircle>
  );
};
