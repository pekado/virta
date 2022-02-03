import * as React from "react";
import { getPlatformFontFamilySuffix, startCase } from "@virtahealth/utils";

import { BaseTheme } from "@virtahealth/styles";
import styled, { ThemeInterface } from "../styled-components";
// consistent with Substrate styling

export type Size = "xsmall" | "small" | "regular" | "large" | "xlarge";
export type Weight = "light" | "regular" | "semibold" | "bold";
export type Color =
  | "Base"
  | "Subdued"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Danger"
  | "Warning";

interface SubstrateTextProps {
  color?: Color | string;
  lineHeightMultiplier?: number | string;
  size?: Size | number;
  weight?: Weight | number;
  onPress?: () => void;
}

const getTextFontWeight = (theme: ThemeInterface, weight: number | string) => {
  const themedFontWeightToTry = `${weight}FontWeight` as keyof BaseTheme;
  return themedFontWeightToTry in theme ? theme[themedFontWeightToTry] : weight;
};
const getTextColor = (theme: ThemeInterface, color: string) => {
  const themedColorToTry = `substrateTextColor${startCase(
    color
  )}` as keyof BaseTheme;
  return themedColorToTry in theme ? theme[themedColorToTry] : color;
};

const StyledSubstrateText = styled.Text<SubstrateTextProps>`
  color: ${({ theme, color = "base" }) => getTextColor(theme, color)};
  font-weight: ${({ theme, weight = "regular" }) =>
    getTextFontWeight(theme, weight)};
  font-family: "${({ theme }) =>
    theme[
      `substrateTextFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
`;

const getHeadingFontSize = (
  size: number | string,
  theme: ThemeInterface
): number => {
  const themedFontSizeToTry = `heading${size}FontSize` as keyof BaseTheme;
  return Number(theme[themedFontSizeToTry] || size);
};

const StyledHeading = styled(StyledSubstrateText)<SubstrateTextProps>`
  font-size: ${({ theme, size = 2 }) => `${getHeadingFontSize(size, theme)}px`};
  line-height: ${({ theme, lineHeightMultiplier = 1.4, size = 2 }) =>
    typeof lineHeightMultiplier === "number"
      ? `${lineHeightMultiplier * getHeadingFontSize(size, theme)}px`
      : lineHeightMultiplier};
`;

export const Heading: React.FC<SubstrateTextProps> = ({
  children,
  weight = "bold",
  ...restProps
}) => (
  <StyledHeading weight={weight} {...restProps}>
    {children}
  </StyledHeading>
);

interface LabelProps extends SubstrateTextProps {
  size?: Extract<Size, "small" | "regular" | "large"> | number;
}

const getLabelFontSize = (
  size: number | Size,
  theme: ThemeInterface
): number => {
  const themedFontSizeToTry =
    typeof size === "string" ? `label${startCase(size)}FontSize` : "";
  return Number(theme[themedFontSizeToTry as keyof BaseTheme] || size);
};

const StyledLabel = styled(StyledSubstrateText)<LabelProps>`
  font-size: ${({ theme, size = "regular" }) =>
    `${getLabelFontSize(size, theme)}px`};
  line-height: ${({ theme, lineHeightMultiplier = 1, size = "regular" }) =>
    typeof lineHeightMultiplier === "number"
      ? `${lineHeightMultiplier * getLabelFontSize(size, theme)}px`
      : lineHeightMultiplier};
`;

export const Label: React.FC<LabelProps> = ({ children, ...restProps }) => (
  <StyledLabel {...restProps}>{children}</StyledLabel>
);

export const getBodyFontSize = (
  size: number | Size,
  theme: ThemeInterface
): number => {
  const themedFontSizeToTry =
    typeof size === "string" ? `body${startCase(size)}FontSize` : "";
  return Number(theme[themedFontSizeToTry as keyof BaseTheme] || size);
};

export interface BodyProps extends SubstrateTextProps {
  size?: Size | number;
}

const StyledBody = styled(StyledSubstrateText)<BodyProps>`
  font-size: ${({ theme, size = "regular" }) =>
    `${getBodyFontSize(size, theme)}px`};
  line-height: ${({ theme, lineHeightMultiplier = 1, size = "regular" }) =>
    typeof lineHeightMultiplier === "number"
      ? `${lineHeightMultiplier * getBodyFontSize(size, theme)}px`
      : lineHeightMultiplier};
`;

export const Body: React.FC<BodyProps> = ({ children, ...restProps }) => (
  <StyledBody {...restProps}>{children}</StyledBody>
);
