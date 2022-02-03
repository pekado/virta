import * as React from "react";
import { primitives } from "@virtahealth/styles";
import { styled } from "@virtahealth/components";
import { EligibilityCheckExperience } from "@virtahealth/experiences";
import { StoryBookVirtaContext } from "../utils/StoryBookVirtaContext";
import emptyVirtaClient from "../utils/emptyVirtaClient";

export default {
  title: "Experiences / EligibilityCheckExperience",
  component: EligibilityCheckExperience,
  parameters: {
    layout: "fullscreen",
  },
};

const StyledWrapper = styled.View`
  background-color: ${primitives.color.carbonGray200};
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Example = (): React.ReactElement => {
  return (
    <StyledWrapper>
      <StoryBookVirtaContext client={emptyVirtaClient}>
        <EligibilityCheckExperience
          client={emptyVirtaClient}
          virtaId={"40d9bd52-edea-46c8-84a5-42e003f01502"}
          shouldUploadImage={true}
          insurerOptions={[
            "Aetna",
            "Cigna",
            "BCBS",
            "Horizon Blue Cross Blue Shield",
            "Humana",
            "IHC Inc.",
            "Independence Blue Cross",
            "Independent Health Association, Inc.",
            "Inland Empire Health Plan",
            "InnovaCare Health Solutions",
            "Kaiser Permanente",
            "Kaleida Health",
            "Kern Health Systems, Inc.",
            "L.A. Care Health Plan",
            "Liberty Medical",
            "LifeWise Health Plan of Oregon",
            "Louisiana Medical Serv",
            "Magellan Health",
            "Medicare",
            "Maine Comm Health Options",
            "Martin's Point Health Care",
            "Maryland Physicians Care",
            "MassHealth",
            "McLaren Health Plan",
            "MDWise",
            "Medica Health Plans",
            "Medical Mutual",
            "Medical Mutual of Ohio",
          ]}
          isDTP={false}
          onContinue={() => console.log("continued")}
          trackButtonClicked={() => console.log("button clicked")}
          trackPageViewed={() => console.log("page viewed")}
          epLocation="finalSteps"
          shouldShowCorrectedInfo={false}
        />
      </StoryBookVirtaContext>
    </StyledWrapper>
  );
};
