export interface LayoutInfo {
  left: string;
  top: string;
}

export interface OffsetValues {
  left: number;
  top: number;
}

export enum RelativePosition {
  Above = "above",
  Below = "below",
  Right = "right",
  Left = "left",
}

export enum PopoverPosition {
  Left = "left",
  Right = "right",
  Center = "center",
}

export interface OptionalPositionValues {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

// Currently incompatible with Mobile. TM-3111
export const getStylesFromTargetElementRect = (
  rect: DOMRect,
  position: RelativePosition,
  width: number,
  height = 60,
  offsetValues: OffsetValues = { left: 0, top: 0 }
): LayoutInfo => {
  const leftOffset = offsetValues.left;
  const topOffset = offsetValues.top;
  // React Native does not have a "window". We can only know the scroll position via ScrollView's onScroll method
  const scrollYOffset = window?.pageYOffset || 0;
  const scrollXOffset = window?.pageXOffset || 0;

  const aboveBelowLeftVal =
    rect.left + rect.width / 2.0 - width / 2.0 - leftOffset + scrollXOffset;
  const leftRightTopVal =
    rect.bottom - rect.height / 2.0 - height / 2.0 - topOffset + scrollYOffset;

  switch (position) {
    case RelativePosition.Below:
      return {
        left: `${aboveBelowLeftVal}px`,
        top: `${rect.top + rect.height - topOffset + scrollYOffset}px`,
      };
    case RelativePosition.Left:
      return {
        left: `${rect.left - width - leftOffset + scrollXOffset}px`,
        top: `${leftRightTopVal}px`,
      };
    case RelativePosition.Right:
      return {
        left: `${rect.right - leftOffset + scrollXOffset}px`,
        top: `${leftRightTopVal}px`,
      };
    case RelativePosition.Above:
    default:
      return {
        left: `${aboveBelowLeftVal}px`,
        top: `${rect.top - height - topOffset + scrollYOffset}px`,
      };
  }
};
