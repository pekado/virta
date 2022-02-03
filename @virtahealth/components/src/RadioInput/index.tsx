import {
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
  StyleProp,
} from "react-native";
import { useIntl } from "react-intl";
import * as React from "react";
import { useField } from "formik";
import { BaseTheme } from "@virtahealth/styles";
import {
  VirtaIntlMessage,
  formatVirtaMessageOrString,
} from "@virtahealth/utils";

import { Label } from "../Text";
import { Body } from "../SubstrateText";
import styled from "../styled-components";

export interface RadioInputProps {
  id?: string;
  /**
   * Generic onClick handler
   */
  onPress?: (val: GestureResponderEvent) => void;
  /**
   * A react-intl message for the label of the input
   */
  labelMessage?: VirtaIntlMessage;
  /**
   * A react-intl message for the description of the input
   */
  descriptionMessage?: VirtaIntlMessage;
  /**
   * Boolean to control the radio on property
   */
  isChecked?: boolean;
  /**
   * Test ID of field
   */
  testID?: string;
  /**
   * style of view wrapper
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Boolean to control button styling
   */
  isButton?: boolean;
  /**
   * Size to control styling
   */
  size?: "small" | "medium" | "large";
}

export interface RadioInputFieldProps
  extends Omit<RadioInputProps, "onPress" | "isChecked"> {
  /**
   * Set the formik field value
   */
  value?: string;
  /**
   * Name of the Formik field
   */
  name: string;
}

const getSizedStyleVariables = (
  size: RadioInputProps["size"],
  theme: BaseTheme
) => {
  const styles = {
    fontWeight: theme.radioInputLabelFontWeight,
    fontSize: theme.radioInputLabelFontSize,
    lineHeight: theme.radioInputLineHeight,
    borderWidth: theme.radioInputBorderWidth,
    size: theme.radioInputSize,
    circleSize: theme.radioInputCircleSize,
  };

  switch (size) {
    case "small":
      styles.fontWeight = theme.radioInputSmallLabelFontWeight;
      styles.fontSize = theme.radioInputSmallLabelFontSize;
      styles.lineHeight = theme.radioInputSmallLineHeight;
      styles.borderWidth = theme.radioInputSmallBorderWidth;
      styles.size = theme.radioInputSmallSize;
      styles.circleSize = theme.radioInputSmallCircleSize;
      break;
    case "large":
      styles.fontSize = theme.radioInputLargeLabelFontSize;
      styles.lineHeight = theme.radioInputLargeLineHeight;
      styles.size = theme.radioInputLargeSize;
      styles.circleSize = theme.radioInputLargeCircleSize;
      break;
  }

  return styles;
};

export interface RadioButtonStyledProps {
  isButton?: boolean;
  isChecked?: boolean;
  size?: "small" | "medium" | "large";
  hasDescription?: boolean;
}

const StyledView = styled.View<RadioButtonStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: ${({ isButton, hasDescription }) =>
    isButton || !hasDescription ? "center" : "flex-start"};
  margin-right: ${({ theme, isButton }) =>
    isButton ? 0 : theme.radioInputPadding}px;
  padding: ${({ theme, isButton }) =>
    isButton ? theme.radioInputButtonPadding : 0}px;
  border-width: ${({ theme, isButton }) =>
    isButton ? theme.radioInputBorderWidth : 0}px;
  border-radius: ${({ theme, isButton }) =>
    isButton ? theme.radioInputButtonContainerBorderRadius : 0}px;
  border-color: ${({ theme, isButton, isChecked }) =>
    isButton && isChecked
      ? theme.radioInputSelectedColor
      : theme.radioInputBorderColor};
  background-color: ${({ theme, isButton }) =>
    isButton
      ? theme.radioInputButtonBackgroundColor
      : theme.radioInputBackgroundColor};
