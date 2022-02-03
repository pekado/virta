import * as React from "react";
import { View } from "react-native";
import { Heading1, Heading4 } from "./../";

// Subset of FHIR Interfaces
// Would ideally come from a FHIR source of truth for TS
interface Quantity {
  value: number;
  unit: string;
  system: string;
  code: string;
}

interface ReferenceQuantity {
  [key: string]: Quantity;
}

interface Codable {
  system: string;
  code: string;
  display: string;
}

interface CodableConcept {
  coding: Codable[];
}

interface Observation {
  resourceType: "Observation";
  id: string;
  code: CodableConcept;
  status: string;
  subject: {
    reference: string;
    display: string;
  };
  valueQuantity: Quantity;
  referenceRange: ReferenceQuantity[];
}

// End FHIR

interface ObservationProps {
  observation: Observation;
}

export const ObservationBlock: React.FC<ObservationProps> = ({
  observation,
}) => (
  <View>
    <Heading4>{observation.code.coding[0].display}</Heading4>
    <Heading1>
      {observation.valueQuantity.value} {observation.valueQuantity.unit}{" "}
    </Heading1>
  </View>
);
