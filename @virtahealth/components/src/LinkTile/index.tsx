import * as React from "react";
import { Linking } from "react-native";
import { getPlatformFontFamilySuffix } from "@virtahealth/utils";
import { BaseTheme } from "@virtahealth/styles";
import styled from "../styled-components";

interface LinkTileProps {
  title: string;
  url?: string;
  onTilePress?: () => void;
  backgroundColor?: string;
  labelColor?: string;
  description?: string;
  imageURL?: string;
}

interface LinkTileWithBGColorProps {
  backgroundColor?: string;
}

interface LinkTileTitleProps {
  labelColor?: string;
}

const LinkTileWithBGColor = styled.View<LinkTileWithBGColorProps>`
  background-color: ${({ theme, backgroundColor = "" }) =>
    backgroundColor
      ? theme[backgroundColor as keyof BaseTheme]
      : theme.linkTileDefaultBackground};
  display: flex;
  border-radius: 10px;
  justify-content: flex-start;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
  height: 100%;
`;
const LinkTileTitle = styled.Text<LinkTileTitleProps>`
  font-family: "${({ theme }) =>
    theme[
      `linkTileFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.linkTileFontSize}px;
  font-weight: ${({ theme }) => theme.linkTileFontWeight};
  margin: 10px;
  color: ${({ theme, labelColor }) =>
    labelColor
      ? theme[labelColor as keyof BaseTheme]
      : theme.linkTileDefaultTextColor};
`;
const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const LinkTile: React.FC<LinkTileProps> = ({
  title,
  url,
  backgroundColor,
  labelColor,
  onTilePress,
}) => {
  const onPress = () => {
    if (onTilePress) {
      return onTilePress();
    }
    if (url) {
      return Linking.openURL(url);
    }
  };
  return (
    <Button onPress={onPress}>
      <LinkTileWithBGColor backgroundColor={backgroundColor}>
        <LinkTileTitle labelColor={labelColor}>{title}</LinkTileTitle>
      </LinkTileWithBGColor>
    </Button>
  );
};
