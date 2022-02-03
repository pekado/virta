import { ViewProps, TextInput, Platform } from "react-native";
import * as React from "react";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { debounce } from "lodash";
import styled, { css } from "../styled-components";
import { UpDownArrowsIcon } from "..";
import { ItemList } from "./ItemList";
import { SelectedItems } from "./SelectedItems";
import { ListItem, SelectedListItems } from "./types";
const Container = styled.View<{ width: number }>`
  width: ${({ width }) => `${width}px`};
`;

const InputBox = styled.View`
  flex-direction: row;
  width: 100%;
  min-height: 35px;
  border-style: ${({ theme }) => theme.multiselectMainBorderStyle};
  border-width: ${({ theme }) => theme.multiselectMainBorderWidth}px;
  border-color: ${({ theme }) => theme.multiselectMainBorderColor};
  border-radius: ${({ theme }) => theme.multiselectMainBorderRadius}px;
  overflow: hidden;
`;

const UpAndDownArrowsContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding-left: 8px;
`;

const SelectedItemsContainer = styled.View`
  flex-direction: row;
  width: 88%;
  padding: 0px 5px 5px 10px;
  flex-wrap: wrap;
`;

const SearchInput = styled.TextInput`
  min-width: 140px;
  flex: 1;
  padding: 4px;
  margin-top: 5px;
  font-size: ${({ theme }) => theme.multiselectBodyFontSize}px;
  padding-left: 4px;
  color: ${({ theme }) => theme.multiselectPlaceholderColor}
    ${({ theme }) =>
      getFontFamilyAndWeight(
        "Whitney",
        theme.multiselectPlaceholderFontWeight
      )};
  ${Platform.select({
    web: css`
      outline-width: 0;
    `,
  })};
`;

interface MultiSelectProps extends Pick<ViewProps, "style"> {
  placeholderText: string;
  listItems: ListItem[];
  width?: number;
  onChange: (selectedListItems: ListItem[]) => void;
  initialSelectedItems?: ListItem[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  width = 300,
  listItems,
  placeholderText,
  onChange,
  initialSelectedItems,
}: MultiSelectProps) => {
  const initialSelectedItemsStateData = () => {
    const selectedItemsClone: SelectedListItems = {};
    initialSelectedItems?.forEach((item: ListItem) => {
      selectedItemsClone[item.id] = item;
    });
    return selectedItemsClone;
  };
  const [selectedListItems, setSelectedListItems] =
    React.useState<SelectedListItems>(initialSelectedItemsStateData() ?? {});
  const [isItemListVisible, setIsItemListVisible] =
    React.useState<boolean>(false);
  const searchInputRef = React.useRef() as React.RefObject<TextInput>;
  const [itemListTopMargin, setItemListTopMargin] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setItemListVisibility = React.useCallback(
    debounce((isItemListVisible: boolean) => {
      setIsItemListVisible(isItemListVisible);
    }, 200),
    []
  );

  return (
    <Container width={width}>
      <InputBox>
        {/* Selected items */}
        <SelectedItemsContainer
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => {
            setItemListTopMargin(height + 8);
          }}
        >
          <SelectedItems
            value={selectedListItems}
            updateSelectedItems={(selectedListItems: SelectedListItems) => {
              if (isItemListVisible) {
                searchInputRef.current!.focus();
              }
              setSelectedListItems(selectedListItems);
              onChange(Object.values(selectedListItems));
            }}
          />
          <SearchInput
            value={searchFilter}
            ref={searchInputRef}
            testID={"search-reaction-input"}
            onChangeText={(text: string) => {
              setSearchFilter(text);
            }}
            onFocus={() => {
              setItemListVisibility(true);
            }}
            onBlur={() => {
              setItemListVisibility(false);
            }}
            placeholder={placeholderText}
          />
        </SelectedItemsContainer>

        {/* expand/collapse arrows */}
        <UpAndDownArrowsContainer
          testID={"updown-arrows"}
          onPress={() => {
            const isItemListVisibleNewState = !isItemListVisible;
            if (isItemListVisibleNewState) {
              searchInputRef.current!.focus();
            }
            setItemListVisibility(isItemListVisibleNewState);
          }}
        >
          <UpDownArrowsIcon />
        </UpAndDownArrowsContainer>
      </InputBox>
      {isItemListVisible && (
        <ItemList
          top={itemListTopMargin}
          filter={searchFilter}
          items={listItems}
          selectedItems={selectedListItems}
          onChange={(listItems: SelectedListItems) => {
            if (
              Object.keys(listItems).length >
              Object.keys(selectedListItems).length
            ) {
              // as we select new items, clear the search field
              setSearchFilter("");
            }
            searchInputRef.current!.focus();
            setSelectedListItems(listItems);
            onChange(Object.values(listItems));
          }}
        />
      )}
    </Container>
  );
};

export { MultiSelect, MultiSelectProps, ListItem };
