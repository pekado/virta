import * as border from "../../primitives/border";
import * as color from "../../primitives/color";
import * as font from "../../primitives/font";
import * as space from "../../primitives/space";

/**
 * input styles
 * @module input
 */

export const inputFontFamily = font.fontFamilySansSerifBookPostscript;
export const inputFontFamilyAndroid = font.fontFamilySansSerifBookFilename;
export const inputFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const inputFontSize = font.fontSize6;
export const inputBorder = "none";
export const inputBorderColor = color.carbonGray300;
export const inputBorderWidth = border.borderWidth2;
// Disable this because if we don't specify number then down the line we end up getting
// TS angry because we have types that are specific numbers that don't mix well
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const inputBorderRadius: number = 6;
export const inputBackgroundColor = color.white;
export const inputDisabledBorderColor = color.carbonGray200;
export const inputErrorBorderColor = color.ironRed500;
export const inputDisabledBackgroundColor = color.carbonGray100;
export const inputColor = color.black;
export const inputPlaceholderColor = color.carbonGray700;
export const inputFocusColor = color.oxygenBlue700;

// inset text
export const inputInsetTextFontFamily = font.fontFamilySansSerifBookPostscript;
export const inputInsetTextFontSize = font.fontSize3;
export const inputInsetTextFontWeight = font.fontWeight3;
export const inputInsetTextLineHeight = font.fontSize5;
export const inputInsetTextColor = color.carbonGray700;

// inline description
export const inputInlineDescriptionFontFamily =
  font.fontFamilySansSerifBookPostscript;
export const inputInlineDescriptionFontSize = font.fontSize3;
export const inputInlineDescriptionFontWeight = font.fontWeight3;
export const inputInlineDescriptionLineHeight = font.fontSize5;
export const inputInlineDescriptionColor = color.carbonGray700;

// thick inputs
export const inputThickFontSize = font.fontSize6;
export const inputThickLineHeight = space.space6;
export const inputThickBorderWidth = border.borderWidth3;
export const inputThickBorderRadius = border.borderRadius2;

// error text
export const errorTextTopMargin = space.space350;
