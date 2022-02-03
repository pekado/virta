import * as React from "react";
import { ChicletCard } from "@virtahealth/components";

export default {
  title: "Components / ChicletCard",
  component: ChicletCard,
  argTypes: {
    children: { control: { type: "text" }, defaultValue: "Hello" },
  },
};

export const Examples = ({ ...args }) => <ChicletCard {...args} />;
