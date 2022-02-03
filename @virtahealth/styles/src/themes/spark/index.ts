import { base, BaseTheme } from "../base";
import * as button from "./button";
import * as filePicker from "./file-picker";
import * as input from "./input";
import * as navbar from "./navbar";
import * as radioInput from "./radio-input";
import * as table from "./table";
import * as text from "./text";

/**
 * spark theme
 * @module spark
 */

export type SparkTheme = BaseTheme;

export const spark: SparkTheme = {
  ...base,
  ...button,
  ...filePicker,
  ...input,
  ...navbar,
  ...radioInput,
  ...table,
  ...text,
};
