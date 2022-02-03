import {
  antiGadQuestionnaire,
  cmpQuestionnaire,
  hbA1cQuestionnaire,
  lipidQuestionnaire,
  microalbuminCreatinineQuestionnaire,
  nmrLipoprofileQuestionnaire,
} from "../questionnaires";
import {
  validateDiagnosticReport,
  transformFormToDiagnosticReport,
  mapDiagnosticReportToForm,
} from "./transformDiagnosticReport";

const testDate = new Date(2020, 1, 1);
const testVirtaId = "a virta id";

describe("transformFormToDiagnosticReport", () => {
  it("given a DiagnosticReport with a single simple observation creates the report", () => {
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [simpleHbA1cQuestionnaire],
      observationResponses: [simpleHbA1cResponse],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      issued: testDate,
      effective: testDate,
      result: [
        {
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "4548-4",
                display: "Hgb A1c MFr Bld",
                system: "http://loinc.org",
              },
            ],
            text: "Hgb A1c MFr Bld",
          },
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/a virta id",
          },
          valueQuantity: {
            unit: "%",
            value: 8.1,
          },
          issued: testDate,
          effectiveDateTime: testDate,
        },
      ],
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });

  it("given a DiagnosticReport with a single complex observation creates the report", () => {
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [microalbuminCreatinineQuestionnaire],
      observationResponses: [microalbuminCreatinineResponse],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      issued: testDate,
      effective: testDate,
      result: [
        {
          status: "final",
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "34535-5",
                display: "Albumin/Creatinine Ratio, Urine",
                system: "http://loinc.org",
              },
            ],
            text: "Albumin/Creatinine Ratio, Urine",
          },
          resourceType: "Observation",
          subject: {
            reference: "Patient/a virta id",
          },
          issued: testDate,
          effectiveDateTime: testDate,
          hasMember: [
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "14957-5",
                    display: "Albumin, Urine",
                    system: "http://loinc.org",
                  },
                ],
                text: "Albumin, Urine",
              },
              resourceType: "Observation",
              subject: {
                reference: "Patient/a virta id",
              },
              valueQuantity: {
                value: 53.4,
                unit: "mg/L",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "2161-8",
                    display: "Creatinine, Urine",
                    system: "http://loinc.org",
                  },
                ],
                text: "Creatinine, Urine",
              },
              resourceType: "Observation",
              subject: {
                reference: "Patient/a virta id",
              },
              valueQuantity: {
                value: 284.8,
                unit: "mg/dL",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "14959-1",
                    display: "Alb/Creat ratio",
                    system: "http://loinc.org",
                  },
                ],
                text: "Alb/Creat ratio",
              },
              resourceType: "Observation",
              subject: {
                reference: "Patient/a virta id",
              },
              valueQuantity: {
                value: 0.1875,
                unit: "mg/g{creat}",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
          ],
        },
      ],
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });

  it("creates a DiagnosticReport from a complex observation with some unanswered fields", () => {
    // This represents the scenario where a user enters something in a field
    // and then backs out and deletes the value
    const responseWithUnansweredFields = {
      status: "in-progress",
      item: [
        {
          linkId: "/34535-5",
          item: [
            {
              linkId: "/14957-5",
              answer: [
                {
                  valueDecimal: undefined,
                },
              ],
            },
            {
              linkId: "/2161-8",
              answer: [
                {
                  valueDecimal: undefined,
                },
              ],
            },
            {
              linkId: "/14959-1",
              answer: [
                {
                  valueDecimal: 0.1875,
                },
              ],
            },
          ],
        },
      ],
    };
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [microalbuminCreatinineQuestionnaire],
      observationResponses: [responseWithUnansweredFields],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      issued: testDate,
      effective: testDate,
      result: [
        {
          status: "final",
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "34535-5",
                display: "Albumin/Creatinine Ratio, Urine",
                system: "http://loinc.org",
              },
            ],
            text: "Albumin/Creatinine Ratio, Urine",
          },
          resourceType: "Observation",
          subject: {
            reference: "Patient/a virta id",
          },
          issued: testDate,
          effectiveDateTime: testDate,
          hasMember: [
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "14959-1",
                    display: "Alb/Creat ratio",
                    system: "http://loinc.org",
                  },
                ],
                text: "Alb/Creat ratio",
              },
              resourceType: "Observation",
              subject: {
                reference: "Patient/a virta id",
              },
              valueQuantity: {
                value: 0.1875,
                unit: "mg/g{creat}",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
          ],
        },
      ],
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });

  it("does not generate a report if there are no responses to any of the selected panels", () => {
    const emptyHbA1cResponse = {
      status: "in-progress",
      item: [
        {
          linkId: "/4548-4",
          item: [],
        },
      ],
    };

    const emptyMicroalbuminCreatinineResponse = {
      status: "in-progress",
      item: [
        {
          linkId: "/34535-5",
          item: [],
        },
      ],
    };
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [
        hbA1cQuestionnaire,
        microalbuminCreatinineQuestionnaire,
      ],
      observationResponses: [
        emptyHbA1cResponse,
        emptyMicroalbuminCreatinineResponse,
      ],
    });
    expect(diagnosticReport).toBeNull();
  });

  it("generates a report even if there is a selected panel with no responses", () => {
    const emptyHbA1cResponse = {
      status: "in-progress",
      item: [
        {
          linkId: "/4548-4",
          item: [],
        },
      ],
    };

    const partialMicroalbuminCreatinineResponse = {
      status: "in-progress",
      item: [
        {
          linkId: "/34535-5",
          item: [
            {
              linkId: "/14957-5",
              answer: [
                {
                  valueDecimal: 53.4,
                },
              ],
            },
          ],
        },
      ],
    };
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [
        hbA1cQuestionnaire,
        microalbuminCreatinineQuestionnaire,
      ],
      observationResponses: [
        emptyHbA1cResponse,
        partialMicroalbuminCreatinineResponse,
      ],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      issued: testDate,
      effective: testDate,
      result: [
        {
          status: "final",
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "34535-5",
                display: "Albumin/Creatinine Ratio, Urine",
                system: "http://loinc.org",
              },
            ],
            text: "Albumin/Creatinine Ratio, Urine",
          },
          resourceType: "Observation",
          subject: {
            reference: "Patient/a virta id",
          },
          issued: testDate,
          effectiveDateTime: testDate,
          hasMember: [
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "14957-5",
                    display: "Albumin, Urine",
                    system: "http://loinc.org",
                  },
                ],
                text: "Albumin, Urine",
              },
              resourceType: "Observation",
              subject: {
                reference: "Patient/a virta id",
              },
              valueQuantity: {
                value: 53.4,
                unit: "mg/L",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
          ],
        },
      ],
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });

  it("given a DiagnosticReport with multiple observations creates the report", () => {
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [
        simpleHbA1cQuestionnaire,
        microalbuminCreatinineQuestionnaire,
      ],
      observationResponses: [
        simpleHbA1cResponse,
        microalbuminCreatinineResponse,
      ],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      issued: testDate,
      effective: testDate,
      result: [
        {
          status: "final",
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "4548-4",
                display: "Hgb A1c MFr Bld",
                system: "http://loinc.org",
              },
            ],
            text: "Hgb A1c MFr Bld",
          },
          resourceType: "Observation",
          subject: {
            reference: `Patient/${testVirtaId}`,
          },
          valueQuantity: {
            unit: "%",
            value: 8.1,
          },
          issued: testDate,
          effectiveDateTime: testDate,
        },
        {
          status: "final",
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "34535-5",
                display: "Albumin/Creatinine Ratio, Urine",
                system: "http://loinc.org",
              },
            ],
            text: "Albumin/Creatinine Ratio, Urine",
          },
          resourceType: "Observation",
          subject: {
            reference: `Patient/${testVirtaId}`,
          },
          issued: testDate,
          effectiveDateTime: testDate,
          hasMember: [
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "14957-5",
                    display: "Albumin, Urine",
                    system: "http://loinc.org",
                  },
                ],
                text: "Albumin, Urine",
              },
              resourceType: "Observation",
              subject: {
                reference: `Patient/${testVirtaId}`,
              },
              valueQuantity: {
                value: 53.4,
                unit: "mg/L",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "2161-8",
                    display: "Creatinine, Urine",
                    system: "http://loinc.org",
                  },
                ],
                text: "Creatinine, Urine",
              },
              resourceType: "Observation",
              subject: {
                reference: `Patient/${testVirtaId}`,
              },
              valueQuantity: {
                value: 284.8,
                unit: "mg/dL",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
            {
              status: "final",
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "14959-1",
                    display: "Alb/Creat ratio",
                    system: "http://loinc.org",
                  },
                ],
                text: "Alb/Creat ratio",
              },
              resourceType: "Observation",
              subject: {
                reference: `Patient/${testVirtaId}`,
              },
              valueQuantity: {
                value: 0.1875,
                unit: "mg/g{creat}",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
          ],
        },
      ],
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });

  describe("with missing values", () => {
    it("returns missing panel values for a single panel", () => {
      const partialMicroalbuminCreatinineResponse = {
        status: "in-progress",
        item: [
          {
            linkId: "/34535-5",
            item: [
              {
                linkId: "/14957-5",
                answer: [
                  {
                    valueDecimal: 53.4,
                  },
                ],
              },
            ],
          },
        ],
      };
      const { unansweredQuestions } = transformFormToDiagnosticReport({
        collectionDate: testDate,
        virtaId: testVirtaId,
        observationQuestionnaires: [microalbuminCreatinineQuestionnaire],
        observationResponses: [partialMicroalbuminCreatinineResponse],
      });
      expect(unansweredQuestions?.map((question) => question.text)).toEqual([
        "Creatinine, Urine",
        "Alb/Creat ratio",
      ]);
    });

    it("returns missing values across multiple panels", () => {
      const partialCmpResponse = {
        status: "in-progress",
        item: [
          {
            linkId: "/24323-8",
            item: [{ linkId: "/2951-2", answer: [{ valueDecimal: 12.3 }] }],
          },
        ],
      };

      const partialMicroalbuminCreatinineResponse = {
        status: "in-progress",
        item: [
          {
            linkId: "/34535-5",
            item: [
              {
                linkId: "/14957-5",
                answer: [
                  {
                    valueDecimal: 53.4,
                  },
                ],
              },
            ],
          },
        ],
      };
      const { unansweredQuestions } = transformFormToDiagnosticReport({
        collectionDate: testDate,
        virtaId: testVirtaId,
        observationQuestionnaires: [
          cmpQuestionnaire,
          microalbuminCreatinineQuestionnaire,
        ],
        observationResponses: [
          partialCmpResponse,
          partialMicroalbuminCreatinineResponse,
        ],
      });

      expect(unansweredQuestions?.map((question) => question.text)).toEqual([
        "Glucose",
        "BUN",
        "Creatinine",
        "BUN/Creatinine",
        "eGFR If Non Africn Am",
        "eGFR If African Am",
        "Potassium",
        "Chloride",
        "Carbon Dioxide, Total",
        "Calcium",
        "Protein, Total",
        "Albumin",
        "Globulin, Total",
        "A/G ratio",
        "Bilirubin, Total",
        "Alkaline Phosphatase",
        "ALT (SGPT)",
        "AST (SGOT)",
        "Creatinine, Urine",
        "Alb/Creat ratio",
      ]);
    });

    it("builds a report despite some missing values", () => {
      const partialCmpResponse = {
        status: "in-progress",
        item: [
          {
            linkId: "/24323-8",
            item: [{ linkId: "/2951-2", answer: [{ valueDecimal: 12.3 }] }],
          },
        ],
      };

      const partialMicroalbuminCreatinineResponse = {
        status: "in-progress",
        item: [
          {
            linkId: "/34535-5",
            item: [
              {
                linkId: "/14957-5",
                answer: [
                  {
                    valueDecimal: 53.4,
                  },
                ],
              },
            ],
          },
        ],
      };
      const { diagnosticReport } = transformFormToDiagnosticReport({
        collectionDate: testDate,
        virtaId: testVirtaId,
        observationQuestionnaires: [
          cmpQuestionnaire,
          microalbuminCreatinineQuestionnaire,
        ],
        observationResponses: [
          partialCmpResponse,
          partialMicroalbuminCreatinineResponse,
        ],
      });

      expect(diagnosticReport).toEqual({
        category: {
          coding: [
            {
              code: "LAB",
              display: "Laboratory",
              system: "http://hl7.org/fhir/v2/0074",
            },
          ],
        },
        code: { coding: [] },
        issued: testDate,
        effective: testDate,
        result: [
          {
            status: "final",
            category: [
              {
                coding: [
                  {
                    code: "LAB",
                    display: "Laboratory",
                    system: "http://hl7.org/fhir/v2/0074",
                  },
                ],
              },
            ],
            code: {
              coding: [
                {
                  code: "24323-8",
                  display: "Metabolic panel",
                  system: "http://loinc.org",
                },
              ],
              text: "Metabolic panel",
            },
            resourceType: "Observation",
            subject: {
              reference: `Patient/${testVirtaId}`,
            },
            issued: testDate,
            effectiveDateTime: testDate,
            hasMember: [
              {
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        code: "LAB",
                        display: "Laboratory",
                        system: "http://hl7.org/fhir/v2/0074",
                      },
                    ],
                  },
                ],
                code: {
                  coding: [
                    {
                      code: "2951-2",
                      display: "Sodium",
                      system: "http://loinc.org",
                    },
                  ],
                  text: "Sodium",
                },
                resourceType: "Observation",
                subject: {
                  reference: `Patient/${testVirtaId}`,
                },
                valueQuantity: {
                  value: 12.3,
                  unit: "mmol/L",
                },
                issued: testDate,
                effectiveDateTime: testDate,
              },
            ],
          },
          {
            status: "final",
            category: [
              {
                coding: [
                  {
                    code: "LAB",
                    display: "Laboratory",
                    system: "http://hl7.org/fhir/v2/0074",
                  },
                ],
              },
            ],
            code: {
              coding: [
                {
                  code: "34535-5",
                  display: "Albumin/Creatinine Ratio, Urine",
                  system: "http://loinc.org",
                },
              ],
              text: "Albumin/Creatinine Ratio, Urine",
            },
            resourceType: "Observation",
            subject: {
              reference: `Patient/${testVirtaId}`,
            },
            issued: testDate,
            effectiveDateTime: testDate,
            hasMember: [
              {
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        code: "LAB",
                        display: "Laboratory",
                        system: "http://hl7.org/fhir/v2/0074",
                      },
                    ],
                  },
                ],
                code: {
                  coding: [
                    {
                      code: "14957-5",
                      display: "Albumin, Urine",
                      system: "http://loinc.org",
                    },
                  ],
                  text: "Albumin, Urine",
                },
                resourceType: "Observation",
                subject: {
                  reference: `Patient/${testVirtaId}`,
                },
                valueQuantity: {
                  value: 53.4,
                  unit: "mg/L",
                },
                issued: testDate,
                effectiveDateTime: testDate,
              },
            ],
          },
        ],
        resourceType: "DiagnosticReport",
        status: "final",
        subject: {
          reference: `Patient/${testVirtaId}`,
        },
      });
    });
  });

  describe("with form attachments", () => {
    it("creates the report with one attachment", () => {
      const sampleForm = {
        file: "utfEncodedPDF",
        title: "A sample form",
        contentType: "application/pdf",
      };
      const { diagnosticReport } = transformFormToDiagnosticReport({
        collectionDate: testDate,
        virtaId: testVirtaId,
        observationQuestionnaires: [hbA1cQuestionnaire],
        observationResponses: [hbA1cResponse],
        presentedForm: [sampleForm],
      });
      expect(diagnosticReport).toEqual({
        category: {
          coding: [
            {
              code: "LAB",
              display: "Laboratory",
              system: "http://hl7.org/fhir/v2/0074",
            },
          ],
        },
        code: { coding: [] },
        issued: testDate,
        effective: testDate,
        result: [
          {
            status: "final",
            category: [
              {
                coding: [
                  {
                    code: "LAB",
                    display: "Laboratory",
                    system: "http://hl7.org/fhir/v2/0074",
                  },
                ],
              },
            ],
            code: {
              coding: [],
              text: "Hemoglobin A1c",
            },
            resourceType: "Observation",
            subject: {
              reference: `Patient/${testVirtaId}`,
            },
            hasMember: [
              {
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        code: "LAB",
                        display: "Laboratory",
                        system: "http://hl7.org/fhir/v2/0074",
                      },
                    ],
                  },
                ],
                code: {
                  coding: [
                    {
                      code: "4548-4",
                      display: "HbA1c",
                      system: "http://loinc.org",
                    },
                  ],
                  text: "HbA1c",
                },
                issued: testDate,
                effectiveDateTime: testDate,
                valueQuantity: {
                  unit: "%",
                  value: 8.1,
                },
                resourceType: "Observation",
                subject: {
                  reference: `Patient/${testVirtaId}`,
                },
              },
            ],
            issued: testDate,
            effectiveDateTime: testDate,
          },
        ],
        resourceType: "DiagnosticReport",
        status: "final",
        subject: {
          reference: `Patient/${testVirtaId}`,
        },
        presentedForm: [
          {
            data: sampleForm.file,
            contentType: "application/pdf",
            title: "A sample form",
            url: undefined,
          },
        ],
      });
    });
    it("creates the report with more than one attachment", () => {
      const sampleForm1 = {
        file: "utfEncodedPDF",
        title: "A sample form",
        contentType: "application/pdf",
      };
      const sampleForm2 = {
        file: "utfEncodedPDF2",
        title: "Another sample form",
        contentType: "application/pdf",
      };
      const { diagnosticReport } = transformFormToDiagnosticReport({
        collectionDate: testDate,
        virtaId: testVirtaId,
        observationQuestionnaires: [hbA1cQuestionnaire],
        observationResponses: [hbA1cResponse],
        presentedForm: [sampleForm1, sampleForm2],
      });
      expect(diagnosticReport).toEqual({
        category: {
          coding: [
            {
              code: "LAB",
              display: "Laboratory",
              system: "http://hl7.org/fhir/v2/0074",
            },
          ],
        },
        code: { coding: [] },
        contained: undefined,
        id: undefined,
        issued: testDate,
        effective: testDate,
        performer: undefined,
        result: [
          {
            status: "final",
            category: [
              {
                coding: [
                  {
                    code: "LAB",
                    display: "Laboratory",
                    system: "http://hl7.org/fhir/v2/0074",
                  },
                ],
              },
            ],
            code: {
              coding: [],
              text: "Hemoglobin A1c",
            },
            resourceType: "Observation",
            subject: {
              reference: `Patient/${testVirtaId}`,
            },
            hasMember: [
              {
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        code: "LAB",
                        display: "Laboratory",
                        system: "http://hl7.org/fhir/v2/0074",
                      },
                    ],
                  },
                ],
                code: {
                  coding: [
                    {
                      code: "4548-4",
                      display: "HbA1c",
                      system: "http://loinc.org",
                    },
                  ],
                  text: "HbA1c",
                },
                issued: testDate,
                effectiveDateTime: testDate,
                valueQuantity: {
                  unit: "%",
                  value: 8.1,
                },
                resourceType: "Observation",
                subject: {
                  reference: `Patient/${testVirtaId}`,
                },
              },
            ],
            issued: testDate,
            effectiveDateTime: testDate,
          },
        ],
        resourceType: "DiagnosticReport",
        status: "final",
        subject: {
          reference: `Patient/${testVirtaId}`,
        },
        presentedForm: [
          {
            data: sampleForm1.file,
            contentType: "application/pdf",
            title: "A sample form",
            url: undefined,
          },
          {
            data: sampleForm2.file,
            contentType: "application/pdf",
            title: "Another sample form",
            url: undefined,
          },
        ],
      });
    });
    it("creates the report with more than one attachment with different contentTypes", () => {
      const sampleForm1 = {
        file: "utfEncodedPNG",
        title: "A sample form",
        contentType: "image/png",
      };
      const sampleForm2 = {
        file: "utfEncodedPDF2",
        title: "Another sample form",
        contentType: "application/pdf",
      };
      const sampleForm3 = {
        file: "utfEncodedJPEG",
        title: "A sample image",
        contentType: "image/jpg",
      };
      const { diagnosticReport } = transformFormToDiagnosticReport({
        collectionDate: testDate,
        virtaId: testVirtaId,
        observationQuestionnaires: [hbA1cQuestionnaire],
        observationResponses: [hbA1cResponse],
        presentedForm: [sampleForm1, sampleForm2, sampleForm3],
      });
      expect(diagnosticReport).toEqual({
        category: {
          coding: [
            {
              code: "LAB",
              display: "Laboratory",
              system: "http://hl7.org/fhir/v2/0074",
            },
          ],
        },
        code: { coding: [] },
        contained: undefined,
        id: undefined,
        issued: testDate,
        effective: testDate,
        performer: undefined,
        result: [
          {
            status: "final",
            category: [
              {
                coding: [
                  {
                    code: "LAB",
                    display: "Laboratory",
                    system: "http://hl7.org/fhir/v2/0074",
                  },
                ],
              },
            ],
            code: {
              coding: [],
              text: "Hemoglobin A1c",
            },
            resourceType: "Observation",
            subject: {
              reference: `Patient/${testVirtaId}`,
            },
            hasMember: [
              {
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        code: "LAB",
                        display: "Laboratory",
                        system: "http://hl7.org/fhir/v2/0074",
                      },
                    ],
                  },
                ],
                code: {
                  coding: [
                    {
                      code: "4548-4",
                      display: "HbA1c",
                      system: "http://loinc.org",
                    },
                  ],
                  text: "HbA1c",
                },
                issued: testDate,
                effectiveDateTime: testDate,
                valueQuantity: {
                  unit: "%",
                  value: 8.1,
                },
                resourceType: "Observation",
                subject: {
                  reference: `Patient/${testVirtaId}`,
                },
              },
            ],
            issued: testDate,
            effectiveDateTime: testDate,
          },
        ],
        resourceType: "DiagnosticReport",
        status: "final",
        subject: {
          reference: `Patient/${testVirtaId}`,
        },
        presentedForm: [
          {
            data: sampleForm1.file,
            contentType: "image/png",
            title: "A sample form",
            url: undefined,
          },
          {
            data: sampleForm2.file,
            contentType: "application/pdf",
            title: "Another sample form",
            url: undefined,
          },
          {
            data: sampleForm3.file,
            contentType: "image/jpg",
            title: "A sample image",
            url: undefined,
          },
        ],
      });
    });
  });

  it("given a DiagnosticReport with an observation that has a `>`/`<` character", () => {
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [antiGadQuestionnaire],
      observationResponses: [antiGadResponseWithGreaterThan as any],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      contained: undefined,
      id: undefined,
      issued: testDate,
      effective: testDate,
      result: [
        {
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [],
            text: "GAD65 Antibody",
          },
          issued: testDate,
          effectiveDateTime: testDate,
          hasMember: [
            {
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "56540-8",
                    display: "GAD65 Antibody",
                    system: "http://loinc.org",
                  },
                ],
                text: "GAD65 Antibody",
              },
              performer: undefined,
              resourceType: "Observation",
              status: "final",
              subject: {
                reference: "Patient/a virta id",
              },
              valueString: "> 7.1",
              issued: testDate,
              effectiveDateTime: testDate,
            },
          ],
          performer: undefined,
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/a virta id",
          },
        },
      ],
      performer: undefined,
      presentedForm: undefined,
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });

  it("given a DiagnosticReport with an observation that has a valueDecimal of 0", () => {
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [antiGadQuestionnaire],
      observationResponses: [antiGadResponseWithZero as any],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      contained: undefined,
      id: undefined,
      issued: testDate,
      effective: testDate,
      result: [
        {
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [],
            text: "GAD65 Antibody",
          },
          issued: testDate,
          effectiveDateTime: testDate,
          hasMember: [
            {
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "56540-8",
                    display: "GAD65 Antibody",
                    system: "http://loinc.org",
                  },
                ],
                text: "GAD65 Antibody",
              },
              performer: undefined,
              resourceType: "Observation",
              status: "final",
              subject: {
                reference: "Patient/a virta id",
              },
              valueQuantity: {
                value: 0,
                unit: "[arb'U]/mL",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
          ],
          performer: undefined,
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/a virta id",
          },
        },
      ],
      performer: undefined,
      presentedForm: undefined,
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });

  it("given a DiagnosticReport with an observation that has a valueQuantity of 0", () => {
    const { diagnosticReport } = transformFormToDiagnosticReport({
      collectionDate: testDate,
      virtaId: testVirtaId,
      observationQuestionnaires: [nmrLipoprofileQuestionnaire],
      observationResponses: [nmrProfileWithValueQuantityObsZero as any],
    });
    expect(diagnosticReport).toEqual({
      category: {
        coding: [
          {
            code: "LAB",
            display: "Laboratory",
            system: "http://hl7.org/fhir/v2/0074",
          },
        ],
      },
      code: { coding: [] },
      contained: undefined,
      id: undefined,
      issued: testDate,
      effective: testDate,
      result: [
        {
          category: [
            {
              coding: [
                {
                  code: "LAB",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/v2/0074",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "59062-0",
                display: "Lipid NMR panel",
                system: "http://loinc.org",
              },
            ],
            text: "Lipid NMR panel",
          },
          issued: testDate,
          effectiveDateTime: testDate,
          hasMember: [
            {
              category: [
                {
                  coding: [
                    {
                      code: "LAB",
                      display: "Laboratory",
                      system: "http://hl7.org/fhir/v2/0074",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    code: "17782-4",
                    display: "LDL Size",
                    system: "http://loinc.org",
                  },
                ],
                text: "LDL Size",
              },
              performer: undefined,
              resourceType: "Observation",
              status: "final",
              subject: {
                reference: "Patient/a virta id",
              },
              valueQuantity: {
                value: 0,
                unit: "nm",
              },
              issued: testDate,
              effectiveDateTime: testDate,
            },
          ],
          performer: undefined,
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/a virta id",
          },
        },
      ],
      performer: undefined,
      presentedForm: undefined,
      resourceType: "DiagnosticReport",
      status: "final",
      subject: {
        reference: `Patient/${testVirtaId}`,
      },
    });
  });
});

