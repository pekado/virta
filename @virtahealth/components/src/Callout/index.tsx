import { BaseTheme } from "@virtahealth/styles";
import {
  getPlatformFontFamilySuffix,
  IntlValues,
  VirtaIntlMessageOrString,
  formatVirtaMessageOrString,
  capitalize,
} from "@virtahealth/utils";
import * as React from "react";
import { useIntl } from "react-intl";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
import { Button, ButtonProps } from "../Button";
import styled, { css } from "../styled-components";

export interface CalloutProps {
  /**
   * The treatment applied to the callout
   * @default danger
   */
  readonly intent?: "success" | "warning" | "danger" | "info" | "default";

  /**
   * An icon to show in the left column of the callout
   *
   * The Icon Component will be called with a `color` prop
   * with the correct color for the callout. Your icon component
   * must accept this prop or control the color itself
   */
  readonly icon?: React.ComponentType;

  /**
   * The title for the callout
   */
  readonly title?: VirtaIntlMessageOrString;

  /**
   * The description for the callout
   */
  readonly description?: VirtaIntlMessageOrString;

  readonly primaryActionProps?: Omit<
    ButtonProps,
    "appearance" | "width" | "size" | "intent" | "style"
  >;

  readonly secondaryActionProps?: Omit<
    ButtonProps,
    "appearance" | "width" | "size" | "intent" | "style"
  >;

  /**
   * @deprecated use style instead of containerStyle
   */
  readonly containerStyle?: StyleProp<ViewStyle>;
  readonly style?: StyleProp<ViewStyle>;

  readonly titleVariables?: IntlValues;

  readonly descriptionLinks?: Array<{
    anchorId: string;
    text: VirtaIntlMessageOrString;
  }>;

  onDescriptionLinkClicked?: (anchorId: string) => void;
}

const Title = styled.Text<Required<Pick<CalloutProps, "intent">>>`
  ${({ theme }) => {
    return css`
      font-family: "${theme[
        `calloutBaseTextFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
      ]}";
      font-weight: ${theme.calloutBaseTitleFontWeight};
      font-size: ${theme.calloutBaseTitleFontSize}px;
      line-height: ${theme.calloutBaseTitleLineHeight}px;
    `;
  }}
  color: ${({ intent, theme }) => {
    return theme[getColor(intent, "Font")];
  }}
`;

const Description = styled.Text<Required<Pick<CalloutProps, "intent">>>`
  ${({ theme }) => {
    return css`
      font-family: "${theme[
        `calloutBaseTextFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
      ]}";
      font-weight: ${theme.calloutBaseDescriptionFontWeight};
      font-size: ${theme.calloutBaseDescriptionFontSize}px;
      line-height: ${theme.calloutBaseDescriptionLineHeight}px;
    `;
  }}
  color: ${({ intent, theme }) => {
    return theme[getColor(intent, "Font")];
  }}
`;

const DescriptionLink = styled.Text<Required<Pick<CalloutProps, "intent">>>`
  ${({ theme }) => {
    return css`
      font-family: "${theme[
        `calloutBaseTextFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
      ]}";
      font-weight: ${theme.calloutBaseDescriptionFontWeight};
      font-size: ${theme.calloutBaseDescriptionFontSize}px;
      line-height: ${theme.calloutBaseDescriptionLineHeight}px;
      text-decoration: underline;
    `;
  }}
  color: ${({ intent, theme }) => {
    return theme[getColor(intent, "Font")];
  }}
`;

const CalloutContainer = styled.View<Required<Pick<CalloutProps, "intent">>>`
  display: flex;
  flex-direction: row;
  flex: 1;
  ${({ theme }) => {
    return css`
      border-radius: ${theme.calloutBaseBorderRadius}px;
      border-width: ${theme.calloutBaseBorderWidth}px;
      padding-horizontal: ${theme.calloutBaseContainerHorizontalPadding}px;
      padding-vertical: ${theme.calloutBaseContainerVerticalPadding}px;
    `;
  }}
  background-color: ${({ intent, theme }) => {
    return theme[getColor(intent, "Background")];
  }};
  border-color: ${({ intent, theme }) => {
    return theme[getColor(intent, "Border")];
  }};
  border-width: ${({ intent, theme }) => {
    const capitalizedIntent = capitalize(intent);
    return `${
      theme[`callout${capitalizedIntent}BorderWidth` as keyof BaseTheme]
    }px`;
  }};
  flex-basis: auto;
