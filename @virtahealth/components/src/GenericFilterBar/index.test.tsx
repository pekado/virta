import * as React from "react";
import { createComponentWithVirtaContext } from "../test";
import { GenericFilterBar, Status } from "./index";

describe("GenericFilterBar Component", () => {
  it("should render the list of filters will all filter status as active", () => {
    const filterCategoriesData = [
      {
        title: {
          id: "genericFilterBar.test.conditions",
          defaultMessage: "Conditions",
        },
        status: Status.Active,
        id: "conditions",
      },
      {
        title: {
          id: "genericFilterBar.test.surgeries",
          defaultMessage: "Surgeries",
        },
        status: Status.Active,
        id: "surgeries",
      },
      {
        title: {
          id: "genericFilterBar.test.medsAllergies",
          defaultMessage: "Meds Allergies",
        },
        status: Status.Active,
        id: "meds-allergies",
      },
      {
        title: {
          id: "genericFilterBar.test.medsAllergies",
          defaultMessage: "Food Allergies",
        },
        status: Status.Active,
        id: "food-allergies",
      },
    ];

    const { getByTestId } = createComponentWithVirtaContext(
      <GenericFilterBar
        filterCategories={filterCategoriesData}
        onFilterChange={() => null}
      />
    );

    expect(getByTestId("conditions")).toBeTruthy();
    expect(getByTestId("surgeries")).toBeTruthy();
    expect(getByTestId("meds-allergies")).toBeTruthy();
    expect(getByTestId("food-allergies")).toBeTruthy();
  });

  it("should render the list of filters will all filter status as disabled", () => {
    const filterCategoriesData = [
      {
        title: {
          id: "genericFilterBar.example.conditions",
          defaultMessage: "Conditions",
        },
        status: Status.Disabled,
        id: "conditions",
      },
      {
        title: {
          id: "genericFilterBar.example.surgeries",
          defaultMessage: "Surgeries",
        },
        status: Status.Disabled,
        id: "surgeries",
      },
      {
        title: {
          id: "genericFilterBar.example.medsAllergies",
          defaultMessage: "Meds Allergies",
        },
        status: Status.Disabled,
        id: "meds-allergies",
      },
      {
        title: {
          id: "genericFilterBar.example.medsAllergies",
          defaultMessage: "Food Allergies",
        },
        status: Status.Disabled,
        id: "food-allergies",
      },
    ];

    const { getByTestId } = createComponentWithVirtaContext(
      <GenericFilterBar
        filterCategories={filterCategoriesData}
        onFilterChange={() => null}
      />
    );

    expect(getByTestId("conditions")).toBeDisabled();
    expect(getByTestId("surgeries")).toBeDisabled();
    expect(getByTestId("meds-allergies")).toBeDisabled();
    expect(getByTestId("food-allergies")).toBeDisabled();
  });

  it("should render the list of filters will some filter status as active and some disabled", () => {
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
        status: Status.Disabled,
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
        status: Status.Disabled,
        id: "food-allergies",
      },
    ];

    const { getByTestId } = createComponentWithVirtaContext(
      <GenericFilterBar
        filterCategories={filterCategoriesData}
        onFilterChange={() => null}
      />
    );

    expect(getByTestId("conditions")).toBeTruthy();
    expect(getByTestId("surgeries")).toBeDisabled();
    expect(getByTestId("meds-allergies")).toBeTruthy();
    expect(getByTestId("food-allergies")).toBeDisabled();
  });
});
