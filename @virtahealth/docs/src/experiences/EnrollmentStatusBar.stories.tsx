import * as React from "react";
import {
  ACTIVE,
  COMPLETE,
  EnrollmentStatusBar,
  EnrollmentSteps,
  PENDING,
} from "@virtahealth/experiences";

const enrollmentStepsOptions = [ACTIVE, COMPLETE, PENDING];

export default {
  title: "Experiences / PA Enrollment Status Bar",
  component: EnrollmentStatusBar,
  argTypes: {
    getStarted: {
      options: enrollmentStepsOptions,
      control: { type: "radio" },
      defaultValue: COMPLETE,
    },
    scheduleIntake: {
      options: enrollmentStepsOptions,
      control: { type: "radio" },
      defaultValue: ACTIVE,
    },
    healthHistory: {
      options: enrollmentStepsOptions,
      control: { type: "radio" },
      defaultValue: PENDING,
    },
    finalSteps: {
      options: enrollmentStepsOptions,
      control: { type: "radio" },
      defaultValue: PENDING,
    },
  },
};

export const Example: React.FC = ({ ...args }) => (
  <EnrollmentStatusBar
    steps={
      {
        ...args,
      } as EnrollmentSteps
    }
  />
);

export const Type1: React.FC<EnrollmentSteps> = ({ ...args }) => (
  <EnrollmentStatusBar
    steps={
      {
        getStarted: args.getStarted,
        finalSteps: args.finalSteps,
      } as EnrollmentSteps
    }
  />
);