`;

const StyledRadioButton = styled.View<RadioButtonStyledProps>`
  align-items: center;
  justify-content: center;
  height: ${({ theme, isButton, size }) =>
    getSizedStyleVariables(isButton ? "large" : size, theme).size}px;
  width: ${({ theme, isButton, size }) =>
    getSizedStyleVariables(isButton ? "large" : size, theme).size}px;
  margin-right: ${({ theme, isButton }) =>
    isButton ? theme.radioInputButtonPadding : theme.radioInputPadding}px;
  background-color: ${({ theme }) => theme.radioInputColor};
  border-width: ${({ theme, isButton, size, isChecked }) =>
    isChecked
      ? theme.radioInputSelectedBorderWidth
      : getSizedStyleVariables(isButton ? "large" : size, theme).borderWidth}px;
  border-color: ${({ theme }) => theme.radioInputBorderColor};
  border-radius: ${({ theme, isButton, size }) =>
    getSizedStyleVariables(isButton ? "large" : size, theme).size}px;
`;

// TODO: Change to substrate text
// TODO: Adjust line heights to match radio button size for alignment with descriptions in nonButton mode
const StyledLabel = styled(Label)<RadioButtonStyledProps>`
  font-weight: ${({ theme, isButton, size }) =>
    isButton
      ? theme.radioInputButtonLabelFontWeight
      : getSizedStyleVariables(size, theme).fontWeight};
  font-size: ${({ theme, isButton, size }) =>
    isButton
      ? theme.radioInputButtonLabelFontSize
      : getSizedStyleVariables(size, theme).fontSize}px;
  line-height: ${({ theme, isButton, size }) =>
    isButton
      ? theme.radioInputButtonLineHeight
      : getSizedStyleVariables(size, theme).lineHeight}px;
`;

const StyledRadioButtonFill = styled.View<RadioButtonStyledProps>`
  width: ${({ theme, isButton, size }) =>
    getSizedStyleVariables(isButton ? "large" : size, theme).circleSize}px;
  height: ${({ theme, isButton, size }) =>
    getSizedStyleVariables(isButton ? "large" : size, theme).circleSize}px;
  border-radius: ${({ theme, isButton, size }) =>
    getSizedStyleVariables(isButton ? "large" : size, theme).circleSize}px;
  background-color: ${({ theme }) => theme.radioInputSelectedColor};
`;

const StyledDescription = styled(Body).attrs<RadioButtonStyledProps>(
  ({ isButton }) => ({
    size: isButton ? "small" : "xsmall",
    lineHeightMultiplier: 1.5,
    color: "Subdued",
    weight: isButton ? "regular" : "light",
  })
)<RadioButtonStyledProps>`
  margin-top: 5px;
  ${({ isButton }) => (!isButton ? "max-width: 200px" : "")};
`;

const StyledContentView = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

export const RadioInput: React.FC<RadioInputProps> = ({
  onPress,
  isChecked,
  isButton = false,
  labelMessage,
  id,
  size = "medium",
  testID,
  style,
  descriptionMessage,
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  return (
    <TouchableOpacity accessibilityLabel="radioBtn" onPress={onPress}>
      <StyledView
        nativeID={id}
        testID={testID}
        isChecked={isChecked}
        isButton={isButton}
        style={style}
        hasDescription={Boolean(descriptionMessage)}
      >
        <StyledRadioButton
          testID={`${testID}-button`}
          isButton={isButton}
          isChecked={isChecked}
          size={size}
        >
          {isChecked && (
            <StyledRadioButtonFill
              isButton={isButton}
              accessibilityLabel="checked"
              testID={`${testID}-button-inner`}
              size={size}
            />
          )}
        </StyledRadioButton>
        <StyledContentView>
          {labelMessage && (
            <StyledLabel isButton={isButton} size={size}>
              {formatMessage(labelMessage)}
            </StyledLabel>
          )}
          {descriptionMessage && (
            <StyledDescription isButton={isButton}>
              {formatMessage(descriptionMessage)}
            </StyledDescription>
          )}
        </StyledContentView>
      </StyledView>
    </TouchableOpacity>
  );
};

/**
 * Formik field.onChange doesn't handle components without name and value bound
 * so the workaround is to send it the name, which returns a callback fn that accepts either
 * an event or a value. In this case, we send the value in field.onChange(name)(value)
 * More details around Formik and React Native at https://jaredpalmer.com/formik/docs/guides/react-native
 */

export const RadioInputField: React.FC<RadioInputFieldProps> = ({
  name,
  value,
  ...rest
}) => {
  const [field] = useField({ name, value, type: "radio" });
  return (
    <RadioInput
      {...rest}
      isChecked={field.checked}
      onPress={() => value && field.onChange(name)(value)}
    />
  );
};
