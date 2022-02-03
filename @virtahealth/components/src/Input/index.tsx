/* eslint-disable max-lines */
import * as React from "react";
import { MessageDescriptor, useIntl } from "react-intl";
import {
  TextInputProps,
  Platform,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  StyleProp,
} from "react-native";
import { IMaskTextInput } from "react-native-imask";
import { useField } from "formik";
import {
  formatVirtaMessageOrString,
  getPlatformFontFamilySuffix,
  isVirtaIntlMessage,
} from "@virtahealth/utils";

import { TextInputMask } from "react-native-masked-text";
import { BaseTheme } from "@virtahealth/styles";
import { LabeledFormElement } from "../LabeledFormElement";
import {
  VirtaInputProps,
  IMaskInputProps,
  IMaskDateInputProps,
  TextInputMaskProps,
} from "../properties";
import { Row } from "../Row";
import styled, { css, ThemeInterface } from "../styled-components";
import { Base } from "../Text";
import { Body } from "../SubstrateText";

export type InputProps = VirtaInputProps &
  Pick<
    TextInputProps,
    | "multiline"
    | "numberOfLines"
    | "onSubmitEditing"
    | "returnKeyType"
    | "secureTextEntry"
    | "textContentType"
    | "autoCapitalize"
    | "autoComplete"
    | "autoCorrect"
    | "accessibilityLabel"
    | "keyboardType"
  > &
  (IMaskInputProps | IMaskDateInputProps | TextInputMaskProps) & {
    /**
     * A child element for an inline description of the input
     */
    inlineDescription?: React.ReactNode;
    /**
     * A react-intl message for an inset label in the input
     */
    insetText?: MessageDescriptor | string;
    /**
     * Whether there is a mask applied and an IMaskTextInput should
     * be used. If true, IMaskTextInputProps expected.
     * @deprecated Use isMaskedMobile when possible
     */
    isMasked?: boolean;
    /**
     * Whether there is a mask applied and a TextInputMask should
     * be used. If true, TextInputMaskProps expected.
     * This is a more mobile-friendly masking method
     */
    isMaskedMobile?: boolean;

    /**
     * A component to render inside the input box to the left of the actual input area
     */
    leftComponent?: React.ReactNode;
    /**
     * A component to render inside the input box to the right of the actual input area
     */
    rightComponent?: React.ReactNode;
    /**
     * A ref to the inner text input component
     * Typed as `any` because the mobile masked input ref type is not compatible with TextInput
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputRef?: React.RefObject<any>;

    /**
     * Whether to use the large label
     */
    isLarge?: boolean;
    wrapperStyle?: StyleProp<ViewStyle>;
  };

export interface InputFieldProps
  extends Omit<InputProps, "onChange" | "onChangeText" | "onBlur" | "value"> {
  /**
   * The name of the field
   */
  name: string;
}

interface StyledInputProps {
  isFocused: boolean;
}

const InputWrapper = styled(Row)<VirtaInputProps & StyledInputProps>`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  border-width: ${({ theme, isThick }) =>
    isThick ? theme.inputThickBorderWidth : theme.inputBorderWidth}px;
  border-style: solid;
  border-color: ${({ theme, editable, hasError }) =>
    hasError
      ? theme.inputErrorBorderColor
      : editable
      ? theme.inputBorderColor
      : theme.inputDisabledBorderColor};
  border-radius: ${({ theme, isThick }) =>
    isThick ? theme.inputThickBorderRadius : theme.inputBorderRadius}px;
  background-color: ${({ theme, editable }) =>
    editable ? theme.inputBackgroundColor : theme.inputDisabledBackgroundColor};
  ${({ theme, editable, isFocused }) =>
    editable ? getOutlineStyle(theme, isFocused) : ""}
`;

const getOutlineStyle = (theme: BaseTheme, isFocused?: boolean) => {
  if (isFocused === undefined) {
    return;
  }

  if (!isFocused) {
    return;
  }

  return Platform.select({
    web: css`
      border-color: ${theme.inputFocusColor};
    `,
  });
};

interface GetBaseInputStyleProp extends VirtaInputProps {
  theme: ThemeInterface;
  numberOfLines?: TextInputProps["numberOfLines"];
}
const getBaseInputStyle = ({
  theme,
  isThick,
  numberOfLines,
}: GetBaseInputStyleProp) => css`
  font-family: "${({ theme }) =>
    theme[
      `inputFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${theme.inputFontSize}px;
  background-color: transparent;
  color: ${theme.inputColor};
  flex: 1;
  min-height: 40px;
  padding: 8px 12px;
  ${isThick
    ? `font-size: ${theme.inputThickFontSize}px;
    line-height: ${theme.inputThickLineHeight}px;
    ${
      numberOfLines
        ? `max-height: ${theme.inputThickLineHeight * numberOfLines + 15}px;`
        : ""
    }`
    : ""}
`;

const getFocusInputStyle = (isFocused: boolean) => {
  if (!isFocused) {
    return;
  }

  return Platform.select({
    web: css`
      outline-width: 0px;
    `,
  });
};

const StyledInput = styled.TextInput<StyledInputProps>`
  ${(props) => getBaseInputStyle(props)}
  ${(props) =>
    props.isFocused !== undefined ? getFocusInputStyle(props.isFocused) : ""}
