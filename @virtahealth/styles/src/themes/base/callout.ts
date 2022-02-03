import * as color from "../../primitives/color";
import * as font from "../../primitives/font";
import * as border from "../../primitives/border";
/**
 * callout styles
 * @module callout
 */

// Base callout
export const calloutBaseBorderRadius = 6;
export const calloutBaseBorderWidth = border.borderWidth0;
export const calloutBaseContainerHorizontalPadding = 21;
export const calloutBaseContainerVerticalPadding = 17;

// Base Callout Text
export const calloutBaseTextFontFamily =
  font.fontFamilySansSerifMediumPostscript;
export const calloutBaseTextFontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const calloutBaseTextFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const calloutBaseTitleFontWeight = font.fontWeight6;
export const calloutBaseTitleFontSize = 18;
export const calloutBaseTitleLineHeight = 24;
export const calloutBaseDescriptionFontWeight = font.fontWeight5;
export const calloutBaseDescriptionFontSize = 14;
export const calloutBaseDescriptionLineHeight = 18;

// success callout
export const calloutSuccessFontColor = color.clorineGreen700;
export const calloutSuccessBackgroundColor = color.clorineGreen100;
export const calloutSuccessButtonColor = color.clorineGreen700;
export const calloutSuccessBorderWidth = border.borderWidth0;

// danger callout
export const calloutDangerFontColor = color.ironRed700;
export const calloutDangerBackgroundColor = color.ironRed100;
export const calloutDangerButtonColor = color.ironRed700;
export const calloutDangerBorderWidth = border.borderWidth0;

// warning callout
export const calloutWarningFontColor = color.phosphorousOrange700;
export const calloutWarningBackgroundColor = color.phosphorousOrange100;
export const calloutWarningButtonColor = color.phosphorousOrange700;
export const calloutWarningBorderWidth = border.borderWidth0;

// info callout
export const calloutInfoFontColor = color.oxygenBlue700;
export const calloutInfoBackgroundColor = color.oxygenBlue100;
export const calloutInfoButtonColor = color.oxygenBlue700;
export const calloutInfoBorderWidth = border.borderWidth0;

// default callout
export const calloutDefaultFontColor = color.carbonGray900;
export const calloutDefaultBackgroundColor = color.carbonGray100;
export const calloutDefaultButtonColor = color.carbonGray900;
export const calloutDefaultBorderColor = color.carbonGray300;
export const calloutDefaultBorderWidth = border.borderWidth2;
