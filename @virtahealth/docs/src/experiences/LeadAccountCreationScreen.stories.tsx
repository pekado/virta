import * as React from "react";
import { LeadAccountCreationScreen } from "@virtahealth/experiences";

export default {
  title: "Experiences / Lead Account Creation Screen",
  component: LeadAccountCreationScreen,
};

export const Example = () => (
  <LeadAccountCreationScreen
    onGoToLogIn={() => undefined}
    onContinue={(values) => {
      console.log("values", values);
      return new Promise(
        (
          resolve,
          // @ts-ignore - keep this for testing
          reject
        ) =>
          setTimeout(() => {
            // use reject to test error state
            // reject("Error Message");
            resolve(values);
          }, 1500)
      );
    }}
  />
);