`;

interface StyledMaskedInputProps {
  isFocused: boolean;
}

const StyledMobileMaskInput = styled(TextInputMask)<StyledMaskedInputProps>`
  ${(props) => getBaseInputStyle(props)}
  ${(props) => getFocusInputStyle(props.isFocused)}
`;

const StyledMaskInput = styled(IMaskTextInput)`
  ${(props) => getBaseInputStyle(props)}
  ${(props) => getFocusInputStyle(props.isFocused)}
`;

const InsetText = styled(Base)`
  font-family: "${({ theme }) => theme.inputInsetTextFontFamily}";
  font-size: ${({ theme }) => theme.inputInsetTextFontSize}px;
  font-weight: ${({ theme }) => theme.inputInsetTextFontWeight};
  letter-spacing: ${({ theme }) => theme.textLabelLetterSpacing};
  line-height: ${({ theme }) => theme.inputInsetTextLineHeight}px;
  color: ${({ theme }) => theme.inputInsetTextColor};
  flex-basis: auto;
  min-height: 40px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
`;

export const InlineDescription = styled(Base)`
  font-family: "${({ theme }) => theme.inputInlineDescriptionFontFamily}";
  font-size: ${({ theme }) => theme.inputInlineDescriptionFontSize}px;
  font-weight: ${({ theme }) => theme.inputInlineDescriptionFontWeight};
  letter-spacing: ${({ theme }) => theme.textLabelLetterSpacing};
  line-height: ${({ theme }) => theme.inputInlineDescriptionLineHeight}px;
  color: ${({ theme }) => theme.inputInlineDescriptionColor};
  margin-left: 10px;
`;

const StyledError = styled(Body)`
  margin-top: ${({ theme }) => theme.errorTextTopMargin}px;
`;

const StyledRow = styled(Row)`
  display: flex;
`;

const ErrorWrapper = styled.View`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

const UnlabeledInput: React.FC<InputProps> = ({
  editable = true,
  insetText,
  isMasked,
  isMaskedMobile,
  placeholderMessage,
  style,
  isThick,
  hasError,
  mask,
  leftComponent,
  rightComponent,
  inputRef,
  ...textInputProps
}) => {
  let placeholderText: string | undefined;
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  if (placeholderMessage) {
    placeholderText = formatMessage(placeholderMessage) as string;
  }
  const [isFocused, setIsFocused] = React.useState(false);

  const restProps = {
    ...textInputProps,
    isThick,
    hasError,
    isFocused,
    ref: inputRef,
    // TM-3109 onBlur does not trigger properly for mobile
    // A potential workaround is to pass inputRef and manually call inputRef.current.blur()
    onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      // Since onBlur is a prop that a user can define,
      // call it here if it gets passed in
      if (textInputProps.onBlur) {
        textInputProps.onBlur(e);
      }
    },
    onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      // Since onFocus is a prop that a user can define,
      // call it here if it gets passed in
      if (textInputProps.onFocus) {
        textInputProps.onFocus(e);
      }
    },
  };

  return (
    <InputWrapper
      editable={editable}
      style={style}
      isFocused={isFocused}
      isThick={isThick}
      hasError={hasError}
    >
      {leftComponent}
      {isMasked ? (
        <StyledMaskInput
          editable={editable}
          placeholder={placeholderText}
          mask={mask}
          {...restProps}
        />
      ) : isMaskedMobile ? (
        <StyledMobileMaskInput
          editable={editable}
          placeholder={placeholderText}
          type={"custom"}
          options={{
            mask: mask?.toString(),
          }}
          {...restProps}
        />
      ) : (
        <StyledInput
          editable={editable}
          placeholder={placeholderText}
          {...restProps}
        />
      )}
      {insetText && (
        <InsetText numberOfLines={1}>{formatMessage(insetText)}</InsetText>
      )}
      {rightComponent}
    </InputWrapper>
  );
};

const LabeledInput: React.FC<InputProps> = ({
  labelMessage,
  helperText,
  spacerSize,
  style,
  inlineDescription,
  value,
  isLarge,
  ...textInputProps
}) => {
  if (isVirtaIntlMessage(labelMessage)) {
    return (
      <LabeledFormElement
        style={style}
        labelMessage={labelMessage!}
        helperText={helperText}
        spacerSize={spacerSize}
        isLarge={isLarge}
      >
        <UnlabeledInput value={value} {...textInputProps} />
        {inlineDescription}
      </LabeledFormElement>
    );
  }

  if (inlineDescription) {
    return (
      <StyledRow>
        <UnlabeledInput value={value} {...textInputProps} />
        {inlineDescription}
      </StyledRow>
    );
  }

  return <UnlabeledInput style={style} {...textInputProps} value={value} />;
};

export const Input: React.FC<InputProps> = ({
  errorMessage,
  errorText,
  wrapperStyle,
  ...textInputProps
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  return (
    <ErrorWrapper style={wrapperStyle}>
      <LabeledInput {...textInputProps} />
      {(!!errorMessage || !!errorText) && (
        <StyledError color="Danger" size="xsmall" weight="light">
          {formatMessage(errorMessage || errorText)}
        </StyledError>
      )}
    </ErrorWrapper>
  );
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  ...inputProps
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Input
      errorText={meta.touched && meta.error ? meta.error : undefined}
      value={field.value}
      onChangeText={(text) => helpers.setValue(text)}
      onBlur={field.onBlur(name)}
      {...inputProps}
    />
  );
};
/* eslint-enable max-lines */
