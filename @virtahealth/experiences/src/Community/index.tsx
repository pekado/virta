import { VirtaClient } from "@virtahealth/components";
import * as React from "react";
import { MainCommunity } from "./MainCommunity";

interface Props {
  client: VirtaClient;
}

// Original implementation checks whether a user is active or not
// If not active, show Onboarding component
// Otherwise, show MainCommunity
// Assuming that user is active here
export const Community: React.FC<Props> = ({ client }) => {
  return <MainCommunity client={client} />;
};
