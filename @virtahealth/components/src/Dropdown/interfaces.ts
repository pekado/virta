import { ViewStyle } from "react-native";
import { VirtaIntlMessage } from "@virtahealth/utils";

import { VirtaInputProps } from "../properties";

export interface StyledOptionProps {
  pressable?: boolean;
  isPressed?: boolean;
}

export interface DropdownOptionProps<T> {
  label: VirtaIntlMessage;
  value: T;
}

export interface DropdownSpecialOptionProps<T> {
  appearance: React.FC<StyledOptionProps>;
  value: T;
  label: VirtaIntlMessage;
  shouldDisplay: () => boolean;
}

export interface DropdownProps<T> extends VirtaInputProps {
  options: Array<DropdownOptionProps<T>>;
  onSelectOption?: (option: T) => void;
  errorMessage?: VirtaIntlMessage;
  initialValue?: T;
  onInputChange?: (value: string) => void;
  filterFunction?: (
    filterQuery: DropdownOptionProps<T>,
    value: unknown | null
  ) => boolean;
  optionPressable?: boolean;
  specialOptions?: Array<DropdownSpecialOptionProps<T>>;
  specialOptionCreators?: Array<
    (inputValue: string) => DropdownSpecialOptionProps<T>
  >;
  /*
       Overlap property allows dropdown content to overlay content below it on web.
       This is ignored on mobile.
    */
  overlap?: boolean;
  allowCustomValues: boolean;
  title?: VirtaIntlMessage;
  style?: ViewStyle;
}

export interface LabeledDropdownProps<T> extends DropdownProps<T> {
  labelMessage: VirtaIntlMessage;
  isLarge?: boolean;
}
