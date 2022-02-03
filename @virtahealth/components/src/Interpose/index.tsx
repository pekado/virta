import * as React from "react";
import {
  Children,
  Fragment,
  isValidElement,
  ReactNode,
  ReactElement,
  FC,
} from "react";
import { FlexStyle, StyleProp, View, ViewStyle } from "react-native";

interface InterposeProps {
  readonly children: ReactNode;
  readonly with: ReactNode;
  readonly flexDirection?: FlexStyle["flexDirection"] | never;
  readonly showLast?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Interpose: FC<InterposeProps> = ({
  children,
  with: providedComponent,
  flexDirection = "column",
  showLast = false,
  style,
}: InterposeProps) => {
  const childElements = Children.toArray(children).filter(
    (c): c is ReactElement<any> => isValidElement(c)
  );

  const interposedChildren = childElements.map((child, i) => {
    const isNotLastChild = i < childElements.length - 1;

    return (
      <Fragment key={child.key || i}>
        {child}
        {(isNotLastChild || showLast) && providedComponent}
      </Fragment>
    );
  });

  return <View style={[{ flexDirection }, style]}>{interposedChildren}</View>;
};
