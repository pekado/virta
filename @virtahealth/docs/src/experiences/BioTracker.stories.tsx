import * as React from "react";
import { BioTracker } from "@virtahealth/experiences";
import { EmptyVirtaContext } from "../utils/EmptyVirtaContext";

export default {
  title: "Experiences / BioTracker",
  component: BioTracker,
  parameters: {
    // Sets a delay for the component's story
    chromatic: { delay: 1100 },
  },
};

export const Example = () => (
  <EmptyVirtaContext>
    <BioTracker
      description={{ id: "descriptionId", defaultMessage: "At least 3x/day" }}
      onPress={() => undefined}
      biomarker={"glucose"}
      maxReadings={3}
      currentReadings={1}
      loading={false}
    />
  </EmptyVirtaContext>
);
Example.storyName = "Biotracker";
