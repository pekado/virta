import * as React from "react";
import { ActivityIndicator } from "react-native";
import {
  Avatar,
  Base,
  Button,
  Chiclet,
  Column,
  Heading1,
  Heading4,
  List,
  Row,
  Spacer,
  styled,
  withVirta,
} from "@virtahealth/components";
import {
  BiomarkerObservation,
  getMostRecentBiomarker,
  calculateDaysSinceDate,
  endOfDay,
  formatDate,
  getAdaptationDaysText,
  getRegistrationDateText,
  gql,
  startOfDay,
  subMonths,
  useQuery,
  keyBy,
} from "@virtahealth/utils";
import { ApolloError } from "@apollo/client";
import {
  ACTIVE_FLAG_STATUS,
  BMI_CONVERSION_FACTOR,
  DEFAULT_FLAG_COLOR,
  DEFAULT_FLAG_TYPE,
  FLAG_DISPLAY_TO_TYPE_MAPPING,
  FLAG_TYPE_TO_COLOR_MAPPING,
  FLAG_TYPE_DISPLAY_ORDER,
  STATE_OPTIONS,
} from "../constants";

interface Practitioner {
  id: number;
  fullname: string;
  photoUrl: string;
  type?: string;
}

interface Flag {
  id: string;
  status: string;
  code: Code;
}

interface Code {
  text: string;
}

interface Address {
  use: string;
  type: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
}

interface Patient {
  id: number;
  adaptedOn: string;
  firstName: string;
  nickname: string;
  lastName: string;
  photoUrl: string;
  heightIn: number;
  weightObservations: BiomarkerObservation[];
  provider: Practitioner;
  coach: Practitioner;
  coveringProvider: Practitioner;
  coveringCoach: Practitioner;
  timezone: string;
  registeredOn: string;
  summaryStatementFreetext: string;
  flags: Flag[];
  personalGoal: string;
  primaryWhy: string;
  subtype: string;
  billableCondition: { code: Code };
  currentPlanDefinition: { title: { value: string } };
  preferredLanguage: {
    language: { coding: [{ display: string; code: string }] };
  };
  address: Address[];
}

interface UniversalPatientHeaderLayoutProps {
  patient: Patient;
  supUrl: string;
  useEffectHandler(): any;
}

export interface UniversalPatientHeaderExperienceProps {
  id: number;
  supUrl: string;
  useEffectHandler(): any;
  loadingIndicator?: React.ReactNode;
}

type InnerProps = UniversalPatientHeaderExperienceProps;

const PatientName = styled(Heading1)`
  flex: 1;
  font-size: 24px;
  line-height: 28px;
  margin-right: 12px;
  max-width: fit-content;
`;

const PatientInfoLabel = styled(Base)`
  font-weight: 600;
  line-height: 24px;
`;

const PatientInfoItem = styled(Base)`
  font-weight: 400;
  line-height: 24px;
  margin-right: 18px;
`;

interface GetPatientDetailsAndFlagsVars {
  id: number;
  start: string;
  end: string;
}

interface PatientDetailsAndFlagsData {
  user: Patient;
}

export const GET_PATIENT_WEIGHT_OBSERVATIONS = gql`
  query PatientWeightObservations($id: ID!, $start: String!, $end: String!) {
    user(id: $id) {
      weightObservations(start: $start, end: $end) {
        effective
        value {
          value
        }
      }
    }
  }
`;

export const GET_PATIENT_DETAILS_AND_FLAGS = gql`
  query PatientDetailsAndFlags($id: ID!, $start: String!, $end: String!) {
    user(id: $id) {
      id
      adaptedOn
      firstName
      nickname
      lastName
      timezone
      heightIn
      photoUrl
      registeredOn
      weightObservations(start: $start, end: $end) {
        effective
        value {
          value
        }
      }
      personalGoal
      primaryWhy
      subtype
      coveringProvider {
        id
        photoUrl
        fullname
      }
      coveringCoach {
        id
        photoUrl
        fullname
      }
      provider {
        id
        photoUrl
        fullname
      }
      coach {
        id
        photoUrl
        fullname
      }
      flags {
        id
        status
        code {
          text
        }
      }
      billableCondition {
        code {
          text
        }
      }
      currentPlanDefinition {
        title {
          value
        }
      }
      preferredLanguage {
        language {
          coding {
            display
            code
          }
        }
      }
      address {
        use
        type
        street1
        street2
        city
        state
        zip
      }
    }
  }
`;

