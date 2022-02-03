import * as React from "react";
import { StarterKitScreen } from "@virtahealth/experiences";
import { PlanDefinitionName } from "@virtahealth/experiences/src/StarterKitScreen";

// this mock data is duplicated here & in experiences because TS is unhappy
// with the file not being in this package and fixing would require updating
// how the packages are built
import * as starterKitQuestionnaire from "./mock_data/starterKitQuestionnaire.json";

export default {
  title: "Experiences / Starter Kit Screen",
  component: StarterKitScreen,
};

export const Example = () => (
  <StarterKitScreen
    questionnaire={starterKitQuestionnaire}
    initialAnswers={[
      { linkId: "isBMOC", answer: "true" },
      { linkId: "enableXLScale", answer: "false" },
      { linkId: "shippingAddress.isMain", answer: "true" },
    ]}
    virtaId={"mock-virta-id"}
    planDefinitionName={PlanDefinitionName.Reversal}
    onSubmit={(values) => {
      console.log("results", values);
      return new Promise((resolve) => setTimeout(resolve, 1500));
    }}
    onSuccessClose={() => {
      // @ts-ignore - this currently runs in browser which has a location
      location.reload();
    }}
    openLearnButtonLink={() => undefined}
  />
);
