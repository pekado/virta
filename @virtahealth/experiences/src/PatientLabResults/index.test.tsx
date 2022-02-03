import * as React from "react";
import { Text } from "react-native";
import { waitFor } from "@testing-library/react-native";
import { VirtaDiagnosticReport } from "@virtahealth/components";
import { createComponentWithVirtaContext, testClient } from "../test";
import { PatientLabResults } from "./index";

describe("PatientLabResult", () => {
  it("renders no results when a virta id is not given", async () => {
    const noVirtaIdLabResults = createComponentWithVirtaContext(
      <PatientLabResults
        virtaId={""}
        // eslint-disable-next-line react/no-unescaped-entities
        loadingIndicator={<Text>I'm loading</Text>}
      />
    );

    // TODO - this should work but doesn't due to a bug
    // https://github.com/callstack/react-native-testing-library/issues/553
    // once the bug is fixed, switch test back to the original
    // expect(
    //   noVirtaIdLabResults.queryByText("No lab results available")
    // ).toBeTruthy()
    expect(noVirtaIdLabResults.toJSON().children[0]).toEqual(
      "No lab results available"
    );
  });

  it("renders the results when the results are fetched", async () => {
    testClient.get.mockReturnValueOnce(Promise.resolve(testLabResults));
    const fullResults = createComponentWithVirtaContext(
      <PatientLabResults
        virtaId={"a_virta_id"}
        // eslint-disable-next-line react/no-unescaped-entities
        loadingIndicator={<Text>I'm loading</Text>}
      />
    );
    await waitFor(
      () =>
        expect(fullResults.queryAllByText("Metabolic Panel")).toHaveLength(2) // Should have checkbox label and panel title
    );
  });

  it("renders no results when no results are returned", async () => {
    testClient.get.mockReset();
    testClient.get.mockReturnValue(Promise.resolve([]));
    const noVirtaIdLabResults = createComponentWithVirtaContext(
      <PatientLabResults
        virtaId={"a_virta_id"}
        // eslint-disable-next-line react/no-unescaped-entities
        loadingIndicator={<Text>I'm loading</Text>}
      />
    );
    // TODO - this should work but doesn't due to a bug
    // https://github.com/callstack/react-native-testing-library/issues/553
    // once the bug is fixed, switch test back to the original
    // await waitFor(() => {
    //   expect(
    //     noVirtaIdLabResults.queryByText("No lab results available")
    //   ).toBeTruthy();
    // });
    await waitFor(() =>
      expect(noVirtaIdLabResults.toJSON().children[0]).toEqual(
        "No lab results available"
      )
    );
  });
});

const testLabResults: VirtaDiagnosticReport[] = [
  {
    id: "diagnostic_report_1",
    status: "final",
    effectiveDateTime: "2020-07-19",
    code: {},
    result: [
      {
        id: "observation_1",
        status: "final",
        code: {
          text: "CMP",
        },
        related: [
          {
            id: "observation_2",
            code: { coding: [{ code: "2345-7" }], text: "Glucose SerPl-mCnc" },
            status: "final",
            valueQuantity: {
              value: 6.8,
            },
          },
        ],
      },
    ],
  },
];
