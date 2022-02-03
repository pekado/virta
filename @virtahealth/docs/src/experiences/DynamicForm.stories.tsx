/* eslint-disable max-lines */
import * as React from "react";
import { FormikValues } from "formik";
import { DynamicForm } from "@virtahealth/experiences";
import { primitives, base } from "@virtahealth/styles";
import { DynamicFormSchema } from "@virtahealth/experiences/src/DynamicForm/types";
import { SearchResult } from "@virtahealth/experiences/src/DynamicForm/components/customQuestions/PhysicianSearch/types";
import { Address } from "@virtahealth/experiences/src/DynamicForm/components/customQuestions/AddressValidation";
import { InsuranceInfo } from "@virtahealth/experiences/src/DynamicForm/components/customQuestions/InsuranceValidation";
import { styled, VirtaContext } from "@virtahealth/components";

import emptyVirtaClient from "../utils/emptyVirtaClient";
import {
  BASIC_INFO_SCHEMA,
  PHYSICIAN_SEARCH_SCHEMA,
  INSURANCE_ELIGIBILITY_CHECK_SCHEMA,
} from "./mock_data/dynamicFormSchema";

export default {
  title: "Experiences / Dynamic Form",
  component: DynamicForm,
  parameters: {
    layout: "fullscreen",
  },
};

