import { MessageDescriptor } from "react-intl";
import { messages } from "@virtahealth/utils";
import { VirtaClient } from "@virtahealth/components";

export const DEFAULT_INTERVAL = 6000;
export const TIMEOUT = 30000; // 30 seconds
export const ELIGIBILTY_STATUS_URI =
  "https://fhir.virtahealth.com/StructureDefinition/EligibilityStatus";
export const ELIGIBLE = "Eligible";
export const COVERAGE_ENDPOINT = "/coverage";
export const COVERAGES_ENDPOINT = "/coverages";
export const DOCUMENT_REFERENCE_ENDPOINT = `/document_reference`;
export const FINAL_STEPS_LOCATION = "finalSteps";
export const STAND_ALONE_LOCATION = "standAlone";
export const HH_APPLICATION_LOCATION = "hhApplication";
export const BI_APPLICATION_LOCATION = "biApplication";
export const OFFICIAL_USE = "OFFICIAL";

export const TOAST_MESSAGES = {
  uploadImage: messages.issueUploadingCard,
};

export enum Stage {
  LOADING = "loading",
  TROUBLESHOOTING = "troubleshooting",
  TROUBLESHOOT_INPUT = "troubleshooting_input",
  POLLING = "polling",
  INPUT = "input",
  ELIGIBLE = "eligible",
  INELIGIBLE = "ineligible",
  TIMEOUT = "timeout",
  POLLING_TWO = "polling_two",
  CORRECT_INFORMATION = "correct_information",
  UPLOAD = "upload",
}

export interface ToastContent {
  type: "error";
  message: MessageDescriptor;
}

export interface Given {
  value: string;
}

export interface BirthDate {
  valueUs: number;
}

export interface Name {
  given?: Given[];
  family?: { value: string };
  use?: { value: string };
}

export interface InsurerOption {
  label?: {
    id?: string;
    defaultMessage?: string;
  };
  value?: string;
}

export interface Deployment {
  id: string;
  deploymentKey: string;
  status: string;
  goLiveDate: Date;
}

export interface DeploymentPayor {
  id: string;
  name: string;
  deploymentId: string;
  groupNumbers: string;
  payorOrganizationId: string;
}

export interface Patient {
  birthDate?: BirthDate;
  name?: Name[];
  gender?: { value: number };
  meta?: {
    versionId: { value: string };
  };
}

export interface Discrepancies {
  firstName?: string;
  lastName?: string;
  plan?: string;
  groupId?: string;
  subscriberId?: string;
  dateOfBirth?: string;
}

export interface Coding {
  code: { value: string };
  system: { value: string };
  version?: { value: string };
}

export interface Grouping {
  group?: { value: string };
  plan?: { value: string };
}

export interface Subscriber {
  uri?: { value: string };
}

export interface User {
  primaryEmail: {
    address: string;
    emailId: number;
    type: string;
    virtaId: string;
  };
  virtaId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  sexAtBirth?: string;
  socialSecurity?: string;
}

export interface Payor {
  uri?: { value: string };
  display: { value: string };
}

