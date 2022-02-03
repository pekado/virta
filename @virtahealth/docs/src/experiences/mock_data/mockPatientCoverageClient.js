import {
  GET_COVERAGES,
  UPDATE_COVERAGE,
  CREATE_COVERAGE,
  GET_PATIENT,
  GET_ELIGIBILITY_RESPONSES,
} from "@virtahealth/experiences";

const patientTest = {
  meta: {
    versionId: {
      value: "MTYxNTUwNjQ5MTU4MTQ2NDAwMA",
    },
  },
  gender: {
    value: 2,
  },
  birthDate: {
    valueUs: 1715385600000000,
  },
  name: [
    {
      family: {
        value: "Smith",
      },
      use: {
        value: 1,
      },
      given: [
        {
          value: "Terry",
        },
      ],
    },
    {
      family: {
        value: "Smith",
      },
      use: {
        value: 2,
      },
      given: [
        {
          value: "Terrr",
        },
      ],
    },
  ],
};
const updateCoverage = {
  id: {
    value: "dc00122c-7359-45bb-8ae6-9ec7a00aee13",
  },
  grouping: {
    group: {
      value: "100 test plan",
    },
    plan: {
      value: "Update Cigna",
    },
  },
  order: {
    value: 1,
  },
  period: {
    start: "1615240175000000",
  },
  meta: {
    versionId: {
      value: "MTYxNTI0MDgwODA5MzA1OTAwMA",
    },
    lastUpdated: {
      valueUs: 1615334517855062,
    },
  },
  subscriberId: {
    value: "14321-12121",
  },
};

const createCoverage = {
  id: {
    value: "40d9bd52-edea-46c8-84a5-42e003f01502",
  },
};

const eligbilityResponse = {
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
};

export const mocks = [
  {
    request: {
      query: GET_ELIGIBILITY_RESPONSES,
      variables: {
        patientId: "40d9bd52-edea-46c8-84a5-42e003f01502",
      },
    },
    result: () => {
      return {
        data: {
          eligibilityResponses: [eligbilityResponse],
        },
      };
    },
  },
  {
    request: {
      query: GET_COVERAGES,
      variables: {
        patientId: "40d9bd52-edea-46c8-84a5-42e003f01502",
      },
    },
    result: () => {
      return {
        data: {
          coverages: [
            {
              id: {
                value: "dc00122c-7359-45bb-8ae6-9ec7a00aee13",
              },
              grouping: {
                group: {
                  value: "9999",
                },
                plan: {
                  value: "test plan",
                },
              },
              order: {
                value: 1,
              },
              period: {
                start: "1300233600000000",
              },
              meta: {
                versionId: {
                  value: "MTYxNDAzNDA5NjAyMjM5NDAwMA",
                },
                lastUpdated: {
                  valueUs: 1615334517855020,
                },
              },
              subscriberId: {
                value: "9999",
              },
            },
            {
              id: {
                value: "dc00122c-7359-45bb-8ae6-9ec7a00aee13",
              },
              grouping: {
                group: {
                  value: "100 test plan",
                },
                plan: {
                  value: "Cigna",
                },
              },
              order: {
                value: 1,
              },
              period: {
                start: "1615240175000000",
              },
              meta: {
                versionId: {
                  value: "MTYxNTI0MDgwODA5MzA1OTAwMA",
                },
                lastUpdated: {
                  valueUs: 1615334517855062,
                },
              },
              subscriberId: {
                value: "14321-12121",
              },
            },
          ],
        },
      };
    },
  },
  {
    request: {
      query: GET_PATIENT,
      variables: {
        patientId: "40d9bd52-edea-46c8-84a5-42e003f01502",
      },
    },
    result: () => {
      return {
        data: {
          patient: { patientTest },
        },
      };
    },
  },
  {
    request: {
      query: GET_PATIENT,
      variables: {
        patientId: "40d9bd52-edea-46c8-84a5-42e003f01502",
      },
    },
    result: () => {
      return {
        data: {
          patient: { patientTest },
        },
      };
    },
  },
  {
    request: {
      query: GET_ELIGIBILITY_RESPONSES,
      variables: {
        patientId: "40d9bd52-edea-46c8-84a5-42e003f01502",
      },
    },
    result: () => {
      return {
        data: {
          eligibilityResponses: [eligbilityResponse],
        },
      };
    },
  },
  {
    request: {
      query: CREATE_COVERAGE,
      variables: {
        patientId: "40d9bd52-edea-46c8-84a5-42e003f01502",
        memberId: "14321-12121",
        groupId: "100 test plan",
        planName: "Cigna",
      },
    },
    result: {
      data: { coverage: createCoverage },
    },
  },
  {
    request: {
      query: UPDATE_COVERAGE,
      variables: {
        coverage: updateCoverage,
        coverageId: "dc00122c-7359-45bb-8ae6-9ec7a00aee13",
        versionId: "MTYxNTI0MDgwODA5MzA1OTAwMA",
      },
    },
    result: {
      updateCoverage: {
        data: {
          coverage: {
            id: {
              value: "40d9bd52-edea-46c8-84a5-42e003f01502",
            },
          },
        },
      },
    },
  },
  {
    request: {
      query: GET_COVERAGES,
      variables: {
        patientId: "40d9bd52-edea-46c8-84a5-42e003f01502",
      },
    },
    result: () => {
      return {
        data: {
          coverages: [
            undefined,
            {
              id: {
                value: "dc00122c-7359-45bb-8ae6-9ec7a00aee13",
              },
              grouping: {
                group: {
                  value: "New Group Id",
                },
                plan: {
                  value: "New Plan Cigna",
                },
              },
              order: {
                value: 1,
              },
              period: {
                start: "1615240175000000",
              },
              meta: {
                versionId: {
                  value: "MTYxNTI0MDgwODA5MzA1OTAwMA",
                },
              },
              subscriberId: {
                value: "New member id 14321-12121",
              },
            },
          ],
        },
      };
    },
  },
];
