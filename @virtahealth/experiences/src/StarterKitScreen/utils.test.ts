// this mock data is duplicated here & in docs because TS is unhappy
// with the file not being in this package and fixing would require updating
// how the packages are built
import * as starterKitQuestionnaire from "./mock_data/starterKitQuestionnaire.json";
import { generateQuestionnaireResponse, initialAnswersToValues } from "./utils";

const result = {
  author: { uri: { value: "Patient/mock-virta-id" } },
  id: undefined,
  item: [
    {
      linkId: { value: "isBMOC" },
      answer: [{ value: { boolean: { value: true } } }],
    },
    {
      linkId: { value: "enableXLScale" },
      answer: [{ value: { boolean: { value: false } } }],
    },
    { linkId: { value: "hasBloodPressureCuff" }, answer: [] },
    { linkId: { value: "hasXLScale" }, answer: [] },
    {
      linkId: { value: "shippingAddress" },
      item: [
        {
          linkId: { value: "shippingAddress.street" },
          answer: [{ value: { string: { value: "123 Main St" } } }],
        },
        {
          linkId: { value: "shippingAddress.aptUnit" },
          answer: [{ value: { string: { value: "Apt 2" } } }],
        },
        {
          linkId: { value: "shippingAddress.city" },
          answer: [{ value: { string: { value: "Saint Johns" } } }],
        },
        {
          linkId: { value: "shippingAddress.state" },
          answer: [{ value: { string: { value: "FL" } } }],
        },
        {
          linkId: { value: "shippingAddress.zip" },
          answer: [{ value: { string: { value: "32259" } } }],
        },
        { linkId: { value: "shippingAddress.isMain" }, answer: [] },
      ],
    },
  ],
  questionnaire: {
    uri: { value: "Questionnaire/4e40c483-d749-4ec3-969f-6285b4c1e5ea" },
  },
  source: { uri: { value: "Patient/mock-virta-id" } },
  status: { value: "COMPLETED" },
  subject: { uri: { value: "Patient/mock-virta-id" } },
};

describe("generate questionnaire response", () => {
  const values = {
    shippingAddress: {
      street: "123 Main St",
      aptUnit: "Apt 2",
      city: "Saint Johns",
      zip: "32259",
      state: "FL",
    },
    isBMOC: true,
    enableXLScale: false,
  };
  const options = { virtaId: "mock-virta-id" };
  const initialAnswers: { linkId: string; answer: any }[] = [
    { linkId: "shippingAddress.street", answer: "123 Main St" },
    { linkId: "shippingAddress.aptUnit", answer: "Apt 2" },
    { linkId: "shippingAddress.city", answer: "Saint Johns" },
    { linkId: "shippingAddress.state", answer: "FL" },
    { linkId: "shippingAddress.zip", answer: "32259" },
  ];

  it("returns correct FhirQuestionnaireResponse format", () => {
    expect(
      generateQuestionnaireResponse(starterKitQuestionnaire, values, options)
    ).toEqual(result);
  });
  it("return object values from FhirInitialAnswersArray", () => {
    expect(
      initialAnswersToValues(initialAnswers, starterKitQuestionnaire)
    ).toEqual({
      shippingAddress: {
        street: "123 Main St",
        aptUnit: "Apt 2",
        city: "Saint Johns",
        zip: "32259",
        state: "FL",
      },
    });
  });
  it("return object values from FhirInitialAnswersArray withiBMOC and enabledXLScale", () => {
    expect(
      initialAnswersToValues(
        initialAnswers.concat([
          { linkId: "isBMOC", answer: "true" },
          { linkId: "enableXLScale", answer: "false" },
        ]),
        starterKitQuestionnaire
      )
    ).toEqual({
      shippingAddress: {
        street: "123 Main St",
        aptUnit: "Apt 2",
        city: "Saint Johns",
        zip: "32259",
        state: "FL",
      },
      isBMOC: true,
      enableXLScale: false,
    });
  });
});
