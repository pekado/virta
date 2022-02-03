import { identity } from "lodash";
import * as React from "react";
import { PatientCallScheduler } from "@virtahealth/experiences";

export default {
  title: "Experiences / Patient Call Scheduler",
  component: PatientCallScheduler,
};

export const Example: React.FC = () => (
  <PatientCallScheduler isCallScheduled={true} onSubmit={identity} url="" />
);
