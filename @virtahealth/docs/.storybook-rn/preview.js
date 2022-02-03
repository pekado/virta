import React from "react";
import { View, StyleSheet } from "react-native";
import { IntlProvider } from "react-intl";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "styled-components/native";
import { base } from "@virtahealth/styles";

export const decorators = [
  (StoryFn) => (
    <ThemeProvider theme={base}>
      <IntlProvider locale="en">
        <View style={styles.container}>
          <StoryFn />
        </View>
      </IntlProvider>
    </ThemeProvider>
  ),
  withBackgrounds,
];
export const parameters = {
  my_param: "anything",
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
};

const styles = StyleSheet.create({
  container: { padding: 8, flex: 1 },
});
