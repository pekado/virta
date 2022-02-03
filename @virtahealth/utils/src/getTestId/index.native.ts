import { Platform } from "react-native";
import { getBundleId } from "react-native-device-info";

const appIdentifier = getBundleId();

/**
 * based on this blog post
 * https://dev.to/nextlevelbeard/an-end-to-the-abuse-of-accessibility-ids-5d2j
 */
export function getTestID(testID: string): string | undefined {
  if (!testID) {
    return undefined;
  }

  const prefix = `${appIdentifier}:id/`;
  const hasPrefix = testID.startsWith(prefix);

  return Platform.select({
    android: !hasPrefix ? `${prefix}${testID}` : testID,
    ios: hasPrefix ? testID.slice(prefix.length) : testID,
  });
}

export const tID = getTestID;
