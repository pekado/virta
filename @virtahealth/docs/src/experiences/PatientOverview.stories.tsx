import * as React from "react";
import { PatientOverviewExperience } from "@virtahealth/experiences";
import { MockedGraphQLProvider } from "@virtahealth/utils";
import { mocks } from "./mock_data/mockPatientOverviewClient";

export default {
  title: "Experiences / PatientOverview",
  component: PatientOverviewExperience,
  parameters: {
    // This story does _not_ work at all for chromatic. We need to fix the fact that the story relies on the date always being Date.now() so stories don't always flag as changed
    chromatic: { disableSnapshot: true },
  },
};

export const Example = () => (
  <MockedGraphQLProvider mocks={mocks}>
    <PatientOverviewExperience id={9999} />
  </MockedGraphQLProvider>
);
Example.storyName = "PatientOverview";
