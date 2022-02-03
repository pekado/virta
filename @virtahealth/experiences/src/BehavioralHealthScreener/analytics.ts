import {
  ClickEventProperties,
  ViewEventProperties,
  VirtaAnalyticsClient,
} from "@virtahealth/components";
import { ANALYTICS_EVENTS, COMMON_ANALYTICS_PROPERTIES } from "./constants";

interface BaseAnalyticsProperties {
  analyticsClient: VirtaAnalyticsClient;
  patientActionId: string;
}

interface FollowUpAnalyticsProperties extends BaseAnalyticsProperties {
  skillName: string;
}

interface QuestionItemAnalyticsProperties extends BaseAnalyticsProperties {
  answerDisplay: string;
  questionDisplay: string;
}

export const trackScreenerViewed = ({
  analyticsClient,
  patientActionId,
}: BaseAnalyticsProperties) => {
  const properties: ViewEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    patient_action_id: patientActionId,
  };
  analyticsClient.logViewEvent(ANALYTICS_EVENTS.VIEW.SCREENER, properties);
};

export const trackScreenerFollowUpViewed = ({
  analyticsClient,
  patientActionId,
  skillName,
}: FollowUpAnalyticsProperties) => {
  const properties: ViewEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    patient_action_id: patientActionId,
    skill_name: skillName,
  };
  analyticsClient.logViewEvent(
    ANALYTICS_EVENTS.VIEW.SCREENER_FOLLOW_UP,
    properties
  );
};

export const trackScreenerAnswerClicked = ({
  analyticsClient,
  answerDisplay,
  patientActionId,
  questionDisplay,
}: QuestionItemAnalyticsProperties) => {
  const properties: ClickEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    patient_action_id: patientActionId,
    screener_question_display: questionDisplay,
    screener_answer_display: answerDisplay,
  };
  analyticsClient.logClickEvent(
    ANALYTICS_EVENTS.CLICK.SCREENER_ANSWER,
    properties
  );
};

export const trackScreenerCompletionScreenViewed = ({
  analyticsClient,
  patientActionId,
}: BaseAnalyticsProperties) => {
  const properties: ViewEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    patient_action_id: patientActionId,
  };
  analyticsClient.logViewEvent(
    ANALYTICS_EVENTS.VIEW.SCREENER_COMPLETION_SCREEN,
    properties
  );
};

export const trackScreenerFollowUpLearnButtonClicked = ({
  analyticsClient,
  patientActionId,
  skillName,
}: FollowUpAnalyticsProperties) => {
  const properties: ClickEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    patient_action_id: patientActionId,
    skill_name: skillName,
  };
  analyticsClient.logClickEvent(
    ANALYTICS_EVENTS.CLICK.SKILL_LEARN_BUTTON,
    properties
  );
};

export const trackScreenerFollowUpDismissButtonClicked = ({
  analyticsClient,
  patientActionId,
  skillName,
}: FollowUpAnalyticsProperties) => {
  const properties: ClickEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    patient_action_id: patientActionId,
    skill_name: skillName,
  };
  analyticsClient.logClickEvent(
    ANALYTICS_EVENTS.CLICK.SKILL_LEARN_DISMISS_BUTTON,
    properties
  );
};
