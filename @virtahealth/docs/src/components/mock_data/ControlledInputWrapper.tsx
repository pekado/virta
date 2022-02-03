import * as React from "react";

// TODO - figure out if these types are correct. Guessed based on usage
interface Props {
  onChangeText: (val: string) => void;
  value: string;
}

export const wrapControlledInput =
  (WrappedComponent: React.ComponentType<Props>) =>
  // eslint-disable-next-line react/display-name
  ({ onChangeText, value, ...props }: Props) => {
    const [currentValue, setValue] = React.useState(value);
    const handleChangeText = (val: string) => {
      setValue(val);
      if (onChangeText) {
        onChangeText(val);
      }
    };

    return (
      <WrappedComponent
        {...props}
        value={currentValue}
        onChangeText={handleChangeText}
      />
    );
  };
