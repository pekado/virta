import * as React from "react";
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import styled from "../styled-components";

const StyledSvgMask = styled(Svg)`
  position: absolute;
  z-index: 10;
  left: 16px;
  width: ${({ theme }) => theme.carouselCardContainerWidth + 2}px;
  height: ${({ theme }) => theme.carouselCardContainerHeight}px;
  border-radius: ${({ theme }) => theme.carouselCardBorderRadius}px;
`;

export const Mask: React.FC<{ direction: "left" | "right" }> = ({
  direction,
}) => {
  return (
    <StyledSvgMask>
      <Defs>
        <LinearGradient id="ShadientRight" x1="0" x2="1" y1="0" y2="0">
          <Stop offset="0%" stopColor="white" stopOpacity="0" />
          <Stop offset="100%" stopColor="white" stopOpacity="100" />
        </LinearGradient>
        <LinearGradient id="ShadientLeft" x1="1" x2="0" y1="0" y2="0">
          <Stop offset="0%" stopColor="white" stopOpacity="0" />
          <Stop offset="100%" stopColor="white" stopOpacity="100" />
        </LinearGradient>
      </Defs>
      <Rect
        x="0"
        y="0"
        rx="15"
        ry="15"
        width="230"
        height="230"
        fill={
          direction === "right" ? "url(#ShadientRight)" : "url(#ShadientLeft)"
        }
      />
    </StyledSvgMask>
  );
};
