import * as React from "react";
import { ViewProps, View, TextStyle } from "react-native";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { MessageDescriptor } from "@formatjs/intl";
import { useIntl } from "react-intl";
import styled, { ThemeContext } from "../styled-components";
import { HoverPopoverTarget, Popover, InfoIcon, TooltipArrowIcon } from "..";
import { Base } from "../Text";
import { PopoverPosition } from "../position";

const ARROW_ICON_SIZE = {
  width: 14,
  height: 7,
};

function isMessageDescriptor(object: any): object is MessageDescriptor {
  return "defaultMessage" in object;
}

const TooltipContainer = styled.TouchableOpacity<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const ToolTipContent = styled(Base)`
  font-size: ${({ theme }) => theme.tooltipContentFontSize}px;
  color: ${({ theme }) => theme.tooltipContentColor};
  line-height: ${({ theme }) => theme.tooltipContentLineHeight}px;
  ${() => getFontFamilyAndWeight("Whitney", "300")};
`;

interface PopoverShadow {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
}

interface TooltipProps extends Pick<ViewProps, "style"> {
  popoverWidth: number;
  popoverHeight?: number;
  popoverContent: React.ReactElement | MessageDescriptor;
  popoverTop?: number;
  popoverColor?: string;
  popoverLeft?: number;
  trigger?: { content?: React.ReactElement; width?: number; height?: number };
  popoverPosition?: PopoverPosition;
  popoverShadow?: PopoverShadow;
  popoverContentStyle?: TextStyle;
  hoverable?: boolean;
}

/**
 * Web Only*
 *
 * Tooltip component that uses a web-only component (Popover)
 */
const Tooltip: React.FC<TooltipProps> = ({
  popoverTop = 0,
  popoverWidth,
  popoverHeight,
  popoverColor,
  popoverContent,
  popoverLeft,
  trigger = {},
  popoverPosition = PopoverPosition.Center,
  popoverShadow,
  popoverContentStyle = {},
  hoverable = true,
  style,
}: TooltipProps) => {
  const theme = React.useContext(ThemeContext);

  const {
    content = <InfoIcon height={16} color={theme.tooltipStrokeColor} />,
    width: triggerWidth = 14,
    height: triggerHeight = 14,
  } = trigger;
  const [showPopover, setShowPopover] = React.useState(false);
  const [popoverTarget, setPopoverTarget] =
    React.useState<React.RefObject<HTMLElement> | null>();

  const onPointerEnter = () => {
    setShowPopover(true);
  };

  const onPointerLeave = () => {
    setShowPopover(false);
  };

  const persistPopover = (shouldPersist: boolean) => {
    if (shouldPersist) {
      setPopoverTarget(popoverTarget);
      return;
    }
    setPopoverTarget(null);
    setShowPopover(false);
  };

  const intl = useIntl();
  const getPopoverPosition = () => {
    const positionShiftDelta = 10;
    if (popoverPosition === PopoverPosition.Right) {
      return { left: -popoverWidth + triggerWidth + positionShiftDelta };
    } else if (popoverPosition === PopoverPosition.Left) {
      return { left: -positionShiftDelta };
    }
    // if `popoverLeft` is not provided, the popover will be positioned at center
    return { left: popoverLeft || -(popoverWidth - triggerWidth) / 2 };
  };

  return (
    <TooltipContainer
      onPress={() => {
        setShowPopover(true);
      }}
      width={triggerWidth}
      disabled={hoverable}
      height={triggerHeight}
    >
      <Trigger
        onPointerEnter={() => {
          // if hoverable is false, we don't want to show popup on mouse hover
          if (hoverable) {
            onPointerEnter();
          }
        }}
        onPointerLeave={onPointerLeave}
        setPopoverTarget={setPopoverTarget}
        content={content}
      />
      {showPopover ? (
        <View>
          <Popover
            isOpen={true}
            style={[
              {
                top: popoverTop + 7,
                borderRadius: theme.tooltipContentBorderRadius,
                borderWidth: theme.tooltipContentBorderWidth,
                backgroundColor:
                  popoverColor || theme.tooltipContentBackgroundColor,
                ...getPopoverPosition(),
                ...popoverShadow,
              },
              style,
            ]}
            persistPopover={persistPopover}
            targetElement={popoverTarget || undefined}
            width={popoverWidth}
            height={popoverHeight}
          >
            {isMessageDescriptor(popoverContent) ? (
              <ToolTipContent
                testID={"tooltip-popover"}
                style={popoverContentStyle}
              >
                {intl.formatMessage(popoverContent)}
              </ToolTipContent>
            ) : (
              popoverContent
            )}
          </Popover>
          <TooltipArrowIcon
            color={popoverColor || theme.tooltipContentBackgroundColor}
            style={[
              {
                position: "absolute",
                top: popoverTop,
                left: (triggerWidth - ARROW_ICON_SIZE.width) / 2,
              },
              ARROW_ICON_SIZE,
            ]}
          />
        </View>
      ) : (
        <View />
      )}
    </TooltipContainer>
  );
};

interface TriggerProps {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  setPopoverTarget: (target: React.RefObject<HTMLElement> | null) => void;
  content: React.ReactElement;
}

const Trigger: React.FC<TriggerProps> = ({
  onPointerEnter,
  onPointerLeave,
  setPopoverTarget,
  content,
}) => {
  const popoverTarget = React.useRef(null);

  const showPopover = () => {
    setPopoverTarget(popoverTarget);
    onPointerEnter();
  };

  const hidePopover = () => {
    setPopoverTarget(null);
    onPointerLeave();
  };

  return (
    <HoverPopoverTarget
      onPointerEnter={showPopover}
      onPointerLeave={hidePopover}
      targetRef={popoverTarget}
    >
      {content}
    </HoverPopoverTarget>
  );
};

export { Tooltip, TooltipProps, PopoverShadow, PopoverPosition };
