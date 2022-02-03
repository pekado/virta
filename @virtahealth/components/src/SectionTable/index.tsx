import { TextStyle, ViewProps } from "react-native";
import * as React from "react";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { primitives } from "@virtahealth/styles";
import { MessageDescriptor } from "@formatjs/intl";
import { useIntl } from "react-intl";
import { Base } from "../Text";
import styled from "../styled-components";
import { SectionRow, SectionRowView, SectionRowViewProps } from "./SectionRow";
import { EditMenuOption } from "./EditMenu";

interface ContentStyle {
  title?: TextStyle;
  columns?: TextStyle;
}

const HeaderContainer = styled.View`
  width: 100%;
  padding-top: 7px;
  padding-bottom: 9px;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
  border-bottom-width: ${({ theme }) => theme.sectionTableBorderWidth}px;
  border-bottom-color: ${({ theme }) => theme.sectionTableBorderColor};
`;

const HeaderCell = styled.View<{
  width: number;
}>`
  width: ${({ width }) => `${width}%`};
  justify-content: center;
  align-items: flex-start;
`;

const HeaderText = styled(Base)<{ isTitle?: boolean }>`
  font-size: ${({ isTitle, theme }) =>
    isTitle
      ? theme.sectionTableHeaderTitleFontSize
      : theme.sectionTableHeaderFontSize}px;
  color: ${({ isTitle, theme }) =>
    isTitle
      ? theme.sectionTableHeaderTitleColor
      : theme.sectionTableHeaderTextColor};
  padding-right: 12px;
  ${() => getFontFamilyAndWeight("Whitney", "bold")}
`;

const NoDataText = styled(Base)`
  padding: 10px 0;
  font-size: ${({ theme }) => theme.sectionTableNoDataTextFontSize}px;
  border-bottom-width: ${({ theme }) => theme.sectionTableBorderWidth}px;
  border-bottom-color: ${({ theme }) => theme.sectionTableBorderColor};
  color: ${() => primitives.color.carbonGray600};
  ${() => getFontFamilyAndWeight("Whitney", "bold")}
`;

interface SectionHeaderViewProps extends Pick<ViewProps, "style"> {
  title: MessageDescriptor;
  columns: MessageDescriptor[];
  /* widths are in percentages */
  titleCellWidthPercentage: number;
  isEditable: boolean;
  contentStyle?: ContentStyle;
}

const SectionHeaderView: React.FC<SectionHeaderViewProps> = ({
  title,
  columns,
  titleCellWidthPercentage,
  isEditable,
  style,
  contentStyle = {},
}) => {
  const intl = useIntl();
  const { title: titleStyle = {}, columns: columnsStyle = {} } = contentStyle;
  /**
   * Cell widths will be mapped to %
   * If table is Editable, we want to leave 5% space for Edit Menu
   */
  const cellWidth =
    (100 - titleCellWidthPercentage - (isEditable ? 5 : 0)) / columns.length;
  return (
    <HeaderContainer style={style}>
      <HeaderCell width={titleCellWidthPercentage}>
        <HeaderText style={titleStyle} isTitle>
          {intl.formatMessage(title)}
        </HeaderText>
      </HeaderCell>
      {columns.map((header) => {
        return (
          <HeaderCell key={header.id} width={cellWidth}>
            <HeaderText style={columnsStyle}>
              {intl.formatMessage(header)}
            </HeaderText>
          </HeaderCell>
        );
      })}
    </HeaderContainer>
  );
};

interface SectionTableProps extends Pick<ViewProps, "style"> {
  title: MessageDescriptor;
  columns: MessageDescriptor[];
  noDataMessage?: MessageDescriptor;
  rows?: SectionRow[];
  isEditable?: boolean;
  editMenuOptions?: EditMenuOption[];
  titleCellWidthPercentage?: number;
  contentStyles?: {
    header?: ContentStyle;
    row?: ContentStyle;
  };
  onEditMenuButtonClick?: (
    selectedOption: EditMenuOption,
    row: SectionRow,
    rowIndex: number
  ) => void;
}

const SectionTable: React.FC<SectionTableProps> = ({
  title,
  columns,
  rows,
  noDataMessage = {
    id: "sectionTable.noDataMessage",
    defaultMessage: "No Data",
  },
  isEditable = false,
  titleCellWidthPercentage = 50,
  contentStyles = {},
  onEditMenuButtonClick,
  editMenuOptions,
  style,
}) => {
  const intl = useIntl();
  const { row: rowStyle = {}, header: headerStyle = {} } = contentStyles;
  return (
    <React.Fragment>
      <SectionHeaderView
        style={style}
        contentStyle={headerStyle}
        title={title}
        columns={columns}
        titleCellWidthPercentage={titleCellWidthPercentage}
        isEditable={isEditable}
      />
      {rows ? (
        rows.map((row: SectionRow, index: number) => {
          return (
            <SectionRowView
              key={`${title.id}-row-${index}`}
              zIndex={rows.length * 10 - index}
              row={row}
              contentStyle={rowStyle}
              columns={columns}
              isEditable={isEditable}
              titleCellWidthPercentage={titleCellWidthPercentage}
              editMenuOptions={editMenuOptions}
              onEditMenuButtonClick={(
                selectedOption: EditMenuOption,
                row: SectionRow
              ) => {
                onEditMenuButtonClick &&
                  onEditMenuButtonClick(selectedOption, row, index);
              }}
            />
          );
        })
      ) : (
        <NoDataText testID="no-data">
          {intl.formatMessage(noDataMessage)}
        </NoDataText>
      )}
    </React.Fragment>
  );
};

export {
  SectionTable,
  SectionTableProps,
  SectionRow,
  SectionRowView,
  SectionRowViewProps,
  SectionHeaderView,
  SectionHeaderViewProps,
  EditMenuOption,
  ContentStyle,
};
