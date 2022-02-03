import { base, BaseTheme } from "../base";
import * as button from "./button";
import * as text from "./text";

/**
 * base compact theme
 * @module compact
 */

export type CompactTheme = BaseTheme;

export const compact: CompactTheme = {
  ...base,
  ...button,
  ...text,
};
