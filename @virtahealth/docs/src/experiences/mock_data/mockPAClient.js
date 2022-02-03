import { fetchedSkills } from "./skillActions";
import {
  mockBehavioralHealthQuestionnaire,
  mockBehavioralHealthFollowUp,
} from "./mockBehavioralHealthQuestionnaire";
import { explorePage } from "./explorePage";
import { recommendedContent } from "./recommendedContent";
import { mockSanityArticle, mockSanityRecipe } from "./mockSanityArticle";

export default class MockPAClient {
  get(url) {
    console.log(url);
    if (url === `/api/v1/actions/templates?location=skills`) {
      return Promise.resolve(fetchedSkills);
    }
    if (
      url ===
      `/api/v1/screeners/mock-fhir-questionnaire-id?patientActionId=mock-patient-action-id`
    ) {
      return Promise.resolve(mockBehavioralHealthQuestionnaire);
    }
    if (url.indexOf(`/api/v1/collections`) > -1) {
      return Promise.resolve(explorePage);
    }
    if (url.indexOf("/api/v1/content_recommendations") > -1) {
      return Promise.resolve(recommendedContent);
    }
    if (url.indexOf(`/content`) > -1) {
      return Promise.resolve(mockSanityRecipe);
    }
  }
  post(url, data) {
    if (
      url ===
        `/api/v1/screeners/mock-fhir-questionnaire-id/response?patientActionId=mock-patient-action-id` &&
      data
    ) {
      return Promise.resolve(mockBehavioralHealthFollowUp);
    }
  }
}
