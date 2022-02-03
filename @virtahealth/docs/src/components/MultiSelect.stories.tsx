import * as React from "react";
import { MultiSelect, ListItem } from "@virtahealth/components";

const MultiSelectDocs: React.VFC = () => {
  return (
    <div>
      <h1>MultiSelect</h1>
      <p>
        This component allows to select multiple items from the list and the
        following props can be passed to it:
      </p>
      <ul>
        <li>placeholderText - The placeholder text for input box</li>
        <li>width - The optional prop for width of the box</li>
        <li>listItems - Items to be shown in the list</li>
        <li>onChange - Callback with all the list items selected </li>
      </ul>
    </div>
  );
};

export default {
  title: "Components / MultiSelect",
  component: MultiSelect,
  parameters: {
    docs: {
      page: MultiSelectDocs,
    },
  },
};

const mockListItems: ListItem[] = ["cough", "nausea"].map(
  (item: string, index: number) => {
    return { id: index, labelMessage: item };
  }
);

export const Example = () => (
  <MultiSelect
    placeholderText={"Search for a reaction"}
    listItems={mockListItems}
    onChange={() => undefined}
  />
);
