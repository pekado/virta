import * as React from "react";
import { useWindowDimensions } from "react-native";
import {
  getPlatformFontFamilySuffix,
  addSearchParam,
} from "@virtahealth/utils";
import { BaseTheme } from "@virtahealth/styles";
import { RichText } from "../RichText";
import { Body } from "../Text";
import { Spacer } from "../Spacer";
import styled from "../styled-components";
import { ProgressiveImage } from "../ProgressiveImage";

import { ContentTypes } from "./types";

interface IsMobileProp {
  isMobile: boolean;
}

const StyledImage = styled(ProgressiveImage)<IsMobileProp>`
  ${({ isMobile }) => (isMobile ? "" : "max-width: 39rem;")}
`;

// This styled component has issues rendering the font properly on Android
// when it inherits styles from Heading2. As a workaround, most of those
// styles (except font-weight) have been copied over to here
const StyledHeading = styled.Text`
  color: ${({ theme }) => theme.textHeading2Color};
  font-size: ${({ theme }) => theme.textHeading2FontSize}px;
  letter-spacing: ${({ theme }) => theme.textBaseLetterSpacing}px;
  line-height: ${({ theme }) => theme.richtextHeadingLineHeight}px;
  font-family: "${({ theme }) =>
    theme[
      `richtextHeadingFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
`;

const StyledSubHeader = styled(Body)`
  font-size: ${({ theme }) => theme.articleSubheaderSize}px;
  font-weight: ${({ theme }) => theme.articleSubheaderWeight};
  line-height: ${({ theme }) => theme.articleSubheaderLineHeight}px;
`;

const StyledArticleHeadingArea = styled.View<{ isWeb: boolean }>`
  margin: ${({ theme }) => theme.articleMargin}px;
  padding-left: ${({ isWeb, theme }) =>
    isWeb ? `${theme.articleHeaderWebLeftOffset}px` : "0px"};
`;

const StyledArticle = styled.View`
  width: 100%;
`;

const ArticleBody = styled.View`
  margin-left: ${({ theme }) => theme.articleMargin}px;
  margin-right: ${({ theme }) => theme.articleMargin}px;
  margin-bottom: ${({ theme }) => theme.articleMargin}px;
`;

const StyledImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledImageWrapper = styled.View`
  margin-bottom: 32px;
`;

export interface ArticleProps {
  data: ContentTypes.ArticleType;
  isMobile?: boolean;
  handleOpenVideo: (url: string) => void;
  handleLinkPress?: (url: string) => void;
}

export const Article: React.FC<ArticleProps> = ({
  data,
  isMobile = false,
  handleOpenVideo,
  handleLinkPress,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const imageWrapper = (wrappedComponent: React.ReactElement) =>
    isMobile ? (
      <StyledImageContainer>{wrappedComponent}</StyledImageContainer>
    ) : (
      wrappedComponent
    );

  const imageSourceUrl = data.heroImage.imageUrl;

  const renderHeroImage = () => {
    const thumbnailSourceUrl = addSearchParam(imageSourceUrl, "w", "50");
    return imageWrapper(
      <StyledImageWrapper>
        <StyledImage
          isMobile={isMobile}
          imageProps={{
            source: { uri: imageSourceUrl },
            resizeMode: "contain",
            themeHeightProp: "articleHeaderImageHeight",
            width: windowWidth,
          }}
          thumbnailSource={{ uri: thumbnailSourceUrl }}
        />
      </StyledImageWrapper>
    );
  };
  return (
    <StyledArticle>
      <StyledArticleHeadingArea isWeb={!isMobile}>
        <StyledHeading>{data.title}</StyledHeading>
        <Spacer height={8} />
        <StyledSubHeader>{data.previewText}</StyledSubHeader>
        <Spacer height={13} />
      </StyledArticleHeadingArea>
      {imageSourceUrl.length ? renderHeroImage() : null}
      <ArticleBody>
        <RichText
          isMobile={isMobile}
          blocks={data.body}
          handleOpenVideo={handleOpenVideo}
          handleLinkPress={handleLinkPress}
        />
      </ArticleBody>
    </StyledArticle>
  );
};
