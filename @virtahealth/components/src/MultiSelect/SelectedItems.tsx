import { ViewProps } from "react-native";
import * as React from "react";
import { getFontFamilyAndWeight, cloneDeep } from "@virtahealth/utils";
import styled from "../styled-components";
import { CloseSymbol } from "..";
import { ListItem, SelectedListItems } from "./types";

const SelectedItem = styled.View`
  padding: 4px;
  border-radius: ${({ theme }) => theme.multiselectItemSelectedBorderRadius}px;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 5px;
  flex-direction: row;
  background-color: ${({ theme }) =>
    theme.multiselectItemSelectedBackgroundColor};
`;

const SelectedItemText = styled.Text`
  font-size: ${({ theme }) => theme.multiselectBodyFontSize}px;
  color: ${({ theme }) => theme.multiselectItemSelectedTextColor};
  ${({ theme }) =>
    getFontFamilyAndWeight("Whitney", theme.multiselectBodyFontWeight)}
`;

const RemoveButton = styled.TouchableOpacity`
  width: 15px;
  height: 15px;
  margin-left: 4px;
  margin-top: 1px;
  border-style: ${({ theme }) => theme.multiselectMainBorderStyle};
  border-width: ${({ theme }) => theme.multiselectMainBorderWidth}px;
  border-color: ${({ theme }) => theme.multiselectRemoveButtonBorderColor};
  border-radius: ${({ theme }) => theme.multiselectRemoveButtonBorderRadius}px;
  justify-content: center;
  align-items: center;
`;

export interface SelectedItemsProps extends Pick<ViewProps, "style"> {
  value: SelectedListItems;
  updateSelectedItems: (selectedItems: SelectedListItems) => void;
}

export const SelectedItems: React.FC<SelectedItemsProps> = ({
  value,
  updateSelectedItems,
}: SelectedItemsProps) => {
  return (
    <>
      {Object.values(value).map((item: ListItem) => {
        return (
          <SelectedItem key={`${item.id}-item`}>
            <SelectedItemText key={`${item.id}-item-text`}>
              {item.labelMessage}
            </SelectedItemText>
            <RemoveButton
              key={`${item.id}-remove-button`}
              onPress={() => {
                const selectedItemsClone = cloneDeep(value);
                delete selectedItemsClone[item.id];
                updateSelectedItems(selectedItemsClone);
              }}
            >
              <CloseSymbol style={{ fontSize: 8, padding: 0 }} />
            </RemoveButton>
          </SelectedItem>
        );
      })}
    </>
  );
};
