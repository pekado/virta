import { Platform, PlatformOSType, TextStyle } from "react-native";

const platformFontNameMap: { [key in PlatformOSType]: string } = {
  ios: "",
  android: "Android",
  // if we start using this, we may need to look in dynamic platform detection
  // so we can distinguish between iOS & Android
  native: "",
  web: "Web",
  windows: "",
  macos: "",
};

export function getPlatformFontFamilySuffix() {
  return platformFontNameMap[Platform.OS];
}

/**
 * Each plaform handles fonts differently. This functions
 * helps to standardize the differences
 *
 * this function returns a `string` instead of a styled-components `css`
 * because the `css` function causes errors in the build system
 */
export function getFontFamilyAndWeight(
  fontFamilyVariant: "Whitney" | "Chronicle",
  fontWeight: TextStyle["fontWeight"]
): string {
  if (fontFamilyVariant === "Chronicle") {
    if (Platform.OS === "web") {
      return `
        font-family: "Chronicle Display A, Chronicle Display B, Whitney, Arial";
        font-weight: ${fontWeight};
      `;
    } else {
      return `
        font-family: "ChronicleDisplay-Semi";
        ${() => (Platform.OS === "ios" ? `font-weight: ${fontWeight}` : "")}
      `;
    }
  } else {
    if (Platform.OS === "web") {
      return `
        font-family: "Whitney A, Whitney B, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif";
        font-weight: ${fontWeight};
      `;
    } else {
      const fontWeightStyle =
        Platform.OS === "ios" ? `font-weight: ${fontWeight};` : "";
      let fontFamilyStyle = "";
      switch (fontWeight) {
        case "100":
        case "200":
        case "300":
          fontFamilyStyle = 'font-family: "Whitney-Book";';
          break;
        case "700":
        case "800":
        case "900":
        case "bold":
          fontFamilyStyle = 'font-family: "Whitney-Semibold";';
          break;
        case "normal":
        case "400":
        case "500":
        case "600":
        default:
          fontFamilyStyle = 'font-family: "Whitney-Medium";';
      }
      return `
        ${fontFamilyStyle}
        ${fontWeightStyle}
      `;
    }
  }
}
