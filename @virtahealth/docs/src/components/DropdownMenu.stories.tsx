import * as React from "react";
import { DropdownMenu } from "@virtahealth/components";

const DropdownMenuDocs: React.VFC = () => {
  return (
    <div>
      <h1>Dropdown Menu</h1>
      <p>
        This component is combination of a trigger(button) and dropdown. The
        following props can be passed to it:
      </p>
      <ul>
        <li> width - It&apos;s the width of dropdown menu</li>
        <li>
          trigger - The trigger for showing dropdown with the following options:
          <ul>
            <li>title - text of the label</li>
            <li>fontSize - font size of the label</li>
            <li>width - width of the trigger</li>
            <li>leftIcon - icon on the left of trigger</li>
            <li>rightIcon - icon on the right of trigger</li>
          </ul>
        </li>
        <li>isOpen - To control the visibility of dropdown</li>
        <li>options - It&apos;s the list of options to be shown in dropdown</li>
        <li>onSelect - Callback when any option is selected </li>
      </ul>
    </div>
  );
};

export default {
  title: "Components / DropdownMenu",
  component: DropdownMenu,
  parameters: {
    docs: {
      page: DropdownMenuDocs,
    },
  },
};

export const Example = () => (
  <DropdownMenu
    trigger={{
      labelMessage: {
        id: "new.item.label",
        defaultMessage: "New Item",
      },
    }}
    options={[
      { id: "1", label: "Conditions" },
      { id: "2", label: "Allergies" },
    ]}
    onSelect={(selectedOption) => {
      console.log("selected option id is", selectedOption.id);
    }}
  />
);
