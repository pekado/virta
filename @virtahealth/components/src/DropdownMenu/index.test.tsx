import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import { DropdownMenu } from "./index";

const mockTrigger = {
  labelMessage: {
    id: "new.item.label",
    defaultMessage: "New Item",
  },
  fontSize: 14,
  width: 142,
};

const mockOptions = [
  { id: "1", label: "Conditions" },
  { id: "2", label: "Allergies" },
];

describe("Dropdown Menu", () => {
  it("should render the title and menu should be hidden", () => {
    const { getByText, queryByTestId } = createComponentWithVirtaContext(
      <DropdownMenu
        onSelect={() => undefined}
        width={259}
        trigger={mockTrigger}
        options={mockOptions}
      />
    );
    expect(getByText("New Item")).toBeTruthy();
    expect(queryByTestId("options-menu")).toBeNull();
  });

  it("should render the menu and its options", () => {
    const { getByText, getByTestId, queryByTestId } =
      createComponentWithVirtaContext(
        <DropdownMenu
          onSelect={() => undefined}
          width={259}
          trigger={mockTrigger}
          options={mockOptions}
        />
      );

    const menuBtn = getByTestId("dropdownmenu-button-selector");
    fireEvent.press(menuBtn);
    expect(queryByTestId("options-menu")).toBeTruthy();
    expect(getByText("Conditions")).toBeTruthy();
    expect(getByText("Allergies")).toBeTruthy();
  });
});
