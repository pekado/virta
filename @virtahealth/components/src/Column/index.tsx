import * as React from "react";
import { FlexAlignType, ViewProps } from "react-native";
import styled from "../styled-components";

interface ColumnProps extends ViewProps {
  alignItems?: FlexAlignType;
}

const StyledColumn = styled.View<ColumnProps>`
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "center"};
`;

export const Column: React.FunctionComponent<ColumnProps> = (props) => {
  return <StyledColumn {...props} />;
};
