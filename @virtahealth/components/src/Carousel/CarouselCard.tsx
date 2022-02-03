import * as React from "react";
import {
  View,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from "react-native";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import styled, { ThemeContext } from "../styled-components";
import { Heading4, Label } from "../Text";
import { Spacer } from "../Spacer";
import {
  StudyIcon,
  TvWatchIcon,
  AudioListenIcon,
  CartIcon,
  RestaurantIcon,
  RecipeIcon,
  VirtaLogo,
} from "../Icons";
import { ProgressiveImage, ProgressiveImageProps } from "../ProgressiveImage";
import { Mask } from "./Mask";

const StyledCarouselItemInnerContainer = styled.View<{ isLandscape: boolean }>`
  border-style: solid;
  border-color: ${({ theme }) => theme.carouselCardBorderColor};
  border-width: ${({ theme }) => theme.carouselCardBorderWidth}px;

  border-radius: ${({ theme, isLandscape }) =>
    isLandscape
      ? theme.carouselCardLandscapeBorderRadius
      : theme.carouselCardBorderRadius}px;
  display: flex;
  flex-direction: ${({ isLandscape }) => (isLandscape ? "row" : "column")};
  padding-bottom: 12px;
`;

const ImageWrapper = styled.View<{ isLandscape: boolean }>`
  border-top-left-radius: ${({ theme, isLandscape }) =>
    isLandscape
      ? theme.carouselCardLandscapeBorderRadius
      : theme.carouselCardBorderRadius}px;
  border-bottom-right-radius: ${({ theme, isLandscape }) =>
    isLandscape ? theme.carouselCardLandscapeBorderRadius : 0}px;
  border-top-right-radius: ${({ theme, isLandscape }) =>
    isLandscape
      ? theme.carouselCardLandscapeBorderRadius
      : theme.carouselCardBorderRadius}px;
  height: ${({ theme }) => theme.carouselCardImageHeight}px;
  width: ${({ theme }) => theme.carouselCardImageWidth}px;
`;

const ImagePlaceholderWrapper = styled(ImageWrapper)`
  background-color: ${({ theme }) =>
    theme.carouselCardImagePlaceholderBackgroundColor};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledCarouselItem = styled(View)`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled(View)`
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 12px;
  height: 70px;
`;

const CarouselCardHeader = styled(Heading4)`
  font-size: ${({ theme }) => theme.carouselCardHeaderFontSize}px;
  line-height: ${({ theme }) => theme.carouselCardHeaderLineHeight}px;
  ${({ theme }) =>
    getFontFamilyAndWeight("Whitney", theme.carouselCardHeaderFontWeight)}
`;

const CarouselCardLabel = styled(Label)`
  font-size: ${({ theme }) => theme.carouselCardLabelFontSize}px;
  font-weight: ${({ theme }) => theme.carouselCardLabelFontWeight};
  line-height: ${({ theme }) => theme.carouselCardLabelLineHeight}px;
`;

const CarouselCardTimeLabel = styled(Label)`
  font-size: ${({ theme }) => theme.carouselCardTimeLabelFontSize}px;
  font-weight: ${({ theme }) => theme.carouselCardTimeLabelFontWeight};
  line-height: ${({ theme }) => theme.carouselCardTimeLabelLineHeight}px;
  color: ${({ theme }) => theme.carouselCardTimeLabelFontColor};
`;

const StyledConsumptionContainer = styled(View)`
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoContainer = styled(View)`
  height: 120px;
  width: ${({ theme }) => theme.carouselCardContainerWidth}px;
`;

export interface CarouselCardProps {
  title?: string;
  description?: string;
  typeIcon?: "read" | "listen" | "watch" | "restaurant" | "grocery" | "recipe";
  typeInfo?: string;
  imageUrl?: ImageSourcePropType;
  thumbnailUrl?: ImageSourcePropType;
  shadeRight?: boolean;
  shadeLeft?: boolean;
  onPress?: () => void;
}

// determine the icon to display for how the media will be consumed
const chooseIcon = (item: CarouselCardProps) => {
  switch (item.typeIcon) {
    case "listen":
      return <AudioListenIcon />;
    case "watch":
      return <TvWatchIcon />;
    case "recipe":
      return <RecipeIcon />;
    case "restaurant":
      return <RestaurantIcon />;
    case "grocery":
      return <CartIcon />;
    case "read":
    default:
      return <StudyIcon />;
  }
};

function calculateNestedBorderRadius(
  outerContainerBorderRadius: number,
  outerContainerBorderWidth: number
): number {
  return outerContainerBorderRadius - outerContainerBorderWidth;
}

export const CarouselCard: React.FC<{
  item: CarouselCardProps;
  displayLandscape?: boolean;
}> = ({ item, displayLandscape = false }) => {
  const theme = React.useContext(ThemeContext);

  const renderImage = () => {
    if (!item.imageUrl) {
      return (
        <ImageWrapper isLandscape={displayLandscape}>
          <ImagePlaceholderWrapper isLandscape={displayLandscape}>
            <VirtaLogo />
          </ImagePlaceholderWrapper>
        </ImageWrapper>
      );
    }

    const innerRadius = displayLandscape
      ? 0
      : calculateNestedBorderRadius(
          theme.carouselCardBorderRadius,
          theme.carouselCardBorderWidth
        );
    const progressiveImageProps: ProgressiveImageProps = {
      imageProps: {
        source: item.imageUrl,
        height: theme.carouselCardImageHeight,
        width: theme.carouselCardImageWidth,
        style: {
          borderTopRightRadius: innerRadius,
          borderTopLeftRadius: innerRadius,
        },
      },
      thumbnailSource: item.thumbnailUrl,
    };
    return (
      <ImageWrapper isLandscape={displayLandscape}>
        <ProgressiveImage {...progressiveImageProps} />
      </ImageWrapper>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={item.onPress}>
      <View>
        {(item.shadeRight || item.shadeLeft) && (
          <Mask direction={item.shadeRight ? "right" : "left"} />
        )}
        <StyledCarouselItem>
          <StyledCarouselItemInnerContainer isLandscape={displayLandscape}>
            {!displayLandscape && renderImage()}
            <InfoContainer>
              <TextContainer>
                <CarouselCardHeader numberOfLines={2}>
                  {item.title}
                </CarouselCardHeader>
                <Spacer height={4} />
                <CarouselCardLabel numberOfLines={2}>
                  {item.description}
                </CarouselCardLabel>
              </TextContainer>
              <Spacer height={16} />
              <StyledConsumptionContainer>
                {chooseIcon(item)}
                <Spacer width={6} />
                <CarouselCardTimeLabel>{item.typeInfo}</CarouselCardTimeLabel>
              </StyledConsumptionContainer>
            </InfoContainer>
            {displayLandscape && renderImage()}
          </StyledCarouselItemInnerContainer>
        </StyledCarouselItem>
      </View>
    </TouchableWithoutFeedback>
  );
};
