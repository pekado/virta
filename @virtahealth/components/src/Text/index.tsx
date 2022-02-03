import * as React from "react";

import { FormattedMessage, MessageDescriptor } from "react-intl";
import { Platform, TextProps as RNTextProps } from "react-native";

import { getPlatformFontFamilySuffix } from "@virtahealth/utils";
import { BaseTheme } from "@virtahealth/styles";
import styled, { css } from "../styled-components";

export interface TextProps extends RNTextProps {
  message?: MessageDescriptor;
}

const StyledBase = styled.Text`
  color: ${({ theme }) => theme.textBaseColor};
  font-family: "${({ theme }) =>
    theme[
      `textBaseFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textBaseFontSize}px;
  font-weight: ${({ theme }) => theme.textBaseFontWeight};
  letter-spacing: ${({ theme }) => theme.textBaseLetterSpacing}px;
  line-height: ${({ theme }) => theme.textBaseLineHeight}px;
  text-decoration: ${({ theme }) => theme.textDecoration};
`;

export const Base: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBase {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBase>
);

const StyledHeading1 = styled.Text`
  color: ${({ theme }) => theme.textHeading1Color};
  font-family: "${({ theme }) =>
    theme[
      `textHeading1FontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textHeading1FontSize}px;
  font-weight: ${({ theme }) => theme.textHeading1FontWeight};
  letter-spacing: ${({ theme }) => theme.textBaseLetterSpacing}px;
  line-height: ${({ theme }) => theme.textHeading1LineHeight}px;
`;

export const Heading1: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledHeading1 {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledHeading1>
);

const StyledHeading2 = styled.Text`
  color: ${({ theme }) => theme.textHeading2Color};
  font-family: "${({ theme }) =>
    theme[
      `textHeading2FontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textHeading2FontSize}px;
  font-weight: ${({ theme }) => theme.textHeading2FontWeight};
  letter-spacing: ${({ theme }) => theme.textBaseLetterSpacing}px;
  line-height: ${({ theme }) => theme.textHeading2LineHeight}px;
`;

export const Heading2: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledHeading2 {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledHeading2>
);

export const StyledHeading3 = styled.Text`
  color: ${({ theme }) => theme.textHeading3Color};
  font-family: "${({ theme }) =>
    theme[
      `textHeading3FontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textHeading3FontSize}px;
  font-weight: ${({ theme }) => theme.textHeading3FontWeight};
  letter-spacing: ${({ theme }) => theme.textBaseLetterSpacing}px;
  line-height: ${({ theme }) => theme.textHeading3LineHeight}px;
`;

export const Heading3: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledHeading3 {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledHeading3>
);

export const StyledHeading4 = styled.Text`
  color: ${({ theme }) => theme.textHeading4Color};
  font-family: "${({ theme }) =>
    theme[
      `textHeading4FontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textHeading4FontSize}px;
  font-weight: ${({ theme }) => theme.textHeading4FontWeight};
  letter-spacing: ${({ theme }) => theme.textBaseLetterSpacing}px;
  line-height: ${({ theme }) => theme.textHeading4LineHeight}px;
`;

export const Heading4: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledHeading4 {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledHeading4>
);

export const StyledBody = styled.Text`
  color: ${({ theme }) => theme.textBodyColor};
  font-family: "${({ theme }) =>
    theme[
      `textBodyFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textBodyFontSize}px;
  font-weight: ${({ theme }) => theme.textBodyFontWeight};
  letter-spacing: ${({ theme }) => theme.textBodyLetterSpacing}px;
  line-height: ${({ theme }) => theme.textBodyLineHeight}px;
`;

export const Body: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBody {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBody>
);

export const StyledBodySmall = styled.Text`
  color: ${({ theme }) => theme.textBodySmallColor};
  font-family: "${({ theme }) =>
    theme[
      `textBodySmallFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textBodySmallFontSize}px;
  font-weight: ${({ theme }) => theme.textBodySmallFontWeight};
  letter-spacing: ${({ theme }) => theme.textBodySmallLetterSpacing}px;
  line-height: ${({ theme }) => theme.textBodySmallLineHeight}px;
`;

export const BodySmall: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBodySmall {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBodySmall>
);

export const StyledBodyLight = styled(StyledBody)`
  color: ${({ theme }) => theme.textBodyLightColor};
