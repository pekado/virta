import { ViewProps, Animated, TouchableOpacity } from "react-native";
import * as React from "react";
import styled from "../styled-components";
import { OptionalPositionValues } from "../position";
import { CloseSymbol } from "../Icons";

export interface ToastProps extends Pick<ViewProps, "style"> {
  isOpen: boolean;
  slideEndPosition: number;
  height: number;
  handleClose: () => void;
  positionValues?: OptionalPositionValues;
  timeoutDuration?: number;
  animationDuration?: number;
  notificationType?: "success" | "error";
}

type ToastStyleProps = Pick<ToastProps, "notificationType">;

interface AnimationStyles {
  opacity?: any;
  bottom?: any;
}

const StyledToaster = styled.View<ToastStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  background-color: ${(props) => {
    if (props.notificationType === "success") {
      return props.theme.toastSuccessBackgroundColor;
    }
    if (props.notificationType === "error") {
      return props.theme.toastErrorBackgroundColor;
    }
    return props.theme.toastDefaultBackgroundColor;
  }};
  border-radius: ${({ theme }) => theme.toastBorderRadius}px;
`;

const StyledToasterContent = styled.View`
  display: flex;
  flex-direction: column;
`;

interface StyledCloseSymbolProps {
  useDefaultColor: boolean;
}

const StyledCloseSymbol = styled(CloseSymbol)<StyledCloseSymbolProps>`
  color: ${(props) =>
    props.useDefaultColor ? props.theme.toastDefaultCloseColor : "#fff"};
`;

const buildAnimation = (
  animRef: Animated.Value,
  toValue: number,
  duration: number,
  startFn?: Animated.EndCallback
) => {
  return Animated.timing(animRef, {
    toValue: toValue,
    duration: duration,
    useNativeDriver: false,
  }).start(startFn);
};

export const Toast: React.FC<ToastProps> = ({
  children,
  style,
  isOpen,
  positionValues,
  handleClose,
  notificationType,
  timeoutDuration,
  height,
  slideEndPosition,
  animationDuration = 1000,
}) => {
  const slideStartPosition = height * -1;
  const positionY = React.useRef(
    new Animated.Value(slideStartPosition)
  ).current;

  const closeToaster = () => {
    buildAnimation(
      positionY,
      slideStartPosition,
      animationDuration,
      handleClose
    );
    if (animationStyles) {
      animationStyles.bottom = positionY;
    }
  };

  React.useEffect(() => {
    if (timeoutDuration) {
      const timeoutRef = setTimeout(closeToaster, timeoutDuration);
      return () => clearTimeout(timeoutRef);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const animationStyles: AnimationStyles = {};
  buildAnimation(positionY, slideEndPosition, animationDuration);
  animationStyles.bottom = positionY;

  return (
    <Animated.View
      // @ts-ignore - `position: 'fixed'` not supported by React Native
      style={[{ position: "fixed", ...positionValues }, animationStyles]}
    >
      <StyledToaster notificationType={notificationType} style={style}>
        <StyledToasterContent>{children}</StyledToasterContent>
        <TouchableOpacity onPress={closeToaster}>
          <StyledCloseSymbol
            useDefaultColor={notificationType ? false : true}
          />
        </TouchableOpacity>
      </StyledToaster>
    </Animated.View>
  );
};
