import * as React from "react";
import { Attachment, VirtaDiagnosticReport } from "@virtahealth/components";

export interface LabDataEntryState {
  diagnosticReport?: VirtaDiagnosticReport;
  collectionDate?: Date;
  observationQuestionnaires: any[];
  observationResponses: any[];
  vendor?: fhir.Organization;
  orderingPhysician?: fhir.Practitioner;
  presentedForm?: Attachment[];
  removedAttachments?: Attachment[];
}

// TODO - this should have a type
const initialState = {
  collectionDate: null,
  observationQuestionnaires: [],
  observationResponses: [],
  vendor: null,
  orderingPhysician: null,
  presentedForm: null,
  removedAttachments: null,
};

export const RESET = "RESET";

type LabDataEntryActionTypes = typeof RESET;

export type LabDataEntryDispatchAction =
  | { field: string; value: any }
  | { actionType: LabDataEntryActionTypes };

// TODO - fix action type
function reducer(state: LabDataEntryState, action: any) {
  const { field, value, actionType } = action;

  if (actionType === RESET) {
    return initialState;
  }

  return {
    ...state,
    [field]: value,
  };
}

export const LabDataEntryContext = React.createContext(
  {} as {
    labDataEntryState: LabDataEntryState;
    dispatch: React.Dispatch<LabDataEntryDispatchAction>;
  }
);

export const LabDataEntryContextWrapper: React.FC = ({ children }) => {
  // @ts-ignore - type useReducer
  const [labDataEntryState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <LabDataEntryContext.Provider value={{ labDataEntryState, dispatch }}>
      {children}
    </LabDataEntryContext.Provider>
  );
};
