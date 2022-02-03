import * as React from "react";
import { PhoneNumberUpdater } from "@virtahealth/experiences";

export default {
  title: "Experiences / Phone Number Updater",
  component: PhoneNumberUpdater,
};

export const Example = () => (
  <PhoneNumberUpdater
    onUpdate={(values) => {
      console.log("values", values);
      return new Promise(
        (
          resolve,
          // @ts-ignore - keep this for testing
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          reject
        ) =>
          setTimeout(() => {
            // use reject to test error state
            // reject("Error Message");
            resolve();
          }, 1500)
      );
    }}
    existingPhoneNumber={"999-999-9999"}
  />
);
