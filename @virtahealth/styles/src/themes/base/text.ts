import { TextStyle } from "react-native";
import * as color from "../../primitives/color";
import * as font from "../../primitives/font";
import * as textDecorationLine from "../../primitives/text-decoration-line";

/**
 * text styles
 * @module text
 */

// Base Text
export const textBaseFontFamily = font.fontFamilySansSerifBookPostscript;
export const textBaseFontFamilyAndroid = font.fontFamilySansSerifBookFilename;
export const textBaseFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textBaseFontSize = font.fontSize6;
export const textBaseFontWeight = font.fontWeight5;
export const textBaseLineHeight = font.fontSize6;
export const textBaseLetterSpacing = 0;
export const textBaseColor = color.carbonGray900;
export const textDecoration = textDecorationLine.none;

// Body Text
export const textBodyColor = color.carbonGray900;
export const textBodyLightColor = color.carbonGray500;
export const textBodyFontFamily = font.fontFamilySansSerifBookPostscript;
export const textBodyFontFamilyAndroid = font.fontFamilySansSerifBookFilename;
export const textBodyFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textBodyFontSize = font.fontSize6;
export const textBodyFontWeight = font.fontWeight5;
export const textBodyLineHeight = font.fontSize6;
export const textBodyLetterSpacing = 0;

// BodySmall Text
export const textBodySmallColor = color.carbonGray900;
export const textBodySmallFontFamily = font.fontFamilySansSerifBookPostscript;
export const textBodySmallFontFamilyAndroid =
  font.fontFamilySansSerifBookFilename;
export const textBodySmallFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textBodySmallFontSize = font.fontSize5;
export const textBodySmallFontWeight = font.fontWeight5;
export const textBodySmallLineHeight = font.fontSize5;
export const textBodySmallLetterSpacing = 0;

// Heading 1
export const textHeading1FontFamily = font.fontFamilySansSerifMediumPostscript;
export const textHeading1FontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const textHeading1FontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textHeading1FontSize = font.fontSize10;
export const textHeading1FontWeight: TextStyle["fontWeight"] = "bold";
export const textHeading1LineHeight = font.fontSize10;
export const textHeading1LetterSpacing = 0;
export const textHeading1Color = color.carbonGray900;

// Heading 2
export const textHeading2FontFamily = font.fontFamilySansSerifMediumPostscript;
export const textHeading2FontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const textHeading2FontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textHeading2FontSize = font.fontSize8;
export const textHeading2FontWeight = font.fontWeight6;
export const textHeading2LineHeight = font.fontSize8;
export const textHeading2LetterSpacing = 0;
export const textHeading2Color = color.carbonGray900;
//  Default text color

// Heading 3
export const textHeading3FontFamily = font.fontFamilySansSerifMediumPostscript;
export const textHeading3FontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const textHeading3FontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textHeading3FontSize = font.fontSize7;
export const textHeading3FontWeight = font.fontWeight5;
export const textHeading3LineHeight = font.fontSize7;
export const textHeading3LetterSpacing = 0;
export const textHeading3Color = color.carbonGray900;

// Heading 4
export const textHeading4FontFamily = font.fontFamilySansSerifMediumPostscript;
export const textHeading4FontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const textHeading4FontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textHeading4FontSize = font.fontSize6;
export const textHeading4FontWeight = font.fontWeight5;
export const textHeading4LetterSpacing = 0;
export const textHeading4LineHeight = font.fontSize6;
export const textHeading4Color = color.carbonGray900;

// Smallcaps
export const textSmallcapsFontFamily = font.fontFamilySansSerifMediumPostscript;
export const textSmallcapsFontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const textSmallcapsFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textSmallcapsFontSize = font.fontSize4;
// Disable this because if we don't specify number then down the line we end up getting
// TS angry because we have types that are specific numbers that don't mix well
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const textSmallcapsLetterSpacing: number = 1.2;
export const textSmallcapsFontWeight = font.fontWeight6;
export const textSmallcapsLineHeight = font.fontSize4;
export const textSmallcapsColor = color.carbonGray900;

// Blockquote
export const textBlockquoteFontFamily =
  font.fontFamilySansSerifMediumPostscript;
export const textBlockquoteFontFamilyAndroid =
  font.fontFamilySansSerifMediumFilename;
export const textBlockquoteFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textBlockquoteFontSize = font.fontSize8;
export const textBlockquoteLetterSpacing = 1;
export const textBlockquoteFontWeight = font.fontWeight5;
export const textBlockquoteLineHeight = font.fontSize8;
export const textBlockquoteColor = color.carbonGray500;

