import { Text, ViewProps } from "react-native";
import * as React from "react";
import styled from "../styled-components";

const StyledTableCell = styled.View`
  align-self: stretch;
  border-color: ${({ theme }) => theme.tableCellBorderColor};
  border-style: ${({ theme }) => theme.tableCellBorderStyle};
  border-left-width: ${({ theme }) => theme.tableCellBorderLeftWidth}px;
  border-right-width: ${({ theme }) => theme.tableCellBorderRightWidth}px;
  padding-top: ${({ theme }) => theme.tableCellPaddingTop}px;
  padding-left: ${({ theme }) => theme.tableCellPaddingLeft}px;
  padding-right: ${({ theme }) => theme.tableCellPaddingRight}px;
  padding-bottom: ${({ theme }) => theme.tableCellPaddingBottom}px;
  display: ${({ theme }) => theme.tableCellDisplay};
  justify-content: ${({ theme }) => theme.tableCellJustifyContent};
  align-items: ${({ theme }) => theme.tableCellAlignItems};
  flex: 1;
  min-width: 250px;
`; // We need to solve the min width issue.

const StyledTableRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${({ theme }) => theme.tableRowJustifyContent};
  align-items: ${({ theme }) => theme.tableRowAlignItems};
  border-color: ${({ theme }) => theme.tableRowBorderColor};
  border-style: ${({ theme }) => theme.tableRowBorderStyle};
  border-top-width: ${({ theme }) => theme.tableRowBorderTopWidth}px;
  border-left-width: ${({ theme }) => theme.tableRowBorderLeftWidth}px;
  border-right-width: ${({ theme }) => theme.tableRowBorderRightWidth}px;
  border-bottom-width: ${({ theme }) => theme.tableRowBorderBottomWidth}px;
`;

const StyledTable = styled.View`
  border-color: ${({ theme }) => theme.tableBorderColor};
  border-style: ${({ theme }) => theme.tableBorderStyle};
  border-top-width: ${({ theme }) => theme.tableBorderTopWidth}px;
  border-left-width: ${({ theme }) => theme.tableBorderLeftWidth}px;
  border-right-width: ${({ theme }) => theme.tableBorderRightWidth}px;
  border-bottom-width: ${({ theme }) => theme.tableBorderBottomWidth}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export interface TableCellProps extends Pick<ViewProps, "style"> {
  value: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ value, style }) => {
  const cellContent = React.isValidElement(value) ? (
    value
  ) : (
    <Text>{value}</Text>
  );
  return <StyledTableCell style={style}>{cellContent}</StyledTableCell>;
};

export interface RowProps extends Pick<ViewProps, "style"> {
  name?: string;
  data?: React.ReactNode[];
}

export const TableRow: React.FC<RowProps> = ({
  name,
  data,
  children,
  style,
}) => {
  return (
    <StyledTableRow style={style}>
      {children}
      {data &&
        data.map((cellValue: React.ReactNode, index) => {
          return <TableCell key={`${name}-${index}`} value={cellValue} />;
        })}
    </StyledTableRow>
  );
};

export type TableProps = Pick<ViewProps, "style">;

export const Table: React.FC<TableProps> = ({ children, style }) => {
  return <StyledTable style={style}>{children}</StyledTable>;
};
