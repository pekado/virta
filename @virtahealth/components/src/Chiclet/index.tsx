import * as React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Base } from "../Text";
import styled from "../styled-components";
import { IconButton } from "../Button";
import { CloseSymbol } from "../Icons";

interface ChicletProps {
  /**
   * The text to display within the Chiclet
   */
  label: string;
  /**
   * The color of the Chiclet
   */
  color?: "green" | "orange" | "red" | "purple" | "blue";
  /**
   * When provided, an "x" is added to the right of the Chiclet
   * and the proivded function is invoked onPress
   */
  onDismiss?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

type PassthroughProps = Required<Pick<ChicletProps, "color">>;

const StyledChiclet = styled.View<PassthroughProps>`
  border-radius: ${({ theme }) => theme.chicletBaseBorderRadius}px;
  padding: ${({ theme }) => theme.chicletBasePaddingVertical}px
    ${({ theme }) => theme.chicletBasePaddingHorizontal}px;
  margin: ${({ theme }) => theme.chicletBaseMarginVertical}px
    ${({ theme }) => theme.chicletBaseMarginHorizontal}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ color, theme }) => {
    switch (color) {
      case "green":
        return theme.chicletGreenBackgroundColor;
      case "orange":
        return theme.chicletOrangeBackgroundColor;
      case "purple":
        return theme.chicletPurpleBackgroundColor;
      case "red":
        return theme.chicletRedBackgroundColor;
      case "blue":
        return theme.chicletBlueBackgroundColor;
    }
  }};
`;

const StyledLabel = styled(Base)<PassthroughProps>`
  font-size: ${({ theme }) => theme.chicletBaseTextFontSize}px;
  line-height: ${({ theme }) => theme.chicletBaseTextLineHeight}px;
  font-weight: ${({ theme }) => theme.chicletBaseTextFontWeight};
  color: ${({ color, theme }) => {
    switch (color) {
      case "green":
        return theme.chicletGreenFontColor;
      case "orange":
        return theme.chicletOrangeFontColor;
      case "purple":
        return theme.chicletPurpleFontColor;
      case "red":
        return theme.chicletRedFontColor;
      case "blue":
        return theme.chicletBlueFontColor;
    }
  }};
`;

const ChicletClosedSymbol = styled(CloseSymbol)`
  font-size: ${(props) => props.theme.chicletBaseTextFontSize * 0.67}px;
  font-weight: bold;
  padding-left: ${(props) => props.theme.chicletBasePaddingHorizontal / 2}px;
  padding-right: 0;
`;

export const Chiclet: React.FunctionComponent<ChicletProps> = ({
  label,
  color = "purple",
  onDismiss,
  style,
  labelStyle,
}) => {
  return (
    <StyledChiclet color={color} style={style}>
      <StyledLabel color={color} style={labelStyle}>
        {label}
      </StyledLabel>
      {onDismiss ? (
        <IconButton
          onPress={onDismiss}
          appearance="link"
          icon={<ChicletClosedSymbol />}
          labelMessage={{
            id: "components.chiclet.dismiss",
            defaultMessage: "Dismiss",
          }}
        />
      ) : null}
    </StyledChiclet>
  );
};
