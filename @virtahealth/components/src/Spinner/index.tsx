import * as React from "react";
import { ActivityIndicator } from "react-native";

interface Props {
  size?: "small" | "large";
  color?: string;
}

export const Spinner: React.FC<Props> = ({
  size = "small",
  color = "rgb(140, 148, 157)",
}) => <ActivityIndicator size={size} color={color} />;
