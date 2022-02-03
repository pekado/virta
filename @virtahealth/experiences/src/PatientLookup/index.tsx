import * as React from "react";
import { useIntl } from "react-intl";
import { Text, View } from "react-native";
import {
  DateInputField,
  ErrorText,
  Form,
  InputField,
  LabeledFormElement,
  Row,
  Spacer,
  SubmitButton,
  VirtaClient,
  withVirta,
  styled,
} from "@virtahealth/components";

import { EnrollmentAddress } from "../types";
import { copy, errors, helpers, labels } from "./messages";

export interface PatientLookupProps {
  /**
   * A React component to incidate loading, which will be displayed while fetching
   * the Patient result list. Could be removed and handled internally if loading
   * components are introduced in Atlas.
   */
  loadingIndicator?: React.ReactNode;
  /**
   * Error handler for a failed API call to Identity.
   */
  onError?: (e: Error) => void;
  /**
   * Success handler that accepts the returned Patient list from the Identity
   * API call.
   */
  setPatients: (patients: Patient[]) => void;
}

interface InnerProps extends PatientLookupProps {
  client?: VirtaClient;
}

export interface Patient {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  virta_id: string;
  primary_address?: EnrollmentAddress;
}

// TODO - rename this type
interface ValuesType {
  dob: string;
  firstName: string;
  lastName: string;
  virtaId: string;
}

const StyledButton = styled(SubmitButton)`
  width: 80px;
`;

const StyledErrorText = styled(ErrorText)`
  margin-bottom: 10px;
`;

const StyledRow = styled(Row)`
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledIdField = styled(InputField)`
  width: 50%;
`;

const StyledLabeledFormElement = styled(LabeledFormElement)`
  flex: 1;
`;

const filterPatients = (
  patients: Patient[],
  { firstName = "", lastName = "" }
) => {
  return patients.filter(
    (p) =>
      p.first_name.toLowerCase().includes(firstName.toLowerCase()) &&
      p.last_name.toLowerCase().includes(lastName.toLowerCase())
  );
};

export const InnerPatientLookup: React.FC<InnerProps> = ({
  client,
  loadingIndicator,
  onError,
  setPatients,
}) => {
  const [globalError, setGlobalError] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState(false);

  const getAndUpdatePatients = async (values: ValuesType) => {
    setIsLoading(true);
    const id = values.virtaId ? values.virtaId : values.dob;
    const endpoint = `/identity/users?identifier=${id}`;
    try {
      const patientSet = (await client!.get(endpoint)) as Patient[];
      setPatients(
        filterPatients(patientSet, {
          firstName: values.firstName,
          lastName: values.lastName,
        })
      );
      setIsLoading(false);
    } catch (e) {
      if (onError) {
        onError(e as Error);
      }
      setIsLoading(false);
    }
  };

  const intl = useIntl();

  return (
    <Form
      initialValues={
        {
          dob: "",
          firstName: "",
          lastName: "",
          virtaId: "",
        } as ValuesType
      }
      onSubmit={(values) => {
        if (!values.dob && !values.virtaId) {
          const errorStr = intl.formatMessage(errors.searchRequirement);
          setGlobalError(errorStr);
        } else {
          setGlobalError(undefined);
          getAndUpdatePatients(values);
        }
      }}
      validate={(values) => {
        const formErrors: { dob?: string } = {};
        if (values.dob && !values.virtaId && values.dob.length < 10) {
          formErrors.dob = intl.formatMessage(errors.completeDate);
        }
        return formErrors;
      }}
    >
      <StyledRow>
        <StyledLabeledFormElement
          helperText={helpers.optional}
          labelMessage={labels.firstName}
        >
          <InputField name="firstName" />
        </StyledLabeledFormElement>
        <Spacer width={30} />
        <StyledLabeledFormElement
          helperText={helpers.optional}
          labelMessage={labels.lastName}
        >
          <InputField name="lastName" />
        </StyledLabeledFormElement>
        <Spacer width={30} />
        <StyledLabeledFormElement
          helperText={helpers.dateMask}
          labelMessage={labels.dob}
        >
          <DateInputField customValueFormat={"yyyy-MM-dd"} name="dob" />
        </StyledLabeledFormElement>
      </StyledRow>
      <Spacer height={36} />
      <View>
        <Text>{intl.formatMessage(copy.or)}</Text>
      </View>
      <Spacer height={36} />
      <StyledRow>
        <StyledLabeledFormElement labelMessage={labels.virtaId}>
          <StyledIdField name="virtaId" />
        </StyledLabeledFormElement>
      </StyledRow>
      <Spacer height={36} />
      {globalError && <StyledErrorText>{globalError}</StyledErrorText>}
      <StyledButton labelMessage={labels.submitButton} intent="secondary" />
      {isLoading && (
        <View>
          <Spacer height={36} />
          {loadingIndicator}
        </View>
      )}
    </Form>
  );
};

export const PatientLookup = withVirta<PatientLookupProps>(InnerPatientLookup);
