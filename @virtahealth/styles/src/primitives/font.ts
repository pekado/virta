import { TextStyle } from "react-native";

/**
 * font values
 * @module font
 */

export const fontWeight1: TextStyle["fontWeight"] = "100";
export const fontWeight2: TextStyle["fontWeight"] = "200";
export const fontWeight3: TextStyle["fontWeight"] = "300";
export const fontWeight4: TextStyle["fontWeight"] = "400";
export const fontWeight5: TextStyle["fontWeight"] = "500";
// all bold font (normally 600 weight) needs to be at least 700 weight to render properly on Android
export const fontWeight6: TextStyle["fontWeight"] = "700";
export const fontWeight7: TextStyle["fontWeight"] = "700";
export const fontWeight8: TextStyle["fontWeight"] = "800";
export const fontWeight9: TextStyle["fontWeight"] = "900";

// Disable this because if we don't specify number then down the line we end up getting
// TS angry because we have types that are specific numbers that don't mix well
/* eslint-disable @typescript-eslint/no-inferrable-types */
export const fontSizeBASE: number = 16;
export const fontSize1: number = 10;
export const fontSize2: number = 12;
export const fontSize2_5: number = 13;
export const fontSize3: number = 14;
export const fontSize4: number = 16;
export const fontSize5: number = 18;
export const fontSize6: number = 20;
export const fontSize6_5: number = 22;
export const fontSize7: number = 24;
export const fontSize8: number = 28;
export const fontSize9: number = 32;
export const fontSize10: number = 44;
export const fontSize11: number = 48;
export const fontSize12: number = 60;
export const fontSize13: number = 72;
export const fontSize14: number = 90;

// CSS font-family stack
export const fontFontFamilySansSerifStackWeb: string =
  "Whitney, Arial, sans-serif";
export const fontFontFamilyMonospaceStackWeb: string =
  "Monaco, Menlo, monospace";
export const fontFontFamilyNumericStackWeb: string =
  "Whitney, Arial, sans-serif";
export const fontFontFamilySmallcapsStackWeb: string =
  "Whitney, Arial, sans-serif";

// Content Font family
export const fontFamilyContentChronicleWhitneyArial: string =
  "Chronicle Display A, Chronicle Display B, Whitney, Arial";

export const fontFamilyContentChronicleFilename: string =
  "ChronicleDisplay-Semi";
export const fontFamilyContentChroniclePostscript: string =
  "ChronicleDisplay-Semi";

// Font full name & PostScript name
export const fontFamilySansSerifLightFullname: string = "Whitney Light";
export const fontFamilySansSerifLightPostscript: string = "Whitney-Light";
export const fontFamilySansSerifLightItalFullname: string =
  "Whitney Light Italic";
export const fontFamilySansSerifLightItalPostscript: string =
  "Whitney-LightItal";

export const fontFamilySansSerifBookFullname: string = "Whitney Book";
export const fontFamilySansSerifBookPostscript: string = "Whitney-Book";
export const fontFamilySansSerifBookFilename: string = "Whitney-Book";
export const fontFamilySansSerifBookItalFullname: string =
  "Whitney Book Italic";
export const fontFamilySansSerifBookItalPostscript: string =
  "Whitney-BookItalic";
export const fontFamilySansSerifBookItalFilename: string = "Whitney-BookItalic";

export const fontFamilySansSerifMediumFullname: string = "Whitney Medium";
export const fontFamilySansSerifMediumPostscript: string = "Whitney-Medium";
export const fontFamilySansSerifMediumFilename: string = "Whitney-Medium";
export const fontFamilySansSerifMediumItalFullname: string =
  "Whitney Medium Italic";
export const fontFamilySansSerifMediumItalPostscript: string =
  "Whitney-MediumItalic";

export const fontFamilySansSerifSemiboldFullname: string = "Whitney Semibold";
export const fontFamilySansSerifSemiboldPostscript: string = "Whitney-Semibold";
export const fontFamilySansSerifSemiboldFilename: string = "Whitney-Semibold";
export const fontFamilySansSerifSemiboldItalFullname: string =
  "Whitney Semibold Italic";
export const fontFamilySansSerifSemiboldItalPostscript: string =
  "Whitney-SemiboldItalic";

export const fontFamilySansSerifBoldFullname: string = "Whitney Bold";
export const fontFamilySansSerifBoldPostscript: string = "Whitney-Bold";
export const fontFamilySansSerifBoldItalFullname: string =
  "Whitney Bold Italic";
export const fontFamilySansSerifBoldItalPostscript: string = "Whitney-BoldItal";

export const fontFamilySansSerifBlackFullname: string = "Whitney Black";
export const fontFamilySansSerifBlackPostscript: string = "Whitney-Black";
export const fontFamilySansSerifBlackItalFullname: string =
  "Whitney Black Italic";
export const fontFamilySansSerifBlackItalPostscript: string =
  "Whitney-BlackItal";

export const fontFamilySansSerifABAvenirLucidaArialVerdanaFullname: string =
  "Whitney A, Whitney B, Avenir Next, Lucida Grande, Arial, Verdana, sans-serif";
export const fontFamilySansSerifABHeleveticaArialLucidaFullname: string =
  "Whitney A, Whitney B, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif";
/* eslint-enable @typescript-eslint/no-inferrable-types */
