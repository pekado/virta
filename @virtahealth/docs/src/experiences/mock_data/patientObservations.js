export const buildA1cPanelObservation = (panelObsId, obsId, obsValue) => {
  return {
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
    id: panelObsId,
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
        id: obsId,
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
          value: obsValue,
        },
      },
    ],
  };
};

export const buildLipidPanelObservation = (panelObsId, obsId, obsValue) => {
  return {
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
      text: "Lipid Panel",
      coding: [{ code: "24331-1" }],
    },
    effectiveDateTime: "2019-12-02T16:02:00+00:00",
    id: panelObsId,
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
        id: obsId,
        identifier: [
          {
            system: "https://www.healthgorilla.com",
            value: "health_gorilla_id_5",
          },
        ],
        issued: "2019-12-03T07:05:00.000+00:00",
        referenceRange: [
          {
            text: "100 - 199",
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
          value: obsValue,
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
              code: "1884-6",
              display: "Apolipoprotein B",
              system: "http://loinc.org",
            },
          ],
          text: "Apoliprotein B",
        },
        effectiveDateTime: "2019-12-03T04:39:00+00:00",
        id: `observation-ApoB-${obsId}`,
        identifier: [
          {
            system: "https://www.healthgorilla.com",
            value: "health_gorilla_id_5",
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
          unit: "mg/dL",
          value: 100,
        },
      },
    ],
  };
};

export const fetchedObservationsDR1 = [
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
      text: "Lipid Panel",
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
            text: "100 - 199",
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
            text: "0 - 149",
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
              code: "2085-9",
              display: "HDLc SerPl-mCnc",
              system: "http://loinc.org",
            },
          ],
          text: "HDLc SerPl-mCnc",
        },
        effectiveDateTime: "2019-12-03T04:39:00+00:00",
        id: "observation-6",
        identifier: [
          {
            system: "https://www.healthgorilla.com",
            value: "health_gorilla_id_7",
          },
        ],
        issued: "2019-12-03T07:05:00.000+00:00",
        referenceRange: [
          {
            text: ">39",
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
          value: 43,
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
              code: "13458-5",
              display: "VLDLc SerPl Calc-mCnc",
              system: "http://loinc.org",
            },
          ],
          text: "VLDLc SerPl Calc-mCnc",
        },
        effectiveDateTime: "2019-12-03T04:39:00+00:00",
        id: "observation-7",
        identifier: [
          {
            system: "https://www.healthgorilla.com",
            value: "health_gorilla_id_8",
          },
        ],
        issued: "2019-12-03T07:05:00.000+00:00",
        referenceRange: [
          {
            text: "5 - 40",
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
          value: 44,
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
              code: "13457-7",
              display: "LDLc SerPl Calc-mCnc",
              system: "http://loinc.org",
            },
          ],
          text: "LDLc SerPl Calc-mCnc",
        },
        effectiveDateTime: "2019-12-03T04:39:00+00:00",
        id: "observation-8",
        identifier: [
          {
            system: "https://www.healthgorilla.com",
            value: "health_gorilla_id_9",
          },
        ],
        issued: "2019-12-03T07:05:00.000+00:00",
        referenceRange: [
          {
            text: "0 - 99",
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
          value: 130,
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
    id: "observation-31",
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
        id: "observation-32",
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
          unit: "[arb'U]/mL",
          value: 23.4,
        },
      },
    ],
  },
];