const StyledWrapper = styled.View`
  background-color: ${primitives.color.carbonGray200};
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Basics = () => {
  return (
    <StyledWrapper>
      <DynamicForm
        onSubmit={(values: FormikValues) =>
          new Promise((resolve) => {
            console.log("whats the values", values);
            resolve("success");
          })
        }
        isApiLoading={false}
        schema={BASIC_INFO_SCHEMA as DynamicFormSchema}
        page={0}
        initialValues={{
          have_surgeries: "true",
        }}
      />
    </StyledWrapper>
  );
};

export const ObjectList = () => {
  return (
    <StyledWrapper>
      <DynamicForm
        onSubmit={(values: FormikValues) =>
          new Promise((resolve) => {
            console.log("whats the values", values);
            resolve("success");
          })
        }
        isApiLoading={false}
        schema={BASIC_INFO_SCHEMA as DynamicFormSchema}
        page={1}
        initialValues={{
          have_surgeries: "true",
        }}
      />
    </StyledWrapper>
  );
};

export const SinglePageType = () => {
  return (
    <StyledWrapper>
      <DynamicForm
        onSubmit={(values: FormikValues) =>
          new Promise((resolve) => {
            console.log("whats the values", values);
            resolve("success");
          })
        }
        schema={
          {
            ...BASIC_INFO_SCHEMA,
            pages: [BASIC_INFO_SCHEMA.pages[0]],
          } as DynamicFormSchema
        }
        page={0}
        isApiLoading={false}
        initialValues={{
          have_surgeries: "true",
        }}
      />
    </StyledWrapper>
  );
};

const originalAddress = {
  shippingAddress1: "6973 Heather Dr",
  shippingAddress2: "#112",
  shippingCity: "Maryland",
  shippingState: "MD",
  shippingZip: "20616",
};

export const AddressValidation = () => {
  return (
    <StyledWrapper>
      <VirtaContext
        client={emptyVirtaClient}
        theme={base}
        enrollmentClient={{
          ...emptyVirtaClient,
          post: (_: string, body: unknown) =>
            new Promise((resolve) => {
              const mockData = {
                original: body,
                suggested: {
                  ...(body as Address),
                  postal_code: `${(body as Address).postal_code?.replace(
                    "16",
                    "20"
                  )}`,
                  address_1: `${(body as Address).address_1?.replace(
                    "Dr",
                    "DR"
                  )}`,
                },
              };
              // @ts-ignore - ignore error on mock data & generic
              setTimeout(() => resolve(mockData), 1000);
            }),
        }}
      >
        <DynamicForm
          onSubmit={(values: FormikValues) =>
            new Promise((resolve) => {
              console.log("whats the values", values);
              resolve("success");
            })
          }
          isApiLoading={false}
          schema={BASIC_INFO_SCHEMA as DynamicFormSchema}
          page={2}
          initialValues={originalAddress}
        />
      </VirtaContext>
    </StyledWrapper>
  );
};

export const IconExample = () => {
  return (
    <StyledWrapper>
      <DynamicForm
        onSubmit={(values: FormikValues) =>
          new Promise((resolve) => {
            console.log("whats the values", values);
            resolve("success");
          })
        }
        isApiLoading={false}
        schema={BASIC_INFO_SCHEMA as DynamicFormSchema}
        page={4}
        initialValues={originalAddress}
      />
    </StyledWrapper>
  );
};

export const PhysicianSearchExample = () => {
  const mockAddress: SearchResult = {
    address: {
      address1: "10115 W River St",
      address2: "",
      city: "Truckee",
      countryCode: "USA",
      postalCode: "96161",
      province: "CA",
    },
    firstName: "Gina",
    lastName: "Barta",
    phoneNumber: "+15305818864",
  };

  const mockData = {
    data: [mockAddress, mockAddress, mockAddress, mockAddress],
    total: 4,
  };

  const [step, setStep] = React.useState<number>(0);

  const handleSubmit = (values: FormikValues) => {
    console.log("value submit", values, step);
    if (step === 0 && values.hasPcp === "true") {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (values?.primaryPhysician?.address) {
        setStep(4);
      } else {
        setStep(3);
      }
    } else if (step === 3) {
      setStep(4);
    }

    return new Promise<void>((r) => {
      r();
    });
  };

  const handleGoBack = () => {
    setStep((step - 1) as number);
  };
  return (
    <StyledWrapper>
      <VirtaContext
        client={emptyVirtaClient}
        theme={base}
        enrollmentClient={{
          ...emptyVirtaClient,
          get: () =>
            new Promise((resolve) => {
              // @ts-ignore - ignore error on mock data & generic
              setTimeout(() => resolve(mockData), 1000);
            }),
        }}
      >
        <DynamicForm
          isApiLoading={false}
          onSubmit={handleSubmit}
          onGoBack={handleGoBack}
          schema={PHYSICIAN_SEARCH_SCHEMA as DynamicFormSchema}
          page={step}
        />
      </VirtaContext>
    </StyledWrapper>
  );
};

export const Eligibility = (): JSX.Element => {
  const originalInsuranceInfo = {
    insuranceProvider: "cigna",
    memberId: 1123,
    groupId: "",
    firstName: "John",
    lastName: "Doe",
    dob: "10/03/1979",
    gender: "Male",
  };

  const [step, setStep] = React.useState(0);
  const [prevStep, setPrevStep] = React.useState(0);

  const stepNames = {
    assignmentOfBenefitConsent: 0,
    verifyingCoverage: 1,
    yourCovered: 2,
    insuranceInfoVerification: 3,
    somethingsNotRight: 4,
    primaryInsuranceEntry: 5,
    thanksForSubmittingYourInformation: 6,
    imageUpload: 7,
    lookingIntoIt: 8,
  };

  const handleSubmit = (values: FormikValues) => {
    console.log("value submit", values, step);
    if (step === stepNames["assignmentOfBenefitConsent"]) {
      setStep(stepNames["verifyingCoverage"]);
      // Check coverage here
      setTimeout(() => setStep(stepNames["yourCovered"]), 1000);
    } else if (step === stepNames["primaryInsuranceEntry"]) {
      setStep(stepNames["verifyingCoverage"]);
      setTimeout(
        () => setStep(stepNames["thanksForSubmittingYourInformation"]),
        1000
      );
    } else {
      setStep(step + 1);
    }

    if (step !== stepNames["verifyingCoverage"]) {
      setPrevStep(step);
    }

    return Promise.resolve();
  };

  const handleGoBack = () => {
    if (step === stepNames["somethingsNotRight"]) {
      setStep(stepNames["verifyingCoverage"]);
      // User clicked skip
      setTimeout(
        () => setStep(stepNames["thanksForSubmittingYourInformation"]),
        1000
      );
    } else {
      setStep(prevStep as number);
    }
  };

  return (
    <StyledWrapper>
      <VirtaContext
        client={emptyVirtaClient}
        theme={base}
        enrollmentClient={{
          ...emptyVirtaClient,
          post: (_: string, body: unknown) =>
            new Promise((resolve) => {
              const mockData = {
                original: body,
                suggested: {
                  ...(body as InsuranceInfo),
                  firstName: "Juan",
                  lastName: "Perez",
                  memberId: 321,
                },
              };
              // @ts-ignore - ignore error on mock data & generic
              setTimeout(() => resolve(mockData), 1000);
            }),
        }}
      >
        <DynamicForm
          isApiLoading={false}
          onSubmit={handleSubmit}
          onGoBack={handleGoBack}
          schema={INSURANCE_ELIGIBILITY_CHECK_SCHEMA as DynamicFormSchema}
          page={step}
          initialValues={originalInsuranceInfo}
        />
      </VirtaContext>
    </StyledWrapper>
  );
};
/* eslint-enable max-lines */