// Caption
export const textCaptionFontFamily = font.fontFamilySansSerifBookPostscript;
export const textCaptionFontFamilyAndroid =
  font.fontFamilySansSerifBookFilename;
export const textCaptionFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textCaptionFontSize = font.fontSize2;
export const textCaptionLetterSpacing = 0;
export const textCaptionFontWeight = font.fontWeight5;
export const textCaptionLineHeight = font.fontSize2;
export const textCaptionColor = color.carbonGray700;

// Monospace
export const textMonospaceFontFamily = font.fontFamilySansSerifBookPostscript;
export const textMonospaceFontFamilyAndroid =
  font.fontFamilySansSerifBookFilename;
export const textMonospaceFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textMonospaceFontSize = font.fontSize6;
export const textMonospaceFontWeight = font.fontWeight5;
export const textMonospaceLineHeight = font.fontSize6;
export const textMonospaceColor = color.carbonGray900;
export const textMonospaceLetterSpacing = 0;

// Label
export const textLabelFontFamily = font.fontFamilySansSerifBookPostscript;
export const textLabelFontFamilyAndroid = font.fontFamilySansSerifBookFilename;
export const textLabelFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textLabelFontSize = font.fontSize2;
export const textLabelLargeFontSize = font.fontSize5;
export const textLabelLetterSpacing = 0;
export const textLabelFontWeight = font.fontWeight5;
export const textLabelLineHeight: TextStyle["lineHeight"] = font.fontSize2;
export const textLabelLargeLineHeight = font.fontSize5;
export const textLabelColor = color.carbonGray900;

// Table
// running our tests flagged the following `textTableCellColor` as an invalid color
// I (Garrett) changed it from "//3A3D43" to "#3A3D43"
export const textTableCellColor = "#3A3D43";
export const textTableCellDateTimeColor = color.carbonGray900;

// Helper Text
export const textHelperTextFontFamily = font.fontFamilySansSerifBookPostscript;
export const textHelperTextFontFamilyAndroid =
  font.fontFamilySansSerifBookFilename;
export const textHelperTextFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textHelperTextFontSize = font.fontSize3;
export const textHelperTextFontWeight = font.fontWeight3;
export const textHelperTextLineHeight = font.fontSize5;
export const textHelperTextColor = color.carbonGray700;

// Sub Heading
export const textSubHeadingFontFamily = font.fontFamilySansSerifBookPostscript;
export const textSubHeadingFontFamilyAndroid =
  font.fontFamilySansSerifBookFilename;
export const textSubHeadingFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textSubHeadingFontSize = font.fontSize5;
export const textSubHeadingFontWeight = font.fontWeight3;
export const textSubHeadingColor = color.carbonGray800;

// Success text color:
export const textSuccessColor = color.clorineGreen500;

// Error text color
export const textErrorColor = color.ironRed500;

// Link text
export const textLinkColor = color.oxygenBlue700;
export const textLinkHoverColor = color.oxygenBlue500;

// Community text
export const textCommunityColorSecondary = color.oxygenBlue700;
export const textCommunityColorPrimary = color.carbonGray800;
export const textCommunityColorPrimaryMuted = color.carbonGray600;
export const textCommunityThinFontWeight = font.fontWeight4;

// Body Spaced Text
export const textBodySpacedColor = color.carbonGray900;
export const textBodySpacedLightColor = color.carbonGray500;
export const textBodySpacedFontFamily = font.fontFamilySansSerifBookPostscript;
export const textBodySpacedFontFamilyAndroid =
  font.fontFamilySansSerifBookFilename;
export const textBodySpacedFontFamilyWeb =
  font.fontFamilySansSerifABHeleveticaArialLucidaFullname;
export const textBodySpacedFontSize = font.fontSize4;
export const textBodySpacedSmallFontSize = font.fontSize3;
export const textBodySpacedLargeFontSize = font.fontSize6;
export const textBodySpacedFontWeight = font.fontWeight4;
export const textBodySpacedLineHeight = font.fontSize7;
export const textBodySpacedLetterSpacing = 0;

export const textItalicFontWeight = font.fontWeight1;
export const textItalicFontFamilyAndroid =
  font.fontFamilySansSerifBookItalFilename;

// Generic
export const textColorDisabled = color.carbonGray400;
export const textColorSubtitle = color.carbonGray800;