describe("mapDiagnosticReportToForm", () => {
  it("builds observationQuestionnaires and observationResponses out of a diagnostic report", () => {
    const result = mapDiagnosticReportToForm(testDiagnosticReport);
    expect(result.observationQuestionnaires).toEqual([
      hbA1cQuestionnaire,
      lipidQuestionnaire,
      antiGadQuestionnaire,
      cmpQuestionnaire,
      nmrLipoprofileQuestionnaire,
    ]);
    expect(result.observationResponses).toEqual([
      {
        status: "in-progress",
        item: [
          {
            linkId: "/4548-4",
            item: [{ linkId: "/4548-4", answer: [{ valueDecimal: 7.1 }] }],
          },
        ],
      },
      {
        status: "in-progress",
        item: [
          {
            linkId: "/24331-1",
            item: [
              { linkId: "/2093-3", answer: [{ valueDecimal: 217 }] },
              { linkId: "/2571-8", answer: [{ valueDecimal: 218 }] },
            ],
          },
        ],
      },
      {
        status: "in-progress",
        item: [
          {
            linkId: "/56540-8",
            item: [{ linkId: "/56540-8", answer: [{ valueString: "> 3.2" }] }],
          },
        ],
      },
      {
        status: "in-progress",
        item: [
          {
            linkId: "/24323-8",
            item: [{ linkId: "/2951-2", answer: [{ valueDecimal: 140 }] }],
          },
        ],
      },
      {
        status: "in-progress",
        item: [
          {
            linkId: "/59062-0",
            item: [
              {
                linkId: "/17782-4",
                answer: [{ valueQuantity: { value: 1.5 } }],
              },
            ],
          },
        ],
      },
    ]);
  });

  it("maps questionnaire correctly for panel observation that is missing related key", () => {
    const result = mapDiagnosticReportToForm(
      testDiagnosticReportWithMissingRelatedObs
    );
    expect(result.observationQuestionnaires).toEqual([antiGadQuestionnaire]);
    expect(result.observationResponses).toEqual([
      { item: [{ linkId: "/56540-8", item: [] }], status: "in-progress" },
    ]);
  });
});

