import * as React from "react";
import { IntlShape, useIntl } from "react-intl";
import { Platform, ViewStyle } from "react-native";
import { useField } from "formik";
import {
  VirtaIntlMessage,
  formatVirtaMessageOrString,
  messageTree,
} from "@virtahealth/utils";
import { BaseTheme } from "@virtahealth/styles";

import styled, { ThemeContext } from "../styled-components";
import { InputFieldProps } from "../Input";
import { PlusIconSmall } from "../Icons";
import { LabeledFormElement } from "../LabeledFormElement";
import { Body } from "../SubstrateText";
import { Spacer } from "../Spacer";
import { BasicDropdown } from "./Dropdown";
import {
  DropdownOptionProps,
  LabeledDropdownProps,
  StyledOptionProps,
} from "./interfaces";
import { searchFilter } from "./utils";

const isWeb = Platform.OS === "web";

const AddableOptionText = styled.Text<StyledOptionProps>`
  color: ${({ theme, isPressed }) =>
    isPressed
      ? theme.dropdownCreatableSelectedColor
      : theme.dropdownCreatableColor};
  font-weight: ${({ theme }) => theme.semiboldFontWeight};
`;

const StyledError = styled(Body)`
  margin-top: ${({ theme }) => theme.errorTextTopMargin}px;
`;

const ErrorWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${isWeb ? "z-index: auto;" : ""}
`;

const StyledAddableOption = styled.View<StyledOptionProps>`
  display: flex;
  padding: ${({ theme }) => theme.dropdownOptionPadding}px;
  ${({ pressable }) =>
    isWeb ? `user-select: ${pressable ? "none" : "initial"}` : ""};
  ${({ pressable }) =>
    isWeb ? `cursor: ${pressable ? "pointer" : "unset"}` : ""};
  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.buttonSecondaryBackgroundColor : "transparent"};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.dropdownCreatableDividerColor};
