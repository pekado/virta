import * as React from "react";
import { cloneDeep } from "@virtahealth/utils";
import { createComponentWithVirtaContext } from "../../test";
import { Panel } from "../types";
import { PanelDisplay } from "./index";

describe("PanelDisplay", () => {
  it("renders", () => {
    const panelDisplay = createComponentWithVirtaContext(
      <PanelDisplay panel={testPanel} />
    );
    expect(panelDisplay).toMatchSnapshot();
  });

  it("renders when panel has no results for a set of dates", () => {
    const panelDisplay = createComponentWithVirtaContext(
      <PanelDisplay panel={testPanel} />
    );
    expect(panelDisplay).toMatchSnapshot();
  });

  it("renders an empty panel when there are no results and the most recent results flag is true", () => {
    const emptyPanel = cloneDeep(testPanel);
    emptyPanel.panelResults = [];
    const panelDisplay = createComponentWithVirtaContext(
      <PanelDisplay panel={emptyPanel} />
    );
    expect(panelDisplay).toMatchSnapshot();
  });
});

const testDate1 = new Date(2020, 5, 1).toISOString();
const testDate2 = new Date(2020, 4, 1).toISOString();

const panelResult1 = {
  id: "observation1",
  diagnosticReportId: "diagnostic-report-id-1",
  collectionDate: testDate1,
  transcribed: false,
  virtaOrdered: false,
  observations: {
    "2093-3": {
      id: "observation2",
      status: "final",
      code: {
        coding: [
          {
            code: "2093-3",
          },
        ],
        text: "Cholest SerPl-mCnc",
      },
      referenceRange: [
        {
          high: { value: 185 },
          low: { value: 115 },
        },
      ],
      value: 165,
      valueQuantity: {
        value: 165,
      },
    },
    "2085-9": {
      id: "observation7",
      status: "final",
      code: {
        coding: [
          {
            code: "2085-9",
          },
        ],
        text: "HDL-C",
      },
      referenceRange: [
        {
          high: { value: 250 },
          low: { value: 100 },
        },
      ],
      value: 203,
      valueQuantity: {
        value: 203,
      },
    },
  },
};

const panelResult2 = {
  id: "observation4",
  diagnosticReportId: "diagnostic-report-id-2",
  collectionDate: testDate2,
  transcribed: true,
  virtaOrdered: false,
  observations: {
    "2093-3": {
      id: "observation5",
      status: "final",
      code: {
        coding: [
          {
            code: "2093-3",
          },
        ],
        text: "Cholest SerPl-mCnc",
      },
      referenceRange: [
        {
          high: { value: 185 },
          low: { value: 115 },
        },
      ],
      value: 159,
      valueQuantity: {
        value: 159,
      },
    },
    "2571-8": {
      id: "observation6",
      status: "final",
      code: {
        coding: [
          {
            code: "2571-8",
          },
        ],
        text: "Trigl SerPl-mCnc",
      },
      referenceRange: [
        {
          high: { value: 150 },
          low: { value: 100 },
        },
      ],
      value: 115,
      valueQuantity: {
        value: 115,
      },
    },
  },
};

const testPanel: Panel = {
  name: "Lipids",
  observationCodes: [
    {
      observationName: "Cholest SerPl-mCnc",
      codes: ["2093-3"],
      referenceRange: {
        low: { value: 100 },
        high: { value: 199 },
        text: "100 - 199",
      },
    },
    {
      observationName: "Trigl SerPl-mCnc",
      codes: ["2571-8"],
      referenceRange: {
        low: { value: 0 },
        high: { value: 149 },
        text: "0 - 149",
      },
    },
    {
      observationName: "HDL-C",
      codes: ["2085-9", "18263-4"],
      referenceRange: {
        low: { value: 39 },
        text: "> 39",
      },
    },
  ],
  panelResults: [panelResult1, panelResult2],
};
