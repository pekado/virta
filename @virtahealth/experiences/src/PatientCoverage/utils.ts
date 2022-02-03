import { gql } from "@virtahealth/utils";
import { OFFICIAL_USE } from "./index";

export const ELIGIBILTY_EXCLUSION_URI =
  "https://fhir.virtahealth.com/StructureDefinition/EligibilityEligibilityExclusion";
export const DEPLOYMENT_KEY_URL =
  "https://virta.lightning.force.com/lightning/r/Deployment__c";

// GraphQL queries for patient coverages
export const UPDATE_COVERAGE = gql`
  mutation UpdateCoverage(
    $coverage: CoverageInput!
    $coverageId: ID!
    $versionId: ID!
  ) {
    updateCoverage(
      coverage: $coverage
      coverageId: $coverageId
      versionId: $versionId
    ) {
      coverage {
        id {
          value
        }
      }
    }
  }
`;

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient(
    $gender: Int!
    $name: NameInput!
    $birthDate: BigIntValue!
    $patientId: ID!
    $versionId: ID!
  ) {
    updatePatient(
      gender: $gender
      name: $name
      birthDate: $birthDate
      patientId: $patientId
      versionId: $versionId
    ) {
      patient {
        id {
          value
        }
      }
    }
  }
`;

export const CREATE_COVERAGE = gql`
  mutation CreateCoverage(
    $patientId: ID!
    $memberId: String!
    $groupId: String!
    $planName: String!
    $organizationId: String
  ) {
    createCoverage(
      patientId: $patientId
      memberId: $memberId
      groupId: $groupId
      planName: $planName
      organizationId: $organizationId
    ) {
      coverage {
        id {
          value
        }
      }
    }
  }
`;

export const GET_COVERAGES = gql`
  query GetCoverages($patientId: ID!) {
    coverages(patientId: $patientId) {
      id {
        value
      }
      payor {
        uri {
          value
        }
        display {
          value
        }
      }
      type {
        coding {
          system {
            value
          }
          code {
            value
          }
          version {
            value
          }
        }
      }
      grouping {
        group {
          value
        }
        plan {
          value
        }
      }
      order {
        value
      }
      meta {
        versionId {
          value
        }
        lastUpdated {
          valueUs
        }
      }
      subscriberId {
        value
      }
    }
  }
`;

export const GET_PATIENT = gql`
  query GetPatient($patientId: ID!) {
    patient(patientId: $patientId) {
      meta {
        versionId {
          value
        }
      }
      birthDate {
        valueUs
      }
      gender {
        value
      }
      name {
        family {
          value
        }
        use {
          value
        }
        given {
          value
        }
      }
    }
  }
`;

export const GET_ELIGIBILITY_RESPONSES = gql`
  query GetEligibilityResponses($patientId: ID!) {
    eligibilityResponses(patientId: $patientId) {
      id {
        value
      }
      outcome {
        coding {
          system {
            value
          }
          code {
            value
          }
        }
      }
      contained {
        coverage {
          id {
            value
          }
          subscriberId {
            value
          }
          grouping {
            group {
              value
            }
            plan {
              value
            }
          }
        }
        patient {
          birthDate {
            valueUs
          }
          name {
            given {
              value
            }
            family {
              value
            }
            use {
              value
            }
          }
        }
      }
      identifier {
        system {
          value
        }
        value {
          value
        }
      }
      meta {
        versionId {
          value
        }
        lastUpdated {
          valueUs
        }
      }
    }
  }
`;

export const GET_DEPLOYMENTS = gql`
  query GetDeployments {
    sfDeployments {
      id
      name
      status
      key
      subtype
    }
  }
`;

export const GET_DEPLOYMENTS_PAYERS = gql`
  query GetDeploymentsPayors {
    sfDeploymentsPayors {
      id
      deploymentId
      name
      groupNumbers
      payorOrganizationId
    }
  }
