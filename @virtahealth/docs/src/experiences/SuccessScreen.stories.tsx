import * as React from "react";
import { StarterKitScreen, SuccessScreen } from "@virtahealth/experiences";

export default {
  title: "Experiences / Success Screen",
  component: StarterKitScreen,
};

export const Basic: React.FC = () => (
  <SuccessScreen onClose={() => undefined} />
);

export const Custom = () => (
  <SuccessScreen
    onClose={() => undefined}
    title="Order Successfully Placed!"
    description="Your order with ship in 1 business day."
    secondaryActionText={{
      id: "successScreen.secondaryAction.text",
      defaultMessage: "Secondary Action",
    }}
    onSecondaryAction={() => console.log("clicked")}
  />
);
