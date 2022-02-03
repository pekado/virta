import { base, BaseTheme } from "../base";
import * as button from "./button";
import * as text from "./text";

/**
 * base high contrast theme
 * @module highContrast
 */

export type HighContrastTheme = BaseTheme;

export const highContrast: HighContrastTheme = {
  ...base,
  ...button,
  ...text,
};
