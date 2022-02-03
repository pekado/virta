import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { MessageDescriptor } from "react-intl";

import styled from "../styled-components";

import { Heading4 } from "../Text";
import { Row } from "../Row";

interface SubTabItemProps
  extends Pick<TouchableOpacityProps, "onPress" | "testID"> {
  /**
   * the text of the sub-tab
   */
  children: string;

  /**
   * if the tab is currently selected
   */
  isSelected: boolean;

  message?: MessageDescriptor;

  /**
   * Add an icon or badge after the text
   * The icon will be included in the line length when it comes to centering.
   * If you don't want the text to move, make sure your icon is absolutely positioned
   */
  iconAfter?: React.ReactElement;
}

type ContainerPassthroughProps = Required<Pick<SubTabItemProps, "isSelected">>;
const Container = styled.TouchableOpacity<ContainerPassthroughProps>`
  flex: 1;
  align-items: center;
  border-style: ${({ theme }) => theme.subTabItemBorderStyle};
  border-bottom-width: ${({ theme }) => theme.subTabItemBorderBottomWidth}px;
  border-bottom-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.subTabItemBorderBottomSelectedColor
      : theme.subTabItemBorderBottomUnselectedColor};
`;

type StyledItemTextPassthroughProps = Required<
  Pick<SubTabItemProps, "isSelected">
>;
const StyledItemText = styled(Heading4)<StyledItemTextPassthroughProps>`
  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.subTabItemTextSelectedColor
      : theme.subTabItemTextUnselectedColor};
  padding-bottom: ${({ theme }) => theme.subTabItemTextPaddingBottom}px;
  font-weight: ${({ theme }) => theme.subTabItemTextFontWeight};
`;

export const SubTabItem: React.FC<SubTabItemProps> = ({
  isSelected,
  children,
  iconAfter = null,
  message,
  onPress,
  testID,
}) => (
  <Container testID={testID} onPress={onPress} isSelected={isSelected}>
    <Row>
      <StyledItemText isSelected={isSelected} message={message}>
        {children}
      </StyledItemText>
      {iconAfter}
    </Row>
  </Container>
);
