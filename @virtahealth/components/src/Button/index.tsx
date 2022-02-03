/* eslint-disable max-lines */
import * as React from "react";
import { useIntl } from "react-intl";
import { connect, FormikContextType, FormikValues } from "formik";
import {
  ActivityIndicator,
  TouchableOpacityProps,
  Animated,
  View,
  StyleProp,
  TextStyle,
} from "react-native";
import {
  VirtaIntlMessageOrString,
  formatVirtaMessageOrString,
  getFontFamilyAndWeight,
} from "@virtahealth/utils";
import { base } from "@virtahealth/styles";
import { Interpose } from "../Interpose";
import { Spacer } from "../Spacer";
import styled, { css } from "../styled-components";

export interface ButtonProps
  extends Pick<
    TouchableOpacityProps,
    "onPress" | "testID" | "style" | "disabled" | "onLayout"
  > {
  /**
   * The text to display within the button
   */
  readonly labelMessage: VirtaIntlMessageOrString | null;

  readonly labelStyle?: StyleProp<TextStyle>;

  /**
   * The treatment applied to the button
   * @default primary
   */
  readonly intent?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * The appearance of the button
   * @default solid
   */
  readonly appearance?: "solid" | "link" | "outline" | "minimal";

  /**
   * The width of the button
   * if you're using "none" | "narrow", the visible width of the button
   * is controlled by the length of the label or the style prop
   * @default none
   * @deprecated specifying width as a number has been deprecated
   */
  readonly width?: number | "none" | "narrow" | "wide";

  /**
   * The size of the button and the label text
   * @default medium
   */
  readonly size?: "large" | "medium" | "small";

  /**
   * The horizontal alignment of the button label
   * @default center
   */
  readonly alignLabel?: "left" | "center" | "right";

  /**
   * An icon to show before the text label
   * Icon colors are not dynamically changed
   */
  readonly iconBefore?: React.ReactElement;

  /**
   * An icon to show after the text label
   * Icon colors are not dynamically changed
   */
  readonly iconAfter?: React.ReactElement;

  /**
   * shows a spinner when loading is true
   */
  readonly loading?: boolean;
}

export type FormikButtonProps = Exclude<ButtonProps, "onPress">;

type PassthroughProps = Required<
  Pick<
    ButtonProps,
    "intent" | "appearance" | "disabled" | "size" | "alignLabel" | "width"
  >
>;

