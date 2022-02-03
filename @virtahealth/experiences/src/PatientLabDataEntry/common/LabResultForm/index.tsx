import * as React from "react";
import { View } from "react-native";
import {
  Attachment,
  DateInput,
  Row,
  Spacer,
  styled,
} from "@virtahealth/components";
import { formatDate, gql, parseDate, useQuery } from "@virtahealth/utils";
import { FormWrapper, SectionHeading, StyledButton, StyledLabel } from "..";
import { headingMessages, labelMessages } from "../../messages";
import {
  LabDataEntryDispatchAction,
  LabDataEntryState,
} from "../../LabDataEntryContext";
import { FileUploadSection } from "./FileUploadSection";
import { ObservationChooser } from "./ObservationChooser";
import { VendorSelector } from "./VendorSelector";
import { OrderingPhysicianSelector } from "./OrderingPhysicianSelector";

const FileSectionWrapper = styled.View`
  flex: 1;
  min-width: 300px;
`;

const QuestionnaireWrapper = styled.View`
  flex: 2;
  min-width: 600px;
  margin-right: 24px;
`;

const Container = styled.View`
  flex-direction: column;
  width: 100%;
`;

const ZIndexWrapper = styled.View`
  z-index: -1;
`;

export const GET_PRACTITIONERS_AND_ORGANIZATIONS = gql`
  query FetchPractitionersAndOrganizations {
    practitioners {
      active
      name {
        text
        family
        given
      }
      id
      identifier {
        value
        system
      }
    }

    organizations(
      typeSystem: "https://www.healthgorilla.com/facility-type"
      typeValue: "DiagnosticLaboratories"
    ) {
      id
      name
    }
  }
`;

interface LabResultFormProps {
  labDataEntryState: LabDataEntryState;
  dispatch: (action: LabDataEntryDispatchAction) => void;
  // TODO - fix type
  onSave: (redirectAfterSave?: any) => void;
  onCancel: () => void;
  isSubmitting: boolean;
  showSaveAndStartNew?: boolean;
}

export const LabResultForm: React.FC<LabResultFormProps> = ({
  labDataEntryState,
  dispatch,
  onSave,
  onCancel,
  isSubmitting,
  showSaveAndStartNew = false,
}) => {
  // TODO - figure out this type
  const handleChangeText = (value: any) => {
    if (value.length === 10) {
      const dateValue = parseDate(value, "MM/dd/yyyy", new Date());

      if (!isNaN(dateValue.getTime())) {
        dispatch({
          field: "collectionDate",
          value: dateValue,
        });
      }
    }
  };

  const setObservationQuestionnaires = (
    questionnaires: fhir.Questionnaire[]
  ) => {
    dispatch({
      field: "observationQuestionnaires",
      value: questionnaires,
    });
  };

  const setObservationResponses = (responses: fhir.QuestionnaireResponse[]) => {
    dispatch({ field: "observationResponses", value: responses });
  };

  const setAttachments = (presentedForm?: Attachment[]) => {
    dispatch({ field: "presentedForm", value: presentedForm });
  };

  const setRemovedAttachments = (removedAttachments?: Attachment[]) => {
    dispatch({ field: "removedAttachments", value: removedAttachments });
  };

  const setVendor = (value?: fhir.Organization) => {
    dispatch({ field: "vendor", value });
  };

  const setOrderingPhysician = (value?: fhir.Practitioner) => {
    dispatch({ field: "orderingPhysician", value });
  };

  const { data } = useQuery(GET_PRACTITIONERS_AND_ORGANIZATIONS);

  return (
    <Container>
      <FormWrapper>
        <QuestionnaireWrapper>
          <View>
            <SectionHeading message={headingMessages.resultSetMessage} />
            <Spacer height={32} />
            <VendorSelector
              setVendor={setVendor}
              vendor={labDataEntryState.vendor}
              organizations={data?.organizations}
            />
            <Spacer height={32} />
            <Row>
              <View>
                <StyledLabel message={labelMessages.collectionDate} />
                <DateInput
                  onChangeText={handleChangeText}
                  value={
                    labDataEntryState.collectionDate
                      ? formatDate(
                          labDataEntryState.collectionDate,
                          "MM/dd/yyyy"
                        )
                      : undefined
                  }
                  testID="collectionDate"
                />
              </View>
              <Spacer width={30} />
              <OrderingPhysicianSelector
                orderingPhysician={labDataEntryState.orderingPhysician}
                setOrderingPhysician={setOrderingPhysician}
                physicianOptions={data?.practitioners}
              />
            </Row>
          </View>
          <Spacer height={32} />
          <ZIndexWrapper>
            <ObservationChooser
              observationQuestionnaires={
                labDataEntryState.observationQuestionnaires
              }
              setObservationQuestionnaires={setObservationQuestionnaires}
              observationResponses={labDataEntryState.observationResponses}
              setObservationResponses={setObservationResponses}
            />
          </ZIndexWrapper>
        </QuestionnaireWrapper>
        <FileSectionWrapper>
          <FileUploadSection
            attachments={labDataEntryState.presentedForm}
            removedAttachments={labDataEntryState.removedAttachments}
            setAttachments={setAttachments}
            setRemovedAttachments={setRemovedAttachments}
          />
        </FileSectionWrapper>
      </FormWrapper>
      <ZIndexWrapper>
        <Row justifyContent="flex-end">
          <StyledButton
            intent="secondary"
            appearance="minimal"
            disabled={isSubmitting}
            onPress={onCancel}
            labelMessage={labelMessages.cancel}
            testID="cancel"
          />
          {labDataEntryState.observationQuestionnaires.length > 0 && (
            <>
              {showSaveAndStartNew && (
                <>
                  <Spacer width={12} />
                  <StyledButton
                    intent="secondary"
                    appearance="outline"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    onPress={() => onSave(false)}
                    labelMessage={labelMessages.saveAndStartNew}
                    testID="saveAndStartNew"
                  />
                </>
              )}
              <Spacer width={12} />
              <StyledButton
                intent="secondary"
                disabled={isSubmitting}
                loading={isSubmitting}
                onPress={onSave}
                labelMessage={labelMessages.save}
                testID="save"
              />
            </>
          )}
        </Row>
      </ZIndexWrapper>
    </Container>
  );
};
