import * as React from "react";
import { VirtaClient } from "@virtahealth/components";
import { toastMessages } from "../messages";
import { LabDataEntryContext, RESET } from "../LabDataEntryContext";
import {
  transformFormToDiagnosticReport,
  validateDiagnosticReport,
} from "../common/transformDiagnosticReport";
import { Patient } from "../../PatientLookup";
import { LabDataExperienceType, ToastContent } from "..";
import { LabResultForm } from "../common/LabResultForm";

export const CreateForm: React.FC<{
  client: VirtaClient;
  patient: Patient;
  setCurrentView: (view: LabDataExperienceType) => void;
  setToastContent: (content: ToastContent) => void;
}> = ({ client, patient, setCurrentView, setToastContent }) => {
  const { labDataEntryState, dispatch } = React.useContext(LabDataEntryContext);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSave = async (redirectAfterSave = true) => {
    const result = validateDiagnosticReport(labDataEntryState);
    if (!result.isValid) {
      setToastContent({
        type: "error",
        message: toastMessages.invalidFormValuesError,
        errorDetails: `Error(s): ${result.errors.join(",\n")}`,
      });
      return;
    }
    const { diagnosticReport, unansweredQuestions } =
      transformFormToDiagnosticReport({
        ...labDataEntryState,
        virtaId: patient.virta_id,
      });

    if (!diagnosticReport) {
      setToastContent({
        type: "error",
        message: toastMessages.invalidFormValuesError,
      });
      return;
    }

    if (unansweredQuestions && unansweredQuestions.length) {
      const fieldNames = unansweredQuestions
        .map((question) => question.text)
        .join(unansweredQuestions.length > 20 ? ", " : "\n");
      const confirmed = window.confirm(
        `The following lab field(s) are missing for this patient. To continue saving, click "OK":\n\n${fieldNames}`
      );
      if (!confirmed) {
        return;
      }
    }
    setIsSubmitting(true);
    try {
      await client.post("/labs/lab_results", {
        lab_result: diagnosticReport,
      });
      setIsSubmitting(false);
      setToastContent({
        type: "success",
        message: toastMessages.saveSuccess,
      });
      clearForm();
      if (redirectAfterSave) {
        setCurrentView(LabDataExperienceType.Index);
      }
    } catch (err: any) {
      setToastContent({
        type: "error",
        message: toastMessages.saveError,
        errorDetails: `Error: ${err.status} ${err.statusText}`,
      });
      setIsSubmitting(false);
    }
  };

  const clearForm = () => {
    dispatch({ actionType: RESET });
  };

  const onCancel = () => {
    clearForm();
    setCurrentView(LabDataExperienceType.Index);
  };

  return (
    <LabResultForm
      labDataEntryState={labDataEntryState}
      dispatch={dispatch}
      onSave={onSave}
      onCancel={onCancel}
      isSubmitting={isSubmitting}
      showSaveAndStartNew={true}
    />
  );
};
