import * as React from "react";
import { SMSVerification } from "@virtahealth/experiences";

export default {
  title: "Experiences / SMS Verification",
  component: SMSVerification,
};

export const Example = () => (
  <SMSVerification
    onGoToUpdatePhone={() => undefined}
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
    phoneEnding={"9999"}
    onResendCode={() => {
      console.log("resending");
      return new Promise<void>(
        (
          // @ts-ignore - keep this for testing
          resolve,
          // @ts-ignore - keep this for testing
          reject
        ) =>
          setTimeout(() => {
            // use reject to test error state
            // reject("Error Message");
            reject({ id: "error", defaultMessage: "error" });
          }, 1500)
      );
    }}
  />
);
