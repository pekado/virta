import * as React from "react";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import {
  Base,
  Divider,
  Heading4,
  HelperText,
  Interpose,
  PriorityIndicator,
  Spacer,
  styled,
  Table,
  TableCell,
  TableRow,
  VirtaClient,
  withVirta,
} from "@virtahealth/components";
import {
  BiomarkerObservation,
  capitalize,
  compact,
  differenceInYears,
  endOfDay,
  formatDate,
  formatDistanceToNow,
  getAvgBiomarkerObservationValue,
  getBiomarkersInDateRange,
  getMostRecentBiomarker,
  gql,
  isEmpty,
  isWindowSm,
  isWindowMd,
  parseISO,
  startCase,
  startOfDay,
  subWeeks,
  useQuery,
} from "@virtahealth/utils";

export const GET_PATIENT_OVERVIEW_AND_OBSERVATIONS = gql`
  query PatientOverviewAndObservations(
    $id: ID!
    $start: String!
    $end: String!
  ) {
    user(id: $id) {
      id
      baselineA1c {
        value {
          value
        }
        effective
      }
      dob
      eA1c {
        status
        upper
        lower
        estimatedValue
      }
      gender
      lastAppSession
      summaryStatementFreetext
      glucoseObservations(start: $start, end: $end) {
        effective
        value {
          value
        }
      }
      ketonesObservations(start: $start, end: $end) {
        effective
        value {
          value
        }
      }
      weightObservations(start: $start, end: $end) {
        effective
        value {
          value
        }
      }
      screeners {
        completedOn
      }
    }
  }
`;

interface EstimatedA1C {
  status: string;
  lower: string;
  upper: string;
  estimatedValue: string;
}

interface Screener {
  completedOn: string;
}

interface Patient {
  baselineA1c: BiomarkerObservation;
  dob: string;
  eA1c: EstimatedA1C;
  gender: string;
  lastAppSession: string;
  summaryStatementFreetext: string;
  glucoseObservations: BiomarkerObservation[];
  ketonesObservations: BiomarkerObservation[];
  weightObservations: BiomarkerObservation[];
  screeners: Screener[];
}

interface CardProps {
  isMobile: boolean;
}

const OverviewCard = styled.View<CardProps>`
  background-color: ${({ isMobile, theme }) =>
    isMobile ? "transparent" : theme.tableRowShadedColor};
  border-color: ${({ isMobile, theme }) =>
    isMobile ? "transparent" : theme.tableRowBorderColor};
  border-width: ${({ isMobile, theme }) =>
    isMobile ? 0 : theme.tableRowBorderBottomWidth}px;
  padding: ${({ isMobile }) => (isMobile ? 0 : 8)}px;
  height: fit-content;
  max-width: 165px;
  margin-right: ${({ isMobile }) => (isMobile ? 0 : 8)}px;
`;

const OverviewItemHeader = styled(HelperText)`
  padding-bottom: 4px;
`;

const Overview = styled.View`
  margin: 8px;
`;

const SmallerBase = styled(Base)`
  font-size: 16px;
  line-height: 16px;
`;

const SummaryStatementBlock = styled(Base)`
  margin: 8px 8px 16px 8px;
`;

const SummaryStatementLabel = styled(Base)`
  font-weight: 600;
`;

const SummaryStatementText = styled(Base)`
  font-weight: 400;
`;

interface ObservationItemProps {
  isMobile: boolean;
}

const ObservationItem = styled.View<ObservationItemProps>`
  margin: ${({ isMobile }) => (isMobile ? "8px 4px" : 0)};
`;

const SubText = styled(HelperText)`
  padding-top: 4px;
`;

// Assumes all date values are already in UTC time
// This method adds the Z to indicate Zulu timezone if it isn't present in the date string
const getISODate = (dateStr: string): string => {
  if (dateStr.indexOf("Z") === -1) {
    return `${dateStr}Z`;
  }
  return dateStr;
};

const roundTo = (value: number, factor: 1 | 10 | 100 | 1000): number =>
  Math.round(value * factor) / factor;

interface RoundingFunction {
  (value: number): number;
}
const roundToWhole: RoundingFunction = (value) => roundTo(value, 1);
const roundToTenth: RoundingFunction = (value) => roundTo(value, 10);
const roundToHundredth: RoundingFunction = (value) => roundTo(value, 100);
const roundToThousandth: RoundingFunction = (value) => roundTo(value, 1000);

