import * as React from "react";
import {
  Modal,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useIntl } from "react-intl";
import Downshift, { StateChangeOptions } from "downshift";
import {
  formatVirtaMessageOrString,
  getPlatformFontFamilySuffix,
} from "@virtahealth/utils";
import { BaseTheme, primitives } from "@virtahealth/styles";

import { VirtaInputProps } from "../properties";
import styled from "../styled-components";
import { UpDownArrowsIcon, CloseSymbol } from "../Icons";
import { SearchInput } from "../SearchInput";
import { Heading } from "../SubstrateText";
import { DropdownOptionProps, DropdownProps } from "./interfaces";
import { getOrCreateCustomOption } from "./utils";

const platformFont =
  `inputFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme;

const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.inputBorderColor};
`;

const CloseButton = styled.TouchableOpacity`
  width: 40px;
  padding-left: 15px;
`;

const RightFiller = styled.View`
  width: 40px;
`;

const StyledCloseSymbol = styled(CloseSymbol)`
  color: ${primitives.color.carbonGray700};
  line-height: 22px;
  font-size: 22px;
  padding: 0;
`;

const HeaderText = styled(Heading)`
  flex: 1;
  text-align: center;
  font-family: ${Platform.OS === "android"
    ? "Whitney-Semibold"
    : "Whitney-Book"};
  font-weight: ${Platform.OS === "android" ? "normal" : "600"};
`;

const InputTouchable = styled.TouchableOpacity`
  flex: 1;
`;

const InputWrapper = styled.View<VirtaInputProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 44px;
  padding: 8px 12px;
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
`;

const InputTextWrapper = styled.View`
  flex: 1;
`;

const InputText = styled.Text`
  font-family: "${({ theme }) => theme[platformFont]}";
  color: ${({ theme }) => theme.inputColor};
`;

const ModalWrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.inputBorderColor};
`;

const OptionWrapper = styled.View`
  margin-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.inputBorderColor};
`;

const OptionText = styled.Text`
  font-family: ${Platform.OS === "android"
    ? "Whitney-Semibold"
    : "Whitney-Book"};
  font-weight: ${Platform.OS === "android" ? "normal" : "600"};
  font-size: 16px;
  color: ${({ theme }) => theme.inputColor};
`;

export function BasicDropdown<T>({
  onSelectOption,
  onInputChange,
  options,
  initialValue,
  filterFunction = () => true,
  placeholderMessage,
  // this needs to maybe change to labelMessage for consistency
  title,
  specialOptions = [],
  allowCustomValues = false,
  style,
}: DropdownProps<T>) {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const [selectedOption, setSelectedOption] = React.useState(
    getOrCreateCustomOption(initialValue, options, allowCustomValues)
  );
  const [inputValue, setInputValue] = React.useState<T | string | undefined>(
    formatMessage(selectedOption?.label) as string
  );

  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setInputValue("");
    onInputChange?.("");
    setIsOpen(true);
  }, [selectedOption]);

  const itemToString = React.useCallback(
    (item: DropdownOptionProps<T> | string) => {
      if (!item) {
        return "";
      }
      if (typeof item === "string") {
        return item;
      }
      return formatMessage(item.label);
    },
    []
  );

  const handleStateChange = React.useCallback(
    (changes: StateChangeOptions<any>) => {
      if (changes.type === Downshift.stateChangeTypes.clickItem) {
        // eslint-disable-next-line no-prototype-builtins
        if (changes.hasOwnProperty("selectedItem")) {
          setSelectedOption(changes.selectedItem);
          onSelectOption?.(changes.selectedItem.value);
        }

        setIsOpen(false);
      } else if (changes.type === Downshift.stateChangeTypes.changeInput) {
        setInputValue(changes.inputValue || "");
        onInputChange?.(changes.inputValue || "");
      }
    },
    [onSelectOption]
  );

  const shouldShowSearch = options.length >= 6;

  return (
    <>
      <InputTouchable onPress={() => openModal()} style={style}>
        <InputWrapper editable>
          <InputTextWrapper>
            <InputText>
              {selectedOption
                ? formatMessage(selectedOption.label)
                : formatMessage(placeholderMessage)}
            </InputText>
          </InputTextWrapper>
          <UpDownArrowsIcon />
        </InputWrapper>
      </InputTouchable>
      {isOpen && (
        <Modal visible transparent animationType="slide">
          {/* @ts-ignore - we need to update our types to match DownShift */}
          <Downshift
            initialSelectedItem={selectedOption}
            selectedItem={inputValue}
            itemToString={itemToString}
            onStateChange={handleStateChange}
          >
            {({ getRootProps, getInputProps, getItemProps, inputValue }) => {
              return (
                <ModalWrapper
                  {...getRootProps(undefined, { suppressRefError: true })}
                >
                  <SafeAreaView style={{ flex: 1 }}>
                    <HeaderWrapper>
                      <CloseButton onPress={() => setIsOpen(false)}>
                        <StyledCloseSymbol />
                      </CloseButton>
                      {title && (
                        <HeaderText size={3}>{formatMessage(title)}</HeaderText>
                      )}
                      <RightFiller />
                    </HeaderWrapper>
                    {shouldShowSearch && (
                      <SearchWrapper>
                        <SearchInput
                          placeholderMessage={placeholderMessage}
                          {...getInputProps()}
                        />
                      </SearchWrapper>
                    )}
                    <FlatList
                      style={{ flex: 1 }}
                      data={[
                        ...options.filter((item) =>
                          filterFunction(item, inputValue)
                        ),
                        ...((specialOptions &&
                          specialOptions.filter((item) =>
                            filterFunction(item, inputValue)
                          )) ||
                          []),
                      ]}
                      renderItem={({ item, index }) => (
                        <TouchableOpacity
                          {...getItemProps({
                            key:
                              typeof item.value === "string" ||
                              typeof item.value === "number"
                                ? item.value
                                : "",
                            index,
                            item,
                          })}
                        >
                          <OptionWrapper>
                            <OptionText>{formatMessage(item.label)}</OptionText>
                          </OptionWrapper>
                        </TouchableOpacity>
                      )}
                    />
                  </SafeAreaView>
                </ModalWrapper>
              );
            }}
          </Downshift>
        </Modal>
      )}
    </>
  );
}