const StyledButton = styled.TouchableOpacity<PassthroughProps>`
  display: flex;
  justify-content: center;
  align-items: ${({ alignLabel }) =>
    alignLabel === "left"
      ? "flex-start"
      : alignLabel === "right"
      ? "flex-end"
      : "center"};
  border-width: ${({ appearance }) => (appearance === "outline" ? 2 : 0)}px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.buttonBaseBorderRadius}px;
  min-height: ${({ theme, size, appearance }) => {
    if (appearance === "link") {
      return size === "large"
        ? theme.buttonLargeTextFontSize
        : size === "small"
        ? theme.buttonSmallTextFontSize
        : theme.buttonMediumTextFontSize;
    }

    return size === "large"
      ? theme.buttonLargeMinHeight
      : size === "small"
      ? theme.buttonSmallMinHeight
      : theme.buttonMediumMinHeight;
  }}px;
  padding-horizontal: ${({ theme, width, appearance, size }) => {
    if (appearance === "link" || typeof width === "number") {
      return 0;
    }
    if (size === "large") {
      return width === "narrow"
        ? theme.buttonLargeNarrowPaddingHorizontal
        : theme.buttonLargePaddingHorizontal;
    }
    if (size === "small") {
      return width === "narrow"
        ? theme.buttonSmallNarrowPaddingHorizontal
        : theme.buttonSmallPaddingHorizontal;
    }

    // size === "medium" and fallback
    return width === "narrow"
      ? theme.buttonMediumNarrowPaddingHorizontal
      : theme.buttonMediumPaddingHorizontal;
  }}px;
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};

  ${({ width }) => {
    if (typeof width === "number") {
      return css`
        width: ${width}px;
      `;
    }
    if (width === "wide") {
      return css`
        width: 100%;
      `;
    }
  }}

  ${({ appearance, intent }) => {
    switch (intent) {
      case "none":
        return css`
          background-color: ${({ theme }) =>
            appearance === "solid"
              ? theme.buttonNoneBackgroundColor
              : "transparent"};
          border-color: ${({ theme }) => theme.buttonNoneBackgroundColor};
        `;
      case "success":
        return css`
          background-color: ${({ theme }) =>
            appearance === "solid"
              ? theme.buttonSuccessBackgroundColor
              : "transparent"};
          border-color: ${({ theme }) => theme.buttonSuccessBackgroundColor};
        `;
      case "warning":
        return css`
          background-color: ${({ theme }) =>
            appearance === "solid"
              ? theme.buttonWarningBackgroundColor
              : "transparent"};
          border-color: ${({ theme }) => theme.buttonWarningBackgroundColor};
        `;
      case "danger":
        return css`
          background-color: ${({ theme }) =>
            appearance === "solid"
              ? theme.buttonDangerBackgroundColor
              : "transparent"};
          border-color: ${({ theme }) => theme.buttonDangerBackgroundColor};
        `;
      case "tertiary":
        return css`
          background-color: ${({ theme }) =>
            appearance === "solid"
              ? theme.buttonTertiaryBackgroundColor
              : "transparent"};
          border-color: ${({ theme }) => theme.buttonTertiaryBackgroundColor};
          text-decoration: ${({ theme }) => theme.buttonTertiaryTextDecoration};
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) =>
            appearance === "solid"
              ? theme.buttonSecondaryBackgroundColor
              : "transparent"};
          border-color: ${({ theme }) => theme.buttonSecondaryBackgroundColor};
        `;
      case "primary":
      default:
        return css`
          background-color: ${({ theme }) =>
            appearance === "solid"
              ? theme.buttonPrimaryBackgroundColor
              : "transparent"};
          border-color: ${({ theme }) => theme.buttonPrimaryBackgroundColor};
        `;
    }
  }}
`;

// We need to change this slightly to use a slightly different pattern
// https://styled-components.com/docs/advanced#refs
// Removing for the moment since it generates a yellow box warning.
//
// &:hover {
//   background-color: ${({ theme }) =>
//     theme.buttonPrimaryActiveBackgroundColor};
// }

const ButtonText = styled.Text<Omit<PassthroughProps, "alignLabel" | "width">>`
  ${({ theme }) =>
    getFontFamilyAndWeight("Whitney", theme.buttonBaseTextFontWeight)}
  font-size: ${({ theme, size }) =>
    size === "large"
      ? theme.buttonLargeTextFontSize
      : size === "small"
      ? theme.buttonSmallTextFontSize
      : theme.buttonMediumTextFontSize}px;
  line-height: ${({ theme, size }) =>
    size === "large"
      ? theme.buttonLargeTextFontSize
      : size === "small"
      ? theme.buttonSmallTextFontSize
      : theme.buttonMediumTextFontSize}px;
  color: ${({ theme, appearance, intent }) => {
    if (
      appearance === "link" ||
      appearance === "outline" ||
      appearance === "minimal"
    ) {
      switch (intent) {
        case "none":
          return theme.buttonNoneBackgroundColor;
        case "success":
          return theme.buttonSuccessBackgroundColor;
        case "warning":
          return theme.buttonWarningBackgroundColor;
        case "danger":
          return theme.buttonDangerBackgroundColor;
        case "tertiary":
          return theme.buttonTertiaryBackgroundColor;
        case "secondary":
          return theme.buttonSecondaryBackgroundColor;
        case "primary":
        default:
          return theme.buttonPrimaryBackgroundColor;
      }
    }

    switch (intent) {
      case "none":
        return theme.buttonNoneTextColor;
      case "success":
        return theme.buttonSuccessTextColor;
      case "warning":
        return theme.buttonWarningTextColor;
      case "danger":
        return theme.buttonDangerTextColor;
      case "tertiary":
        return theme.buttonTertiaryTextColor;
      case "secondary":
        return theme.buttonSecondaryTextColor;
      case "primary":
      default:
        return theme.buttonPrimaryTextColor;
    }
  }};
`;

const StyledActivityIndicator: React.FC<
  Pick<PassthroughProps, "intent" | "appearance"> & { animating: boolean }
