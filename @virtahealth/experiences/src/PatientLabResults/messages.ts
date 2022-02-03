import { ResultViewOptions } from "./types";

export const messages = {
  headingMessage: {
    id: "patientLabResults.headingMessages.labResults",
    description: "The heading for the lab results table display",
    defaultMessage: "Lab Results",
  },
  virtaOrdered: {
    id: "labResults.virtaOrdered",
    description:
      "Text displayed in table column header when lab is ordered by Virta",
    defaultMessage: "Virta",
  },
  otherOrdered: {
    id: "labResults.otherOrdered",
    description:
      "Text displayed in table column header when lab is not ordered by Virta",
    defaultMessage: "Other",
  },
  noResult: {
    id: "labResults.noResult",
    description:
      "Text displayed when a result for a specific test is not available",
    defaultMessage: "—",
  },
  noResultsForPanel: {
    id: "labResults.noResultsForPanel",
    description:
      "Table row text that indicates a panel that does not have any results (shown when 'Most recent results' filter is selected)",
    defaultMessage: "No results for this panel",
  },
  noResultsForDates: {
    id: "labResults.noResultsForDates",
    description:
      "Table row text that indicates a panel that does not have results for a set of dates",
    defaultMessage: "No results for these dates",
  },
  viewAllResultsLabel: {
    id: "labResults.viewFilterSelector.all",
    description:
      "Label text for the radio button to select the option to view all lab results",
    defaultMessage: ResultViewOptions.All,
  },
  viewMostRecentResultsLabel: {
    id: "labResults.viewFilterSelector.mostRecent",
    description:
      "Label text for the radio button to select the option to view most recent results only",
    defaultMessage: ResultViewOptions.MostRecent,
  },
  mostRecentResultCellHeaderLabel: {
    id: "labResults.mostRecentResultCellHeaderLabel",
    description:
      "The label for the column that displays the most recent result",
    defaultMessage: "Result",
  },
  mostRecentLabDataCellHeaderLabel: {
    id: "mostRecentLabDataCellHeaderLabel",
    description:
      "The label for the column that displays the lab data (i.e. date, source) for the most recent result",
    defaultMessage: "Date / Source",
  },
};
