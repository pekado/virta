import * as React from "react";
import { SupportEmailLink } from "@virtahealth/components";

export default {
  title: "Components / Support Email Link",
  component: SupportEmailLink,
  argTypes: {
    size: {
      control: { type: "number", min: 1, max: 4, step: 1 },
      defaultValue: { summary: "2" },
      description:
        "The size of headings as numbers (1 - 4) that map to HTML h tags (e.g. `<h1>`, `<h2>`, etc.). Raw font-sizes can also be passed in as a string, assuming valid for platform to be used in. (e.g. 24px, 32rem, etc.)",
    },
    weight: {
      control: { type: "select", options: ["regular", "semibold", "bold"] },
      defaultValue: { summary: "bold" },
      description:
        "Font weight that can be intent values or raw font weight values (e.g. 500, 600).",
    },
    color: {
      control: {
        type: "select",
        options: [
          "base",
          "subdued",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
        ],
      },
      defaultValue: { summary: "base" },
      description:
        "Text color conveyed by intent. Raw hex values or rgba values can also be passed in as a string.",
    },
  },
};

export const Example = ({ ...args }) => <SupportEmailLink {...args} />;
