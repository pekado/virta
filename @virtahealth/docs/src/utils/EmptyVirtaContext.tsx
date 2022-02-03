import * as React from "react";
import { ThemeContext } from "styled-components";
import { VirtaContext } from "@virtahealth/components";
import emptyVirtaClient from "./emptyVirtaClient";

export const EmptyVirtaContext: React.FC = ({ children }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <VirtaContext theme={theme} client={emptyVirtaClient}>
      {children}
    </VirtaContext>
  );
};
