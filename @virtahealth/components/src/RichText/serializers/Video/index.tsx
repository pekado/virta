import { Platform } from "react-native";

import { VideoSerializer as NativeVideoSerializer } from "./index.native";
import { VideoSerializer as WebVideoSerializer } from "./index.dom";

// NOTE: Workaround until platform components are available via filename in Atlas.
export const VideoSerializer = (handleOpenVideo: (url: string) => void) => {
  if (Platform.OS === "web") {
    return WebVideoSerializer();
  }
  return NativeVideoSerializer(handleOpenVideo);
};
