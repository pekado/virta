import { ViewProps } from "react-native";
import * as React from "react";
import styled from "../styled-components";

import {
  OffsetValues,
  RelativePosition,
  getStylesFromTargetElementRect,
} from "../position";

export interface HoverPopoverTargetProps {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  targetRef: React.RefObject<HTMLDivElement>;
}

/**
 * Web Only*
 *
 * Wrapper component for elements that will toggle the state of `Popover` on hover.
 */
export const HoverPopoverTarget: React.FC<HoverPopoverTargetProps> = ({
  children,
  onPointerEnter,
  onPointerLeave,
  targetRef,
}) => {
  return (
    <div
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      ref={targetRef}
    >
      {children}
    </div>
  );
};

export interface PopoverProps extends Pick<ViewProps, "style"> {
  isOpen: boolean;
  /**
   * A ref for the element that is being used to toggle the state of the popover
   */
  targetElement?: React.RefObject<HTMLElement>;
  position?: RelativePosition;
  /**
   * Offset values used to nudge positioning of the popover
   */
  offsetValues?: OffsetValues;
  /**
   * A function that toggles the `isOpen` state of the popover
   *
   * Used to keep the popover open when the mouse is hovering over the popover itself
   */
  persistPopover: (val: boolean) => void;
  width: number;
  height?: number;
}

const StyledPopover = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.popoverBackgroundColor};
  border-width: ${({ theme }) => theme.popoverBorderWidth}px;
  border-style: ${({ theme }) => theme.popoverBorderStyle};
  border-color: ${({ theme }) => theme.popoverBorderColor};
  padding: ${({ theme }) => theme.popoverPadding}px;
`;

/**
 * Web Only*
 *
 * Popover that opens when a user hovers over an element
 */
export const Popover: React.FC<PopoverProps> = ({
  children,
  style,
  isOpen,
  targetElement,
  position = RelativePosition.Below,
  offsetValues,
  persistPopover,
  width,
  height,
}) => {
  if (!isOpen || !targetElement) {
    return null;
  }

  let popoverStyles = {};
  if (targetElement.current) {
    const rect = targetElement.current.getBoundingClientRect();
    popoverStyles = getStylesFromTargetElementRect(
      rect,
      position,
      width,
      height,
      offsetValues
    );
  }

  return (
    <div
      onPointerEnter={() => persistPopover(true)}
      onPointerLeave={() => persistPopover(false)}
    >
      <StyledPopover
        style={[
          popoverStyles,
          style,
          { width: `${width}px`, position: "absolute" },
          height ? { height: `${height}px` } : {},
        ]}
      >
        {children}
      </StyledPopover>
    </div>
  );
};
