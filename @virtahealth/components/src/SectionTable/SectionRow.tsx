import * as React from "react";
import { TextStyle } from "react-native";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { MessageDescriptor } from "@formatjs/intl";
import { useIntl } from "react-intl";
import { Base } from "../Text";
import { Tooltip } from "../Tooltip";
import styled from "../styled-components";
import { ShowMoreText } from "./ShowMoreText";
import { EditMenu, EditMenuOption } from "./EditMenu";
import { ContentStyle } from "./index";

const RowCellContainer = styled.View<{
  width: number;
}>`
  width: ${({ width }) => `${width}%`};
  justify-content: center;
  align-items: flex-start;
  padding-right: 20px;
`;

const RowText = styled(Base)`
  font-size: ${({ theme }) => theme.sectionRowTextFontSize}px;
  color: ${({ theme }) => theme.sectionRowTextFontColor};
  ${() => getFontFamilyAndWeight("Whitney", "300")}
`;

const RowTitle = styled(Base)`
  font-size: ${({ theme }) => theme.sectionRowTextFontSize}px;
  color: ${({ theme }) => theme.sectionRowTextFontColor};
  margin-right: 5px;
  ${() => getFontFamilyAndWeight("Whitney", "bold")}
`;

const RowTitleAndMoreInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 999;
`;

const RowDescriptionContainer = styled(Base)`
  padding-top: 3px;
`;

const RowContainer = styled.View<{
  zIndex: number;
  isSeparatorVisible: boolean;
}>`
  width: 100%;
  padding-top: 7px;
  padding-bottom: 9px;
  align-items: flex-start;
  align-self: stretch;
  flex-direction: row;
  z-index: ${({ zIndex }) => zIndex};
  ${({ isSeparatorVisible, theme }) =>
    isSeparatorVisible &&
    `
      border-bottom-width: ${theme.sectionTableBorderWidth}px;
      border-bottom-color: ${theme.sectionTableBorderColor};
    `}
`;

export interface SectionRow {
  id: string;
  title?: string;
  moreInfo?: {
    text: MessageDescriptor;
    popoverWidth: number;
    popoverHeight?: number;
    popoverLeft?: number;
  } | null;
  description?: string;
  titleCell?: React.ReactElement;
  columnCells: { [key: string]: string | React.ReactElement };
}

interface RowCellProps {
  value: string | React.ReactElement;
  rowTextStyle?: TextStyle;
}

const RowCell: React.FC<RowCellProps> = ({
  value,
  rowTextStyle = {},
}: RowCellProps) => {
  const isString = typeof value === "string";
  return (
    <>{isString ? <RowText style={rowTextStyle}>{value}</RowText> : value}</>
  );
};

export interface SectionRowViewProps {
  zIndex: number;
  row: SectionRow;
  columns: MessageDescriptor[];
  titleCellWidthPercentage: number;
  isEditable: boolean;
  contentStyle?: ContentStyle;
  editMenuOptions?: EditMenuOption[];
  isSeparatorVisible?: boolean;
  onEditMenuButtonClick?: (
    selectedOption: EditMenuOption,
    row: SectionRow
  ) => void;
}

export const SectionRowView: React.FC<SectionRowViewProps> = ({
  zIndex,
  row,
  columns,
  titleCellWidthPercentage,
  contentStyle = {},
  isEditable,
  editMenuOptions,
  isSeparatorVisible = true,
  onEditMenuButtonClick,
}: SectionRowViewProps) => {
  /**
   * Cell widths will be mapped to %
   * If table is Editable, we want to leave 5% space for Edit Menu
   */
  const cellWidth =
    (100 - titleCellWidthPercentage - (isEditable ? 5 : 0)) / columns.length;
  const { title, description, moreInfo, titleCell, columnCells } = row;
  const { title: titleStyle = {}, columns: columnsStyle = {} } = contentStyle;
  const intl = useIntl();
  return (
    <RowContainer
      testID={"row-container"}
      isSeparatorVisible={isSeparatorVisible}
      zIndex={zIndex}
    >
      <RowCellContainer
        testID={"title-cell-container"}
        width={titleCellWidthPercentage}
      >
        {title && (
          <RowTitleAndMoreInfoContainer>
            <RowTitle style={titleStyle}>{title}</RowTitle>
            {moreInfo ? (
              <Tooltip
                popoverWidth={moreInfo.popoverWidth}
                popoverHeight={moreInfo.popoverHeight}
                popoverContent={moreInfo.text}
                popoverLeft={moreInfo.popoverLeft}
              />
            ) : null}
          </RowTitleAndMoreInfoContainer>
        )}
        {description && (
          <RowDescriptionContainer>
            <ShowMoreText value={description} />
          </RowDescriptionContainer>
        )}
        {titleCell ? titleCell : null}
      </RowCellContainer>
      {columns.map((column: MessageDescriptor) => {
        return (
          <RowCellContainer
            testID={`column${column.id}-cell-container`}
            key={column.id}
            width={cellWidth}
          >
            <RowCell
              rowTextStyle={columnsStyle}
              value={columnCells[intl.formatMessage(column)]}
            />
          </RowCellContainer>
        );
      })}
      {isEditable ? (
        <EditMenu
          onSelect={(selectedOption: EditMenuOption) => {
            onEditMenuButtonClick && onEditMenuButtonClick(selectedOption, row);
          }}
          options={editMenuOptions}
        />
      ) : null}
    </RowContainer>
  );
};
