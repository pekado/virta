import * as React from "react";
import {
  AnimatedHeight,
  Heading2,
  styled,
  BodyLight,
} from "@virtahealth/components";
import { DimensionProps } from "../index";
import { DONE_VIEW_DEFAULT_SUBTEXT } from "../constants";

type Props = DimensionProps;

const Done = styled.View<DimensionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height: screenHeight }) => 0.85 * screenHeight}px;
  text-align: center;
`;
const Heading = styled(Heading2)`
  margin-top: 10px;
`;
const SubText = styled(BodyLight)`
  margin: 5px;
`;

export const DoneView: React.FC<Props> = ({
  height: screenHeight,
  width: screenWidth,
}) => (
  <AnimatedHeight minHeight={screenHeight} maxHeight={screenHeight}>
    <Done height={screenHeight} width={screenWidth}>
      <Heading>Thanks</Heading>
      <SubText>{DONE_VIEW_DEFAULT_SUBTEXT}</SubText>
    </Done>
  </AnimatedHeight>
);
