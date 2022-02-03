import { TouchableOpacity, View, ViewProps } from "react-native";
import { useIntl, MessageDescriptor } from "react-intl";
import * as React from "react";
import { useField } from "formik";
import { Label } from "../Text";
import styled from "../styled-components";

interface Options {
  labelMessage: MessageDescriptor;
  value: any;
}

const StyledRadioContainer = styled(View)`
  align-items: flex-start;
`;

export interface ButtonRadioInputProps {
  /**
   * Generic onClick handler
   */
  onPress: (val: any) => void;
  /**
   * A react-intl message for the label of the input
   */
  labelMessage?: MessageDescriptor;
  /**
   * Boolean to control the radio on property
   */
  value?: any;
  id?: string;
  options: Array<Options>;
  width?: number;
}

export interface ButtonRadioInputFieldProps {
  /**
   * A react-intl message for the label of the input
   */
  labelMessage?: MessageDescriptor;
  /**
   * Name of the Formik field
   */
  name: string;
  id?: string;
  options: Array<Options>;
  width?: number;
}

interface CheckableViewProps extends ViewProps {
  isChecked?: boolean;
  isFirst: boolean;
  isLast: boolean;
  buttonCount: number;
  width?: number;
}

interface CheckableLabelProps extends ViewProps {
  isChecked?: boolean;
}

const ButtonRadioButton = styled.View<CheckableViewProps>`
  height: ${({ theme }) => theme.btnRadioInputOuterButtonHeight}px;
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? "5px" : "0")};
  border-top-left-radius: ${({ isFirst }) => (isFirst ? "5px" : "0")};
  border-bottom-right-radius: ${({ isLast }) => (isLast ? "5px" : "0")};
  border-top-right-radius: ${({ isLast }) => (isLast ? "5px" : "0")};
  width: ${({ theme, buttonCount, width }) =>
    (width || theme.btnRadioInputWidth) / buttonCount}px;
  border-left-width: ${({ theme }) => theme.btnRadioInputOuterBorderWidth}px;
  border-top-width: ${({ theme }) => theme.btnRadioInputOuterBorderWidth}px;
  border-bottom-width: ${({ theme }) => theme.btnRadioInputOuterBorderWidth}px;
  border-right-width: ${({ isLast, theme }) =>
    isLast ? theme.btnRadioInputOuterBorderWidth : 0}px;
  border-color: ${({ theme }) => theme.btnRadioInputSecondaryBorderColor};
  background-color: ${({ theme, isChecked }) =>
    isChecked
      ? theme.btnRadioInputPrimaryBackgroundColor
      : theme.btnRadioInputSecondaryBackgroundColor};
  align-items: center;
  justify-content: center;
`;

const StyledInnerLabel = styled(Label)<CheckableLabelProps>`
  color: ${({ theme, isChecked }) =>
    isChecked
      ? theme.btnRadioInputSecondaryTextColor
      : theme.btnRadioInputPrimaryTextColor};
`;

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledLabel = styled(Label)`
  font-weight: ${({ theme }) =>
    // @ts-ignore `btnRadioInputFontWeight` is currently only used by EP but will fallback for other themes
    theme.btnRadioInputFontWeight || theme.textLabelFontWeight};
`;

export const ButtonRadioInput: React.FC<ButtonRadioInputProps> = ({
  onPress,
  labelMessage,
  value,
  options,
  id,
  width,
}) => {
  const intl = useIntl();
  const optionCount = options.length;

  return (
    <StyledRadioContainer>
      {labelMessage && (
        <StyledLabel>{intl.formatMessage(labelMessage)}</StyledLabel>
      )}
      <StyledView nativeID={id}>
        {options.map((option, idx) => (
          <TouchableOpacity
            key={`${labelMessage}-option-${idx}`}
            accessibilityLabel="radioBtn"
            onPress={() => onPress(option.value)}
          >
            <ButtonRadioButton
              buttonCount={options.length}
              isFirst={idx === 0}
              isLast={idx === optionCount - 1}
              isChecked={option.value === value}
              width={width}
            >
              <StyledInnerLabel isChecked={option.value === value}>
                {intl.formatMessage(option.labelMessage)}
              </StyledInnerLabel>
            </ButtonRadioButton>
          </TouchableOpacity>
        ))}
      </StyledView>
    </StyledRadioContainer>
  );
};

export const ButtonRadioInputField: React.FC<ButtonRadioInputFieldProps> = ({
  name,
  labelMessage,
  options,
  id,
  width,
}) => {
  const [field] = useField({ name: name });
  return (
    <ButtonRadioInput
      id={id}
      options={options}
      labelMessage={labelMessage}
      value={field.value}
      onPress={(fieldValue) => fieldValue && field.onChange(name)(fieldValue)}
      width={width}
    />
  );
};
