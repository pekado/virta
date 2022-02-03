import { create } from "@storybook/theming";
import { base } from "@virtahealth/styles";
import logo from "./logo.svg";

export default create({
  base: "light",
  fontBase: base.textBaseFontFamily,
  textColor: base.textBaseColor,
  brandTitle: "Virta Health",
  brandUrl: "https://virtahealth.com",
  brandImage: logo,
});
