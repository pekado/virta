import * as React from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  HelperText,
  CheckboxField,
  ErrorText,
  Heading,
  Spacer,
  SubmitButton,
  Callout,
  styled,
} from "@virtahealth/components";
import { zipCodeRegex } from "../utils/regexValidation";
import { SuccessScreen } from "../SuccessScreen";
import {
  labels,
  successText,
  text,
  validationText,
  errorText,
} from "./messages";
import ShippingSection from "./components/ShippingSection";

enum FormState {
  Default,
  Success,
  Error,
}

export enum PlanDefinitionName {
  DiabetesManagement = "diabetes-management",
  DiabetesManagementNonClinical = "diabetes-management-non-clinical",
  Reversal = "reversal",
}

export enum DeviceType {
  Glucose = "glucose",
  Ketone = "ketone",
}

export enum DeviceModel {
  AccuChek = "Accu-Chek",
  OneTouch = "OneTouch",
}

export type Address = {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export type Device = {
  id: string;
  model: DeviceModel;
  status: string;
  type: DeviceType;
};
export interface FormValues extends Address {
  makeDefault: boolean;
  supplies: string[];
  name: string;
}
interface Props {
  adaptedOn: string;
  address: Address;
  currentPlanDefinitionName: PlanDefinitionName;
  devices: Device[];
  firstName: string;
  lastName: string;
  onSubmit: (values: any) => void;
  onSuccessClose: () => void;
}

const SPACE = 16;

const StyledHelperText = styled(HelperText)`
  font-size: 16px;
  line-height: 22px;
`;

const SupplyFormSchema = Yup.object().shape({
  street1: Yup.string().required(validationText.street1.defaultMessage),
  street2: Yup.string(),
  city: Yup.string().required(validationText.city.defaultMessage),
  state: Yup.string().required(validationText.state.defaultMessage),
  zip: Yup.string()
    .matches(zipCodeRegex, validationText.zipCodeRegex.defaultMessage)
    .required(validationText.zip.defaultMessage),
  supplies: Yup.array()
    .min(1, validationText.supplies.defaultMessage)
    .required(validationText.supplies.defaultMessage),
});

export const RequestSuppliesScreen: React.FC<Props> = ({
  adaptedOn,
  address,
  currentPlanDefinitionName,
  devices,
  firstName,
  lastName,
  onSubmit,
  onSuccessClose,
}: Props) => {
  const initialAddressValue: Address = {
    street1: address.street1 ?? "",
    street2: address.street2 ?? "",
    city: address.city ?? "",
    state: address.state ?? "",
    zip: address.zip ?? "",
  };

  // Rules for showing fields
  // 1. patient_status === 'inactive'
  //   1. no form
  // 2. adaption_date === null
  //   1. no "ketone strips"
  // 3. device type is "OneTouch" or "Accu-Check"
  //   1. no "glucose strips"
  // 4. plan_definition.name === 'diabetes-management-non-clinical'
  //   1. no "ketone strips"
  // 5. no "ketone" meter
  //   1. no "ketone strips"

  const showKetoneStrips =
    adaptedOn !== null &&
    currentPlanDefinitionName !==
      PlanDefinitionName.DiabetesManagementNonClinical &&
    devices.some((d) => d.type === DeviceType.Ketone);

  const showGlucoseStrips = !devices.some(
    (d) =>
      d.model.includes(DeviceModel.OneTouch) ||
      d.model.includes(DeviceModel.AccuChek)
  );

  const [formState, updateFormState] = React.useState(FormState.Default);

  const handleSubmit = async (
    // destructuring properties because backend is not expecting all of them
    { supplies, city, street1, street2, makeDefault, zip, state }: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    updateFormState(FormState.Default);

    const supplyBooleans = supplies.reduce((result, current) => {
      return {
        ...result,
        [current]: true,
      };
    }, {});

    try {
      // TODO - figure out the right return type for this function since the
      // current type doesn't have it returning a Promise
      await onSubmit({
        ...supplyBooleans,
        state,
        city,
        zip,
        street1,
        street2,
        makeDefault,
      });
      actions.setSubmitting(false);
      updateFormState(FormState.Success);
    } catch (error) {
      actions.setSubmitting(false);
      updateFormState(FormState.Error);
    }
  };

  switch (formState) {
    case FormState.Success:
      return (
        <SuccessScreen
          onClose={onSuccessClose}
          title={successText.heading.defaultMessage}
          description={successText.shippingDetails.defaultMessage}
        />
      );
    default:
      return (
        <Formik
          initialValues={{
            ...initialAddressValue,
            name: `${firstName} ${lastName}`,
            supplies: [],
            makeDefault: true,
          }}
          validationSchema={SupplyFormSchema}
          // @ts-ignore - TODO - fix type
          onSubmit={handleSubmit}
          enableReinitialize={false}
        >
          {({ isSubmitting, isValid, errors, submitCount }) => {
            return (
              <>
                <Heading size={2}>{text.formTitle.defaultMessage}</Heading>
                <Spacer height={4} />
                <StyledHelperText>
                  {text.formTitleHelper.defaultMessage}
                </StyledHelperText>
                <Spacer height={24} />
                {showKetoneStrips && (
                  <>
                    <CheckboxField
                      name="supplies"
                      isButton
                      labelMessage={labels.ketoneStrips}
                      value="ketoneStrips"
                      multiple
                    />
                    <Spacer height={SPACE} />
                  </>
                )}
                {showGlucoseStrips && (
                  <>
                    <CheckboxField
                      name="supplies"
                      isButton
                      labelMessage={labels.glucoseStrips}
                      value="glucoseStrips"
                      multiple
                    />
                    <Spacer height={SPACE} />
                  </>
                )}
                <CheckboxField
                  name="supplies"
                  isButton
                  labelMessage={labels.lancets}
                  value="lancets"
                  multiple
                />
                <Spacer height={SPACE} />
                <CheckboxField
                  name="supplies"
                  isButton
                  labelMessage={labels.alcoholSwabs}
                  value="alcoholSwabs"
                  multiple
                />
                {errors.supplies && (
                  <ErrorText style={{ marginTop: 10 }}>
                    {errors.supplies}
                  </ErrorText>
                )}
                <Spacer height={24} />
                <ShippingSection
                  address={address}
                  firstName={firstName}
                  lastName={lastName}
                />
                <Spacer height={24} />
                {formState === FormState.Error && (
                  <Callout
                    intent="danger"
                    title={errorText.submitErrorTitle}
                    style={{ flexBasis: "auto", marginBottom: SPACE }}
                  />
                )}
                <SubmitButton
                  appearance="solid"
                  disabled={(!isValid && !!submitCount) || isSubmitting}
                  intent="secondary"
                  labelMessage={labels.submitButton}
                  loading={isSubmitting}
                />
              </>
            );
          }}
        </Formik>
      );
  }
};
