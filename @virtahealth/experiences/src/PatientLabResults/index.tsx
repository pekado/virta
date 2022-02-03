import * as React from "react";
import { View } from "react-native";
import { defineMessages } from "react-intl";
import {
  Heading4,
  OffsetValues,
  Spacer,
  VirtaClient,
  withVirta,
  VirtaDiagnosticReport,
} from "@virtahealth/components";
import { isEmpty } from "@virtahealth/utils";
import { buildStructuredPanels, collectFileAttachments } from "./utils";
import { LabPanelData } from "./types";
import { PanelDisplay } from "./PanelDisplay";
import { WrappingRow } from "./common";
import { FilesDisplay } from "./FilesDisplay";
import { LabResultsHeader } from "./LabResultsHeader";
import {
  initialDisplayValues,
  PanelDisplayChooser,
} from "./PanelDisplayChooser";
import { OTHER_PANEL_CHECKBOX_LABEL } from "./constants";

export interface PatientLabResultsProps {
  virtaId: string;
  loadingIndicator?: React.ReactNode;
  showFilesBelowResultTables?: boolean;
  popoverOffsets?: OffsetValues;
  onSelectDiagnosticReport?: (diagnosticReport: VirtaDiagnosticReport) => void;
}

interface InnerProps extends PatientLabResultsProps {
  client?: VirtaClient;
}

interface DiagnosticReports {
  [diagnosticReportId: string]: VirtaDiagnosticReport;
}

const labResultMessages = defineMessages({
  noResultsFound: {
    id: "patientLabResults.labResultMessages.noResultsFound",
    description: "The message that appears when patients have no labs",
    defaultMessage: "No lab results available",
  },
  loadingError: {
    id: "patientLabResults.labResultMessages.loadingError",
    description: "The message that appears when lab results cannot be loaded",
    defaultMessage:
      "Unable to load lab results for this patient. If this problem persists, please file a bug ticket.",
  },
  showOtherPanels: {
    id: "patientLabResults.labResultMessages.showOtherPanels",
    description:
      "The message that appears in the button that shows the non-essential panels",
    defaultMessage: "Show Other Panels",
  },
  hideOtherPanels: {
    id: "patientLabResults.labResultMessages.hideOtherPanels",
    description:
      "The message that appears in the button that hides the non-essential panels",
    defaultMessage: "Hide Other Panels",
  },
});

export const InnerPatientLabResults: React.FC<InnerProps> = ({
  client,
  virtaId,
  loadingIndicator,
  showFilesBelowResultTables = false,
  onSelectDiagnosticReport,
}) => {
  const [panels, setPanels] = React.useState<LabPanelData>({
    corePanels: [],
    otherPanels: [],
  });
  const [diagnosticReports, setDiagnosticReports] =
    React.useState<DiagnosticReports>({});
  const [files, setFiles] = React.useState<{
    [date: string]: fhir.Attachment[];
  }>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingErrorOccurred, setLoadingErrorOccurred] = React.useState(false);
  const [panelsToDisplay, setPanelsToDisplay] = React.useState<{
    [panelName: string]: boolean;
  }>(initialDisplayValues);

  const getAttachmentData = (id: string) => {
    return client!.get(`/labs/lab_result_attachment/${id}`);
  };

  const isPanelDisplayed = (panelName: string) => panelsToDisplay[panelName];

  React.useEffect(() => {
    function retrievePatientLabResults() {
      const url = `/labs/lab_results?virta_id=${virtaId}`;
      return client!
        .get<VirtaDiagnosticReport[]>(url)
        .then((labResults) => {
          setFiles(collectFileAttachments(labResults));
          const filteredResults = labResults.filter(
            (result) => result !== undefined
          );
          setDiagnosticReports(
            filteredResults.reduce<{ [key: string]: VirtaDiagnosticReport }>(
              (labResultHash, labResult) => {
                labResultHash[labResult.id!] = labResult;
                return labResultHash;
              },
              {}
            )
          );
          setPanels(buildStructuredPanels(filteredResults));
          setIsLoading(false);
        })
        .catch(() => {
          setLoadingErrorOccurred(true);
          setIsLoading(false);
        });
    }

    if (virtaId) {
      setIsLoading(true);
      retrievePatientLabResults();
    }
  }, [virtaId, client]);

  if (loadingErrorOccurred) {
    return (
      <Heading4
        testID="loading-failure"
        message={labResultMessages.loadingError}
      />
    );
  }

  if (isLoading && loadingIndicator) {
    return <>{loadingIndicator}</>;
  }

  if (isEmpty(panels.corePanels) && isEmpty(panels.otherPanels)) {
    return (
      <Heading4
        testID="no-results"
        message={labResultMessages.noResultsFound}
      />
    );
  }

  const { corePanels, otherPanels } = panels;

  return (
    <>
      <WrappingRow
        alignItems="flex-start"
        justifyContent="space-between"
        style={showFilesBelowResultTables ? { zIndex: 1 } : null}
      >
        <View style={showFilesBelowResultTables ? { width: "100%" } : null}>
          {/* Sticky Header */}
          <LabResultsHeader />
          <Spacer height={20} />
          {/* Checkbox filters */}
          <PanelDisplayChooser
            panelSelections={panelsToDisplay}
            setPanelSelections={setPanelsToDisplay}
          />
          <Spacer height={20} />
          {/* Panel Displays (Result Tables) */}
          {corePanels.map((panel) => {
            if (!isPanelDisplayed(panel.name)) {
              return;
            }

            return (
              <PanelDisplay
                key={panel.name}
                panel={panel}
                onSelectDiagnosticReport={
                  onSelectDiagnosticReport
                    ? (diagnosticReportId) => {
                        onSelectDiagnosticReport(
                          diagnosticReports[diagnosticReportId]
                        );
                      }
                    : undefined
                }
              />
            );
          })}
          {otherPanels.length > 0 &&
            panelsToDisplay[OTHER_PANEL_CHECKBOX_LABEL] &&
            otherPanels.map((panel) => {
              return (
                <PanelDisplay
                  key={panel.name}
                  panel={panel}
                  onSelectDiagnosticReport={
                    onSelectDiagnosticReport
                      ? (diagnosticReportId) => {
                          onSelectDiagnosticReport(
                            diagnosticReports[diagnosticReportId]
                          );
                        }
                      : undefined
                  }
                />
              );
            })}
        </View>
        {!showFilesBelowResultTables && (
          <FilesDisplay
            filesByDate={files}
            getAttachmentData={getAttachmentData}
          />
        )}
      </WrappingRow>

      {showFilesBelowResultTables && (
        <FilesDisplay
          filesByDate={files}
          getAttachmentData={getAttachmentData}
        />
      )}
    </>
  );
};

export const PatientLabResults = withVirta<PatientLabResultsProps>(
  InnerPatientLabResults
);