export const fetchedObservationsDR2 = [
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
        text: "Laboratory",
      },
    ],
    code: {
      coding: [
        {
          code: "24331-1",
        },
      ],
      text: "Lipid Panel",
    },
    effectiveDateTime: "2020-06-22T15:31:00+00:00",
    id: "observation-9",
    issued: "2020-06-23T17:06:00.000+00:00",
    performer: [
      {
        display: "LabCorp",
        reference: "Organization/lab-corp-id",
      },
    ],
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
              display: "Cholesterol, Total",
              system: "http://loinc.org",
            },
          ],
          text: "Cholesterol, Total",
        },
        effectiveDateTime: "2020-06-23T09:27:00+00:00",
        id: "observation-12",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 199,
            },
            low: {
              value: 100,
            },
            text: "100 - 199",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 88,
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
              display: "Triglycerides",
              system: "http://loinc.org",
            },
          ],
          text: "Triglycerides",
        },
        effectiveDateTime: "2020-06-23T09:27:00+00:00",
        id: "observation-13",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 149,
            },
            low: {
              value: 0,
            },
            text: "0 - 149",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 162,
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
              code: "2085-9",
              display: "HDL Cholesterol",
              system: "http://loinc.org",
            },
          ],
          text: "HDL Cholesterol",
        },
        effectiveDateTime: "2020-06-23T10:19:00+00:00",
        id: "observation-14",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            low: {
              value: 39,
            },
            text: ">39",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 27,
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
              code: "13458-5",
              display: "VLDL Cholesterol Cal",
              system: "http://loinc.org",
            },
          ],
          text: "VLDL Cholesterol Cal",
        },
        effectiveDateTime: "2020-06-23T09:27:00+00:00",
        id: "observation-15",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 40,
            },
            low: {
              value: 5,
            },
            text: "5 - 40",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 32,
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
              code: "13457-7",
              display: "LDL Cholesterol Calc",
              system: "http://loinc.org",
            },
          ],
          text: "LDL Cholesterol Calc",
        },
        effectiveDateTime: "2020-06-23T10:19:00+00:00",
        id: "observation-16",
        issued: "2020-06-23T17:06:00.000+00:00",
        performer: [
          {
            reference: "#1",
          },
        ],
        referenceRange: [
          {
            high: {
              value: 99,
            },
            low: {
              value: 0,
            },
            text: "0 - 99",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 29,
        },
      },
    ],
    resourceType: "Observation",
    status: "unknown",
    subject: {
      reference: "Patient/patient-1",
    },
  },
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
          display: "Lipoprofile panel - Serum or Plasma",
          system: "http://loinc.org",
        },
      ],
      text: "Lipoprofile panel - Serum or Plasma",
    },
    effectiveDateTime: "2020-10-12T05:00:00Z",
    id: "33eb8473-917e-403c-ac4d-3b38a566e8be",
    issued: "2020-10-12T05:00:00Z",
    meta: {
      lastUpdated: "2021-05-17T15:34:18.830838+00:00",
      versionId: "MTYyMTI2NTY1ODgzMDgzODAwMA",
    },
    related: [
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
              code: "54434-6",
              display: "LDL Particle Number",
              system: "http://loinc.org",
            },
          ],
          text: "LDL Particle Number",
        },
        effectiveDateTime: "2020-10-12T05:00:00Z",
        id: "e6bd032b-7857-4478-8d49-e3233c2f6b0d",
        issued: "2020-10-12T05:00:00Z",
        meta: {
          lastUpdated: "2021-05-17T15:34:18.255394+00:00",
          versionId: "MTYyMTI2NTY1ODI1NTM5NDAwMA",
        },
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueString: ">1000",
      },
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
              display: "LDL Particle Size",
              system: "http://loinc.org",
            },
          ],
          text: "LDL Particle Size",
        },
        effectiveDateTime: "2020-10-12T05:00:00Z",
        id: "58430b98-2fa9-4b07-8a2c-ecf74e51375b",
        issued: "2020-10-12T05:00:00Z",
        meta: {
          lastUpdated: "2021-05-17T15:34:18.392233+00:00",
          versionId: "MTYyMTI2NTY1ODM5MjIzMzAwMA",
        },
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "nm",
          value: 1.4,
        },
      },
    ],
    resourceType: "Observation",
    status: "final",
    subject: {
      reference: "Patient/patient-1",
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
        text: "Laboratory",
      },
    ],
    code: {
      text: "Hemoglobin A1c",
    },
    effectiveDateTime: "2020-06-22T15:31:00+00:00",
    id: "observation-10",
    issued: "2020-06-23T17:06:00.000+00:00",
    performer: [
      {
        display: "LabCorp",
        reference: "Organization/f1599624-c0f5-4040-8cdc-ee5f1dbf77df",
      },
    ],
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
        effectiveDateTime: "2020-06-23T17:00:00+00:00",
        id: "observation-17",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 5.6,
            },
            low: {
              value: 4.8,
            },
            text: "4.8 - 5.6",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "%",
          value: 7.3,
        },
      },
    ],
    resourceType: "Observation",
    status: "unknown",
    subject: {
      reference: "Patient/patient-1",
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
        text: "Laboratory",
      },
    ],
    code: {
      coding: [
        {
          code: "24323-8",
        },
      ],
      text: "Comp. Metabolic Panel (14)",
    },
    effectiveDateTime: "2020-06-22T15:31:00+00:00",
    id: "observation-12",
    issued: "2020-06-23T17:06:00.000+00:00",
    performer: [
      {
        display: "LabCorp",
        reference: "Organization/lab-corp-id",
      },
    ],
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
              code: "2345-7",
              display: "Glucose",
              system: "http://loinc.org",
            },
          ],
          text: "Glucose",
        },
        effectiveDateTime: "2020-06-23T09:16:00+00:00",
        id: "observation-18",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 99,
            },
            low: {
              value: 65,
            },
            text: "65 - 99",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 155,
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
              code: "3094-0",
              display: "BUN",
              system: "http://loinc.org",
            },
          ],
          text: "BUN",
        },
        effectiveDateTime: "2020-06-23T09:13:00+00:00",
        id: "observation-19",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 24,
            },
            low: {
              value: 6,
            },
            text: "6 - 24",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 10,
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
              code: "2160-0",
              display: "Creatinine",
              system: "http://loinc.org",
            },
          ],
          text: "Creatinine",
        },
        effectiveDateTime: "2020-06-23T09:16:00+00:00",
        id: "observation-35",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 1.27,
            },
            low: {
              value: 0.76,
            },
            text: "0.76 - 1.27",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 0.94,
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
              code: "88294-4",
              display: "eGFR If NonAfricn Am",
              system: "http://loinc.org",
            },
          ],
          text: "eGFR If NonAfricn Am",
        },
        effectiveDateTime: "2020-06-23T09:16:00+00:00",
        id: "observation-20",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            low: {
              value: 59,
            },
            text: " >59",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mL/min/1.73",
          value: 96,
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
              code: "88293-6",
              display: "eGFR If Africn Am",
              system: "http://loinc.org",
            },
          ],
          text: "eGFR If Africn Am",
        },
        effectiveDateTime: "2020-06-23T09:16:00+00:00",
        id: "observation-21",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            low: {
              value: 59,
            },
            text: " >59",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mL/min/1.73",
          value: 111,
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
              code: "3097-3",
              display: "BUN/Creatinine Ratio",
              system: "http://loinc.org",
            },
          ],
          text: "BUN/Creatinine Ratio",
        },
        effectiveDateTime: "2020-06-23T09:16:00+00:00",
        id: "observation-22",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 20,
            },
            low: {
              value: 9,
            },
            text: "9 - 20",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          value: 11,
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
              code: "2951-2",
              display: "Sodium",
              system: "http://loinc.org",
            },
          ],
          text: "Sodium",
        },
        effectiveDateTime: "2020-06-23T09:01:00+00:00",
        id: "observation-23",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 144,
            },
            low: {
              value: 134,
            },
            text: "134 - 144",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mmol/L",
          value: 141,
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
              code: "2823-3",
              display: "Potassium",
              system: "http://loinc.org",
            },
          ],
          text: "Potassium",
        },
        effectiveDateTime: "2020-06-23T09:04:00+00:00",
        id: "observation-24",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 5.2,
            },
            low: {
              value: 3.5,
            },
            text: "3.5 - 5.2",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mmol/L",
          value: 4.8,
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
              code: "2075-0",
              display: "Chloride",
              system: "http://loinc.org",
            },
          ],
          text: "Chloride",
        },
        effectiveDateTime: "2020-06-23T09:01:00+00:00",
        id: "observation-25",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 106,
            },
            low: {
              value: 96,
            },
            text: "96 - 106",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mmol/L",
          value: 100,
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
              code: "2028-9",
              display: "Carbon Dioxide, Total",
              system: "http://loinc.org",
            },
          ],
          text: "Carbon Dioxide, Total",
        },
        effectiveDateTime: "2020-06-23T09:12:00+00:00",
        id: "observation-26",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 29,
            },
            low: {
              value: 20,
            },
            text: "20 - 29",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mmol/L",
          value: 24,
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
              code: "17861-6",
              display: "Calcium",
              system: "http://loinc.org",
            },
          ],
          text: "Calcium",
        },
        effectiveDateTime: "2020-06-23T09:12:00+00:00",
        id: "observation-27",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 10.2,
            },
            low: {
              value: 8.7,
            },
            text: "8.7 - 10.2",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 9.7,
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
              code: "2885-2",
              display: "Protein, Total",
              system: "http://loinc.org",
            },
          ],
          text: "Protein, Total",
        },
        effectiveDateTime: "2020-06-23T10:43:00+00:00",
        id: "observation-28",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 8.5,
            },
            low: {
              value: 6,
            },
            text: "6.0 - 8.5",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "g/dL",
          value: 6.1,
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
              code: "1751-7",
              display: "Albumin",
              system: "http://loinc.org",
            },
          ],
          text: "Albumin",
        },
        effectiveDateTime: "2020-06-23T09:15:00+00:00",
        id: "observation-29",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 5,
            },
            low: {
              value: 4,
            },
            text: "4.0 - 5.0",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "g/dL",
          value: 4.4,
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
              code: "10834-0",
              display: "Globulin, Total",
              system: "http://loinc.org",
            },
          ],
          text: "Globulin, Total",
        },
        effectiveDateTime: "2020-06-23T10:43:00+00:00",
        id: "observation-30",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 4.5,
            },
            low: {
              value: 1.5,
            },
            text: "1.5 - 4.5",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "g/dL",
          value: 1.7,
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
              code: "1759-0",
              display: "A/G Ratio",
              system: "http://loinc.org",
            },
          ],
          text: "A/G Ratio",
        },
        effectiveDateTime: "2020-06-23T10:43:00+00:00",
        id: "observation-31",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 2.2,
            },
            low: {
              value: 1.2,
            },
            text: "1.2 - 2.2",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          value: 2.6,
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
              code: "1975-2",
              display: "Bilirubin, Total",
              system: "http://loinc.org",
            },
          ],
          text: "Bilirubin, Total",
        },
        effectiveDateTime: "2020-06-23T09:14:00+00:00",
        id: "observation-32",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 1.2,
            },
            low: {
              value: 0,
            },
            text: "0.0 - 1.2",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "mg/dL",
          value: 0.2,
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
              code: "6768-6",
              display: "Alkaline Phosphatase",
              system: "http://loinc.org",
            },
          ],
          text: "Alkaline Phosphatase",
        },
        effectiveDateTime: "2020-06-23T10:43:00+00:00",
        id: "observation-34",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 117,
            },
            low: {
              value: 39,
            },
            text: "39 - 117",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "IU/L",
          value: 35,
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
              code: "1920-8",
              display: "AST (SGOT)",
              system: "http://loinc.org",
            },
          ],
          text: "AST (SGOT)",
        },
        effectiveDateTime: "2020-06-23T09:14:00+00:00",
        id: "observation-33",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 40,
            },
            low: {
              value: 0,
            },
            text: "0 - 40",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "IU/L",
          value: 28,
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
              code: "1742-6",
              display: "ALT (SGPT)",
              system: "http://loinc.org",
            },
          ],
          text: "ALT (SGPT)",
        },
        effectiveDateTime: "2020-06-23T09:15:00+00:00",
        id: "observation-36",
        issued: "2020-06-23T17:06:00.000+00:00",
        referenceRange: [
          {
            high: {
              value: 44,
            },
            low: {
              value: 0,
            },
            text: "0 - 44",
          },
        ],
        resourceType: "Observation",
        status: "final",
        subject: {
          reference: "Patient/patient-1",
        },
        valueQuantity: {
          unit: "IU/L",
          value: 29,
        },
      },
    ],
    resourceType: "Observation",
    status: "unknown",
    subject: {
      reference: "Patient/patient-1",
    },
  },
];