export interface Coverage {
  id?: {
    value: string;
  };
  payor?: Payor[];
  type?: {
    coding?: Coding[];
  };
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

export interface Contained {
  coverage?: Coverage;
  patient?: Patient;
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
}

export const getPlanName = (coverage: Coverage) => {
  if (coverage && coverage.grouping && coverage.grouping.plan) {
    return coverage.grouping.plan.value;
  } else {
    return "";
  }
};

export const getGroupId = (coverage: Coverage) => {
  if (
    coverage &&
    coverage.grouping &&
    coverage.grouping.group &&
    Object.keys(coverage.grouping.group).length !== 0
  ) {
    return coverage.grouping.group.value;
  } else {
    return "";
  }
};

export const getFirstName = (patient: Patient) => {
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
export const getLastName = (patient: Patient) => {
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

export const getBirthDateString = (birthDate: BirthDate) => {
  if (birthDate) {
    const isoDate: string = new Date(birthDate!.valueUs! / 1000).toISOString();
    const year = isoDate.slice(0, 4);
    const day = isoDate.slice(8, 10);
    const month = isoDate.slice(5, 7);
    return year + "-" + month + "-" + day;
  }
};

export const getDiscrepancies = (
  newResponse: EligibilityResponse,
  user: User,
  coverage: Coverage
): Discrepancies => {
  const discrepancies: Discrepancies = {};
  if (
    newResponse &&
    newResponse.contained &&
    newResponse.contained.length > 0
  ) {
    newResponse!.contained.forEach((contained) => {
      if (contained && contained.patient && contained.patient.name) {
        const containedFirstName = getFirstName(contained.patient);
        if (
          containedFirstName &&
          containedFirstName.toUpperCase() !== user.firstName.toUpperCase()
        ) {
          discrepancies["firstName"] = containedFirstName;
        }
        const containedLastName = getLastName(contained.patient);
        if (
          containedLastName &&
          containedLastName.toUpperCase() !== user.lastName.toUpperCase()
        ) {
          discrepancies["lastName"] = containedLastName;
        }
      }
      if (contained && contained.patient && contained.patient.birthDate) {
        const containedDob = contained.patient.birthDate
          ? getBirthDateString(contained.patient.birthDate)
          : undefined;
        if (containedDob !== user.dateOfBirth) {
          discrepancies["dateOfBirth"] = containedDob;
        }
      }
      if (contained && contained.coverage) {
        if (contained.coverage.grouping && contained.coverage.grouping.plan) {
          const containedPlan = contained.coverage.grouping.plan.value;
          const inputPlan = getPlanName(coverage);
          if (containedPlan.toUpperCase() !== inputPlan.toUpperCase()) {
            discrepancies["plan"] = containedPlan;
          }
        }

        if (
          contained.coverage.grouping &&
          contained.coverage.grouping.group &&
          contained.coverage.grouping.group.value
        ) {
          const containedGroup = contained.coverage.grouping.group.value;
          const inputGroup = getGroupId(coverage);
          if (containedGroup.toUpperCase() !== inputGroup.toUpperCase()) {
            discrepancies["groupId"] = containedGroup;
          }
        }

        if (
          contained.coverage.grouping &&
          contained.coverage.subscriberId &&
          coverage.subscriberId
        ) {
          const containedSubscriberId = contained.coverage.subscriberId.value;
          // @ts-ignore - fix types
          const inputSubscriberId = coverage.subscriberId.value;
          if (
            containedSubscriberId &&
            inputSubscriberId.toUpperCase() !==
              containedSubscriberId.toUpperCase()
          ) {
            discrepancies["subscriberId"] = containedSubscriberId;
          }
        }
      }
    });
  }
  return discrepancies;
};

export const fetchCoverages = async (
  client: VirtaClient,
  setCoverages: (value: Coverage[] | undefined) => void
) => {
  try {
    const coverages = (await client.get(COVERAGES_ENDPOINT)) as Coverage[];
    setCoverages(coverages);
  } catch (e) {
    console.log(e, "error getting coverages");
  }
};

export const fetchEligibilityResponses = async (
  client: VirtaClient,
  setEligibilityResponses: (value: EligibilityResponse[] | undefined) => void
) => {
  try {
    const eligibilityResponses = (await client.get(
      "/eligibility_responses"
    )) as EligibilityResponse[];
    setEligibilityResponses(eligibilityResponses);
  } catch (e) {
    console.log(e, "error getting eligibilityResponses");
  }
};

export const fetchUser = async (
  client: VirtaClient,
  setUser: (value: User | undefined) => void
) => {
  try {
    const user = (await client.get("/users/self")) as User;
    setUser(user);
  } catch (e) {
    console.log(e, "error getting EP patient");
  }
};

export const fetchDeployments = async (
  client: VirtaClient,
  setDeployments: (value: Deployment[] | undefined) => void
) => {
  try {
    const deployments = (await client.get("/deployments")) as Deployment[];
    setDeployments(deployments);
  } catch (e) {
    console.log(e, "error getting salesforce deployments");
  }
};

export const fetchDeploymentPayors = async (
  client: VirtaClient,
  setDeploymentPayors: (value: DeploymentPayor[] | undefined) => void
) => {
  try {
    const deploymentPayors = (await client.get(
      "/deployment_payors"
    )) as DeploymentPayor[];
    setDeploymentPayors(deploymentPayors);
  } catch (e) {
    console.log(e, "error getting salesforce deployment payors");
  }
};

export const pollEligibilityResponse = async (
  client: VirtaClient,
  fetchEligibilityResponsesFn: (
    client: VirtaClient,
    setEligibilityResponses: (value: EligibilityResponse[] | undefined) => void
  ) => Promise<void>,
  setEligibilityResponsesFn: (value: EligibilityResponse[] | undefined) => void,
  stageRef: React.MutableRefObject<Stage>,
  setStage: (value: Stage) => void,
  timeout: number,
  interval: number
) => {
  const endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;

  const checkCondition = function (
    resolve: (value?: unknown) => void,
    reject: (reason?: unknown) => void
  ) {
    if (
      stageRef.current === Stage.CORRECT_INFORMATION ||
      stageRef.current === Stage.ELIGIBLE ||
      stageRef.current === Stage.INELIGIBLE ||
      stageRef.current === Stage.UPLOAD ||
      stageRef.current === Stage.TROUBLESHOOTING
    ) {
      return resolve();
    }
    fetchEligibilityResponsesFn(client, setEligibilityResponsesFn);
    if (Number(new Date()) < endTime) {
      setTimeout(checkCondition, interval, resolve, reject);
    } else {
      setStage(Stage.TIMEOUT);
    }
  };
  return new Promise(checkCondition);
};

export const getCarrierDropdownOptions = (
  deploymentPayors: DeploymentPayor[] | undefined,
  deployment: Deployment | undefined
): Array<string> => {
  const dropdownOptions: Array<string> = [];
  if (!deploymentPayors || deploymentPayors.length === 0 || !deployment) {
    return dropdownOptions;
  }

  const parsedOptions = deploymentPayors
    .map((dep) => (deployment?.id == dep.deploymentId ? dep?.name : undefined))
    .filter((val) => val);

  // @ts-ignore
  return dropdownOptions.concat(parsedOptions);
};

export const getDeploymentByKey = (
  deploymentKey: string | undefined,
  deployments: Deployment[] | undefined
): Deployment | undefined => {
  return deployments?.find((d) => d?.deploymentKey === deploymentKey);
};

export const getOrganizationIdByName = (
  deploymentPayors: DeploymentPayor[] | undefined,
  name: string
): string | undefined => {
  const payor = deploymentPayors?.find((dep) => dep?.name == name);
  return payor?.payorOrganizationId;
};
