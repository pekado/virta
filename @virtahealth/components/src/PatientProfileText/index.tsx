import * as React from "react";
import { FormattedMessage } from "react-intl";
import { getPlatformFontFamilySuffix } from "@virtahealth/utils";
import { BaseTheme } from "@virtahealth/styles";
import { Label, TextProps } from "../Text";
import styled from "../styled-components";

export const StyledBodySpaced = styled.Text`
  color: ${({ theme }) => theme.textBodySpacedColor};
  font-family: "${({ theme }) =>
    theme[
      `textBodySpacedFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
  font-size: ${({ theme }) => theme.textBodySpacedFontSize}px;
  font-weight: ${({ theme }) => theme.textBodySpacedFontWeight};
  letter-spacing: ${({ theme }) => theme.textBodySpacedLetterSpacing}px;
  line-height: ${({ theme }) => theme.textBodySpacedLineHeight}px;
`;

export const BodySpaced: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBodySpaced {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBodySpaced>
);

export const StyledBodySpacedSmall = styled(StyledBodySpaced)`
  font-size: ${({ theme }) => theme.textBodySpacedSmallFontSize}px;
`;

export const BodySpacedSmall: React.FC<TextProps> = ({
  message,
  children,
  ...textProps
}) => (
  <StyledBodySpacedSmall {...textProps}>
    {message ? <FormattedMessage {...message} /> : null}
    {children}
  </StyledBodySpacedSmall>
);

export const LabelLarge = styled(Label)`
  font-size: ${({ theme }) => theme.textLabelLargeFontSize}px;
  line-height: ${({ theme }) => theme.textLabelLargeLineHeight}px;
`;
