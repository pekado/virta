import * as React from "react";
import { FhirObservationInput } from "@virtahealth/components";

export const ObservationInputExample = () => {
  const [observation, setObservation] = React.useState({
    code: {
      text: "Glucose",
    },
    status: "final",
    valueQuantity: {
      value: 1.6,
      unit: "mg/ml",
    },
  });

  return (
    <FhirObservationInput
      observation={observation}
      setObservation={setObservation}
    />
  );
};
