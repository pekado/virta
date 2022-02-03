import * as React from "react";
import {
  Heading4,
  ProgressBar,
  ProgressBarProps,
  styled,
} from "@virtahealth/components";
import { DimensionProps } from "../index";
import { MOBILE_HEIGHT_LANDSCAPE_BREAKPOINT } from "../constants";

interface ScreenerHeaderProps {
  title: string;
}

const Wrapper = styled.View<DimensionProps>`
  width: 100%;
  height: ${({ height: screenHeight }) =>
    screenHeight >= MOBILE_HEIGHT_LANDSCAPE_BREAKPOINT ? 80 : 30}px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-bottom-width: 1px;
  border-bottom-color: #e6e8eb;
`;
const Title = styled(Heading4)`
  margin-bottom: 10px;
`;

export const Header: React.FC<
  ScreenerHeaderProps & ProgressBarProps & DimensionProps
> = ({ title, current, total, height: screenHeight, width: screenWidth }) => (
  <Wrapper height={screenHeight} width={screenWidth}>
    {screenHeight >= MOBILE_HEIGHT_LANDSCAPE_BREAKPOINT && (
      <Title>{title}</Title>
    )}
    {total > 0 && <ProgressBar current={current} total={total} />}
  </Wrapper>
);
