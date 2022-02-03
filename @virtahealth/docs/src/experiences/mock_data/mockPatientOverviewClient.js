import { GET_PATIENT_OVERVIEW_AND_OBSERVATIONS } from "@virtahealth/experiences";
import {
  formatDate,
  startOfDay,
  subDays,
  subWeeks,
  endOfDay,
} from "@virtahealth/utils";

const now = new Date();
const yesterday = subDays(now, 1);
const oneWeekAgo = startOfDay(subWeeks(now, 1));
const twoWeeksAgo = startOfDay(subWeeks(now, 2));

const dayFormat = "yyyy-MM-dd";
const dateFormat = "yyyy-MM-dd HH:mm:ss";
const microsecondsDateFormat = "yyyy-MM-dd HH:mm:ss.SSSSSS";

const nowSeconds = formatDate(now, dateFormat);
const nowUs = formatDate(now, microsecondsDateFormat);
const yesterdayDate = formatDate(yesterday, dayFormat);
const oneWeekAgoUs = formatDate(oneWeekAgo, microsecondsDateFormat);
const oneWeekAgoEODUs = formatDate(
  endOfDay(oneWeekAgo),
  microsecondsDateFormat
);

const end = formatDate(endOfDay(now), dateFormat);
const start = formatDate(twoWeeksAgo, dateFormat);

export const mocks = [
  {
    request: {
      query: GET_PATIENT_OVERVIEW_AND_OBSERVATIONS,
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
            id: 9999,
            baselineA1c: {
              value: { value: "8.7" },
              effective: twoWeeksAgo.toString(),
            },
            dob: "1999-12-31",
            eA1c: {
              status: "normal",
              upper: "9.1234567",
              lower: "8.5555555",
              estimatedValue: "8.9876543",
            },
            gender: "f",
            lastAppSession: "2020-10-12 19:34:36",
            summaryStatementFreetext:
              "T2DM. New dx. HL. Migraine. Hypothyroid. Works as exec assistant at ACME Corp. Her boss knows Sami Inkinen.",
            glucoseObservations: [
              { effective: nowSeconds, value: { value: "100.1234123" } },
              { effective: oneWeekAgoUs, value: { value: "90.1111111" } },
              {
                effective: oneWeekAgoEODUs,
                value: { value: "89.666666" },
              },
            ],
            ketonesObservations: [
              { effective: nowUs, value: { value: "1.01231" } },
              { effective: oneWeekAgoUs, value: { value: "0.71123" } },
              {
                effective: oneWeekAgoEODUs,
                value: { value: "0.5484562" },
              },
            ],
            weightObservations: [
              {
                effective: oneWeekAgoEODUs,
                value: {
                  value: "150.123498761234",
                },
              },
              {
                effective: nowUs,
                value: {
                  value: "155.12341234",
                },
              },
              {
                effective: oneWeekAgoUs,
                value: {
                  value: "145.8543",
                },
              },
            ],
            screeners: [
              {
                completedOn: "2021-01-14 17:58:02.188888+00:00",
              },
              {
                completedOn: `${yesterdayDate} 17:00:00.000000+00:00`,
              },
              {
                completedOn: "2021-01-09 18:07:48.830753+00:00",
              },
            ],
          },
        },
      };
    },
  },
];
