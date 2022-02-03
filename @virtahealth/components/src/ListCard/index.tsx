import * as React from "react";
import {
  ImageSourcePropType,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { useTheme } from "styled-components/native";
import styled, { css } from "../styled-components";
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
import { ProgressiveImage } from "../ProgressiveImage";

const StyledListCardContainer = styled.View<{
  deviceWidth: number;
  isMobile: boolean;
}>`
  border-style: solid;
  border-color: ${({ theme }) => theme.listCardBorderColor};
  border-width: ${({ theme }) => theme.listCardBorderWidth}px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  flex: ${({ isMobile }) => (isMobile ? 0 : "auto")};

  ${({ theme, deviceWidth }) => {
    if (deviceWidth > theme.listCardBreakpoint) {
      return css`
        border-radius: ${({ theme }) => theme.listCardBorderRadius}px;
        margin-bottom: ${({ theme }) => theme.listCardMarginBottom}px;
      `;
    } else {
      return css`
        border-top-width: 0px;
        border-right-width: 0px;
        border-left-width: 0px;
      `;
    }
  }}
`;

const StyledListCardInnerContainer = styled.View<{ isMobile: boolean }>`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.listCardInnerPadding}px;
  flex: ${({ isMobile }) => (isMobile ? 1 : "auto")};
`;

const InfoContainer = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const ImageContainer = styled.View<{ deviceWidth: number }>`
  margin-left: ${({ theme }) => theme.listCardImageMarginLeft}px;
  display: flex;
  justify-content: center;
  flex: 0;
  flex-basis: auto;
  max-width: ${({ theme, deviceWidth }) =>
    deviceWidth > theme.listCardBreakpoint
      ? theme.listCardWebImageWidth
      : theme.listCardImageWidth}px;
`;

const ListCardTitle = styled(Heading4)`
  font-size: ${({ theme }) => theme.listCardHeaderFontSize}px;
  line-height: ${({ theme }) => theme.listCardHeaderLineHeight}px;
  ${({ theme }) =>
    getFontFamilyAndWeight("Whitney", theme.listCardHeaderFontWeight)}
`;

const ListCardDescription = styled(Label)`
  font-size: ${({ theme }) => theme.listCardDescriptionFontSize}px;
  font-weight: ${({ theme }) => theme.listCardDescriptionFontWeight};
  line-height: ${({ theme }) => theme.listCardDescriptionLineHeight}px;
`;

const ListCardTypeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.listCardTypeContainerPaddingTop}px;
`;

const ListCardTypeInfo = styled(Label)`
  font-size: ${({ theme }) => theme.listCardTypeInfoFontSize}px;
  font-weight: ${({ theme }) => theme.listCardTypeInfoFontWeight};
  line-height: ${({ theme }) => theme.listCardTypeInfoLineHeight}px;
  color: ${({ theme }) => theme.listCardTypeInfoFontColor};
`;

const ImagePlaceholderWrapper = styled.View<{ deviceWidth: number }>`
  background-color: ${({ theme }) =>
    theme.listCardImagePlaceholderBackgroundColor};
  height: ${({ theme }) => theme.listCardImageHeight}px;
  width: ${({ theme, deviceWidth }) =>
    deviceWidth > theme.listCardBreakpoint
      ? theme.listCardWebImageWidth
      : theme.listCardImageWidth}px;
  justify-content: center;
  align-items: center;
`;

export interface ListCardProps {
  title?: string;
  description?: string;
  typeIcon?: "read" | "listen" | "watch" | "restaurant" | "grocery" | "recipe";
  typeInfo?: string;
  imageUrl?: ImageSourcePropType;
  onPress?: () => void;
}

// determine the icon to display for how the media will be consumed
const chooseIcon = (item: ListCardProps) => {
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

const InnerListCard: React.FC<{
  item: ListCardProps;
  isMobile?: boolean;
}> = ({ item, isMobile = false }) => {
  const theme = useTheme();
  const { width: deviceWidth } = useWindowDimensions();

  const renderImage = () => {
    if (!item.imageUrl) {
      return (
        <ImagePlaceholderWrapper deviceWidth={deviceWidth}>
          <VirtaLogo />
        </ImagePlaceholderWrapper>
      );
    }
    const progressiveImageProps = {
      imageProps: {
        source: item.imageUrl,
        themeWidthProp:
          deviceWidth < theme.listCardBreakpoint
            ? "listCardImageWidth"
            : "listCardWebImageWidth",
        style: {
          borderRadius: 10,
          minHeight: 120,
          maxHeight: 200,
          height: "100%",
        },
      },
    };
    return <ProgressiveImage {...progressiveImageProps} />;
  };

  return (
    <StyledListCardContainer deviceWidth={deviceWidth} isMobile={isMobile}>
      <StyledListCardInnerContainer isMobile={isMobile}>
        <InfoContainer>
          <ListCardTitle>{item.title}</ListCardTitle>
          {item.description ? (
            <>
              <Spacer height={8} />
              <ListCardDescription>{item.description}</ListCardDescription>
            </>
          ) : null}
          {item.typeInfo ? (
            <ListCardTypeContainer>
              {chooseIcon(item)}
              <Spacer width={8} />
              <ListCardTypeInfo>{item.typeInfo}</ListCardTypeInfo>
            </ListCardTypeContainer>
          ) : null}
        </InfoContainer>
        <ImageContainer deviceWidth={deviceWidth}>
          {renderImage()}
        </ImageContainer>
      </StyledListCardInnerContainer>
    </StyledListCardContainer>
  );
};

export const ListCard: React.FC<{
  item: ListCardProps;
  isMobile?: boolean;
}> = ({ item, isMobile }) => (
  <TouchableWithoutFeedback onPress={item.onPress}>
    <View>
      <InnerListCard item={item} isMobile={isMobile} />
    </View>
  </TouchableWithoutFeedback>
);
