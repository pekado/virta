import * as React from "react";
import { EnrollmentFinalStepsScreen } from "@virtahealth/experiences";

export default {
  title: "Experiences / PA Enrollment Final Steps Screen",
  component: EnrollmentFinalStepsScreen,
  argTypes: {
    preferredName: { control: { type: "text" } },
    hasUpcomingIntakeCall: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    isIntakeCallComplete: { control: { type: "boolean" }, defaultValue: false },
  },
};

export const Example = ({ ...args }) => (
  <EnrollmentFinalStepsScreen
    isIntakeCallComplete={false}
    hasUpcomingIntakeCall={false}
    {...args}
  />
);
