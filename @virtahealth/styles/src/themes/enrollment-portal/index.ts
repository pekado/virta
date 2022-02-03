import { base, BaseTheme } from "../base";
import * as buttonRadioInput from "./button-radio-input";
import * as button from "./button";
import * as formElement from "./form-element";
import * as input from "./input";
import * as radioChooser from "./radio-chooser";
import * as radioInput from "./radio-input";
import * as text from "./text";

/**
 * enrollment portal theme
 * @module enrollmentPortal
 */

export type EnrollmentPortalTheme = BaseTheme;

export const enrollmentPortal: EnrollmentPortalTheme = {
  ...base,
  ...buttonRadioInput,
  ...button,
  ...formElement,
  ...input,
  ...radioChooser,
  ...radioInput,
  ...text,
};
