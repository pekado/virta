import { TextInputProps } from "react-native";
import { VirtaIntlMessageOrString, VirtaIntlMessage } from "@virtahealth/utils";

export interface VirtaInputProps
  extends Pick<
    TextInputProps,
    | "editable"
    | "style"
    | "onChange"
    | "onChangeText"
    | "onKeyPress"
    | "onFocus"
    | "onBlur"
    | "value"
    | "testID"
  > {
  /*
    Sets the input to have a thicker border, larger text,
    and multiline inputs have more line space
  */
  isThick?: boolean;

  /*
    Boolean determining if this input should show error state (red outline)
  */
  hasError?: boolean;
  /**
   * DEPRECATED: use LabeledFormElement instead.
   * A react-intl message for the label of the input
   */
  labelMessage?: VirtaIntlMessage;
  /**
   * DEPRECATED: use LabeledFormElement instead.
   * Size of spacer between Label text and Helper text
   */
  spacerSize?: number;
  /**
   * DEPRECATED: use LabeledFormElement instead.
   * A react-intl message for the helper text in the label of the input
   */
  helperText?: VirtaIntlMessageOrString;
  /**
   * A react-intl message for the placeholder of the input
   */
  placeholderMessage?: VirtaIntlMessage;
  /**
   * A react-intl message for the placeholder of the input
   */
  errorMessage?: VirtaIntlMessage;
  /**
   * Error text that is already formatted by react-intl. Needed
   * because Formik errors must be strings. Ignored if `errorMessage`
   * is supplied.
   */
  errorText?: string;
}

export interface IMaskInputProps {
  mask?: string | DateConstructor;
  onAccept?: (text: string) => void;
}

export interface TextInputMaskProps {
  mask?: string;
}

export interface IMaskDateInputProps extends IMaskInputProps {
  format: (date: Date) => string;
  parse: (dateStr: string) => Date;
  pattern: string;
}
