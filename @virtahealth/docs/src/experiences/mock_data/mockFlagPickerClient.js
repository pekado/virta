import {
  GET_PATIENT_FLAGS,
  CREATE_PATIENT_FLAG,
  DISMISS_PATIENT_FLAG,
} from "@virtahealth/experiences";

export const mocks = [
  {
    request: {
      query: DISMISS_PATIENT_FLAG,
      variables: {
        flagId: "40d9bd52-edea-46c8-84a5-42e003f01502",
        versionId: "MTU5NzYyNzEzNDI2NDEzNjAwMA",
      },
    },
    result: () => {
      return {
        data: {
          updateFlagStatus: {
            ok: true,
          },
        },
      };
    },
  },
  {
    request: {
      query: CREATE_PATIENT_FLAG,
      variables: {
        virtaId: "b95b3d18-f648-4dea-8aae-c0cd3beb01b4",
        codeText: "Budget Conscious",
      },
    },
    result: () => {
      return {
        data: {
          createPatientFlag: {
            flagId: "40d9bd52-edea-46c8-84a5-42e003f01502",
            versionId: 'value: "MTU5NzYyNzEzNDI2NDEzNjAwMA"\n',
          },
        },
      };
    },
  },
  {
    request: {
      query: GET_PATIENT_FLAGS,
      variables: {
        userId: 9999,
      },
    },
    result: () => {
      return {
        data: {
          user: {
            virtaId: "b95b3d18-f648-4dea-8aae-c0cd3beb01b4",
            flags: [
              {
                id: "f10eacb6-55c4-448c-803b-7a5252f7a9c7",
                status: "ACTIVE",
                code: {
                  text: "DMOC",
                },
                meta: {
                  versionId: "MTU5Njc1MTk4MDcxODE2MjAwMA",
                },
              },
              {
                id: "40d9bd52-edea-46c8-84a5-42e003f01502",
                status: "ACTIVE",
                code: {
                  text: "Budget Conscious",
                },
                meta: {
                  versionId: "MTU5NzYyNzEzNDI2NDEzNjAwMA",
                },
              },
              {
                id: "06b54ca1-567f-49fe-821b-888868a25634",
                status: "ACTIVE",
                code: {
                  text: "In Release",
                },
                meta: {
                  versionId: "MTU5Njc1MTk4MDcxODE2MjAwMA",
                },
              },
              {
                id: "a61a0167-8173-4d85-ba8a-48e240fa0cf6",
                status: "ACTIVE",
                code: {
                  text: "Vegetarian",
                },
                meta: {
                  versionId: "MTU5Njc1MTk4MDcxODE2MjAwMA",
                },
              },
              {
                id: "8e8f514e-fbcf-44b0-b040-1b17ec3f71d8",
                status: "ACTIVE",
                code: {
                  text: "NightShift",
                },
                meta: {
                  versionId: "MTU5Njc1MTk4MDcxODE2MjAwMA",
                },
              },
              {
                id: "f8e1adeb-2b3e-4405-b344-2aa9a565214a",
                status: "ACTIVE",
                code: {
                  text: "Chronic Migraines",
                },
                meta: {
                  versionId: "MTU5Njc1MTk4MDcxODE2MjAwMA",
                },
              },
            ],
          },
        },
      };
    },
  },
];
