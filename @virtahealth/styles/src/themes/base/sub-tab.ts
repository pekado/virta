import { ViewStyle } from "react-native";
import * as border from "../../primitives/border";
import * as color from "../../primitives/color";
import * as font from "../../primitives/font";

/**
 * subTab styles
 * @module subTab
 */

export const subTabItemTextFontWeight = font.fontWeight6;
//  Unselected text color
export const subTabItemTextUnselectedColor = color.carbonGray400;
//  Selected text color
export const subTabItemTextSelectedColor = color.oxygenBlue700;

export const subTabItemBorderStyle: ViewStyle["borderStyle"] = "solid";
export const subTabItemBorderBottomWidth = border.borderWidth2;
//  Unselected border color
export const subTabItemBorderBottomUnselectedColor = color.carbonGray400;
//  Selected border color
export const subTabItemBorderBottomSelectedColor = color.oxygenBlue700;

export const subTabItemTextPaddingBottom = 10;
