import * as React from "react";
import { View } from "react-native";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { MessageDescriptor } from "@formatjs/intl";
import { useIntl } from "react-intl";
import styled, { css } from "../styled-components";
import BinaryFilter from "./BinaryFilter";

export enum Status {
  Active = "active",
  Disabled = "disabled",
  Inactive = "inactive",
}

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SelectText = styled.Text`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.genericFilterSelectTextColor};
      font-size: ${theme.binaryFilterTitleFontSize}px;
      line-height: ${theme.binaryFilterTitleLineHeight}px;
      ${() => getFontFamilyAndWeight("Whitney", "bold")}
    `;
  }}
`;

export interface FilterCategory {
  title: MessageDescriptor;
  status: Status;
  id: string;
}

export const GenericFilterBar: React.FC<{
  filterCategories: FilterCategory[];
  onFilterChange: (value: FilterCategory[]) => void;
  selectMessage?: MessageDescriptor;
  deselectMessage?: MessageDescriptor;
}> = ({
  filterCategories,
  onFilterChange,
  selectMessage = {
    id: "genericFilterBar.select",
    defaultMessage: "Select All",
  },
  deselectMessage = {
    id: "genericFilterBar.deselect",
    defaultMessage: "Deselect All",
  },
}) => {
  const intl = useIntl();
  const [filterCategoriesDataState, setFilterCategoriesData] =
    React.useState<FilterCategory[]>(filterCategories);

  const getActiveFilterList = (allFilterCategoriesData: FilterCategory[]) => {
    return allFilterCategoriesData.filter(
      (filterCategory) => filterCategory.status === Status.Active
    );
  };

  const toggleAllFilter = (toggleAllActive: boolean) => {
    const newStatus = toggleAllActive ? Status.Active : Status.Inactive;

    const updatedFilterCategoriesDataState = filterCategoriesDataState.map(
      (filterCategory) => {
        const updatedFilterCategory = { ...filterCategory };
        if (updatedFilterCategory.status !== Status.Disabled) {
          updatedFilterCategory.status = newStatus;
        }
        return updatedFilterCategory;
      }
    );

    setFilterCategoriesData(updatedFilterCategoriesDataState);
    onFilterChange(getActiveFilterList(updatedFilterCategoriesDataState));
  };

  const toggleSingleFilter = (index: number) => {
    const updatedFilterCategoriesDataState = [...filterCategoriesDataState];
    const updatedFilterCategory = {
      ...updatedFilterCategoriesDataState[index],
    };
    if (updatedFilterCategory.status === Status.Disabled) {
      return;
    }
    updatedFilterCategory.status =
      updatedFilterCategory.status === Status.Active
        ? Status.Inactive
        : Status.Active;
    updatedFilterCategoriesDataState[index] = updatedFilterCategory;
    setFilterCategoriesData(updatedFilterCategoriesDataState);
    onFilterChange(getActiveFilterList(updatedFilterCategoriesDataState));
  };

  const isAllFilterActive = filterCategoriesDataState.every(
    (filterCategory: FilterCategory) =>
      filterCategory.status === Status.Active ||
      filterCategory.status === Status.Disabled
  );

  return (
    <View>
      <StyledView>
        {filterCategoriesDataState?.map((singleFilterCategory, index) => (
          <BinaryFilter
            singleFilterCategory={singleFilterCategory}
            index={index}
            toggleSingleFilter={toggleSingleFilter}
            key={singleFilterCategory.id}
            testID={singleFilterCategory.id}
          />
        ))}
        {isAllFilterActive ? (
          <SelectText onPress={() => toggleAllFilter(false)}>
            {intl.formatMessage(deselectMessage)}
          </SelectText>
        ) : (
          <SelectText onPress={() => toggleAllFilter(true)}>
            {intl.formatMessage(selectMessage)}
          </SelectText>
        )}
      </StyledView>
    </View>
  );
};