`;

export const BodyLight: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBodyLight {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBodyLight>
);

const StyledCaption = styled.Text`
  color: ${({ theme }) => theme.textCaptionColor};
  font-family: "${({ theme }) =>
    theme[
      `textCaptionFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textCaptionFontSize}px;
  font-weight: ${({ theme }) => theme.textCaptionFontWeight};
  letter-spacing: ${({ theme }) => theme.textCaptionLetterSpacing}px;
  line-height: ${({ theme }) => theme.textCaptionLineHeight}px;
`;

export const Caption: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledCaption {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledCaption>
);

export const StyledMonospace = styled.Text`
  color: ${({ theme }) => theme.textMonospaceColor};
  font-family: "${({ theme }) =>
    theme[
      `textMonospaceFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textMonospaceFontSize}px;
  font-weight: ${({ theme }) => theme.textMonospaceFontWeight};
  letter-spacing: ${({ theme }) => theme.textMonospaceLetterSpacing}px;
  line-height: ${({ theme }) => theme.textMonospaceLineHeight}px;
`;

export const Monospace: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <Monospace {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </Monospace>
);

const StyledBlockquote = styled.Text`
  font-family: "${({ theme }) =>
    theme[
      `textBlockquoteFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textBlockquoteFontSize}px;
  line-height: ${({ theme }) => theme.textBlockquoteLineHeight}px;
  letter-spacing: ${({ theme }) => theme.textBlockquoteLetterSpacing}px;
  font-weight: ${({ theme }) => theme.textBlockquoteFontWeight};
  color: ${({ theme }) => theme.textBlockquoteColor};
`;

export const Blockquote: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBlockquote {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBlockquote>
);

const StyledSmallcaps = styled.Text`
  font-family: "${({ theme }) =>
    theme[
      `textSmallcapsFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textSmallcapsFontSize}px;
  line-height: ${({ theme }) => theme.textSmallcapsLineHeight}px;
  letter-spacing: ${({ theme }) => theme.textSmallcapsLetterSpacing}px;
  font-weight: ${({ theme }) => theme.textSmallcapsFontWeight};
  color: ${({ theme }) => theme.textSmallcapsColor};
`;

export const Smallcaps: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledSmallcaps {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledSmallcaps>
);

const StyledLabel = styled.Text`
  font-family: "${({ theme }) =>
    theme[
      `textLabelFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textLabelFontSize}px;
  line-height: ${({ theme }) => theme.textLabelLineHeight}px;
  letter-spacing: ${({ theme }) => theme.textLabelLetterSpacing}px;
  font-weight: ${({ theme }) => theme.textLabelFontWeight};
  color: ${({ theme }) => theme.textLabelColor};
`;

export const Label: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledLabel {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledLabel>
);

const StyledHelperText = styled.Text`
  font-family: "${({ theme }) =>
    theme[
      `textHelperTextFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textHelperTextFontSize}px;
  font-weight: ${({ theme }) => theme.textHelperTextFontWeight};
  letter-spacing: ${({ theme }) => theme.textLabelLetterSpacing}px;
  line-height: ${({ theme }) => theme.textHelperTextLineHeight}px;
  color: ${({ theme }) => theme.textHelperTextColor};
`;

export const HelperText: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledHelperText {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledHelperText>
);

const StyledErrorText = styled.Text`
  font-family: "${({ theme }) =>
    theme[
      `textHelperTextFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textHelperTextFontSize}px;
  font-weight: ${({ theme }) => theme.textHelperTextFontWeight};
  letter-spacing: ${({ theme }) => theme.textLabelLetterSpacing};
  line-height: ${({ theme }) => theme.textHelperTextLineHeight}px;
  color: ${({ theme }) => theme.textErrorColor};
`;

export const ErrorText: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledErrorText {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledErrorText>
);

const StyledBodyEmphasized = styled(StyledBody)`
  ${() => {
    // Italic font only works on iOS with lighter-weight font,
    // otherwise, the font appears to be bold
    if (Platform.OS === "ios") {
      return css`
        font-weight: ${({ theme }) => theme.textItalicFontWeight};
      `;
    }
  }}
  ${() => {
    // Italic font on Android requires that we specify the filename
    if (Platform.OS === "android") {
      return css`
        font-family: "${({ theme }) => theme.textItalicFontFamilyAndroid}";
      `;
    }

    return css`
      font-style: italic;
    `;
  }}
`;

export const BodyEmphasized: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBodyEmphasized {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBodyEmphasized>
);
