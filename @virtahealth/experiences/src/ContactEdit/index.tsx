import * as React from "react";
import { useIntl } from "react-intl";
import { isEqual, pick } from "lodash";
import * as Yup from "yup";
import {
  CheckboxField,
  DateInputField,
  Form,
  Heading2,
  InputField,
  LabeledFormElement,
  PhoneInputField,
  Row,
  Spacer,
  styled,
  SubmitButton,
  VirtaClient,
  withVirta,
} from "@virtahealth/components";
import { FormikValues } from "formik";

import { EnrollmentAddress } from "../types";
import { errors, helpers, labels, sections } from "./messages";

export interface ContactEditProps {
  /**
   * A React component that will appear above the form. May be used in conjunction
   * with `hideSubmitButton` to pass in a common header component, for instance,
   * which contains or can be passed a submit button.
   */
  headerComponent?: React.ReactNode;
  /**
   * Error handler for a failed API call to Identity.
   */
  onError?: (e: Error) => void;
  /**
   * Success handler which accepts the patched Patient returned from the API call
   * to Identity.
   */
  onSuccess?: (p: Patient) => void;
  /**
   * Patient object which is being edited.
   */
  patient: Patient;
  /**
   * Allows for toggling the presence of a submit/save button at the bottom of the form
   * if one is being provided or passed in elsewhere.
   */
  hideSubmitButton?: boolean;
}

interface InnerProps extends ContactEditProps {
  client?: VirtaClient;
}

export interface Address extends EnrollmentAddress {
  address_id: number;
  type: string;
}

export interface Patient {
  addresses?: Address[];
  date_of_birth: string;
  first_name: string;
  last_name: string;
  primary_address?: Address;
  primary_email: {
    address: string;
    email_id: number;
    type: string;
    virta_id: string;
  };
  primary_phone: string;
  usual_name: string;
  virta_id: string;
}

const SectionTitleContainer = styled.View`
  border-bottom-color: ${({ theme }) => theme.tableRowBorderColor};
  border-bottom-width: 1px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  width: 100%;
`;

const StyledButton = styled(SubmitButton)`
  width: 80px;
`;

const StyledForm = styled(Form)`
  padding: 12px;
`;

const StyledRow = styled(Row)`
  margin-bottom: 30px;
  width: ${(props: { width?: string }) =>
    props.width ? `${props.width}px` : "100%"};
`;

const StyledLabeledFormElement = styled(LabeledFormElement)`
  flex: 1;
`;

