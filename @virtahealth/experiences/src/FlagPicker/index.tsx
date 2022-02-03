import * as React from "react";
import { ActivityIndicator } from "react-native";
import {
  Button,
  ComboBox,
  ComboBoxOption,
  FormElementLabel,
  Row,
  Heading4,
  List,
  Spacer,
  Chiclet,
  HelperText,
  styled,
} from "@virtahealth/components";
import { gql, useQuery, useMutation, isEmpty } from "@virtahealth/utils";
import { defineMessages } from "react-intl";

const labels = defineMessages({
  inputLabel: {
    id: "flagPicker.label",
    description: "The label for the flag selector",
    defaultMessage: "Traits",
  },
});

export interface FlagPickerProps {
  userId: number;
}

interface Flag {
  id: string;
  status: string;
  code: Code;
  meta: Meta;
}

interface Meta {
  versionId: string;
}

interface Code {
  coding: Coding[];
  text: string;
}

interface Coding {
  display: string;
}

interface GetPatientFlagsVars {
  userId: number;
}

interface GetPatientFlagsResponse {
  user: PatientFlags;
}

interface PatientFlags {
  virtaId: string;
  flags: Flag[];
}

export const GET_PATIENT_FLAGS = gql`
  query PatientDetailsAndFlags($userId: ID!) {
    user(id: $userId) {
      virtaId
      flags {
        id
        status
        code {
          text
        }
        meta {
          versionId
        }
      }
    }
  }
`;

export const CREATE_PATIENT_FLAG = gql`
  mutation CreatePatientFlag($virtaId: String!, $codeText: String!) {
    createPatientFlag(virtaId: $virtaId, codeText: $codeText) {
      flagId
      versionId
    }
  }
`;

export const DISMISS_PATIENT_FLAG = gql`
  mutation DismissPatientFlag($flagId: String!, $versionId: String!) {
    updateFlagStatus(
      flagId: $flagId
      status: "inactive"
      versionId: $versionId
    ) {
      ok
    }
  }
`;

const flagCodeTextOptions = [
  "Na+ Restriction",
  "Logging Challenges",
  "Tech Challenges",
  "Quick Food Options",
  "Prefers Eating Out",
  "Frequent Lapses",
  "Frequent Travel",
  "Poor Communication",
  "Low Health Literacy",
  "Poor Social Support",
  "Budget Conscious",
  "Night Shift Work",
  "Multiple Shift Work",
  "Pescatarian",
  "Vegetarian",
  "Vegan",
  "Dairy-Free",
  "Gluten-Free",
  "Halal",
  "Kosher",
  "Time Restricted Eating",
  "Medically Complex",
  "Mental Health",
  "Disordered Eating",
  "Road Warrior",
  "Optimizer",
  "Med Non-Compliance",
  "High Touch",
  "Carb Tolerance",
  "Exercise",
  "CGM",
  "Insulin Pump",
];

const systemAssignableFlagCodeTextOptions = [
  "DMOC",
  "BMOC",
  "In Release",
  "Released",
];

const FlagPickerWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  justify-content: space-between;
  flex: 1;
  display: block;
`;

const ChicletList = styled(List)`
  flex: 1;
  flex-wrap: wrap;
`;

const FlagPickerRow = styled(Row)`
  flex: 1;
  flex-basis: 0%;
  width: 100%;
`;

const TraitsTitleList = styled(List)`
  flex: 1;
  margin-bottom: 5px;
`;

export const FlagPicker: React.FunctionComponent<FlagPickerProps> = ({
  userId,
}) => {
  const [comboBoxValue, setComboBoxValue] = React.useState("");
  const { loading, error, data, refetch } = useQuery<
    GetPatientFlagsResponse,
    GetPatientFlagsVars
  >(GET_PATIENT_FLAGS, {
    variables: { userId },
  });

  const patientFlags = data ? data.user.flags : [];
  const virtaId = data ? data.user.virtaId : undefined;

  const activeFlagsToDisplay = patientFlags.filter(
    (flag) =>
      flag.status.toLowerCase() === "active" &&
      !systemAssignableFlagCodeTextOptions.includes(flag.code.text)
  );

  const activeFlagCodeTextOptions = activeFlagsToDisplay.map(
    (flag) => flag.code.text
  );

  const selectableFlagCodeTextOptions = flagCodeTextOptions.filter(
    (codeText) => !activeFlagCodeTextOptions.includes(codeText)
  );

  const results = selectableFlagCodeTextOptions.filter((option) =>
    option.toLowerCase().includes(comboBoxValue)
  );

  const [createPatientFlag] = useMutation(CREATE_PATIENT_FLAG, {
    onCompleted: () => {
      setComboBoxValue("");
      refetch();
    },
  });

  const [dismissPatientFlag] = useMutation(DISMISS_PATIENT_FLAG, {
    onCompleted: () => {
      refetch();
    },
  });

  const handleOnSelectOption = (codeText?: string) => {
    createPatientFlag({ variables: { virtaId, codeText } });
  };

  const handleOnDismiss = (flagId: string, versionId: string) => {
    dismissPatientFlag({ variables: { flagId, versionId } });
  };

  return (
    <FlagPickerWrapper>
      <TraitsTitleList
        direction="row"
        spacer={<Spacer width={15} />}
        interposeStyle={{ alignItems: "center" }}
      >
        <FormElementLabel labelMessage={labels.inputLabel} />
        <Button
          onPress={() => window.open("/virtapedia/30wlYYtjkeheRGOFVtEHq5")}
          labelMessage={{
            id: "See list of all possible traits",
            defaultMessage: "See list of all possible traits",
          }}
          intent="secondary"
          appearance="link"
          size="small"
        />
      </TraitsTitleList>
      <FlagPickerRow alignItems="flex-start">
        {loading ? <ActivityIndicator /> : null}
        {error ? (
          <Heading4>Traits Could Not Be Retrieved. Please Try Again</Heading4>
        ) : null}
        {isEmpty(activeFlagsToDisplay) && !loading && !error ? (
          <HelperText>
            No traits are assigned to this patient. You can add traits using the
            input below.
          </HelperText>
        ) : (
          <ChicletList
            direction="row"
            spacer={<Spacer width={15} />}
            interposeStyle={{ flex: 1, flexWrap: "wrap" }}
          >
            {activeFlagsToDisplay.map((flag) => (
              <Chiclet
                key={flag.id}
                label={flag.code.text}
                onDismiss={() => handleOnDismiss(flag.id, flag.meta.versionId)}
              />
            ))}
          </ChicletList>
        )}
      </FlagPickerRow>
      <ComboBox
        value={comboBoxValue}
        onChangeText={(value) => setComboBoxValue(value)}
        onSelectOption={handleOnSelectOption}
        style={{ flex: 1, flexBasis: "0%", display: "flex" }}
      >
        {results.map((result) => (
          <ComboBoxOption key={result} value={result}>
            {result}
          </ComboBoxOption>
        ))}
      </ComboBox>
    </FlagPickerWrapper>
  );
};
