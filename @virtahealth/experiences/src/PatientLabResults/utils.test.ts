import {
  albuminCreatininePanelObservationCodes,
  cPeptidePanelObservationCodes,
  hbA1cObservationCodes,
  lipidNmrPanelObservationCodes,
  lipidPanelObservationCodes,
  metabolicPanelObservationCodes,
} from "./constants";
import { buildStructuredPanels } from "./utils";

describe("buildStructuredPanels", () => {
  it("returns object core/other labs separated from each other for a single diagnostic report", () => {
    const result = buildStructuredPanels([
      {
        id: "diagnostic-report-2",
        identifier: [],
        code: { text: "Imported Result" },
        effectiveDateTime: testDate3,
        status: "final",
        result: [
          {
            id: "observation5",
            code: {
              text: "HbA1c",
            },
            status: "final",
            related: [
              {
                id: "observation6",
                code: { coding: [{ code: "4548-4" }] },
                status: "final",
                valueQuantity: {
                  value: 6.7,
                },
              },
            ],
          },
          {
            id: "observation9",
            code: {
              text: "Lipids",
            },
            status: "final",
            related: [
              {
                id: "observation10",
                code: { coding: [{ code: "2093-3" }] },
                status: "final",
                valueQuantity: { value: 165 },
              },
              {
                id: "observation11",
                code: { coding: [{ code: "2571-8" }] },
                status: "final",
                valueQuantity: { value: 123 },
              },
            ],
          },
          {
            id: "observation12",
            code: {
              text: "GAD65 Ab Ser",
            },
            status: "final",
            related: [
              {
                id: "observation13",
                code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                status: "final",
                valueQuantity: {
                  value: 13.2,
                },
              },
            ],
          },
        ],
      },
    ]);
    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              id: "observation5",
              collectionDate: testDate3,
              diagnosticReportId: "diagnostic-report-2",
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "4548-4": {
                  id: "observation6",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "4548-4",
                      },
                    ],
                  },
                  related: undefined,
                  value: 6.7,
                  valueQuantity: {
                    value: 6.7,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-2",
              id: "observation9",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "2093-3": {
                  id: "observation10",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2093-3",
                      },
                    ],
                  },
                  related: undefined,
                  value: 165,
                  valueQuantity: {
                    value: 165,
                  },
                },
                "2571-8": {
                  id: "observation11",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2571-8",
                      },
                    ],
                  },
                  related: undefined,
                  value: 123,
                  valueQuantity: {
                    value: 123,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [
        {
          name: "GAD65 Ab Ser",
          observationCodes: [
            { observationName: "GAD65 Ab Ser", codes: ["56540-8"] },
          ],
          panelResults: [
            {
              diagnosticReportId: "diagnostic-report-2",
              id: "observation12",
              collectionDate: testDate3,
              observations: {
                "56540-8": {
                  code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                  id: "observation13",
                  related: undefined,
                  status: "final",
                  value: 13.2,
                  valueQuantity: {
                    value: 13.2,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: false,
            },
          ],
        },
      ],
    });
  });

  it("returns core/other labs for diagnostic report with panels that do not have related key", () => {
    const result = buildStructuredPanels([
      {
        id: "diagnostic-report-2",
        identifier: [],
        code: { text: "Imported Result" },
        effectiveDateTime: testDate3,
        status: "final",
        result: [
          {
            id: "observation5",
            code: {
              text: "HbA1c",
            },
            status: "final",
          },
          {
            id: "observation9",
            code: {
              text: "Lipids",
            },
            status: "final",
            related: [
              {
                id: "observation10",
                code: { coding: [{ code: "2093-3" }] },
                status: "final",
                valueQuantity: { value: 165 },
              },
              {
                id: "observation11",
                code: { coding: [{ code: "2571-8" }] },
                status: "final",
                valueQuantity: { value: 123 },
              },
            ],
          },
        ],
      },
      {
        id: "diagnostic-report-3",
        identifier: [],
        code: {},
        contained: [
          {
            author: { reference: "Practitioner/some-provider-id" },
            resourceType: "RequestGroup",
          },
        ],
        effectiveDateTime: testDate4,
        status: "final",
        result: [
          {
            id: "observation14",
            code: {
              text: "HbA1c",
            },
            status: "final",
            related: [
              {
                id: "observation15",
                code: { coding: [{ code: "4548-4" }] },
                status: "final",
                valueQuantity: {
                  value: 8.6,
                },
              },
            ],
          },
          {
            id: "observation16",
            code: {
              text: "Lipids",
            },
            status: "final",
            related: [
              {
                id: "observation17",
                code: { coding: [{ code: "2093-3" }] },
                status: "final",
                valueQuantity: { value: 135 },
              },
              {
                id: "observation18",
                code: { coding: [{ code: "2571-8" }] },
                status: "final",
                valueQuantity: { value: 142 },
              },
            ],
          },
          {
            id: "observation19",
            code: {
              text: "GAD65 Ab Ser",
            },
            status: "final",
            related: [
              {
                id: "observation20",
                code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                status: "final",
                valueQuantity: {
                  value: 3.45,
                },
              },
            ],
          },
        ],
      },
    ]);
    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              id: "observation14",
              collectionDate: testDate4,
              diagnosticReportId: "diagnostic-report-3",
              transcribed: true,
              virtaOrdered: true,
              observations: {
                "4548-4": {
                  id: "observation15",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "4548-4",
                      },
                    ],
                  },
                  related: undefined,
                  value: 8.6,
                  valueQuantity: {
                    value: 8.6,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-2",
              id: "observation9",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "2093-3": {
                  id: "observation10",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2093-3",
                      },
                    ],
                  },
                  related: undefined,
                  value: 165,
                  valueQuantity: {
                    value: 165,
                  },
                },
                "2571-8": {
                  id: "observation11",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2571-8",
                      },
                    ],
                  },
                  related: undefined,
                  value: 123,
                  valueQuantity: {
                    value: 123,
                  },
                },
              },
            },
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation16",
              collectionDate: testDate4,
              transcribed: true,
              virtaOrdered: true,
              observations: {
                "2093-3": {
                  id: "observation17",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2093-3",
                      },
                    ],
                  },
                  related: undefined,
                  value: 135,
                  valueQuantity: {
                    value: 135,
                  },
                },
                "2571-8": {
                  id: "observation18",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2571-8",
                      },
                    ],
                  },
                  related: undefined,
                  value: 142,
                  valueQuantity: {
                    value: 142,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [
        {
          name: "GAD65 Ab Ser",
          observationCodes: [
            { observationName: "GAD65 Ab Ser", codes: ["56540-8"] },
          ],
          panelResults: [
            {
              diagnosticReportId: "diagnostic-report-3",
              id: "observation19",
              collectionDate: testDate4,
              observations: {
                "56540-8": {
                  code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                  id: "observation20",
                  related: undefined,
                  status: "final",
                  value: 3.45,
                  valueQuantity: {
                    value: 3.45,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: true,
            },
          ],
        },
      ],
    });
  });

  it("returns object core/other labs separated from each other for multiple diagnostic reports", () => {
    const result = buildStructuredPanels([
      {
        id: "diagnostic-report-2",
        identifier: [{ system: "SalesForce", value: "a_salesforce_id" }],
        code: { text: "Imported Result" },
        effectiveDateTime: testDate3,
        status: "final",
        result: [
          {
            id: "observation5",
            code: {
              text: "HbA1c",
            },
            status: "final",
            related: [
              {
                id: "observation6",
                code: { coding: [{ code: "4548-4" }] },
                status: "final",
                valueQuantity: {
                  value: 6.7,
                },
              },
            ],
          },
          {
            id: "observation9",
            code: {
              text: "Lipids",
            },
            status: "final",
            related: [
              {
                id: "observation10",
                code: { coding: [{ code: "2093-3" }] },
                status: "final",
                valueQuantity: { value: 165 },
              },
              {
                id: "observation11",
                code: { coding: [{ code: "2571-8" }] },
                status: "final",
                valueQuantity: { value: 123 },
              },
            ],
          },
          {
            id: "observation12",
            code: {
              text: "GAD65 Ab Ser",
            },
            status: "final",
            related: [
              {
                id: "observation13",
                code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                status: "final",
                valueQuantity: {
                  value: 13.2,
                },
              },
            ],
          },
        ],
      },
      {
        id: "diagnostic-report-3",
        identifier: [],
        code: {},
        contained: [
          {
            author: { reference: "Practitioner/some-provider-id" },
            resourceType: "RequestGroup",
          },
        ],
        effectiveDateTime: testDate4,
        status: "final",
        result: [
          {
            id: "observation14",
            code: {
              text: "HbA1c",
            },
            status: "final",
            related: [
              {
                id: "observation15",
                code: { coding: [{ code: "4548-4" }] },
                status: "final",
                valueQuantity: {
                  value: 8.6,
                },
              },
            ],
          },
          {
            id: "observation16",
            code: {
              text: "Lipids",
            },
            status: "final",
            related: [
              {
                id: "observation17",
                code: { coding: [{ code: "2093-3" }] },
                status: "final",
                valueQuantity: { value: 135 },
              },
              {
                id: "observation18",
                code: { coding: [{ code: "2571-8" }] },
                status: "final",
                valueQuantity: { value: 142 },
              },
            ],
          },
          {
            id: "observation19",
            code: {
              text: "GAD65 Ab Ser",
            },
            status: "final",
            related: [
              {
                id: "observation20",
                code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                status: "final",
                valueQuantity: {
                  value: 3.45,
                },
              },
            ],
          },
          {
            id: "observation20",
            code: {
              text: "Metabolic Panel",
            },
            status: "final",
            related: [
              {
                id: "observation21",
                code: { coding: [{ code: "1975-2" }] },
                status: "final",
                valueQuantity: { value: 135 },
              },
              {
                id: "observation22",
                code: { coding: [{ code: "17861-6" }] },
                status: "final",
                valueQuantity: { value: 142 },
              },
            ],
          },
        ],
      },
    ]);
    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              id: "observation5",
              collectionDate: testDate3,
              diagnosticReportId: "diagnostic-report-2",
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "4548-4": {
                  id: "observation6",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "4548-4",
                      },
                    ],
                  },
                  related: undefined,
                  value: 6.7,
                  valueQuantity: {
                    value: 6.7,
                  },
                },
              },
            },
            {
              attachments: undefined,
              id: "observation14",
              collectionDate: testDate4,
              diagnosticReportId: "diagnostic-report-3",
              transcribed: true,
              virtaOrdered: true,
              observations: {
                "4548-4": {
                  id: "observation15",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "4548-4",
                      },
                    ],
                  },
                  related: undefined,
                  value: 8.6,
                  valueQuantity: {
                    value: 8.6,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation20",
              collectionDate: testDate4,
              transcribed: true,
              virtaOrdered: true,
              observations: {
                "1975-2": {
                  id: "observation21",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "1975-2",
                      },
                    ],
                  },
                  related: undefined,
                  value: 135,
                  valueQuantity: {
                    value: 135,
                  },
                },
                "17861-6": {
                  id: "observation22",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "17861-6",
                      },
                    ],
                  },
                  related: undefined,
                  value: 142,
                  valueQuantity: {
                    value: 142,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-2",
              id: "observation9",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "2093-3": {
                  id: "observation10",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2093-3",
                      },
                    ],
                  },
                  related: undefined,
                  value: 165,
                  valueQuantity: {
                    value: 165,
                  },
                },
                "2571-8": {
                  id: "observation11",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2571-8",
                      },
                    ],
                  },
                  related: undefined,
                  value: 123,
                  valueQuantity: {
                    value: 123,
                  },
                },
              },
            },
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation16",
              collectionDate: testDate4,
              transcribed: true,
              virtaOrdered: true,
              observations: {
                "2093-3": {
                  id: "observation17",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2093-3",
                      },
                    ],
                  },
                  related: undefined,
                  value: 135,
                  valueQuantity: {
                    value: 135,
                  },
                },
                "2571-8": {
                  id: "observation18",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2571-8",
                      },
                    ],
                  },
                  related: undefined,
                  value: 142,
                  valueQuantity: {
                    value: 142,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [
        {
          name: "GAD65 Ab Ser",
          observationCodes: [
            { observationName: "GAD65 Ab Ser", codes: ["56540-8"] },
          ],
          panelResults: [
            {
              diagnosticReportId: "diagnostic-report-2",
              id: "observation12",
              collectionDate: testDate3,
              observations: {
                "56540-8": {
                  code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                  id: "observation13",
                  related: undefined,
                  status: "final",
                  value: 13.2,
                  valueQuantity: {
                    value: 13.2,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: false,
            },
            {
              diagnosticReportId: "diagnostic-report-3",
              id: "observation19",
              collectionDate: testDate4,
              observations: {
                "56540-8": {
                  code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                  id: "observation20",
                  related: undefined,
                  status: "final",
                  value: 3.45,
                  valueQuantity: {
                    value: 3.45,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: true,
            },
          ],
        },
      ],
    });
  });

  it("returns object with observations mapped to both lipid/lipid NMR in correct panelResult", () => {
    const result = buildStructuredPanels([
      {
        id: "diagnostic-report-5",
        identifier: [],
        code: {},
        contained: [
          {
            author: { reference: "Practitioner/some-provider-id" },
            resourceType: "RequestGroup",
          },
        ],
        effectiveDateTime: testDate3,
        status: "final",
        result: [
          {
            id: "observation30",
            code: {
              text: "Lipids",
            },
            status: "final",
            related: [
              {
                id: "observation31",
                code: { coding: [{ code: "13457-7" }] }, // could also belong to NMR panel
                status: "final",
                valueQuantity: { value: 165 },
              },
              {
                id: "observation32",
                code: { coding: [{ code: "46986-6" }] },
                status: "final",
                valueQuantity: { value: 123 },
              },
            ],
          },
          {
            id: "observation33",
            code: {
              text: "GAD65 Ab Ser",
            },
            status: "final",
            related: [
              {
                id: "observation34",
                code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                status: "final",
                valueQuantity: {
                  value: 13.2,
                },
              },
            ],
          },
        ],
      },
      {
        id: "diagnostic-report-6",
        identifier: [],
        code: {},
        effectiveDateTime: testDate4,
        status: "final",
        result: [
          {
            id: "observation35",
            code: {
              text: "Lipid NMR Panel",
            },
            status: "final",
            related: [
              {
                id: "observation36",
                code: { coding: [{ code: "2085-9" }] }, // could also belong to Lipid panel
                status: "final",
                valueQuantity: { value: 165 },
              },
              {
                id: "observation37",
                code: { coding: [{ code: "35505-7" }] },
                status: "final",
                valueQuantity: { value: 123 },
              },
            ],
          },
        ],
      },
    ]);
    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-5",
              id: "observation30",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: true,
              observations: {
                "13457-7": {
                  id: "observation31",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "13457-7",
                      },
                    ],
                  },
                  related: undefined,
                  value: 165,
                  valueQuantity: {
                    value: 165,
                  },
                },
                "46986-6": {
                  id: "observation32",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "46986-6",
                      },
                    ],
                  },
                  related: undefined,
                  value: 123,
                  valueQuantity: {
                    value: 123,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-6",
              id: "observation35",
              collectionDate: testDate4,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "2085-9": {
                  id: "observation36",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2085-9",
                      },
                    ],
                  },
                  related: undefined,
                  value: 165,
                  valueQuantity: {
                    value: 165,
                  },
                },
                "35505-7": {
                  id: "observation37",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "35505-7",
                      },
                    ],
                  },
                  related: undefined,
                  value: 123,
                  valueQuantity: {
                    value: 123,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [
        {
          name: "GAD65 Ab Ser",
          observationCodes: [
            { observationName: "GAD65 Ab Ser", codes: ["56540-8"] },
          ],
          panelResults: [
            {
              diagnosticReportId: "diagnostic-report-5",
              id: "observation33",
              collectionDate: testDate3,
              observations: {
                "56540-8": {
                  code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                  id: "observation34",
                  related: undefined,
                  status: "final",
                  value: 13.2,
                  valueQuantity: {
                    value: 13.2,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: true,
            },
          ],
        },
      ],
    });
  });

  it("returns panelResults with observations that are not included in mapping", () => {
    const result = buildStructuredPanels([
      {
        id: "diagnostic-report-3",
        identifier: [],
        code: {},
        effectiveDateTime: testDate3,
        status: "final",
        result: [
          {
            id: "observation14",
            code: {
              text: "HbA1c",
            },
            status: "final",
            related: [
              {
                id: "observation15",
                code: { coding: [{ code: "4548-4" }] },
                status: "final",
                valueQuantity: {
                  value: 8.6,
                },
              },
            ],
          },
          {
            id: "observation20",
            code: {
              text: "Metabolic Panel",
            },
            status: "final",
            related: [
              {
                id: "observation21",
                code: { coding: [{ code: "1975-2" }] },
                status: "final",
                valueQuantity: { value: 135 },
              },
              {
                id: "observation22",
                code: { coding: [{ code: "17861-6" }] },
                status: "final",
                valueQuantity: { value: 142 },
              },
            ],
          },
          {
            id: "observation33",
            code: {
              text: "GAD65 Ab Ser",
            },
            status: "final",
            related: [
              {
                id: "observation34",
                code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                status: "final",
                valueQuantity: {
                  value: 13.2,
                },
              },
            ],
          },
        ],
      },
      {
        id: "diagnostic-report-6",
        identifier: [],
        code: {},
        effectiveDateTime: testDate4,
        status: "final",
        result: [
          {
            id: "observation35",
            code: {
              text: "Lipid NMR Panel",
            },
            status: "final",
            related: [
              {
                id: "observation36",
                code: { coding: [{ code: "43729-3" }] }, // Not in mapping
                status: "final",
                valueQuantity: { value: 165 },
              },
              {
                id: "observation37",
                code: { coding: [{ code: "35505-7" }] },
                status: "final",
                valueQuantity: { value: 123 },
              },
              {
                id: "observation38",
                code: { coding: [{ code: "2085-9" }] },
                status: "final",
                valueQuantity: { value: 55.6 },
              },
            ],
          },
        ],
      },
    ]);
    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation14",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "4548-4": {
                  id: "observation15",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "4548-4",
                      },
                    ],
                  },
                  related: undefined,
                  value: 8.6,
                  valueQuantity: {
                    value: 8.6,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation20",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "17861-6": {
                  id: "observation22",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "17861-6",
                      },
                    ],
                  },
                  related: undefined,
                  value: 142,
                  valueQuantity: {
                    value: 142,
                  },
                },
                "1975-2": {
                  id: "observation21",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "1975-2",
                      },
                    ],
                  },
                  related: undefined,
                  value: 135,
                  valueQuantity: {
                    value: 135,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-6",
              id: "observation35",
              collectionDate: testDate4,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "43729-3": {
                  id: "observation36",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "43729-3",
                      },
                    ],
                  },
                  related: undefined,
                  value: 165,
                  valueQuantity: {
                    value: 165,
                  },
                },
                "35505-7": {
                  id: "observation37",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "35505-7",
                      },
                    ],
                  },
                  related: undefined,
                  value: 123,
                  valueQuantity: {
                    value: 123,
                  },
                },
                "2085-9": {
                  id: "observation38",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2085-9",
                      },
                    ],
                  },
                  related: undefined,
                  value: 55.6,
                  valueQuantity: {
                    value: 55.6,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [
        {
          name: "GAD65 Ab Ser",
          observationCodes: [
            { observationName: "GAD65 Ab Ser", codes: ["56540-8"] },
          ],
          panelResults: [
            {
              diagnosticReportId: "diagnostic-report-3",
              id: "observation33",
              collectionDate: testDate3,
              observations: {
                "56540-8": {
                  code: { coding: [{ code: "56540-8" }], text: "GAD65 Ab Ser" },
                  id: "observation34",
                  related: undefined,
                  status: "final",
                  value: 13.2,
                  valueQuantity: {
                    value: 13.2,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: false,
            },
          ],
        },
      ],
    });
  });

  it("parses results with unknown codes successfully", () => {
    const result = buildStructuredPanels(labResultsWithoutCode);
    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-7",
              id: "observation-11",
              collectionDate: "2020-06-01T00:00:00.000Z",
              observations: {
                "12311755": {
                  code: {
                    coding: [
                      {
                        code: "12311755",
                        display: "Average Blood Glucose (Calc)",
                        system: "urn:oid:1.2.840.114350.1.13.324.2.7.2.768282",
                      },
                    ],
                    text: "Average Blood Glucose (Calc)",
                  },
                  effectiveDateTime: testDate1,
                  id: "observation-13",
                  identifier: [],
                  related: undefined,
                  resourceType: "Observation",
                  status: "final",
                  subject: {
                    display: "Test Patient",
                    reference: "Patient/test-patient",
                  },
                  unit: "mg/dL",
                  value: 120,
                  valueQuantity: {
                    unit: "mg/dL",
                    value: 120,
                  },
                },
                "4548-4": {
                  code: {
                    coding: [
                      {
                        code: "4548-4",
                        display: "Hemoglobin A1C",
                        system: "http://loinc.org",
                      },
                    ],
                    text: "Hemoglobin A1C",
                  },
                  effectiveDateTime: testDate1,
                  id: "observation-12",
                  identifier: [],
                  referenceRange: [
                    {
                      high: {
                        value: 5.7,
                      },
                      text: "< 5.7",
                    },
                  ],
                  related: undefined,
                  resourceType: "Observation",
                  status: "final",
                  subject: {
                    display: "Test Patient",
                    reference: "Patient/test-patient",
                  },
                  unit: "%",
                  value: 5.8,
                  valueQuantity: {
                    unit: "%",
                    value: 5.8,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: false,
            },
          ],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-8",
              id: "observation-15",
              collectionDate: testDate2,
              observations: {
                "13457-7": {
                  code: {
                    coding: [
                      {
                        code: "13457-7",
                        display: "LDL Calculated",
                        system: "http://loinc.org",
                      },
                    ],
                    text: "LDL Calculated",
                  },
                  effectiveDateTime: testDate2,
                  id: "observation-17",
                  identifier: [],
                  referenceRange: [
                    {
                      high: {
                        unit: "mg/dL",
                        value: 130,
                      },
                      low: {
                        unit: "mg/dL",
                        value: 0,
                      },
                    },
                  ],
                  related: undefined,
                  resourceType: "Observation",
                  status: "final",
                  subject: {
                    display: "Test Patient",
                    reference: "Patient/test-patient",
                  },
                  unit: "mg/dL",
                  value: 102,
                  valueQuantity: {
                    unit: "mg/dL",
                    value: 102,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: false,
            },
          ],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [
        {
          name: "Comprehensive Metabolic Panel (CMP)",
          observationCodes: [
            { codes: ["12311695"], observationName: "Glucose" },
          ],
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-7",
              id: "observation-8",
              collectionDate: testDate1,
              observations: {
                "12311695": {
                  code: {
                    coding: [
                      {
                        code: "12311695",
                        display: "Glucose",
                        system: "urn:oid:1.2.840.114350.1.13.324.2.7.2.768282",
                      },
                    ],
                    text: "Glucose",
                  },
                  effectiveDateTime: testDate1,
                  id: "observation-9",
                  identifier: [],
                  referenceRange: [
                    {
                      high: {
                        unit: "mg/dL",
                        value: 110,
                      },
                      low: {
                        unit: "mg/dL",
                        value: 70,
                      },
                      text: "70 - 110",
                    },
                  ],
                  related: undefined,
                  resourceType: "Observation",
                  status: "final",
                  subject: {
                    display: "Test Patient",
                    reference: "Patient/test-patient",
                  },
                  unit: "mg/dL",
                  value: 117,
                  valueQuantity: {
                    unit: "mg/dL",
                    value: 117,
                  },
                },
              },
              transcribed: true,
              virtaOrdered: false,
            },
          ],
        },
      ],
    });
  });

  it("will display a core panel observation with another panel observation \
  that is a subset of that core panel that exist in the same diagnostic report", () => {
    const result = buildStructuredPanels([
      {
        id: "diagnostic-report-3",
        identifier: [{ system: "IUH Trial" }],
        code: {},
        effectiveDateTime: testDate3,
        status: "final",
        result: [
          {
            id: "observation20",
            code: {
              text: "Metabolic Panel",
            },
            status: "final",
            related: [
              {
                id: "observation21",
                code: { coding: [{ code: "1975-2" }] },
                status: "final",
                valueQuantity: { value: 135 },
              },
              {
                id: "observation22",
                code: { coding: [{ code: "17861-6" }] },
                status: "final",
                valueQuantity: { value: 142 },
              },
            ],
          },
          egfrPanelObservation,
        ],
      },
    ]);
    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation20",
              collectionDate: testDate3,
              transcribed: false,
              virtaOrdered: true,
              observations: {
                "17861-6": {
                  id: "observation22",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "17861-6",
                      },
                    ],
                  },
                  related: undefined,
                  value: 142,
                  valueQuantity: {
                    value: 142,
                  },
                },
                "1975-2": {
                  id: "observation21",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "1975-2",
                      },
                    ],
                  },
                  related: undefined,
                  value: 135,
                  valueQuantity: {
                    value: 135,
                  },
                },
              },
            },
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation-1001",
              collectionDate: testDate3,
              transcribed: false,
              virtaOrdered: true,
              observations: {
                "62238-1": {
                  id: "observation-1002",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "62238-1",
                        display:
                          "eGFR derived (not differentiated based on race, and hand calculated)",
                        system: "http://loinc.org",
                      },
                    ],
                    text: "eGFR derived (not differentiated based on race, and hand calculated)",
                  },
                  effectiveDateTime: testDate3,
                  related: undefined,
                  value: 20.0,
                  unit: "ml/min/1.73m2",
                  valueQuantity: {
                    unit: "ml/min/1.73m2",
                    value: 20.0,
                  },
                  resourceType: "Observation",
                  subject: {
                    reference: "Patient/test-patient",
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [],
    });
  });

  it("will parse observation that belongs to both a core and other panel into the correct sections", () => {
    const result = buildStructuredPanels([
      {
        id: "diagnostic-report-3",
        identifier: [],
        code: {},
        effectiveDateTime: testDate3,
        status: "final",
        result: [
          {
            id: "observation9",
            code: {
              text: "Lipids",
            },
            status: "final",
            related: [
              {
                id: "observation10",
                code: { coding: [{ code: "1884-6" }] },
                status: "final",
                valueQuantity: { value: 1.91 },
              },
              {
                id: "observation11",
                code: { coding: [{ code: "2571-8" }] },
                status: "final",
                valueQuantity: { value: 204 },
              },
            ],
          },
          {
            id: "observation-2000",
            code: {
              text: "Clinical Trial",
            },
            status: "final",
            related: [
              {
                id: "observation-2001",
                code: {
                  coding: [{ code: "1884-6" }],
                  text: "Apolipoprotein B",
                },
                status: "final",
                valueQuantity: { value: 1.4, unit: "mg/dL" },
              },
              {
                id: "observation-2002",
                code: { coding: [{ code: "789-8" }], text: "RBC" },
                status: "final",
                valueQuantity: { value: 2.9, unit: "10*6/uL" },
              },
            ],
          },
        ],
      },
    ]);

    expect(result).toEqual({
      corePanels: [
        {
          name: "Hemoglobin A1c",
          observationCodes: hbA1cObservationCodes,
          panelResults: [],
        },
        {
          name: "Metabolic Panel",
          observationCodes: metabolicPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Lipids",
          observationCodes: lipidPanelObservationCodes,
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation9",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "1884-6": {
                  id: "observation10",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "1884-6",
                      },
                    ],
                  },
                  related: undefined,
                  value: 1.91,
                  valueQuantity: {
                    value: 1.91,
                  },
                },
                "2571-8": {
                  id: "observation11",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "2571-8",
                      },
                    ],
                  },
                  related: undefined,
                  value: 204,
                  valueQuantity: {
                    value: 204,
                  },
                },
              },
            },
          ],
        },
        {
          name: "Lipid NMR",
          observationCodes: lipidNmrPanelObservationCodes,
          panelResults: [],
        },
        {
          name: "Albumin/Creatinine Ratio, Urine",
          observationCodes: albuminCreatininePanelObservationCodes,
          panelResults: [],
        },
        {
          name: "C-Peptide, Serum",
          observationCodes: cPeptidePanelObservationCodes,
          panelResults: [],
        },
      ],
      otherPanels: [
        {
          name: "Clinical Trial",
          observationCodes: [
            { codes: ["1884-6"], observationName: "Apolipoprotein B" },
            { codes: ["789-8"], observationName: "RBC" },
          ],
          panelResults: [
            {
              attachments: undefined,
              diagnosticReportId: "diagnostic-report-3",
              id: "observation-2000",
              collectionDate: testDate3,
              transcribed: true,
              virtaOrdered: false,
              observations: {
                "1884-6": {
                  id: "observation-2001",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "1884-6",
                      },
                    ],
                    text: "Apolipoprotein B",
                  },
                  related: undefined,
                  value: 1.4,
                  unit: "mg/dL",
                  valueQuantity: {
                    value: 1.4,
                    unit: "mg/dL",
                  },
                },
                "789-8": {
                  id: "observation-2002",
                  status: "final",
                  code: {
                    coding: [
                      {
                        code: "789-8",
                      },
                    ],
                    text: "RBC",
                  },
                  related: undefined,
                  value: 2.9,
                  unit: "10*6/uL",
                  valueQuantity: {
                    value: 2.9,
                    unit: "10*6/uL",
                  },
                },
              },
            },
          ],
        },
      ],
    });
  });
});