`;

const creatableOption =
  (
    theme: BaseTheme,
    options: DropdownFieldProps<string>["options"],
    intl: IntlShape
  ) =>
  (inputValue: string) => {
    const formatMessage = formatVirtaMessageOrString(intl);
    return {
      appearance: (props: StyledOptionProps) => (
        <StyledAddableOption {...props}>
          <AddableOptionText isPressed={props.isPressed}>
            <PlusIconSmall
              color={
                props.isPressed
                  ? theme.dropdownCreatableSelectedColor
                  : theme.dropdownCreatableColor
              }
            />
            <Spacer width={8} />
            {formatMessage({
              message: messageTree.common.forms.addX,
              values: { x: inputValue },
            })}
          </AddableOptionText>
        </StyledAddableOption>
      ),
      value: inputValue,
      shouldDisplay: () =>
        !!inputValue &&
        inputValue.trim() !== "" &&
        !options.some(
          (option) =>
            inputValue.trim().toLowerCase() ===
            (formatMessage(option.label) as string).toLowerCase()
        ),
      label: {
        message: messageTree.common.primitives.x,
        values: { x: inputValue },
      },
    };
  };

export { BasicDropdown } from "./Dropdown";
export {
  DropdownOptionProps,
  DropdownSpecialOptionProps,
  DropdownProps,
  LabeledDropdownProps,
} from "./interfaces";

// Dropdown component labeled like a form element. On mobile, consider using ComboBox instead
export function LabeledBasicDropdown<T>(props: LabeledDropdownProps<T>) {
  const {
    style,
    labelMessage,
    helperText,
    spacerSize,
    errorMessage,
    errorText,
    isLarge,
    ...rest
  } = props;
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  return (
    <LabeledFormElement
      style={style}
      labelMessage={labelMessage}
      helperText={helperText}
      spacerSize={spacerSize}
      isLarge={isLarge}
    >
      <ErrorWrapper>
        <BasicDropdown title={labelMessage} {...rest} />
        {(!!errorMessage || !!errorText) && (
          <StyledError color="Danger" size="xsmall" weight="light">
            {formatMessage(errorMessage || errorText)}
          </StyledError>
        )}
      </ErrorWrapper>
    </LabeledFormElement>
  );
}

export interface DropdownFieldProps<T> extends InputFieldProps {
  fieldName: string;
  options: Array<DropdownOptionProps<T>>;
  filterFunction?: (
    filterQuery: DropdownOptionProps<T>,
    value: unknown
  ) => boolean;
  overlap?: boolean;
  searchable?: boolean;
  style?: ViewStyle;
}

export interface LabeledDropdownFieldProps<T> extends DropdownFieldProps<T> {
  labelMessage: VirtaIntlMessage;
  isLarge?: boolean;
}

// Component for a dropdown field. On mobile, consider using ComboBox instead
export function BasicDropdownField<T>({
  fieldName,
  options,
  filterFunction,
  placeholderMessage,
  overlap,
  searchable,
  style,
  testID,
}: DropdownFieldProps<T>) {
  const [field, meta] = useField(fieldName);
  const intl = useIntl();

  const formatMessage = formatVirtaMessageOrString(intl);
  const errorText = meta.touched && meta.error ? meta.error : undefined;

  const searchableFilterFunction = React.useCallback(
    (item: DropdownOptionProps<T>, inputValue: unknown) => {
      return searchFilter(item, intl, inputValue, searchable, filterFunction);
    },
    [filterFunction, searchable, field.value]
  );

  return (
    <ErrorWrapper style={style}>
      <BasicDropdown
        onSelectOption={field.onChange(fieldName)}
        initialValue={field.value}
        // @ts-ignore - for some reason, TS thinks the type may include a "ChangeEvent"
        options={options}
        // @ts-ignore - for some reason, TS thinks the type here may allow a "ChangeEvent" to be passed as a param
        filterFunction={searchableFilterFunction}
        onInputChange={field.onChange(fieldName)}
        placeholderMessage={placeholderMessage}
        overlap={overlap}
        allowCustomValues={false}
        testID={testID}
      />
      {!!errorText && (
        <StyledError color="Danger" size="xsmall" weight="light">
          {formatMessage(errorText)}
        </StyledError>
      )}
    </ErrorWrapper>
  );
}

// Component for a dropdown field where custom options can be added. On mobile, consider using ComboBox instead
export function CreatableDropdownField({
  fieldName,
  options,
  filterFunction,
  placeholderMessage,
  overlap,
  searchable,
  style,
}: DropdownFieldProps<string>) {
  const [field, meta] = useField(fieldName);
  const theme = React.useContext(ThemeContext);
  const intl = useIntl();

  const searchableFilterFunction = React.useCallback(
    (item: DropdownOptionProps<string>, inputValue: unknown) => {
      return searchFilter(item, intl, inputValue, searchable, filterFunction);
    },
    [filterFunction, searchable, field.value]
  );

  return (
    <BasicDropdown
      errorText={meta.touched && meta.error ? meta.error : undefined}
      onSelectOption={field.onChange(fieldName)}
      initialValue={field.value}
      options={options}
      filterFunction={searchableFilterFunction}
      onInputChange={field.onChange(fieldName)}
      placeholderMessage={placeholderMessage}
      specialOptionCreators={[creatableOption(theme, options, intl)]}
      overlap={overlap}
      allowCustomValues={true}
      style={style}
    />
  );
}

// Component for a dropdown field with a label where custom options can be added. On mobile, consider using ComboBox instead
export function LabeledCreatableDropdownField({
  fieldName,
  options,
  filterFunction,
  placeholderMessage,
  labelMessage,
  overlap,
  isLarge,
  searchable,
  style,
  testID,
}: LabeledDropdownFieldProps<string>) {
  const [field, meta] = useField(fieldName);
  const theme = React.useContext(ThemeContext);
  const intl = useIntl();

  const searchableFilterFunction = React.useCallback(
    (item: DropdownOptionProps<string>, inputValue: unknown) => {
      return searchFilter(item, intl, inputValue, searchable, filterFunction);
    },
    [filterFunction, searchable, field.value]
  );

  return (
    <LabeledBasicDropdown
      labelMessage={labelMessage}
      errorText={meta.touched && meta.error ? meta.error : undefined}
      onSelectOption={field.onChange(fieldName)}
      initialValue={field.value}
      options={options}
      filterFunction={searchableFilterFunction}
      onInputChange={field.onChange(fieldName)}
      placeholderMessage={placeholderMessage}
      specialOptionCreators={[creatableOption(theme, options, intl)]}
      overlap={overlap}
      allowCustomValues={true}
      isLarge={isLarge}
      style={style}
      testID={testID}
    />
  );
}

// Component for a dropdown field with a label. On mobile, consider using ComboBox instead
export function LabeledBasicDropdownField<T>({
  fieldName,
  options,
  filterFunction,
  placeholderMessage,
  labelMessage,
  overlap,
  isLarge,
  searchable,
  style,
  testID,
}: LabeledDropdownFieldProps<T>) {
  const [field, meta] = useField(fieldName);
  const intl = useIntl();

  const searchableFilterFunction = React.useCallback(
    (item: DropdownOptionProps<T>, inputValue: unknown) => {
      return searchFilter(item, intl, inputValue, searchable, filterFunction);
    },
    [filterFunction, searchable, field.value]
  );

  return (
    <LabeledBasicDropdown
      labelMessage={labelMessage}
      errorText={meta.touched && meta.error ? meta.error : undefined}
      onSelectOption={field.onChange(fieldName)}
      initialValue={field.value}
      // @ts-ignore - for some reason, TS thinks the type may include a "ChangeEvent"
      options={options}
      // @ts-ignore - for some reason, TS thinks the type here may allow a "ChangeEvent" to be passed as a param
      filterFunction={searchableFilterFunction}
      onInputChange={field.onChange(fieldName)}
      placeholderMessage={placeholderMessage}
      overlap={overlap}
      allowCustomValues={false}
      isLarge={isLarge}
      style={style}
      testID={testID}
    />
  );
}
