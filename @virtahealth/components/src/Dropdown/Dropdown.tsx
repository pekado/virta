import * as React from "react";
import Downshift from "downshift";
import { useIntl } from "react-intl";
import { formatVirtaMessageOrString } from "@virtahealth/utils";

import styled from "../styled-components";
import { Input } from "../Input";
import { UpDownArrowsIcon } from "../Icons";
import {
  DropdownOptionProps,
  DropdownProps,
  StyledOptionProps,
} from "./interfaces";
import { getOrCreateCustomOption } from "./utils";

const DropdownBase = styled.View<{ overlap: boolean }>`
  position: ${({ overlap }) => (overlap ? "relative" : "static")};
  z-index: auto;
`;

const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const MenuButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: ${({ theme }) => theme.dropdownMenuButtonWidth}px;
  font-size: ${({ theme }) => theme.dropdownBaseFontSize}px;
  line-height: ${({ theme }) => theme.dropdownBaseLineHeight}px;
  ${({ disabled }) => `cursor: ${disabled ? "unset" : "pointer"}`};
`;

const StyledOptionPane = styled.View<{ isThick: boolean; overlap: boolean }>`
  max-height: 250px;
  overflow-y: scroll;
  border-width: ${({ theme, isThick }) =>
    isThick ? theme.inputThickBorderWidth : theme.inputBorderWidth}px;
  border-radius: ${({ theme, isThick }) =>
    isThick ? theme.inputThickBorderRadius : theme.inputBorderRadius}px;
  border-color: ${({ theme }) => theme.inputBorderColor};
  ${({ theme, overlap }) =>
    overlap
      ? `
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 5;
    background-color: ${theme.dropdownBackgroundColor};
  `
      : ""}
`;

const StyledOption = styled.View<StyledOptionProps>`
  display: flex;
  padding: ${({ theme }) => theme.dropdownOptionPadding}px;
  ${({ pressable }) => `user-select: ${pressable ? "none" : "initial"}`};
  ${({ pressable }) => `cursor: ${pressable ? "pointer" : "unset"}`};
  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.buttonSecondaryBackgroundColor : "transparent"};
`;

const OptionText = styled.Text<StyledOptionProps>`
  ${({ theme, isPressed }) =>
    isPressed ? "color: " + theme.buttonPrimaryTextColor : ""};
`;

export function BasicDropdown<T>({
  onSelectOption,
  onInputChange,
  options,
  initialValue,
  filterFunction = () => true,
  optionPressable = true,
  placeholderMessage,
  specialOptions = [],
  specialOptionCreators = [],
  overlap = false,
  allowCustomValues = false,
  style,
  testID,
}: DropdownProps<T>) {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const initialSelectedItem = getOrCreateCustomOption(
    initialValue,
    options,
    allowCustomValues
  );
  return (
    <Downshift
      onChange={(selection) => {
        return (
          selection && selection.value && onSelectOption?.(selection.value)
        );
      }}
      itemToString={(item) => formatMessage(item?.label) as string}
      /* If allowCustomValues is set, we create a custom value in the event that the initial value provided isn't one of the options.
         This is useful if a creatable dropdown is for a form which already has custom values in it, such as when going back a page */
      initialSelectedItem={initialSelectedItem}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        toggleMenu,
        getRootProps,
        selectedItem,
        selectItem,
        inputValue,
      }) => {
        // For async options being loaded in after initialization;
        if (selectedItem == null && initialSelectedItem != null) {
          selectItem(initialSelectedItem);
        }
        const fullSpecialOptions = inputValue
          ? specialOptions.concat(
              specialOptionCreators.map((soc) => soc(inputValue))
            )
          : specialOptions;
        const fullFilterFn = (item: DropdownOptionProps<T>) =>
          formatMessage(selectedItem?.label) === inputValue ||
          filterFunction(item, inputValue);

        return (
          <DropdownBase overlap={overlap} style={style}>
            <InputWrapper
              testID={testID}
              {...getRootProps(undefined, { suppressRefError: true })}
            >
              <Input
                placeholderMessage={placeholderMessage}
                testID={`${testID}-input`}
                {...getInputProps()}
                onKeyPress={getInputProps().onKeyDown as any} // Work around to get arrow keys to select on rn-web
              />
              <MenuButton
                testID="menubutton"
                onPress={() => {
                  onInputChange && onInputChange("");
                  toggleMenu();
                }}
              >
                <UpDownArrowsIcon />
              </MenuButton>
            </InputWrapper>
            {isOpen ? (
              <StyledOptionPane {...{ overlap: overlap, ...getMenuProps() }}>
                {options.filter(fullFilterFn).map((item, index) => (
                  <StyledOption
                    key={index}
                    testID={`dropdown-${testID}-${item.value}`}
                    {...getItemProps({
                      key:
                        typeof item.value === "string" ||
                        typeof item.value === "number"
                          ? item.value
                          : "",
                      index,
                      item,
                    })}
                    pressable={optionPressable}
                    isPressed={highlightedIndex === index}
                  >
                    <OptionText isPressed={highlightedIndex === index}>
                      {formatMessage(item.label)}
                    </OptionText>
                  </StyledOption>
                ))}
                {fullSpecialOptions && fullSpecialOptions.length > 0
                  ? fullSpecialOptions.map((item, index) =>
                      item.shouldDisplay()
                        ? item.appearance({
                            ...getItemProps({
                              key:
                                "special" + formatMessage(item.label) + index,
                              index:
                                options.filter(fullFilterFn).length + index,
                              item,
                            }),
                            pressable: optionPressable,
                            isPressed:
                              highlightedIndex ===
                              index + options.filter(fullFilterFn).length,
                          })
                        : undefined
                    )
                  : undefined}
              </StyledOptionPane>
            ) : undefined}
          </DropdownBase>
        );
      }}
    </Downshift>
  );
}
