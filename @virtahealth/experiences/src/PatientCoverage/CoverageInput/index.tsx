import * as React from "react";
import { useIntl } from "react-intl";
import { pick } from "lodash";
import {
  DateInputField,
  Form,
  InputField,
  LabeledFormElement,
  Row,
  Spacer,
  styled,
  SubmitButton,
  ButtonRadioInputField,
  BasicDropdownField,
} from "@virtahealth/components";
import * as Yup from "yup";
import { FormikValues } from "formik";
import {
  Patient,
  Coverage,
  StructuredPayerOption,
  getEligibilityExclusion,
  getLastName,
  getBirthDateString,
  getFirstName,
  getCoverageOrganization,
} from "../utils";
import { errors, helpers, labels } from "./messages";

export interface CoverageInputProps {
  /**
   * FHIR patient
   */
  patient: Patient;
  /**
   * FHIR coverage
   */
  coverage?: Coverage;
  /**
   * boolean
   */
  isLoading: boolean;

  isEaUser?: boolean;

  structuredPayersOptions: StructuredPayerOption[];
  structuredPayersEnabled: boolean;
}

interface InnerProps extends CoverageInputProps {
  onSubmit: (values: FormikValues) => void;
}

const genderOptions = [
  {
    value: "2",
    labelMessage: { defaultMessage: "Female", description: "Female", id: 2 },
  },
  {
    value: "1",
    labelMessage: { defaultMessage: "Male", description: "Male", id: 1 },
  },
  {
    value: "3",
    labelMessage: { defaultMessage: "Other", description: "Other", id: 3 },
  },
];

const eligibilityExclusionOptions = [
  {
    value: "Bug",
    labelMessage: { defaultMessage: "Bug", description: "Bug", id: 1 },
  },
  {
    value: "ManuallyVerified",
    labelMessage: {
      defaultMessage: "Manually Verified",
      description: "Manually Verified",
      id: 2,
    },
  },
  {
    value: "None",
    labelMessage: { defaultMessage: "None", description: "None", id: 4 },
  },
];

const StyledForm = styled(Form)`
  padding: 12px;
`;

const SectionContainer = styled.View`
  border-bottom-color: ${({ theme }) => theme.tableRowBorderColor};
  border-bottom-width: 1px;
  margin-bottom: 24px;
  width: 100%;
  z-index: 1;
`;

const StyledRow = styled(Row)`
  margin-bottom: 30px;
  width: ${(props: { width?: string }) =>
    props.width ? `${props.width}px` : "100%"};
`;

const StyledRowZIndex = styled(StyledRow)`
  z-index: 10;
`;

const StyledLabeledFormElement = styled(LabeledFormElement)`
  flex: 1;
`;

