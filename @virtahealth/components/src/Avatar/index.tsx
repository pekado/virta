import * as React from "react";
import {
  ImageErrorEventData,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import { getPlatformFontFamilySuffix, noop } from "@virtahealth/utils";
import { BaseTheme } from "@virtahealth/styles";
import styled from "../styled-components";

const sizeMap = {
  xs: 24,
  sm: 36,
  md: 48,
  lg: 72,
};

export interface AvatarProps {
  /**
   * The name of the user this Avatar is for.
   * Used to support the initials functionality by splitting on spaces
   * and to provide useful alt text for screen readers.
   */
  readonly username: string;
  /**
   * A fully qualified URL to the avatar image
   */
  readonly imageUrl?: string;

  readonly size?: keyof typeof sizeMap;
  readonly style?: StyleProp<ViewStyle>;
  readonly onError?: (evt: NativeSyntheticEvent<ImageErrorEventData>) => void;
}

type PassthroughProps = Required<Pick<AvatarProps, "size">>;

const AvatarWrapper = styled.View<PassthroughProps>`
  width: ${({ size }) => sizeMap[size]}px;
  height: ${({ size }) => sizeMap[size]}px;
  background: ${({ theme }) => theme.avatarBaseBackgroundColor};
  border: 1px solid ${({ theme }) => theme.avatarBaseBorderColor};
  border-radius: ${({ size }) => sizeMap[size]}px;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.View<Pick<PassthroughProps, "size">>`
  border-radius: ${({ size }) => sizeMap[size]}px;
  width: ${({ size }) => sizeMap[size]}px;
  height: ${({ size }) => sizeMap[size]}px;
  border: 1px solid ${({ theme }) => theme.avatarBaseBorderColor};
`;

const AvatarImage = styled.Image<PassthroughProps>`
  border-radius: ${({ size }) => sizeMap[size]}px;
  width: 100%;
  height: 100%;
`;

const Initials = styled.Text<Pick<AvatarProps, "size">>`
  color: ${({ theme }) => theme.avatarBaseTextColor};
  font-family: "${({ theme }) =>
    theme[
      `avatarBaseFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-weight: ${({ theme }) => theme.avatarBaseFontWeight};
  text-transform: uppercase;
  font-size: ${({ size, theme }) =>
    (sizeMap[size ? size : "md"] / theme.avatarBaseFontSizeDivisor) *
    theme.avatarBaseFontSizeMultiplier}px;
`;

const generateInitialsFromName = (name: string): string =>
  name
    .split(" ")
    .filter(Boolean)
    .map((namePart) => namePart[0].toUpperCase())
    .join("");

export const Avatar: React.FC<AvatarProps> = ({
  username,
  imageUrl,
  onError = noop,
  size = "md",
  style,
}) => {
  const [hasError, setHasError] = React.useState(false);

  return imageUrl && !hasError ? (
    <ImageContainer size={size} style={style}>
      <AvatarImage
        source={{
          uri: imageUrl,
        }}
        size={size}
        resizeMode="cover"
        accessibilityLabel={`Avatar for ${username}`}
        onError={(evt) => {
          setHasError(true);
          onError(evt);
        }}
      />
    </ImageContainer>
  ) : (
    <AvatarWrapper size={size} style={style}>
      <Initials selectable={false} size={size}>
        {generateInitialsFromName(username)}
      </Initials>
    </AvatarWrapper>
  );
};
