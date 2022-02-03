import { BaseTheme } from "@virtahealth/styles";
import * as React from "react";
import {
  Animated,
  ImageProps,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import styled, { css } from "../styled-components";

interface DimensionProps {
  height?: number;
  width?: number;
  themeHeightProp?: string;
  themeWidthProp?: string;
}
export interface ProgressiveImageProps {
  imageProps: ImageProps & DimensionProps;
  thumbnailSource?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}
interface PlaceholderProps extends DimensionProps {
  imageLoaded: boolean;
  resizeMode?: ImageResizeMode;
}
const Placeholder = styled.View<PlaceholderProps>`
  background-color: ${({ theme, imageLoaded }) =>
    imageLoaded ? "transparent" : theme.imagePlaceholderBackgroundColor};
  ${({ width, height, themeWidthProp, themeHeightProp, theme, resizeMode }) => {
    if (resizeMode !== "contain") {
      return css`
        width: ${themeWidthProp
          ? theme[themeWidthProp as keyof BaseTheme]
          : width}px;
        height: ${themeHeightProp
          ? theme[themeHeightProp as keyof BaseTheme]
          : height}px;
      `;
    }
    return css`
      height: ${themeHeightProp
        ? theme[themeHeightProp as keyof BaseTheme]
        : height}px;
    `;
  }}
`;

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  style,
  imageProps = { height: 100, width: 100, source: {} },
  thumbnailSource,
}) => {
  const thumbnailOpacityAnimation = React.useRef(new Animated.Value(0)).current;
  const imageOpacityAnimation = React.useRef(new Animated.Value(0)).current;
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = React.useState(false);
  const onImageLoad = (animation: Animated.Value) => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const placeholderProps = {
    ...imageProps,
    imageLoaded: thumbnailSource ? thumbnailLoaded : imageLoaded,
  };
  return (
    <Placeholder {...placeholderProps}>
      {thumbnailSource && (
        <Animated.Image
          {...imageProps}
          source={thumbnailSource}
          onLoad={() => {
            onImageLoad(thumbnailOpacityAnimation);
            setThumbnailLoaded(true);
          }}
          style={[
            {
              height: "100%",
              width: "100%",
            },
            style,
            imageProps.style,
            { opacity: thumbnailOpacityAnimation },
            {
              height: imageProps.height,
              width: imageProps.width,
            },
          ]}
          blurRadius={!imageLoaded ? 2 : 0}
        />
      )}
      <Animated.Image
        {...imageProps}
        onLoad={() => {
          onImageLoad(imageOpacityAnimation);
          setImageLoaded(true);
        }}
        style={[
          style,
          imageProps.style,
          { height: imageProps.height, width: imageProps.width },
          {
            opacity: imageOpacityAnimation,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: "absolute",
          },
        ]}
      />
    </Placeholder>
  );
};
