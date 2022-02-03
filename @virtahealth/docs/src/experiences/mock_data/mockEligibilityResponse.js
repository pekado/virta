export const MockGetEligibilityResponsesIneligible = [
  {
    id: {
      value: "a3718b6d-3666-4a2b-ad44-9237a7899e79",
    },
    meta: {
      versionId: {
        value: "MTYxNDM2Nzg0MDM1NjIyMTAwMA",
      },
      lastUpdated: {
        valueUs: "1614980265081881",
      },
    },
    outcome: {
      coding: [
        {
          system: {
            value:
              "https://fhir.virtahealth.com/StructureDefinition/EligibilityStatus",
          },
          code: {
            value: "Ineligible",
          },
        },
        {
          system: {
            value:
              "https://fhir.virtahealth.com/StructureDefinition/EligibilityReason",
          },
          code: {
            value: "File: match member id",
          },
        },
      ],
    },
  },
];
export const MockGetEligibilityResponsesEligible = [
  {
    id: {
      value: "a3718b6d-3666-4a2b-ad44-9237a7899e77",
    },
    meta: {
      versionId: {
        value: "sdfsdzg0MDM1NjIyMTAwMas",
      },
      lastUpdated: {
        valueUs: "1614980265082884",
      },
    },
    outcome: {
      coding: [
        {
          system: {
            value:
              "https://fhir.virtahealth.com/StructureDefinition/EligibilityStatus",
          },
          code: {
            value: "Eligible",
          },
        },
        {
          system: {
            value:
              "https://fhir.virtahealth.com/StructureDefinition/EligibilityReason",
          },
          code: {
            value: "File: match member id",
          },
        },
      ],
    },
    contained: [
      {
        coverage: {
          id: { value: "coverage" },
          identifier: [
            {
              system: {
                value:
                  "https://virta.lightning.force.com/lightning/r/Deployment__c",
              },
              value: { value: "123" },
            },
          ],
          policyHolder: {
            patientId: {
              value: "Patient/063cc907-b08e-4553-b209-aa55c155ecfc",
            },
          },
          subscriberId: { value: "654987mem" },
          period: { start: { valueUs: "1595980894488986", timezone: "UTC" } },
          grouping: {
            group: { value: "123456" },
            plan: { value: "Testplan 1" },
          },
        },
      },
      {
        patient: {
          birthDate: {
            valueUs: 1715385600000000,
          },
          name: [
            {
              family: {
                value: "Tigerr",
              },
              use: {
                value: 1,
              },
              given: [
                {
                  value: "Courtbourt",
                },
              ],
            },
            {
              family: {
                value: "Tigerr",
              },
              use: {
                value: 2,
              },
              given: [
                {
                  value: "Courtbourt",
                },
              ],
            },
          ],
        },
      },
    ],
    identifier: [
      {
        system: {
          value:
            "https://eligibility-service-prod.virta.us/v1/EligibilityValidationId",
        },
        value: { value: "123" },
      },
    ],
    status: { value: "ACTIVE" },
    request: {
      eligibilityRequestId: { value: "063cc907-b08e-4553-b209-aa55c155ecfc" },
    },
    insurance: [
      {
        coverage: {
          coverageId: { value: "063cc907-b08e-4553-b209-aa55c155ecfc" },
        },
      },
    ],
  },
];
