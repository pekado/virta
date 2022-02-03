import * as React from "react";
import { ActionCardList } from "@virtahealth/experiences";
import { ContentPlatformVirtaContext } from "../utils/ContentPlatformVirtaContext";

export default {
  title: "Experiences / ActionCardList",
  component: ActionCardList,
  parameters: {
    // Sets a delay for the component's story
    chromatic: { delay: 1100 },
  },
};

export const Example = () => (
  <ContentPlatformVirtaContext>
    <ActionCardList
      goToLink={() => undefined}
      displayActionDetails={() => undefined}
      closeActionDetails={() => undefined}
      noDisplay={false}
      doneLoading={() => undefined}
      refreshHealthyHabits={() => undefined}
      scrollToHealthyHabits={() => undefined}
    />
  </ContentPlatformVirtaContext>
);
Example.storyName = "Action Card List";
