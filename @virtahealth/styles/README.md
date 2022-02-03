<img src="https://s3-us-west-2.amazonaws.com/ketoaccountimagesprod/virta-logo-email.png" width="70">

# Styles

This repo contains the design tokens, primitives, and themes that compose Virta's design language, Substrate

The styles have been written in Typescript

# Directory Structure

## src/primitives

Visual primitives, or design tokens, are constants that define fundamental visual language attributes like color, spacing, typography and size. These can be composed to create a theme.

The primitives variables have been explicitly typed. For example,

```javascript
const oxygenBlue100: string = "rgb(226, 246, 255)";
```

This is because these values are used to build up the themes and those types carry through to the base theme. However, if we don't explicitly type the primitives, then the value in the theme can't be overriden by another theme (which extend the base theme)

👀 [View primitives ➞](./src/design-tokens/primitives)

## src/themes

Themes are a mapping of visual primitives to UI components like text, buttons, inputs, etc. A theme provides all the visual properties necessary to style new and existing UI components. Multiple alternate themes can be created, unified by shared primitives.

Alternate themes are designed to extend the base theme and then apply their own overrides. Any value found in an alternate theme should exist in the base theme to prevent Typescript errors with values that don't exist

👀 [View themes ➞](./src/design-tokens/themes)

# Development

All styles are written in Typescript

The following scripts are available:

```bash
$ yarn start        # run webpack in development mode with `--watch`
$ yarn build        # run webpack in development mode
$ yarn build-prod   # run webpack in production mode
```

Once compiled, themes are emitted to the `./dist` directory in these formats:

- Javascript
- TypeScript Definitions (.d.ts)
