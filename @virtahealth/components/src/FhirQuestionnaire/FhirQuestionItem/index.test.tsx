import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../../test";
import { FhirQuestionItem } from "./index";

describe("FHIR Question Item component", () => {
  describe("question item types", () => {
    const sampleQuestion = {
      code: [{ code: "1234-5", display: "sample question" }],
      linkId: "test-linkId",
      type: "decimal",
    };

    it("renders question item of type `question`", () => {
      const fhirQuestion = createComponentWithVirtaContext(
        <FhirQuestionItem
          questionItem={sampleQuestion}
          setQuestionnaireResponseItem={() => undefined}
        />
      );
      expect(fhirQuestion).toMatchSnapshot();
    });

    it("adds the response to response", () => {
      const setResponseMock = jest.fn();
      const fhirQuestion = createComponentWithVirtaContext(
        <FhirQuestionItem
          questionItem={sampleQuestion}
          setQuestionnaireResponseItem={setResponseMock}
        />
      );
      const input = fhirQuestion.getByTestId(sampleQuestion.linkId);
      fireEvent.changeText(input, "123");
      expect(setResponseMock).toHaveBeenLastCalledWith({
        linkId: sampleQuestion.linkId,
        answer: [{ valueDecimal: "123" }], // We should do some cleanup on typing eventually
      });
    });
  });

  describe("group item types", () => {
    const sampleGroup = {
      code: [{ code: "1234-5", display: "sample group" }],
      linkId: "test-group-linkId",
      type: "group",
      item: [
        {
          code: [{ code: "2345-6", display: "sample question in group" }],
          linkId: "test-decimal-linkId",
          type: "decimal",
        },
      ],
    };

    it("renders question item of type `group`", () => {
      const fhirQuestion = createComponentWithVirtaContext(
        <FhirQuestionItem
          questionItem={sampleGroup}
          setQuestionnaireResponseItem={() => undefined}
        />
      );
      expect(fhirQuestion).toMatchSnapshot();
    });

    it("adds a response item if the response does not include the group", () => {
      const setResponseMock = jest.fn();
      createComponentWithVirtaContext(
        <FhirQuestionItem
          questionItem={sampleGroup}
          setQuestionnaireResponseItem={setResponseMock}
        />
      );
      expect(setResponseMock).toHaveBeenLastCalledWith({
        linkId: sampleGroup.linkId,
        item: [],
      });
    });

    it("does not add a response item if the response includes the group", () => {
      const setResponseMock = jest.fn();
      createComponentWithVirtaContext(
        <FhirQuestionItem
          questionItem={sampleGroup}
          setQuestionnaireResponseItem={setResponseMock}
          questionnaireResponseItem={{
            linkId: sampleGroup.linkId,
            item: [],
          }}
        />
      );
      expect(setResponseMock).not.toHaveBeenCalled();
    });

    it("adds the responses to the under the group item", () => {
      const setResponseMock = jest.fn();
      const fhirQuestion = createComponentWithVirtaContext(
        <FhirQuestionItem
          questionItem={sampleGroup}
          setQuestionnaireResponseItem={setResponseMock}
          questionnaireResponseItem={{
            linkId: sampleGroup.linkId,
            item: [],
          }}
        />
      );

      const input = fhirQuestion.getByTestId(sampleGroup.item[0].linkId);
      fireEvent.changeText(input, "123");
      expect(setResponseMock).toHaveBeenLastCalledWith({
        linkId: sampleGroup.linkId,
        item: [
          {
            linkId: sampleGroup.item[0].linkId,
            answer: [{ valueDecimal: "123" }],
          },
        ],
      });
    });
  });
});
