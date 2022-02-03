import * as React from "react";
import { cloneDeep } from "@virtahealth/utils";
import { Input } from "../../Input";
import styled from "../../styled-components";
import { VirtaObservation } from "../../FhirTypes";
import { Interpose } from "../../Interpose";
import { Spacer } from "../../Spacer";

const StyledInput = styled(Input)`
  margin-top: 0px;
  margin-right: 0px;
  min-width: 205px;
`;

const Wrapper = styled.View`
  flex-direction: column;
`;

const StyledInterpose = styled(Interpose)`
  flex-wrap: wrap;
  width: 100%;
`;

export interface FhirObservationInputProps {
  observation: VirtaObservation;
  setObservation: (observation: VirtaObservation) => void;
  verticalSpacer?: React.ReactNode;
}

const ObservationInput: React.FC<FhirObservationInputProps> = ({
  observation,
  setObservation,
}) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const initialValue =
      observation.valueQuantity && observation.valueQuantity.value
        ? observation.valueQuantity.value.toString()
        : "";
    setValue(initialValue);
  }, []);

  React.useEffect(() => {
    const newObservation = cloneDeep(observation);
    newObservation.valueQuantity!.value = value ? parseFloat(value) : undefined;
    setObservation(newObservation);
  }, [value]);

  const observationUnit =
    observation.valueQuantity && observation.valueQuantity.unit;

  return (
    <StyledInput
      value={value}
      onChangeText={(text) => setValue(text)}
      labelMessage={{
        id: observation.code.text,
        defaultMessage: observation.code.text,
      }}
      insetText={observationUnit}
    />
  );
};

export const FhirObservationInput: React.FC<FhirObservationInputProps> = ({
  observation,
  setObservation,
  verticalSpacer,
}) => {
  if (observation.hasMember && observation.hasMember.length > 0) {
    return (
      <StyledInterpose with={<Spacer width={32} />} flexDirection="row">
        {observation.hasMember.map((obs) => (
          <Wrapper key={obs.id}>
            {verticalSpacer}
            <ObservationInput
              key={obs.id}
              observation={obs}
              setObservation={setObservation}
            />
            {verticalSpacer}
          </Wrapper>
        ))}
      </StyledInterpose>
    );
  }
  return (
    <ObservationInput
      observation={observation}
      setObservation={setObservation}
    />
  );
};
