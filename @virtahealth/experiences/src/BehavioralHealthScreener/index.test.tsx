import * as React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { testClient, WrapComponentWithVirtaContext } from "../test";
import { BehavioralHealthScreener } from "./index";

describe("Behavioral Health Screener", () => {
  it("renders", async () => {
    testClient.get.mockReturnValueOnce(
      Promise.resolve(mockBehavioralHealthQuestionnaire)
    );
    const screener = render(
      <WrapComponentWithVirtaContext>
        <BehavioralHealthScreener
          virtaId={"123abc"}
          patientActionId={"mock-patient-action-id"}
          fhirQuestionnaireId={"mock-fhir-questionnaire-id"}
          imageMap={{}}
        />
      </WrapComponentWithVirtaContext>
    );

    await waitFor(() => expect(testClient.get).toBeCalled());

    screener.update(
      <WrapComponentWithVirtaContext>
        <BehavioralHealthScreener
          virtaId={"123abc"}
          patientActionId={"mock-patient-action-id"}
          fhirQuestionnaireId={"mock-fhir-questionnaire-id"}
          imageMap={{}}
        />
      </WrapComponentWithVirtaContext>
    );

    // TODO - this should work but doesn't due to a bug
    // https://github.com/callstack/react-native-testing-library/issues/553
    // once the bug is fixed, uncomment this test
    // await waitFor(() => {
    //   screener.queryByText("Self-Reflection");
    // });
    expect(screener).toMatchSnapshot();
  });
});

// eslint-disable-next-line jest/no-export
export const mockBehavioralHealthQuestionnaire = {
  contained: [
    {
      valueSet: {
        compose: {
          include: [
            {
              concept: [
                {
                  code: {
                    value: "confidence_0",
                  },
                  display: {
                    value: "I am not at all confident",
                  },
                },
                {
                  code: {
                    value: "confidence_1",
                  },
                  display: {
                    value: "I am a little confident",
                  },
                },
                {
                  code: {
                    value: "confidence_2",
                  },
                  display: {
                    value: "I am somewhat confident",
                  },
                },
                {
                  code: {
                    value: "confidence_3",
                  },
                  display: {
                    value: "I am very confident",
                  },
                },
              ],
            },
          ],
        },
        description: {
          value: "Confidence Scale",
        },
        extensible: {},
        id: {
          value: "LikertConfidence",
        },
        immutable: {
          value: true,
        },
        name: {
          value: "Confidence Scale",
        },
        status: {
          value: "ACTIVE",
        },
      },
    },
    {
      valueSet: {
        compose: {
          include: [
            {
              concept: [
                {
                  code: {
                    value: "frequency_0",
                  },
                  display: {
                    value: "Always",
                  },
                },
                {
                  code: {
                    value: "frequency_1",
                  },
                  display: {
                    value: "Often",
                  },
                },
                {
                  code: {
                    value: "frequency_2",
                  },
                  display: {
                    value: "Sometimes",
                  },
                },
                {
                  code: {
                    value: "frequency_3",
                  },
                  display: {
                    value: "Never",
                  },
                },
              ],
            },
          ],
        },
        description: {
          value: "Frequency Scale",
        },
        extensible: {},
        id: {
          value: "LikertFrequency",
        },
        immutable: {
          value: true,
        },
        name: {
          value: "Frequency Scale",
        },
        status: {
          value: "ACTIVE",
        },
      },
    },
  ],
  id: {
    value: "21ba9359-44bb-40d7-8dbe-3c49550e2af5",
  },
  item: [
    {
      code: [
        {
          code: {
            value: "self-reflection/self-efficacy-general",
          },
          display: {
            value: "Self-efficacy (General)",
          },
          system: {
            value: "Virta Health",
          },
        },
      ],
      item: [
        {
          code: [
            {
              code: {
                value: "abc",
              },
              display: {
                value: "i can manage",
              },
              system: {
                value: "http://loinc.org",
              },
            },
          ],
          linkId: {
            value: "0.1",
          },
          options: {
            fragment: {
              value: "LikertConfidence",
            },
          },
          required: {
            value: true,
          },
          text: {
            value:
              "I can manage to solve difficult problems if I try hard enough.",
          },
          type: {
            value: "CHOICE",
          },
        },
      ],
      linkId: {
        value: "0",
      },
      required: {
        value: true,
      },
      text: {
        value:
          "Rate your overall level of confidence based on the following sentence:",
      },
      type: {
        value: "GROUP",
      },
    },
    {
      code: [
        {
          code: {
            value: "self-reflection/self-efficacy-managing-emotions",
          },
          display: {
            value: "Self-efficacy (Managing Emotions)",
          },
          system: {
            value: "Virta Health",
          },
        },
      ],
      item: [
        {
          code: [
            {
              code: {
                value: "def",
              },
              display: {
                value: "unexpected events",
              },
              system: {
                value: "http://loinc.org",
              },
            },
          ],
          linkId: {
            value: "1.1",
          },
          options: {
            fragment: {
              value: "LikertConfidence",
            },
          },
          required: {
            value: true,
          },
          text: {
            value:
              "I am confident that I could deal efficiently with unexpected events.",
          },
          type: {
            value: "CHOICE",
          },
        },
      ],
      linkId: {
        value: "1",
      },
      required: {
        value: true,
      },
      text: {
        value:
          "Rate your overall level of confidence based on the following sentence:",
      },
      type: {
        value: "GROUP",
      },
    },
    {
      code: [
        {
          code: {
            value: "self-reflection/perceived-control-over-eating",
          },
          display: {
            value: "Perceived control over eating",
          },
          system: {
            value: "Virta Health",
          },
        },
      ],
      item: [
        {
          code: [
            {
              code: {
                value: "ghi",
              },
              display: {
                value: "cravings",
              },
              system: {
                value: "http://loinc.org",
              },
            },
          ],
          linkId: {
            value: "2.1",
          },
          options: {
            fragment: {
              value: "LikertFrequency",
            },
          },
          required: {
            value: true,
          },
          text: {
            value:
              "How often did you go out of your way to get the food you were craving?",
          },
          type: {
            value: "CHOICE",
          },
        },
      ],
      linkId: {
        value: "2",
      },
      required: {
        value: true,
      },
      text: {
        value: "On average during the past 4 weeks….",
      },
      type: {
        value: "GROUP",
      },
    },
  ],
  meta: {
    lastUpdated: {
      precision: "MICROSECOND",
      timezone: "+00:00",
      valueUs: "1598317684291142",
    },
    profile: [
      {
        value:
          "http://hl7.org/fhir/us/sdc/StructureDefinition/sdc-questionnaire|2.0",
      },
    ],
    versionId: {
      value: "MTU5ODMxNzY4NDI5MTE0MjAwMA",
    },
  },
  status: {
    value: "DRAFT",
  },
  title: {
    value: "Self-Reflection",
  },
  publisher: {
    value: "Virta Health",
  },
};

// eslint-disable-next-line jest/no-export
export const mockBehavioralHealthFollowUp = {
  actionTitle: "Focus on emotional agility",
  activityTitle: "Emotional agility",
  activityUrl: "https://en.wikipedia.org/",
};
