import { withThemeProvider } from "./themeSelector";
import storybookTheme from "./storybookTheme";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withInternationalProvider } from "./internationalizationProvider";

export const parameters = {
  controls: { expanded: true },
  options: {
    theme: storybookTheme,
    brandTitle: "Virta Health",
    storySort: (a, b) => {
      const sectionA = a[1].id.split("-")[0];
      const sectionB = b[1].id.split("-")[0];

      return sectionB.localeCompare(sectionA);
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  withInternationalProvider,
  withThemeProvider,
  withA11y,
];
