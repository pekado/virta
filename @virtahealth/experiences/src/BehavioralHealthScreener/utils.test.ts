import {
  getFlattenedQuestionnaireItemLinkIds,
  getLinkIdsForAvailableQuestionItems,
  getLinkIdToQuestionnaireResponseItemMap,
} from "./utils";

describe("getFlattenedQuestionnaireItemLinkIds", () => {
  it("flattens a questionnaire with 1 group item", () => {
    const questionnaire: fhir.Questionnaire = {
      status: "draft",
      item: [
        {
          type: "group",
          linkId: "1",
          item: [
            {
              linkId: "1.1",
              type: "choice",
            },
            {
              linkId: "1.2",
              type: "choice",
            },
          ],
        },
      ],
    };
    expect(getFlattenedQuestionnaireItemLinkIds(questionnaire)).toEqual([
      "1.1",
      "1.2",
    ]);
  });
  it("flattens a questionnaire with no group items", () => {
    const questionnaire: fhir.Questionnaire = {
      status: "draft",
      item: [
        {
          linkId: "1.1",
          type: "choice",
        },
        {
          linkId: "1.2",
          type: "choice",
        },
      ],
    };
    expect(getFlattenedQuestionnaireItemLinkIds(questionnaire)).toEqual([
      "1.1",
      "1.2",
    ]);
  });

  it("flattens a questionnaire with several group items", () => {
    const questionnaire: fhir.Questionnaire = {
      status: "draft",
      item: [
        {
          type: "group",
          linkId: "1",
          item: [
            {
              linkId: "1.1",
              type: "choice",
            },
            {
              linkId: "1.2",
              type: "choice",
            },
          ],
        },
        {
          type: "group",
          linkId: "2",
          item: [
            {
              linkId: "2.1",
              type: "choice",
            },
            {
              linkId: "2.2",
              type: "choice",
            },
          ],
        },
        {
          type: "group",
          linkId: "3",
          item: [
            {
              linkId: "3.1",
              type: "choice",
            },
            {
              linkId: "3.2",
              type: "choice",
            },
          ],
        },
        {
          type: "group",
          linkId: "4",
          item: [
            {
              linkId: "4.1",
              type: "choice",
            },
            {
              linkId: "4.2",
              type: "choice",
            },
          ],
        },
      ],
    };
    expect(getFlattenedQuestionnaireItemLinkIds(questionnaire)).toEqual([
      "1.1",
      "1.2",
      "2.1",
      "2.2",
      "3.1",
      "3.2",
      "4.1",
      "4.2",
    ]);
  });

  it("returns an empty list for a questionnaire with no items", () => {
    const questionnaireWithNoItem: fhir.Questionnaire = {
      status: "draft",
    };
    expect(
      getFlattenedQuestionnaireItemLinkIds(questionnaireWithNoItem)
    ).toEqual([]);

    const questionnaireWithEmptyItems: fhir.Questionnaire = {
      status: "draft",
      item: [],
    };
    expect(
      getFlattenedQuestionnaireItemLinkIds(questionnaireWithEmptyItems)
    ).toEqual([]);
  });
});

describe("QuestionnaireResponse utils", () => {
  const mockQuestionnaireResponse: fhir.QuestionnaireResponse = {
    status: "in-progress",
    item: [
      {
        linkId: "0.1",
        answer: [
          {
            valueString: "yes",
          },
        ],
      },
      {
        linkId: "0.2",
        answer: [
          {
            valueString: "no",
          },
        ],
      },
      {
        linkId: "0.3",
        answer: [
          {
            valueString: "maybe",
          },
        ],
      },
      {
        linkId: "0.4",
        answer: [
          {
            valueString: "i dont know",
          },
        ],
      },
      {
        linkId: "0.5",
        answer: [
          {
            valueString: "can you repeat the question?",
          },
        ],
      },
    ],
  };

  const mockLinkIds: fhir.QuestionnaireItem["linkId"][] = [
    "0.1",
    "0.2",
    "0.3",
    "0.4",
    "0.5",
    "0.6",
    "0.7",
    "1.1",
    "1.2",
  ];
  describe("getLinkIdsForAvailableQuestionItems", () => {
    it("returns list of LinkIds for all answered questions, plus the next unanswered question", () => {
      const linkIds: fhir.QuestionnaireItem["linkId"][] = [...mockLinkIds];

      const questionnaireResponse: fhir.QuestionnaireResponse = {
        ...mockQuestionnaireResponse,
      };

      expect(
        getLinkIdsForAvailableQuestionItems(linkIds, questionnaireResponse)
      ).toEqual(["0.1", "0.2", "0.3", "0.4", "0.5", "0.6"]);
    });

    it("returns an empty list if supplied LinkIds list is empty", () => {
      const questionnaireResponse: fhir.QuestionnaireResponse = {
        ...mockQuestionnaireResponse,
      };
      expect(
        getLinkIdsForAvailableQuestionItems([], questionnaireResponse)
      ).toEqual([]);
    });

    it("returns the first question item's LinkId when there are no responses", () => {
      const linkIds = ["0.1", "1.1"];
      const questionnaireNoResponses: fhir.QuestionnaireResponse = {
        ...mockQuestionnaireResponse,
      };
      delete questionnaireNoResponses["item"];

      expect(
        getLinkIdsForAvailableQuestionItems(linkIds, questionnaireNoResponses)
      ).toEqual(["0.1"]);

      const questionnaireEmptyResponses: fhir.QuestionnaireResponse = {
        ...mockQuestionnaireResponse,
        item: [],
      };
      expect(
        getLinkIdsForAvailableQuestionItems(
          linkIds,
          questionnaireEmptyResponses
        )
      ).toEqual(["0.1"]);
    });
  });

  describe("getLinkIdToQuestionnaireResponseItemMap", () => {
    it("returns a mapping of LinkId to ResponseItem", () => {
      const questionnaireResponseItems = [...mockQuestionnaireResponse.item!];

      const got = getLinkIdToQuestionnaireResponseItemMap(
        questionnaireResponseItems
      );
      const expected: Record<
        fhir.QuestionnaireResponseItem["linkId"],
        fhir.QuestionnaireResponseItem
      > = {
        "0.1": {
          linkId: "0.1",
          answer: [
            {
              valueString: "yes",
            },
          ],
        },
        "0.2": {
          linkId: "0.2",
          answer: [
            {
              valueString: "no",
            },
          ],
        },
        "0.3": {
          linkId: "0.3",
          answer: [
            {
              valueString: "maybe",
            },
          ],
        },
        "0.4": {
          linkId: "0.4",
          answer: [
            {
              valueString: "i dont know",
            },
          ],
        },
        "0.5": {
          linkId: "0.5",
          answer: [
            {
              valueString: "can you repeat the question?",
            },
          ],
        },
      };

      expect(got).toEqual(expected);
    });
  });
});
