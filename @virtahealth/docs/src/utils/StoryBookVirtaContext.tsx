import * as React from "react";
import { ThemeContext } from "styled-components";
import { VirtaContext } from "@virtahealth/components";
import { VirtaContextProps } from "@virtahealth/components/src/VirtaContext";

export const StoryBookVirtaContext: React.FC<Omit<VirtaContextProps, "theme">> =
  ({ children, ...rest }) => {
    const theme = React.useContext(ThemeContext);

    return (
      <VirtaContext {...rest} theme={theme}>
        {children}
      </VirtaContext>
    );
  };