`;

const MessageContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
`;

const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-top: 12px;
  flex-basis: auto;
`;

const IconContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.calloutBaseContainerHorizontalPadding}px;
`;

type CalloutButtonProps = ButtonProps & {
  intent: NonNullable<CalloutProps["intent"]>;
};
const CalloutButton = styled<React.ComponentType<CalloutButtonProps>>(
  // must manually pass the props or TS can't determine the types
  ({ intent, ...rest }) => <Button intent={intent} {...rest} />
).attrs(({ appearance, intent, theme }) => {
  if (appearance === "outline") {
    return {
      labelStyle: {
        color: theme[getColor(intent, "Font")],
      },
    };
  }
})`
  border-color: ${({ intent, theme }) => theme[getColor(intent, "Button")]};
  ${({ appearance, intent, theme }) => {
    if (appearance === "outline") {
      return;
    }
    return css`
      background-color: ${theme[getColor(intent, "Button")]};
    `;
  }}
`;

type WrappedIcon = SvgProps & { intent: NonNullable<CalloutProps["intent"]> };
function wrapIcon(
  icon?: React.ComponentType<any>
): null | React.ComponentType<WrappedIcon> {
  return icon
    ? styled<React.ComponentType<WrappedIcon>>(icon).attrs(
        ({ intent, theme }) => ({
          color: theme[getColor(intent, "Font")],
        })
      )``
    : null;
}

function getColor(
  intent: NonNullable<CalloutProps["intent"]>,
  type: "Font" | "Button" | "Border" | "Background"
) {
  const capitalizedIntent = capitalize(intent);
  return `callout${capitalizedIntent}${type}Color` as keyof BaseTheme;
}

export const Callout: React.FC<CalloutProps> = ({
  containerStyle,
  description,
  descriptionLinks = [],
  icon,
  style,
  intent = "danger",
  primaryActionProps,
  secondaryActionProps,
  titleVariables,
  title,
  onDescriptionLinkClicked,
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);
  const Icon = wrapIcon(icon);

  return (
    <CalloutContainer intent={intent} style={[containerStyle, style]}>
      {Icon ? (
        <IconContainer>
          <Icon intent={intent} />
        </IconContainer>
      ) : null}
      <MessageContainer>
        {title ? (
          <Title intent={intent}>{formatMessage(title, titleVariables)}</Title>
        ) : null}
        {description ? (
          <Description intent={intent}>
            {formatMessage(description)}
          </Description>
        ) : null}
        {descriptionLinks && descriptionLinks.length > 0 && (
          <ul>
            {descriptionLinks.map((link, linkIndex) => (
              <li key={linkIndex}>
                <DescriptionLink
                  intent={intent}
                  onPress={() => {
                    if (onDescriptionLinkClicked) {
                      onDescriptionLinkClicked(link.anchorId);
                    }
                  }}
                >
                  {formatMessage(link.text)}
                </DescriptionLink>
              </li>
            ))}
          </ul>
        )}
        {primaryActionProps || secondaryActionProps ? (
          <ButtonRow>
            {primaryActionProps ? (
              <CalloutButton
                {...primaryActionProps}
                intent={intent}
                size="small"
                width="none"
                style={{ marginRight: 8 }}
              />
            ) : null}
            {secondaryActionProps ? (
              <CalloutButton
                {...secondaryActionProps}
                appearance="outline"
                intent={intent}
                size="small"
                width="none"
              />
            ) : null}
          </ButtonRow>
        ) : null}
      </MessageContainer>
    </CalloutContainer>
  );
};
