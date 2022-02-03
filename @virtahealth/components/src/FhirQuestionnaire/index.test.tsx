import * as React from "react";
import { Text } from "react-native";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import * as hbA1CQuestionnaire from "./hbA1c.json";
import * as partialCmpQuestionnaire from "./cmp.json";
import { FhirQuestionnaire } from "./index";

describe("FHIR Questionnaire component", () => {
  it("renders children", () => {
    const { getByText } = createComponentWithVirtaContext(
      <FhirQuestionnaire
        questionnaire={{ status: "draft" }}
        setQuestionnaireResponse={() => undefined}
      >
        <Text>hello</Text>
      </FhirQuestionnaire>
    );
    expect(getByText("hello")).toBeTruthy();
  });

  it("renders questionnaire", () => {
    const fhirQuestionnaire = createComponentWithVirtaContext(
      <FhirQuestionnaire
        questionnaire={{
          status: "draft",
          item: [
            {
              code: [{ code: "1234-5", display: "sample question" }],
              linkId: "test-linkId",
              type: "question",
            },
            {
              code: [{ code: "5432-1", display: "sample group of questions" }],
              linkId: "test-linkId2",
              type: "group",
              item: [
                {
                  code: [{ code: "2345-6", display: "sample group question" }],
                  linkId: "test-string-linkId",
                  type: "string",
                },
                {
                  code: [
                    {
                      code: "2345-6",
                      display: "another sample group question",
                    },
                  ],
                  linkId: "test-decimal-linkId",
                  type: "decimal",
                },
              ],
            },
          ],
        }}
        setQuestionnaireResponse={() => undefined}
      />
    );
    expect(fhirQuestionnaire).toMatchSnapshot();
  });

  it("updates responses appropriately", () => {
    const testSetQuestionnaireResponse = jest.fn();
    const hbA1cQuestionnaireView = createComponentWithVirtaContext(
      <FhirQuestionnaire
        questionnaire={hbA1CQuestionnaire}
        setQuestionnaireResponse={testSetQuestionnaireResponse}
        questionnaireResponse={{
          item: [
            {
              item: [],
              linkId: "/4548-4",
            },
          ],
          status: "in-progress",
        }}
      />
    );
    const hbA1cInput = hbA1cQuestionnaireView.getByTestId("/4548-4");
    fireEvent.changeText(hbA1cInput, "6.5");
    expect(testSetQuestionnaireResponse).toHaveBeenCalledWith({
      status: "in-progress",
      item: [
        {
          linkId: "/4548-4",
          item: [
            {
              linkId: "/4548-4",
              answer: [{ valueDecimal: "6.5" }],
            },
          ],
        },
      ],
    });
  });

  describe("with nested group items", () => {
    it("updates response appropriately", () => {
      const testSetQuestionnaireResponse = jest.fn();
      const cmpQuestionnaireView = createComponentWithVirtaContext(
        <FhirQuestionnaire
          questionnaire={partialCmpQuestionnaire}
          setQuestionnaireResponse={testSetQuestionnaireResponse}
          questionnaireResponse={{
            item: [
              {
                item: [],
                linkId: "/24323-8",
              },
            ],
            status: "in-progress",
          }}
        />
      );
      const cmpInput = cmpQuestionnaireView.getByTestId(
        "/24323-8/24326-1/2951-2"
      );
      fireEvent.changeText(cmpInput, "6.5");
      expect(testSetQuestionnaireResponse).toHaveBeenCalledWith({
        status: "in-progress",
        item: [
          {
            linkId: "/24323-8",
            item: [
              {
                linkId: "/24323-8/24326-1/2951-2",
                answer: [{ valueDecimal: "6.5" }],
              },
            ],
          },
        ],
      });
    });
  });
});