describe("validateDiagnosticReport", () => {
  it("returns false when the issuedDate is not valid", () => {
    expect(
      validateDiagnosticReport({
        observationQuestionnaires: [{ status: "final" }],
        observationResponses: [{ status: "in progress" }],
      }).isValid
    ).toBeFalsy();
  });

  it("returns false when there is no Questionnaire", () => {
    expect(
      validateDiagnosticReport({
        collectionDate: testDate,
        observationResponses: [{ status: "in progress" }],
      }).isValid
    ).toBeFalsy();
  });

  it("returns false when there is no QuestionnaireResponse", () => {
    expect(
      validateDiagnosticReport({
        collectionDate: testDate,
        observationQuestionnaires: [{ status: "final" }],
      }).isValid
    ).toBeFalsy();
  });

  it("returns false when there is a Questionnaire/QuestionnaireResponse mismatch", () => {
    expect(
      validateDiagnosticReport({
        collectionDate: testDate,
        observationQuestionnaires: [{ status: "final" }],
        observationResponses: [
          { status: "in progress" },
          { status: "in progress" },
        ],
      }).isValid
    ).toBeFalsy();
  });

  it("returns true when all the required fields are included", () => {
    expect(
      validateDiagnosticReport({
        collectionDate: testDate,
        observationQuestionnaires: [
          {
            status: "final",
            item: [
              {
                type: "group",
                linkId: "test-group",
                item: [
                  { type: "decimal", linkId: "test-link-id1" },
                  {
                    type: "group",
                    linkId: "/test-group/test-group-item1",
                    item: [
                      {
                        type: "decimal",
                        linkId: "/test-group/test-group-item1/nested-item1",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        observationResponses: [
          {
            status: "in progress",
            item: [
              {
                linkId: "test-group",
                item: [
                  { linkId: "test-link-id1" },
                  { linkId: "/test-group/test-group-item1/nested-item1" },
                ],
              },
            ],
          },
        ],
      }).isValid
    ).toBeTruthy();
  });
});

const hbA1cResponse = {
  status: "in-progress",
  item: [
    {
      linkId: "/4548-4",
      item: [
        {
          linkId: "/4548-4",
          answer: [
            {
              valueDecimal: 8.1,
            },
          ],
        },
      ],
    },
  ],
};

const simpleHbA1cQuestionnaire = {
  status: "draft",
  resourceType: "Questionnaire",
  meta: {
    profile: [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire|2.7",
    ],
    tag: [
      {
        code: "lformsVersion: 24.0.0",
      },
    ],
  },
  item: [
    {
      type: "decimal",
      code: [
        {
          code: "4548-4",
          display: "Hgb A1c MFr Bld",
          system: "http://loinc.org",
        },
      ],
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
          valueCoding: {
            display: "%",
          },
        },
      ],
      required: false,
      linkId: "/4548-4",
      text: "Hgb A1c MFr Bld",
    },
  ],
};

const simpleHbA1cResponse = {
  status: "in-progress",
  item: [
    {
      linkId: "/4548-4",
      answer: [
        {
          valueDecimal: 8.1,
        },
      ],
    },
  ],
};

const antiGadResponseWithGreaterThan = {
  status: "in-progress",
  item: [
    {
      item: [
        {
          linkId: "/56540-8",
          answer: [
            {
              valueDecimal: "> 7.1",
            },
          ],
        },
      ],
    },
  ],
};

const antiGadResponseWithZero = {
  status: "in-progress",
  item: [
    {
      item: [
        {
          linkId: "/56540-8",
          answer: [
            {
              valueDecimal: 0,
            },
          ],
        },
      ],
    },
  ],
};

const nmrProfileWithValueQuantityObsZero = {
  status: "in-progress",
  item: [
    {
      linkId: "/59062-0",
      item: [{ linkId: "/17782-4", answer: [{ valueQuantity: { value: 0 } }] }],
    },
  ],
};

const microalbuminCreatinineResponse = {
  status: "in-progress",
  item: [
    {
      linkId: "/34535-5",
      item: [
        {
          linkId: "/14957-5",
          answer: [
            {
              valueDecimal: 53.4,
            },
          ],
        },
        {
          linkId: "/2161-8",
          answer: [
            {
              valueDecimal: 284.8,
            },
          ],
        },
        {
          linkId: "/14959-1",
          answer: [
            {
              valueDecimal: 0.1875,
            },
          ],
        },
      ],
    },
  ],
};

const testDiagnosticReport = {
  id: "diagnostic-report-1",
  category: {
    coding: [
      {
        code: "LAB",
        display: "Laboratory",
        system: "http://hl7.org/fhir/v2/0074",
      },
    ],
    text: "Laboratory",
  },
  code: {
    text: "Comp. Metabolic Panel (14), Lipid Panel, Hemoglobin A1c, TSH",
  },
  identifier: [
    {
      system: "https://www.healthgorilla.com",
      value: "a_health_gorilla_id_1",
    },
  ],
  issued: "2019-12-03T07:05:00+00:00",
  effectiveDateTime: "2019-12-03T07:05:00+00:00",
  performer: [
    {
      actor: {
        display: "LabCorp",
        reference: "Organization/lab-corp-id",
      },
    },
  ],
  resourceType: "DiagnosticReport",
  result: [
    {
      category: [
        {
          coding: [
            {
              code: "laboratory",
              display: "Laboratory",
              system: "http://hl7.org/fhir/observation-category",
            },
          ],
        },
      ],
      code: {
        text: "Hemoglobin A1c",
      },
      effectiveDateTime: "2019-12-02T16:02:00+00:00",
      id: "observation-1",
      identifier: [
        {
          system: "https://www.healthgorilla.com",
          value: "health_gorilla_id_2",
        },
      ],
      issued: "2019-12-03T07:05:00.000+00:00",
      performer: [
        {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      ],
      status: "final",
      related: [
        {
          category: [
            {
              coding: [
                {
                  code: "laboratory",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/observation-category",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "4548-4",
                display: "Hemoglobin A1c",
                system: "http://loinc.org",
              },
            ],
            text: "Hemoglobin A1c",
          },
          effectiveDateTime: "2019-12-03T06:42:00+00:00",
          id: "observation-3",
          identifier: [
            {
              system: "https://www.healthgorilla.com",
              value: "health_gorilla_id_4",
            },
          ],
          issued: "2019-12-03T07:05:00.000+00:00",
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/patient-1",
          },
          valueQuantity: {
            system: "http://unitsofmeasure.org",
            unit: "%",
            value: 7.1,
          },
        },
      ],
    },
    {
      category: [
        {
          coding: [
            {
              code: "laboratory",
              display: "Laboratory",
              system: "http://hl7.org/fhir/observation-category",
            },
          ],
        },
      ],
      code: {
        text: "Lipids",
        coding: [{ code: "24331-1" }],
      },
      effectiveDateTime: "2019-12-02T16:02:00+00:00",
      id: "observation-2",
      identifier: [
        {
          system: "https://www.healthgorilla.com",
          value: "health_gorilla_id_4",
        },
      ],
      issued: "2019-12-03T07:05:00.000+00:00",
      performer: [
        {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      ],
      status: "final",
      related: [
        {
          category: [
            {
              coding: [
                {
                  code: "laboratory",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/observation-category",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "2093-3",
                display: "Cholest SerPl-mCnc",
                system: "http://loinc.org",
              },
            ],
            text: "Cholest SerPl-mCnc",
          },
          effectiveDateTime: "2019-12-03T04:39:00+00:00",
          id: "observation-4",
          identifier: [
            {
              system: "https://www.healthgorilla.com",
              value: "health_gorilla_id_5",
            },
          ],
          issued: "2019-12-03T07:05:00.000+00:00",
          referenceRange: [
            {
              text: "100-199",
            },
          ],
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/patient-1",
          },
          valueQuantity: {
            system: "http://unitsofmeasure.org",
            unit: "mg/dL",
            value: 217,
          },
        },
        {
          category: [
            {
              coding: [
                {
                  code: "laboratory",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/observation-category",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "2571-8",
                display: "Trigl SerPl-mCnc",
                system: "http://loinc.org",
              },
            ],
            text: "Trigl SerPl-mCnc",
          },
          effectiveDateTime: "2019-12-03T04:39:00+00:00",
          id: "observation-5",
          identifier: [
            {
              system: "https://www.healthgorilla.com",
              value: "health_gorilla_id_6",
            },
          ],
          issued: "2019-12-03T07:05:00.000+00:00",
          referenceRange: [
            {
              text: "0-149",
            },
          ],
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/patient-1",
          },
          valueQuantity: {
            system: "http://unitsofmeasure.org",
            unit: "mg/dL",
            value: 218,
          },
        },
      ],
    },
    {
      category: [
        {
          coding: [
            {
              code: "laboratory",
              display: "Laboratory",
              system: "http://hl7.org/fhir/observation-category",
            },
          ],
        },
      ],
      code: {
        text: "GAD65 Ab Ser",
      },
      effectiveDateTime: "2019-12-02T16:02:00+00:00",
      id: "observation-3",
      identifier: [
        {
          system: "https://www.healthgorilla.com",
          value: "health_gorilla_id_2",
        },
      ],
      issued: "2019-12-03T07:05:00.000+00:00",
      performer: [
        {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      ],
      status: "final",
      related: [
        {
          category: [
            {
              coding: [
                {
                  code: "laboratory",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/observation-category",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "56540-8",
                display: "GAD65 Ab Ser",
                system: "http://loinc.org",
              },
            ],
            text: "GAD65 Ab Ser",
          },
          effectiveDateTime: "2019-12-03T06:42:00+00:00",
          id: "observation-5",
          identifier: [
            {
              system: "https://www.healthgorilla.com",
              value: "health_gorilla_id_8",
            },
          ],
          issued: "2019-12-03T07:05:00.000+00:00",
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/patient-1",
          },
          valueString: "> 3.2",
        },
      ],
    },
    {
      category: [
        {
          coding: [
            {
              code: "laboratory",
              display: "Laboratory",
              system: "http://hl7.org/fhir/observation-category",
            },
          ],
        },
      ],
      code: {
        text: "Comprehensive Metabolic panel",
        coding: [{ code: "24323-8" }],
      },
      effectiveDateTime: "2019-12-02T16:02:00+00:00",
      id: "observation-6",
      identifier: [
        {
          system: "https://www.healthgorilla.com",
          value: "health_gorilla_id_4",
        },
      ],
      issued: "2019-12-03T07:05:00.000+00:00",
      performer: [
        {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      ],
      status: "final",
      related: [
        {
          category: [
            {
              coding: [
                {
                  code: "laboratory",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/observation-category",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "2951-2",
                display: "Sodium",
                system: "http://loinc.org",
              },
            ],
            text: "Sodium",
          },
          effectiveDateTime: "2019-12-03T04:39:00+00:00",
          id: "observation-7",
          identifier: [
            {
              system: "https://www.healthgorilla.com",
              value: "health_gorilla_id_5",
            },
          ],
          issued: "2019-12-03T07:05:00.000+00:00",
          referenceRange: [
            {
              text: "134-144",
            },
          ],
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/patient-1",
          },
          valueQuantity: {
            system: "http://unitsofmeasure.org",
            unit: "mg/dL",
            value: 140,
          },
        },
      ],
    },
    {
      category: [
        {
          coding: [
            {
              code: "laboratory",
              display: "Laboratory",
              system: "http://hl7.org/fhir/observation-category",
            },
          ],
        },
      ],
      code: {
        text: "Lipoprofile panel - Serum or Plasma",
        coding: [{ code: "59062-0" }],
      },
      effectiveDateTime: "2019-12-02T16:02:00+00:00",
      id: "observation-21",
      identifier: [
        {
          system: "https://www.healthgorilla.com",
          value: "health_gorilla_id_4",
        },
      ],
      issued: "2019-12-03T07:05:00.000+00:00",
      performer: [
        {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      ],
      status: "final",
      related: [
        {
          category: [
            {
              coding: [
                {
                  code: "laboratory",
                  display: "Laboratory",
                  system: "http://hl7.org/fhir/observation-category",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                code: "17782-4",
                display: "LDL Particle Size",
                system: "http://loinc.org",
              },
            ],
            text: "LDL Particle Size",
          },
          effectiveDateTime: "2019-12-03T04:39:00+00:00",
          id: "observation-20",
          identifier: [
            {
              system: "https://www.healthgorilla.com",
              value: "health_gorilla_id_10",
            },
          ],
          issued: "2019-12-03T07:05:00.000+00:00",
          resourceType: "Observation",
          status: "final",
          subject: {
            reference: "Patient/patient-1",
          },
          valueQuantity: {
            system: "http://unitsofmeasure.org",
            unit: "nm",
            value: 1.5,
          },
        },
      ],
    },
  ],
  status: "final",
};

const testDiagnosticReportWithMissingRelatedObs = {
  id: "diagnostic-report-2",
  category: {
    coding: [
      {
        code: "LAB",
        display: "Laboratory",
        system: "http://hl7.org/fhir/v2/0074",
      },
    ],
    text: "Laboratory",
  },
  code: {
    text: "Comp. Metabolic Panel (14), Lipid Panel, Hemoglobin A1c, TSH",
  },
  identifier: [
    {
      system: "https://www.healthgorilla.com",
      value: "a_health_gorilla_id_1",
    },
  ],
  issued: "2019-12-03T07:05:00+00:00",
  performer: [
    {
      actor: {
        display: "LabCorp",
        reference: "Organization/lab-corp-id",
      },
    },
  ],
  resourceType: "DiagnosticReport",
  result: [
    {
      category: [
        {
          coding: [
            {
              code: "laboratory",
              display: "Laboratory",
              system: "http://hl7.org/fhir/observation-category",
            },
          ],
        },
      ],
      code: {
        text: "GAD65 Ab Ser",
      },
      effectiveDateTime: "2019-12-02T16:02:00+00:00",
      id: "observation-3",
      identifier: [
        {
          system: "https://www.healthgorilla.com",
          value: "health_gorilla_id_2",
        },
      ],
      issued: "2019-12-03T07:05:00.000+00:00",
      performer: [
        {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      ],
      status: "final",
    },
  ],
  status: "final",
};
