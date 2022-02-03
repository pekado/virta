import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import { SectionTable } from "./index";

const mockRowData = {
  id: "test-row",
  title: "Prediabetes, with ocular complication, right side",
  description:
    "Clinician detail here. It can be several many lines. When user expands the view they can see the full details here. The text can then be copy/pasted over to a note if they want to. This note is 4 lines long..........as you can see here. ",
  columnCells: {
    Status: "Resolved",
    Type: "N/A",
    Dates: "09/2019 - 12/2020",
  },
};

const mockEditMenuOptions = [
  {
    id: "1",
    label: {
      id: "editMenu.test.option.edit",
      defaultMessage: "Edit",
    },
  },
  {
    id: "2",
    label: {
      id: "editMenu.test.option.delete",
      defaultMessage: "Delete",
    },
  },
];

describe("Section Table", () => {
  const title = {
    id: "sectionTable.test.title",
    defaultMessage: "Conditions",
  };
  const columns = [
    {
      id: "sectionTable.test.conditions.status",
      defaultMessage: "Status",
    },
    {
      id: "sectionTable.test.conditions.type",
      defaultMessage: "Type",
    },
    {
      id: "sectionTable.test.conditions.dates",
      defaultMessage: "Dates",
    },
  ];
  it("should render the title and headers", () => {
    const { getByText } = createComponentWithVirtaContext(
      <SectionTable title={title} columns={columns} />
    );
    expect(getByText("Conditions")).toBeTruthy();
    expect(getByText("Status")).toBeTruthy();
    expect(getByText("Type")).toBeTruthy();
    expect(getByText("Dates")).toBeTruthy();
  });

  it("should render no-data component with the message coming in props, when rows are unavailable", () => {
    const { getByTestId, getByText } = createComponentWithVirtaContext(
      <SectionTable
        title={title}
        columns={columns}
        noDataMessage={{
          id: "sectionTable.test.noDataMessage",
          defaultMessage: "No data available",
        }}
      />
    );
    expect(getByTestId("no-data")).toBeTruthy();
    expect(getByText("No data available")).toBeTruthy();
  });

  it("should not render no-data component, when rows are available", () => {
    const { queryByTestId } = createComponentWithVirtaContext(
      <SectionTable title={title} rows={[mockRowData]} columns={columns} />
    );
    expect(queryByTestId("no-data")).toBeNull();
  });

  it("should render title and different column values on UI", () => {
    const { getByText } = createComponentWithVirtaContext(
      <SectionTable title={title} rows={[mockRowData]} columns={columns} />
    );
    expect(getByText(mockRowData.title)).toBeTruthy();
    expect(getByText("Show More")).toBeTruthy();
    expect(getByText(mockRowData.columnCells.Status)).toBeTruthy();
    expect(getByText(mockRowData.columnCells.Type)).toBeTruthy();
    expect(getByText(mockRowData.columnCells.Dates)).toBeTruthy();
    const touchableButton = getByText("Show More");
    fireEvent(touchableButton, "press");
    expect(getByText(mockRowData.description)).toBeTruthy();
  });

  it("should have Show More functionality in place for longer text", () => {
    const { getByText } = createComponentWithVirtaContext(
      <SectionTable title={title} rows={[mockRowData]} columns={columns} />
    );
    expect(getByText("Show More")).toBeTruthy();
    const touchableButton = getByText("Show More");
    fireEvent(touchableButton, "press");
    // After clicking ShowMore, whole text should be visible
    expect(getByText(mockRowData.description)).toBeTruthy();
  });

  it("should render EditMenu option based on isEditable=true", () => {
    const { getByTestId } = createComponentWithVirtaContext(
      <SectionTable
        title={title}
        rows={[mockRowData]}
        isEditable
        columns={columns}
      />
    );
    expect(getByTestId("edit-menu-button")).toBeTruthy();
  });

  it("should render EditMenu options on its click", () => {
    const { getByTestId, getByText } = createComponentWithVirtaContext(
      <SectionTable
        title={title}
        rows={[mockRowData]}
        isEditable
        columns={columns}
        editMenuOptions={mockEditMenuOptions}
      />
    );
    const menuBtn = getByTestId("edit-menu-button");
    fireEvent(menuBtn, "press");
    expect(getByText(mockEditMenuOptions[0].label.defaultMessage)).toBeTruthy();
    expect(getByText(mockEditMenuOptions[1].label.defaultMessage)).toBeTruthy();
  });
});
