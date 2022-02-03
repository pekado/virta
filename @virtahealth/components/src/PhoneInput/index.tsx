import * as React from "react";
import { useField } from "formik";

import { Input, InputProps } from "../Input";

export type PhoneInputProps = InputProps & {
  /**
   * An event handler for when the input is 'submitted' (i.e. the user presses
   * 'return', or (on mobile) taps the submit button in their device's soft
   * keyboard)
   */
  onSubmitText?: (val?: string) => void;
};

export interface PhoneInputFieldProps
  extends Omit<
    PhoneInputProps,
    "onChange" | "onChangeText" | "onBlur" | "value"
  > {
  /**
   * The name of the field
   */
  name: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  onChangeText,
  onSubmitText,
  value,
  ...textInputProps
}) => {
  const handleSubmitText = onSubmitText && (() => onSubmitText(value));

  return (
    <Input
      mask="999-999-9999"
      isMaskedMobile={true}
      onChangeText={onChangeText}
      onSubmitEditing={handleSubmitText}
      value={value}
      keyboardType="numeric"
      {...textInputProps}
    />
  );
};

export const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  name,
  style,
  ...inputProps
}) => {
  const [field, meta] = useField(name);
  return (
    <PhoneInput
      errorText={meta.touched && meta.error ? meta.error : undefined}
      value={field.value}
      onChangeText={field.onChange(name)}
      onBlur={field.onBlur(name)}
      style={style}
      {...inputProps}
    />
  );
};
