import { ViewStyle } from "react-native";
import * as border from "../../primitives/border";
import * as color from "../../primitives/color";
import * as font from "../../primitives/font";
import * as space from "../../primitives/space";

/**
 * accordion styles
 * @module accordion
 */

export const accordionMainBorderStyle: ViewStyle["borderStyle"] = "solid";
export const accordionMainBorderColor = color.carbonGray200;
export const accordionDividerBorderColor = color.carbonGray300;
export const accordionHeaderHeight = 35;
export const accordionHeaderTitleFontSize = font.fontSize6;
export const accordionHeaderBackgrounddColor = color.white;
export const accordionBodyBackgrounddColor = color.white;
export const accordionHeaderTitleColor = color.carbonGray700;
export const accordionHeaderSubtitleFontSize = font.fontSize3;
export const accordionHeaderSubtitleColor = color.carbonGray600;
export const accordionHeaderSubtitleMarginLeft = space.space3;
export const accordionHeaderAdditionalTextColor = color.carbonGray900;
export const accordionHeaderAdditionalTextFontWeight = font.fontWeight5;
export const accordionBorderWidth = border.borderWidth1;
export const accordionBorderRadius = 6;
export const accordionHeaderLeftMargin = space.space5;
export const accordionHeaderRightMargin = space.space5;
