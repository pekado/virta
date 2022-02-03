import * as React from "react";
import { MessageDescriptor, useIntl } from "react-intl";
import {
  NativeSyntheticEvent,
  Platform,
  TextInputKeyPressEventData,
} from "react-native";
import { useFormikContext } from "formik";
import { ThemedStyledProps } from "styled-components";
import { DefaultTheme } from "styled-components/native";
import {
  formatVirtaMessageOrString,
  VirtaIntlMessage,
} from "@virtahealth/utils";

import { UpDownArrowsIcon } from "../Icons";
import { LabeledFormElement } from "../LabeledFormElement";
import { Option, OptionsPane, OptionsPaneContainer } from "../OptionsPane";
import { Row } from "../Row";
import { VirtaInputProps } from "../properties";
import styled from "../styled-components";
import { Input, InputFieldProps } from "../Input";
import { Body } from "../SubstrateText";

const isWeb = Platform.OS === "web";

const StyledErrorText = styled(Body)`
  margin-top: 10px;
`;
const ErrorWrapper = styled.View`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  z-index: auto;
`;

export interface ComboBoxProps extends VirtaInputProps {
  /**
   * An event handler for when the input is 'submitted' (i.e. the user presses
   * 'return', or (on mobile) taps the submit button in their device's soft
   * keyboard)
   */
  onSubmitText?: (val?: string) => void;
  /**
   * A react-intl message for the options empty state (default: "No results")
   */
  emptyResultsMessage?: MessageDescriptor;
  /**
   * An event handler for selecting an option
   */
  onSelectOption?: (option?: string) => void;

  /**
   * Error MessageDescriptor to display
   */
  errorMessage?: VirtaIntlMessage;

  /**
   * Error text to display
   */
  errorText?: string;

  /**
   * Expands the options pane when the text input is focused
   */
  expandOnFocus?: boolean;

  /**
   * Limit dropdown height and scroll
   */
  limitDropdownHeight?: boolean;
}

const StyledInput = styled(Input)`
  ${({ isThick }) =>
    isThick
      ? ""
      : `
    flex: 1;
    min-height: 40px;
    padding: 8px 30px 8px 12px;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${({
      theme,
      editable,
    }: ThemedStyledProps<React.ComponentProps<typeof Input>, DefaultTheme>) =>
      editable ? theme.inputBorderColor : theme.inputDisabledBorderColor};
    background-color: ${({
      theme,
      editable,
    }: ThemedStyledProps<React.ComponentProps<typeof Input>, DefaultTheme>) =>
      editable
        ? theme.inputBackgroundColor
        : theme.inputDisabledBackgroundColor};
    color: ${({
      theme,
    }: ThemedStyledProps<React.ComponentProps<typeof Input>, DefaultTheme>) =>
      theme.inputColor};
  `}
`;
export interface ComboBoxFieldProps extends ComboBoxProps, InputFieldProps {}

const ArrowButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 40px;
  font-size: 18px;
  line-height: 18px;
  ${({ disabled }) =>
    isWeb ? `cursor: ${disabled ? "unset" : "pointer"}` : ""};