export const fetchedValueQuantityObservations = [
  {
    code: { text: "Comp. Metabolic Panel (14)" },
    id: "test-observation-id",
    issued: "2019-10-09T16:06:00.000+00:00",
    related: [
      {
        code: {
          coding: [
            {
              code: "2345-7",
              display: "Glucose",
              system: "http://loinc.org",
            },
          ],
          text: "Glucose",
        },
        issued: "2019-10-09T16:06:00.000+00:00",

        valueQuantity: {
          system: "http://unitsofmeasure.org",
          unit: "mg/dL",
          value: 117,
        },
      },
      {
        code: {
          coding: [
            {
              code: "42719-5",
              display: "Alkaline Phosphatase",
              system: "http://loinc.org",
            },
          ],
          text: "Alkaline Phosphatase",
        },
        issued: "2019-10-09T16:06:00.000+00:00",
        valueQuantity: {
          system: "http://unitsofmeasure.org",
          unit: "U/L",
          value: 1.1,
        },
      },
    ],
  },
  {
    code: { text: "Lipids" },
    id: "test-observation-id-2",
    issued: "2019-10-09T16:06:00.000+00:00",
    related: [
      {
        code: {
          coding: [
            {
              code: "2345-7",
              display: "HDL",
              system: "http://loinc.org",
            },
          ],
          text: "HDL",
        },
        issued: "2019-10-09T16:06:00.000+00:00",

        valueQuantity: {
          system: "http://unitsofmeasure.org",
          unit: "mg/dL",
          value: 117,
        },
      },
      {
        code: {
          coding: [
            {
              code: "42719-5",
              display: "Triglycerides",
              system: "http://loinc.org",
            },
          ],
          text: "Triglycerides",
        },
        issued: "2019-10-09T16:06:00.000+00:00",
        valueQuantity: {
          system: "http://unitsofmeasure.org",
          unit: "mg/dL",
          value: 100,
        },
      },
    ],
  },
  {
    code: { text: "Albumin/Creatinine Ratio, Urine" },
    id: "test-observation-id-3",
    issued: "2019-10-10T16:06:00.000+00:00",
    related: [
      {
        code: {
          coding: [
            {
              code: "2345-7",
              display: "Creatinine, Urine",
              system: "http://loinc.org",
            },
          ],
          text: "HDL",
        },
        issued: "2019-10-10T16:06:00.000+00:00",

        valueQuantity: {
          system: "http://unitsofmeasure.org",
          unit: "mg/dL",
          value: 150,
        },
      },
      {
        code: {
          coding: [
            {
              code: "42719-5",
              display: "Albumin, Urine",
              system: "http://loinc.org",
            },
          ],
          text: "Total Cholesterol",
        },
        issued: "2019-10-10T16:06:00.000+00:00",
        valueQuantity: {
          system: "http://unitsofmeasure.org",
          unit: "ug/dL",
          value: 100,
        },
      },
    ],
  },
];

