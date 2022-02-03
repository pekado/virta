import * as React from "react";
import { messages, VirtaIntlMessage } from "@virtahealth/utils";
import { primitives } from "@virtahealth/styles";

import styled from "../styled-components";
import { Input } from "../Input";
import { CloseSymbol, SearchIcon } from "../Icons";
import { Button } from "../Button";

export interface SearchInputProps {
  showCancel?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onCancelPress?: () => void;
  placeholderMessage?: VirtaIntlMessage;
}

const SearchContainer = styled.View`
  flex-direction: row;
`;
const SearchInputBox = styled(Input)`
  background-color: ${({ theme }) => theme.searchInputBackgroundColor};
`;
const SearchIconWrapper = styled.View`
  padding-left: 10px;
`;
const CloseSymbolButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.searchInputCloseBackgroundColor};
  justify-content: center;
`;
const StyledCloseSymbol = styled(CloseSymbol)`
  color: ${({ theme }) => theme.searchInputCloseColor};
  font-size: 10px;
  padding: 0;
`;
const CancelButton = styled(Button)`
  margin-left: 20px;
`;

export const SearchInput: React.FC<SearchInputProps> = ({
  showCancel = false,
  value,
  onChangeText,
  onFocus,
  onCancelPress,
  placeholderMessage,
}) => {
  const inputRef = React.useRef() as React.RefObject<any>;

  const onCancel = () => {
    inputRef.current.blur();
    onCancelPress?.();
  };

  return (
    <SearchContainer>
      <SearchInputBox
        inputRef={inputRef}
        value={value}
        leftComponent={
          <SearchIconWrapper>
            <SearchIcon color={primitives.color.carbonGray600} />
          </SearchIconWrapper>
        }
        rightComponent={
          value !== "" && (
            <CloseSymbolButton onPress={() => onChangeText("")}>
              <StyledCloseSymbol />
            </CloseSymbolButton>
          )
        }
        onChangeText={onChangeText}
        onFocus={onFocus}
        returnKeyType="search"
        placeholderMessage={placeholderMessage}
      />
      {showCancel && (
        <CancelButton
          appearance="link"
          intent="secondary"
          labelMessage={messages.cancel}
          onPress={onCancel}
        />
      )}
    </SearchContainer>
  );
};
