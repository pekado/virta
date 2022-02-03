import {
  VirtaDiagnosticReport,
  VirtaObservation,
} from "@virtahealth/components";
import { cloneDeep, formatDate } from "@virtahealth/utils";
import { LabPanelData, ObservationData, Panel, PanelResult } from "./types";
import {
  getPanelNameForOverlappingLipidObservations,
  hasLipidsPanelResults,
} from "./helpers";
import {
  albuminCreatininePanelObservationCodes,
  cPeptidePanelObservationCodes,
  hbA1cObservationCodes,
  lipidNmrPanelObservationCodes,
  lipidPanelObservationCodes,
  codeToCorePanelMap,
  metabolicPanelObservationCodes,
  SUPPORTED_VALUE_TYPES,
  LIPID_OR_LIPID_NMR_PANEL,
  HBA1C_PANEL_NAME,
  METABOLIC_PANEL_NAME,
  LIPID_PANEL_NAME,
  LIPID_NMR_PANEL_NAME,
  ALBUMIN_CREATININE_PANEL_NAME,
  C_PEPTIDE_PANEL_NAME,
  LIPID_OR_CLINICAL_TRIAL_PANEL,
} from "./constants";

export const buildStructuredPanels = (
  diagnosticReports: VirtaDiagnosticReport[]
) => {
  if (diagnosticReports.length === 0) {
    return { corePanels: [], otherPanels: [] };
  }
  const structuredPanels: LabPanelData = {
    corePanels: cloneDeep(initializedCoreLabs),
    otherPanels: [],
  };
  diagnosticReports.forEach((diagnosticReport) => {
    const collectionDate =
      diagnosticReport.effectiveDateTime || diagnosticReport.issued;
    if (!collectionDate) {
      return;
    }
    const diagnosticReportId = diagnosticReport.id!;
    const transcribed = isTranscribed(diagnosticReport);
    const virtaOrdered = isVirtaOrdered(diagnosticReport, transcribed);
    const attachments = diagnosticReport.presentedForm;
    diagnosticReport.result.forEach((result) => {
      let hasCorePanelObservations = false;
      if (result.related) {
        for (const relatedResult of result.related) {
          const relatedResultCode =
            relatedResult.code.coding && relatedResult.code.coding[0].code;
          // If it's a result from a core panel

          if (
            relatedResultCode &&
            codeToCorePanelMap[
              relatedResultCode as keyof typeof codeToCorePanelMap
            ]
          ) {
            let panelName =
              codeToCorePanelMap[
                relatedResultCode as keyof typeof codeToCorePanelMap
              ];
            if (
              codeToCorePanelMap[
                relatedResultCode as keyof typeof codeToCorePanelMap
              ] === LIPID_OR_CLINICAL_TRIAL_PANEL
            ) {
              // determine if it's lipid panel or clinical trial panel
              if (hasLipidsPanelResults(result.related!)) {
                panelName = LIPID_PANEL_NAME;
              } else {
                // break if other observations are not part of lipid panel
                break;
              }
            }
            hasCorePanelObservations = true;
            const foundPanel = structuredPanels.corePanels.findIndex(
              (corePanel) => {
                if (panelName === LIPID_OR_LIPID_NMR_PANEL) {
                  return (
                    corePanel.name ===
                    getPanelNameForOverlappingLipidObservations(result.related!)
                  );
                }
                return corePanel.name === panelName;
              }
            );

            // Check if we have already added this PanelResult
            const foundPanelResult = structuredPanels.corePanels[
              foundPanel
            ].panelResults.findIndex(
              (existingPanelResult) => existingPanelResult.id === result.id
            );
            if (foundPanelResult === -1) {
              // Only add panel result if not found
              // as this creation will handle all related results
              const panelResult = createPanelResultFromResult(
                result,
                collectionDate,
                diagnosticReportId,
                transcribed,
                virtaOrdered,
                attachments
              );
              structuredPanels.corePanels[foundPanel].panelResults.push(
                panelResult
              );
            } else {
              // Since createPanelResultFromResult handles all
              // related results for a panel result,
              // we can just break the loop early
              break;
            }
          }
        }

        if (!hasCorePanelObservations) {
          const foundPanel = structuredPanels.otherPanels.findIndex(
            (panel) => panel.name === result.code.text
          );
          if (foundPanel === -1) {
            // add the panel to otherPanels
            structuredPanels.otherPanels.push(
              createPanelFromResult(
                result,
                collectionDate,
                diagnosticReportId,
                transcribed,
                virtaOrdered,
                attachments
              )
            );
          } else {
            mergeResult(
              structuredPanels.otherPanels[foundPanel],
              result,
              collectionDate,
              diagnosticReportId,
              transcribed,
              virtaOrdered,
              attachments
            );
          }
        }
      }
    });
  });

  structuredPanels.corePanels.forEach((corePanel) =>
    corePanel.panelResults.sort(sortPanelResultsByDate)
  );

  structuredPanels.otherPanels.forEach((otherPanel) =>
    otherPanel.panelResults.sort(sortPanelResultsByDate)
  );

  return structuredPanels;
};

