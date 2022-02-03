import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import { MultiSelect, ListItem } from "./index";

const mockListItems: ListItem[] = ["cough", "nausea"].map(
  (item: string, index: number) => {
    return { id: index, labelMessage: item };
  }
);

const mockPlaceholderText = "Search for a reaction";

describe("MultiSelect", () => {
  it("should render the input box and item list should be hidden", () => {
    const { queryByTestId } = createComponentWithVirtaContext(
      <MultiSelect
        placeholderText={mockPlaceholderText}
        listItems={mockListItems}
        onChange={() => undefined}
      />
    );
    expect(queryByTestId("search-reaction-input")).toBeTruthy();
    expect(queryByTestId("itemlist-dropdown")).toBeNull();
  });

  it("should render the item list and its items", async () => {
    const { getByText, queryByTestId } = createComponentWithVirtaContext(
      <MultiSelect
        placeholderText={mockPlaceholderText}
        listItems={mockListItems}
        onChange={() => undefined}
      />
    );

    const trigger = queryByTestId("updown-arrows");
    fireEvent.press(trigger);
    // call to make the dropdown visible is debounced, that's why timeout
    await new Promise((r) => setTimeout(r, 250));
    expect(queryByTestId("itemlist-dropdown")).toBeTruthy();
    expect(getByText("nausea")).toBeTruthy();
    expect(getByText("cough")).toBeTruthy();
  });

  it("should be able to select/deselect the item from the list with input box visible", async () => {
    const { getByText, queryAllByText, queryByTestId } =
      createComponentWithVirtaContext(
        <MultiSelect
          placeholderText={mockPlaceholderText}
          listItems={mockListItems}
          onChange={() => {
            // do nothing
          }}
        />
      );

    const trigger = queryByTestId("updown-arrows");
    fireEvent.press(trigger);
    // call to make the dropdown visible is debounced, that's why timeout
    await new Promise((r) => setTimeout(r, 250));
    expect(queryByTestId("itemlist-dropdown")).toBeTruthy();

    // Selecting the item from the list should work
    const nauseaSelectionButton = getByText("nausea");
    fireEvent.press(nauseaSelectionButton);
    expect(queryAllByText("nausea")).toHaveLength(2);
    expect(queryByTestId("search-reaction-input")).toBeTruthy();

    // Selecting the item again should deselect it
    fireEvent.press(nauseaSelectionButton);
    expect(queryAllByText("nausea")).toHaveLength(1);
    expect(queryByTestId("search-reaction-input")).toBeTruthy();
  });
});
