import {
  fetchedObservationsDR1,
  fetchedObservationsDR2,
  fetchedObservationsDR3,
  fetchedObservationsDR4,
  buildA1cPanelObservation,
  buildLipidPanelObservation,
} from "./patientObservations";

export const fetchedLabResult = [
  {
    id: "diagnostic-report-6",
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
      text: "Imported Result",
    },
    issued: "2021-01-23T17:06:00+00:00",
    performer: [
      {
        actor: {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      },
    ],
    result: [
      {
        id: "observation27",
        code: {
          coding: [
            {
              code: "59062-0",
              display: "Lipid NMR panel",
              system: "http://loinc.org",
            },
          ],
          text: "Lipid NMR Panel",
        },
        status: "final",
        related: [
          {
            id: "observation82",
            code: { coding: [{ code: "2085-9" }] }, // could also belong to Lipid panel
            status: "final",
            valueQuantity: { value: 165, unit: "mg/dL" },
          },
          {
            id: "observation91",
            code: { coding: [{ code: "54434-6" }] },
            status: "final",
            valueQuantity: { value: 123, unit: "nmol/L" },
          },
        ],
      },
    ],
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
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
      text: "C-Peptide",
    },
    id: "diagnostic-report-4",
    issued: "2020-09-28T17:06:00+00:00",
    effectiveDateTime: "2020-09-28T17:06:00+00:00",
    performer: [
      {
        actor: {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      },
    ],
    presentedForm: [],
    resourceType: "DiagnosticReport",
    result: fetchedObservationsDR4,
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Hemoglobin A1c",
    },
    id: "diagnostic-report-2",
    issued: "2020-06-23T17:06:00+00:00",
    effectiveDateTime: "2020-06-23T17:06:00+00:00",
    performer: [
      {
        actor: {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      },
    ],
    presentedForm: [
      {
        contentType: "image/jpeg",
        title: "test-jpg.jpeg",
        url: "DocumentReference/document-ref-1",
      },
      {
        contentType: "application/pdf",
        creation: "2020-06-19T19:52:57+00:00",
        url: "DocumentReference/document-ref-2",
      },
    ],
    resourceType: "DiagnosticReport",
    result: fetchedObservationsDR2,
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
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
      text: "Imported Result",
    },
    id: "diagnostic-report-3",
    issued: "2020-04-25T17:06:00+00:00",
    performer: [
      {
        actor: {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      },
    ],
    presentedForm: [],
    resourceType: "DiagnosticReport",
    result: fetchedObservationsDR3,
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
    id: "diagnostic-report-5",
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Hemoglobin A1c",
    },
    contained: [
      {
        author: { reference: "Practitioner/some-provider-id" },
        resourceType: "RequestGroup",
      },
    ],
    issued: "2020-01-25T17:06:00+00:00",
    effectiveDateTime: "2020-01-25T17:06:00+00:00",
    performer: [
      {
        actor: {
          display: "LabCorp",
          reference: "Organization/lab-corp-id",
        },
      },
    ],
    result: [
      {
        id: "observation35",
        code: {
          coding: [{ code: "59062-0" }],
          text: "Lipid NMR Panel",
        },
        status: "final",
        effectiveDateTime: "2020-01-25T17:06:00+00:00",
        issued: "2020-01-25T17:06:00+00:00",
        related: [
          {
            id: "observation36",
            code: { coding: [{ code: "2085-9" }] }, // could also belong to Lipid panel
            status: "final",
            valueQuantity: { value: 112, unit: "mg/dL" },
          },
          {
            id: "observation37",
            code: { coding: [{ code: "54434-6" }] },
            status: "final",
            valueQuantity: { value: 1001, unit: "nmol/L" },
          },
        ],
      },
    ],
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Albumin/Creatinine Ratio,Urine, Hemoglobin A1c, TSH",
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
    result: fetchedObservationsDR1,
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
    id: "diagnostic-report-104",
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Albumin/Creatinine Ratio,Urine, Hemoglobin A1c, TSH",
    },
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "a_health_gorilla_id_1",
      },
    ],
    issued: "2018-12-29T07:05:00+00:00",
    effectiveDateTime: "2018-12-29T07:05:00+00:00",
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
      buildA1cPanelObservation("observation-500", "observation-501", 4.5),
      {
        id: "observation-345",
        code: {
          coding: [{ code: "59062-0" }],
          text: "Lipid NMR Panel",
        },
        status: "final",
        effectiveDateTime: "2020-01-25T17:06:00+00:00",
        issued: "2020-01-25T17:06:00+00:00",
        related: [
          {
            id: "observation-456",
            code: { coding: [{ code: "2085-9" }] }, // could also belong to Lipid panel
            status: "final",
            valueQuantity: { value: 112, unit: "mg/dL" },
          },
          {
            id: "observation37",
            code: { coding: [{ code: "54434-6" }] },
            status: "final",
            valueString: "< 1000",
          },
        ],
      },
    ],
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
    id: "diagnostic-report-100",
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Albumin/Creatinine Ratio,Urine, Hemoglobin A1c, TSH",
    },
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "a_health_gorilla_id_1",
      },
    ],
    issued: "2018-12-03T07:05:00+00:00",
    effectiveDateTime: "2018-12-03T07:05:00+00:00",
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
      buildA1cPanelObservation("observation-100", "observation-101", 5.6),
      buildLipidPanelObservation("observation-102", "observation-103", 324),
    ],
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },

  {
    id: "diagnostic-report-102",
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Albumin/Creatinine Ratio,Urine, Hemoglobin A1c, TSH",
    },
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "a_health_gorilla_id_1",
      },
    ],
    issued: "2018-11-03T07:05:00+00:00",
    effectiveDateTime: "2018-11-03T07:05:00+00:00",
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
      buildA1cPanelObservation("observation-300", "observation-301", 5.6),
      buildLipidPanelObservation("observation-302", "observation-303", 251),
    ],
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
    id: "diagnostic-report-103",
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Albumin/Creatinine Ratio,Urine, Hemoglobin A1c, TSH",
    },
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "a_health_gorilla_id_1",
      },
    ],
    issued: "2018-10-03T07:05:00+00:00",
    effectiveDateTime: "2018-10-03T07:05:00+00:00",
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
      buildA1cPanelObservation("observation-400", "observation-401", 5.6),
      buildLipidPanelObservation("observation-402", "observation-403", 342),
    ],
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
  {
    id: "diagnostic-report-101",
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
      text: "Comp. Metabolic Panel (14), Lipid Panel, Albumin/Creatinine Ratio,Urine, Hemoglobin A1c, TSH",
    },
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "a_health_gorilla_id_1",
      },
    ],
    issued: "2017-12-03T07:05:00+00:00",
    effectiveDateTime: "2017-12-03T07:05:00+00:00",
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
      buildA1cPanelObservation("observation-200", "observation-201", 5.6),
      buildLipidPanelObservation("observation-202", "observation-203", 256),
    ],
    status: "final",
    subject: {
      reference: "Patient/patient-1",
    },
  },
];