// Sort panel results (desc date)
export const sortPanelResultsByDate = (a: PanelResult, b: PanelResult) => {
  const dateA = new Date(a.collectionDate);
  const dateB = new Date(b.collectionDate);
  if (dateA < dateB) {
    return 1;
  }
  if (dateA > dateB) {
    return -1;
  }
  return 0;
};

const initializedCoreLabs: Panel[] = [
  {
    name: HBA1C_PANEL_NAME,
    observationCodes: hbA1cObservationCodes,
    panelResults: [],
  },
  {
    name: METABOLIC_PANEL_NAME,
    observationCodes: metabolicPanelObservationCodes,
    panelResults: [],
  },
  {
    name: LIPID_PANEL_NAME,
    observationCodes: lipidPanelObservationCodes,
    panelResults: [],
  },
  {
    name: LIPID_NMR_PANEL_NAME,
    observationCodes: lipidNmrPanelObservationCodes,
    panelResults: [],
  },
  {
    name: ALBUMIN_CREATININE_PANEL_NAME,
    observationCodes: albuminCreatininePanelObservationCodes,
    panelResults: [],
  },
  {
    name: C_PEPTIDE_PANEL_NAME,
    observationCodes: cPeptidePanelObservationCodes,
    panelResults: [],
  },
];

// This is to help simplify accessing the value to display in the tables
function addValue(observation: fhir.Observation): VirtaObservation {
  let value;
  let unit;
  SUPPORTED_VALUE_TYPES.forEach((valueType) => {
    if (observation[valueType as keyof typeof observation]) {
      value =
        valueType === "valueQuantity"
          ? observation[valueType]!.value
          : observation[valueType as keyof typeof observation];

      // @ts-ignore - fix types
      unit = observation[valueType as keyof typeof observation]?.unit;
    }
  });

  return Object.assign(observation, { value, unit, related: undefined });
}

function createPanelResultFromResult(
  result: VirtaObservation,
  collectionDate: string,
  diagnosticReportId: string,
  transcribed: boolean,
  virtaOrdered: boolean,
  attachments?: fhir.Attachment[]
): PanelResult {
  return {
    id: result.id!,
    diagnosticReportId: diagnosticReportId,
    collectionDate: collectionDate,
    transcribed: transcribed,
    virtaOrdered: virtaOrdered,
    observations:
      result.related?.reduce((observationResult, currentObservation) => {
        const observationCode = getCode(currentObservation);
        if (!observationCode) {
          return observationResult;
        }
        return {
          ...observationResult,
          [observationCode]: addValue(currentObservation),
        };
      }, {}) || {},
    attachments: attachments,
  };
}

