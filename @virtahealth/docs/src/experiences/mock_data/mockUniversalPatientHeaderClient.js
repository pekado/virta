import { GET_PATIENT_DETAILS_AND_FLAGS } from "@virtahealth/experiences";
import {
  formatDate,
  startOfDay,
  subMonths,
  endOfDay,
} from "@virtahealth/utils";

const now = new Date();
const one_month_ago = startOfDay(subMonths(now, 1));

const dateFormat = "yyyy-MM-dd HH:mm:ss";
const end = formatDate(endOfDay(now), dateFormat);
const start = formatDate(one_month_ago, dateFormat);

export const mocks = [
  {
    request: {
      query: GET_PATIENT_DETAILS_AND_FLAGS,
      variables: {
        id: 9999,
        start: start,
        end: end,
      },
    },
    result: () => {
      return {
        data: {
          user: {
            adaptedOn: formatDate(now, dateFormat),
            firstName: "Nichiketa",
            nickname: "Nicki",
            lastName: "Choudhary",
            id: 9999,
            photoUrl:
              "https://s3-us-west-2.amazonaws.com/ketoaccountimagesprod/default_coach.png",
            registeredOn: "2015-08-27 00:32:10",
            timezone: "US/Pacific",
            heightIn: 66,
            personalGoal:
              "Improve Energy Level.\nLower my A1C.\nLower my blood pressure.\nLose weight.\n\n\n\n\n\n\n\n\n\n",
            primaryWhy: "Having More Energy",
            subtype: "Veterans-Health-Administration",
            weightObservations: [
              {
                effective: "2020-08-20 23:34:21",
                value: {
                  value: "150.0",
                },
              },
              {
                effective: "2020-08-21 16:56:18",
                value: {
                  value: "155.0",
                },
              },
              {
                effective: "2020-08-19 22:04:17.290620",
                value: {
                  value: "145.0",
                },
              },
            ],
            flags: [
              {
                id: "f10eacb6-55c4-448c-803b-7a5252f7a9c7",
                status: "ACTIVE",
                code: {
                  text: "DMOC",
                },
              },
              {
                id: "06b54ca1-567f-49fe-821b-888868a25634",
                status: "ACTIVE",
                code: {
                  text: "In Release",
                },
              },
              {
                id: "a61a0167-8173-4d85-ba8a-48e240fa0cf6",
                status: "ACTIVE",
                code: {
                  text: "Vegetarian",
                },
              },
              {
                id: "8e8f514e-fbcf-44b0-b040-1b17ec3f71d8",
                status: "ACTIVE",
                code: {
                  text: "NightShift",
                },
              },
              {
                id: "f8e1adeb-2b3e-4405-b344-2aa9a565214a",
                status: "ACTIVE",
                code: {
                  text: "Chronic Migraines",
                },
              },
              {
                id: "2e0c67fc-f370-4e73-a838-b452858a9347",
                status: "ACTIVE",
                code: {
                  text: "CGM",
                },
              },
            ],
            provider: {
              id: "1",
              photoUrl:
                "https://s3-us-west-2.amazonaws.com/ketoaccountimagesprod/clinicians/JeffS.jpg",
              fullname: "Jeff Stanley",
            },
            coveringProvider: {
              id: "2",
              photoUrl:
                "https://s3-us-west-2.amazonaws.com/ketoaccountimagesprod/coaches/Caroline.jpg",
              fullname: "Caroline Roberts",
            },
            coach: {
              id: "3",
              photoUrl:
                "https://s3-us-west-2.amazonaws.com/ketoaccountimagesprod/coaches/Catherine.jpg",
              fullname: "Catherine Metzgar",
            },
            coveringCoach: {
              id: "4",
              photoUrl:
                "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/IMG_8348.JPG",
              fullname: "Lauren Wagner",
            },
            billableCondition: {
              code: {
                text: "Some Billable Condition",
              },
            },
            currentPlanDefinition: {
              title: {
                value: "Current Plan Title",
              },
            },
            preferredLanguage: {
              language: {
                coding: [
                  {
                    display: "Spanish",
                    code: "es",
                  },
                ],
              },
            },
          },
        },
      };
    },
  },
];
