import * as React from "react";
import { createComponentWithVirtaContext } from "../test";
import { Tooltip } from "./index";

const mockpopoverContent = {
  id: "tooltip.example.content",
  defaultMessage: "Test Data",
};

describe("Tooltip", () => {
  it("Renders the tooltip with popover hidden", () => {
    const wrapper = createComponentWithVirtaContext(
      <Tooltip
        popoverHeight={34}
        popoverWidth={60}
        popoverContent={mockpopoverContent}
      />
    );
    expect(wrapper.queryByTestId("tooltip-popover")).toBeNull();
    expect(wrapper).toMatchSnapshot();
  });
});
