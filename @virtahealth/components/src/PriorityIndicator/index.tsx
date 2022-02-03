import * as React from "react";
import styled from "../styled-components";

interface PriorityIndicatorProps {
  /**
   * The color of the PriorityIndicator
   */
  color?: "green" | "orange" | "red";
}

type PassthroughProps = Required<Pick<PriorityIndicatorProps, "color">>;

const StyledPriorityIndicator = styled.View<PassthroughProps>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.priorityIndicatorSize};
  height: ${({ theme }) => theme.priorityIndicatorSize};
  width: ${({ theme }) => theme.priorityIndicatorSize};
  margin-right: ${({ theme }) => theme.priorityIndicatorMarginRight};
  background: ${({ color, theme }) => {
    switch (color) {
      case "green":
        return theme.priorityIndicatorGreenBackgroundColor;
      case "orange":
        return theme.priorityIndicatorOrangeBackgroundColor;
      case "red":
        return theme.priorityIndicatorRedBackgroundColor;
    }
  }};
`;

export const PriorityIndicator: React.FunctionComponent<PriorityIndicatorProps> =
  ({ color = "red" }) => {
    return <StyledPriorityIndicator color={color} />;
  };
