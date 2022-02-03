import * as React from "react";
import { useField } from "formik";
import {
  convertDate,
  formatDate,
  parseDate,
  startOfDay,
} from "@virtahealth/utils";

import { Input, InputProps } from "../Input";

const DATE_FORMAT = "MM/dd/yyyy";

export type DateInputProps = InputProps & {
  /**
   * An event handler for when the input is 'submitted' (i.e. the user presses
   * 'return', or (on mobile) taps the submit button in their device's soft
   * keyboard)
   */
  onSubmitText?: (val?: string) => void;
};

export interface DateInputFieldProps
  extends Omit<
    DateInputProps,
    "onChange" | "onChangeText" | "onBlur" | "value"
  > {
  /**
   * A string representing the desired output format when a complete date
   * is entered. Should be of form https://date-fns.org/v2.14.0/docs/format.
   * If provided, passed value is expected to be in this format for parsing.
   */
  customValueFormat?: string;
  /**
   * The name of the field
   */
  name: string;
}

const format = (date: Date) => formatDate(date, DATE_FORMAT);
const parse = (dateStr: string) =>
  parseDate(dateStr, DATE_FORMAT, startOfDay(new Date()));

export const DateInput: React.FC<DateInputProps> = ({
  value,
  onChangeText,
  onSubmitText,
  ...textInputProps
}) => {
  const handleSubmitText = onSubmitText && (() => onSubmitText(value));

  return (
    <Input
      format={format}
      isMasked={true}
      mask={Date}
      parse={parse}
      pattern="m/`d/`Y"
      onAccept={onChangeText}
      onSubmitEditing={handleSubmitText}
      value={value}
      keyboardType="numeric"
      {...textInputProps}
    />
  );
};

export const DateInputField: React.FC<DateInputFieldProps> = ({
  customValueFormat,
  name,
  style,
  ...inputProps
}) => {
  const [field, { error, touched }, { setValue }] = useField(name);
  const parsedValue =
    field.value && field.value.length === 10 && customValueFormat
      ? convertDate(customValueFormat, DATE_FORMAT, field.value)
      : field.value;

  /**
   * Some date inputs' display format is different from the format used by the consumer.
   * As a convenience to consumers, the conversion can be handled in this component,
   * once the entire date has been entered (i.e. reached length 10).
   * @param d
   */
  const dateChangeHandler = (d: string): void => {
    if (d.length === 10 && customValueFormat) {
      setValue(convertDate(DATE_FORMAT, customValueFormat, d));
    } else {
      setValue(d);
    }
  };

  return (
    <DateInput
      errorText={touched && error ? error : undefined}
      onBlur={field.onBlur(name)}
      onChangeText={dateChangeHandler}
      style={style}
      value={parsedValue}
      {...inputProps}
    />
  );
};