`;

// Interfaces for patient coverages
export interface BirthDate {
  valueUs: number;
}
interface Given {
  value: string;
}
export interface Grouping {
  group?: { value: string };
  plan?: { value: string };
}
export interface Subscriber {
  uri?: { value: string };
}

export interface Payor {
  uri?: { value: string };
  display: { value: string };
}

export interface Related {
  ref: {
    reference: {
      value: string;
    };
  };
}

export interface UpdateDocumentReferencePayload {
  virta_id: string;
  coverage_id: string;
  document_reference: DocumentReference;
}

export interface Attachment {
  contentType: { value: string };
  data?: { value: string };
  url?: { value: string };
}
export interface ImageContent {
  document_reference_id: string;
  url: string;
  mimetype?: string;
}

export interface DocumentReference {
  id: {
    value: string;
  };
  status: {
    value: string;
  };
  meta?: {
    versionId: { value: string };
    lastUpdated: { valueUs: number };
  };
  context?: {
    related?: Related[];
  };
  content?: Attachment[];
}

export interface EligibilityResponse {
  id?: {
    value: string;
  };
  created?: { valueUs: Date };
  meta?: {
    versionId: { value: string };
    lastUpdated: { valueUs: number };
  };
  status?: { value: number };
  outcome?: {
    coding: Coding[];
  };
  contained?: Contained[];
  identifier?: Identifier[];
}

export interface Identifier {
  system?: {
    value: string;
  };
  value?: {
    value: string;
  };
}

export interface Coding {
  code?: { value: string };
  system?: { value: string };
  version?: { value: string };
}

interface Contained {
  coverage?: Coverage;
  patient?: Patient;
}
export interface Name {
  given?: Given[];
  family?: { value: string };
  use?: { value: number };
}

export interface Patient {
  birthDate?: BirthDate;
  name?: Name[];
  gender?: { value: number };
  meta?: {
    versionId: { value: string };
  };
}

export interface Coverage {
  id?: {
    value: string;
  };
  type?: {
    coding?: Coding[];
  };
  payor?: Payor[];
  grouping?: Grouping;
  meta?: {
    versionId: { value: string };
    lastUpdated: { valueUs: number };
  };
  order?: { value: number };
  period?: {
    start?: { valueUs: string };
    end?: { valueUs: string };
  };
  policyHolder?: {
    reference: { value: string };
  };
  subscriberId?: { value: string };
  subscriber?: Subscriber;
}

// TODO: Update for payers
export interface Deployment {
  id: string;
  name: string;
  status: string;
  key: string;
  subtype: string;
}

export interface DeploymentPayor {
  id: string;
  name: string;
  deploymentId: string;
  groupNumbers: string;
  payorOrganizationId: string;
}

export interface StructuredPayerOption {
  value: string;
  label: {
    id: string;
    defaultMessage: string;
  };
}

export const getFirstName = (patient: Patient): string | undefined => {
  if (!patient.name) {
    return undefined;
  }
  const officialName = patient.name.find((na) => {
    return na.use!.value === OFFICIAL_USE;
  });
  if (officialName && officialName.given) {
    return officialName.given[0].value;
  } else {
    return undefined;
  }
};
export const getLastName = (patient: Patient): string | undefined => {
  if (!patient.name) {
    return undefined;
  }
  const officialName = patient.name.find((na) => {
    return na.use!.value === OFFICIAL_USE;
  });
  if (officialName && officialName.family) {
    return officialName.family.value;
  } else {
    return undefined;
  }
};

export const getEligibilityExclusion = (
  coverage: Coverage | undefined
): string | undefined => {
  if (!coverage) {
    return "None";
  }
  const types = coverage.type?.coding;
  if (!types || types.length === 0) {
    return "None";
  }
  for (let i = 0; i < types.length; i++) {
    if (types[i].system?.value === ELIGIBILTY_EXCLUSION_URI) {
      return types[i].code?.value;
    }
  }
  return "None";
};

export const getBirthDateString = (
  birthDate: BirthDate | undefined
): string | undefined => {
  if (birthDate) {
    const isoDate: string = new Date(birthDate!.valueUs! / 1000).toISOString();
    const year = isoDate.slice(0, 4);
    const day = isoDate.slice(8, 10);
    const month = isoDate.slice(5, 7);
    return month + "/" + day + "/" + year;
  }
};

export const getReasonDeployment = (
  eligibilityResponse: EligibilityResponse | undefined,
  deployments: Deployment[] | undefined
): Deployment | undefined => {
  let deployment;
  if (
    deployments &&
    deployments.length > 0 &&
    eligibilityResponse &&
    eligibilityResponse.identifier &&
    eligibilityResponse.identifier.length > 0
  ) {
    const deployment_concept = eligibilityResponse.identifier.find((code) => {
      return code.system?.value === DEPLOYMENT_KEY_URL;
    });
    if (!deployment_concept) {
      return deployment;
    }
    const deployment_key = deployment_concept.value?.value;
    deployment = deployments.find((deploy) => deploy.key === deployment_key);
  }
  return deployment;
};

export const getCoverageOrganization = (
  coverage: Coverage | undefined
): Payor | undefined => {
  if (coverage?.payor) {
    return coverage?.payor.find((p) => p?.uri?.value != null);
  }
};

export const getCarrierDropdownOptions = (
  deploymentsPayors: DeploymentPayor[] | undefined,
  patientDeployment: Deployment | undefined
): StructuredPayerOption[] => {
  const dropdownOptions = [
    { value: "NONE", label: { id: "NONE", defaultMessage: "None" } },
  ];
  if (
    !deploymentsPayors ||
    deploymentsPayors.length === 0 ||
    !patientDeployment
  ) {
    return dropdownOptions;
  }

  const parsedOptions = deploymentsPayors
    .map((dep) =>
      patientDeployment?.id == dep.deploymentId
        ? {
            value: dep.payorOrganizationId,
            label: { id: dep.payorOrganizationId, defaultMessage: dep.name },
          }
        : undefined
    )
    .filter((val) => val);

  // @ts-ignore
  return dropdownOptions.concat(parsedOptions);
};

export const getAllOrganizationIdsFromDeployments = (
  deploymentPayors: DeploymentPayor[]
): string[] => {
  const organizationIds = {};
  if (deploymentPayors && deploymentPayors.length > 0) {
    deploymentPayors.forEach((d) => {
      if (d.payorOrganizationId) {
        // @ts-ignore
        organizationIds[d.payorOrganizationId] = null;
      }
    });
  }
  return Object.keys(organizationIds);
};
