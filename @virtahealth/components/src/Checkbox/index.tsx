import * as React from "react";
import {
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useIntl } from "react-intl";
import { useField } from "formik";
import {
  VirtaIntlMessageOrString,
  VirtaIntlMessage,
  formatVirtaMessageOrString,
} from "@virtahealth/utils";

import styled from "../styled-components";
import { Label } from "../Text";
import { CheckboxIcon } from "../Icons";
import { Body } from "../SubstrateText";

export interface CheckboxProps {
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
   * Boolean to control button styling
   */
  isButton?: boolean;
  /**
   * Boolean to control the radio on property
   */
  isChecked?: boolean;
  /**
   * Name for finding the element for he
   */
  testID?: string;
  /**
   * Style prop pass through for component
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Error text props for single checkbox
   */
  errorText?: VirtaIntlMessageOrString;
}

// We should figure out how to use testID on Formik CheckboxFields
export interface CheckboxFieldProps
  extends Exclude<CheckboxProps, ["isChecked", "onPress"]> {
  /**
   * Set the formik field value
   */
  value?: string;
  /**
   * Name of the Formik field
   */
  name: string;
  /**
   * Enable multiple answers to be selected
   */
  multiple?: false;
}

/**
 * Same as `CheckboxFieldProps`, but require `value` prop when `multiple` is true
 */
export interface MultipleCheckboxFieldProps
  extends Omit<CheckboxFieldProps, "multiple"> {
  /**
   * Set the formik field value
   */
  value: string;
  /**
   * Enable multiple answers to be selected
   */
  multiple: true;
}

export interface CheckboxStyledProps {
  isButton?: boolean;
  isChecked?: boolean;
  hasDescription?: boolean;
}

// Not quite sure how we want to handle this but the checkbox hit state should be at least 44px per ios
const StyledView = styled.View<CheckboxStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: ${({ isButton, hasDescription }) =>
    isButton || !hasDescription ? "center" : "flex-start"};
  margin-right: ${({ theme, isButton }) =>
    isButton ? 0 : theme.checkboxPadding}px;
  padding: ${({ theme, isButton }) =>
    isButton ? theme.checkboxButtonPadding : 0}px;
  border-width: ${({ theme, isButton }) =>
    isButton ? theme.checkboxLargeBorderWidth : 0}px;
  border-radius: ${({ theme, isButton }) =>
    isButton ? theme.checkboxButtonContainerBorderRadius : 0}px;
  border-color: ${({ theme, isButton, isChecked }) =>
    isButton && isChecked
      ? theme.checkboxSelectedColor
      : theme.checkboxBorderColor};
  background-color: ${({ theme, isButton }) =>
    isButton
      ? theme.checkboxButtonBackgroundColor
      : theme.checkboxBackgroundColor};
`;

const StyledCheckbox = styled.View<CheckboxStyledProps>`
  align-items: center;
  justify-content: center;
  height: ${({ theme, isButton }) =>
    isButton ? theme.checkboxLargeSize : theme.checkboxSize}px;
  width: ${({ theme, isButton }) =>
    isButton ? theme.checkboxLargeSize : theme.checkboxSize}px;
  margin-right: ${({ theme, isButton }) =>
    isButton ? theme.checkboxButtonPadding : theme.checkboxPadding}px;
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.checkboxSelectedColor : "white"};
  border-width: ${({ theme, isButton }) =>
    isButton ? theme.checkboxLargeBorderWidth : theme.checkboxBorderWidth}px;
  border-color: ${({ theme, isChecked }) =>
    isChecked ? theme.checkboxSelectedColor : theme.checkboxBorderColor};
  border-radius: ${({ theme, isButton }) =>
    isButton ? theme.checkboxLargeBorderRadius : theme.checkboxBorderRadius}px;
`;

const StyledLabel = styled(Label)<CheckboxStyledProps>`
  font-weight: ${({ theme, isButton }) =>
    isButton
      ? theme.checkboxButtonLabelFontWeight
      : theme.checkboxLabelFontWeight};
  font-size: ${({ theme, isButton }) =>
    isButton
      ? theme.checkboxButtonLabelFontSize
      : theme.checkboxLabelFontSize}px;
  line-height: ${({ theme, isButton }) =>
    isButton ? theme.checkboxButtonLineHeight : theme.checkboxLineHeight}px;