const roundingFnMap = {
  ketones: {
    lastReading: roundToHundredth,
    avg: roundToHundredth,
    diff: roundToThousandth,
  },
  weight: {
    lastReading: roundToWhole,
    avg: roundToWhole,
    diff: roundToTenth,
  },
  glucose: {
    lastReading: roundToWhole,
    avg: roundToWhole,
    diff: roundToTenth,
  },
  a1c: roundToTenth,
};

interface BiomarkerReadingProps {
  value?: string | null;
  unit: string;
}
const BiomarkerReading: React.FC<BiomarkerReadingProps> = ({ value, unit }) => (
  <EmphasizedBase>
    {value ?? "-"}
    <SmallerBase>{value ? ` ${unit}` : null}</SmallerBase>
  </EmphasizedBase>
);

const AvgBiomarkerReading: React.FC<{
  unit: string;
  biomarkerReadings: BiomarkerObservation[];
  roundingFn: RoundingFunction;
}> = ({ unit, biomarkerReadings, roundingFn }) => {
  const numReadings = biomarkerReadings.length;
  if (numReadings) {
    const avgVal = getAvgBiomarkerObservationValue(biomarkerReadings);
    return (
      <>
        <BiomarkerReading value={`${roundingFn(avgVal)}`} unit={unit} />
        <SubText>
          {`${numReadings} Reading${numReadings === 1 ? "" : "s"}`}
        </SubText>
      </>
    );
  }
  return <BiomarkerReading unit={unit} />;
};

const AvgBiomarkerReadingDiff: React.FC<{
  prevBiomarkerReadings: BiomarkerObservation[];
  currBiomarkerReadings: BiomarkerObservation[];
  unit: string;
  period: string;
  isIncreasingGood: boolean;
  roundingFn: RoundingFunction;
}> = ({
  prevBiomarkerReadings,
  currBiomarkerReadings,
  period,
  unit,
  isIncreasingGood,
  roundingFn,
}) => {
  if (
    prevBiomarkerReadings.length === 0 ||
    currBiomarkerReadings.length === 0
  ) {
    return <SmallerBase>No Data</SmallerBase>;
  } else {
    const prevAvg = getAvgBiomarkerObservationValue(prevBiomarkerReadings);
    const currAvg = getAvgBiomarkerObservationValue(currBiomarkerReadings);
    const avgDiff = currAvg - prevAvg;
    return (
      <>
        <SmallerBase>
          {avgDiff === 0 ? null : (
            <EmphasizedBase
              sentiment={
                (avgDiff > 0 && isIncreasingGood) ||
                (avgDiff < 0 && !isIncreasingGood)
                  ? "positive"
                  : "negative"
              }
            >
              {avgDiff > 0 ? "▴ " : "▾ "}
            </EmphasizedBase>
          )}
          <BiomarkerReading unit={unit} value={`${roundingFn(avgDiff)}`} />{" "}
        </SmallerBase>
        <SubText>Since Last {capitalize(period)}</SubText>
      </>
    );
  }
};

const EmphasizedBase = styled(SmallerBase)<{ sentiment?: string }>`
  color: ${({ sentiment, theme }) => {
    switch (sentiment) {
      case "positive":
        return theme.textSuccessColor;
      case "negative":
        return theme.textErrorColor;
      default:
        return theme.textBaseColor;
    }
  }};
  font-weight: bold;
`;

export enum EA1cStatus {
  normal = "normal",
  invalid_base_A1c = "invalid_base_A1c",
  no_estimate = "no_estimate",
  low_confidence = "low_confidence",
  below_program_days_threshold = "below_program_days_threshold",
}

const formatEstimatedA1c = (
  estimatedA1cStatus: string | undefined,
  estimatedA1cLower: number | string,
  estimatedA1cUpper: number | string,
  estimatedA1cValue: number | string
) => {
  if (
    estimatedA1cStatus === EA1cStatus.invalid_base_A1c ||
    estimatedA1cStatus === EA1cStatus.no_estimate ||
    !estimatedA1cStatus
  ) {
    return "eA1c unavailable";
  }
  if (estimatedA1cStatus === EA1cStatus.low_confidence) {
    return "Not enough data last week";
  }
  if (estimatedA1cStatus === EA1cStatus.below_program_days_threshold) {
    return "Available 80 days post registration";
  }
  return (
    <>
      <A1CText value={roundingFnMap.a1c(+estimatedA1cValue)} />{" "}
      <EmphasizedBase>
        ({roundingFnMap.a1c(+estimatedA1cLower)} -{" "}
        {roundingFnMap.a1c(+estimatedA1cUpper)})
      </EmphasizedBase>
    </>
  );
};

