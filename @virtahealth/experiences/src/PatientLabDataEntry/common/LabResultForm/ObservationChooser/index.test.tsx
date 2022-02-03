import * as React from "react";
import { act, render, waitFor, fireEvent } from "@testing-library/react-native";
import {
  createComponentWithVirtaContext,
  WrapComponentWithVirtaContext,
} from "../../../../test";
import { hbA1cQuestionnaire } from "../../../questionnaires";
import { ObservationChooser } from "./index";

const ChooserTester = () => {
  const [questionnaires, setQuestionnaires] = React.useState<
    fhir.Questionnaire[]
  >([]);
  const [responses, setResponses] = React.useState<
    fhir.QuestionnaireResponse[]
  >([]);

  return (
    <ObservationChooser
      observationQuestionnaires={questionnaires}
      setObservationQuestionnaires={setQuestionnaires}
      observationResponses={responses}
      setObservationResponses={setResponses}
    />
  );
};

describe("ObservationChooser", () => {
  it("renders", async () => {
    const observationChooser = createComponentWithVirtaContext(
      <ChooserTester />
    );
    await waitFor(() => {
      observationChooser.getByTestId("lipid");
    });
    expect(observationChooser).toMatchSnapshot();
  });

  describe("test questionnaire displays", () => {
    it.each([
      ["a1c", "HbA1c"],
      ["metabolicPanel", "Metabolic panel"],
      ["lipid", "Lipids"],
      ["antiGad", "GAD65 Antibody"],
      ["cPeptide", "C peptide panel"],
      ["hsCrp", "hsCRP"],
      ["albuminCreatinine", "Albumin/Creatinine Ratio, Urine"],
      ["nmrLipoprofile", "Lipid NMR panel"],
      ["serumInsulin", "Insulin, Serum"],
      ["tsh", "TSH"],
      ["clinicalTrial", "Clinical Trial"],
      ["biometric", "Biometric"],
    ])(
      "displays %s when the %s checkbox is selected",
      async (checkboxTestId, questionnaireDisplayText) => {
        let questionnaires: fhir.Questionnaire[] = [];
        const setQuestionnaires = jest.fn(
          (data: fhir.Questionnaire[]) => (questionnaires = [...data])
        );
        const responses: fhir.QuestionnaireResponse[] = [];
        const setResponses = jest.fn();

        const observationChooser = render(
          <WrapComponentWithVirtaContext>
            <ObservationChooser
              observationQuestionnaires={questionnaires}
              setObservationQuestionnaires={setQuestionnaires}
              observationResponses={responses}
              setObservationResponses={setResponses}
            />
          </WrapComponentWithVirtaContext>
        );

        const inputCheckbox = observationChooser.getByTestId(checkboxTestId);
        act(() => fireEvent.press(inputCheckbox));
        observationChooser.update(
          <WrapComponentWithVirtaContext>
            <ObservationChooser
              observationQuestionnaires={questionnaires}
              setObservationQuestionnaires={setQuestionnaires}
              observationResponses={responses}
              setObservationResponses={setResponses}
            />
          </WrapComponentWithVirtaContext>
        );

        // TODO - this should work but doesn't due to a bug
        // https://github.com/callstack/react-native-testing-library/issues/553
        // once the bug is fixed, switch to the original version of the test and remove the if/else
        // await waitFor(() =>
        //   observationChooser.getAllByText(questionnaireDisplayText)
        // );
        // TODO: Jest rules don't like conditional expects...
        /* eslint-disable jest/no-conditional-expect */
        if (
          checkboxTestId === "a1c" ||
          checkboxTestId === "antiGad" ||
          checkboxTestId === "hsCrp" ||
          checkboxTestId === "tsh"
        ) {
          expect(
            observationChooser.toJSON()[3]?.children[0].children[1].children[0]
              .children[0].children[0].children[0].children[0]
          ).toEqual(questionnaireDisplayText);
        } else {
          expect(
            observationChooser.toJSON()[3]?.children[0].children[0].children[0]
          ).toEqual(questionnaireDisplayText);
        }
        /* eslint-enable jest/no-conditional-expect */
      }
    );
  });

  it("displays multiple questionnaires", async () => {
    let questionnaires: fhir.Questionnaire[] = [];
    const setQuestionnaires = jest.fn(
      (data: fhir.Questionnaire[]) => (questionnaires = [...data])
    );
    const responses: fhir.QuestionnaireResponse[] = [];
    const setResponses = jest.fn();

    const observationChooser = render(
      <WrapComponentWithVirtaContext>
        <ObservationChooser
          observationQuestionnaires={questionnaires}
          setObservationQuestionnaires={setQuestionnaires}
          observationResponses={responses}
          setObservationResponses={setResponses}
        />
      </WrapComponentWithVirtaContext>
    );
    const a1cCheckbox = observationChooser.getByTestId("a1c");
    act(() => fireEvent.press(a1cCheckbox));
    observationChooser.update(
      <WrapComponentWithVirtaContext>
        <ObservationChooser
          observationQuestionnaires={questionnaires}
          setObservationQuestionnaires={setQuestionnaires}
          observationResponses={responses}
          setObservationResponses={setResponses}
        />
      </WrapComponentWithVirtaContext>
    );

    // TODO - this should work but doesn't due to a bug
    // https://github.com/callstack/react-native-testing-library/issues/553
    // once the bug is fixed, switch to the original version of the test
    // await waitFor(() => observationChooser.getAllByText("Hgb A1c"));
    expect(
      String(
        observationChooser.toJSON()[3]?.children[0].children[1].children[0]
          .children[0].children[0].children[0].children[0]
      )
    ).toEqual("HbA1c");

    const lipidCheckbox = observationChooser.getByTestId("lipid");
    act(() => fireEvent.press(lipidCheckbox));
    observationChooser.update(
      <WrapComponentWithVirtaContext>
        <ObservationChooser
          observationQuestionnaires={questionnaires}
          setObservationQuestionnaires={setQuestionnaires}
          observationResponses={responses}
          setObservationResponses={setResponses}
        />
      </WrapComponentWithVirtaContext>
    );

    // TODO - this should work but doesn't due to a bug
    // https://github.com/callstack/react-native-testing-library/issues/553
    // once the bug is fixed, switch to the original version of the test
    // await waitFor(() => observationChooser.getByText("Lipid 1996 panel"));
    expect(
      observationChooser.toJSON()[4]?.children[0].children[0].children[0]
    ).toEqual("Lipids");
  });

  describe("questionnaire responses", () => {
    it("sets the response for a questionnaire", () => {
      const mockResponseSetter = jest.fn();
      const observationChooser = createComponentWithVirtaContext(
        <ObservationChooser
          observationQuestionnaires={[hbA1cQuestionnaire]}
          setObservationQuestionnaires={() => undefined}
          observationResponses={[
            {
              item: [
                {
                  item: [],
                  linkId: "/4548-4",
                },
              ],
              status: "in-progress",
            },
          ]}
          setObservationResponses={mockResponseSetter}
        />
      );
      const hbA1cInput = observationChooser.getByTestId("/4548-4");
      fireEvent.changeText(hbA1cInput, "6.5");
      expect(mockResponseSetter).toHaveBeenCalledWith([
        {
          status: "in-progress",
          item: [
            {
              linkId: "/4548-4",
              item: [
                {
                  linkId: "/4548-4",
                  answer: [
                    {
                      valueDecimal: "6.5",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]);
    });
  });
});
