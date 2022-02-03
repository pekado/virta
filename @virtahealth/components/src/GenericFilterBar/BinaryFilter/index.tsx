import * as React from "react";
import { Pressable, View } from "react-native";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { useIntl } from "react-intl";
import {
  ActiveCheckmarkPathIcon,
  InActiveCheckmarkPathIcon,
} from "../../Icons";
import styled, { css } from "../../styled-components";
import { FilterCategory, Status } from "../index";

const Card = styled.Text<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ disabled, theme }) =>
    disabled
      ? theme.binaryFilterDisabledTextColor
      : theme.binaryFilterTextColor};
  background-color: ${({ theme }) => theme.binaryFilterBackgroundColor};
  height: 34px;
  border-style: ${({ theme }) => theme.binaryFilterBorderStyle};
  border-width: ${({ theme }) => theme.binaryFilterBorderWidth}px;
  border-color: ${({ theme }) => theme.binaryFilterBorderColor};
  border-radius: ${({ theme }) => theme.binaryFilterBorderRadius}px;
  margin-right: 12px;
  padding: 8px 15px;
`;

const Title = styled.Text`
  ${({ theme }) => {
    return css`
      font-weight: ${theme.binaryFilterTitleFontWeight};
      font-size: ${theme.binaryFilterTitleFontSize}px;
      line-height: ${theme.binaryFilterTitleLineHeight}px;
      ${() => getFontFamilyAndWeight("Whitney", "normal")}
    `;
  }}
`;

const FilterMarkContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-right: 7px;
`;

export const BinaryFilter: React.FC<{
  singleFilterCategory: FilterCategory;
  toggleSingleFilter: (filterIndex: number) => void;
  index: number;
  testID: string;
}> = ({ singleFilterCategory, toggleSingleFilter, index, testID }) => {
  const intl = useIntl();

  return (
    <View>
      <Pressable
        disabled={singleFilterCategory.status === Status.Disabled}
        onPress={() => toggleSingleFilter(index)}
        testID={testID}
      >
        <Card disabled={singleFilterCategory.status === Status.Disabled}>
          <FilterMarkContainer>
            {singleFilterCategory.status === Status.Active ? (
              <ActiveCheckmarkPathIcon />
            ) : (
              <InActiveCheckmarkPathIcon />
            )}
          </FilterMarkContainer>
          <Title>{intl.formatMessage(singleFilterCategory.title)}</Title>
        </Card>
      </Pressable>
    </View>
  );
};

export default BinaryFilter;
