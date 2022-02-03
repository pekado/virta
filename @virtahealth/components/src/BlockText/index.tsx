import * as React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { Base } from "../Text";
import styled from "../styled-components";

interface BlockTextProps {
  text: string;
  width: number;
  height: number;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}

type PassthroughProps = Required<Pick<BlockTextProps, "height" | "width">>;

const BlockTextWrapper = styled.View<PassthroughProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const BlockTextLabel = styled(Base)`
  font-size: ${({ theme }) => theme.blocktextBaseTextFontSize}px;
  line-height: ${({ theme }) => theme.blocktextBaseTextLineHeight}px;
  color: ${({ theme }) => theme.blocktextBaseTextFontColor};
  font-style: italic;
`;

export const BlockText: React.FunctionComponent<BlockTextProps> = ({
  style,
  text,
  textStyle,
  width,
  height,
  children,
}) => {
  return (
    <BlockTextWrapper height={height} width={width} style={style}>
      <BlockTextLabel style={textStyle}>
        {children ? children : text}
      </BlockTextLabel>
    </BlockTextWrapper>
  );
};
