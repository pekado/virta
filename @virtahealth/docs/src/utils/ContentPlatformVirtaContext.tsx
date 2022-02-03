import * as React from "react";
import { VirtaContext } from "@virtahealth/components";
import { base } from "@virtahealth/styles";
import emptyVirtaClient from "./emptyVirtaClient";

export const ContentPlatformVirtaContext: React.FC = ({ children }) => {
  return (
    <VirtaContext
      virtaId={"13124"}
      client={emptyVirtaClient}
      theme={base}
      launchDarkly={
        {
          getJSONFlag: (flagName: string, defaultValue: unknown) => {
            if (flagName === "action_callout") {
              return { enabled: false };
            }
            return defaultValue;
          },
        } as any
      }
      gqlClient={
        {
          query: () => {
            return {
              data: {
                seriesList: [
                  {
                    patientSeriesId: "dc00a132-e4f0-11eb-a967-3fbdb059086e",
                    title: "Welcome",
                    oneTimeActions: [
                      {
                        patientActionId: "dc01d6e2-e4f0-11eb-a967-6f8c455d3501",
                        title: "Watch: Welcome to Virta",
                        minutesToComplete: 5,
                        whatDetails:
                          "Take a quick tour of what you can expect in the Virta treatment. ",
                        whenDetails:
                          "Watch this video as soon as possible. These actions will prepare you for your Welcome Call with your Virta Health Coach.",
                        ctaLink:
                          "https://s3-us-west-2.amazonaws.com/ketomodulesprod/Welcome-to-Virta_SoftServe_v1.m4v",
                        ctaLabel: "Start",
                        createdOnUtc: "2021-07-14 22:14:29.803669+00:00",
                        updatedOnUtc: "2021-07-14 22:14:29.803669+00:00",
                        contentType: "video",
                        type: "checkmark",
                        endDateUtc: null,
                        actionContentId: "23425764574563453",
                        calloutText: "25 people have watched this today",
                      },
                      {
                        patientActionId:
                          "928832834-2ewerwerwf-wfwe-wefwe-wefwfewefwf",
                        title: "Read: Setting Your Targets and Goals",
                        minutesToComplete: 4,
                        whatDetails:
                          "Find out what A1c measures, how your daily blood glucose readings translate to an A1c level, and how targets are set based on your level.",
                        whenDetails: "",
                        ctaLink:
                          "/discover/content/7ff812e9-c389-4978-81fa-d3a2ecada28f",
                        ctaLabel: "Start",
                        createdOnUtc: null,
                        updatedOnUtc: null,
                        contentType: "article",
                        type: "checkmark",
                        endDateUtc: null,
                        actionContentId: "91024234589230492342",
                        calloutText: "It's very important that you read this",
                      },
                    ],
                  },
                ],
                actions: {
                  oneTimeActions: [
                    {
                      patientActionId: "c66d9b7c-e0f4-11eb-a480-7fa74549e5a1",
                      title: "Complete Self-Reflection (3 mins)",
                      minutesToComplete: 3,
                      whatDetails:
                        "It’s important to know what you’re thinking and feeling. Take a moment for self-reflection to jump start your next VirtaLife focus area. Note: Your coach can see your responses. Reach out if there’s anything specific you’d like to discuss.",
                      whenDetails: "Do this within the next 2 days.",
                      ctaLink: "143c2fa9-b1de-41f3-aaea-4d239d666abb",
                      ctaLabel: "Start self-reflection (3 min)",
                      createdOnUtc: "2021-07-09 20:32:27.062358+00:00",
                      type: "checkmark",
                      updatedOnUtc: "2021-07-09 20:32:27.062358+00:00",
                      contentType: "",
                      actionContentId: "789876543256",
                      calloutText: "Look inward.",
                    },
                  ],
                },
              },
            };
          },
          mutate: () => {
            return {
              data: {
                markAction: {
                  hasNewHabitualAction: false,
                  hasNewOneTimeAction: false,
                },
              },
            };
          },
          resetStore: () => undefined,
        } as any
      }
    >
      {children}
    </VirtaContext>
  );
};
