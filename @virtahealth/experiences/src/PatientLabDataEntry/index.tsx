import * as React from "react";
import {
  Base,
  Button,
  Row,
  Spacer,
  styled,
  Toast,
  VirtaClient,
  withVirta,
} from "@virtahealth/components";
import { MessageDescriptor } from "react-intl";
import { Patient } from "../PatientLookup";
import { PatientLabResults } from "../PatientLabResults";
import { CreateForm } from "./CreateForm";
import {
  LabDataEntryContext,
  LabDataEntryContextWrapper,
} from "./LabDataEntryContext";
import { EditForm } from "./EditForm";
import { labelMessages } from "./messages";
import { mapDiagnosticReportToForm } from "./common/transformDiagnosticReport";

export { GET_PRACTITIONERS_AND_ORGANIZATIONS } from "./common/LabResultForm";

export interface InnerExperienceProps {
  client?: VirtaClient;
  patient: Patient;
  currentView: LabDataExperienceType;
  setCurrentView: (view: LabDataExperienceType) => void;
  loadingIndicator?: React.ReactNode;
}

export type ExperienceProps = Omit<InnerExperienceProps, "client">;

export enum LabDataExperienceType {
  Create = "create",
  Edit = "edit",
  Index = "index",
}

const Container = styled.View`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const StyledToastText = styled(Base)`
  font-weight: bold;
  text-align: center;
  color: white;
`;

export interface ToastContent {
  type: "success" | "error";
  message: MessageDescriptor;
  errorDetails?: string;
}

const InnerPatientLabDataEntry: React.FC<InnerExperienceProps> = ({
  client,
  patient,
  loadingIndicator,
  currentView,
  setCurrentView,
}) => {
  const [showToast, setShowToast] = React.useState(false);
  const [toastContent, setToastContent] = React.useState<
    ToastContent | undefined
  >();
  React.useEffect(() => {
    if (toastContent && !showToast) {
      setShowToast(true);
    }
  }, [toastContent]);

  React.useEffect(() => {
    if (!showToast && toastContent) {
      setToastContent(undefined); // Clear the message if not showing toast anymore
    }
  }, [showToast]);

  return (
    <LabDataEntryContextWrapper>
      <Row>
        <LabDataEntryContext.Consumer>
          {({ dispatch }) => {
            if (currentView === "create") {
              return (
                <CreateForm
                  client={client!}
                  patient={patient}
                  setCurrentView={setCurrentView}
                  setToastContent={setToastContent}
                />
              );
            }
            if (currentView === "edit") {
              return (
                <EditForm
                  client={client!}
                  setCurrentView={setCurrentView}
                  setToastContent={setToastContent}
                  virtaId={patient.virta_id}
                />
              );
            }
            return (
              <Container>
                <Row justifyContent="flex-end">
                  <Button
                    intent="primary"
                    onPress={() => setCurrentView(LabDataExperienceType.Create)}
                    labelMessage={labelMessages.createResult}
                    width={180}
                    testID="create"
                  />
                </Row>
                <Spacer height={20} />
                <PatientLabResults
                  virtaId={patient.virta_id}
                  loadingIndicator={loadingIndicator}
                  onSelectDiagnosticReport={(diagnosticReport) => {
                    const transformedReport =
                      mapDiagnosticReportToForm(diagnosticReport);
                    const collectionDate =
                      diagnosticReport.effectiveDateTime ||
                      diagnosticReport.issued;
                    setCurrentView(LabDataExperienceType.Edit);
                    dispatch({
                      field: "diagnosticReport",
                      value: diagnosticReport,
                    });
                    if (collectionDate) {
                      const parsedDate = new Date(collectionDate);
                      if (!isNaN(parsedDate.getTime())) {
                        dispatch({
                          field: "collectionDate",
                          value: parsedDate,
                        });
                      }
                    }
                    dispatch({
                      field: "observationQuestionnaires",
                      value: transformedReport.observationQuestionnaires,
                    });
                    dispatch({
                      field: "observationResponses",
                      value: transformedReport.observationResponses,
                    });
                    dispatch({
                      field: "vendor",
                      value: transformedReport.vendor,
                    });
                    dispatch({
                      field: "orderingPhysician",
                      value: transformedReport.orderingPhysician,
                    });
                    dispatch({
                      field: "presentedForm",
                      value: transformedReport.attachments,
                    });
                  }}
                />
              </Container>
            );
          }}
        </LabDataEntryContext.Consumer>
        <Toast
          isOpen={showToast}
          handleClose={() => setShowToast(false)}
          height={50}
          slideEndPosition={10}
          notificationType={toastContent?.type}
          timeoutDuration={2000}
          style={{ padding: 15 }}
        >
          <StyledToastText message={toastContent?.message} />
          <StyledToastText>{toastContent?.errorDetails}</StyledToastText>
        </Toast>
      </Row>
    </LabDataEntryContextWrapper>
  );
};

export const PatientLabDataEntry = withVirta<ExperienceProps>(
  InnerPatientLabDataEntry
);
