import { GET_PRACTITIONERS_AND_ORGANIZATIONS } from "@virtahealth/experiences";
import {
  fetchedDocument1,
  fetchedDocument2,
  fetchedLabResult,
} from "./patientLabResult";
import {
  fetchedObservationsDR1,
  fetchedObservationsDR2,
  fetchedValueQuantityObservations,
} from "./patientObservations";

export default class MockSparkClient {
  get(url) {
    switch (url) {
      case "/labs/lab_results?virta_id=testVirtaId":
        return Promise.resolve(fetchedLabResult);
      case "/labs/lab_results?virta_id=testLoadingFailure":
        return Promise.reject({ status: 500 });
      case "/labs/observations?lab_result_id=diagnostic-report-1":
        return Promise.resolve(fetchedObservationsDR1);
      case "/labs/observations?lab_result_id=diagnostic-report-2":
        return Promise.resolve(fetchedObservationsDR2);
      case "/labs/observations?lab_result_id=test-lab-result-id-valueQuantity-obs-only":
        return Promise.resolve(fetchedValueQuantityObservations);
      case "/labs/lab_result_attachment/document-ref-1":
        return Promise.resolve(fetchedDocument1);
      case "/labs/lab_result_attachment/document-ref-2":
        return Promise.resolve(fetchedDocument2);
    }
  }

  patch(url, body) {
    if (url === `/labs/lab_result/diagnostic-report-2`) {
      return Promise.resolve({ status: 200, body });
    }
  }

  post(url, body) {
    if (url === "/labs/lab_results") {
      return Promise.resolve({ status: 200, body });
    }
  }
}

export const mocks = [
  {
    request: {
      query: GET_PRACTITIONERS_AND_ORGANIZATIONS,
    },
    result: () => {
      return {
        data: {
          practitioners: [
            {
              active: true,
              id: "3f647fa3-8846-491c-ab7f-113d2de745dc",
              identifier: [
                {
                  system: "https://www.virtahealth.com",
                  value: "185",
                },
              ],
              name: [
                {
                  family: "",
                  given: [],
                  text: "Test Doctor 1",
                },
              ],
            },
            {
              active: true,
              id: "9a75109e-c441-498a-806e-9135a6d6d758",
              identifier: [
                {
                  system: "https://www.virtahealth.com",
                  value: "184",
                },
              ],
              name: [
                {
                  family: "",
                  given: [],
                  text: "Test Doctor 2",
                },
              ],
            },
            {
              active: true,
              id: "9a75109e-c441-498a-806e-9135a6d6d123",
              identifier: [
                {
                  system: "https://www.virtahealth.com",
                  value: "186",
                },
              ],
              name: [
                {
                  family: "",
                  given: [],
                  text: "Test Doctor 2",
                },
              ],
            },
          ],
          organizations: [
            {
              id: "a222b6c2-1a01-404e-92cc-07c5058c957c",
              name: "Quest",
            },
            {
              id: "39815e8b-1d5d-4cb6-951b-e95a54d581eb",
              name: "LabCorp",
            },
          ],
        },
      };
    },
  },
];
