import React from "react";
import { makeDecorator } from "@storybook/addons";
import { IntlProvider } from "react-intl";
import styled from "styled-components";
import { View } from "react-native";
import { translations } from "@virtahealth/utils";

const CanvasWrapper = styled(View)`
  padding: 20px;
`;

export const withInternationalProvider = makeDecorator({
  name: "withInternationalizationProvider",
  wrapper: (renderStory) => {
    return (
      <IntlProvider locale="en" messages={translations.en}>
        <CanvasWrapper>{renderStory()}</CanvasWrapper>
      </IntlProvider>
    );
  },
});
