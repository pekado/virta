import styled from "../styled-components";

interface DividerProps {
  direction: "column" | "row";
  thickness?: number;
}

export const Divider = styled.View<DividerProps>`
  background-color: ${({ theme }) => theme.dividerColor};
  height: ${({ direction, theme, thickness }) =>
    direction === "row"
      ? thickness || thickness === 0
        ? `${thickness}px`
        : `${theme.dividerDefaultThickness}px`
      : "auto"};
  width: ${({ direction, theme, thickness }) =>
    direction === "column"
      ? thickness || thickness === 0
        ? `${thickness}px`
        : `${theme.dividerDefaultThickness}px`
      : "100%"};
  margin: ${({ direction, theme }) =>
    direction === "row"
      ? `${theme.dividerDefaultAxisMargins}px 0`
      : `0 ${theme.dividerDefaultAxisMargins}px`};
`;
