import React, { useState, useEffect } from "react";
import { addons, types, makeDecorator } from "@storybook/addons";
import { ThemeProvider } from "styled-components";
import {
  base,
  highContrast,
  compact,
  spark,
  enrollmentPortal,
} from "@virtahealth/styles";

import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";

export const ADDON_ID = "@virtahealth/theme-selector";
export const THEME_CHANGED_EVENT = "@virtahealth/THEME_CHANGED";

const VIRTA_THEMES_LIST = [
  {
    name: "Substrate",
    value: base,
  },
  {
    name: "Compact",
    value: compact,
  },
  {
    name: "High Contrast",
    value: highContrast,
  },
  {
    name: "Spark",
    value: spark,
  },
  {
    name: "EP",
    value: enrollmentPortal,
  },
];

export const ThemeSelector = () => {
  const [themeName, setThemeName] = useState(VIRTA_THEMES_LIST[0].name);

  useEffect(() => {
    const channel = addons.getChannel();
    channel.emit(THEME_CHANGED_EVENT, themeName);
  }, [themeName]);

  const generateThemeOptions = (activeThemeName, onHide) =>
    VIRTA_THEMES_LIST.map((theme) => ({
      id: theme.name,
      title: theme.name,
      onClick: () => {
        setThemeName(theme.name);
        onHide();
      },
      active: activeThemeName === theme.name,
    }));

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }) => (
        <TooltipLinkList links={generateThemeOptions(themeName, onHide)} />
      )}
      closeOnClick
    >
      <IconButton key="filter" title="Theme">
        <Icons icon="paintbrush" />
      </IconButton>
    </WithTooltip>
  );
};

export const withThemeProvider = makeDecorator({
  name: "withThemeProvider",
  wrapper: (renderStory) => {
    const [theme, setTheme] = useState(base);

    useEffect(() => {
      const channel = addons.getChannel();
      channel.addListener(THEME_CHANGED_EVENT, (themeName) => {
        setTheme(
          VIRTA_THEMES_LIST.find((theme) => theme.name === themeName).value
        );
      });

      return channel.removeListener(THEME_CHANGED_EVENT);
    });

    return <ThemeProvider theme={theme}>{renderStory()}</ThemeProvider>;
  },
});

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    type: types.TOOL,
    title: "Theme Selector",
    render: () => <ThemeSelector />,
  });
});
