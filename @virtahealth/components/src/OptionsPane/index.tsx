import * as React from "react";
import { MessageDescriptor, defineMessages, useIntl } from "react-intl";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Platform,
} from "react-native";
import { isEmpty, isUndefined } from "@virtahealth/utils";

import styled, { css } from "../styled-components";

const isWeb = Platform.OS === "web";

const labels = defineMessages({
  emptyResults: {
    id: "components.comboBox.emptyResultsMessage",
    description:
      "Message shown in the options pane when (filtered) options are empty.",
    defaultMessage: "No results",
  },
});

interface OptionsPaneProps {
  /**
   * A react-intl message for the options pane empty state (default: "No results")
   */
  emptyResultsMessage?: MessageDescriptor;
  /**
   * An event handler for selecting an option
   */
  onSelect?: (option?: string) => void;
  /**
   * Defines a thicker, rounder border
   */
  isThick?: boolean;
  /**
   * Defines a pre-determined height and scrolling behavior
   */
  limitHeight?: boolean;
}

// We previously used getStylesFromTargetElementRect to define the position, but that's incompatible with mobile at the moment so we set a static top
// TM-3111
const StyledOptionsPane = styled.View<
  Pick<OptionsPaneProps, "isThick" | "limitHeight">
>`
  border-color: ${({ theme }) => theme.inputBorderColor};
  border-width: ${({ theme, isThick }) =>
    isThick ? theme.inputThickBorderWidth : theme.inputBorderWidth}px;
  border-radius: ${({ theme, isThick }) =>
    isThick ? theme.inputThickBorderRadius : theme.inputBorderRadius}px;
  background-color: ${({ theme }) => theme.optionsPaneBackgroundColor};
  z-index: 100;
  width: 100%;
  ${({ limitHeight }) => {
    return (
      isWeb &&
      css`
        overflow-y: ${() => (limitHeight ? "scroll" : "none")};
        max-height: ${() => (limitHeight ? "200px" : "unset")};
      `
    );
  }}
  ${Platform.OS === "android"
    ? css`
        position: relative;
        top: 10px;
      `
    : css`
        position: absolute;
        top: 50px;
      `}
`;

interface StyledOptionProps {
  pressable?: boolean;
  isPressed?: boolean;
}

const StyledOption = styled.View<StyledOptionProps>`
  display: flex;
  padding: 10px;
  ${({ pressable }) =>
    isWeb ? `user-select: ${pressable ? "none" : "initial"}` : ""};
  ${({ pressable }) =>
    isWeb ? `cursor: ${pressable ? "pointer" : "unset"}` : ""};
  border-radius: 4px;
  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.buttonPrimaryBackgroundColor : "transparent"};
  opacity: ${({ isPressed }) => (isPressed ? 0.5 : 1)};
`;

const OptionText = styled.Text<StyledOptionProps>`
  ${({ theme, isPressed }) =>
    isPressed ? "color: " + theme.buttonPrimaryTextColor : ""};
`;

export interface OptionProps extends TouchableWithoutFeedbackProps {
  value?: number | string;
}

export const Option: React.FC<OptionProps> = ({
  children,
  onPress,
  ...props
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
    >
      <StyledOption {...props} isPressed={isPressed}>
        <OptionText isPressed={isPressed}>{children}</OptionText>
      </StyledOption>
    </TouchableWithoutFeedback>
  );
};

const EmptyOption: React.FC = ({ children, ...props }) => (
  <StyledOption {...props} pressable={false}>
    <OptionText>{children}</OptionText>
  </StyledOption>
);

export const OptionsPane: React.FC<React.PropsWithChildren<OptionsPaneProps>> =
  ({
    emptyResultsMessage,
    isThick,
    onSelect,
    children,
    limitHeight = false,
  }) => {
    const intl = useIntl();
    if (isUndefined(emptyResultsMessage)) {
      emptyResultsMessage = labels.emptyResults;
    }

    return (
      <StyledOptionsPane isThick={isThick} limitHeight={limitHeight}>
        {isEmpty(children) ? (
          <EmptyOption>{intl.formatMessage(emptyResultsMessage)}</EmptyOption>
        ) : (
          React.Children.map(
            children,
            (child) =>
              React.isValidElement(child) &&
              React.cloneElement(child as React.ReactElement, {
                ...child.props,
                key: child.props.childKey || child.props.value,
                // the child option may be a value-based component or just a text element, so check either "value" or "children"
                onPress:
                  onSelect &&
                  onSelect.bind(
                    null,
                    child.props.value || child.props.children
                  ),
              })
          )
        )}
      </StyledOptionsPane>
    );
  };

export const OptionsPaneContainer = styled.View`
  z-index: 100;
`;
