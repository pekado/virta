import * as React from "react";
import { GenericFilterBar, Status } from "@virtahealth/components";

const GenericFilterBarDocs: React.VFC = () => {
  return (
    <div>
      <h1>GenericFilterBar</h1>
      <p>
        This is a GenericFilterBar component and the following props can be
        passed to it:
      </p>
      <ul>
        <li>
          filterCategories - It is an array of objects containing data for
          Filter Items
        </li>
        <li>
          onChange - It is a callback function that will be called with an
          argument containing list of all active filters
        </li>
      </ul>
    </div>
  );
};

export default {
  title: "Components / GenericFilterBar",
  parameters: {
    docs: {
      page: GenericFilterBarDocs,
    },
  },
};

export const Example = () => {
  const filterCategoriesData = [
    {
      title: {
        id: "genericFilterBar.example.conditions",
        defaultMessage: "Conditions",
      },
      status: Status.Active,
      id: "conditions",
    },
    {
      title: {
        id: "genericFilterBar.example.surgeries",
        defaultMessage: "Surgeries",
      },
      status: Status.Active,
      id: "surgeries",
    },
    {
      title: {
        id: "genericFilterBar.example.medsAllergies",
        defaultMessage: "Meds Allergies",
      },
      status: Status.Active,
      id: "meds-allergies",
    },
    {
      title: {
        id: "genericFilterBar.example.medsAllergies",
        defaultMessage: "Food Allergies",
      },
      status: Status.Active,
      id: "food-allergies",
    },
  ];

  const onFilterChange = () => undefined;

  return (
    <GenericFilterBar
      filterCategories={filterCategoriesData}
      onFilterChange={onFilterChange}
    />
  );
};
