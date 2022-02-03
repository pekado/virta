import styled from "../styled-components";

interface SpacerProps {
  width?: number;
  height?: number;
}

export const Spacer = styled.View<SpacerProps>`
  height: ${({ height }) => (height ? height : 0)}px;
  width: ${({ width }) => (width ? width : 0)}px;
`;
