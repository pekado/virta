import * as React from "react";
import { View } from "react-native";

// TODO: figure out the correct type for PopoverWrapper
// `children` is not usually used as a function
export const ToastWrapper: React.FC = ({ children }) => {
  const [showToast, setShowToast] = React.useState(false);

  return (
    <View>
      {
        // @ts-ignore - fix types
        children({
          showToast,
          setShowToast,
        })
      }
    </View>
  );
};
