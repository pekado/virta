import * as React from "react";
import { View } from "react-native";
import BlockContent from "@sanity/block-content-to-react";
import { BaseTheme } from "@virtahealth/styles";
import { Spacer } from "../Spacer";
import styled from "../styled-components";
import { Heading4 } from "../Text";

export type ArticleCalloutColors = "blue" | "purple" | "green";

const StyledView = styled(View)<{ color: ArticleCalloutColors }>`
  background-color: ${({ color, theme }) => backgroundColors(theme, color)};
  padding: 20px;
  padding-bottom: 12px;
  border-radius: 10px;
`;

const StyledSubheading = styled(Heading4)<{ color: ArticleCalloutColors }>`
  color: ${({ color, theme }) => textColors(theme, color)};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: ${({ theme }) => theme.calloutHeadingLetterSpacing}px;
`;

const backgroundColors = (theme: BaseTheme, color: ArticleCalloutColors) => {
  const colors = {
    blue: theme.calloutBlueBackgroundColor,
    purple: theme.calloutPurpleBackgroundColor,
    green: theme.calloutGreenBackgroundColor,
  };
  return colors[color] || colors.blue;
};

export const textColors = (theme: BaseTheme, color?: ArticleCalloutColors) => {
  const colors = {
    blue: theme.calloutBlueTextColor,
    purple: theme.calloutPurpleTextColor,
    green: theme.calloutGreenTextColor,
  };
  return colors[color!] || colors.blue;
};

export const ArticleCallout: React.FC<{
  color: ArticleCalloutColors;
  title: string;
  serializers: any;
  blocks: Array<any>;
}> = ({ color = "blue", blocks, serializers, title }) => (
  <View>
    <StyledView color={color}>
      <StyledSubheading color={color}>{title}</StyledSubheading>
      <Spacer height={8} />
      <BlockContent blocks={blocks} serializers={serializers} />
    </StyledView>
    <Spacer height={8} />
  </View>
);
