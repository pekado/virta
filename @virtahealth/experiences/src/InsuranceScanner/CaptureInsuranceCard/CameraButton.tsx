import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { CameraIcon, Label, styled } from "@virtahealth/components";
import { messages } from "@virtahealth/utils";

const BorderBox = styled(TouchableOpacity)`
  border: 2px solid #226ead;
  width: 100px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const CameraButton: React.FC<{
  direction: string;
  onPress: () => void;
  imageSrc: string;
}> = ({ direction, onPress, imageSrc }) => (
  <View
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Label
      message={
        direction === "front"
          ? messages.cameraDirectionFront
          : messages.cameraDirectionBack
      }
    />
    {imageSrc === "" ? (
      <BorderBox onPress={onPress}>
        <CameraIcon />
      </BorderBox>
    ) : (
      <Image style={{ width: 100, height: 70 }} source={{ uri: imageSrc }} />
    )}
  </View>
);