export const CoverageInput: React.FC<InnerProps> = ({
  patient,
  coverage,
  isLoading,
  onSubmit,
  isEaUser,
  structuredPayersOptions,
  structuredPayersEnabled,
}) => {
  const intl = useIntl();

  const handleSubmit = async (values: FormikValues) => {
    onSubmit(values);
  };

  const requiredErrorText = intl.formatMessage(errors.required);

  const CoverageSchema = Yup.object().shape({
    genderString: Yup.string().required(requiredErrorText),
    firstName: Yup.string().required(requiredErrorText),
    lastName: Yup.string().required(requiredErrorText),
    eligibilityExclusion: Yup.string(),
    payerOrganization: Yup.string(),
    payerDisplay: Yup.string(),
    type: Yup.object().shape({
      coding: Yup.array(
        Yup.object().shape({
          system: Yup.object().shape({ value: Yup.string() }),
          code: Yup.object().shape({ value: Yup.string() }),
        })
      ),
    }),
    subscriberId: Yup.object().shape({
      value: Yup.string().required(requiredErrorText),
    }),
    grouping: Yup.object().shape({
      group: Yup.object().shape({
        value: Yup.string(),
      }),
      plan: Yup.object().shape({
        value: Yup.string().required(requiredErrorText),
      }),
    }),
    birthDateString: Yup.string()
      .min(10, intl.formatMessage(errors.completeDate))
      .required(requiredErrorText),
  });

  const coverageFormFields = [
    <StyledLabeledFormElement labelMessage={labels.plan}>
      <InputField
        name={structuredPayersEnabled ? "payerDisplay" : "grouping.plan.value"}
      />
    </StyledLabeledFormElement>,
    null, // Will be removed or replaced base on FF
    <StyledLabeledFormElement labelMessage={labels.subscriberId}>
      <InputField name="subscriberId.value" />
    </StyledLabeledFormElement>,
    <StyledLabeledFormElement labelMessage={labels.groupId}>
      <InputField name="grouping.group.value" />
    </StyledLabeledFormElement>,
  ];
  const coveragePayer = getCoverageOrganization(coverage);
  const coverageOrganizationId = coveragePayer?.uri?.value;
  const coveragePayerDisplay =
    coveragePayer?.display?.value || coverage?.grouping?.plan?.value;

  const payerDropdown = (
    <StyledLabeledFormElement labelMessage={labels.planValue}>
      <BasicDropdownField
        options={structuredPayersOptions}
        fieldName={"payerOrganization"}
        name={"payerOrganization"}
        overlap={true}
        searchable={true}
        style={{
          width: "100%",
        }}
      />
    </StyledLabeledFormElement>
  );
  structuredPayersEnabled
    ? coverageFormFields.splice(1, 1, payerDropdown)
    : coverageFormFields.splice(1, 1);

  return (
    <StyledForm
      enableReinitialize={true}
      initialValues={{
        birthDateString: getBirthDateString(patient.birthDate!),
        firstName: getFirstName(patient),
        lastName: getLastName(patient),
        genderString: String(patient!.gender!.value),
        eligibilityExclusion: getEligibilityExclusion(coverage),
        payerOrganization: coverageOrganizationId,
        payerDisplay: coveragePayerDisplay,
        ...pick(coverage, ["subscriberId", "grouping"]),
      }}
      validationSchema={CoverageSchema}
      onSubmit={handleSubmit}
    >
      <SectionContainer>
        <StyledRow alignItems={"flex-start"}>
          <StyledLabeledFormElement labelMessage={labels.firstName}>
            <InputField name="firstName" />
          </StyledLabeledFormElement>
          <Spacer width={30} />
          <StyledLabeledFormElement labelMessage={labels.lastName}>
            <InputField name="lastName" />
          </StyledLabeledFormElement>
        </StyledRow>
        <StyledRow alignItems={"flex-start"}>
          <StyledLabeledFormElement labelMessage={labels.gender}>
            <ButtonRadioInputField
              name="genderString"
              options={genderOptions}
            />
          </StyledLabeledFormElement>
          <Spacer width={30} />
          <StyledLabeledFormElement
            helperText={helpers.dob}
            labelMessage={labels.dob}
          >
            <DateInputField name="birthDateString" />
          </StyledLabeledFormElement>
        </StyledRow>
      </SectionContainer>

      <StyledRowZIndex alignItems={"flex-start"}>
        {coverageFormFields?.[0]}
        <Spacer width={30} />
        {coverageFormFields?.[1]}
      </StyledRowZIndex>
      <StyledRow
        alignItems={"flex-start"}
        width={structuredPayersEnabled ? "675" : "326"}
      >
        {coverageFormFields?.[2]}
        {structuredPayersEnabled && <Spacer width={30} />}
        {coverageFormFields?.[3]}
      </StyledRow>
      {!isEaUser && (
        <StyledRow alignItems={"flex-start"}>
          <StyledLabeledFormElement labelMessage={labels.eligibilityExclusion}>
            <ButtonRadioInputField
              name="eligibilityExclusion"
              options={eligibilityExclusionOptions}
              width={675}
            />
          </StyledLabeledFormElement>
        </StyledRow>
      )}
      <StyledRow alignItems={"flex-start"} width="326">
        <SubmitButton
          labelMessage={labels.updateButton}
          intent="secondary"
          appearance="solid"
          size="medium"
          loading={isLoading}
        />
      </StyledRow>
    </StyledForm>
  );
};
