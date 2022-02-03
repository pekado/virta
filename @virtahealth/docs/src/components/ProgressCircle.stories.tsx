import * as React from "react";
import { ProgressCircle, Body } from "@virtahealth/components";

export default {
  title: "Components / Progress Circle",
  component: ProgressCircle,
  parameters: {
    chromatic: { delay: 2 },
  },
};

export const Example = () => (
  <ProgressCircle percent={35} radius={150} animationTime={1}>
    <Body>Hello world!</Body>
  </ProgressCircle>
);
Example.storyName = "Progress Circle";