`;

export const ComboBoxOption = Option;

const UnlabeledComboBox: React.FC<React.PropsWithChildren<ComboBoxProps>> = ({
  placeholderMessage,
  value,
  onChangeText,
  onSubmitText,
  onSelectOption,
  emptyResultsMessage,
  editable,
  style,
  children,
  isThick,
  limitDropdownHeight = false,
  expandOnFocus = false,
  ...inputProps
}) => {
  // editable is true if not explicitly set to false
  editable = editable !== false;

  const [expanded, setExpanded] = React.useState(false);

  const handleKeyPress = ({
    nativeEvent: { key },
  }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (key === "Escape") {
      setExpanded(!expanded);
    }
  };

  const handleChangeText = (val: string) => {
    setExpanded(true);
    if (onChangeText) {
      onChangeText(val);
    }
  };

  const handleSubmitText = () => {
    setExpanded(true);
    if (onSubmitText) {
      onSubmitText(value);
    }
  };

  const handleSelectOption = (option?: string) => {
    setExpanded(false);
    if (onSelectOption) {
      onSelectOption(option);
    }
  };

  // we dont want to modify state after the component is unmounted
  let stillMounted = true;
  React.useEffect(() => {
    stillMounted = true;
    return () => {
      stillMounted = false;
    };
  }, []);

  return (
    <OptionsPaneContainer style={style}>
      <Row>
        <StyledInput
          {...inputProps}
          isThick={isThick}
          placeholderMessage={placeholderMessage}
          value={value}
          editable={editable}
          onKeyPress={handleKeyPress}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitText}
          onBlur={(e) => {
            // Delay hiding so that our OptionsPane has time to respond
            setTimeout(() => {
              if (stillMounted) {
                setExpanded(false);
              }

              // Since onBlur is a prop that a user can define,
              // call it here if it gets passed in
              if (inputProps.onBlur) {
                inputProps.onBlur(e);
              }
            }, 150);
          }}
          onFocus={(e) => {
            if (expandOnFocus) {
              setExpanded(true);
            }
            // Since onFocus is a prop that a user can define,
            // call it here if it gets passed in
            if (inputProps.onFocus) {
              inputProps.onFocus(e);
            }
          }}
        />
        <ArrowButton
          onPress={() => {
            setExpanded(!expanded);
          }}
          disabled={!editable}
          testID="menubutton"
        >
          <UpDownArrowsIcon />
        </ArrowButton>
      </Row>
      {expanded && (
        <OptionsPane
          onSelect={handleSelectOption}
          isThick={isThick}
          limitHeight={limitDropdownHeight}
        >
          {children}
        </OptionsPane>
      )}
    </OptionsPaneContainer>
  );
};

const StyledUnlabeledComboBox = styled(UnlabeledComboBox)`
  flex: 1;
`;

export const ComboBox: React.FC<React.PropsWithChildren<ComboBoxProps>> = ({
  labelMessage,
  helperText,
  spacerSize,
  style,
  children,
  errorMessage,
  errorText,
  ...inputProps
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  if (labelMessage) {
    return (
      <ErrorWrapper>
        <LabeledFormElement
          style={style}
          labelMessage={labelMessage}
          helperText={helperText}
          spacerSize={spacerSize}
          {...inputProps}
        >
          <StyledUnlabeledComboBox {...inputProps}>
            {children}
          </StyledUnlabeledComboBox>
        </LabeledFormElement>
        {(!!errorMessage || !!errorText) && (
          <StyledErrorText color="Danger" size="xsmall" weight="light">
            {formatMessage(errorMessage || errorText)}
          </StyledErrorText>
        )}
      </ErrorWrapper>
    );
  }

  return (
    <UnlabeledComboBox style={style} {...inputProps}>
      {children}
    </UnlabeledComboBox>
  );
};

const StyledComboBox = styled(ComboBox)`
  z-index: 2;
`;

export const ComboBoxField: React.FC<
  React.PropsWithChildren<ComboBoxFieldProps>
> = ({
  labelMessage,
  name,
  placeholderMessage,
  helperText,
  spacerSize,
  style,
  children,
  errorMessage,
  errorText,
  testID,
  editable,
  ...inputProps
}) => {
  const { getFieldProps, getFieldMeta, setFieldValue } = useFormikContext();
  return (
    <StyledComboBox
      testID={testID}
      editable={editable}
      errorText={getFieldMeta(name).error}
      value={getFieldProps(name).value}
      onChangeText={(val) => setFieldValue(name, val)}
      labelMessage={labelMessage}
      placeholderMessage={placeholderMessage}
      onSelectOption={(val) => setFieldValue(name, val)}
      style={style}
      {...inputProps}
    >
      {children}
    </StyledComboBox>
  );
};
