import * as React from "react";
import { VirtaObservation, VirtaClient } from "@virtahealth/components";
import { LabDataEntryContext, RESET } from "../LabDataEntryContext";
import { toastMessages } from "../messages";
import { LabDataExperienceType, ToastContent } from "..";
import { LabResultForm } from "../common/LabResultForm";
import { transformFormToDiagnosticReport } from "../common/transformDiagnosticReport";

export interface VirtaLabResult extends Omit<fhir.DiagnosticReport, "result"> {
  result: VirtaObservation[];
}

export const EditForm: React.FC<{
  client: VirtaClient;
  virtaId: string;
  setCurrentView: (view: LabDataExperienceType) => void;
  setToastContent: (content: ToastContent) => void;
}> = ({ client, setCurrentView, setToastContent, virtaId }) => {
  const { labDataEntryState, dispatch } = React.useContext(LabDataEntryContext);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const clearForm = () => {
    dispatch({ actionType: RESET });
  };

  const onSave = async () => {
    const { diagnosticReport, removedAttachments, ...rest } = labDataEntryState;
    const { diagnosticReport: updatedDiagnosticReport } =
      transformFormToDiagnosticReport({
        diagnosticReportId: diagnosticReport!.id,
        virtaId,
        ...rest,
      });

    if (!updatedDiagnosticReport) {
      setToastContent({
        type: "error",
        message: toastMessages.invalidFormValuesError,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        lab_result: updatedDiagnosticReport,
      };
      if (removedAttachments && removedAttachments.length > 0) {
        // @ts-ignore - `payload` needs a better type than object
        payload["removed_attachments"] = removedAttachments;
      }
      await client.patch(`/labs/lab_result/${diagnosticReport!.id}`, payload);

      setIsSubmitting(false);
      setToastContent({
        type: "success",
        message: toastMessages.saveSuccess,
      });
      clearForm();
      setCurrentView(LabDataExperienceType.Index);
    } catch (err: any) {
      setToastContent({
        type: "error",
        message: toastMessages.saveError,
        errorDetails: `Error: ${err.status} ${err.statusText}`,
      });
      setIsSubmitting(false);
    }
  };

  const onCancel = () => {
    clearForm();
    setCurrentView(LabDataExperienceType.Index); // Redirect to lab result tables
  };

  return (
    <LabResultForm
      labDataEntryState={labDataEntryState}
      dispatch={dispatch}
      isSubmitting={isSubmitting}
      onSave={onSave}
      onCancel={onCancel}
    />
  );
};