const A1CText: React.FC<{ value: number | string }> = ({ value }) => (
  <EmphasizedBase>{value}</EmphasizedBase>
);

const TableHeadingCell = styled(TableCell)`
  border-left-width: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
  padding-top: 0px;
`;

const TableHeadingCellLarge = styled(TableHeadingCell)`
  min-width: 150px;
`;

const TableHeadingCellMedium = styled(TableHeadingCell)`
  min-width: 100px;
`;

const TableHeadingCellSmall = styled(TableHeadingCell)`
  min-width: 75px;
`;

const TableCellWithoutVerticalBorderLarge = styled(TableHeadingCellLarge)`
  padding-top: 6px;
`;

const TableCellWithoutVerticalBorderMedium = styled(TableHeadingCellMedium)`
  padding-top: 6px;
`;

const TableCellWithoutVerticalBorderSmall = styled(TableHeadingCellSmall)`
  padding-top: 6px;
`;

const BiomarkersTable = styled(Table)`
  border-right-width: 0px;
`;
const LastTableRow = styled(TableRow)`
  border-bottom-width: 0px;
`;

interface LayoutProps {
  patient: Patient;
}

const formatBiomarkerReadingDate = (dateString: string | null | undefined) => {
  if (dateString) {
    const isoDate = getISODate(dateString);
    dateString = dateString.toString().slice(0, 19);
    const date = parseISO(isoDate);
    return formatDate(date, "M/d/yy hh:mm aa");
  }
  return null;
};

const getFormattedSummaryStatement = (
  summaryStatement: string,
  dob: string,
  gender: string
) => {
  const formattedAge = dob ? differenceInYears(new Date(), new Date(dob)) : dob;
  const formattedSummaryStatement = compact([
    compact([formattedAge, capitalize(gender)]).join(" "),
    summaryStatement,
  ]);

  return formattedSummaryStatement ? formattedSummaryStatement.join(", ") : "";
};

interface ExperienceProps {
  id: number;
}

interface Props extends ExperienceProps {
  client?: VirtaClient;
}

export const PatientOverview: React.FC<Props> = ({ id }) => {
  const dateFormat = "yyyy-MM-dd HH:mm:ss";
  const now = new Date();
  const twoWeeksAgo = startOfDay(subWeeks(now, 2));

  const end = formatDate(endOfDay(now), dateFormat);
  const start = formatDate(twoWeeksAgo, dateFormat);
  const { loading, error, data } = useQuery(
    GET_PATIENT_OVERVIEW_AND_OBSERVATIONS,
    {
      variables: { id, start, end },
    }
  );
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <Heading4>
        Patient Details Could Not Be Retrieved. Please Try Again
      </Heading4>
    );
  }
  if (!data) {
    return null;
  }

  return <PatientOverviewLayout patient={data.user} />;
};

