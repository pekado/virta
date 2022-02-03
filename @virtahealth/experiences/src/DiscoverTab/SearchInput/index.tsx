import * as React from "react";
import {
  styled,
  Input,
  Button,
  SearchIcon,
  CloseSymbol,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { primitives } from "@virtahealth/styles";

import { ScreenSizeProps } from "..";

interface SearchInputProps {
  isCompact: boolean;
  isSearching: boolean;
  search: string;
  onSearchChange: (search: string) => void;
  onSearchInputFocus: () => void;
  onSearchCancelPress: () => void;
}

const SearchContainer = styled.View<ScreenSizeProps>`
  flex-direction: row;
  margin-top: ${({ isCompact }) => (isCompact ? 20 : 0)}px;
  margin-bottom: 23px;
  margin-left: 20px;
  margin-right: 20px;
`;
const SearchInputBox = styled(Input)`
  background-color: ${primitives.color.carbonGray200};
`;
const SearchIconWrapper = styled.View<ScreenSizeProps>`
  padding-left: 10px;
  padding-right: ${({ isCompact }) => (isCompact ? 0 : 10)}px;
`;
const CloseSymbolButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${primitives.color.carbonGray100};
  justify-content: center;
`;
const StyledCloseSymbol = styled(CloseSymbol)`
  color: ${primitives.color.carbonGray700};
  font-size: 10px;
  padding: 0;
`;
const CancelButton = styled(Button)`
  margin-left: 20px;
`;

export const SearchInput: React.FC<SearchInputProps> = ({
  isCompact,
  isSearching,
  search,
  onSearchChange,
  onSearchInputFocus,
  onSearchCancelPress,
}) => {
  const inputRef = React.useRef() as React.RefObject<any>;
  const onCancel = () => {
    inputRef.current.blur();
    onSearchCancelPress();
  };
  return (
    <SearchContainer isCompact={isCompact}>
      <SearchInputBox
        inputRef={inputRef}
        value={search}
        leftComponent={
          <SearchIconWrapper isCompact={isCompact}>
            <SearchIcon color={primitives.color.carbonGray600} />
          </SearchIconWrapper>
        }
        rightComponent={
          search !== "" && (
            <CloseSymbolButton onPress={() => onSearchChange("")}>
              <StyledCloseSymbol />
            </CloseSymbolButton>
          )
        }
        onChangeText={onSearchChange}
        onFocus={onSearchInputFocus}
        returnKeyType="search"
        placeholderMessage={messages.searchAllCategories}
      />
      {isSearching && (
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
