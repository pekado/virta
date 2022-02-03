import * as React from "react";
import { HoverPopoverTarget, TableCell } from "@virtahealth/components";
import { View } from "react-native";

// TODO: figure out the correct type for PopoverWrapper
// `children` is not usually used as a function
export const PopoverWrapper: React.FC = ({ children }) => {
  const [showPopover, setShowPopover] = React.useState(false);
  const [popoverTarget, setPopoverTarget] =
    React.useState<React.RefObject<HTMLElement> | null>();

  const onPointerEnter = () => {
    setShowPopover(true);
  };

  const onPointerLeave = () => {
    setShowPopover(false);
  };

  const persistPopover = (value: boolean) => {
    if (value) {
      setPopoverTarget(popoverTarget);
      setShowPopover(true);
      return;
    }

    setPopoverTarget(null);
    setShowPopover(false);
  };

  return (
    <View>
      {
        // @ts-ignore - fix types
        children({
          onPointerEnter,
          onPointerLeave,
          persistPopover,
          showPopover,
          setPopoverTarget,
          popoverTarget,
        })
      }
    </View>
  );
};

// copied from Popover/index.tsx
interface HoverPopoverTargetProps {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  targetRef: React.RefObject<HTMLDivElement>;
}

export const PopoverCell: React.FC<HoverPopoverTargetProps> = ({
  onPointerEnter,
  onPointerLeave,
  // @ts-ignore - TODO - figure out if this is needed
  // eslint-disable-next-line react/prop-types
  setPopoverTarget,
  children,
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
    <TableCell
      value={
        <HoverPopoverTarget
          onPointerEnter={showPopover}
          onPointerLeave={hidePopover}
          targetRef={popoverTarget}
        >
          {children}
        </HoverPopoverTarget>
      }
    />
  );
};
