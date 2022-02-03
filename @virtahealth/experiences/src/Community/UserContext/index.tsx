import * as React from "react";
import { CommunityUser } from "../types";

// TODO remove UserContext and use VirtaContext's virtaId
export const UserContext = React.createContext(
  {} as {
    id: CommunityUser["id"];
  }
);

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be used within a UserContext.Provider"
    );
  }

  return context;
}
