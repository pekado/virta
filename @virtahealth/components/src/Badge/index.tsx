import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { BaseTheme, primitives } from "@virtahealth/styles";
import { getPlatformFontFamilySuffix } from "@virtahealth/utils";

import { Base } from "../Text";
import styled from "../styled-components";

interface BadgeProps {
  /**
   * The text that will display within the badge
   */
  label?: string;

  /**
   * The color of the badge. You may use
   * shorthand colors (orange, blue, or pink)
   * any supported HTML colors
   * rgb/hex color codes
   */
  color?: "orange" | "blue" | "pink" | string;

  /**
   * The size used to determine badge size and text size
   */
  size?: number;

  /**
   * Optional styling for the badge container.
   * Primarily intended for positioning the badge
   */
  containerStyle?: StyleProp<ViewStyle>;
}

type BadgeWrapperPassthroughProps = Pick<BadgeProps, "size" | "color">;
type BadgeLabelPassthroughProps = Required<Pick<BadgeProps, "size">>;

const BadgeWrapper = styled.View<BadgeWrapperPassthroughProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color, theme }) => {
    switch (color) {
      case "orange":
        return primitives.color.phosphorousOrange900;
      case "blue":
        return primitives.color.calciumTeal900;
      case "pink":
        return primitives.color.magnesiumPink700;
      default:
        return color || theme.badgeDefaultBackgroundColor;
    }
  }};
  border-radius: ${({ size }) => size}px;
  align-items: center;
  justify-content: center;
`;

const BadgeLabel = styled(Base)<BadgeLabelPassthroughProps>`
  width: 100%;
  color: ${({ theme }) => theme.badgeDefaultTextColor};
  font-weight: ${({ theme }) => theme.badgeBaseTextFontWeight};
  font-family: "${({ theme }) =>
    theme[
      `badgeBaseTextFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ size }) => `${(size * 2) / 3}px`};
`;

export const Badge: React.FC<BadgeProps> = ({
  size = 24,
  label,
  color,
  containerStyle,
}) => (
  <BadgeWrapper size={size} color={color} style={containerStyle}>
    {label !== undefined ? <BadgeLabel size={size}>{label}</BadgeLabel> : null}
  </BadgeWrapper>
);