`;

const StyledDescription = styled(Body).attrs<CheckboxStyledProps>(
  ({ isButton }) => ({
    size: isButton ? "small" : "xsmall",
    lineHeightMultiplier: 1.5,
    color: "Subdued",
    weight: isButton ? "regular" : "light",
  })
)<CheckboxStyledProps>`
  margin-top: 5px;
  ${({ isButton }) => (!isButton ? "max-width: 200px" : "")};
`;

const StyledFormElementWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

const StyledContentView = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledError = styled(Body)`
  margin-top: ${({ theme }) => theme.errorTextTopMargin}px;
`;

const StyledCheckMark = styled(CheckboxIcon).attrs<CheckboxStyledProps>(
  ({ theme, isButton }) => {
    return {
      width: isButton
        ? theme.checkboxLargeCheckmarkSize
        : theme.checkboxCheckmarkSize,
      height: isButton
        ? theme.checkboxLargeCheckmarkSize
        : theme.checkboxCheckmarkSize,
      color: theme.checkboxCheckmarkColor,
      fillColor: theme.checkboxSelectedColor,
    };
  }
)<CheckboxStyledProps>``;

export const Checkbox: React.FC<CheckboxProps> = ({
  onPress,
  isButton,
  isChecked,
  labelMessage,
  testID,
  style,
  errorText,
  descriptionMessage,
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  return (
    <StyledFormElementWrapper style={style}>
      <TouchableOpacity
        accessibilityLabel="checkbox"
        onPress={onPress}
        testID={testID}
      >
        <StyledView
          isButton={isButton}
          isChecked={isChecked}
          hasDescription={!!descriptionMessage}
        >
          <StyledCheckbox
            isButton={isButton}
            testID={`${testID}-box`}
            isChecked={isChecked}
            accessibilityLabel={isChecked ? "checked" : undefined}
          >
            {isChecked && (
              <StyledCheckMark isButton={isButton} testID="check-mark-icon" />
            )}
          </StyledCheckbox>
          <StyledContentView>
            {labelMessage && (
              <StyledLabel isButton={isButton}>
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
      {!!errorText && (
        <StyledError color="Danger" size="xsmall" weight="light">
          {formatMessage(errorText)}
        </StyledError>
      )}
    </StyledFormElementWrapper>
  );
};

/**
 * Formik field.onChange doesn't handle components without name and value bound
 * so the workaround is to send it the name, which returns a callback fn that accepts either
 * an event or a value. In this case, we send the value in field.onChange(name)(value)
 * More details around Formik and React Native at https://jaredpalmer.com/formik/docs/guides/react-native
 */

export const CheckboxField: React.FC<
  MultipleCheckboxFieldProps | CheckboxFieldProps
> = ({ name, value, multiple, ...rest }) => {
  const [field, meta, helpers] = useField({
    name: name,
    value: value,
    type: "checkbox",
    multiple: multiple,
  });

  const handleMultiCheckboxChange = (value: string) => {
    const currentValues = Array.isArray(meta.value) ? meta.value : []; // should be an array
    const positionInArray = currentValues.indexOf(value);

    let newValues;
    // if found, then remove it
    if (positionInArray > -1) {
      newValues = currentValues
        .slice(0, positionInArray)
        .concat(currentValues.slice(positionInArray + 1));
    } else {
      newValues = [...currentValues, value];
    }
    helpers.setValue(newValues);
  };

  const isChecked = multiple
    ? Array.isArray(meta.value) && meta.value.includes(value)
    : field.checked;

  const errorText = !multiple && meta.touched && meta.error ? meta.error : "";

  return (
    <Checkbox
      {...rest}
      {...field}
      isChecked={isChecked}
      onPress={() =>
        value
          ? multiple
            ? handleMultiCheckboxChange(value)
            : field.onChange(name)(value)
          : helpers.setValue(!isChecked)
      }
      errorText={errorText}
    />
  );
};
