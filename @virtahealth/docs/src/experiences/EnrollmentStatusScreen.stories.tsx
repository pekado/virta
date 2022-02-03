import * as React from "react";
import { EnrollmentStatusScreen } from "@virtahealth/experiences";
import { messageTree } from "@virtahealth/utils";
import { action } from "@storybook/addon-actions";

export default {
  title: "Experiences / PA Enrollment Status Screen",
  component: EnrollmentStatusScreen,
  argTypes: {
    deployment: { control: { type: "text" } },
    status: {
      options: ["waitlisted", "disqualified", "not_qualified", "prelaunch"],
      control: { type: "radio" },
      defaultValue: "waitlisted",
    },
    disqualifications: {
      options: [...Object.keys(messageTree.enrollment.disqualifications)],
      control: { type: "check" },
      defaultValue: [],
    },
    nonQualifications: {
      options: [...Object.keys(messageTree.enrollment.nonQualifications)],
      control: { type: "check" },
      defaultValue: [],
      description: "Non-qualifiers that display when a deployment is specified",
    },
  },
};

export const Example = ({ ...args }) => (
  <EnrollmentStatusScreen
    status={"waitlisted"}
    disqualifications={[]}
    nonQualifications={[]}
    onPressInfoCalloutButton={action("Continue pressed")}
    {...args}
  />
);