export const fetchedObservationsDR3 = [
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
      text: "C-Peptide",
      coding: [{ code: "95080-8" }],
    },
    effectiveDateTime: "2020-04-25T17:06:00+00:00",
    id: "observation-30",
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "health_gorilla_id_2",
      },
    ],
    issued: "2020-04-25T17:06:00+00:00",
    performer: [
      {
        display: "LabCorp",
        reference: "Organization/lab-corp-id",
      },
    ],
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
              code: "1986-9",
              display: "C-Peptide",
              system: "http://loinc.org",
            },
          ],
          text: "C-Peptide",
        },
        effectiveDateTime: "2019-12-03T06:42:00+00:00",
        id: "observation-31",
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
          unit: "ng/mL",
          value: 10.4,
        },
      },
    ],
  },
];

export const fetchedObservationsDR4 = [
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
      text: "C-Peptide",
      coding: [{ code: "95080-8" }],
    },
    effectiveDateTime: "2020-09-28T17:06:00+00:00",
    id: "observation-40",
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "health_gorilla_id_2",
      },
    ],
    issued: "2020-09-28T17:06:00+00:00",
    performer: [
      {
        display: "LabCorp",
        reference: "Organization/lab-corp-id",
      },
    ],
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
              code: "1986-9",
              display: "C-Peptide",
              system: "http://loinc.org",
            },
          ],
          text: "C-Peptide",
        },
        effectiveDateTime: "2019-12-03T06:42:00+00:00",
        id: "observation-41",
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
          unit: "ng/mL",
          value: 9.3,
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
      text: "Clinical Trial",
    },
    effectiveDateTime: "2020-09-28T17:06:00+00:00",
    id: "observation-49",
    identifier: [
      {
        system: "https://www.healthgorilla.com",
        value: "health_gorilla_id_2",
      },
    ],
    issued: "2020-09-28T17:06:00+00:00",
    performer: [
      {
        display: "LabCorp",
        reference: "Organization/lab-corp-id",
      },
    ],
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
              code: "704-7",
              display: "Baso (Abs)",
              system: "http://loinc.org",
            },
          ],
          text: "Baso (Abs)",
        },
        effectiveDateTime: "2019-12-03T06:42:00+00:00",
        id: "observation-48",
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
          unit: "10*3/uL",
          value: 0,
        },
      },
    ],
  },
];