export const fetchedDocument1 = {
  content: [
    {
      attachment: {
        contentType: "image/jpeg",
        title: "test-jpg.jpeg",
        data: "/9j/4AAQSkZJRgABAQAAkACQAAD/4QCARXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAKgAgAEAAAAAQAAAeqgAwAEAAAAAQAAATgAAAAA/+EJIWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+IPrElDQ19QUk9GSUxFAAEBAAAPnGFwcGwCEAAAbW50clJHQiBYWVogB+UAAQAWABAAIwAKYWNzcEFQUEwAAAAAQVBQTAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARZGVzYwAAAVAAAABiZHNjbQAAAbQAAASEY3BydAAABjgAAAAjd3RwdAAABlwAAAAUclhZWgAABnAAAAAUZ1hZWgAABoQAAAAUYlhZWgAABpgAAAAUclRSQwAABqwAAAgMYWFyZwAADrgAAAAgdmNndAAADtgAAAAwbmRpbgAADwgAAAA+Y2hhZAAAD0gAAAAsbW1vZAAAD3QAAAAoYlRSQwAABqwAAAgMZ1RSQwAABqwAAAgMYWFiZwAADrgAAAAgYWFnZwAADrgAAAAgZGVzYwAAAAAAAAAIRGlzcGxheQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1sdWMAAAAAAAAAJgAAAAxockhSAAAAFAAAAdhrb0tSAAAADAAAAexuYk5PAAAAEgAAAfhpZAAAAAAAEgAAAgpodUhVAAAAFAAAAhxjc0NaAAAAFgAAAjBkYURLAAAAHAAAAkZubE5MAAAAFgAAAmJmaUZJAAAAEAAAAnhpdElUAAAAFAAAAohlc0VTAAAAEgAAApxyb1JPAAAAEgAAApxmckNBAAAAFgAAAq5hcgAAAAAAFAAAAsR1a1VBAAAAHAAAAthoZUlMAAAAFgAAAvR6aFRXAAAADAAAAwp2aVZOAAAADgAAAxZza1NLAAAAFgAAAyR6aENOAAAADAAAAwpydVJVAAAAJAAAAzplbkdCAAAAFAAAA15mckZSAAAAFgAAA3JtcwAAAAAAEgAAA4hoaUlOAAAAEgAAA5p0aFRIAAAADAAAA6xjYUVTAAAAGAAAA7hlbkFVAAAAFAAAA15lc1hMAAAAEgAAApxkZURFAAAAEAAAA9BlblVTAAAAEgAAA+BwdEJSAAAAGAAAA/JwbFBMAAAAEgAABAplbEdSAAAAIgAABBxzdlNFAAAAEAAABD50clRSAAAAFAAABE5wdFBUAAAAFgAABGJqYUpQAAAADAAABHgATABDAEQAIAB1ACAAYgBvAGoAac7st+wAIABMAEMARABGAGEAcgBnAGUALQBMAEMARABMAEMARAAgAFcAYQByAG4AYQBTAHoA7QBuAGUAcwAgAEwAQwBEAEIAYQByAGUAdgBuAP0AIABMAEMARABMAEMARAAtAGYAYQByAHYAZQBzAGsA5gByAG0ASwBsAGUAdQByAGUAbgAtAEwAQwBEAFYA5AByAGkALQBMAEMARABMAEMARAAgAGMAbwBsAG8AcgBpAEwAQwBEACAAYwBvAGwAbwByAEEAQwBMACAAYwBvAHUAbABlAHUAciAPAEwAQwBEACAGRQZEBkgGRgYpBBoEPgQ7BEwEPgRABD4EMgQ4BDkAIABMAEMARCAPAEwAQwBEACAF5gXRBeIF1QXgBdlfaYJyACAATABDAEQATABDAEQAIABNAOAAdQBGAGEAcgBlAGIAbgD9ACAATABDAEQEJgQyBDUEQgQ9BD4EOQAgBBYEGgAtBDQEOARBBD8EOwQ1BDkAQwBvAGwAbwB1AHIAIABMAEMARABMAEMARAAgAGMAbwB1AGwAZQB1AHIAVwBhAHIAbgBhACAATABDAEQJMAkCCRcJQAkoACAATABDAEQATABDAEQAIA4qDjUATABDAEQAIABlAG4AIABjAG8AbABvAHIARgBhAHIAYgAtAEwAQwBEAEMAbwBsAG8AcgAgAEwAQwBEAEwAQwBEACAAQwBvAGwAbwByAGkAZABvAEsAbwBsAG8AcgAgAEwAQwBEA4gDswPHA8EDyQO8A7cAIAO/A7gDzAO9A7cAIABMAEMARABGAOQAcgBnAC0ATABDAEQAUgBlAG4AawBsAGkAIABMAEMARABMAEMARAAgAGEAIABDAG8AcgBlAHMwqzDpMPwATABDAER0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIxAABYWVogAAAAAAAA8xYAAQAAAAEWylhZWiAAAAAAAACDywAAPcn///+7WFlaIAAAAAAAAEtmAACywwAACspYWVogAAAAAAAAJ6QAAA90AADIp2N1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANgA7AEAARQBKAE8AVABZAF4AYwBoAG0AcgB3AHwAgQCGAIsAkACVAJoAnwCjAKgArQCyALcAvADBAMYAywDQANUA2wDgAOUA6wDwAPYA+wEBAQcBDQETARkBHwElASsBMgE4AT4BRQFMAVIBWQFgAWcBbgF1AXwBgwGLAZIBmgGhAakBsQG5AcEByQHRAdkB4QHpAfIB+gIDAgwCFAIdAiYCLwI4AkECSwJUAl0CZwJxAnoChAKOApgCogKsArYC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AopaQUUAGKWiigBaWiigAooooAKKKKACiiigAooooAKKKKACiiigApTSUUALQKSloAU0lHSigA+tJSmkoAKKKKACiiigAFFLRQAlFFL+tAAPSn00DvTqACiiigAooooAKKKKACiikoAWiiigtIKKKKBhRRRQB//Q98ooor+yD+OwooooAKKKKACiiigAooooAKd2pKKAClpKWgApaMUtABRRRQAUUUUAFFFFABRRRQAUUUe9ABRRRQAUUUUAFL1oHvRj0oASinYpDQAYozxSUU2AUUUUgCiiigApcYpKWgBKXrSUUAGDTlpAKeOKACiiigAooooAKKKKACkxS0UAFFFFA0gooooLCiiigAooooA//9H3yiiiv7IP47CiiigAooooAXikoooAKKXNGKACijvS0AJSiiloAKWiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWjmlpaAEzSH3o70GmgEooopMAooooAKKKWgAFJRQKAClopwHegAFLRRQAUUUUAFFFFABRRRQAUUUUAFFFFBogooooAKKKKACiiigD//S98ooor+yD+OwooooAKKKKAClpKXtQAlLSUpoAKWiigBaBS0UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACg4p2ab2ooAWk70vvTadgCiiigAooopAFFFFABS0lKcUAJRRRQAoFOFIAeKdQAUUUUAFFFFABRRSUALRRRQAUUUUFJBRRRQUFFFFABRRRQAUv4UlLg0Af/0/fKKKK/sg/jsKKXrSUAFLSUtACUvakpfegABxS0lLQAlOpKdQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFKKSigB1JS0H1oATJpKUnNJTAKKKKQBRRRQAUUUUAL2pKKKAFoAzRTgMUALRRRQAUUUUAFFFFABRRRQAUUUUDSCiiigsKKKKACiiigAopaSgAoopce1AH//U98ooor+yD+OwoopaAEoopaAClpOlHNAC0Ue9LigApaKKACiiigAooooAKKKKACiiigAooooAKKKKACilpKAF60lKKMUAFFJzRTQBRRRSAKKKKACiiigBaKMmkoAKKKUdaADGelPoooAKKKKACiiigAooooAKKKKACiiigtIKKKKBhRRRQAUUUUAFFFLQAlFKaXFAH//V98ooor+yD+OwpaSloASlooFAC9aKOlFAB9adSCloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACl6mkoxQA7FNHFOApopoBc9qSiihgFFFFIAooooAKXmgUUAB4pKOtFABTgO9C9adQAUUUUAFFFFABRRRQAUUUUAFFFFA0gooooLCiiigAooooAKKKKAClzRRQAlLg0dKXFK4H/1vfKUYo7Ulf2Qfx2FLRxR0oAKBS4FJ3oAXFLSU6gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFpaKO9ACdKDjtQaSmAGiiikAUUUUAFFFLQAUlKaSgB1GPSkpwoABS0UUAFFFFABRRRQAUUUUAFFFFABRRRQWFFFFAwooooAKKKKAClxRRQAlKKKWkwDFLk+lHSk/z0qWyGz//1/fKKKWv7IP47AUUdKSgBaUUlLQAU6kpaACiiigAooooAKKKKACiiigAooooAKKXHGaSgApe1FHXigA7UlL0pf8APSgBOlBpaQ0AJRR7UU2wCiiikAUUUUAFKOeKKSgAooooAUU+kHSloAKKKKACiiigAooooAKKKSgBaKKKCkgooooKCiiigAooooAKBRS4oAKKKBQAoopKcOahkNh/WloopCP/0PfKWiiv7IP47ClpKWgApRQPWloAKKKKACiiigAooooAKKKKACiiigAooooAXPakpe1JQAUopKcOlACHrzSnHakNIKAF+lJS460lMAooopAFFFFABS0g9aWgBKKKKACnY5FJTx0oAMYooooAKKKKACiiigAooooAKKKKBpBRRRQWFFFFABRRRQAUUUUAFFFAoAWlpKUUmAuMUDNFLUGYUUUUAf/R9970UUtf2Qfx2FGKKWgBaKKKACiiigAooooAKKKKACiiigAooooAKKKKAFHekopRQAvvSZo60CgA7UlKaSnsAUUUUgCiiigAoopRQAlL/SkpaAEoopcUAOAwaWiigAooooAKKKKACiiigApKWigAooooLQUUUUDCiiigAooooAKDRS0AJS0lL7UAL0paQU6obIbCiiikIKKKKAP/0vfaWkpa/sg/jsXFLSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSjmgA96UYpMc4oxQAtHNGKKAE60lLnvSUAFFFFABSUtFAC0dKSigBTSUvWjFAAP508DFNAzzTqACiiigAooooAKKKSgBaKKKACiiigqIUUUUFBRRRQAUUUUAFFFFABRRRQAU7iigVLYmKOlLRRUkBRRRQAUUUUAf/9P36lopa/sg/jsKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFOO1A60cUfSgBaMgUUhoASiiiqsAUUUVIBRRRQAUCilFABQetFA9KAClHpSfSnAUALRRRQAUUUUAFFFFABRRRQAUUUUDSCiiigsKKKKACiiigAopaSgApe1JS0AJS0UopMAxSiilqDO4UUUUAFFFLQAlFFFAH//U9/paKK/sg/jsKKKKACiiigAooooAKKKKACiiigAooooAKKXHekoAUDNGaARR3oAUdKQ0Gkp2AKKKKQBRRRQAUUUUALRmikoAWkopRQAop1FFABRRRQAUUUUAFFFFABRRRQAUUUUFpBRRRQMKKKKACiiigA9qWkpaAEpQaSlxQAd6UUClqGyGxaKKKQgooooAKKKKACiiigD/1foCiiiv7IP47CiiigAooooAKKKKACiiigAooooAKKKKAF5pKWjrQACiloNACd6SlpKYBRRRSAKKKKAClIpMUtACUUvWkoAXrTgPWmgc0+gAooooAKKKKACiiigAooooAKKKKCkgooooKCiiigAooooAKXFJS0AJS0lLQAUtJS0mJ7C0tFFQQFFFFABxS0lFABRRRQAUUUUAf//W+gKKKK/sg/jsKKKKACiiigAooooAKKKKACilxxmkoAKKUY70lAC0Cj3ozQA4U3HOaSinYAooopAFFFFABRRRQAUUUUAFLRTgPWgBR0ooooAKKKKACiiigAooooAKKKKBoKKKKCwooooAKKKKAClpKWgBKWkpelACUtFA5oYMWlopazMwooooAKKKKAFpKKKACiiigAooooA//9f6Aooor+yD+OwooooAKKKKACiiigAooooAXJ6UlFFACigigUuKAEpDS4pKaAWkNBooYBRRSUgFooooAKKWkoAKXj8aSjvQAuDT6AMUUAFFFFABRRRQAUUUUAJS0UUAFFFFBSQUUUUFBRRRQAUUUUAFFFL9aACjrSUvFABTsUlOBxUyJkJS0ZzRUkhRRRQAUUUUAFFFFABRRRQAUUUUAf/Q+gKKKK/sg/jsKKKKACiiigAooooAKKKKAFxiijtSjpQAUUUnTrQAE9qSiimAUUUUgCiiigBKd2pKU9aACkpaSgBT0pQO9JTh0oAWiiigAooooAKKKKACiiigAooooKSCiiigoKKKKACiiigAoopaAEoopaACgUUvIpNibCnUgpaggKKKKACiiigAooooAKKKKACiiigAooooA//R+gKKKK/sg/jsKKKKACiiigAooooAKU4pKWgBaKTrxRQAfSg0opAcUwEooopAFFFFABRRS0AA5oo6UlAC+1JRSgZoAcBiloooAKKKKACiiigAooooAKKKKACiiigtbBRRRQMKKKKACiiigAooooAWj6UlLQACndaBS1DIbCiiikIKKKWgBKKKKACiiigAooooAKKKKACiiigD/9L6Aooor+yD+OwooooAKKKKACiilFAB0opW602gBcd6XFB6ClPSgBppDzS0lABRRRQAUUhpaAClBpKKACiiigBafTB/Wn0AFFFFABRRRQAUUUUAFJS00dTQA6iiigaCiiigsKKKKACiiloASilFHagBKWijtQAUoFC9aVPvUmJij3opT1pKggKKKUdaAEopzdabQAUUUUAFFFFABRRRQAUUUUAFFFFAH//Z",
      },
    },
  ],
};

export const fetchedDocument2 = {
  content: [
    {
      attachment: {
        contentType: "application/pdf",
        title: "Lab Result Form",
        data: "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",
      },
    },
  ],
};
