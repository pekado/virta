import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useActive, useHover } from "@virtahealth/utils";
import { FormattedMessage } from "react-intl";
import styled from "../styled-components";
import { Base, TextProps } from "../Text";

// This component is deprecated. Please use a Button instead

interface StyledLinkProps extends TextProps {
  isHovered: boolean;
  isActive: boolean;
}

const StyledLink = styled<React.FC<StyledLinkProps>>(Base)`
  color: ${({ theme, isHovered, isActive }) =>
    isHovered || isActive ? theme.textLinkHoverColor : theme.textLinkColor};
`;

interface LinkProps extends TextProps {
  hitSlop?: TouchableOpacityProps["hitSlop"];
}

export const Link: React.FC<LinkProps> = ({
  message,
  style,
  children,
  onPress,
}) => {
  const ref = React.useRef(null);
  const isHovered = useHover(ref);
  const isActive = useActive(ref);

  return (
    <TouchableOpacity activeOpacity={1} ref={ref} onPress={onPress}>
      <StyledLink isHovered={isHovered} isActive={isActive} style={style}>
        {message ? <FormattedMessage {...message} /> : null}
        {children}
      </StyledLink>
    </TouchableOpacity>
  );
};
