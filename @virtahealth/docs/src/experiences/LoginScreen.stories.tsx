import * as React from "react";
import { LoginScreen } from "@virtahealth/experiences";

export default {
  title: "Experiences / Login Screen",
  component: LoginScreen,
};

export const Example = () => (
  <LoginScreen
    onForgotPassword={() => undefined}
    onLogIn={(values) => {
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
