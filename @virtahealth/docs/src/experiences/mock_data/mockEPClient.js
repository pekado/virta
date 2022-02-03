import { MockInsuranceCard } from "./mockInsuranceResponses";
import {
  MockGetCoverages,
  MockPatchCoverages,
  MockPostCoverage,
} from "./mockCoveragesResponse";
import {
  MockGetEligibilityResponsesIneligible,
  MockGetEligibilityResponsesEligible,
} from "./mockEligibilityResponse";

const fetchedPatient = {
  firstName: "Courtbourt",
  lastName: "Tiger",
  dateOfBirth: "1990-02-09",
  gender: "m",
  sexAtBirth: undefined,
};

const mockPatchPatient = {
  firstName: "New Courtbourt",
  lastName: "Tiger",
  dateOfBirth: "1991-02-05",
  gender: "m",
  sexAtBirth: "f",
};

let counter = 0;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default class MockEPClient {
  get(url) {
    if (url === `/coverages`) {
      return Promise.resolve(MockGetCoverages);
    }
    if (url === `/users/self`) {
      return Promise.resolve(fetchedPatient);
    }
    if (url === `/eligibility_responses`) {
      counter++;
      if (counter >= 4 && counter < 8) {
        return Promise.resolve(MockGetEligibilityResponsesIneligible);
      } else if (counter >= 8) {
        return Promise.resolve(MockGetEligibilityResponsesEligible);
      } else {
        // set to resolve Ineligible responses to test Ineligibe flow
        // return Promise.resolve(MockGetEligibilityResponsesIneligible);
        return Promise.resolve([]);
      }
    }
  }
  post(url, data) {
    if (url === `/coverage` && data) {
      return Promise.resolve(MockPostCoverage);
    }
    if (url === `/document_reference` && data) {
      return Promise.resolve(console.log("Post Images"));
    }
    if (url === `/insurance_card` && data) {
      // return Promise.reject(HttpError("", {id:"test-card", defaultMessage: "there's an issue"}));
      return delay(1000).then((t) => Promise.resolve(MockInsuranceCard));
    }
    if (url === `/insurance_info` && data) {
      return delay(1000).then((t) => Promise.resolve(data));
    }
    if (url === `/insurance_collection_sms` && data) {
      return Promise.reject("there's an issue");
    }
  }
  patch(url, body) {
    if (url === `/users/self` && body) {
      return Promise.resolve(mockPatchPatient);
    }
    if (url === `/coverage` && body) {
      return Promise.resolve(MockPatchCoverages);
    }
  }
}
