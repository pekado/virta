module.exports = {
  // limit to `src` so we don't get the stories from node_modules
  stories: ["../src/**/*.stories.@(jsx|mdx|tsx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "storybook-addon-designs",
  ],
};
