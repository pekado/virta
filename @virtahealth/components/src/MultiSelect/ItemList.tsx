import { ViewProps, TouchableOpacity } from "react-native";
import * as React from "react";
import { getFontFamilyAndWeight, cloneDeep } from "@virtahealth/utils";
import { CheckmarkIcon } from "..";
import styled, { ThemeContext } from "../styled-components";
import { ListItem, SelectedListItems } from "./types";

const ItemListContainer = styled.ScrollView<{ topSpacing: number }>`
  position: absolute;
  top: ${({ topSpacing }) => `${topSpacing}px`};
  width: 100%;
  border-style: ${({ theme }) => theme.multiselectMainBorderStyle};
  border-width: ${({ theme }) => theme.multiselectMainBorderWidth}px;
  border-color: ${({ theme }) => theme.multiselectItemListBorderColor};
  border-radius: ${({ theme }) => theme.multiselectItemListBorderRadius}px;
  background-color: ${({ theme }) => theme.multiselectBodyBackgroundColor};
  overflow: hidden;
  z-index: 99;
  max-height: 300px;
`;

const ItemContainer = styled.View`
  padding: 6px 0px 6px 33px;
  width: 100%;
  flex-direction: row;
`;

const ItemText = styled.Text`
  color: ${({ theme }) => theme.multiselectBodyTextColor};
  font-size: ${({ theme }) => theme.multiselectBodyFontSize}px;
  ${({ theme }) =>
    getFontFamilyAndWeight("Whitney", theme.multiselectBodyFontWeight)}
`;

const CheckmarkIconContainer = styled.View`
  position: absolute;
  left: 10px;
  top: 9px;
`;

export interface ItemListProps extends Pick<ViewProps, "style"> {
  top: number;
  items: ListItem[];
  selectedItems: SelectedListItems;
  onChange: (selectedItems: SelectedListItems) => void;
  filter?: string;
}

export const ItemList: React.FC<ItemListProps> = ({
  top,
  items,
  selectedItems,
  onChange,
  filter,
}: ItemListProps) => {
  const theme = React.useContext(ThemeContext);
  let listItems = items;
  if (filter) {
    listItems = items.filter((item: ListItem) => {
      return item.labelMessage.toLowerCase().startsWith(filter.toLowerCase());
    });
  }

  return (
    <ItemListContainer topSpacing={top} testID="itemlist-dropdown">
      {listItems.map((item: ListItem) => {
        const isItemSelected = selectedItems[item.id] ? true : false;
        return (
          <TouchableOpacity
            key={`${item.id}-selector`}
            onPress={() => {
              const selectedItemsClone = cloneDeep(selectedItems);
              if (isItemSelected) {
                delete selectedItemsClone[item.id];
              } else {
                selectedItemsClone[item.id] = item;
              }
              onChange(selectedItemsClone);
            }}
          >
            <ItemContainer key={`${item.id}-container`}>
              <ItemText key={`${item.id}-text`}>{item.labelMessage}</ItemText>
            </ItemContainer>
            {isItemSelected && (
              <CheckmarkIconContainer>
                <CheckmarkIcon
                  width={13}
                  height={13}
                  key={`${item.id}-checkmark`}
                  color={theme.multiselectBodyTextColor}
                />
              </CheckmarkIconContainer>
            )}
          </TouchableOpacity>
        );
      })}
    </ItemListContainer>
  );
};
