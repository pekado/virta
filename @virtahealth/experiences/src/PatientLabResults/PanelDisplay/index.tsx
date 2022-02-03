import * as React from "react";
import { Platform, TouchableOpacity } from "react-native";
import {
  ChecklistIcon,
  Table,
  TextProps,
  styled,
  css,
  Button,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "@virtahealth/components";
import { chunk, cloneDeep, formatDate, parseISO } from "@virtahealth/utils";
import {
  StyledTableText,
  StyledTableCell,
  StyledTableRow,
  LeftTableCell,
} from "../common";
import { Panel, PanelResult } from "../types";
import { messages } from "../messages";
import { PanelRow } from "./PanelRow";
import { NoResultsRow } from "./NoResultsRow";

const isWeb = Platform.OS === "web";

interface HeaderCellProps {
  date: string;
  transcribed: boolean;
  onSelect?: () => void;
  virtaOrdered?: boolean;
}

interface LinkTextProps extends TextProps {
  disabled: boolean;
}

interface PanelDisplayProps {
  panel: Panel;
  onSelectDiagnosticReport?: (diagnosticReportId: string) => void;
}

const HeaderCell = styled(StyledTableCell)`
  border-right-width: 0px;
  align-items: flex-end;
  height: 70px;
`;

const NavHeaderCell = styled(HeaderCell)`
  max-width: 20px;
  width: 20px;
  min-width: 20px;
  position: absolute;
`;

const LeftHeaderCell = styled(LeftTableCell)`
  border-right-width: 0px;
`;

const HeaderContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTable = styled(Table)`
  ${isWeb ? "z-index: auto;" : ""}
  margin-bottom: 24px;
  align-self: flex-start;
  border-right-width: 0px;
`;

const TableName = styled(StyledTableText)`
  text-align: left;
  font-weight: bold;
`;

const BoldTableText = styled(StyledTableText)`
  font-weight: bold;
`;

const NavButton = styled(Button)`
  max-width: 24px;
  min-height: 24px;
  max-height: 24px;
  padding-left: 28px;
`;

const LinkText = styled(BoldTableText)<LinkTextProps>`
  ${({ disabled }) => {
    if (!disabled) {
      return css`
        text-decoration: underline;
        text-decoration-color: ${({ theme }) =>
          theme.textTableCellDateTimeColor};
        color: ${({ theme }) => theme.textTableCellDateTimeColor};
        font-size: 12px;
      `;
    }

    return css`
      color: ${({ theme }) => theme.textTableCellDateTimeColor};
      font-size: 12px;
    `;
  }}
`;

const HeaderCellContent: React.FC<HeaderCellProps> = ({
  date,
  transcribed,
  virtaOrdered,
  onSelect,
}) => {
  // This is probably an inappropriate mix of concerns. If we need to change it, think about restructuring the
  // component
  const isDisabled = !(onSelect && transcribed);
  const dateString = formatDate(parseISO(date), "MM/dd/yyyy");

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onSelect}
      accessible={isDisabled}
      accessibilityLabel={`${dateString} report`}
    >
      <HeaderContentWrapper>
        {transcribed && <ChecklistIcon />}
        <StyledTableText
          message={virtaOrdered ? messages.virtaOrdered : messages.otherOrdered}
        />
        <LinkText disabled={isDisabled}>{dateString}</LinkText>
      </HeaderContentWrapper>
    </TouchableOpacity>
  );
};

export const PanelDisplay: React.FC<PanelDisplayProps> = ({
  panel,
  onSelectDiagnosticReport,
}) => {
  const { panelResults } = panel;

  // TODO: THIS RULE NEEDS FIXED BUT SKIPPED FOR NOW
  /* eslint-disable react-hooks/rules-of-hooks */

  if (!panelResults.length) {
    return (
      <StyledTable>
        <StyledTableRow
          name={`${panel.name}-collection-datetimes`}
          isWeb={isWeb}
          style={{ width: "100%" }}
        >
          <LeftHeaderCell value={<TableName>{panel.name}</TableName>} />
        </StyledTableRow>
        <NoResultsRow panel={panel} />
      </StyledTable>
    );
  }
  const [paginatedResults, setPaginatedResults] = React.useState<
    PanelResult[][]
  >([]);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  const [mostRecentPanelResult, setMostRecentPanelResult] =
    React.useState<PanelResult>();
  const goToNextResultSet = () => setCurrentPageIndex(currentPageIndex + 1);
  const goToPrevResultSet = () => setCurrentPageIndex(currentPageIndex - 1);

  React.useEffect(() => {
    if (panelResults.length > 5) {
      // Going to modify array in place with `shift`, so make a copy
      const resultsList = cloneDeep(panelResults);
      const mostRecentResult = resultsList.shift();
      setMostRecentPanelResult(mostRecentResult);
      const resultSets = chunk(resultsList, 4);
      setPaginatedResults(resultSets);
    } else {
      setPaginatedResults([panelResults]);
    }
  }, []);

  /* eslint-enable react-hooks/rules-of-hooks */

  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === paginatedResults.length - 1;
  const hasMultiplePages = paginatedResults.length > 1;
  const currentResultSet = mostRecentPanelResult
    ? [mostRecentPanelResult, ...paginatedResults[currentPageIndex]]
    : paginatedResults[currentPageIndex];

  if (!currentResultSet) {
    return null;
  }

  return (
    <StyledTable>
      <StyledTableRow name={`${panel.name}-collection-datetimes`} isWeb={isWeb}>
        <LeftHeaderCell value={<TableName>{panel.name}</TableName>} />
        {hasMultiplePages && (
          <NavHeaderCell
            style={{ left: 230 }}
            value={
              <NavButton
                appearance="minimal"
                labelMessage={null}
                disabled={isFirstPage}
                iconBefore={<ArrowLeftCircle />}
                onPress={goToPrevResultSet}
              />
            }
          />
        )}
        {currentResultSet.map((result) => {
          return (
            <HeaderCell
              key={`${result.id}-header`}
              value={
                <HeaderCellContent
                  date={result.collectionDate}
                  transcribed={result.transcribed}
                  virtaOrdered={result.virtaOrdered}
                  onSelect={
                    result && onSelectDiagnosticReport
                      ? () =>
                          onSelectDiagnosticReport(result.diagnosticReportId)
                      : undefined
                  }
                />
              }
            />
          );
        })}
        {hasMultiplePages && (
          <NavHeaderCell
            style={{ right: "-20px" }}
            value={
              <NavButton
                appearance="minimal"
                labelMessage={null}
                disabled={isLastPage}
                iconBefore={<ArrowRightCircle />}
                onPress={goToNextResultSet}
              />
            }
          />
        )}
      </StyledTableRow>

      {panel.observationCodes.map((obsData, index) => {
        return (
          <PanelRow
            key={obsData.observationName}
            observationData={obsData}
            isShadedRow={index % 2 === 0}
            panelResults={currentResultSet}
          />
        );
      })}
    </StyledTable>
  );
};
