import * as styledComponents from "styled-components/native";
import { base } from "@virtahealth/styles";

export type ThemeInterface = typeof base;

const { default: styled, css, ThemeProvider, ThemeContext } = styledComponents;

export { css, ThemeProvider, ThemeContext };
export default styled;

declare module "styled-components" {
  // Disabled because the actual suggestion for this rule ends up breaking our styled-component usage of the Theme.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
