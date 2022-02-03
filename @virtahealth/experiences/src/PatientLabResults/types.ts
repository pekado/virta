import { VirtaObservation } from "@virtahealth/components";

export interface ObservationData {
  observationName: string;
  codes: string[];
  referenceRange?: fhir.ObservationReferenceRange;
}

export interface Panel {
  name: string;
  panelResults: PanelResult[];
  observationCodes: ObservationData[];
}

export interface PanelResult {
  id: string;
  diagnosticReportId: string;
  collectionDate: string;
  transcribed: boolean;
  virtaOrdered: boolean;
  observations: { [key: string]: VirtaObservation };
  attachments?: fhir.Attachment[];
}

export interface LabPanelData {
  corePanels: Panel[];
  otherPanels: Panel[];
}

export enum ResultViewOptions {
  All = "All results",
  MostRecent = "Most recent results",
}