export const InnerContactEdit: React.FC<InnerProps> = ({
  client,
  headerComponent,
  onError,
  onSuccess,
  patient,
  hideSubmitButton,
}) => {
  // Pending implementation of loading state component(s) in Atlas
  const [, setIsLoading] = React.useState(false);

  const intl = useIntl();

  const addresses = patient.addresses || [];
  const email = patient.primary_email || {};

  const shippingAddress =
    addresses.find((a: Address) => a.type === "shipping") || {};
  const otherAddresses =
    addresses.filter((a: Address) => a.type !== "shipping") || [];
  const emailAddress = email.address;

  const shippingIsPrimary =
    shippingAddress &&
    patient.primary_address &&
    isEqual(
      pick(patient.primary_address, [
        "address_1",
        "address_2",
        "city",
        "postal_code",
        "province",
      ]),
      pick(shippingAddress, [
        "address_1",
        "address_2",
        "city",
        "postal_code",
        "province",
      ])
    );

  const updateContact = async (values: FormikValues) => {
    setIsLoading(true);

    const endpoint = `/identity/users/${patient.virta_id}`;

    const {
      address_1,
      address_2,
      city,
      postal_code,
      province,
      type,
      email,
      isPrimary,
      ...rest
    } = values;

    const formAddress = {
      address_1,
      address_2,
      city,
      postal_code,
      province,
    };

    const updatedAddresses = isPrimary
      ? [
          { ...formAddress, type: "home" },
          { ...formAddress, type: "shipping" },
        ]
      : [...otherAddresses, { ...formAddress, type: "shipping" }];

    const newContact = {
      ...rest,
      addresses: updatedAddresses,
      primary_email: {
        address: email,
      },
    };

    if (isPrimary) {
      // @ts-ignore - type this
      newContact.primary_address = { ...formAddress, type: "home" };
    }

    try {
      const patchedPatient = (await client!.patch(
        endpoint,
        newContact
      )) as Patient;
      if (onSuccess) {
        onSuccess(patchedPatient);
      }
      setIsLoading(false);
    } catch (e) {
      if (onError) {
        onError(e as Error);
      }
      setIsLoading(false);
    }
  };

  const requiredErrorText = intl.formatMessage(errors.required);

  const ContactSchema = Yup.object().shape({
    address_1: Yup.string().required(requiredErrorText),
    city: Yup.string().required(requiredErrorText),
    province: Yup.string().required(requiredErrorText),
    postal_code: Yup.string().required(requiredErrorText),
    date_of_birth: Yup.string()
      .min(10, intl.formatMessage(errors.completeDate))
      .required(requiredErrorText),
    email: Yup.string()
      .email(intl.formatMessage(errors.invalidEmail))
      .required(requiredErrorText),
    first_name: Yup.string().required(requiredErrorText),
    last_name: Yup.string().required(requiredErrorText),
    primary_phone: Yup.string().required(requiredErrorText),
  });

  return (
    <StyledForm
      initialValues={{
        email: emailAddress,
        isPrimary: shippingIsPrimary,
        ...pick(patient, [
          "date_of_birth",
          "first_name",
          "last_name",
          "primary_phone",
          "usual_name",
        ]),
        ...shippingAddress,
      }}
      onSubmit={(values) => {
        updateContact(values);
      }}
      validationSchema={ContactSchema}
    >
      {headerComponent}
      <SectionTitleContainer>
        <Heading2>{intl.formatMessage(sections.address)}</Heading2>
      </SectionTitleContainer>
      <StyledRow alignItems={"flex-start"} width="326">
        <StyledLabeledFormElement labelMessage={labels.address1}>
          <InputField name="address_1" />
        </StyledLabeledFormElement>
      </StyledRow>
      <StyledRow alignItems={"flex-start"} width="326">
        <StyledLabeledFormElement labelMessage={labels.address2}>
          <InputField name="address_2" />
        </StyledLabeledFormElement>
      </StyledRow>
      <StyledRow alignItems={"flex-start"} width="675">
        <StyledLabeledFormElement labelMessage={labels.city}>
          <InputField name="city" />
        </StyledLabeledFormElement>
        <Spacer width={30} />
        <StyledLabeledFormElement labelMessage={labels.state}>
          <InputField name="province" />
        </StyledLabeledFormElement>
        <Spacer width={30} />
        <StyledLabeledFormElement labelMessage={labels.postCode}>
          <InputField name="postal_code" />
        </StyledLabeledFormElement>
      </StyledRow>
      <SectionTitleContainer>
        <Heading2>{intl.formatMessage(sections.contactInfo)}</Heading2>
      </SectionTitleContainer>
      <StyledRow alignItems={"flex-start"} width="675">
        <StyledLabeledFormElement labelMessage={labels.legalFirstName}>
          <InputField name="first_name" />
        </StyledLabeledFormElement>
        <Spacer width={30} />
        <StyledLabeledFormElement labelMessage={labels.legalLastName}>
          <InputField name="last_name" />
        </StyledLabeledFormElement>
        <Spacer width={30} />
        <StyledLabeledFormElement labelMessage={labels.preferredName}>
          <InputField name="usual_name" />
        </StyledLabeledFormElement>
      </StyledRow>
      <StyledRow alignItems={"flex-start"} width="205">
        <StyledLabeledFormElement
          helperText={helpers.dob}
          labelMessage={labels.dob}
        >
          <DateInputField
            customValueFormat={"yyyy-MM-dd"}
            name="date_of_birth"
          />
        </StyledLabeledFormElement>
      </StyledRow>
      <StyledRow alignItems={"flex-start"} width="258">
        <StyledLabeledFormElement labelMessage={labels.email}>
          <InputField name="email" />
        </StyledLabeledFormElement>
      </StyledRow>
      <StyledRow alignItems={"flex-start"} width="258">
        <StyledLabeledFormElement
          helperText={helpers.phone}
          labelMessage={labels.phone}
        >
          <PhoneInputField name="primary_phone" />
        </StyledLabeledFormElement>
      </StyledRow>
      <StyledRow>
        <CheckboxField labelMessage={labels.isPrimary} name="isPrimary" />
      </StyledRow>
      {!hideSubmitButton && (
        <StyledButton labelMessage={labels.submitButton} intent="primary" />
      )}
    </StyledForm>
  );
};

export const ContactEdit = withVirta<ContactEditProps>(InnerContactEdit);
