import {
  MOBILE_SMALL_BREAKPOINT,
  MOBILE_STANDARD_BREAKPOINT,
  SKILL_TILE_COLORS,
} from "./constants";

export const getColorForTile = (label: string): [string, string] => {
  const index = label.length % SKILL_TILE_COLORS.length;
  const { background: backgroundColor, text: labelColor } =
    SKILL_TILE_COLORS[index];
  return [backgroundColor, labelColor];
};

export const calculateTileWidthPercentage = (screenWidth: number): number => {
  if (!screenWidth) {
    return 48;
  }
  return screenWidth <= MOBILE_SMALL_BREAKPOINT
    ? 99
    : screenWidth > MOBILE_SMALL_BREAKPOINT &&
      screenWidth <= MOBILE_STANDARD_BREAKPOINT
    ? 48
    : 32;
};

export const calculateTileHeightPixels = (screenWidth: number): number => {
  if (!screenWidth) {
    return 144;
  }
  return screenWidth <= MOBILE_SMALL_BREAKPOINT
    ? 72
    : screenWidth > MOBILE_SMALL_BREAKPOINT &&
      screenWidth <= MOBILE_STANDARD_BREAKPOINT
    ? 144
    : 72;
};

export const calculateJustifyContent = (
  screenWidth: number
): "space-around" | "space-between" =>
  screenWidth <= MOBILE_SMALL_BREAKPOINT ? "space-around" : "space-between";
