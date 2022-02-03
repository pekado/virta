import {
  Body,
  Row,
  TableCell,
  styled,
  TableRow,
} from "@virtahealth/components";
import { getPlatformFontFamilySuffix } from "@virtahealth/utils";
import { DefaultTheme } from "styled-components/native";

export const StyledTableCell = styled(TableCell)`
  width: 115px;
  max-width: 115px;
  min-width: 115px;
  border-left-width: 0px;
  border-right-width: 1px;
  height: 50px;
  display: flex;
  flex-direction: row;
`;

export const StyledTableText = styled(Body)`
  color: ${({ theme }) => theme.textTableCellColor};
  font-family: "${({ theme }) =>
    theme[
      `textBodyFontFamily${getPlatformFontFamilySuffix()}` as keyof DefaultTheme
    ]}";
  font-weight: 400;
  line-height: 16px;
  font-size: 14px;
  padding-left: 3px;
  padding-right: 3px;
`;

export const StyledTableRow = styled(TableRow)<{
  isWeb: boolean;
}>`
  ${({ isWeb }) => (isWeb ? "z-index: auto;" : "")}
`;

export const ShadedRow = styled(StyledTableRow)`
  background-color: ${({ theme }) => theme.tableRowShadedColor};
`;

export const LeftTableCell = styled(TableCell)`
  border-left-width: 0px;
  border-right-width: 2px;
  width: 250px;
  max-width: 250px;
  align-items: flex-start;
`;

export const PopoverText = styled(Body)`
  font-size: 12px;
  text-align: center;
`;

export const WrappingRow = styled(Row)`
  flex-wrap: wrap;
`;

export const CellValueWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const isZero = (v?: number | string) => {
  if (isNaN(Number(v))) {
    return false;
  }
  return !!(v !== undefined && v === 0);
};