export const PatientOverviewLayout: React.FC<LayoutProps> = ({ patient }) => {
  const { width: screenWidth } = useWindowDimensions();
  const isMobile = isWindowSm(screenWidth) || isWindowMd(screenWidth);
  const now = new Date();
  const oneWeekAgo = startOfDay(subWeeks(now, 1));
  const twoWeeksAgo = startOfDay(subWeeks(now, 2));

  const end = endOfDay(now);
  const {
    baselineA1c,
    dob,
    eA1c,
    gender,
    lastAppSession,
    summaryStatementFreetext,
    glucoseObservations,
    ketonesObservations,
    weightObservations,
    screeners,
  } = patient;

  const mostRecentGlucoseValue =
    getMostRecentBiomarker(glucoseObservations)?.value.value;
  const mostRecentKetoneValue =
    getMostRecentBiomarker(ketonesObservations)?.value.value;
  const mostRecentWeightValue =
    getMostRecentBiomarker(weightObservations)?.value.value;
  const lastAppSessionFormatted = lastAppSession
    ? parseISO(getISODate(lastAppSession))
    : null;
  const mostRecentScreenerDate = !isEmpty(screeners)
    ? // eslint-disable-next-line prefer-spread
      Math.max.apply(
        Math,
        // @ts-ignore - TODO - fix type
        screeners.map((screener) => parseISO(getISODate(screener.completedOn)))
      )
    : null;
  const threeDaysInMillis = 1000 * 60 * 60 * 24 * 3;

  return (
    <Overview>
      <SummaryStatementBlock>
        <SummaryStatementLabel>Summary: </SummaryStatementLabel>
        <SummaryStatementText>
          {getFormattedSummaryStatement(summaryStatementFreetext, dob, gender)}
        </SummaryStatementText>
      </SummaryStatementBlock>

      <Interpose
        flexDirection={isMobile ? "column" : "row"}
        style={{ alignItems: "flex-start" }}
        with={isMobile ? <Divider direction="row" /> : <Spacer width={8} />}
      >
        <OverviewCard isMobile={isMobile}>
          <Interpose
            flexDirection={isMobile ? "row" : "column"}
            with={isMobile ? <Spacer width={0} /> : <Divider direction="row" />}
            style={{
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            <ObservationItem isMobile={isMobile}>
              <OverviewItemHeader>Estimated A1c</OverviewItemHeader>
              {eA1c ? (
                <SmallerBase>
                  {formatEstimatedA1c(
                    eA1c.status,
                    eA1c.lower,
                    eA1c.upper,
                    eA1c.estimatedValue
                  )}
                </SmallerBase>
              ) : (
                "eA1c Data Not Found"
              )}
            </ObservationItem>

            <ObservationItem isMobile={isMobile}>
              <OverviewItemHeader>Baseline A1c</OverviewItemHeader>
              <SmallerBase>
                {baselineA1c?.value?.value ? (
                  <>
                    <A1CText value={baselineA1c.value.value} /> on{" "}
                    {baselineA1c.effective
                      ? formatDate(new Date(baselineA1c.effective), "M/d/yy")
                      : "Unknown Date"}
                  </>
                ) : (
                  "No a1C data found."
                )}
              </SmallerBase>
            </ObservationItem>

            <ObservationItem isMobile={isMobile}>
              <OverviewItemHeader>Last Session</OverviewItemHeader>
              <SmallerBase>
                {lastAppSessionFormatted
                  ? startCase(
                      formatDistanceToNow(lastAppSessionFormatted, {
                        addSuffix: true,
                      })
                    )
                  : "Never"}
              </SmallerBase>
            </ObservationItem>
            <ObservationItem isMobile={isMobile}>
              <OverviewItemHeader>Last Screener</OverviewItemHeader>
              <SmallerBase>
                {
                  // @ts-ignore - fix type
                  Date.now() - mostRecentScreenerDate <= threeDaysInMillis ? (
                    <PriorityIndicator color="red" />
                  ) : null
                }
                {mostRecentScreenerDate
                  ? startCase(
                      formatDistanceToNow(mostRecentScreenerDate, {
                        addSuffix: true,
                      })
                    )
                  : "Never"}
              </SmallerBase>
            </ObservationItem>
          </Interpose>
        </OverviewCard>
        <BiomarkersTable>
          <TableRow name={"Headers"}>
            <TableHeadingCellSmall value={<HelperText>Biomarker</HelperText>} />
            <TableHeadingCellLarge
              value={<HelperText>Last Reading</HelperText>}
            />
            <TableHeadingCellMedium
              value={<HelperText>7 Day Avg</HelperText>}
            />
            <TableHeadingCellLarge
              value={<HelperText>Change From Last Week</HelperText>}
            />
          </TableRow>
          <TableRow name="Blood Glucose">
            <TableCellWithoutVerticalBorderSmall
              value={<EmphasizedBase>BG</EmphasizedBase>}
            />
            <TableCellWithoutVerticalBorderLarge
              value={
                <>
                  <BiomarkerReading
                    value={
                      mostRecentGlucoseValue
                        ? `${roundingFnMap.glucose.lastReading(
                            +mostRecentGlucoseValue
                          )}`
                        : null
                    }
                    unit={"mg/dL"}
                  />
                  <SubText>
                    {formatBiomarkerReadingDate(
                      getMostRecentBiomarker(glucoseObservations)?.effective
                    )}
                  </SubText>
                </>
              }
            />
            <TableCellWithoutVerticalBorderMedium
              value={
                <AvgBiomarkerReading
                  biomarkerReadings={getBiomarkersInDateRange(
                    glucoseObservations,
                    oneWeekAgo,
                    end
                  )}
                  unit={"mg/dL"}
                  roundingFn={roundingFnMap.glucose.lastReading}
                />
              }
            />
            <TableCellWithoutVerticalBorderLarge
              value={
                <AvgBiomarkerReadingDiff
                  prevBiomarkerReadings={getBiomarkersInDateRange(
                    glucoseObservations,
                    twoWeeksAgo,
                    oneWeekAgo
                  )}
                  currBiomarkerReadings={getBiomarkersInDateRange(
                    glucoseObservations,
                    oneWeekAgo,
                    end
                  )}
                  unit={"mg/dL"}
                  period={"week"}
                  isIncreasingGood={false}
                  roundingFn={roundingFnMap.glucose.diff}
                />
              }
            />
          </TableRow>
          <TableRow name="Ketones">
            <TableCellWithoutVerticalBorderSmall
              value={<EmphasizedBase>Ketones</EmphasizedBase>}
            />
            <TableCellWithoutVerticalBorderLarge
              value={
                <>
                  <BiomarkerReading
                    value={
                      mostRecentKetoneValue
                        ? `${roundingFnMap.ketones.lastReading(
                            +mostRecentKetoneValue
                          )}`
                        : null
                    }
                    unit={"mmol/L"}
                  />
                  <SubText>
                    {formatBiomarkerReadingDate(
                      getMostRecentBiomarker(ketonesObservations)?.effective
                    )}
                  </SubText>
                </>
              }
            />
            <TableCellWithoutVerticalBorderMedium
              value={
                <AvgBiomarkerReading
                  biomarkerReadings={getBiomarkersInDateRange(
                    ketonesObservations,
                    oneWeekAgo,
                    end
                  )}
                  unit={"mmol/L"}
                  roundingFn={roundingFnMap.ketones.avg}
                />
              }
            />
            <TableCellWithoutVerticalBorderLarge
              value={
                <AvgBiomarkerReadingDiff
                  prevBiomarkerReadings={getBiomarkersInDateRange(
                    ketonesObservations,
                    twoWeeksAgo,
                    oneWeekAgo
                  )}
                  currBiomarkerReadings={getBiomarkersInDateRange(
                    ketonesObservations,
                    oneWeekAgo,
                    end
                  )}
                  unit={"mmol/L"}
                  period={"week"}
                  isIncreasingGood={true}
                  roundingFn={roundingFnMap.ketones.diff}
                />
              }
            />
          </TableRow>
          <LastTableRow name="Weight" style={{ borderBottomWidth: 0 }}>
            <TableCellWithoutVerticalBorderSmall
              value={<EmphasizedBase>Weight</EmphasizedBase>}
            />
            <TableCellWithoutVerticalBorderLarge
              value={
                <>
                  <BiomarkerReading
                    value={
                      mostRecentWeightValue
                        ? `${roundingFnMap.weight.lastReading(
                            +mostRecentWeightValue
                          )}`
                        : null
                    }
                    unit={"lbs"}
                  />
                  <SubText>
                    {formatBiomarkerReadingDate(
                      getMostRecentBiomarker(weightObservations)?.effective
                    )}
                  </SubText>
                </>
              }
            />
            <TableCellWithoutVerticalBorderMedium
              value={
                <AvgBiomarkerReading
                  biomarkerReadings={getBiomarkersInDateRange(
                    weightObservations,
                    oneWeekAgo,
                    end
                  )}
                  unit={"lbs"}
                  roundingFn={roundingFnMap.weight.avg}
                />
              }
            />
            <TableCellWithoutVerticalBorderLarge
              value={
                <AvgBiomarkerReadingDiff
                  prevBiomarkerReadings={getBiomarkersInDateRange(
                    weightObservations,
                    twoWeeksAgo,
                    oneWeekAgo
                  )}
                  currBiomarkerReadings={getBiomarkersInDateRange(
                    weightObservations,
                    oneWeekAgo,
                    end
                  )}
                  unit={"lbs"}
                  period={"week"}
                  isIncreasingGood={false}
                  roundingFn={roundingFnMap.weight.diff}
                />
              }
            />
          </LastTableRow>
        </BiomarkersTable>
      </Interpose>
    </Overview>
  );
};

export const PatientOverviewExperience =
  withVirta<ExperienceProps>(PatientOverview);