export const UniversalPatientHeader: React.FC<InnerProps> = ({
  id,
  supUrl,
  useEffectHandler,
}) => {
  const now = new Date();
  const one_month_ago = startOfDay(subMonths(now, 1));

  const dateFormat = "yyyy-MM-dd HH:mm:ss";
  const end = formatDate(endOfDay(now), dateFormat);
  const start = formatDate(one_month_ago, dateFormat);

  // Loading and Data are not reassigned but error is.
  // eslint-disable-next-line prefer-const
  let { loading, error, data } = useQuery<
    PatientDetailsAndFlagsData,
    GetPatientDetailsAndFlagsVars
  >(GET_PATIENT_DETAILS_AND_FLAGS, {
    variables: { id, start, end },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  // validate user is the correct one
  const detailPath = window?.location?.href?.match?.(/user_detail\/([0-9]+)/);
  const attentionPath = window?.location?.href?.match?.(/user_id=([0-9]+)/);
  const idFromPath =
    detailPath && detailPath.length > 1
      ? detailPath[1]
      : attentionPath && attentionPath.length > 1
      ? attentionPath[1]
      : "";
  if (idFromPath && `${data?.user?.id}` !== idFromPath) {
    error = new ApolloError({ errorMessage: "Id does not match url" });
  }

  if (error) {
    return (
      <Heading4>
        Patient Details Could Not Be Retrieved. Please Try Again
      </Heading4>
    );
  }
  if (!data) {
    return null;
  }

  return (
    <UniversalPatientHeaderLayout
      patient={data.user}
      supUrl={supUrl}
      useEffectHandler={useEffectHandler}
    />
  );
};

const getPatientDisplayName = (patient: Patient) => {
  return patient.nickname && patient.nickname !== patient.firstName
    ? `${patient.firstName} (${patient.nickname}) ${patient.lastName}`
    : `${patient.firstName} ${patient.lastName}`;
};

const getPatientNameForAvatar = (patient: Patient) => {
  return patient.nickname && patient.nickname !== patient.firstName
    ? `${patient.firstName} ${patient.nickname} ${patient.lastName}`
    : `${patient.firstName} ${patient.lastName}`;
};

const calculateBMI = (heightInches: number, weightPounds: number | null) => {
  return heightInches && weightPounds
    ? ((weightPounds / heightInches ** 2) * BMI_CONVERSION_FACTOR).toFixed(1)
    : "N/A";
};

const getFormattedTimezone = (timezone: string) => {
  const splitTimezone = timezone.split("/");
  return splitTimezone.length === 2 ? splitTimezone[1] : timezone;
};

const PHYSICAL_ADDRESS_TYPES = ["both", "physical"];

const STATES_DICT = keyBy(STATE_OPTIONS, (s) =>
  s.label.defaultMessage.toLowerCase()
);

const STATES_CODE_DICT = keyBy(STATE_OPTIONS, (s) => s.value.toLowerCase());

/**
 * Get an address of type 'Both' or 'Physical'
 */
const getAddressField = (addresses: Address[]) =>
  addresses?.find((a) => PHYSICAL_ADDRESS_TYPES.includes(a.type.toLowerCase()));

const getStateCode = (address: Address | undefined) => {
  const stateName = address?.state?.toLowerCase() ?? "";
  const stateCode =
    STATES_CODE_DICT[stateName]?.value ?? STATES_DICT[stateName]?.value;
  return stateCode ?? "Not Available";
};

const getStateFromAddress = (addresses: Address[]) => {
  const address = getAddressField(addresses);
  return getStateCode(address);
};

const mapFlagTypeToColor = (
  flagType: keyof typeof FLAG_TYPE_TO_COLOR_MAPPING
) => {
  return FLAG_TYPE_TO_COLOR_MAPPING[flagType]
    ? FLAG_TYPE_TO_COLOR_MAPPING[flagType]
    : DEFAULT_FLAG_COLOR;
};

const mapDisplayNameToFlagType = (
  displayName: keyof typeof FLAG_DISPLAY_TO_TYPE_MAPPING
): keyof typeof FLAG_TYPE_TO_COLOR_MAPPING => {
  return (
    FLAG_DISPLAY_TO_TYPE_MAPPING[displayName]
      ? FLAG_DISPLAY_TO_TYPE_MAPPING[displayName]
      : DEFAULT_FLAG_TYPE
  ) as keyof typeof FLAG_TYPE_TO_COLOR_MAPPING;
};

const mapDisplayNameToColor = (
  displayName: keyof typeof FLAG_DISPLAY_TO_TYPE_MAPPING
) => {
  return mapFlagTypeToColor(mapDisplayNameToFlagType(displayName));
};

const getdisplayNamesOrderedByFlagTypeAndAlpha = (flags: Flag[]) => {
  const displayNames = flags.map((flag) => flag.code.text);
  const flagsOrderedByDisplayName = displayNames.sort((a, b) =>
    a > b ? 1 : -1
  );

  return flagsOrderedByDisplayName.sort((a, b) => {
    return (
      FLAG_TYPE_DISPLAY_ORDER.indexOf(
        mapDisplayNameToFlagType(a as keyof typeof FLAG_DISPLAY_TO_TYPE_MAPPING)
      ) -
      FLAG_TYPE_DISPLAY_ORDER.indexOf(
        mapDisplayNameToFlagType(b as keyof typeof FLAG_DISPLAY_TO_TYPE_MAPPING)
      )
    );
  });
};

const getActiveFlags = (flags: Flag[]) => {
  return flags.filter((flag: any) => flag.status === ACTIVE_FLAG_STATUS);
};

const prefersSpanish = (
  preferredLanguage: Patient["preferredLanguage"]
): boolean => {
  return (
    preferredLanguage &&
    preferredLanguage.language.coding[0].code.startsWith("es")
  );
};

const cleanUpWhitespace = (str: string) => {
  if (str && str.trim()) {
    return str.trim().replace(/\s/g, " ");
  }
  return null;
};

const PatientAvatarColumn = styled(Column)`
  margin-right: 16px;
`;

const PatientPrimaryInfo = styled(Base)<{ isExpanded: boolean }>`
  height: ${({ theme, isExpanded }) =>
    isExpanded ? "auto" : `${Number(theme.textBaseLineHeight) + 4}px`};
  overflow: ${({ isExpanded }) => (isExpanded ? "clip" : "hidden")};
  white-space: ${({ isExpanded }) => (isExpanded ? "pre-wrap" : "nowrap")};
  text-overflow: ${({ isExpanded }) => (isExpanded ? "clip" : "ellipsis")};
`;

const PatientPrimaryRow = styled(Row)`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

const PatientSecondaryRow = styled(Row)`
  flex: 1;
  flex-basis: 0%; /* Needs to be explicitly set otherwise "flex: 1" defaults to 0px */
  flex-wrap: wrap;
`;

const PatientGlanceRow = styled(Row)`
  flex: 1;
  flex-basis: 0%; /* Needs to be explicitly set otherwise "flex: 1" defaults to 0px */
  width: 100%;
  margin-bottom: 5px;
`;

const PatientHeaderRow = styled(Row)`
  flex: 1;
  align-items: flex-start;
`;

const PatientSummaryColumn = styled(Column)`
  flex: 1;
  align-items: flex-start;
`;

const HeaderWrapper = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ChicletList = styled(List)`
  flex: 1;
  flex-wrap: wrap;
`;

const DetailsToggleButton = styled(Button)`
  max-width: fit-content;
  padding: 2px 4px;
`;

export const UniversalPatientHeaderLayout: React.FC<UniversalPatientHeaderLayoutProps> =
  ({ patient, supUrl, useEffectHandler }) => {
    React.useEffect(() => {
      // This will get called on every rerender (ie on a Show More / Show Less toggle)
      // TODO: Fix this rule breakage. This should be as simple moving this call out of a useEffect since that will get the method to be called every render still
      // Disabling rule for now to avoid the risk of changing functionality.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffectHandler();
    });
    const [isExpanded, setIsExpanded] = React.useState(true);
    const mostRecentWeight = getMostRecentBiomarker(patient.weightObservations);
    const daysSinceAdaptation = calculateDaysSinceDate(patient.adaptedOn);
    return (
      <HeaderWrapper>
        <PatientHeaderRow>
          <PatientAvatarColumn>
            <Avatar
              username={getPatientNameForAvatar(patient)}
              size="lg"
              imageUrl={patient.photoUrl}
            />
          </PatientAvatarColumn>
          <PatientSummaryColumn>
            <PatientGlanceRow>
              <PatientName
                accessibilityRole="link"
                /* @ts-ignore (11/11/21 Richard) I am not sure what TS is complaining about here. Just putting a comment to calm down ESLint */
                href={supUrl}
                target="_blank"
              >
                {getPatientDisplayName(patient)}
              </PatientName>
              <ChicletList
                direction="row"
                spacer={<Spacer width={16} />}
                interposeStyle={{ flex: 1, flexWrap: "wrap" }}
              >
                {patient.billableCondition && (
                  <Chiclet
                    key={patient.billableCondition.code.text}
                    label={patient.billableCondition.code.text}
                    color={"blue"}
                  />
                )}
                {patient.currentPlanDefinition && (
                  <Chiclet
                    key={patient.currentPlanDefinition.title.value}
                    label={patient.currentPlanDefinition.title.value}
                    color={"blue"}
                  />
                )}
                {prefersSpanish(patient.preferredLanguage) && (
                  <Chiclet
                    key={patient.preferredLanguage.language.coding[0].display}
                    label={patient.preferredLanguage.language.coding[0].display}
                    color={"blue"}
                  />
                )}
                {getdisplayNamesOrderedByFlagTypeAndAlpha(
                  getActiveFlags(patient.flags)
                ).map((displayName) => {
                  return (
                    <Chiclet
                      key={displayName}
                      label={displayName}
                      color={
                        mapDisplayNameToColor(
                          displayName as keyof typeof FLAG_DISPLAY_TO_TYPE_MAPPING
                        ) as React.ComponentProps<typeof Chiclet>["color"]
                      }
                    />
                  );
                })}
              </ChicletList>
            </PatientGlanceRow>
            <PatientPrimaryRow>
              <PatientPrimaryInfo isExpanded={isExpanded}>
                {daysSinceAdaptation != null ? (
                  <PatientInfoLabel>
                    {Math.abs(daysSinceAdaptation)} days{" "}
                  </PatientInfoLabel>
                ) : null}
                <PatientInfoItem>
                  {getAdaptationDaysText(daysSinceAdaptation)}
                </PatientInfoItem>
                <PatientInfoLabel>Coach: </PatientInfoLabel>
                <PatientInfoItem>
                  {patient.coach.fullname}
                  {patient.coveringCoach &&
                  patient.coveringCoach.id !== patient.coach.id
                    ? `, ${patient.coveringCoach.fullname} (c)`
                    : ""}
                </PatientInfoItem>
                <PatientInfoLabel>Provider: </PatientInfoLabel>
                <PatientInfoItem>
                  {patient.provider.fullname}
                  {patient.coveringProvider &&
                  patient.coveringProvider.id !== patient.provider.id
                    ? `, ${patient.coveringProvider.fullname} (c)`
                    : ""}
                </PatientInfoItem>
                <PatientInfoLabel>State: </PatientInfoLabel>
                <PatientInfoItem>
                  {getStateFromAddress(patient.address)}
                </PatientInfoItem>
                <PatientInfoLabel>Time zone: </PatientInfoLabel>
                <PatientInfoItem>
                  {getFormattedTimezone(patient.timezone)}
                </PatientInfoItem>
              </PatientPrimaryInfo>
              <DetailsToggleButton
                appearance="link"
                intent="secondary"
                labelMessage={{
                  id: "patientHeader.showDetailsToggle",
                  defaultMessage: `Show ${isExpanded ? "less" : "more"}`,
                }}
                onPress={() => {
                  setIsExpanded(!isExpanded);
                }}
              />
            </PatientPrimaryRow>
            <Spacer height={5} />
            {isExpanded ? (
              <PatientSecondaryRow>
                <PatientInfoLabel>Registered on: </PatientInfoLabel>
                <PatientInfoItem>
                  {getRegistrationDateText(patient.registeredOn)}
                </PatientInfoItem>
                <PatientInfoLabel>Subtype: </PatientInfoLabel>
                <PatientInfoItem>{patient.subtype}</PatientInfoItem>
                <Base>
                  <PatientInfoLabel>BMI: </PatientInfoLabel>
                  <PatientInfoItem>
                    {calculateBMI(
                      patient.heightIn,
                      mostRecentWeight
                        ? Number(mostRecentWeight.value.value)
                        : null
                    )}
                  </PatientInfoItem>
                </Base>
                <Base>
                  <PatientInfoLabel>Primary Why: </PatientInfoLabel>
                  <PatientInfoItem>
                    {cleanUpWhitespace(patient.primaryWhy) ??
                      "Primary Why not set."}
                  </PatientInfoItem>
                </Base>
                <Base>
                  <PatientInfoLabel>Primary Goal: </PatientInfoLabel>
                  <PatientInfoItem>
                    {cleanUpWhitespace(patient.personalGoal) ?? "Goal not set."}
                  </PatientInfoItem>
                </Base>
              </PatientSecondaryRow>
            ) : null}
          </PatientSummaryColumn>
        </PatientHeaderRow>
      </HeaderWrapper>
    );
  };

export const UniversalPatientHeaderExperience =
  withVirta<UniversalPatientHeaderExperienceProps>(UniversalPatientHeader);
