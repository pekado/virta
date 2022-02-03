import * as React from "react";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { createComponentWithVirtaContext, testClient } from "../test";
import { PatientLabDataEntry, LabDataExperienceType } from "./index";

// Mock device specific components used
jest.mock("@virtahealth/components", () => {
  const RealModule = jest.requireActual("@virtahealth/components");
  return {
    ...RealModule,
    DateInput: "DateInput",
    JsonFilePicker: "JsonFilePicker",
  };
});

describe("PatientLabDataEntry", () => {
  beforeEach(() => {
    testClient.get = jest.fn();
    testClient.get.mockReturnValue(Promise.resolve([]));
  });

  it("initially renders the labs results view", async () => {
    const initialLabDataEntry = createComponentWithVirtaContext(
      <PatientLabDataEntry
        patient={{
          virta_id: "a virta id",
          first_name: "Test",
          last_name: "Patient",
          date_of_birth: "1-1-1980",
        }}
        currentView={LabDataExperienceType.Index}
        setCurrentView={() => undefined}
      />
    );

    // TODO - this should work but doesn't due to a bug
    // https://github.com/callstack/react-native-testing-library/issues/553
    // once the bug is fixed, switch test back to the original
    //   expect(
    //     initialLabDataEntry.queryByText("No lab results available")
    //   ).toBeTruthy();
    await waitFor(() => {
      expect(
        initialLabDataEntry.toJSON().children[0].children[2].children[0]
      ).toEqual("No lab results available");
    });

    expect(initialLabDataEntry).toMatchSnapshot();
  });

  // TODO: Refactor this test to test the overall component changes based on state.
  it.skip("can submit a lab result", async () => {
    const mockPost = jest.fn();
    testClient.post = mockPost;

    const patientLabDataEntry = createComponentWithVirtaContext(
      <PatientLabDataEntry
        patient={{
          virta_id: "a virta id",
          first_name: "Test",
          last_name: "Patient",
          date_of_birth: "1-1-1980",
        }}
        currentView={LabDataExperienceType.Create}
        setCurrentView={() => undefined}
      />
    );
    // Enter issue date
    const issueInput = patientLabDataEntry.getByTestId("collectionDate");
    fireEvent.changeText(issueInput, "6-1-2020");
    fireEvent(issueInput, "blur");
    // Press A1C checkbox
    const a1CCheckbox = patientLabDataEntry.getByTestId("a1c");
    fireEvent.press(a1CCheckbox);
    expect(patientLabDataEntry.getByLabelText("checked")).toBeTruthy();
    // Enter A1C value
    await waitFor(() => patientLabDataEntry.getAllByText("Hgb A1c"));
    const a1CInput = patientLabDataEntry.getByTestId("/4548-4");
    fireEvent.changeText(a1CInput, "6.5");
    // Submit result
    const saveButton = patientLabDataEntry.getByTestId("save");
    fireEvent.press(saveButton);
    expect(mockPost).toHaveBeenCalledWith("/labs/lab_results", {
      lab_result: {
        presentedForm: undefined,
        category: {
          coding: [
            {
              code: "LAB",
              display: "Laboratory",
              system: "http://hl7.org/fhir/v2/0074",
            },
          ],
        },
        code: { coding: [] },
        effective: new Date("6-1-2020"),
        issued: new Date("6-1-2020"),
        resourceType: "DiagnosticReport",
        result: [
          {
            category: [
              {
                coding: [
                  {
                    code: "LAB",
                    display: "Laboratory",
                    system: "http://hl7.org/fhir/v2/0074",
                  },
                ],
              },
            ],
            code: {
              coding: [],
              text: "Hgb A1c MFr Bld",
            },
            effectiveDateTime: new Date("6-1-2020"),
            hasMember: [
              {
                category: [
                  {
                    coding: [
                      {
                        code: "LAB",
                        display: "Laboratory",
                        system: "http://hl7.org/fhir/v2/0074",
                      },
                    ],
                  },
                ],
                code: {
                  coding: [
                    {
                      code: "4548-4",
                      display: "Hgb A1c MFr Bld",
                      system: "http://loinc.org",
                    },
                  ],
                  text: "Hgb A1c MFr Bld",
                },
                effectiveDateTime: new Date("6-1-2020"),
                issued: new Date("6-1-2020"),
                resourceType: "Observation",
                status: "final",
                subject: {
                  reference: "Patient/a virta id",
                },
                valueQuantity: {
                  unit: "%",
                  value: 6.5,
                },
              },
            ],
            issued: new Date("6-1-2020"),
            resourceType: "Observation",
            status: "final",
            subject: {
              reference: "Patient/a virta id",
            },
          },
        ],
        status: "final",
        subject: {
          reference: "Patient/a virta id",
        },
      },
    });
  });
});
