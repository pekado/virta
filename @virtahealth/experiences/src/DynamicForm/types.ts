import { CalloutProps } from "@virtahealth/components";
import { Color, Size, Weight } from "@virtahealth/components/src/SubstrateText";
import * as icons from "@virtahealth/components/src/Icons";
import { messages } from "@virtahealth/utils";

type QuestionType =
  | "hidden"
  | "text"
  | "textArea"
  | "date"
  | "number"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "checklist"
  | "callout"
  | "objectList"
  | "addressValidation"
  | "insuranceValidation"
  | "pcpSearch"
  | "eligibilityCheck"
  | "fileUpload";

export type MessageKey = keyof typeof messages;

export interface QuestionOption {
  value: string | number;
  label: MessageKey;
  description?: MessageKey;
}

interface ValidationBase {
  type: "required" | "oneOf";
  label: MessageKey;
  value?: number | string | RegExp;
}
interface ValidationNumberValue extends Omit<ValidationBase, "value" | "type"> {
  type: "min" | "max" | "length";
  value: number;
}
interface ValidationRegexType extends Omit<ValidationBase, "value" | "type"> {
  type: "regex";
  value: RegExp;
}

export type Validation =
  | ValidationNumberValue
  | ValidationRegexType
  | ValidationBase;

export interface StyleInterpolation {
  color?: Color;
  weight?: Weight;
  size?: Size;
  lineHeight?: number | string;
}
export interface Interpolation {
  [key: string]: string | StyleInterpolation;
}

export interface ShowWhen {
  key: string;
  value: (string | number)[];
}
interface QuestionBaseProps {
  id: string;
  key: string;
  label: MessageKey;
  type: QuestionType;

  placeholder?: MessageKey;
  description?: MessageKey;
  interpolation?: Interpolation;
  validation?: Validation[];
  showWhen?: ShowWhen[];
  defaultValue?: string;

  options?: QuestionOption[];
  skipOptionTranslation?: boolean;
  exclusiveWith?: string;
  intent?: Pick<CalloutProps, "intent">;
  optionsSchema?: QuestionProps[];
  addLabel?: MessageKey;
  isCreatable?: boolean;
}

interface QuestionDropdownProps extends QuestionBaseProps {
  type: "dropdown";
  isCreatable?: boolean;
}

interface QuestionOptionsProps extends QuestionBaseProps {
  type: "radio" | "dropdown" | "checklist";
  options: QuestionOption[];
  skipOptionTranslation?: boolean;
}

interface QuestionCheckListProps extends QuestionOptionsProps {
  type: "checklist";
  exclusiveWith?: string;
}

interface QuestionCalloutProps extends Omit<QuestionBaseProps, "intent"> {
  type: "callout";
  description: MessageKey;
  intent: Pick<CalloutProps, "intent">;
}

export interface QuestionObjectListProps
  extends Omit<QuestionBaseProps, "optionsSchema" | "addLabel"> {
  type: "objectList";
  optionsSchema: QuestionProps[];
  addLabel: MessageKey;
}

export interface QuestionAddressValidationProps
  extends Omit<QuestionBaseProps, "label" | "description"> {
  type: "addressValidation";
}

export interface QuestionPhysicianProps
  extends Omit<QuestionBaseProps, "description"> {
  type: "pcpSearch";
}

export type QuestionProps =
  | QuestionBaseProps
  | QuestionDropdownProps
  | QuestionOptionsProps
  | QuestionCheckListProps
  | QuestionCalloutProps
  | QuestionObjectListProps;

export interface Section {
  heading: MessageKey;
  description?: MessageKey[];
  interpolation?: Interpolation;
  questions: QuestionProps[];
  icon?: keyof typeof icons;
  showWhen?: ShowWhen[];
}

export interface Page {
  heading: MessageKey;
  description?: MessageKey[];
  interpolation?: Interpolation;
  sections: Section[];
  showWhen?: ShowWhen[];
  hideActionButtons?: boolean;
  hideBackButton?: boolean;
  reverseControls?: boolean;
  backButtonLabel?: MessageKey | string;
  nextButtonLabel?: MessageKey | string;
}

export interface DynamicFormSchema {
  heading: MessageKey;
  pages: Page[];
}