const testDate1 = new Date("2020-06-01").toISOString();
const testDate2 = new Date("2020-05-01").toISOString();
const testDate3 = new Date("2020-04-01").toISOString();
const testDate4 = new Date("2020-03-01").toISOString();

const labResultsWithoutCode = [
  {
    code: { text: "Imported Result" },
    id: "diagnostic-report-7",
    identifier: [],
    effectiveDateTime: testDate1,
    performer: [],
    resourceType: "DiagnosticReport",
    result: [
      {
        code: {
          coding: [
            {
              code: "162215",
              display: "162215",
              system: "urn:oid:1.2.840.114350.1.13.324.2.7.2.696580",
            },
          ],
          text: "Comprehensive Metabolic Panel (CMP)",
        },
        effectiveDateTime: testDate1,
        id: "observation-8",
        identifier: [],
        related: [
          {
            code: {
              coding: [
                {
                  code: "12311695",
                  display: "Glucose",
                  system: "urn:oid:1.2.840.114350.1.13.324.2.7.2.768282",
                },
              ],
              text: "Glucose",
            },
            effectiveDateTime: testDate1,
            id: "observation-9",
            identifier: [],
            referenceRange: [
              {
                high: { unit: "mg/dL", value: 110.0 },
                low: { unit: "mg/dL", value: 70.0 },
                text: "70 - 110",
              },
            ],
            resourceType: "Observation",
            status: "final",
            subject: {
              display: "Test Patient",
              reference: "Patient/test-patient",
            },
            valueQuantity: { unit: "mg/dL", value: 117.0 },
          },
          {
            code: { text: "unknown" },
            effectiveDateTime: testDate1,
            id: "observation-10",
            identifier: [],
            resourceType: "Observation",
            status: "final",
            subject: {
              display: "Test Patient",
              reference: "Patient/test-patient",
            },
            valueCodeableConcept: {
              coding: [
                { code: "16", system: "urn:oid:1.2.840.114350.1.72.1.5007" },
              ],
            },
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          display: "Test Patient",
          reference: "Patient/test-patient",
        },
      },
      {
        code: {
          coding: [
            {
              code: "162287",
              display: "162287",
              system: "urn:oid:1.2.840.114350.1.13.324.2.7.2.696580",
            },
          ],
          text: "Hemoglobin A1C",
        },
        effectiveDateTime: testDate1,
        id: "observation-11",
        identifier: [],
        related: [
          {
            code: {
              coding: [
                {
                  code: "4548-4",
                  display: "Hemoglobin A1C",
                  system: "http://loinc.org",
                },
              ],
              text: "Hemoglobin A1C",
            },
            effectiveDateTime: testDate1,
            id: "observation-12",
            identifier: [],
            referenceRange: [{ high: { value: 5.7 }, text: "< 5.7" }],
            resourceType: "Observation",
            status: "final",
            subject: {
              display: "Test Patient",
              reference: "Patient/test-patient",
            },
            valueQuantity: { unit: "%", value: 5.8 },
          },
          {
            code: {
              coding: [
                {
                  code: "12311755",
                  display: "Average Blood Glucose (Calc)",
                  system: "urn:oid:1.2.840.114350.1.13.324.2.7.2.768282",
                },
              ],
              text: "Average Blood Glucose (Calc)",
            },
            effectiveDateTime: testDate1,
            id: "observation-13",
            identifier: [],
            resourceType: "Observation",
            status: "final",
            subject: {
              display: "Test Patient",
              reference: "Patient/test-patient",
            },
            valueQuantity: { unit: "mg/dL", value: 120.0 },
          },
          {
            code: { text: "unknown" },
            effectiveDateTime: testDate1,
            id: "observation-14",
            identifier: [],
            resourceType: "Observation",
            status: "final",
            subject: {
              display: "Test Patient",
              reference: "Patient/test-patient",
            },
            valueCodeableConcept: {
              coding: [
                { code: "16", system: "urn:oid:1.2.840.114350.1.72.1.5007" },
              ],
            },
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          display: "Test Patient",
          reference: "Patient/test-patient",
        },
      },
    ],
    status: "final",
    subject: {
      reference: "Patient/test-patient",
    },
  },
  {
    code: { text: "Imported Result" },
    id: "diagnostic-report-8",
    identifier: [],
    effectiveDateTime: testDate2,
    resourceType: "DiagnosticReport",
    result: [
      {
        code: {
          coding: [
            {
              code: "162217",
              display: "162217",
              system: "urn:oid:1.2.840.114350.1.13.324.2.7.2.696580",
            },
          ],
          text: "Lipid Panel w/calc LDL",
        },
        effectiveDateTime: testDate2,
        id: "observation-15",
        identifier: [],
        related: [
          {
            code: {
              coding: [
                {
                  code: "13457-7",
                  display: "LDL Calculated",
                  system: "http://loinc.org",
                },
              ],
              text: "LDL Calculated",
            },
            effectiveDateTime: testDate2,
            id: "observation-17",
            identifier: [],
            referenceRange: [
              {
                high: { unit: "mg/dL", value: 130.0 },
                low: { unit: "mg/dL", value: 0.0 },
              },
            ],
            resourceType: "Observation",
            status: "final",
            subject: {
              display: "Test Patient",
              reference: "Patient/test-patient",
            },
            valueQuantity: { unit: "mg/dL", value: 102.0 },
          },
          {
            code: { text: "unknown" },
            effectiveDateTime: testDate2,
            id: "observation-16",
            identifier: [],
            resourceType: "Observation",
            status: "final",
            subject: {
              display: "Test Patient",
              reference: "Patient/test-patient",
            },
            valueCodeableConcept: {
              coding: [
                { code: "16", system: "urn:oid:1.2.840.114350.1.72.1.5007" },
              ],
            },
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          display: "Test Patient",
          reference: "Patient/test-patient",
        },
      },
    ],
    status: "final",
    subject: {
      reference: "Patient/test-patient",
    },
  },
];

const egfrPanelObservation = {
  code: {
    coding: [
      {
        code: "82565",
        display: "Glomerular Filtration Rate, Estimated (eGFR)",
        system: "http://www.ama-assn.org/go/cpt",
      },
    ],
    text: "Glomerular Filtration Rate, Estimated (eGFR)",
  },
  effectiveDateTime: testDate3,
  id: "observation-1001",
  related: [
    {
      code: {
        coding: [
          {
            code: "62238-1",
            display:
              "eGFR derived (not differentiated based on race, and hand calculated)",
            system: "http://loinc.org",
          },
        ],
        text: "eGFR derived (not differentiated based on race, and hand calculated)",
      },
      effectiveDateTime: testDate3,
      id: "observation-1002",
      resourceType: "Observation",
      status: "final",
      subject: {
        reference: "Patient/test-patient",
      },
      valueQuantity: {
        unit: "ml/min/1.73m2",
        value: 20.0,
      },
    },
  ],
  resourceType: "Observation",
  status: "final",
  subject: {
    reference: "Patient/test-patient",
  },
};
