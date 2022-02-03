/**
 * this mock is only due to a change in React Native 62 that
 * broke native-testing-library
 *
 * https://github.com/facebook/react-native/issues/27721
 * https://github.com/testing-library/native-testing-library/issues/113
 */
jest.mock(
  "react-native/Libraries/Components/Touchable/TouchableOpacity",
  () => "TouchableOpacity"
);

jest.mock("react-native-imask", () => ({
  __esModule: true,
  default: () => null,
  IMaskTextInput: "IMaskTextInput",
}));

jest.mock("react-native-device-info", () => ({
  __esModule: true,
  getBundleId: () => "test",
}));

// @ts-ignore - workaround for typing the Global object in tests
global.AbortController = class {
  signal = "test-signal";
  abort = jest.fn();
};
