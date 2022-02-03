import * as React from "react";
import { createComponentWithVirtaContext } from "../../test";
import { FhirObservationInput } from "./index";

it("renders the FHIR observation input", () => {
  const FhirObservationInputContainer = createComponentWithVirtaContext(
    <FhirObservationInput
      observation={{
        code: {
          text: "Glucose",
        },
        status: "final",
        valueQuantity: {
          unit: "mg/ml",
        },
      }}
      setObservation={jest.fn}
    />
  );
  expect(FhirObservationInputContainer).toMatchSnapshot();
});
