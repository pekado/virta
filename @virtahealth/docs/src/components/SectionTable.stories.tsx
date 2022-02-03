import * as React from "react";
import { SectionTable } from "@virtahealth/components";

const SectionTableDocs: React.VFC = () => {
  return (
    <div>
      <h1>Section Table</h1>
      <p>
        This is a configurable table and the following props can be passed to
        it:
      </p>
      <ul>
        <li>
          title - It appears as the name of the first column and occupies 50%
          width
        </li>
        <li>
          columns - It is an array that represents the names of other columns
        </li>
        <li>
          noDataMessage - If there is no data present, this message shows up
        </li>
        <li>
          rows - An optional variable that describes the data to be shown in
          rows
        </li>
        <li>
          isEditable - An optional variable to depict if the table is editable
        </li>
        <li>
          editMenuOptions - An optional variable for array of options to be
          shown in the edit menu
        </li>
        <li>
          contentStyles - An optional variable to describe the text style for
          title and column cells on header and rows
        </li>
        <li>
          onEditMenuButtonClick - An optional variable which triggers a callback
          with the menu option selected
        </li>
      </ul>
    </div>
  );
};

export default {
  title: "Components / SectionTable",
  component: SectionTable,
  parameters: {
    docs: {
      page: SectionTableDocs,
    },
  },
};

export const Example = () => (
  <SectionTable
    title={{
      id: "sectionTable.example.title",
      defaultMessage: "Conditions",
    }}
    columns={[
      {
        id: "sectionTable.example.conditions.status",
        defaultMessage: "Status",
      },
      {
        id: "sectionTable.example.conditions.type",
        defaultMessage: "Type",
      },
      {
        id: "sectionTable.example.conditions.dates",
        defaultMessage: "Dates",
      },
    ]}
    noDataMessage={{
      id: "sectionTable.example.noDataMessage",
      defaultMessage: "None entered",
    }}
    isEditable
    onEditMenuButtonClick={() => undefined}
    rows={[
      {
        id: "sample-row",
        title: "Prediabetes, with ocular complication, right side",
        moreInfo: {
          text: {
            id: "sectionTable.example.moreInfo.text",
            defaultMessage: "R12.4567 (ICD-10) \n\n1234567890 (SNOMED)",
          },
          popoverWidth: 200,
          popoverHeight: 60,
          popoverLeft: -30,
        },
        description:
          "Clinician detail here. It can be several many lines. When user expands the view they can see the full details here. The text can then be copy/pasted over to a note if they want to. This note is 4 lines long..........as you can see here. ",
        columnCells: {
          Status: "Resolved",
          Type: "N/A",
          Dates: "09/2019 - 12/2020",
        },
      },
    ]}
  />
);
