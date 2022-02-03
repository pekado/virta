import * as React from "react";
import {
  CommentActionType,
  FetchedDataActionType,
  PostActionType,
} from "./actions";
import { CommunityState, initialState, CommunityReducer } from "./reducer";

export const CommunityContext = React.createContext(
  {} as {
    communityState: CommunityState;
    dispatch: React.Dispatch<
      FetchedDataActionType | PostActionType | CommentActionType
    >;
  }
);

export function useCommunityContext() {
  const context = React.useContext(CommunityContext);
  if (context === undefined) {
    throw new Error(
      "useCommunityContext must be used within a CommunityProvider"
    );
  }

  return context;
}

export const CommunityProvider: React.FC = ({ children }) => {
  const [communityState, dispatch] = React.useReducer(
    CommunityReducer,
    initialState
  );

  return (
    <CommunityContext.Provider value={{ communityState, dispatch }}>
      {children}
    </CommunityContext.Provider>
  );
};
