import * as React from "react";
import { LeadCaptureScreen } from "@virtahealth/experiences";

export default {
  title: "Experiences / Lead Capture Screen",
  component: LeadCaptureScreen,
};

export const Example = () => (
  <LeadCaptureScreen
    onTermsPress={() => undefined}
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
    onPrivacyPress={() => undefined}
  />
);
