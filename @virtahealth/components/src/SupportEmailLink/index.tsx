import * as React from "react";
import { Linking } from "react-native";
import { Body, BodyProps } from "../SubstrateText";

export const SupportEmailLink: React.FC<BodyProps> = ({
  weight = "regular",
  color = "secondary",
  size = "small",
}) => (
  <Body
    weight={weight}
    color={color}
    size={size}
    onPress={() => Linking.openURL("mailto:support@virtahealth.com")}
  >
    support@virtahealth.com
  </Body>
);

export default SupportEmailLink;
