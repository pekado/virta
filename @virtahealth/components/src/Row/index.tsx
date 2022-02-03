import * as React from "react";
import { FlexAlignType, ViewProps } from "react-native";
import styled from "../styled-components";

export interface RowProps extends ViewProps {
  alignItems?: FlexAlignType;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around";
}

export const StyledRow = styled.View<RowProps>`
  flex-direction: row;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

export const Row: React.FunctionComponent<RowProps> = (props) => {
  return <StyledRow {...props} />;
};