function createPanelFromResult(
  result: VirtaObservation,
  collectionDate: string,
  diagnosticReportId: string,
  transcribed: boolean,
  virtaOrdered: boolean,
  attachments?: fhir.Attachment[]
): Panel {
  const panelResult = createPanelResultFromResult(
    result,
    collectionDate,
    diagnosticReportId,
    transcribed,
    virtaOrdered,
    attachments
  );
  return {
    name: result.code.text!,
    panelResults: [panelResult],
    // @ts-ignore - fix types
    observationCodes:
      // @ts-ignore - fix types
      result.related?.reduce((acc, observation) => {
        const code = getCode(observation);
        if (!code) {
          return acc;
        }
        return [
          ...acc,
          {
            observationName: observation.code.text,
            codes: [code],
          } as ObservationData,
        ];
      }, []) || [], // Default to empty array as there isn't support for single level observations
  };
}

function isTranscribed(diagnosticReport: { identifier?: fhir.Identifier[] }) {
  if (diagnosticReport.identifier) {
    const identifiers = diagnosticReport.identifier.filter(
      (identifier) => identifier.system !== "SalesForce"
    );
    return identifiers.length === 0;
  } else {
    return true;
  }
}

function isVirtaOrdered(
  diagnosticReport: {
    code: fhir.CodeableConcept;
    contained?: fhir.Resource[];
  },
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isTranscribedResult: boolean = false
) {
  if (diagnosticReport.contained) {
    const practitionerRef = diagnosticReport.contained.findIndex(
      // @ts-ignore - fix types
      (resource: fhir.RequestGroup) =>
        resource.resourceType === "RequestGroup" &&
        resource.author?.reference?.includes("Practitioner")
    );
    if (practitionerRef > -1) {
      return true;
    }
  }
  if (isTranscribedResult && !diagnosticReport.contained) {
    // if it is a transcribed result and there is no contained resource,
    // then it is not ordered by a Virta provider, so return false
    return false;
  }
  if (diagnosticReport.code?.text?.toLowerCase() === "imported result") {
    return false;
  }
  return true;
}

function getCode(observation: fhir.Observation): string | null {
  if (observation.code.coding && observation.code.coding[0]) {
    return observation.code.coding[0].code || null;
  }
  return null;
}

function mergeResult(
  panel: Panel,
  result: VirtaObservation,
  collectionDate: string,
  diagnosticReportId: string,
  transcribed: boolean,
  virtaOrdered: boolean,
  attachments?: fhir.Attachment[]
) {
  const panelResult = createPanelResultFromResult(
    result,
    collectionDate,
    diagnosticReportId,
    transcribed,
    virtaOrdered,
    attachments
  );
  panel.panelResults.push(panelResult);

  result.related?.forEach((observation, idx) => {
    const observationLoinc = getCode(observation);
    if (!observationLoinc) {
      return;
    }
    if (
      panel.observationCodes.findIndex((obsData) =>
        obsData.codes.includes(observationLoinc)
      ) === -1
    ) {
      panel.observationCodes.splice(idx, 0, {
        // @ts-ignore - fix types
        observationName: observation.code.text,
        codes: [observationLoinc],
      });
    }
  });
  return panel;
}

export const collectFileAttachments = (
  diagnosticReports: VirtaDiagnosticReport[]
): { [date: string]: fhir.Attachment[] } => {
  return diagnosticReports.reduce<{ [key: string]: fhir.Attachment[] }>(
    (filesByDate, report) => {
      if (!report.presentedForm) {
        return filesByDate;
      }

      let rawDate;
      if (report.effectiveDateTime) {
        rawDate = report.effectiveDateTime;
      } else if (report.issued) {
        rawDate = report.issued;
      }

      const mapKey = rawDate
        ? formatDate(new Date(rawDate), "MM/dd/yyyy")
        : "Unknown";

      if (!filesByDate[mapKey]) {
        return { ...filesByDate, [mapKey]: report.presentedForm };
      }

      filesByDate[mapKey] = [...filesByDate[mapKey], ...report.presentedForm];
      return filesByDate;
    },
    {}
  );
};