> = ({ appearance, intent, animating }) => {
  let color: string;
  if (
    appearance === "link" ||
    appearance === "outline" ||
    appearance === "minimal"
  ) {
    switch (intent) {
      case "none":
        color = base.buttonNoneBackgroundColor;
        break;
      case "success":
        color = base.buttonSuccessBackgroundColor;
        break;
      case "warning":
        color = base.buttonWarningBackgroundColor;
        break;
      case "danger":
        color = base.buttonDangerBackgroundColor;
        break;
      case "tertiary":
        color = base.buttonTertiaryBackgroundColor;
        break;
      case "secondary":
        color = base.buttonSecondaryBackgroundColor;
        break;
      case "primary":
      default:
        color = base.buttonPrimaryBackgroundColor;
        break;
    }
  } else {
    switch (intent) {
      case "none":
        color = base.buttonNoneTextColor;
        break;
      case "success":
        color = base.buttonSuccessTextColor;
        break;
      case "warning":
        color = base.buttonWarningTextColor;
        break;
      case "danger":
        color = base.buttonDangerTextColor;
        break;
      case "tertiary":
        color = base.buttonTertiaryTextColor;
        break;
      case "secondary":
        color = base.buttonSecondaryTextColor;
        break;
      case "primary":
      default:
        color = base.buttonPrimaryTextColor;
        break;
    }
  }

  return <ActivityIndicator color={color} animating={animating} />;
};

export const Button: React.FC<ButtonProps> = ({
  labelMessage,
  labelStyle,
  intent = "primary",
  appearance = "solid",
  disabled = false,
  size = "medium",
  onPress,
  style,
  width = "none",
  testID,
  alignLabel = "center",
  loading = false,
  iconAfter,
  iconBefore,
  onLayout,
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const [animating, setAnimating] = React.useState(false);
  const textOpacity = React.useRef(new Animated.Value(1));

  React.useEffect(() => {
    Animated.timing(textOpacity.current, {
      toValue: loading ? 0 : 1,
      duration: 100,
      useNativeDriver: true,
    }).start(() => setAnimating(loading));
  }, [loading]);

  return (
    <StyledButton
      onPress={onPress}
      appearance={appearance}
      intent={intent}
      style={style}
      testID={testID}
      disabled={disabled}
      size={size}
      accessible={true}
      accessibilityLabel={
        labelMessage ? (formatMessage(labelMessage) as string) : undefined
      }
      accessibilityRole="button"
      alignLabel={alignLabel}
      width={width}
      onLayout={onLayout}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
          }}
        >
          <StyledActivityIndicator
            intent={intent}
            appearance={appearance}
            animating={animating}
          />
        </View>
        <Animated.View style={{ opacity: textOpacity.current }}>
          <Interpose
            with={<Spacer width={8} height={1} />}
            flexDirection="row"
            style={{ alignItems: "center" }}
          >
            {iconBefore}
            <ButtonText
              intent={intent}
              appearance={appearance}
              size={size}
              disabled={disabled}
              style={labelStyle}
            >
              {labelMessage ? formatMessage(labelMessage) : null}
            </ButtonText>
            {iconAfter}
          </Interpose>
        </Animated.View>
      </View>
    </StyledButton>
  );
};

const FormikButton: React.FC<
  ButtonProps & {
    formik: FormikContextType<FormikValues>;
  }
> = ({ onPress, formik, ...ButtonProps }) => (
  <Button onPress={formik.handleSubmit as (e: any) => void} {...ButtonProps} />
);

export const SubmitButton = connect<FormikButtonProps>(FormikButton);

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  labelMessage,
  intent = "primary",
  appearance = "solid",
  disabled = false,
  size = "medium",
  onPress,
  style,
  width = "none",
  testID,
  icon,
  alignLabel = "center",
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  return (
    <StyledButton
      onPress={onPress}
      appearance={appearance}
      intent={intent}
      style={style}
      testID={testID}
      disabled={disabled}
      size={size}
      accessible={true}
      accessibilityLabel={
        labelMessage ? (formatMessage(labelMessage) as string) : undefined
      }
      accessibilityRole="button"
      alignLabel={alignLabel}
      width={width}
    >
      {icon}
    </StyledButton>
  );
};
/* eslint-enable max-lines */
