import { Body, BodyProps, getBodyFontSize, Size } from "../SubstrateText";
import styled from "../styled-components";

export const ChicletCard = styled(Body).attrs({ size: "xsmall" })<BodyProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.chicletCardBackgroundColor};
  display: flex;
  justify-content: center;
  height: ${({ size = "regular", theme }) =>
    `${2 * getBodyFontSize(size as Size, theme)}px`};
  border-style: ${({ theme }) => theme.chicletCardBorderStyle};
  border-width: ${({ theme }) => theme.chicletCardBorderWidth}px;
  border-color: ${({ theme }) => theme.chicletCardBorderColor};
  border-radius: ${({ theme }) => theme.chicletCardBorderRadius}px;
  width: fit-content;
  padding: ${({ size, theme }) => `${getBodyFontSize(size, theme)}px`};
`;

export default ChicletCard;
