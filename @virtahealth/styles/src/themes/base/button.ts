import { TextStyle } from "react-native";
import * as color from "../../primitives/color";
import * as font from "../../primitives/font";
import * as space from "../../primitives/space";
import * as textDecorationLine from "../../primitives/text-decoration-line";

/**
 * button styles
 * @module button
 */

// Base Button
export const buttonBaseBorderRadius = space.space8;

// Base Button Text
export const buttonBaseTextFontFamily =
  font.fontFamilySansSerifMediumPostscript;
export const buttonBaseTextFontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const buttonBaseTextFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const buttonBaseTextFontWeight: TextStyle["fontWeight"] = "bold";

// Intent
// Primary Button
export const buttonPrimaryBackgroundColor = color.oxygenBlue700;
export const buttonPrimaryBorderColor = color.oxygenBlue700;
// Primary Button Text
export const buttonPrimaryTextColor = color.white;
export const buttonPrimaryTextFontWeight = font.fontWeight5;

// Secondary Button
export const buttonSecondaryBackgroundColor = color.oxygenBlue900;
export const buttonSecondaryBorderColor = color.calciumTeal500;
// Secondary Button Text
export const buttonSecondaryTextColor = color.white;

// Tertiary Button
export const buttonTertiaryBackgroundColor = color.white;
export const buttonTertiaryBorderColor = color.white;
// Tertiary Button Text
export const buttonTertiaryTextColor = color.oxygenBlue700;

export const buttonTertiaryTextDecoration = textDecorationLine.none;

// none button
export const buttonNoneBackgroundColor = color.carbonGray300;
// none button text
export const buttonNoneTextColor = color.carbonGray900;

// success button
export const buttonSuccessBackgroundColor = color.clorineGreen500;
// success button text
export const buttonSuccessTextColor = color.white;

// warning button
export const buttonWarningBackgroundColor = color.phosphorousOrange500;
// warning button text
export const buttonWarningTextColor = color.white;

// danger button
export const buttonDangerBackgroundColor = color.ironRed500;
// danger button text
export const buttonDangerTextColor = color.white;

// Disabled Button
export const buttonDisabledBackgroundColor = color.carbonGray200;
export const buttonDisabledTextColor = color.carbonGray500;

// size
// large
export const buttonLargeMinHeight = font.fontSize12;
export const buttonLargeTextFontSize = 24;
export const buttonLargePaddingHorizontal = 28;
export const buttonLargeNarrowPaddingHorizontal = 16;

// medium
export const buttonMediumMinHeight = font.fontSize10;
export const buttonMediumTextFontSize = font.fontSize5;
export const buttonMediumTextLineHeight = font.fontSize5;
export const buttonMediumPaddingHorizontal = 22;
export const buttonMediumNarrowPaddingHorizontal = 12;

// small
export const buttonSmallMinHeight = font.fontSize8;
export const buttonSmallTextFontSize = font.fontSize2;
export const buttonSmallTextLineHeight = font.fontSize10;
export const buttonSmallPaddingHorizontal = space.space4;
export const buttonSmallNarrowPaddingHorizontal = 8;
