import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../../test";
import { FhirQuestionItemInput } from "./index";

describe("FHIR Question Item Input Field component", () => {
  const testSetQuestionnaireResponse = jest.fn((response) => response);

  afterEach(() => {
    testSetQuestionnaireResponse.mockClear();
  });

  it("renders input field for question item of type `question`", () => {
    const fhirQuestionInput = createComponentWithVirtaContext(
      <FhirQuestionItemInput
        itemData={{
          code: [{ code: "1234-5", display: "sample question" }],
          linkId: "test-linkId",
          type: "question",
        }}
        setQuestionnaireResponseItem={testSetQuestionnaireResponse}
      />
    );
    expect(fhirQuestionInput).toMatchSnapshot();
  });

  it("renders input field for question item that is not of type `question`", () => {
    const fhirQuestionInput = createComponentWithVirtaContext(
      <FhirQuestionItemInput
        itemData={{
          code: [{ code: "2345-6", display: "sample question in group" }],
          linkId: "test-decimal-linkId",
          extension: [{ valueCoding: { display: "mg/dL" }, url: "test/url" }],
          type: "decimal",
        }}
        setQuestionnaireResponseItem={testSetQuestionnaireResponse}
      />
    );
    expect(fhirQuestionInput).toMatchSnapshot();
  });

  it("will update questionnaire response with new answer item if one is not already present", () => {
    const expectedQuestionnaireResponseItem = {
      answer: [{ valueString: "this is some input" }],
      linkId: "test-random-linkId",
    };
    const questionItemInput = createComponentWithVirtaContext(
      <FhirQuestionItemInput
        itemData={{
          code: [{ code: "2345-6", display: "sample question in group" }],
          linkId: "test-random-linkId",
          type: "some-random-type",
        }}
        setQuestionnaireResponseItem={testSetQuestionnaireResponse}
      />
    );

    const textInput = questionItemInput.getByTestId("test-random-linkId");
    expect(textInput.props.value).toEqual("");

    fireEvent.changeText(textInput, "this is some input");

    expect(testSetQuestionnaireResponse).toHaveBeenCalledTimes(1);
    expect(testSetQuestionnaireResponse).toHaveBeenCalledWith(
      expectedQuestionnaireResponseItem
    );
  });

  it("will update existing answer in questionnaire response if it is already present", () => {
    const testQuestionnaireResponseItem = {
      answer: [{ valueDecimal: 0.2 }],
      linkId: "test-decimal-linkId",
    };

    const expectedQuestionnaireResponse = {
      answer: [{ valueDecimal: "100.1" }],
      linkId: "test-decimal-linkId",
    };
    const fhirQuestionnaireItem = createComponentWithVirtaContext(
      <FhirQuestionItemInput
        itemData={{
          code: [
            { code: "6543-2", display: "decimal sample question in group" },
          ],
          linkId: "test-decimal-linkId",
          extension: [{ valueCoding: { display: "mg/dL" }, url: "test/url" }],
          type: "decimal",
        }}
        setQuestionnaireResponseItem={testSetQuestionnaireResponse}
        questionnaireResponseItem={testQuestionnaireResponseItem}
      />
    );

    const textInput = fhirQuestionnaireItem.getByTestId("test-decimal-linkId");
    expect(textInput.props.value).toEqual("0.2");

    fireEvent.changeText(textInput, "100.1");

    expect(testSetQuestionnaireResponse).toHaveBeenCalledTimes(1);
    expect(testSetQuestionnaireResponse).toHaveBeenCalledWith(
      expectedQuestionnaireResponse
    );
  });

  // This scenario happens for certain lab tests that need to accept `>` and `<` inputs,
  // such as '< 2.4' or '> 4.3'
  it("will allow string answers for numeric questions that have a regex", () => {
    const testQuestionnaireResponseItem = {
      answer: [{ valueDecimal: 0.2 }],
      linkId: "test-decimal-linkId",
    };
    const expectedQuestionnaireResponse = {
      answer: [{ valueDecimal: "> 0.2" } as any],
      linkId: "test-decimal-linkId",
    };
    const fhirQuestionnaireItem = createComponentWithVirtaContext(
      <FhirQuestionItemInput
        itemData={{
          code: [
            { code: "6543-2", display: "decimal sample question in group" },
          ],
          linkId: "test-decimal-linkId",
          extension: [
            { valueCoding: { display: "mg/dL" }, url: "test/url" },
            {
              url: "http://hl7.org/fhir/StructureDefinition/regex",
              valueString: "^[><]\\s?\\d+(\\.\\d+)?$",
            },
          ],
          type: "decimal",
        }}
        setQuestionnaireResponseItem={testSetQuestionnaireResponse}
        questionnaireResponseItem={testQuestionnaireResponseItem}
      />
    );

    const textInput = fhirQuestionnaireItem.getByTestId("test-decimal-linkId");
    expect(textInput.props.value).toEqual("0.2");

    fireEvent.changeText(textInput, "> 0.2");
    expect(testSetQuestionnaireResponse).toHaveBeenCalledTimes(1);
    expect(testSetQuestionnaireResponse).toHaveBeenCalledWith(
      expectedQuestionnaireResponse
    );
  });

  it("will map `quantity` type answers to `valueQuantity`", () => {
    const testQuestionnaireResponseItem = {
      answer: [{ valueQuantity: { value: 0.2 } }],
      linkId: "test-quantity-linkId",
    };
    const expectedQuestionnaireResponse = {
      answer: [{ valueQuantity: { value: "20" } } as any],
      linkId: "test-quantity-linkId",
    };
    const fhirQuestionnaireItem = createComponentWithVirtaContext(
      <FhirQuestionItemInput
        itemData={{
          code: [
            { code: "6543-2", display: "decimal sample question in group" },
          ],
          linkId: "test-quantity-linkId",
          extension: [{ valueCoding: { display: "mg/dL" }, url: "test/url" }],
          type: "quantity",
        }}
        setQuestionnaireResponseItem={testSetQuestionnaireResponse}
        questionnaireResponseItem={testQuestionnaireResponseItem}
      />
    );

    const textInput = fhirQuestionnaireItem.getByTestId("test-quantity-linkId");
    expect(textInput.props.value).toEqual("0.2");

    fireEvent.changeText(textInput, "20");
    expect(testSetQuestionnaireResponse).toHaveBeenCalledTimes(1);
    expect(testSetQuestionnaireResponse).toHaveBeenCalledWith(
      expectedQuestionnaireResponse
    );
  });
});
