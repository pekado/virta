/* eslint-disable max-lines */
import { MessageDescriptor } from "react-intl";
import { en } from "./en";

import { messages as forms } from "./messages/common/forms";
import { messages as login } from "./messages/common/login";
import { messages as navigation } from "./messages/common/navigation";
import { messages as primitives } from "./messages/common/primitives";
import { messages as profile } from "./messages/common/profile";

import { messages as languages } from "./messages/constants/languages";
import { messages as months } from "./messages/constants/months";
import { messages as numbers } from "./messages/constants/numbers";
import { messages as states } from "./messages/constants/states";

import { messages as aboutYou1 } from "./messages/enrollment/aboutYou1";
import { messages as aboutYou2 } from "./messages/enrollment/aboutYou2";
import { messages as aboutYou3 } from "./messages/enrollment/aboutYou3";
import { messages as aboutYou4 } from "./messages/enrollment/aboutYou4";
import { messages as basicInformation } from "./messages/enrollment/basicInformation";
import { messages as eligibility } from "./messages/enrollment/eligibility";
import { messages as finalSteps } from "./messages/enrollment/finalSteps";
import { messages as healthProfile1 } from "./messages/enrollment/healthProfile1";
import { messages as healthProfile2 } from "./messages/enrollment/healthProfile2";
import { messages as healthProfile3 } from "./messages/enrollment/healthProfile3";
import { messages as healthProfile4 } from "./messages/enrollment/healthProfile4";
import { messages as healthProfile5 } from "./messages/enrollment/healthProfile5";
import { messages as healthProfile6 } from "./messages/enrollment/healthProfile6";
import { messages as healthProfile7 } from "./messages/enrollment/healthProfile7";
import { messages as healthProfile8 } from "./messages/enrollment/healthProfile8";
import { messages as intakeScheduling } from "./messages/enrollment/intakeScheduling";
import { messages as leadCapture } from "./messages/enrollment/leadCapture";
import { messages as status } from "./messages/enrollment/status";
import { messages as physicianSearch } from "./messages/enrollment/physicianSearch";
import { messages as disqualifications } from "./messages/enrollment/disqualifications";
import { messages as nonQualifications } from "./messages/enrollment/nonQualifications";
import { messages as popularFood } from "./messages/food/popular";
import { messages as virtaMeter } from "./messages/biomarkers/virtaMeter";

/**
 * Phase out direct usage of this object over time. Prefer usage of messageTree.
 * Until we figure out a better validation scheme, we can continue to spread
 * messages out here to that verifyTranslations.ts can check them easily, as
 * well as for backwards compatibility.
 */
export const messages: Record<string, MessageDescriptor> = {
  fillAllFields: {
    id: "fillAllFields",
    description:
      "generic error response to send if the request has an issue, used in EP",
    defaultMessage: en.fillAllFields,
  },
  somethingWrongLoggedOut: {
    id: "somethingWrongLoggedOut",
    description:
      "generic error response to send if the user is logged out, used in EP",
    defaultMessage: en.somethingWrongLoggedOut,
  },
  somethingWrongOurEnd: {
    id: "somethingWrongOurEnd",
    description:
      "generic error response to send if the server has an issue, used in EP",
    defaultMessage: en.somethingWrongOurEnd,
  },
  bloodPressure: {
    id: "bloodPressure",
    defaultMessage: en.bloodPressure,
    description:
      "Simply the phrase Blood Pressure. Used in atlas, participant_app_ios, participant_app_py",
  },
  glucose: {
    id: "glucose",
    defaultMessage: en.glucose,
    description:
      "Simply the phrase Blood Glucose. Used in atlas, participant_app_ios, participant_app_py",
  },
  ketones: {
    id: "ketones",
    defaultMessage: en.ketones,
    description:
      "Simply the word Ketones. Used in atlas, participant_app_ios, participant_app_py",
  },
  symptoms: {
    id: "symptoms",
    defaultMessage: en.symptoms,
    description:
      "Simply the word Symptoms. Used in atlas, participant_app_ios, participant_app_py",
  },
  emptyString: {
    id: "emptyString",
    defaultMessage: en.emptyString,
    description:
      "An empty string with a space to prevent the id from being used",
  },
  greetingMorning: {
    id: "greetingMorning",
    defaultMessage: en.greetingMorning,
    description:
      "A personalized morning greeting. Used in participant_app_ios, participant_app_py",
  },
  greetingEvening: {
    id: "greetingEvening",
    defaultMessage: en.greetingEvening,
    description:
      "A personalized evening greeting. Used in participant_app_ios, participant_app_py",
  },
  greetingAfternoon: {
    id: "greetingAfternoon",
    defaultMessage: en.greetingAfternoon,
    description:
      "A personalized afternoon greeting. Used in participant_app_ios, participant_app_py",
  },
  today: {
    id: "today",
    defaultMessage: en.today,
    description:
      "The word Today. Used in participant_app_ios, participant_app_py",
  },
  history: {
    id: "history",
    defaultMessage: en.history,
    description:
      "The word History. Used in participant_app_ios, participant_app_py",
  },
  coaching: {
    id: "coaching",
    defaultMessage: en.coaching,
    description:
      "The word Coaching. Used in participant_app_ios, participant_app_py",
  },
  community: {
    id: "community",
    defaultMessage: en.community,
    description:
      "The word Community. Used in participant_app_ios, participant_app_py",
  },
  more: {
    id: "more",
    defaultMessage: en.more,
    description:
      "The word More. Used in participant_app_ios, participant_app_py",
  },
  learn: {
    id: "learn",
    defaultMessage: en.learn,
    description:
      "The word Learn. Used in participant_app_ios, participant_app_py",
  },
  support: {
    id: "support",
    defaultMessage: en.support,
    description:
      "The word Support. Used in participant_app_ios, participant_app_py",
  },
  test: {
    id: "test",
    defaultMessage: en.test,
    description:
      "The word Test. Used in participant_app_ios, participant_app_py",
  },
  logOut: {
    id: "logOut",
    defaultMessage: en.logOut,
    description:
      "The phrase Log out. Used in participant_app_ios, participant_app_py",
  },
  profileTitle: {
    id: "profileTitle",
    defaultMessage: en.profileTitle,
    description:
      "The title for links to a user profile. Used in participant_app_ios, participant_app_py",
  },
  settings: {
    id: "settings",
    defaultMessage: en.settings,
    description:
      "The word Settings. Used in participant_app_ios, participant_app_py",
  },
  weeklySummary: {
    id: "weeklySummary",
    defaultMessage: en.weeklySummary,
    description:
      "The phrase Weekly Summary. Used in participant_app_ios, participant_app_py",
  },
  carePlanTitle: {
    id: "carePlanTitle",
    defaultMessage: en.carePlanTitle,
    description:
      "The title for links to a user's care plan. Used in participant_app_ios, participant_app_py",
  },
  hrLoveTitle: {
    id: "hrLoveTitle",
    defaultMessage: en.hrLoveTitle,
    description:
      "The title for links to a user's hr department. Used in participant_app_ios, participant_app_py",
  },
  skills: {
    id: "skills",
    defaultMessage: en.skills,
    description:
      "The word Skills. Used in participant_app_ios, participant_app_py",
  },
  resourceCenter: {
    id: "resourceCenter",
    defaultMessage: en.resourceCenter,
    description:
      "The phrase Resource Center. Used in participant_app_ios, participant_app_py",
  },
  educationalVideos: {
    id: "educationalVideos",
    defaultMessage: en.educationalVideos,
    description:
      "The phrase Educational Videos. Used in participant_app_ios, participant_app_py",
  },
  foodGuide: {
    id: "foodGuide",
    defaultMessage: en.foodGuide,
    description:
      "The phrase Food Guide. Used in participant_app_ios, participant_app_py",
  },
  virtaCheatSheet: {
    id: "virtaCheatSheet",
    defaultMessage: en.virtaCheatSheet,
    description:
      "The phrase Virta Cheat Sheet. Used in participant_app_ios, participant_app_py",
  },
  testNotificationsButton: {
    id: "testNotificationsButton",
    defaultMessage: en.testNotificationsButton,
    description:
      "The label for the button to test push notifications. Used in participant_app_ios, participant_app_py",
  },
  supportCenter: {
    id: "supportCenter",
    defaultMessage: en.supportCenter,
    description:
      "The phrase Support Center. Used in participant_app_ios, participant_app_py",
  },
  requestSupplies: {
    id: "requestSupplies",
    defaultMessage: en.requestSupplies,
    description:
      "The phrase Request Supplies. Used in participant_app_ios, participant_app_py",
  },
  coachChangeTitle: {
    id: "coachChangeTitle",
    defaultMessage: en.coachChangeTitle,
    description:
      "The title for links to change one's coach. Used in participant_app_ios, participant_app_py",
  },
  feedback: {
    id: "feedback",
    defaultMessage: en.feedback,
    description:
      "The word Feedback. Used in participant_app_ios, participant_app_py",
  },
  biomarkerHeading: {
    id: "biomarkerHeading",
    defaultMessage: en.biomarkerHeading,
    description:
      "Heading for biomarkers in the Today screen. Used in participant_app_ios, participant_app_py",
  },
  symptomFrequency: {
    id: "symptomFrequency",
    defaultMessage: en.symptomFrequency,
    description:
      "Frequency description for symptom tracking. Used in participant_app_ios, participant_app_py",
  },
  biomarkerFrequencyAtLeast: {
    id: "biomarkerFrequencyAtLeast",
    defaultMessage: en.biomarkerFrequencyAtLeast,
    description:
      "Frequency description for biomarker tracking for reversal plan patients. Used in participant_app_ios, participant_app_py",
  },
  biomarkerFrequencySuggested: {
    id: "biomarkerFrequencySuggested",
    defaultMessage: en.biomarkerFrequencySuggested,
    description:
      "Frequency description for biomarker tracking for non-reversal plan patients. Used in participant_app_ios, participant_app_py",
  },
  week: {
    id: "week",
    defaultMessage: en.week,
    description:
      "The word week. Used in participant_app_ios, participant_app_py",
  },
  day: {
    id: "day",
    defaultMessage: en.day,
    description:
      "The word day. Used in participant_app_ios, participant_app_py",
  },
  tryAgain: {
    id: "tryAgain",
    defaultMessage: en.tryAgain,
    description:
      "The phrase Try Again. Used in participant_app_ios, participant_app_py",
  },
  delete: {
    id: "delete",
    defaultMessage: en.delete,
    description:
      "The word Delete. Used in participant_app_ios, participant_app_py",
  },
  biomarkerSaveError: {
    id: "biomarkerSaveError",
    defaultMessage: en.biomarkerSaveError,
    description:
      "Error message when a biomarker failed to save. Used in participant_app_ios, participant_app_py",
  },
  dailyLog: {
    id: "dailyLog",
    defaultMessage: en.dailyLog,
    description:
      "The phrase Daily Log. Used in participant_app_ios, participant_app_py",
  },
  cancel: {
    id: "cancel",
    defaultMessage: en.cancel,
    description:
      "The word Cancel. Used in participant_app_ios, participant_app_py",
  },
  confirm: {
    id: "confirm",
    defaultMessage: en.confirm,
    description:
      "The word Confirm. Used in participant_app_ios, participant_app_py",
  },
  timeOfMeasurementLabel: {
    id: "timeOfMeasurementLabel",
    defaultMessage: en.timeOfMeasurementLabel,
    description:
      "The label for the datetime input of biomarker measurements. Used in participant_app_ios, participant_app_py",
  },
  accessibilityButtonLabel: {
    id: "accessibilityButtonLabel",
    defaultMessage: en.accessibilityButtonLabel,
    description:
      "The accessibility label for buttons, which takes the label of the button and turns it into an accessibility label. Used in participant_app_ios, participant_app_py",
  },
  save: {
    id: "save",
    defaultMessage: en.save,
    description:
      "The word Save. Used in participant_app_ios, participant_app_py",
  },
  over: {
    id: "over",
    defaultMessage: en.over,
    description:
      "The word over. Used in participant_app_ios, participant_app_py",
  },
  accessibilityInputLabel: {
    id: "accessibilityInputLabel",
    defaultMessage: en.accessibilityInputLabel,
    description:
      "The accessibility label for inputs, which takes the label of the input and turns it into an accessibility label. Used in participant_app_ios, participant_app_py",
  },
  cuffIssues: {
    id: "cuffIssues",
    defaultMessage: en.cuffIssues,
    description:
      "Title for help section for users with blood pressure cuff issues. Used in participant_app_ios, participant_app_py",
  },
  supportArticleViewLink: {
    id: "supportArticleViewLink",
    defaultMessage: en.supportArticleViewLink,
    description:
      "Link label for viewing a support center article. Used in participant_app_ios, participant_app_py",
  },
  "mg/dl": {
    id: "mg/dl",
    defaultMessage: en["mg/dl"],
    description:
      "Unit of measurement for mg/dl. Used in participant_app_ios, participant_app_py",
  },
  lbs: {
    id: "lbs",
    defaultMessage: en.lbs,
    description:
      "Unit of measurement for lbs. Used in participant_app_ios, participant_app_py",
  },
  "mmol/L": {
    id: "mmol/L",
    defaultMessage: en["mmol/L"],
    description:
      "Unit of measurement for mmol/L. Used in participant_app_ios, participant_app_py",
  },
  "mm Hg": {
    id: "mm Hg",
    defaultMessage: en["mm Hg"],
    description:
      "Unit of measurement for mm Hg. Used in participant_app_ios, participant_app_py",
  },
  g: {
    id: "g",
    defaultMessage: en.g,
    description:
      "Unit of measurement for g. Used in participant_app_ios, participant_app_py",
  },
  oz: {
    id: "oz",
    defaultMessage: en.oz,
    description:
      "Unit of measurement for oz. Used in participant_app_ios, participant_app_py",
  },
  scaleIssues: {
    id: "scaleIssues",
    defaultMessage: en.scaleIssues,
    description:
      "Title for help section for users with weight scale issues. Used in participant_app_ios, participant_app_py",
  },
  troubleshootingViewLink: {
    id: "troubleshootingViewLink",
    defaultMessage: en.troubleshootingViewLink,
    description:
      "Link label for viewing a troubleshooting guide. Used in participant_app_ios, participant_app_py",
  },
  confirmWeight: {
    id: "confirmWeight",
    defaultMessage: en.confirmWeight,
    description:
      "The phrase Confirm Weight. Used in participant_app_ios, participant_app_py",
  },
  weightConfirmationWarning: {
    id: "weightConfirmationWarning",
    defaultMessage: en.weightConfirmationWarning,
    description:
      "A warning to the user that their weight may have been entered incorrectly and to confirm it. Used in participant_app_ios, participant_app_py",
  },
  confirmGlucose: {
    id: "confirmGlucose",
    defaultMessage: en.confirmGlucose,
    description: "The phrase Confirm Glucose. Used in participant_app_ios",
  },
  glucoseConfirmationWarning: {
    id: "glucoseConfirmationWarning",
    defaultMessage: en.glucoseConfirmationWarning,
    description:
      "A warning to the user that their glucose may have been entered incorrectly and to confirm it. Used in participant_app_ios",
  },
  glucoseReviseWarning: {
    id: "glucoseReviseWarning",
    defaultMessage: en.glucoseReviseWarning,
    description:
      "A warning to the user to update their entered glucose value. Used in participant_app_ios",
  },
  ok: {
    id: "ok",
    defaultMessage: en.ok,
    description: "The word OK. Used in participant_app_ios, participant_app_py",
  },
  highKetoneInstructions: {
    id: "highKetoneInstructions",
    defaultMessage: en.highKetoneInstructions,
    description:
      "Instructions on the ketones form for what to do if their meter reads HI. Used in participant_app_ios, participant_app_py",
  },
  ketoneSupplyTitle: {
    id: "ketoneSupplyTitle",
    defaultMessage: en.ketoneSupplyTitle,
    description:
      "Title for section pertaining to ketone supplies. Used in participant_app_ios, participant_app_py",
  },
  ketoneSupplyLink: {
    id: "ketoneSupplyLink",
    defaultMessage: en.ketoneSupplyLink,
    description:
      "Link label for getting ketone supplies. Used in participant_app_ios, participant_app_py",
  },
  confirmKetones: {
    id: "confirmKetones",
    defaultMessage: en.confirmKetones,
    description:
      "The phrase Confirm Ketones. Used in participant_app_ios, participant_app_py",
  },
  highKetonesConfirmationWarning: {
    id: "highKetonesConfirmationWarning",
    defaultMessage: en.highKetonesConfirmationWarning,
    description:
      "A warning for when a user's ketones are concerningly high, prompting for confirmation. Used in participant_app_ios, participant_app_py",
  },
  abnormalKetonesConfirmationWarning: {
    id: "abnormalKetonesConfirmationWarning",
    defaultMessage: en.abnormalKetonesConfirmationWarning,
    description:
      "A warning for when a user's ketones are concerningly abnormal, prompting for confirmation. Used in participant_app_ios, participant_app_py",
  },
  abnormalKetonesLess: {
    id: "abnormalKetonesLess",
    defaultMessage: en.abnormalKetonesLess,
    description:
      "The word less in the abnormalKetonesConfirmationWarning. Used in participant_app_ios, participant_app_py",
  },
  abnormalKetonesGreater: {
    id: "abnormalKetonesGreater",
    defaultMessage: en.abnormalKetonesGreater,
    description:
      "The word greater in the abnormalKetonesConfirmationWarning. Used in participant_app_ios, participant_app_py",
  },
  preMeal: {
    id: "preMeal",
    defaultMessage: en.preMeal,
    description:
      "The phrase Pre Meal. Used in participant_app_ios, participant_app_py",
  },
  afterMeal: {
    id: "afterMeal",
    defaultMessage: en.afterMeal,
    description:
      "The phrase After meal. Used in participant_app_ios, participant_app_py",
  },
  fasting: {
    id: "fasting",
    defaultMessage: en.fasting,
    description:
      "The word Fasting. Used in participant_app_ios, participant_app_py",
  },
  glucoseFastingDescription: {
    id: "glucoseFastingDescription",
    defaultMessage: en.glucoseFastingDescription,
    description:
      "A description for the fasting option when entering glucose reading. Used in participant_app_ios, participant_app_py",
  },
  glucoseAfterMealDescription: {
    id: "glucoseAfterMealDescription",
    defaultMessage: en.glucoseAfterMealDescription,
    description:
      "A description for the after meal option when entering glucose reading. Used in participant_app_ios, participant_app_py",
  },
  glucosePreMealDescription: {
    id: "glucosePreMealDescription",
    defaultMessage: en.glucosePreMealDescription,
    description:
      "A description for the pre meal option when entering glucose reading. Used in participant_app_ios, participant_app_py",
  },

  timeSinceMeal0: {
    id: "timeSinceMeal0",
    defaultMessage: en.timeSinceMeal0,
    description:
      "Time description since last meal when measuring glucose for no time. Used in participant_app_ios, participant_app_py, participant_app_py",
  },
  timeSinceMeal1: {
    id: "timeSinceMeal1",
    defaultMessage: en.timeSinceMeal1,
    description:
      "Time description since last meal when measuring glucose for less than 1 hour. Used in participant_app_ios, participant_app_py, participant_app_py",
  },
  timeSinceMeal2: {
    id: "timeSinceMeal2",
    defaultMessage: en.timeSinceMeal2,
    description:
      "Time description since last meal when measuring glucose for 2 hours. Used in participant_app_ios, participant_app_py, participant_app_py",
  },
  timeSinceMeal35: {
    id: "timeSinceMeal35",
    defaultMessage: en.timeSinceMeal35,
    description:
      "Time description since last meal when measuring glucose for less than 3-5 hours. Used in participant_app_ios, participant_app_py, participant_app_py",
  },
  timeSinceMeal68: {
    id: "timeSinceMeal68",
    defaultMessage: en.timeSinceMeal68,
    description:
      "Time description since last meal when measuring glucose for less than 6-8 hours. Used in participant_app_ios, participant_app_py, participant_app_py",
  },
  timeSinceMeal8: {
    id: "timeSinceMeal8",
    defaultMessage: en.timeSinceMeal8,
    description:
      "Time description since last meal when measuring glucose for less than 8+ hours. Used in participant_app_ios, participant_app_py, participant_app_py",
  },
  glucoseReadingInstructions: {
    id: "glucoseReadingInstructions",
    defaultMessage: en.glucoseReadingInstructions,
    description:
      "Instructions on how to read the glucose meter for special values. Used in participant_app_ios, participant_app_py",
  },
  readingType: {
    id: "readingType",
    defaultMessage: en.readingType,
    description:
      "The phrase Reading Type. Used in participant_app_ios, participant_app_py",
  },
  timeSinceMealPrompt: {
    id: "timeSinceMealPrompt",
    defaultMessage: en.timeSinceMealPrompt,
    description:
      "Prompt for the user to specify the time since their last meal when entering a glucose reading. Used in participant_app_ios, participant_app_py, participant_app_py",
  },
  meterIssues: {
    id: "meterIssues",
    defaultMessage: en.meterIssues,
    description:
      "Title for help section for users with glucose meter issues. Used in participant_app_ios, participant_app_py",
  },
  headache: {
    id: "headache",
    defaultMessage: en.headache,
    description:
      "The word Headache. Used in participant_app_ios, participant_app_py",
  },
  symptomCrampsTwitching: {
    id: "symptomCrampsTwitching",
    defaultMessage: en.symptomCrampsTwitching,
    description:
      "The symptom label for muscle cramps and twitching. Used in participant_app_ios, participant_app_py",
  },
  dizziness: {
    id: "dizziness",
    defaultMessage: en.dizziness,
    description:
      "The word Dizziness. Used in participant_app_ios, participant_app_py",
  },
  fatigue: {
    id: "fatigue",
    defaultMessage: en.fatigue,
    description:
      "The word Fatigue. Used in participant_app_ios, participant_app_py",
  },
  constipation: {
    id: "constipation",
    defaultMessage: en.constipation,
    description:
      "The word Constipation. Used in participant_app_ios, participant_app_py",
  },
  diarrhea: {
    id: "diarrhea",
    defaultMessage: en.diarrhea,
    description:
      "The word Diarrhea. Used in participant_app_ios, participant_app_py",
  },
  nausea: {
    id: "nausea",
    defaultMessage: en.nausea,
    description:
      "The word Nausea. Used in participant_app_ios, participant_app_py",
  },
  vomiting: {
    id: "vomiting",
    defaultMessage: en.vomiting,
    description:
      "The word Vomiting. Used in participant_app_ios, participant_app_py",
  },
  symptomFainting: {
    id: "symptomFainting",
    defaultMessage: en.symptomFainting,
    description:
      "The symptom label for fainting. Used in participant_app_ios, participant_app_py",
  },
  heartPalpitations: {
    id: "heartPalpitations",
    defaultMessage: en.heartPalpitations,
    description:
      "The phrase Heart Palpitations. Used in participant_app_ios, participant_app_py",
  },
  great: {
    id: "great",
    defaultMessage: en.great,
    description:
      "The word Great. Used in participant_app_ios, participant_app_py",
  },
  good: {
    id: "good",
    defaultMessage: en.good,
    description:
      "The word Good. Used in participant_app_ios, participant_app_py",
  },
  okay: {
    id: "okay",
    defaultMessage: en.okay,
    description:
      "The word Okay. Used in participant_app_ios, participant_app_py",
  },
  bad: {
    id: "bad",
    defaultMessage: en.bad,
    description:
      "The word Bad. Used in participant_app_ios, participant_app_py",
  },
  no: {
    id: "no",
    defaultMessage: en.no,
    description: "The word No. Used in participant_app_ios, participant_app_py",
  },
  sometimes: {
    id: "sometimes",
    defaultMessage: en.sometimes,
    description:
      "The word Sometimes. Used in participant_app_ios, participant_app_py",
  },
  often: {
    id: "often",
    defaultMessage: en.often,
    description:
      "The word Often. Used in participant_app_ios, participant_app_py",
  },
  always: {
    id: "always",
    defaultMessage: en.always,
    description:
      "The word Always. Used in participant_app_ios, participant_app_py",
  },
  yes: {
    id: "yes",
    defaultMessage: en.yes,
    description:
      "The word Yes. Used in participant_app_ios, participant_app_py",
  },
  high: {
    id: "high",
    defaultMessage: en.high,
    description:
      "The word High. Used in participant_app_ios, participant_app_py",
  },
  medium: {
    id: "medium",
    defaultMessage: en.medium,
    description:
      "The word Medium. Used in participant_app_ios, participant_app_py",
  },
  low: {
    id: "low",
    defaultMessage: en.low,
    description:
      "The word Low. Used in participant_app_ios, participant_app_py",
  },
  veryLow: {
    id: "veryLow",
    defaultMessage: en.veryLow,
    description:
      "The phrase Very Low. Used in participant_app_ios, participant_app_py",
  },
  symptomsCoachQuestion: {
    id: "symptomsCoachQuestion",
    defaultMessage: en.symptomsCoachQuestion,
    description:
      "Symptoms prompt to discuss with coach. Used in participant_app_ios, participant_app_py",
  },
  symptomsTroubleshootingQuestion: {
    id: "symptomsTroubleshootingQuestion",
    defaultMessage: en.symptomsTroubleshootingQuestion,
    description:
      "Symptoms prompt for more information. Used in participant_app_ios, participant_app_py",
  },
  symptomsTroubleshootingPrompt: {
    id: "symptomsTroubleshootingPrompt",
    defaultMessage: en.symptomsTroubleshootingPrompt,
    description:
      "Symptoms prompt when beginning troubleshooting. Used in participant_app_ios, participant_app_py",
  },
  selectAnswerPrompt: {
    id: "selectAnswerPrompt",
    defaultMessage: en.selectAnswerPrompt,
    description:
      "Prompt for the user to answer a missed question, takes a question parameter to quote. Used in participant_app_ios, participant_app_py",
  },
  additionalDetailsPrompt: {
    id: "additionalDetailsPrompt",
    defaultMessage: en.additionalDetailsPrompt,
    description:
      "Prompts the user to share additional details with their coach. Used in participant_app_ios, participant_app_py",
  },
  additionalDetailsExcludeInfo: {
    id: "additionalDetailsExcludeInfo",
    defaultMessage: en.additionalDetailsExcludeInfo,
    description:
      "Describes what info not to share in additional details. Used in participant_app_ios, participant_app_py",
  },
  otherSymptomsMaxLengthError: {
    id: "otherSymptomsMaxLengthError",
    defaultMessage: en.otherSymptomsMaxLengthError,
    description:
      "An error describing the max length was exceeded for other symptoms, accepts a max length value. Used in participant_app_ios, participant_app_py",
  },
  symptomsPrompt: {
    id: "symptomsPrompt",
    defaultMessage: en.symptomsPrompt,
    description:
      "Prompts the user to fill out their symptoms. Used in participant_app_ios, participant_app_py",
  },
  mood: {
    id: "mood",
    defaultMessage: en.mood,
    description:
      "The word Mood. Used in participant_app_ios, participant_app_py",
  },
  hunger: {
    id: "hunger",
    defaultMessage: en.hunger,
    description:
      "The word Hunger. Used in participant_app_ios, participant_app_py",
  },
  cravings: {
    id: "cravings",
    defaultMessage: en.cravings,
    description:
      "The word Cravings. Used in participant_app_ios, participant_app_py",
  },
  energy: {
    id: "energy",
    defaultMessage: en.energy,
    description:
      "The word Energy. Used in participant_app_ios, participant_app_py",
  },
  validWeightPrompt: {
    id: "validWeightPrompt",
    defaultMessage: en.validWeightPrompt,
    description:
      "Prompt the user to enter a valid weight. Used in participant_app_ios, participant_app_py",
  },
  validWeightBetweenPrompt: {
    id: "validWeightBetweenPrompt",
    defaultMessage: en.validWeightBetweenPrompt,
    description:
      "Prompts the user to enter a valid weight between two values, accepting a min and max. Used in participant_app_ios, participant_app_py",
  },
  validGlucosePrompt: {
    id: "validGlucosePrompt",
    defaultMessage: en.validGlucosePrompt,
    description:
      "Prompt the user to enter a valid glucose reading. Used in participant_app_ios, participant_app_py",
  },
  glucoseTooHighPrompt: {
    id: "glucoseTooHighPrompt",
    defaultMessage: en.glucoseTooHighPrompt,
    description:
      "Tell the user what to do if their recorded glucose is too high, accepts a max glucose param. Used in participant_app_ios, participant_app_py",
  },
  glucoseTooLowPrompt: {
    id: "glucoseTooLowPrompt",
    defaultMessage: en.glucoseTooLowPrompt,
    description:
      "Tell the user what to do if their recorded glucose is too low, accepts a min glucose param. Used in participant_app_ios, participant_app_py",
  },
  measurementTimeRequired: {
    id: "measurementTimeRequired",
    defaultMessage: en.measurementTimeRequired,
    description:
      "Error when the user fails to enter a time for their measurement. Used in participant_app_ios, participant_app_py",
  },
  measurementTypeRequired: {
    id: "measurementTypeRequired",
    defaultMessage: en.measurementTypeRequired,
    description:
      "Error when the user fails to enter a Reading Type for their measurement. Used in participant_app_ios, participant_app_py",
  },
  measurementAfterMealTimeRequired: {
    id: "measurementAfterMealTimeRequired",
    defaultMessage: en.measurementAfterMealTimeRequired,
    description:
      "Error when the user fails to enter how much time passed since their last meal for their measurement. Used in participant_app_ios, participant_app_py",
  },
  validKetonesPrompt: {
    id: "validKetonesPrompt",
    defaultMessage: en.validKetonesPrompt,
    description:
      "Prompt the user to enter a valid ketones value. Used in participant_app_ios, participant_app_py",
  },
  singleDecimalPrompt: {
    id: "singleDecimalPrompt",
    defaultMessage: en.singleDecimalPrompt,
    description:
      "Prompt for the user to only use a single decimal point. Used in participant_app_ios, participant_app_py",
  },
  ketonesTooLowPrompt: {
    id: "ketonesTooLowPrompt",
    defaultMessage: en.ketonesTooLowPrompt,
    description:
      "Prompt the user to enter a higher ketones value. Used in participant_app_ios, participant_app_py",
  },
  ketonesTooHighPrompt: {
    id: "ketonesTooHighPrompt",
    defaultMessage: en.ketonesTooHighPrompt,
    description:
      "Tell the user what to do if they enter a high ketones value, accepts a max value param. Used in participant_app_ios, participant_app_py",
  },
  validBloodPressurePrompt: {
    id: "validBloodPressurePrompt",
    defaultMessage: en.validBloodPressurePrompt,
    description:
      "Prompts the user to enter a valid blood pressure. Used in participant_app_ios, participant_app_py",
  },
  wholeNumberPrompt: {
    id: "wholeNumberPrompt",
    defaultMessage: en.wholeNumberPrompt,
    description:
      "Prompts the user to enter a whole number. Used in participant_app_ios, participant_app_py",
  },
  validBloodPressureTopBetweenPrompt: {
    id: "validBloodPressureTopBetweenPrompt",
    defaultMessage: en.validBloodPressureTopBetweenPrompt,
    description:
      "Prompt the user to enter a top blood pressure value between two values, accepts min and max as params. Used in participant_app_ios, participant_app_py",
  },
  validBloodPressureBottomBetweenPrompt: {
    id: "validBloodPressureBottomBetweenPrompt",
    defaultMessage: en.validBloodPressureBottomBetweenPrompt,
    description:
      "Prompt the user to enter a bottom blood pressure value between two values, accepts min and max as params. Used in participant_app_ios, participant_app_py",
  },
  symptomsAtLeastOnePrompt: {
    id: "symptomsAtLeastOnePrompt",
    defaultMessage: en.symptomsAtLeastOnePrompt,
    description:
      "Prompts the user to enter at least one symptom. Used in participant_app_ios, participant_app_py",
  },
  readingSubmitError: {
    id: "readingSubmitError",
    defaultMessage: en.readingSubmitError,
    description:
      "Error informing the user their reading failed to be submitted. Used in participant_app_ios, participant_app_py",
  },
  weightSubmitSuccess: {
    id: "weightSubmitSuccess",
    defaultMessage: en.weightSubmitSuccess,
    description:
      "Tell the user they submitted weight reading successfully. Used in participant_app_ios, participant_app_py",
  },
  bloodPressureSubmitSuccess: {
    id: "bloodPressureSubmitSuccess",
    defaultMessage: en.bloodPressureSubmitSuccess,
    description:
      "Tell the user they submitted blood pressure reading successfully. Used in participant_app_ios, participant_app_py",
  },
  ketonesSubmitSuccess: {
    id: "ketonesSubmitSuccess",
    defaultMessage: en.ketonesSubmitSuccess,
    description:
      "Tell the user they submitted ketones reading successfully. Used in participant_app_ios, participant_app_py",
  },
  symptomsSubmitSuccess: {
    id: "symptomsSubmitSuccess",
    defaultMessage: en.symptomsSubmitSuccess,
    description:
      "Tell the user they submitted symptoms reading successfully. Used in participant_app_ios, participant_app_py",
  },
  glucoseSubmitSuccess: {
    id: "glucoseSubmitSuccess",
    defaultMessage: en.glucoseSubmitSuccess,
    description:
      "Tell the user they submitted glucose reading successfully. Used in participant_app_ios, participant_app_py",
  },
  biometricsSubmitSuccess: {
    id: "biometricsSubmitSuccess",
    defaultMessage: en.biometricsSubmitSuccess,
    description:
      "Tell the user they submitted biometrics reading successfully. Used in participant_app_ios, participant_app_py",
  },
  done: {
    id: "done",
    defaultMessage: en.done,
    description:
      "The word Done. Used in participant_app_ios, participant_app_py",
  },
  ketonesReflectonHeader: {
    id: "ketonesReflectonHeader",
    defaultMessage: en.ketonesReflectonHeader,
    description:
      "Header text of the ketones reflection modal. Used in participant_app_ios, participant_app_py",
  },
  glucoseReflectionHeader: {
    id: "glucoseReflectionHeader",
    defaultMessage: en.glucoseReflectionHeader,
    description:
      "Header text of the glucose after-meal reflection response modal. Used in participant_app_ios, participant_app_py",
  },
  glucoseReflectionNutritionGuide: {
    id: "glucoseReflectionNutritionGuide",
    defaultMessage: en.glucoseReflectionNutritionGuide,
    description:
      "Suggestion to check out nutrition guides in the post-meal glucose reflection response modal. Used in participant_app_ios, participant_app_py",
  },
  glucoseChatPartOne: {
    id: "glucoseChatPartOne",
    defaultMessage: en.glucoseChatPartOne,
    description:
      "First part of the suggestion to chat with health coach about food in the post-meal glucose reflection response modal. Used in participant_app_ios, participant_app_py",
  },
  glucoseChatPartTwo: {
    id: "glucoseChatPartTwo",
    defaultMessage: en.glucoseChatPartTwo,
    description:
      "Second part of the suggestion to chat with health coach about food in the post-meal glucose reflection response modal. Used in participant_app_ios, participant_app_py",
  },
  discover: {
    id: "discover",
    defaultMessage: en.discover,
    description:
      "The word Discover. Used in participant_app_ios, participant_app_py",
  },
  spanishCalloutTitle: {
    id: "spanishCalloutTitle",
    defaultMessage: en.spanishCalloutTitle,
    description:
      "Title for the once-seen spanish callout on today screen. Used in participant_app_ios",
  },
  spanishCalloutAction: {
    id: "spanishCalloutAction",
    defaultMessage: en.spanishCalloutAction,
    description:
      "Action button text for the once-seen spanish callout on today screen. Used in participant_app_ios",
  },
  contentFetchErrorMessage: {
    id: "contentFetchErrorMessage",
    defaultMessage: en.contentFetchErrorMessage,
    description:
      "An error message when fetching content. Used in participant_app_ios, participant_app_py.",
  },
  biomarkerInvalidTime: {
    id: "biomarkerInvalidTime",
    defaultMessage: en.biomarkerInvalidTime,
    description:
      "An error message when the user enters an invalid date time. Used in participant_app_py.",
  },
  biomarkerFutureTime: {
    id: "biomarkerFutureTime",
    defaultMessage: en.biomarkerFutureTime,
    description:
      "An error message when the user enters a reading time in the future. Used in participant_app_py.",
  },
  glucoseFeedbackHeader: {
    id: "glucoseFeedbackHeader",
    defaultMessage: en.glucoseFeedbackHeader,
    description:
      "Header messsage for the feedback modal of the glucose form. Used in participant_app_py.",
  },
  glucoseAccessibilityMessages: {
    id: "glucoseAccessibilityMessages",
    defaultMessage: en.glucoseAccessibilityMessages,
    description:
      "Accessiblity label for the feedback modal of the glucose form. Used in participant_app_py.",
  },
  reflectionAccessibilityMessages: {
    id: "reflectionAccessibilityMessages",
    defaultMessage: en.reflectionAccessibilityMessages,
    description:
      "Accessiblity label for the reflection modal of a biomarker form. Used in participant_app_py.",
  },
  gotIt: {
    id: "gotIt",
    defaultMessage: en.gotIt,
    description:
      "An enthusiastic confirmation, such as Got it! Used in participant_app_py.",
  },
  achievementsAccessibilityMessages: {
    id: "achievementsAccessibilityMessages",
    defaultMessage: en.achievementsAccessibilityMessages,
    description:
      "Accessiblity label for the achievements modal. Used in participant_app_py.",
  },
  selectDate: {
    id: "selectDate",
    defaultMessage: en.selectDate,
    description: "Button label for date selection. Used in participant_app_py.",
  },
  selectTime: {
    id: "selectTime",
    defaultMessage: en.selectTime,
    description: "Button label for time selection. Used in participant_app_py.",
  },
  weightEntryInstructions: {
    id: "weightEntryInstructions",
    defaultMessage: en.weightEntryInstructions,
    description:
      "Instructions on how to enter weight using scale or otherwise. Used in participant_app_py.",
  },
  date: {
    id: "date",
    defaultMessage: en.date,
    description: "The word Date. Used in participant_app_py.",
  },
  bloodPressureTopGreater: {
    id: "bloodPressureTopGreater",
    defaultMessage: en.bloodPressureTopGreater,
    description:
      "Error message describing proper top blood pressure value. Used in participant_app_py.",
  },
  bloodPressureBotLesser: {
    id: "bloodPressureBotLesser",
    defaultMessage: en.bloodPressureBotLesser,
    description:
      "Error message describing proper bottom blood pressure value. Used in participant_app_py.",
  },
  glucosePrompt: {
    id: "glucosePrompt",
    defaultMessage: en.glucosePrompt,
    description:
      "Prompts the user to enter glucose value. Used in participant_app_py.",
  },
  bloodPressurePrompt: {
    id: "bloodPressurePrompt",
    defaultMessage: en.bloodPressurePrompt,
    description:
      "Prompts the user to enter blood pressure values. Used in participant_app_py.",
  },
  weightPrompt: {
    id: "weightPrompt",
    defaultMessage: en.weightPrompt,
    description:
      "Prompts the user to enter weight value. Used in participant_app_py.",
  },
  ketonesPrompt: {
    id: "ketonesPrompt",
    defaultMessage: en.ketonesPrompt,
    description:
      "Prompts the user to enter ketones value. Used in participant_app_py.",
  },
  lastEntryLabel: {
    id: "lastEntryLabel",
    defaultMessage: en.lastEntryLabel,
    description:
      "Label for indicating the last value entered for a biomarker. Used in participant_app_py.",
  },
  errors: {
    id: "errors",
    defaultMessage: en.errors,
    description: "The word Errors. Used in participant_app_py.",
  },
  addBiomarker: {
    id: "addBiomarker",
    defaultMessage: en.addBiomarker,
    description:
      "Link description to add additional biomarker tracker. Used in participant_app_py.",
  },
  confirmingEmail: {
    id: "confirmingEmail",
    description: "Title for the email confirmation loading page, used in EP",
    defaultMessage: en.confirmingEmail,
  },
  pleaseWait: {
    id: "pleaseWait",
    description: "Notice to wait while email address is confirmed, used in EP",
    defaultMessage: en.pleaseWait,
  },
  confirmDob: {
    id: "confirmDob",
    description: "Prompt to confirm date of birth, used in EP",
    defaultMessage: en.confirmDob,
  },
  identityConfirmed: {
    id: "identityConfirmed",
    description: "Title for confirmed identity page, used in EP",
    defaultMessage: en.identityConfirmed,
  },
  logInToContinueEnrollment: {
    id: "logInToContinueEnrollment",
    description: "Prompt to log in after identity confirmation, used in EP",
    defaultMessage: en.logInToContinueEnrollment,
  },
  securityQuestion: {
    id: "securityQuestion",
    description: "Title for the security portion of confirmation, used in EP",
    defaultMessage: en.securityQuestion,
  },
  emailVerificationSent: {
    id: "emailVerificationSent",
    description: "Title for the email verification sent page, used in EP",
    defaultMessage: en.emailVerificationSent,
  },
  instructionsSent: {
    id: "instructionsSent",
    description: "Notice that email was sent to given address, used in EP",
    defaultMessage: en.instructionsSent,
  },
  pleaseCheckEmailForEmailVerification: {
    id: "pleaseCheckEmailForEmailVerification",
    description:
      "Instructions to check email for message from Virta, used in EP",
    defaultMessage: en.pleaseCheckEmailForEmailVerification,
  },
  confirmationFailed: {
    id: "confirmationFailed",
    description: "Title for the identity confirmation failed page, used in EP",
    defaultMessage: en.confirmationFailed,
  },
  accountLockedForSecurity: {
    id: "accountLockedForSecurity",
    description: "Error message for account locked, used in EP",
    defaultMessage: en.accountLockedForSecurity,
  },
  couldntConfirmIdentityContact: {
    id: "couldntConfirmIdentityContact",
    description: "Error message for account not found, used in EP",
    defaultMessage: en.couldntConfirmIdentityContact,
  },
  checkEmailForPasswordReset: {
    id: "checkEmailForPasswordReset",
    description: "Password reset instructions title, used in EP",
    defaultMessage: en.checkEmailForPasswordReset,
  },
  stillHaventReceivedEmail: {
    id: "stillHaventReceivedEmail",
    description: "Confirm email location prompt, used in EP",
    defaultMessage: en.stillHaventReceivedEmail,
  },
  passwordResetInstructionsSent: {
    id: "passwordResetInstructionsSent",
    description: "Password reset instructions title, used in EP",
    defaultMessage: en.passwordResetInstructionsSent,
  },
  locationSent: {
    id: "locationSent",
    description: "Location password reset link was sent to, used in EP",
    defaultMessage: en.locationSent,
  },
  caseRequirement: {
    id: "caseRequirement",
    description: "Password lower and upper case requirement, used in EP",
    defaultMessage: en.caseRequirement,
  },
  characterRequirement: {
    id: "characterRequirement",
    description: "Password character requirement, used in EP",
    defaultMessage: en.characterRequirement,
  },
  continueEnrollment: {
    id: "continueEnrollment",
    description: "Prompt to continue enrollment, used in EP",
    defaultMessage: en.continueEnrollment,
  },
  lengthRequirement: {
    id: "lengthRequirement",
    description: "Password length requirement, used in EP",
    defaultMessage: en.lengthRequirement,
  },
  newReset: {
    id: "newReset",
    description: "Prompt to reset password again to get new email, used in EP",
    defaultMessage: en.newReset,
  },
  notVerified: {
    id: "notVerified",
    description:
      "Error message displayed when account is not verified, used in EP",
    defaultMessage: en.notVerified,
  },
  numberRequirement: {
    id: "numberRequirement",
    description: "Password number requirement, used in EP",
    defaultMessage: en.numberRequirement,
  },
  reinforceSuccess: {
    id: "reinforceSuccess",
    description: "Reinforcement that password was set successfully, used in EP",
    defaultMessage: en.reinforceSuccess,
  },
  passwordRequirements: {
    id: "passwordRequirements",
    description: "Password requirements title, used in EP",
    defaultMessage: en.passwordRequirements,
  },
  resetExpired: {
    id: "resetExpired",
    description: "Notice that reset token is expired, used in EP",
    defaultMessage: en.resetExpired,
  },
  setToSave: {
    id: "setToSave",
    description: "Motivate setting of password to save progress, used in EP",
    defaultMessage: en.setToSave,
  },
  setYourPassword: {
    id: "setYourPassword",
    description: "Prompt for user to set password, used in EP",
    defaultMessage: en.setYourPassword,
  },
  successfullySet: {
    id: "successfullySet",
    description: "Notice that password was set successfully, used in EP",
    defaultMessage: en.successfullySet,
  },
  verificationEmailExpired: {
    id: "verificationEmailExpired",
    description: "Notice that verification is expired, used in EP",
    defaultMessage: en.verificationEmailExpired,
  },
  resendVerificationEmail: {
    id: "resendVerificationEmail",
    description: "Button label to resend email, used in EP",
    defaultMessage: en.resendVerificationEmail,
  },
  tryEmailVerificationAgain: {
    id: "tryEmailVerificationAgain",
    description: "Prompt to try verification again, used in EP",
    defaultMessage: en.tryEmailVerificationAgain,
  },
  forgotPasswordTitle: {
    id: "forgotPasswordTitle",
    description: "Forgot password title, used in EP",
    defaultMessage: en.forgotPasswordTitle,
  },
  forgotPasswordInstructions: {
    id: "forgotPasswordInstructions",
    description: "Prompt to get email instructions, used in EP",
    defaultMessage: en.forgotPasswordInstructions,
  },
  sendInstructions: {
    id: "sendInstructions",
    description: "Button label to submit reset request, used in EP",
    defaultMessage: en.sendInstructions,
  },
  noAccountApplyNow: {
    id: "noAccountApplyNow",
    description: "Prompt to apply, used in EP",
    defaultMessage: en.noAccountApplyNow,
  },
  continueVirtaEnrollment: {
    id: "continueVirtaEnrollment",
    description: "Title for the login page, used in EP",
    defaultMessage: en.continueVirtaEnrollment,
  },
  invalidLogin: {
    id: "invalidLogin",
    description: "Invalid email or password error message, used in EP",
    defaultMessage: en.invalidLogin,
  },
  rememberToVerify: {
    id: "rememberToVerify",
    description: "Notice to verify account, used in EP",
    defaultMessage: en.rememberToVerify,
  },
  ifYouHaventVerified: {
    id: "ifYouHaventVerified",
    description: "Instruction on how to verify account, used in EP",
    defaultMessage: en.ifYouHaventVerified,
  },
  none: {
    id: "none",
    description: "No name suffix, used in EP",
    defaultMessage: en.none,
  },
  notConfident: {
    id: "notConfident",
    description: "Description for 0 end of confidence scale, used in EP",
    defaultMessage: en.notConfident,
  },
  veryConfident: {
    id: "veryConfident",
    description: "Description for 10 end of confidence scale, used in EP",
    defaultMessage: en.veryConfident,
  },
  communicationDisqualification: {
    id: "communicationDisqualification",
    description:
      "Disqualification message for communicating in English, used in EP",
    defaultMessage: en.communicationDisqualification,
  },
  smartphoneDisqualification: {
    id: "smartphoneDisqualification",
    description: "Disqualification message for no smartphone, used in EP",
    defaultMessage: en.smartphoneDisqualification,
  },
  checkEmail: {
    id: "checkEmail",
    description: "Ops task status of 'check email', used in EP",
    defaultMessage: en.checkEmail,
  },
  complete: {
    id: "complete",
    description: "Ops task status of 'complete', used in EP",
    defaultMessage: en.complete,
  },
  inReview: {
    id: "inReview",
    description: "Ops task status of 'in review', used in EP",
    defaultMessage: en.inReview,
  },
  inProgress: {
    id: "inProgress",
    description: "Ops task status of 'in progress', used in EP",
    defaultMessage: en.inProgress,
  },
  upcoming: {
    id: "upcoming",
    description: "Ops task status of 'upcoming', used in EP",
    defaultMessage: en.upcoming,
  },
  yourInfoProtectedAndConfidential: {
    id: "yourInfoProtectedAndConfidential",
    description: "Confidentiality disclaimer for BI, used in EP",
    defaultMessage: en.yourInfoProtectedAndConfidential,
  },
  biQuestionsContact: {
    id: "biQuestionsContact",
    description: "Contact info footer for BI page one, used in EP",
    defaultMessage: en.biQuestionsContact,
  },
  eligibilityBasedOnCriteria: {
    id: "eligibilityBasedOnCriteria",
    description: "Eligibility disclaimer for submitting BI, used in EP",
    defaultMessage: en.eligibilityBasedOnCriteria,
  },
  firstStepInLearningMore: {
    id: "firstStepInLearningMore",
    description: "Text describing the first step of BI, used in EP",
    defaultMessage: en.firstStepInLearningMore,
  },
  basicInformation: {
    id: "basicInformation",
    description: "Basic Information text, used in EP",
    defaultMessage: en.basicInformation,
  },
  basicInformationInstructions: {
    id: "basicInformationInstructions",
    description: "Text describing the instructions for BI, used in EP",
    defaultMessage: en.basicInformationInstructions,
  },
  generalInformation: {
    id: "generalInformation",
    description: "General Information header, used in EP",
    defaultMessage: en.generalInformation,
  },
  accountCreationFailed: {
    id: "accountCreationFailed",
    description:
      "Error message pop-up for when account creation fails, used in EP",
    defaultMessage: en.accountCreationFailed,
  },
  type2: {
    id: "type2",
    description: "Type 2 eligibility qualification text, used in EP",
    defaultMessage: en.type2,
  },
  preD: {
    id: "preD",
    description: "Prediabetes eligibility qualification text, used in EP",
    defaultMessage: en.preD,
  },
  preD35: {
    id: "preD35",
    description:
      "Prediabetes with a BMI over 35 eligibility qualification text, used in EP",
    defaultMessage: en.preD35,
  },
  preD34: {
    id: "preD34",
    description:
      "Prediabetes with a BMI over 34 eligibility qualification text, used in EP",
    defaultMessage: en.preD34,
  },
  type2NotMetformin: {
    id: "type2NotMetformin",
    description:
      "Type 2 Diabetes with a qualifying medication eligibility qualification text, used in EP",
    defaultMessage: en.type2NotMetformin,
  },
  obesity30: {
    id: "obesity30",
    description:
      "Obesity with BMI over 30 eligibility qualification text, used in EP",
    defaultMessage: en.obesity30,
  },
  notQualified: {
    id: "notQualified",
    description: "Not qualified eligibility qualification text, used in EP",
    defaultMessage: en.notQualified,
  },
  qualifiedNoDx: {
    id: "qualifiedNoDx",
    description:
      "Qualified without diagnosis eligibility qualification text, used in EP",
    defaultMessage: en.qualifiedNoDx,
  },
  nextStepIsIntakeCall: {
    id: "nextStepIsIntakeCall",
    description: "Description of next steps, used in EP",
    defaultMessage: en.nextStepIsIntakeCall,
  },
  or: {
    id: "or",
    description: "Lowercase 'or' text, used in EP",
    defaultMessage: en.or,
  },
  emailAssistance: {
    id: "emailAssistance",
    description: "Email assistance text, used in EP",
    defaultMessage: en.emailAssistance,
  },
  contactPleaseEmail: {
    id: "contactPleaseEmail",
    description: "Prelaunch waitlist contact info, used in EP",
    defaultMessage: en.contactPleaseEmail,
  },
  prelaunchHeader: {
    id: "prelaunchHeader",
    description: "Prelaunch message header, used in EP",
    defaultMessage: en.prelaunchHeader,
  },
  prelaunchInstructions: {
    id: "prelaunchInstructions",
    description: "Prelaunch waitlist instructions, used in EP",
    defaultMessage: en.prelaunchInstructions,
  },
  prelaunchInstructionsFooter: {
    id: "prelaunchInstructionsFooter",
    description: "Prelaunch waitlist instructions footer, used in EP",
    defaultMessage: en.prelaunchInstructionsFooter,
  },
  instructionsHeader: {
    id: "instructionsHeader",
    description: "Prelaunch waitlist instructions header, used in EP",
    defaultMessage: en.instructionsHeader,
  },
  prelaunchSubheader: {
    id: "prelaunchSubheader",
    description: "Prelaunch message subheader, used in EP",
    defaultMessage: en.prelaunchSubheader,
  },
  invalidHeight: {
    id: "invalidHeight",
    description: "Validation error message for invalid height, used in EP",
    defaultMessage: en.invalidHeight,
  },
  costOfVirta: {
    id: "costOfVirta",
    description: "The header for the cost confirmation page, used in EP",
    defaultMessage: en.costOfVirta,
  },
  costOfVirtaSubheader: {
    id: "costOfVirtaSubheader",
    description: "The subheader for the cost confirmation page, used in EP",
    defaultMessage: en.costOfVirtaSubheader,
  },
  specialCost: {
    id: "specialCost",
    description:
      "Dynamic text showing the discounted cost per month of Virta, used in EP",
    defaultMessage: en.specialCost,
  },
  standardCost: {
    id: "standardCost",
    description: "Formatted message for the standard cost of virta, used in EP",
    defaultMessage: en.standardCost,
  },
  learnMore: {
    id: "learnMore",
    description: "Learn more text, used in EP",
    defaultMessage: en.learnMore,
  },
  noCostToApply: {
    id: "noCostToApply",
    description:
      "The text to assure applicants there is no fee to apply, used in EP",
    defaultMessage: en.noCostToApply,
  },
  apiError: {
    id: "apiError",
    description: "Generic API error warning, used in EP",
    defaultMessage: en.apiError,
  },
  communicationAgreement: {
    id: "communicationAgreement",
    description:
      "Agreement to receive communication by email and text, used in EP",
    defaultMessage: en.communicationAgreement,
  },
  limitedCommunication: {
    id: "limitedCommunication",
    description:
      "Notice that Virta will limit communication by email and text, used in EP",
    defaultMessage: en.limitedCommunication,
  },
  mustAcceptTerms: {
    id: "mustAcceptTerms",
    description:
      "Error message requiring user to accept terms of service, used in EP",
    defaultMessage: en.mustAcceptTerms,
  },
  badAge: {
    id: "badAge",
    description: "Validation error for non-numeric age, used in EP",
    defaultMessage: en.badAge,
  },
  badWeight: {
    id: "badWeight",
    description: "Validation error for non-numeric weight, used in EP",
    defaultMessage: en.badWeight,
  },
  invalidAge: {
    id: "invalidAge",
    description: "Validation error for invalid age, used in EP",
    defaultMessage: en.invalidAge,
  },
  longPhone: {
    id: "longPhone",
    description: "Validation error for too long a phone number, used in EP",
    defaultMessage: en.longPhone,
  },
  longZip: {
    id: "longZip",
    description: "Validation error for too long a zip code, used in EP",
    defaultMessage: en.longZip,
  },
  shortPhone: {
    id: "shortPhone",
    description: "Validation error for too short a phone number, used in EP",
    defaultMessage: en.shortPhone,
  },
  shortZip: {
    id: "shortZip",
    description: "Validation error for too short a zip code, used in EP",
    defaultMessage: en.shortZip,
  },
  stepXOfY: {
    id: "stepXOfY",
    description: "Wizard progress bar in text, used in EP",
    defaultMessage: en.stepXOfY,
  },
  dayUppercase: {
    id: "dayUppercase",
    defaultMessage: en.dayUppercase,
    description: "'Day' uppercase, used in EP",
  },
  dob: {
    id: "dob",
    defaultMessage: en.dob,
    description: "'Date of Birth' uppercase, used in EP",
  },
  faq: {
    id: "faq",
    defaultMessage: en.faq,
    description: "'Frequently Asked Questions', used in EP",
  },
  month: {
    id: "month",
    defaultMessage: en.month,
    description: "'Month' uppercase, used in EP",
  },
  optional: {
    id: "optional",
    defaultMessage: en.optional,
    description: "'Optional' uppercase, used in EP",
  },
  previous: {
    id: "previous",
    defaultMessage: en.previous,
    description: "'Previous' uppercase, used in EP",
  },
  unsure: {
    id: "unsure",
    defaultMessage: en.unsure,
    description: "'Unsure' uppercase, used in EP",
  },
  year: {
    id: "year",
    defaultMessage: en.year,
    description: "'Year' uppercase, used in EP",
  },
  and: {
    id: "and",
    defaultMessage: en.and,
    description: "'And' lowercase, used in EP",
  },
  here: {
    id: "here",
    defaultMessage: en.here,
    description: "'Here' lowercase, used in EP",
  },
  loading: {
    id: "loading",
    defaultMessage: en.loading,
    description: "'Loading' with elipses, used in EP",
  },
  applicationClosed: {
    id: "applicationClosed",
    description: "the words Application Closed, used in EP",
    defaultMessage: en.applicationClosed,
  },
  sorryYourApplicationClosed: {
    id: "sorryYourApplicationClosed",
    description: "Message that displays on closed applications. Used in EP",
    defaultMessage: en.sorryYourApplicationClosed,
  },
  yourHIP: {
    id: "yourHIP",
    defaultMessage: en.yourHIP,
    description: "Phrase to describe a health insurance provider, used in EP",
  },
  enrollmentSaved: {
    id: "enrollmentSaved",
    defaultMessage: en.enrollmentSaved,
    description: "confirms progress was saved, used in EP",
  },
  allSpotsFilled: {
    id: "allSpotsFilled",
    description: "notes that there are no more seats on virta, used in EP",
    defaultMessage: en.allSpotsFilled,
  },
  limitedSpots: {
    id: "limitedSpots",
    description: "Explains limited slots, used in EP",
    defaultMessage: en.limitedSpots,
  },
  unableToOfferAdditionalSpots: {
    id: "unableToOfferAdditionalSpots",
    description: "Explains no more slots being offered, used in EP",
    defaultMessage: en.unableToOfferAdditionalSpots,
  },
  wantMoreInfo: {
    id: "wantMoreInfo",
    description: "The question Want more information?, used in EP",
    defaultMessage: en.wantMoreInfo,
  },
  checkYourEmail: {
    id: "checkYourEmail",
    description: "Asks the user to check email, used in EP",
    defaultMessage: en.checkYourEmail,
  },
  didntReceiveEmail: {
    id: "didntReceiveEmail",
    description: "A prompt if you didn't get an email, used in EP",
    defaultMessage: en.didntReceiveEmail,
  },
  pleaseEmail: {
    id: "pleaseEmail",
    description: "A link to email support, used in EP",
    defaultMessage: en.pleaseEmail,
  },
  thanksForSubmitting: {
    id: "thanksForSubmitting",
    description: "Phrase thanking user for information, used in EP",
    defaultMessage: en.thanksForSubmitting,
  },
  getStartedOnFinalStep: {
    id: "getStartedOnFinalStep",
    description: "Message for start of medical approval, used in EP",
    defaultMessage: en.getStartedOnFinalStep,
  },
  confirmInformation: {
    id: "confirmInformation",
    description: "The phrase 'Confirm Information', used in EP",
    defaultMessage: en.confirmInformation,
  },
  medicalClearance: {
    id: "medicalClearance",
    description: "The phrase Medical Clearance, used in EP",
    defaultMessage: en.medicalClearance,
  },
  startingVirta: {
    id: "startingVirta",
    description: "The phrase Starting Virta, used in EP",
    defaultMessage: en.startingVirta,
  },
  onceStepsAreComplete: {
    id: "onceStepsAreComplete",
    description:
      "Message explaining steps must be completed for approval, used in EP",
    defaultMessage: en.onceStepsAreComplete,
  },
  videoAppointmentTitle: {
    id: "videoAppointmentTitle",
    description: "The phrase Video Medical Appointment, used in EP",
    defaultMessage: en.videoAppointmentTitle,
  },
  videoAppointmentDescription: {
    id: "videoAppointmentDescription",
    description: "Prompt to schedule consultation, used in EP",
    defaultMessage: en.videoAppointmentDescription,
  },
  scheduleVisit: {
    id: "scheduleVisit",
    description: "The phrase Schedule Visit, used in EP",
    defaultMessage: en.scheduleVisit,
  },
  seeVisitDetails: {
    id: "seeVisitDetails",
    description: "The phrase See Visit Details, used in EP",
    defaultMessage: en.seeVisitDetails,
  },
  attendVisit: {
    id: "attendVisit",
    description: "The phrase Attend Visit, used in EP",
    defaultMessage: en.attendVisit,
  },
  rescheduleVisit: {
    id: "rescheduleVisit",
    description: "The phrase Reschedule Visit, used in EP",
    defaultMessage: en.rescheduleVisit,
  },
  intakeCallTitle: {
    id: "intakeCallTitle",
    description: "The phrase Intake Call, used in EP",
    defaultMessage: en.intakeCallTitle,
  },
  intakeCallDescription: {
    id: "intakeCallDescription",
    description: "Describes the intake call, used in EP",
    defaultMessage: en.intakeCallDescription,
  },
  labsTaskTitle: {
    id: "labsTaskTitle",
    description: "Title of the labs task, used in EP",
    defaultMessage: en.labsTaskTitle,
  },
  labsTaskDescription: {
    id: "labsTaskDescription",
    description: "Description of the labs task, used in EP",
    defaultMessage: en.labsTaskDescription,
  },
  completeLabs: {
    id: "completeLabs",
    description: "The phrase Complete Labs, used in EP",
    defaultMessage: en.completeLabs,
  },
  roiTitle: {
    id: "roiTitle",
    description: "Title of the release of information page, used in EP",
    defaultMessage: en.roiTitle,
  },
  roiDescription: {
    id: "roiDescription",
    description: "Description of the roi task, used in EP",
    defaultMessage: en.roiDescription,
  },
  weUnderstand: {
    id: "weUnderstand",
    description: "Explains our stance on at-home methods for covid, used in EP",
    defaultMessage: en.weUnderstand,
  },
  forThose: {
    id: "forThose",
    description: "Allows you to do appointments in office, used in EP",
    defaultMessage: en.forThose,
  },
  labs: {
    id: "labs",
    description: "The word Labs, used in EP",
    defaultMessage: en.labs,
  },
  localCoveredClinic: {
    id: "localCoveredClinic",
    description: "Local covered clinic, used in EP",
    defaultMessage: en.localCoveredClinic,
  },
  ifNearClinic: {
    id: "ifNearClinic",
    description: "Explains getting labs from a local clininc, used in EP",
    defaultMessage: en.ifNearClinic,
  },
  labsFirstStep: {
    id: "labsFirstStep",
    description: "Step 1 of labs, used in EP",
    defaultMessage: en.labsFirstStep,
  },
  seeClinicList: {
    id: "seeClinicList",
    description: "Instructions to see list of clinics, used in EP",
    defaultMessage: en.seeClinicList,
  },
  getForms: {
    id: "getForms",
    description: "the phrase Get Forms",
    defaultMessage: en.getForms,
  },
  labsSecondStep: {
    id: "labsSecondStep",
    description: "Step 2 of labs, used in EP",
    defaultMessage: en.labsSecondStep,
  },
  printOrderForms: {
    id: "printOrderForms",
    description: "Instructions to print lab orders, used in EP",
    defaultMessage: en.printOrderForms,
  },
  youMustFast: {
    id: "youMustFast",
    description: "Explanation of fasting for labwork, used in EP",
    defaultMessage: en.youMustFast,
  },
  localCoveredClinicLocation: {
    id: "localCoveredClinicLocation",
    description: "Label for the location of a clinic, used in EP",
    defaultMessage: en.localCoveredClinicLocation,
  },
  clickGetForms: {
    id: "clickGetForms",
    description: "Instruction to get forms for labs, used in EP",
    defaultMessage: en.clickGetForms,
  },
  receiveDocusignEmail: {
    id: "receiveDocusignEmail",
    description: "Explains to expect an email from docusign, used in EP",
    defaultMessage: en.receiveDocusignEmail,
  },
  labCorpFullyCovered: {
    id: "labCorpFullyCovered",
    description: "labcorp fully covered, used in EP",
    defaultMessage: en.labCorpFullyCovered,
  },

  ifNearLab: {
    id: "ifNearLab",
    description: "Explains no cost labs if local, used in EP",
    defaultMessage: en.ifNearLab,
  },
  makeSureToCompleteOrderForm: {
    id: "makeSureToCompleteOrderForm",
    description: "Instruction to fill out form fully, used in EP",
    defaultMessage: en.makeSureToCompleteOrderForm,
  },
  printMedLabForm: {
    id: "printMedLabForm",
    description: "Instruction to print lab order forms, used in EP",
    defaultMessage: en.printMedLabForm,
  },
  preferPCP: {
    id: "preferPCP",
    description: "Explains you can go to PCP for labs, used in EP",
    defaultMessage: en.preferPCP,
  },
  noApptNecessary: {
    id: "noApptNecessary",
    description: "Explains labs don't require an appointment, used in EP",
    defaultMessage: en.noApptNecessary,
  },
  scheduleApptWithFollowingInfo: {
    id: "scheduleApptWithFollowingInfo",
    description: "Explains appointments are available for labs, used in EP",
    defaultMessage: en.scheduleApptWithFollowingInfo,
  },
  selectRoutineLabWork: {
    id: "selectRoutineLabWork",
    description: "Instructions on how to request labwork, used in EP",
    defaultMessage: en.selectRoutineLabWork,
  },
  sayYesToFasting: {
    id: "sayYesToFasting",
    description: "Instructions to respond yes to fasting, used in EP",
    defaultMessage: en.sayYesToFasting,
  },
  sayMyEmployerWillPay: {
    id: "sayMyEmployerWillPay",
    description:
      "Instructions to respond that employer will pay for labs, used in EP",
    defaultMessage: en.sayMyEmployerWillPay,
  },
  doINeedToSchedule: {
    id: "doINeedToSchedule",
    description:
      "Question asking if you need to schedule a labs appointment, used in EP",
    defaultMessage: en.doINeedToSchedule,
  },
  whereIsMyAccessCode: {
    id: "whereIsMyAccessCode",
    description: "Question asking where the labs access code is, used in EP",
    defaultMessage: en.whereIsMyAccessCode,
  },
  willReceiveDocusignEmail: {
    id: "willReceiveDocusignEmail",
    description:
      "Instructions that you will get an email from Docusign, used in EP",
    defaultMessage: en.willReceiveDocusignEmail,
  },
  howMuchLabCost: {
    id: "howMuchLabCost",
    description: "Question asking how much labs cost, used in EP",
    defaultMessage: en.howMuchLabCost,
  },
  virtaCoversLabCost: {
    id: "virtaCoversLabCost",
    description: "Explanation that virta will cover labs, used in EP",
    defaultMessage: en.virtaCoversLabCost,
  },
  whereToSeeResults: {
    id: "whereToSeeResults",
    description: "Question on where to see lab results, used in EP",
    defaultMessage: en.whereToSeeResults,
  },
  toSeeResultsGoTo: {
    id: "toSeeResultsGoTo",
    description: "Explanation of where to see lab results, used in EP",
    defaultMessage: en.toSeeResultsGoTo,
  },
  yourPCPNotCovered: {
    id: "yourPCPNotCovered",
    description: "Your pcp not covered, used in EP",
    defaultMessage: en.yourPCPNotCovered,
  },
  getYourLabs: {
    id: "getYourLabs",
    description: "Note that having PCP do labs may cost extra, used in EP",
    defaultMessage: en.getYourLabs,
  },
  makeSureForm: {
    id: "makeSureForm",
    description: "Instructions to fully fill the labs form, used in EP",
    defaultMessage: en.makeSureForm,
  },
  printBothOrderForms: {
    id: "printBothOrderForms",
    description: "Instructions to print both order forms, used in EP",
    defaultMessage: en.printBothOrderForms,
  },
  whereGetTests: {
    id: "whereGetTests",
    description: "Question on where to go to do labs, used in EP",
    defaultMessage: en.whereGetTests,
  },
  recommendCallPCP: {
    id: "recommendCallPCP",
    description:
      "Instructions to call your PCP to have test ordered, used in EP",
    defaultMessage: en.recommendCallPCP,
  },
  howMuchLabsCost: {
    id: "howMuchLabsCost",
    description: "Question on how much the labs cost, used in EP",
    defaultMessage: en.howMuchLabsCost,
  },
  cannotPredictCost: {
    id: "cannotPredictCost",
    description: "Explanation that we can't predict cost of labs, used in EP",
    defaultMessage: en.cannotPredictCost,
  },
  optionsToCompleteLabs: {
    id: "optionsToCompleteLabs",
    description: "header for options to complete labs, used in EP",
    defaultMessage: en.optionsToCompleteLabs,
  },
  feelFree: {
    id: "feelFree",
    description: "Note that you can look at each option and return, used in EP",
    defaultMessage: en.feelFree,
  },
  completeScreening: {
    id: "completeScreening",
    description: "Explanation that you must send us labs, used in EP",
    defaultMessage: en.completeScreening,
  },
  ifRecentLabsFax: {
    id: "ifRecentLabsFax",
    description: "Explanation on how to fax recent labs, used in EP",
    defaultMessage: en.ifRecentLabsFax,
  },
  testsNotRequired: {
    id: "testsNotRequired",
    description:
      "Explanation that test are not required to meet virta provider, used in EP",
    defaultMessage: en.testsNotRequired,
  },
  instructions: {
    id: "instructions",
    description: "The word Instructions, used in EP",
    defaultMessage: en.instructions,
  },
  nearLab: {
    id: "nearLab",
    description: "Explanation that labs are no cost if local, used in EP",
    defaultMessage: en.nearLab,
  },
  localClinicFullyCovered: {
    id: "localClinicFullyCovered",
    description: "Local covered clinic fully covered, used in EP",
    defaultMessage: en.localClinicFullyCovered,
  },
  nearClinic: {
    id: "nearClinic",
    description:
      "Explanation that labs are no cost if local clinic, used in EP",
    defaultMessage: en.nearClinic,
  },
  pcpNotCovered: {
    id: "pcpNotCovered",
    description: "Your pcp not covered, used in EP",
    defaultMessage: en.pcpNotCovered,
  },
  labsElsewhere: {
    id: "labsElsewhere",
    description: "Explanation of where you can do labs, used in EP",
    defaultMessage: en.labsElsewhere,
  },
  paymentInfo: {
    id: "paymentInfo",
    description: "The words Payment Information, used in EP",
    defaultMessage: en.paymentInfo,
  },
  agreeToBeCharged: {
    id: "agreeToBeCharged",
    description: "Agreement to be charged by Virta, used in EP",
    defaultMessage: en.agreeToBeCharged,
  },
  agreeTerms: {
    id: "agreeTerms",
    description: "Agreement to the terms and privacy policy, used in EP",
    defaultMessage: en.agreeTerms,
  },
  authorizeVirta: {
    id: "authorizeVirta",
    description: "Continuous payment authorization agreement, used in EP",
    defaultMessage: en.authorizeVirta,
  },
  noRefundsForPartialMonths: {
    id: "noRefundsForPartialMonths",
    description: "Explanation that partial months are not refunded, used in EP",
    defaultMessage: en.noRefundsForPartialMonths,
  },
  toCancel: {
    id: "toCancel",
    description: "Acknowledgement of instructions to cancel, used in EP",
    defaultMessage: en.toCancel,
  },
  bySubmitting: {
    id: "bySubmitting",
    description:
      "Payment submission authorization for Virta services, used in EP",
    defaultMessage: en.bySubmitting,
  },
  yourSavedCard: {
    id: "yourSavedCard",
    defaultMessage: en.yourSavedCard,
    description: "The phrase Your Saved Card, used in EP",
  },
  noCcInfo: {
    id: "noCcInfo",
    description: "Notice that no CC info was found, used in EP",
    defaultMessage: en.noCcInfo,
  },
  clickAddCard: {
    id: "clickAddCard",
    description: "Instructions to add a payment card, used in EP",
    defaultMessage: en.clickAddCard,
  },
  subscriptionTerms: {
    id: "subscriptionTerms",
    description: "The phrase Subscription Terms of Use, used in EP",
    defaultMessage: en.subscriptionTerms,
  },
  term1: {
    id: "term1",
    description: "First term of use, used in EP",
    defaultMessage: en.term1,
  },
  term2: {
    id: "term2",
    description: "Second term of use, used in EP",
    defaultMessage: en.term2,
  },
  term3: {
    id: "term3",
    description: "Third term of use, used in EP",
    defaultMessage: en.term3,
  },
  term4: {
    id: "term4",
    description: "Fourth term of use, used in EP",
    defaultMessage: en.term4,
  },
  term5: {
    id: "term5",
    description: "Fifth term of use, used in EP",
    defaultMessage: en.term5,
  },
  term6: {
    id: "term6",
    description: "Sixth term of use, used in EP",
    defaultMessage: en.term6,
  },
  term7: {
    id: "term7",
    description: "Seventh term of use, used in EP",
    defaultMessage: en.term7,
  },
  term8: {
    id: "term8",
    description: "Eighth term of use, used in EP",
    defaultMessage: en.term8,
  },
  termsOfService: {
    id: "termsOfService",
    defaultMessage: en.termsOfService,
    description: "The phrase Terms of Service, used in EP",
  },
  termsOfServiceDetails: {
    id: "termsOfServiceDetails",
    defaultMessage: en.termsOfServiceDetails,
    description: "Terms of Service details text, used in EP",
  },
  addressLineTwo: {
    id: "addressLineTwo",
    defaultMessage: en.addressLineTwo,
    description:
      "Label for the second address line for the pharmacy, used in EP",
  },
  confirmPharmacyAddress: {
    id: "confirmPharmacyAddress",
    defaultMessage: en.confirmPharmacyAddress,
    description:
      "Error text for when a user has not confirmed a validated address, used in EP",
  },
  phoneNumber: {
    id: "phoneNumber",
    defaultMessage: en.phoneNumber,
    description: "Label for the phone number line for the pharmacy, used in EP",
  },
  reaction: {
    id: "reaction",
    description: "The word Reaction, used in EP",
    defaultMessage: en.reaction,
  },
  listFoodAllergies: {
    id: "listFoodAllergies",
    description: "Instruction to list food allergies, used in EP",
    defaultMessage: en.listFoodAllergies,
  },
  noFoodAllergies: {
    id: "noFoodAllergies",
    description: "States no food allergies, used in EP",
    defaultMessage: en.noFoodAllergies,
  },
  listMedAllergies: {
    id: "listMedAllergies",
    description: "Instructions to list medication allergies, used in EP",
    defaultMessage: en.listMedAllergies,
  },
  noMedAllergies: {
    id: "noMedAllergies",
    description: "States no medication allergies, used in EP",
    defaultMessage: en.noMedAllergies,
  },
  mustMakeFoodSelection: {
    id: "mustMakeFoodSelection",
    description: "Instruction to complete food allergy section, used in EP",
    defaultMessage: en.mustMakeFoodSelection,
  },
  mustMakeMedSelection: {
    id: "mustMakeMedSelection",
    description: "Instruction to complete medical allergy section, used in EP",
    defaultMessage: en.mustMakeMedSelection,
  },
  preferredName: {
    id: "preferredName",
    description: "The phrase Preferred Name, used in EP",
    defaultMessage: en.preferredName,
  },
  requiredByPrevYesResponse: {
    id: "requiredByPrevYesResponse",
    description:
      "Note that afield is required because of a previous response, used in EP",
    defaultMessage: en.requiredByPrevYesResponse,
  },
  consentFormsTitle: {
    id: "consentFormsTitle",
    description: "The phrase Consent Forms, used in EP",
    defaultMessage: en.consentFormsTitle,
  },
  pleaseReview: {
    id: "pleaseReview",
    description: "Instruction to review the TOS, used in EP",
    defaultMessage: en.pleaseReview,
  },
  nextConsent: {
    id: "nextConsent",
    description: "The phrase Next Consent, used in EP",
    defaultMessage: en.nextConsent,
  },
  startConsent: {
    id: "startConsent",
    description: "The phrase Start Consent, used in EP",
    defaultMessage: en.startConsent,
  },
  start: {
    id: "start",
    description: "The word Start, used in EP",
    defaultMessage: en.start,
  },
  voluntaryAuth: {
    id: "voluntaryAuth",
    description: "Title for voluntary authorization, used in EP",
    defaultMessage: en.voluntaryAuth,
  },
  protectingData: {
    id: "protectingData",
    description: "The header Protecting your data:, used in EP",
    defaultMessage: en.protectingData,
  },
  deliverRxParts: {
    id: "deliverRxParts",
    defaultMessage: en.deliverRxParts,
    description: "Requests persmission to share info to send parts,used in EP",
  },
  authPurpose: {
    id: "authPurpose",
    defaultMessage: en.authPurpose,
    description: "The phrase Authorization Purpose:,used in EP",
  },
  allowPHI: {
    id: "allowPHI",
    defaultMessage: en.allowPHI,
    description: "Explains authorization lets us share PHI,used in EP",
  },
  duration: {
    id: "duration",
    defaultMessage: en.duration,
    description: "The header Duration:,used in EP",
  },
  authInForce: {
    id: "authInForce",
    defaultMessage: en.authInForce,
    description: "Explains how long the authorization lasts,used in EP",
  },
  iVoluntarilyAuthorize: {
    id: "iVoluntarilyAuthorize",
    defaultMessage: en.iVoluntarilyAuthorize,
    description: "statement of authorization, used in EP",
  },
  readAndConsidered: {
    id: "readAndConsidered",
    defaultMessage: en.readAndConsidered,
    description: "Affrims the user has read the authorization, used in EP",
  },
  furtherUnderstand: {
    id: "furtherUnderstand",
    defaultMessage: en.furtherUnderstand,
    description:
      "Affirms the users understanding of the terms of the authorization, used in EP",
  },
  iAcknowledge: {
    id: "iAcknowledge",
    defaultMessage: en.iAcknowledge,
    description: "The declaration 'I acknowledge', used in EP",
  },
  weTakePrivacy: {
    id: "weTakePrivacy",
    defaultMessage: en.weTakePrivacy,
    description: "Text explaining you can revoke authorization, used in EP",
  },
  mustAcceptAuthorization: {
    id: "mustAcceptAuthorization",
    defaultMessage: en.mustAcceptAuthorization,
    description: "Text explaining you must authorize to continue, used in EP",
  },
  mustAcceptAssignment: {
    id: "mustAcceptAssignment",
    defaultMessage: en.mustAcceptAssignment,
    description:
      "Text explaining you must accept the assignemnt of benefit consent to continue, used in EP",
  },
  removeMedication: {
    id: "removeMedication",
    defaultMessage: en.removeMedication,
    description: "the action Remove Medication, used in EP",
  },
  remove: {
    id: "remove",
    defaultMessage: en.remove,
    description: "The word Remove, used in EP",
  },
  currentMedications: {
    id: "currentMedications",
    defaultMessage: en.currentMedications,
    description: "the phrase Current Medications, used in EP",
  },
  pleaseAddMedDetails: {
    id: "pleaseAddMedDetails",
    defaultMessage: en.pleaseAddMedDetails,
    description: "Prompt to complete adding the medications, used in EP",
  },
  addMeds: {
    id: "addMeds",
    defaultMessage: en.addMeds,
    description: "The phrase Add Medications, used in EP",
  },
  notTakingMeds: {
    id: "notTakingMeds",
    defaultMessage: en.notTakingMeds,
    description: "Asserts that the user is taking no medication, used in EP",
  },
  mustMakeSelection: {
    id: "mustMakeSelection",
    defaultMessage: en.mustMakeSelection,
    description:
      "Message requiring completion of medication section, used in EP",
  },
  age: {
    id: "age",
    defaultMessage: en.age,
    description: "The word Age, used in EP",
  },
  approxHowOld: {
    id: "approxHowOld",
    defaultMessage: en.approxHowOld,
    description:
      "Question asking how old user was when diagnosed with diabetes or similar, used in EP",
  },
  notSureAboutDiagnosis: {
    id: "notSureAboutDiagnosis",
    defaultMessage: en.notSureAboutDiagnosis,
    description: "States user is not sure about their diagnosis, used in EP",
  },
  deceased: {
    id: "deceased",
    defaultMessage: en.deceased,
    description: "The word Deceased, used in EP",
  },
  listSiblingMedProblems: {
    id: "listSiblingMedProblems",
    defaultMessage: en.listSiblingMedProblems,
    description: "Prompt to provide siblings health history, used in EP",
  },
  biologicalRelativesSection: {
    id: "biologicalRelativesSection",
    defaultMessage: en.biologicalRelativesSection,
    description:
      "Explanation to include info on biological relatives, used in EP",
  },
  fatherHealth: {
    id: "fatherHealth",
    defaultMessage: en.fatherHealth,
    description: "Title for section on father's health, used in EP",
  },
  siblingHealth: {
    id: "siblingHealth",
    defaultMessage: en.siblingHealth,
    description: "Title for section on sibling health, used in EP",
  },
  motherHealth: {
    id: "motherHealth",
    defaultMessage: en.motherHealth,
    description: "Title for section on fathers health, used in EP",
  },
  healthHistoryTitle: {
    id: "healthHistoryTitle",
    defaultMessage: en.healthHistoryTitle,
    description: "Header of the health history section, used in EP",
  },
  thanksForConfirmingBI: {
    id: "thanksForConfirmingBI",
    defaultMessage: en.thanksForConfirmingBI,
    description:
      "Message thanking user for completing basic information, used in EP",
  },
  pleaseNoteYourInfoIsProtected: {
    id: "pleaseNoteYourInfoIsProtected",
    defaultMessage: en.pleaseNoteYourInfoIsProtected,
    description: "Note that information is protected by HIPAA, used in EP",
  },
  virtaWillNotShareYourInfo: {
    id: "virtaWillNotShareYourInfo",
    defaultMessage: en.virtaWillNotShareYourInfo,
    description: "Note that Virta will not distribute health info, used in EP",
  },
  questionsEmail: {
    id: "questionsEmail",
    defaultMessage: en.questionsEmail,
    description: "Prompt to email support with Questions, used in EP",
  },
  yourInfoProtectedByHIPAA: {
    id: "yourInfoProtectedByHIPAA",
    defaultMessage: en.yourInfoProtectedByHIPAA,
    description: "Message that info is protected by HIPAA, used in EP",
  },
  stillHaveGallbladder: {
    id: "stillHaveGallbladder",
    defaultMessage: en.stillHaveGallbladder,
    description: "States user still has their gallblader, used in EP",
  },
  gallbladderRemoved: {
    id: "gallbladderRemoved",
    defaultMessage: en.gallbladderRemoved,
    description: "States user has had their gallbladder removed, used in EP",
  },
  digestiveHistoryTitle: {
    id: "digestiveHistoryTitle",
    defaultMessage: en.digestiveHistoryTitle,
    description: "Header for Digestive History section, used in EP",
  },
  pancreaticEnzymes: {
    id: "pancreaticEnzymes",
    defaultMessage: en.pancreaticEnzymes,
    description: "Asks if the user takes supplements for pancreas, used in EP",
  },
  pancreasIssuesQuestion: {
    id: "pancreasIssuesQuestion",
    defaultMessage: en.pancreasIssuesQuestion,
    description: "Question about pancreas issues, used in EP",
  },
  liverDiseaseQuestion: {
    id: "liverDiseaseQuestion",
    defaultMessage: en.liverDiseaseQuestion,
    description: "Question about liver disease, used in EP",
  },
  shortBowelSyndrome: {
    id: "shortBowelSyndrome",
    defaultMessage: en.shortBowelSyndrome,
    description: "Question about short bowel syndrome, used in EP",
  },
  organTransplantQuestion: {
    id: "organTransplantQuestion",
    defaultMessage: en.organTransplantQuestion,
    description: "Question about abdominal orgran transplant, used in EP",
  },
  intestinalSurgery: {
    id: "intestinalSurgery",
    defaultMessage: en.intestinalSurgery,
    description: "Question about intestinal surgeries, used in EP",
  },
  gallbladderProblems: {
    id: "gallbladderProblems",
    defaultMessage: en.gallbladderProblems,
    description: "Question about gallbladder problems, used in EP",
  },
  crohns: {
    id: "crohns",
    defaultMessage: en.crohns,
    description: "Question about Crohns Disease, used in EP",
  },
  colitis: {
    id: "colitis",
    defaultMessage: en.colitis,
    description: "Question about ulcerative colitis, used in EP",
  },
  geneticHistoryTitle: {
    id: "geneticHistoryTitle",
    defaultMessage: en.geneticHistoryTitle,
    description: "Header for genetic history section, used in EP",
  },
  raceIdent: {
    id: "raceIdent",
    defaultMessage: en.raceIdent,
    description: "Prompt to identify users racial or ethnic groups, used in EP",
  },
  heartHistoryTitle: {
    id: "heartHistoryTitle",
    defaultMessage: en.heartHistoryTitle,
    description: "Header of heart history section, used in EP",
  },
  hadHeartAttack: {
    id: "hadHeartAttack",
    defaultMessage: en.hadHeartAttack,
    description: "Question about heart attacks, used in EP",
  },
  hadCHF: {
    id: "hadCHF",
    defaultMessage: en.hadCHF,
    description: "Question about congestive heart failure, used in EP",
  },
  valveProblemsQuestion: {
    id: "valveProblemsQuestion",
    defaultMessage: en.valveProblemsQuestion,
    description: "Question about heart valve problesm, used in EP",
  },
  potsDiagnosed: {
    id: "potsDiagnosed",
    defaultMessage: en.potsDiagnosed,
    description: "Question about POTs, used in EP",
  },
  svt: {
    id: "svt",
    defaultMessage: en.svt,
    description: "Question about heart arrythmia, used in EP",
  },
  prolongedQT: {
    id: "prolongedQT",
    defaultMessage: en.prolongedQT,
    description: "Question about prolongued QT, used in EP",
  },
  peripheralArterialDisease: {
    id: "peripheralArterialDisease",
    defaultMessage: en.peripheralArterialDisease,
    description: "Question about arterial disease, used in EP",
  },
  hypertension: {
    id: "hypertension",
    defaultMessage: en.hypertension,
    description: "Question about hypertension, used in EP",
  },
  lowBloodPressure: {
    id: "lowBloodPressure",
    defaultMessage: en.lowBloodPressure,
    description: "Question about low blood pressure, used in EP",
  },
  haveYouEverFainted: {
    id: "haveYouEverFainted",
    defaultMessage: en.haveYouEverFainted,
    description: "Question about fainting, used in EP",
  },
  steroidMedsQuestion: {
    id: "steroidMedsQuestion",
    defaultMessage: en.steroidMedsQuestion,
    description: "Question about user taking steriod meds, used in EP",
  },
  impairImmunityMeds: {
    id: "impairImmunityMeds",
    defaultMessage: en.impairImmunityMeds,
    description:
      "Question about user taking meds which impair their immune system, used in EP",
  },
  nextStepIsHealthHistory: {
    id: "nextStepIsHealthHistory",
    defaultMessage: en.nextStepIsHealthHistory,
    description: "Explains health history, used in EP",
  },
  commonMedicalQuestions: {
    id: "commonMedicalQuestions",
    defaultMessage: en.commonMedicalQuestions,
    description: "Header of common questions section, used in EP",
  },
  askingBecauseOfDiabetes: {
    id: "askingBecauseOfDiabetes",
    defaultMessage: en.askingBecauseOfDiabetes,
    description: "Notes these conditions are related to diabetes, used in EP",
  },
  yesNoDetails: {
    id: "yesNoDetails",
    defaultMessage: en.yesNoDetails,
    description: "Prompt to provide more details on answers given, used in EP",
  },
  primaryCareProvider: {
    id: "primaryCareProvider",
    defaultMessage: en.primaryCareProvider,
    description: "the phrase Primary Care Provider, used in EP",
  },
  listAllSurgeries: {
    id: "listAllSurgeries",
    defaultMessage: en.listAllSurgeries,
    description: "Prompt to list surgeries, used in EP",
  },
  noSurgeries: {
    id: "noSurgeries",
    defaultMessage: en.noSurgeries,
    description: "Asserts user has undergone no surgeries, used in EP",
  },
  addSurgeries: {
    id: "addSurgeries",
    defaultMessage: en.addSurgeries,
    description: "Action to add surgeries to list, used in EP",
  },
  mustMakeSurgerySelection: {
    id: "mustMakeSurgerySelection",
    defaultMessage: en.mustMakeSurgerySelection,
    description: "Note that user must complete surgeries section, used in EP",
  },
  clickConfirmAddressAbove: {
    id: "clickConfirmAddressAbove",
    defaultMessage: en.clickConfirmAddressAbove,
    description:
      "Error text for when a user has not confirmed a validated address, used in EP",
  },
  homeAddress: {
    id: "homeAddress",
    defaultMessage: en.homeAddress,
    description: "Home Address text, used in EP",
  },
  useDifferentShipping: {
    id: "useDifferentShipping",
    defaultMessage: en.useDifferentShipping,
    description:
      "Text for the checkbox to enter a different shipping address, used in EP",
  },
  hic: {
    id: "hic",
    defaultMessage: en.hic,
    description: "The phrase Health Insurance Coverage, used in EP",
  },
  waiver: {
    id: "waiver",
    defaultMessage: en.waiver,
    description: "The word Waiver, used in EP",
  },
  pleaseReviewAndAccept: {
    id: "pleaseReviewAndAccept",
    defaultMessage: en.pleaseReviewAndAccept,
    description: "Instruction to review and accept waiver, used in EP",
  },
  iAgreeToWaiver: {
    id: "iAgreeToWaiver",
    defaultMessage: en.iAgreeToWaiver,
    description: "Agreement to the waiver, used in EP",
  },
  mustAcceptWaiver: {
    id: "mustAcceptWaiver",
    defaultMessage: en.mustAcceptWaiver,
    description: "Error that you must accept the waiver, used in EP",
  },
  importantSafetyInformation: {
    id: "importantSafetyInformation",
    defaultMessage: en.importantSafetyInformation,
    description: "important safety information header, used in EP",
  },
  safeToKeepProvidersUpToDate: {
    id: "safeToKeepProvidersUpToDate",
    defaultMessage: en.safeToKeepProvidersUpToDate,
    description: "text describing maintaining safety, used in EP ",
  },
  optOutFromProviderUpdateExplanation: {
    id: "optOutFromProviderUpdateExplanation",
    defaultMessage: en.optOutFromProviderUpdateExplanation,
    description: "text describing how to opt out in the future, used in EP",
  },
  optOutFromProviderUpdateField: {
    id: "optOutFromProviderUpdateField",
    defaultMessage: en.optOutFromProviderUpdateField,
    description:
      "agreement to not share progress on Virta with provider, used in EP",
  },
  faxNumberNoticeRequirement: {
    id: "faxNumberNoticeRequirement",
    defaultMessage: en.faxNumberNoticeRequirement,
    description: "requirement notice about fax number field, used in EP",
  },
  primaryEmail: {
    id: "primaryEmail",
    defaultMessage: en.primaryEmail,
    description: "Primary email field, used in EP",
  },
  primaryPhone: {
    id: "primaryPhone",
    defaultMessage: en.primaryPhone,
    description: "Primary phone field, used in EP",
  },
  weightInPounds: {
    id: "weightInPounds",
    defaultMessage: en.weightInPounds,
    description: "Weight field, used in EP",
  },
  heightInInches: {
    id: "heightInInches",
    defaultMessage: en.heightInInches,
    description: "Height field, used in EP",
  },
  communication: {
    id: "communication",
    defaultMessage: en.communication,
    description: "Communication field, used in EP",
  },
  selectSpeciality: {
    id: "selectSpeciality",
    defaultMessage: en.selectSpeciality,
    description: "Prompt to select provider specialty, used in EP",
  },
  faxNumber: {
    id: "faxNumber",
    defaultMessage: en.faxNumber,
    description: "Fax field, used in EP",
  },
  address1: {
    id: "address1",
    defaultMessage: en.address1,
    description: "Address field 1, used in EP",
  },
  address2: {
    id: "address2",
    defaultMessage: en.address2,
    description: "Address field 2, used in EP",
  },
  province: {
    id: "province",
    defaultMessage: en.province,
    description: "Province field, used in EP",
  },
  postalCode: {
    id: "postalCode",
    defaultMessage: en.postalCode,
    description: "Postal code field, used in EP",
  },
  phone: {
    id: "phone",
    defaultMessage: en.phone,
    description: "Phone number field, used in EP",
  },
  phoneNumTooShort: {
    id: "phoneNumTooShort",
    defaultMessage: en.phoneNumTooShort,
    description: "Error if phone number is too short, used in EP",
  },
  phoneNumTooLong: {
    id: "phoneNumTooLong",
    defaultMessage: en.phoneNumTooLong,
    description: "Error if phone number is too long, used in EP",
  },
  faxNumTooShort: {
    id: "faxNumTooShort",
    defaultMessage: en.faxNumTooShort,
    description: "Error if fax number is too short, used in EP",
  },
  faxNumTooLong: {
    id: "faxNumTooLong",
    defaultMessage: en.faxNumTooLong,
    description: "Error if fax number is too long, used in EP",
  },
  editPostalCode: {
    id: "editPostalCode",
    defaultMessage: en.editPostalCode,
    description: "Change postal code for search, used in EP",
  },
  findYour: {
    id: "findYour",
    defaultMessage: en.findYour,
    description: "Find your provider, used in EP",
  },
  postalCodeInvalid: {
    id: "postalCodeInvalid",
    defaultMessage: en.postalCodeInvalid,
    description: "Error that postal code is invalid, used in EP",
  },
  physicianSearch: {
    id: "physicianSearch",
    defaultMessage: en.physicianSearch,
    description: "Header for physician search, used in EP",
  },
  virtaReferralTitle: {
    id: "virtaReferralTitle",
    defaultMessage: en.virtaReferralTitle,
    description: "Title for referral applications, used in EP",
  },
  basicContact: {
    id: "basicContact",
    defaultMessage: en.basicContact,
    description: "Prompt to provide contact info for a referral, used in EP",
  },
  ifHaveQuestions: {
    id: "ifHaveQuestions",
    defaultMessage: en.ifHaveQuestions,
    description: "Prompt to email support with questions, used in EP",
  },
  legalFName: {
    id: "legalFName",
    defaultMessage: en.legalFName,
    description: "Legal first name field, used in EP",
  },
  fname: {
    id: "fname",
    defaultMessage: en.fname,
    description: "First name field, used in EP",
  },
  legalLName: {
    id: "legalLName",
    defaultMessage: en.legalLName,
    description: "Legal last name field, used in EP",
  },
  lname: {
    id: "lname",
    defaultMessage: en.lname,
    description: "Last name field, used in EP",
  },
  cell: {
    id: "cell",
    defaultMessage: en.cell,
    description: "Cell number field, used in EP",
  },
  whichDiagnosesReferral: {
    id: "whichDiagnosesReferral",
    defaultMessage: en.whichDiagnosesReferral,
    description: "Question about what diagnosis a referral has, used in EP",
  },
  referralInsulinQuestion: {
    id: "referralInsulinQuestion",
    defaultMessage: en.referralInsulinQuestion,
    description: "Question about if a referral has used insulin, used in EP",
  },
  referralCurrentDialysis: {
    id: "referralCurrentDialysis",
    defaultMessage: en.referralCurrentDialysis,
    description: "Question about if a referral is on dialysis, used in EP",
  },
  referralPregnancyQuestion: {
    id: "referralPregnancyQuestion",
    defaultMessage: en.referralPregnancyQuestion,
    description: "Asks if a referral is pregnant, used in EP",
  },
  referralTakingInsulin: {
    id: "referralTakingInsulin",
    defaultMessage: en.referralTakingInsulin,
    description: "Answers that referral is taking insulin, used in EP",
  },
  referralPastInsulin: {
    id: "referralPastInsulin",
    defaultMessage: en.referralPastInsulin,
    description: "Answers that a referral once took insulin, used in EP",
  },
  theyNeverInsulin: {
    id: "theyNeverInsulin",
    defaultMessage: en.theyNeverInsulin,
    description: "Answers that a referral never used insulin, used in EP",
  },
  referralUnsureInsulin: {
    id: "referralUnsureInsulin",
    defaultMessage: en.referralUnsureInsulin,
    description:
      "Answers that a referral is unsure if they've used insulin, used in EP",
  },
  selectGender: {
    id: "selectGender",
    defaultMessage: en.selectGender,
    description: "Prompt to select a gender, used in EP",
  },
  requiredByPrevResponse: {
    id: "requiredByPrevResponse",
    defaultMessage: en.requiredByPrevResponse,
    description:
      "Note that an action is rquired because of a previous action, used in EP",
  },
  enterEmail: {
    id: "enterEmail",
    defaultMessage: en.enterEmail,
    description: "Prompt to enter an email address, used in EP",
  },
  backToApplication: {
    id: "backToApplication",
    defaultMessage: en.backToApplication,
    description:
      "Link to return to application to correct a mistake, used in EP",
  },
  disappointingNews: {
    id: "disappointingNews",
    defaultMessage: en.disappointingNews,
    description: "Message about disqualification reasons, used in EP",
  },
  pleaseNoteOtherPrograms: {
    id: "pleaseNoteOtherPrograms",
    defaultMessage: en.pleaseNoteOtherPrograms,
    description: "Message to consider other treatments, used in EP",
  },
  emailSupportWithQuestions: {
    id: "emailSupportWithQuestions",
    defaultMessage: en.emailSupportWithQuestions,
    description: "Prompt to email support with questions, used in EP",
  },
  applicationReceived: {
    id: "applicationReceived",
    defaultMessage: en.applicationReceived,
    description:
      "Message that an application was received, and a prompt for next steps, used in EP",
  },
  applicationSubmitted: {
    id: "applicationSubmitted",
    defaultMessage: en.applicationSubmitted,
    description:
      "Note that an application was submitted, and a message to learn more about Virta, used in EP",
  },
  step1LearnVirta: {
    id: "step1LearnVirta",
    defaultMessage: en.step1LearnVirta,
    description: "Message to learn about virta, used in EP",
  },
  watchVideo: {
    id: "watchVideo",
    defaultMessage: en.watchVideo,
    description: "Prompt to watch video about virta, used in EP",
  },
  verifyAccount: {
    id: "verifyAccount",
    defaultMessage: en.verifyAccount,
    description:
      "Instruction to verify account before moving to Health History, used in EP",
  },
  pleaseCheckEmail: {
    id: "pleaseCheckEmail",
    defaultMessage: en.pleaseCheckEmail,
    description: "Instruction to check email to verify account, used in EP",
  },
  step2CheckEmail: {
    id: "step2CheckEmail",
    defaultMessage: en.step2CheckEmail,
    description: "Instruction to check email, listed as step 2, used in EP",
  },
  clickContinueEmail: {
    id: "clickContinueEmail",
    defaultMessage: en.clickContinueEmail,
    description:
      "Instruction to click the continue button in the email, used in EP",
  },
  emailSentTo: {
    id: "emailSentTo",
    defaultMessage: en.emailSentTo,
    description: "Message that an email was sent to an address, used in EP",
  },
  notReceivedEmail: {
    id: "notReceivedEmail",
    defaultMessage: en.notReceivedEmail,
    description:
      "Instructions of what to do if you haven't received email, used in EP",
  },
  pleaseCheckEmailForDetails: {
    id: "pleaseCheckEmailForDetails",
    defaultMessage: en.pleaseCheckEmailForDetails,
    description:
      "Instruction to check email for details of something, used in EP",
  },
  isOffering: {
    id: "isOffering",
    defaultMessage: en.isOffering,
    description: "Note about limited spots on Virta, used in EP",
  },
  allVirtaSpotsFilled: {
    id: "allVirtaSpotsFilled",
    defaultMessage: en.allVirtaSpotsFilled,
    description: "Note that all spots on virta are filled, used in EP",
  },
  thankYouForApplication: {
    id: "thankYouForApplication",
    defaultMessage: en.thankYouForApplication,
    description: "The phrase Thank you for your application, used in EP",
  },
  indicatedInsurance: {
    id: "indicatedInsurance",
    defaultMessage: en.indicatedInsurance,
    description: "Note about BCBSNC insurance, used in EP",
  },
  englishReferral: {
    id: "englishReferral",
    defaultMessage: en.englishReferral,
    description: "Question asking if referral can use English, used in EP",
  },
  canFillForm: {
    id: "canFillForm",
    defaultMessage: en.canFillForm,
    description:
      "Question asking if user can fill this form and converse in English, used in EP",
  },
  canFillFormReferral: {
    id: "canFillFormReferral",
    defaultMessage: en.canFillFormReferral,
    description:
      "Question asking if referral can fill this form and converse in English, used in EP",
  },
  contactInformation: {
    id: "contactInformation",
    defaultMessage: en.contactInformation,
    description: "Contact information header, used in EP",
  },
  smartphoneDefinition: {
    id: "smartphoneDefinition",
    defaultMessage: en.smartphoneDefinition,
    description: "Explains what a smartphone is, used in EP",
  },
  confirmEmailAddress: {
    id: "confirmEmailAddress",
    defaultMessage: en.confirmEmailAddress,
    description: "The instruction Confirm Email Address, used in EP",
  },
  haveSmartphone: {
    id: "haveSmartphone",
    defaultMessage: en.haveSmartphone,
    description: "Asks if user has a smartphone, used in EP",
  },
  emailMismatch: {
    id: "emailMismatch",
    defaultMessage: en.emailMismatch,
    description: "Error that emails do not match, used in EP",
  },
  requiredByPrevYes: {
    id: "requiredByPrevYes",
    defaultMessage: en.requiredByPrevYes,
    description:
      "Error that something is required because user responded Yes earlier, used in EP",
  },
  ssn: {
    id: "ssn",
    defaultMessage: en.ssn,
    description: "SSN field, used in EP",
  },
  rxCost: {
    id: "rxCost",
    defaultMessage: en.rxCost,
    description: "Cost of Virta Treatment, used in EP",
  },
  price249PerMonth: {
    id: "price249PerMonth",
    defaultMessage: en.price249PerMonth,
    description: "249 dollars per month, as a price, used in EP",
  },
  initiationFee: {
    id: "initiationFee",
    defaultMessage: en.initiationFee,
    description: "Note about one time 250 dollar fee, used in EP",
  },
  promoCode: {
    id: "promoCode",
    defaultMessage: en.promoCode,
    description: "Promo Code field, used in EP",
  },
  employerNameRequired: {
    id: "employerNameRequired",
    defaultMessage: en.employerNameRequired,
    description: "Note that employer name is required, used in EP",
  },
  insurerNameRequired: {
    id: "insurerNameRequired",
    defaultMessage: en.insurerNameRequired,
    description: "Note that insurer name is required, used in EP",
  },
  payOOP: {
    id: "payOOP",
    defaultMessage: en.payOOP,
    description: "Option to pay out of pocket, used in EP",
  },
  hadInsulin: {
    id: "hadInsulin",
    defaultMessage: en.hadInsulin,
    description: "Asks about insulin use, used in EP",
  },
  whenStartInsulin: {
    id: "whenStartInsulin",
    defaultMessage: en.whenStartInsulin,
    description: "Asks when user started insulin, used in EP",
  },
  whenStopInsulin: {
    id: "whenStopInsulin",
    defaultMessage: en.whenStopInsulin,
    description: "Asks when user stopped insulin, used in EP",
  },
  yesImTakingInsulin: {
    id: "yesImTakingInsulin",
    defaultMessage: en.yesImTakingInsulin,
    description: "Answers the user is using insulin, used in EP",
  },
  yesInsulinButPast: {
    id: "yesInsulinButPast",
    defaultMessage: en.yesInsulinButPast,
    description: "Answer that the user was on insulin previously, used in EP",
  },
  iveNeverTakenInsulin: {
    id: "iveNeverTakenInsulin",
    defaultMessage: en.iveNeverTakenInsulin,
    description: "Answer that the user has never used insulin, used in EP",
  },
  moreDetailsNeeded: {
    id: "moreDetailsNeeded",
    defaultMessage: en.moreDetailsNeeded,
    description:
      "Prompt to provide more info on why user is joining virta, used in EP",
  },
  mdy: {
    id: "mdy",
    defaultMessage: en.mdy,
    description: "Month, day, year, as a date format, used in EP",
  },
  noModification: {
    id: "noModification",
    defaultMessage: en.noModification,
    description:
      "Note that virta can help those who cannot change diet at this time, used in EP",
  },
  readyStartSoon: {
    id: "readyStartSoon",
    description:
      "The positive response text for the intake question about readiness to begin treatment",
    defaultMessage: en.readyStartSoon,
  },
  needAnswersFirst: {
    id: "needAnswersFirst",
    description:
      "The intermediate response text for the intake question about readiness to begin treatment",
    defaultMessage: en.needAnswersFirst,
  },
  learnMoreFirst: {
    id: "learnMoreFirst",
    description:
      "The negative response text for the intake question about readiness to begin treatment",
    defaultMessage: en.learnMoreFirst,
  },
  noWrongAnswer: {
    id: "noWrongAnswer",
    description: "There is no wrong answer!",
    defaultMessage: en.noWrongAnswer,
  },
  pleaseReviewTosAndPrivacy: {
    id: "pleaseReviewTosAndPrivacy",
    defaultMessage: en.pleaseReviewTosAndPrivacy,
    description: "Instruction to accept TOS and privacy policy, used in EP",
  },
  virtaNotEnrollingAdditionalVeterans: {
    id: "virtaNotEnrollingAdditionalVeterans",
    defaultMessage: en.virtaNotEnrollingAdditionalVeterans,
    description:
      "Note that virta is not enrolling additional veterans, used in EP",
  },
  virtaCommittedToVeterans: {
    id: "virtaCommittedToVeterans",
    defaultMessage: en.virtaCommittedToVeterans,
    description: "Explains Virta's pilot veterans commitment, used in EP",
  },
  ifYoudStillLikeToApply: {
    id: "ifYoudStillLikeToApply",
    defaultMessage: en.ifYoudStillLikeToApply,
    description:
      "Message for veterans who still want to apply despite the above, used in EP",
  },
  congratsPleaseConfirm: {
    id: "congratsPleaseConfirm",
    defaultMessage: en.congratsPleaseConfirm,
    description:
      "Message after completing first step, prompts to check email, used in EP",
  },
  confirmationEmailSentTo: {
    id: "confirmationEmailSentTo",
    defaultMessage: en.confirmationEmailSentTo,
    description:
      "Message that a confirmation email was sent somewhere, used in EP",
  },
  checkInbox: {
    id: "checkInbox",
    defaultMessage: en.checkInbox,
    description: "Instruction to check email for confirmation, used in EP",
  },
  noConfEmail: {
    id: "noConfEmail",
    defaultMessage: en.noConfEmail,
    description: "Inquisitive prompt if you haven't received email, used in EP",
  },
  checkAbove: {
    id: "checkAbove",
    defaultMessage: en.checkAbove,
    description: "Instruction to check you entered the right email, used in EP",
  },
  congrats: {
    id: "congrats",
    defaultMessage: en.congrats,
    description: "The word Congratulations!, used in EP",
  },
  canStartTreatment: {
    id: "canStartTreatment",
    defaultMessage: en.canStartTreatment,
    description: "Message that user can start Virta treatment, used in EP",
  },
  checkEmailForLoginInstructions: {
    id: "checkEmailForLoginInstructions",
    defaultMessage: en.checkEmailForLoginInstructions,
    description: "Instruction to check email to log in, used in EP",
  },
  ifBSCA: {
    id: "ifBSCA",
    defaultMessage: en.ifBSCA,
    description:
      "Message on coverage for Blue Shield of California, used in EP",
  },
  toReceiveFullCoverage: {
    id: "toReceiveFullCoverage",
    defaultMessage: en.toReceiveFullCoverage,
    description:
      "Instruction to use alternate platform to be covered by BSCA, used in EP",
  },
  privacyPolicy: {
    id: "privacyPolicy",
    defaultMessage: en.privacyPolicy,
    description: "The phrase Privacy Policy, used in EP",
  },
  telehealthConsent: {
    id: "telehealthConsent",
    defaultMessage: en.telehealthConsent,
    description: "The phrase Telehealth Consent, used in EP",
  },
  privacyPractices: {
    id: "privacyPractices",
    defaultMessage: en.privacyPractices,
    description: "The phrase Privacy Practices, used in EP",
  },
  rightsReserved: {
    id: "rightsReserved",
    defaultMessage: en.rightsReserved,
    description: "Rights statement with copyright, used in EP",
  },
  basicInfo: {
    id: "basicInfo",
    defaultMessage: en.basicInfo,
    description: "The title Basic Information, used in EP",
  },
  needHelp: {
    id: "needHelp",
    defaultMessage: en.needHelp,
    description: "The prompt Need help? Contact, used in EP",
  },
  needHelpWithApplication: {
    id: "needHelpWithApplication",
    defaultMessage: en.needHelpWithApplication,
    description: "Inquisitive prompt for help with application, used in EP",
  },
  contactUs: {
    id: "contactUs",
    defaultMessage: en.contactUs,
    description: "The phrase Contact Us, used in EP",
  },
  brb: {
    id: "brb",
    defaultMessage: en.brb,
    description: "The phrase We'll be right back, used in EP",
  },
  scheduledMaintenance: {
    id: "scheduledMaintenance",
    defaultMessage: en.scheduledMaintenance,
    description: "Note about scheduled maintenence, used in EP",
  },
  apology: {
    id: "apology",
    defaultMessage: en.apology,
    description: "Apology for inconvenience, used in EP",
  },
  meantime: {
    id: "meantime",
    defaultMessage: en.meantime,
    description: "Prompt to check out user stories in the meantime, used in EP",
  },
  ifSeeMsg: {
    id: "ifSeeMsg",
    defaultMessage: en.ifSeeMsg,
    description:
      "Note that if message continues to appear, contact support, used in EP",
  },
  addressConfirmed: {
    id: "addressConfirmed",
    defaultMessage: en.addressConfirmed,
    description: "Address Confirmed button label, used in EP",
  },
  confirmAddress: {
    id: "confirmAddress",
    defaultMessage: en.confirmAddress,
    description: "Confirm Address button label, used in EP",
  },
  whichVersionOfYourAddress: {
    id: "whichVersionOfYourAddress",
    defaultMessage: en.whichVersionOfYourAddress,
    description:
      "Instructions for the user to select and address to confirm, used in EP",
  },
  selectAddress: {
    id: "selectAddress",
    defaultMessage: en.selectAddress,
    description:
      "Warning message to inform the user they must select and address to confirm, used in EP",
  },
  submitButton: {
    id: "submitButton",
    description: "Submit button text for address input, used in EP",
    defaultMessage: en.submitButton,
  },
  backButton: {
    id: "backButton",
    description: "Back button text for address input, used in EP",
    defaultMessage: en.backButton,
  },
  finalStepsDescription: {
    id: "finalStepsDescription",
    description:
      "Description for address input on final steps screen, used in EP",
    defaultMessage: en.finalStepsDescription,
  },
  updateAddress: {
    id: "updateAddress",
    description: "Title for address input on final steps screen, used in EP",
    defaultMessage: en.updateAddress,
  },
  confirmInfo: {
    id: "confirmInfo",
    description:
      "Button text for address input on final steps screen, used in EP",
    defaultMessage: en.confirmInfo,
  },
  receiveInfoAboutLabs: {
    id: "receiveInfoAboutLabs",
    description:
      "The generic body message when there are no lab options and no specific instructions, used in EP",
    defaultMessage: en.receiveInfoAboutLabs,
  },
  eligibilityStatusCoveredHeader: {
    id: "eligibilityStatusCoveredHeader",
    description: "eligibility status page header, used in EP",
    defaultMessage: en.eligibilityStatusCoveredHeader,
  },
  eligibilityStatusCoveredParagraph: {
    id: "eligibilityStatusCoveredParagraph",
    description: "part one of covered paragraph, used in EP",
    defaultMessage: en.eligibilityStatusCoveredParagraph,
  },
  eligibilityStatusCoveredSecondParagraph: {
    id: "eligibilityStatusCoveredSecondParagraph",
    description: "Second part of the covered paragraph, used in EP",
    defaultMessage: en.eligibilityStatusCoveredSecondParagraph,
  },
  eligibilityStatusCoveredSecondParagraphNext: {
    id: "eligibilityStatusCoveredSecondParagraphNext",
    description:
      "Second paragraph used in health history for when an applicant is eligible, used in EP",
    defaultMessage: en.eligibilityStatusCoveredSecondParagraphNext,
  },
  eligibilityStatusMoreTimeHeader: {
    id: "eligibilityStatusMoreTimeHeader",
    description: "eligibility status page header, used in EP",
    defaultMessage: en.eligibilityStatusMoreTimeHeader,
  },
  eligibilityStatusMoreTimeParagraph: {
    id: "eligibilityStatusMoreTimeParagraph",
    description: "still checking eligibility paragraph, used in EP",
    defaultMessage: en.eligibilityStatusMoreTimeParagraph,
  },
  eligibilityStatusReviewInsuranceParagraph: {
    id: "eligibilityStatusReviewInsuranceParagraph",
    description: "validate insurance paragraph, used in EP",
    defaultMessage: en.eligibilityStatusReviewInsuranceParagraph,
  },
  eligibilityCoverageCarrierInput: {
    id: "eligibilityCoverageCarrierInput",
    description: "eligibility status coverage carrier input, used in EP",
    defaultMessage: en.eligibilityCoverageCarrierInput,
  },
  eligibilityCoverageGroupIdInput: {
    id: "eligibilityCoverageGroupIdInput",
    description: "eligibility status coverage group ID input, used in EP",
    defaultMessage: en.eligibilityCoverageGroupIdInput,
  },
  eligibilityCoverageMemberIdInput: {
    id: "eligibilityCoverageMemberIdInput",
    description: "eligibility status coverage member ID input, used in EP",
    defaultMessage: en.eligibilityCoverageMemberIdInput,
  },
  eligibilityCoverageIssueDateInput: {
    id: "eligibilityCoverageIssueDateInput",
    description: "eligibility status coverage issue date input, used in EP",
    defaultMessage: en.eligibilityCoverageIssueDateInput,
  },
  eligibilityCoveragePlanInput: {
    id: "eligibilityCoveragePlanInput",
    description: "eligibility status coverage plan input, used in EP",
    defaultMessage: en.eligibilityCoveragePlanInput,
  },
  toScheduleHeader: {
    id: "toScheduleHeader",
    description: "The header for the Calendly calendar, used in EP",
    defaultMessage: en.toScheduleHeader,
  },
  isScheduledHeader: {
    id: "isScheduledHeader",
    description:
      "The header for the Calendly calendar once scheduled, used in EP",
    defaultMessage: en.isScheduledHeader,
  },
  toSchduleMessage: {
    id: "toSchduleMessage",
    description: "The description for the Calendly calendar, used in EP",
    defaultMessage: en.toSchduleMessage,
  },
  isSchduledMessage: {
    id: "isSchduledMessage",
    description: "The description for the Calendly calendar, used in EP",
    defaultMessage: en.isSchduledMessage,
  },
  thirtyMinutes: {
    id: "thirtyMinutes",
    description: "The time estimate for the Calendly calendar, used in EP",
    defaultMessage: en.thirtyMinutes,
  },
  isPrimaryInsurance: {
    id: "isPrimaryInsurance",
    description:
      "The question text for whether primary insurance is being collected, used in EP",
    defaultMessage: en.isPrimaryInsurance,
  },
  explainPrimarySecondaryInsurance: {
    id: "explainPrimarySecondaryInsurance",
    description:
      "Text that describes primary vs. secondary insurance, used in EP",
    defaultMessage: en.explainPrimarySecondaryInsurance,
  },
  howVirtaWorks: {
    id: "howVirtaWorks",
    description: "The header for the educational video page, used in EP",
    defaultMessage: en.howVirtaWorks,
  },
  watchOverviewVideo: {
    id: "watchOverviewVideo",
    description: "The subheader for the educational video page, used in EP",
    defaultMessage: en.watchOverviewVideo,
  },
  ifYoureNotInterestedNow: {
    id: "ifYoureNotInterestedNow",
    description:
      "The text to let uninterested applicants know how to contact Virta if they change their mind, used in EP",
    defaultMessage: en.ifYoureNotInterestedNow,
  },
  sessionExpired: {
    id: "sessionExpired",
    description: "Warning message indicating a session has expired, used in EP",
    defaultMessage: en.sessionExpired,
  },
  paymentTermsHeader: {
    id: "paymentTermsHeader",
    defaultMessage: en.paymentTermsHeader,
    description: "The header for detailed payment terms page, used in EP",
  },
  monthlySubscriptionAutomated: {
    id: "monthlySubscriptionAutomated",
    defaultMessage: en.monthlySubscriptionAutomated,
    description: ", used in EP",
  },
  virtaRefundPolicy: {
    id: "virtaRefundPolicy",
    defaultMessage: en.virtaRefundPolicy,
    description: "Virta refund policy, used in EP",
  },
  electronicPaymentRequired: {
    id: "electronicPaymentRequired",
    description: ", used in EP",
    defaultMessage: en.electronicPaymentRequired,
  },
  virtaPaymentSchedule: {
    id: "virtaPaymentSchedule",
    description: "Initial Virta payment schedule, used in EP",
    defaultMessage: en.virtaPaymentSchedule,
  },
  paymentFailure: {
    id: "paymentFailure",
    description: "Payment failure response, used in EP",
    defaultMessage: en.paymentFailure,
  },
  howToCancel: {
    id: "howToCancel",
    description: "How to cancel Virta treatment, used in EP",
    defaultMessage: en.howToCancel,
  },
  restartingVirta: {
    id: "restartingVirta",
    description: "How to restart Virta treatment, used in EP",
    defaultMessage: en.restartingVirta,
  },
  reduceGlareOnCard: {
    id: "reduceGlareOnCard",
    description: "response if having issues with card glare, used in EP",
    defaultMessage: en.reduceGlareOnCard,
  },
  captureSharpImageOfCard: {
    id: "captureSharpImageOfCard",
    description: "response if having issues with card sharpness, used in EP",
    defaultMessage: en.captureSharpImageOfCard,
  },
  issueUploadingCard: {
    id: "issueUploadingCard",
    description:
      "response if having other general issues with card, used in EP",
    defaultMessage: en.issueUploadingCard,
  },
  deseralizeError: {
    id: "deseralizeError",
    description:
      "generic error response if there are problems deserializing server response, used in EP",
    defaultMessage: en.deseralizeError,
  },
  problemWithForm: {
    id: "problemWithForm",
    defaultMessage: en.problemWithForm,
    description: "Title for listing problems with form completion, used in EP",
  },
  noPrimaryCareProvider: {
    id: "noPrimaryCareProvider",
    description: "Text for users with no pcp, used in EP",
    defaultMessage: en.noPrimaryCareProvider,
  },
  noPCPInstructions: {
    id: "noPCPInstructions",
    description: "Instructions on what to do if you have no PCP, used in EP",
    defaultMessage: en.noPCPInstructions,
  },
  healthInfoExchangeHeader: {
    id: "healthInfoExchangeHeader",
    description: "Header for the HIE opt-out page, used in EP",
    defaultMessage: en.healthInfoExchangeHeader,
  },
  whatIsHIEQuestion: {
    id: "whatIsHIEQuestion",
    description: "FAQ question for defining an HIE, used in EP",
    defaultMessage: en.whatIsHIEQuestion,
  },
  whatIsHIEAnswer: {
    id: "whatIsHIEAnswer",
    description: "FAQ answer for defining an HIE, used in EP",
    defaultMessage: en.whatIsHIEAnswer,
  },
  whyHIEQuestion: {
    id: "whyHIEQuestion",
    description: "FAQ question for the purpose of an HIE, used in EP",
    defaultMessage: en.whyHIEQuestion,
  },
  whyHIEAnswer: {
    id: "whyHIEAnswer",
    description: "FAQ answer for the purpose an HIE, used in EP",
    defaultMessage: en.whyHIEAnswer,
  },
  optOutHIEQuestion: {
    id: "optOutHIEQuestion",
    description: "FAQ question for how to opt out of an HIE, used in EP",
    defaultMessage: en.optOutHIEQuestion,
  },
  optOutHIEAnswer: {
    id: "optOutHIEAnswer",
    description: "FAQ answer for how to opt out of an HIE, used in EP",
    defaultMessage: en.optOutHIEAnswer,
  },
  noActionNeededForHIE: {
    id: "noActionNeededForHIE",
    description: "Message informing applicant of the status quo, used in EP",
    defaultMessage: en.noActionNeededForHIE,
  },
  iWouldLikeToOptOut: {
    id: "iWouldLikeToOptOut",
    description: "Checkbox label to affirm a desire to opt out, used in EP",
    defaultMessage: en.iWouldLikeToOptOut,
  },
  optOutConfirmation: {
    id: "optOutConfirmation",
    description: "Success response of an opt out action, used in EP",
    defaultMessage: en.optOutConfirmation,
  },
  chatSLABannerTitle: {
    id: "chatSLABannerTitle",
    description:
      "Title of SLA banner shown on the chat screen, used in PA mobile",
    defaultMessage: en.chatSLABannerTitle,
  },
  chatSLABannerDescription: {
    id: "chatSLABannerDescription",
    description:
      "Description of SLA banner shown on the chat screen, used in PA mobile",
    defaultMessage: en.chatSLABannerDescription,
  },
  chatSLABannerLink: {
    id: "chatSLABannerLink",
    description:
      "Link on SLA banner shown on the chat screen, used in PA mobile",
    defaultMessage: en.chatSLABannerLink,
  },
  calorieCount: {
    id: "calorieCount",
    defaultMessage: en.calorieCount,
    description: "Label for calorie count section in recipes, used in atlas",
  },
  carbohydrates: {
    id: "carbohydrates",
    defaultMessage: en.carbohydrates,
    description: "Label for carbohydrates section in recipes, used in atlas",
  },
  fiber: {
    id: "fiber",
    defaultMessage: en.fiber,
    description: "Label for fiber section in recipes, used in atlas",
  },
  fat: {
    id: "fat",
    defaultMessage: en.fat,
    description: "Label for fat section in recipes, used in atlas",
  },
  protein: {
    id: "protein",
    defaultMessage: en.protein,
    description: "Label for protein section in recipes, used in atlas",
  },
  servingCount: {
    id: "servingCount",
    defaultMessage: en.servingCount,
    description: "Label for serving count section in recipes, used in atlas",
  },
  servingSize: {
    id: "servingSize",
    defaultMessage: en.servingSize,
    description: "Label for serving size section in recipes, used in atlas",
  },
  sugarAdded: {
    id: "sugarAdded",
    defaultMessage: en.sugarAdded,
    description: "Label for added sugar section in recipes, used in atlas",
  },
  sugarAlcohol: {
    id: "sugarAlcohol",
    defaultMessage: en.sugarAlcohol,
    description: "Label for sugar alcohol section in recipes, used in atlas",
  },
  nutritionFacts: {
    id: "nutritionFacts",
    defaultMessage: en.nutritionFacts,
    description: "Label for nutritional info section in recipes, used in atlas",
  },
  prepTime: {
    id: "prepTime",
    defaultMessage: en.prepTime,
    description: "Label for prep time section in recipes, used in atlas",
  },
  totalTime: {
    id: "totalTime",
    defaultMessage: en.totalTime,
    description: "Label for total time section in recipes, used in atlas",
  },
  ingredients: {
    id: "ingredients",
    defaultMessage: en.ingredients,
    description: "Label for Ingredients section in recipes, used in atlas",
  },
  recipeInstructions: {
    id: "recipeInstructions",
    defaultMessage: en.recipeInstructions,
    description: "Label for Instructions section in recipes, used in atlas",
  },
  enable: {
    id: "enable",
    defaultMessage: en.enable,
    description: "The word Enable, used in participant_app_ios",
  },
  pushNotificationsCoach: {
    id: "pushNotificationsCoach",
    defaultMessage: en.pushNotificationsCoach,
    description:
      "Incentive to enable push notifications to receive messages from coach, used in participant_app_ios",
  },
  pushNotificationsStats: {
    id: "pushNotificationsStats",
    defaultMessage: en.pushNotificationsStats,
    description:
      "Incentive to enable push notifications to keep up with stats, used in participant_app_ios",
  },
  pushNotificationsHeader: {
    id: "pushNotificationsHeader",
    defaultMessage: en.pushNotificationsHeader,
    description:
      "Header for modal asking user to enable push notifications, used in participant_app_ios",
  },
  pushNotificationsInstructions: {
    id: "pushNotificationsInstructions",
    defaultMessage: en.pushNotificationsInstructions,
    description:
      "Push notification instructions guiding the user to the settings page in the more menu. This contains two placeholders for Settings and More, which need to be translated and emphasized before being passed in, used in participant_app_ios",
  },
  noSearchResults: {
    id: "noSearchResults",
    defaultMessage: en.noSearchResults,
    description: "No results typically from a search, used in atlas",
  },
  tryPopularSearches: {
    id: "tryPopularSearches",
    defaultMessage: en.tryPopularSearches,
    description: "Try popular searches, used in atlas",
  },
  tryPopularFoodSearches: {
    id: "tryPopularFoodSearches",
    defaultMessage: en.tryPopularFoodSearches,
    description: "Try food searches, used in atlas",
  },
  recentSearches: {
    id: "recentSearches",
    defaultMessage: en.recentSearches,
    description: "Recent searches, used in atlas",
  },
  bloodSugar: {
    id: "bloodSugar",
    defaultMessage: en.bloodSugar,
    description: "Popular search term, used in atlas",
  },
  food: {
    id: "food",
    defaultMessage: en.food,
    description: "Popular search term, used in atlas",
  },
  reviewInsuranceInfoDescription: {
    id: "reviewInsuranceInfoDescription",
    description:
      "Description for insurance info on final steps screen, used in EP",
    defaultMessage: en.reviewInsuranceInfoDescription,
  },
  reviewInsuranceInfoTitle: {
    id: "reviewInsuranceInfoTitle",
    description: "Title for insurance info on final steps screen, used in EP",
    defaultMessage: en.reviewInsuranceInfoTitle,
  },
  updateInfo: {
    id: "updateInfo",
    description:
      "Button text for insurance info input on final steps screen, used in EP",
    defaultMessage: en.updateInfo,
  },
  completeProfile: {
    id: "completeProfile",
    description:
      "Title text for Address and Insurance check on final steps screen, used in EP",
    defaultMessage: en.completeProfile,
  },
  confirmEmail: {
    id: "confirmEmail",
    description: "The phrase Confirm Email, used in EP",
    defaultMessage: en.confirmEmail,
  },
  emailConfirmed: {
    id: "emailConfirmed",
    description: "The exclamation Email Confirmed!, used in EP",
    defaultMessage: en.emailConfirmed,
  },
  yourEmailVerified: {
    id: "yourEmailVerified",
    description:
      "A message stating the user's email has been verified, used in EP",
    defaultMessage: en.yourEmailVerified,
  },
  clickBelowToVerifyEmail: {
    id: "clickBelowToVerifyEmail",
    description:
      "Instruction to click a link to confirm users email, used in GIP Confirmation Email",
    defaultMessage: en.clickBelowToVerifyEmail,
  },
  copyPasteLinkIfNotWorking: {
    id: "copyPasteLinkIfNotWorking",
    description:
      "Instruction to copy a link if button doesn't work, used in GIP Confirmation Email",
    defaultMessage: en.copyPasteLinkIfNotWorking,
  },
  emailAssociatedWithVirtaAccount: {
    id: "emailAssociatedWithVirtaAccount",
    description: "Note on the purpose of email, used in GIP Confirmation Email",
    defaultMessage: en.emailAssociatedWithVirtaAccount,
  },
  ifProblemsContactSupport: {
    id: "ifProblemsContactSupport",
    description:
      "Instruction to contact support in case of problems, used in GIP Confirmation Email",
    defaultMessage: en.ifProblemsContactSupport,
  },
  cameraDirectionBack: {
    defaultMessage: en.cameraDirectionBack,
    description: "Scan button back",
    id: "cameraDirectionBack",
  },
  cameraDirectionFront: {
    defaultMessage: en.cameraDirectionFront,
    description: "Scan button front",
    id: "cameraDirectionFront",
  },
  confirmationHeader: {
    defaultMessage: en.confirmationHeader,
    description: "Header for completed insurance submission",
    id: "confirmationHeader",
  },
  confirmationHeaderHH: {
    defaultMessage: en.confirmationHeaderHH,
    description: "Header for completed insurance submission in HH",
    id: "confirmationHeaderHH",
  },
  getReadySubheader: {
    defaultMessage: en.getReadySubheader,
    description: "Subheader to instruct readiness",
    id: "getReadySubheader",
  },
  getReadyText: {
    defaultMessage: en.getReadyText,
    description: "Text to instruct readiness",
    id: "getReadyText",
  },
  helpScreenDescription: {
    defaultMessage: en.helpScreenDescription,
    description: "Help screen description",
    id: "helpScreenDescription",
  },
  helpScreenHeader: {
    defaultMessage: en.helpScreenHeader,
    description: "Help screen header",
    id: "helpScreenHeader",
  },
  helpScreenTip1: {
    defaultMessage: en.helpScreenTip1,
    description: "Help screen tip #1",
    id: "helpScreenTip1",
  },
  helpScreenTip2: {
    defaultMessage: en.helpScreenTip2,
    description: "Help screen tip #2",
    id: "helpScreenTip2",
  },
  helpScreenTip3: {
    defaultMessage: en.helpScreenTip3,
    description: "Help screen tip #3",
    id: "helpScreenTip3",
  },
  helpScreenTipHeader: {
    defaultMessage: en.helpScreenTipHeader,
    description: "Help screen tip header",
    id: "helpScreenTipHeader",
  },
  hintBoxHeader: {
    defaultMessage: en.hintBoxHeader,
    description: "Insurance SMS hintbox header",
    id: "hintBoxHeader",
  },
  hintBoxMessage: {
    defaultMessage: en.hintBoxMessage,
    description: "Insurance SMS hintbox",
    id: "hintBoxMessage",
  },
  initialInsuranceHeader: {
    defaultMessage: en.initialInsuranceHeader,
    description: "Insurance info header",
    id: "initialInsuranceHeader",
  },
  initialInsuranceText: {
    defaultMessage: en.initialInsuranceText,
    description: "Text for why insurance",
    id: "initialInsuranceText",
  },
  insuranceContinueButton: {
    defaultMessage: en.insuranceContinueButton,
    description: "Continue after accepting insurance info",
    id: "insuranceContinueButton",
  },
  insuranceDescription: {
    defaultMessage: en.insuranceDescription,
    description: "Insurance info description",
    id: "insuranceDescription",
  },
  newInsuranceCoverage: {
    defaultMessage: en.newInsuranceCoverage,
    description:
      "Solicitation to enter insurance coverage info in case we can reduce cost",
    id: "newInsuranceCoverage",
  },
  insuranceDisclaimer: {
    defaultMessage: en.insuranceDisclaimer,
    description:
      "Disclaimer for DTP applicants about working with insurance providers to reduce fees",
    id: "insuranceDisclaimer",
  },
  insuranceGroupInput: {
    defaultMessage: en.insuranceGroupInput,
    description: "Insurance group input",
    id: "insuranceGroupInput",
  },
  insuranceGroupInputHelperText: {
    defaultMessage: en.insuranceGroupInputHelperText,
    description: "Insurance group input helper text",
    id: "insuranceGroupInputHelperText",
  },
  insuranceGroupInputPlaceholder: {
    defaultMessage: en.insuranceGroupInputPlaceholder,
    description: "Insurance group input placeholder",
    id: "insuranceGroupInputPlaceholder",
  },
  insuranceHeader: {
    defaultMessage: en.insuranceHeader,
    description: "Insurance info header",
    id: "insuranceHeader",
  },
  insuranceInput: {
    defaultMessage: en.insuranceInput,
    description: "Insurance input description",
    id: "insuranceInput",
  },
  insuranceInputPlaceholder: {
    defaultMessage: en.insuranceInputPlaceholder,
    description: "Insurance input placeholder",
    id: "insuranceInputPlaceholder",
  },
  insuranceIssueDateInput: {
    defaultMessage: en.insuranceIssueDateInput,
    description: "Insurance issue date input",
    id: "insuranceIssueDateInput",
  },
  insuranceIssueDateInputPlaceholder: {
    defaultMessage: en.insuranceIssueDateInputPlaceholder,
    description: "Insurance issue date input placeholder",
    id: "insuranceIssueDateInputPlaceholder",
  },
  insuranceMemberInput: {
    defaultMessage: en.insuranceMemberInput,
    description: "Insurance member input",
    id: "insuranceMemberInput",
  },
  insuranceMemberInputPlaceholder: {
    defaultMessage: en.insuranceMemberInputPlaceholder,
    description: "Insurance member input placeholder",
    id: "insuranceMemberInputPlaceholder",
  },
  insuranceNextButton: {
    defaultMessage: en.insuranceNextButton,
    description: "Insurance next button",
    id: "insuranceNextButton",
  },
  insuranceNextConfirmButton: {
    defaultMessage: en.insuranceNextConfirmButton,
    description: "Insurance next confirm info button",
    id: "insuranceNextConfirmButton",
  },
  insuranceProviderInputPlaceholder: {
    defaultMessage: en.insuranceProviderInputPlaceholder,
    description: "Insurance provider input placeholder",
    id: "insuranceProviderInputPlaceholder",
  },
  insuranceRetakeButton: {
    defaultMessage: en.insuranceRetakeButton,
    description: "Reset the page to take photos again",
    id: "insuranceRetakeButton",
  },
  insuranceSMSButton: {
    defaultMessage: en.insuranceSMSButton,
    description: "Insurance SMS button",
    id: "insuranceSMSButton",
  },
  insuranceSMSButtonContinue: {
    defaultMessage: en.insuranceSMSButtonContinue,
    description: "Insurance SMS button continue",
    id: "insuranceSMSButtonContinue",
  },
  insuranceSMSDescription: {
    defaultMessage: en.insuranceSMSDescription,
    description: "Insurance sms description",
    id: "insuranceSMSDescription",
  },
  insuranceSMSSentButton: {
    defaultMessage: en.insuranceSMSSentButton,
    description: "Insurance SMS button link sent",
    id: "insuranceSMSSentButton",
  },
  insuranceSMSSentDescription: {
    defaultMessage: en.insuranceSMSSentDescription,
    description: "Insurance sms description",
    id: "insuranceSMSSentDescription",
  },
  insuranceScannerErrorMessage: {
    defaultMessage: en.insuranceScannerErrorMessage,
    description: "Error message to display",
    id: "insuranceScannerErrorMessage",
  },
  insuranceSmsSentSubHeader: {
    defaultMessage: en.insuranceSmsSentSubHeader,
    description: "Insurance sms subheader when the sms was sent",
    id: "insuranceSmsSentSubHeader",
  },
  insuranceSubHeader: {
    defaultMessage: en.insuranceSubHeader,
    description: "Insurance sms subheader",
    id: "insuranceSubHeader",
  },
  loadingMessage: {
    defaultMessage: en.loadingMessage,
    description: "Loading message to display",
    id: "loadingMessage",
  },
  manualInputLink: {
    defaultMessage: en.manualInputLink,
    description: "Button to edit insurance manually",
    id: "manualInputLink",
  },
  manualInsuranceText: {
    defaultMessage: en.manualInsuranceText,
    description: "Text describing manual input of your insurance",
    id: "manualInsuranceText",
  },
  nextStepDialogue: {
    defaultMessage: en.nextStepDialogue,
    description: "Thank you message",
    id: "nextStepDialogue",
  },
  nextStepDirectionContinue: {
    defaultMessage: en.nextStepDirectionContinue,
    description: "Simple directions for what to do next",
    id: "nextStepDirectionContinue",
  },
  nextStepDirectionLink: {
    defaultMessage: en.nextStepDirectionLink,
    description: "Sent email to",
    id: "nextStepDirectionLink",
  },
  nextStepSubheader: {
    defaultMessage: en.nextStepSubheader,
    description: "Sub header directing user to submit email again",
    id: "nextStepSubheader",
  },
  noInsuranceCard: {
    defaultMessage: en.noInsuranceCard,
    description: "Insurance no card",
    id: "noInsuranceCard",
  },
  nonEmailConfirmationBody: {
    defaultMessage: en.nonEmailConfirmationBody,
    description: "Description of next step after insurance form",
    id: "nonEmailConfirmationBody",
  },
  nonEmailConfirmationBodytwo: {
    defaultMessage: en.nonEmailConfirmationBodytwo,
    description: "Prompt to click next since insurance info is submitted",
    id: "nonEmailConfirmationBodytwo",
  },
  nonEmailConfirmationHeader: {
    defaultMessage: en.nonEmailConfirmationHeader,
    description: "Confirmation that insurance is submitted",
    id: "nonEmailConfirmationHeader",
  },
  nonEmailConfirmationSubBody: {
    defaultMessage: en.nonEmailConfirmationSubBody,
    description: "Prompt to reach out to EA for eligibility questions",
    id: "nonEmailConfirmationSubBody",
  },
  nonSubmitMessage: {
    defaultMessage: en.nonSubmitMessage,
    description: "Description of next step after insurance form",
    id: "nonSubmitMessage",
  },
  primaryInsuranceClarificationLbl: {
    defaultMessage: en.primaryInsuranceClarificationLbl,
    description: "Primary insurance clarification",
    id: "primaryInsuranceClarificationLbl",
  },
  primaryInsuranceHeader: {
    defaultMessage: en.primaryInsuranceHeader,
    description: "Primary insurance header",
    id: "primaryInsuranceHeader",
  },
  primaryInsuranceRadioLbl: {
    defaultMessage: en.primaryInsuranceRadioLbl,
    description: "Primary insurance radio selector label",
    id: "primaryInsuranceRadioLbl",
  },
  primaryInsuranceRequirementLbl: {
    defaultMessage: en.primaryInsuranceRequirementLbl,
    description: "Primary insurance requirement",
    id: "primaryInsuranceRequirementLbl",
  },
  readyButton: {
    defaultMessage: en.readyButton,
    description: "Button to proceed to insurance collection",
    id: "readyButton",
  },
  requiredErrorText: {
    defaultMessage: en.requiredErrorText,
    description: "Error message for a required field",
    id: "requiredErrorText",
  },
  resendTheEmail: {
    defaultMessage: en.resendTheEmail,
    description: "Link to send the email again",
    id: "resendTheEmail",
  },
  retryButton: {
    defaultMessage: en.retryButton,
    description: "Button to retry capturing insurance",
    id: "retryButton",
  },
  reviewInsuranceInfo: {
    defaultMessage: en.reviewInsuranceInfo,
    description: "Asks users to double check their insurance information",
    id: "reviewInsuranceInfo",
  },
  scanInsuranceHeader: {
    defaultMessage: en.scanInsuranceHeader,
    description: "Insurance scan header",
    id: "scanInsuranceHeader",
  },
  scannerTroubleBackButton: {
    defaultMessage: en.scannerTroubleBackButton,
    description: "Specific button for scanner trouble to try again",
    id: "scannerTroubleBackButton",
  },
  scannerTroubleContinueButton: {
    defaultMessage: en.scannerTroubleContinueButton,
    description: "Scanner button to continue",
    id: "scannerTroubleContinueButton",
  },
  skipInput: {
    defaultMessage: en.skipInput,
    description: "Provides ability to skip insurance input",
    id: "skipInput",
  },
  logInHere: {
    id: "logInHere",
    defaultMessage: en.logInHere,
    description: "Link for the user to log in, used in EP",
  },
  alreadyHaveAccount: {
    id: "alreadyHaveAccount",
    defaultMessage: en.alreadyHaveAccount,
    description: "Label to ask user if they have account, used in EP",
  },
  newHHTitle: {
    id: "newHHTitle",
    defaultMessage: en.newHHTitle,
    description:
      "Title for callout telling user they have a new healthy habit, used in Atlas",
  },
  newHHDescription: {
    id: "newHHDescription",
    defaultMessage: en.newHHDescription,
    description:
      "Description in callout telling user they have a new healthy habit, used in Atlas",
  },
  newHHButtonLabel: {
    id: "newHHButtonLabel",
    defaultMessage: en.newHHButtonLabel,
    description:
      "Button label for callout telling user they have a new healthy habit, used in Atlas",
  },
  dismiss: {
    id: "dismiss",
    defaultMessage: en.dismiss,
    description: "The word Dismiss, used in Atlas",
  },
  invalidAddress: {
    id: "invalidAddress",
    defaultMessage: en.invalidAddress,
    description:
      "Message shown when a USPS validation of an address has failed",
  },
  verifyEmailAddress: {
    id: "verifyEmailAddress",
    defaultMessage: en.verifyEmailAddress,
    description: "Header to verify email address, used in EP",
  },
  resendEmail: {
    id: "resendEmail",
    defaultMessage: en.resendEmail,
    description: "Button to resend email, used in EP",
  },
  resendVerificationEmailToConfirm: {
    id: "resendVerificationEmailToConfirm",
    defaultMessage: en.resendVerificationEmailToConfirm,
    description: "Instructions for resending email verification, used in EP",
  },
  checkEmailAndFollowLink: {
    id: "checkEmailAndFollowLink",
    defaultMessage: en.checkEmailAndFollowLink,
    description: "Instruction on how to verify email, used in EP",
  },
  verificationSentCheckInbox: {
    id: "verificationSentCheckInbox",
    defaultMessage: en.verificationSentCheckInbox,
    description: "Message when verification is sent, used in EP",
  },
  verificationLinkExpired: {
    id: "verificationLinkExpired",
    defaultMessage: en.verificationLinkExpired,
    description:
      "Error message for expired email verification link, used in EP.",
  },
  verificationLinkInvalidOrAlreadyUsed: {
    id: "verificationLinkInvalidOrAlreadyUsed",
    defaultMessage: en.verificationLinkInvalidOrAlreadyUsed,
    description:
      "Error message for invalid or already used verification link, used in EP.",
  },
  couldNotSendVerificationSMS: {
    id: "couldNotSendVerificationSMS",
    defaultMessage: en.couldNotSendVerificationSMS,
    description:
      "Error message for failing to send verification SMS, used in EP",
  },
  couldNotConfirmPhone: {
    id: "couldNotConfirmPhone",
    defaultMessage: en.couldNotConfirmPhone,
    description: "Error message for failing to confirm SMS code, used in EP",
  },
  phoneVerifyHeader: {
    id: "phoneVerifyHeader",
    defaultMessage: en.phoneVerifyHeader,
    description: "Phone verification page header, used in EP",
  },
  sentVerificationCodeNoPhone: {
    id: "sentVerificationCodeNoPhone",
    defaultMessage: en.sentVerificationCodeNoPhone,
    description:
      "Message when verification is sent but not logged in, used in EP",
  },
  thankYou: {
    id: "thankYou",
    defaultMessage: en.thankYou,
    description: "Thank you message, used in EP",
  },
  verfiedPhone: {
    id: "verfiedPhone",
    defaultMessage: en.verfiedPhone,
    description: "Phone verified message, used in EP",
  },
  questionsBI: {
    id: "questionsBI",
    defaultMessage: en.questionsBI,
    description: "Generic questions message, used in EP",
  },
  fetchIntakeCallStatusAndEventsFailedWarning: {
    id: "fetchIntakeCallStatusAndEventsFailedWarning",
    defaultMessage: en.fetchIntakeCallStatusAndEventsFailedWarning,
    description:
      "Warning message when fetching intake call status and scheduled events fail, used in EP",
  },
  eligibilityVerified: {
    id: "eligibilityVerified",
    defaultMessage: en.eligibilityVerified,
    description:
      "Message that lets patient know their eligiiblity has been verified, used in EP",
  },
  coverage: {
    id: "coverage",
    defaultMessage: en.coverage,
    description: 'The word "Coverage", used in EP',
  },
  lookingIntoIt: {
    id: "lookingIntoIt",
    defaultMessage: en.lookingIntoIt,
    description: "Looking into it message, used in EP",
  },
  unableToVerifyEligibility: {
    id: "unableToVerifyEligibility",
    defaultMessage: en.unableToVerifyEligibility,
    description: "Eligibility unable to be verified, used in EP",
  },
  verifyingCoverageParagraph: {
    id: "verifyingCoverageParagraph",
    defaultMessage: en.verifyingCoverageParagraph,
    description:
      "Currently working on verifying their coverage message, used in EP",
  },
  skip: {
    id: "skip",
    defaultMessage: en.skip,
    description: "The word Skip, used in EP",
  },
  editInfo: {
    id: "editInfo",
    defaultMessage: en.editInfo,
    description: "The message edit info, used in EP",
  },
  insuranceDisclaimerLong: {
    id: "insuranceDisclaimerLong",
    defaultMessage: en.insuranceDisclaimerLong,
    description:
      "Lets patient know that Virta will try to work with insurance to reduce out of pocket costs, used in EP",
  },
  reviewingHealthInfo: {
    id: "reviewingHealthInfo",
    defaultMessage: en.reviewingHealthInfo,
    description: "Reviewing patients health info, used in EP",
  },
  contactSupportHeader: {
    id: "contactSupportHeader",
    defaultMessage: en.contactSupportHeader,
    description: "Header to help guide users to contact support, used in EP",
  },
  contactSupportBody: {
    id: "contactSupportBody",
    defaultMessage: en.contactSupportBody,
    description: "Body to help guide users to contact support in EP",
  },
  basicInformationCompletedTitle: {
    id: "basicInformationCompletedTitle",
    defaultMessage: en.basicInformationCompletedTitle,
    description: "Header describing the BI completed page, used in EP",
  },
  basicInformationCompletedDescription: {
    id: "basicInformationCompletedDescription",
    defaultMessage: en.basicInformationCompletedDescription,
    description:
      "Description on BI continued page when BI is completed, used in EP",
  },
  alreadySubmittedFormUnifiedBI: {
    defaultMessage: en.alreadySubmittedFormUnifiedBI,
    description:
      "Message that is shown when BI is already completed and cannot be edited",
    id: "alreadySubmittedFormUnifiedBI",
  },
  basicInfoComplete: {
    defaultMessage: en.basicInfoComplete,
    description:
      "Title of the page that indicates that BI is already completed",
    id: "basicInfoComplete",
  },
  cellPhone: {
    defaultMessage: en.cellPhone,
    description: "Cell Phone label",
    id: "cellPhone",
  },
  confirmPassword: {
    defaultMessage: en.confirmPassword,
    description: "Confirm Password label",
    id: "confirmPassword",
  },
  congratsFirstStep: {
    defaultMessage: en.congratsFirstStep,
    description: "Subtitle of the top-of-funnel email entry page",
    id: "congratsFirstStep",
  },
  createProfile: {
    defaultMessage: en.createProfile,
    description: "Title for the profile page in EP",
    id: "createProfile",
  },
  emailSent: {
    defaultMessage: en.emailSent,
    description: "Notice that an email has been sent",
    id: "emailSent",
  },
  encounteredError: {
    defaultMessage: en.encounteredError,
    description: "Message about encountering an error",
    id: "encounteredError",
  },
  enterEmailAddress: {
    defaultMessage: en.enterEmailAddress,
    description: "Prompt to enter enail address",
    id: "enterEmailAddress",
  },
  passwordMismatch: {
    defaultMessage: en.passwordMismatch,
    description: "Notice that passwords are mismatched",
    id: "passwordMismatch",
  },
  recommendPersonalEmailAddress: {
    defaultMessage: en.recommendPersonalEmailAddress,
    description:
      "Helper text to nudge people to use personal rather than work emails",
    id: "recommendPersonalEmailAddress",
  },
  startProfile: {
    defaultMessage: en.startProfile,
    description:
      "Prompt to start profile and justification for entering password (save progress)",
    id: "startProfile",
  },
  welcomeToVirta: {
    defaultMessage: en.welcomeToVirta,
    description: "Title for the top-of-funnel",
    id: "welcomeToVirta",
  },
  weAreSorry: {
    defaultMessage: en.weAreSorry,
    description: "An expression of regret",
    id: "weAreSorry",
  },
  logInWithAccount: {
    defaultMessage: en.logInWithAccount,
    description: "Prompt with a link to the login page",
    id: "logInWithAccount",
  },
  somethingsNotRight: {
    id: "somethingsNotRight",
    defaultMessage: en.somethingsNotRight,
    description: "Header for troubleshooting coverage in EP",
  },
  timeoutCoverage: {
    id: "timeoutCoverage",
    defaultMessage: en.timeoutCoverage,
    description: "Body for timeout copy getting eligibility responses in EP",
  },
  eligibilityVerifiedFinalSteps: {
    id: "eligibilityVerifiedFinalSteps",
    defaultMessage: en.eligibilityVerifiedFinalSteps,
    description: "Body for eligibility verified for final steps in EP",
  },
  eligibilityVerifiedStandAlone: {
    id: "eligibilityVerifiedStandAlone",
    defaultMessage: en.eligibilityVerifiedStandAlone,
    description:
      "Body for eligibility verified for stand alone eligibiltiy check page EP",
  },
  greeting: {
    id: "greeting",
    defaultMessage: en.greeting,
    description: "Basic hello message",
  },
  searchAllCategories: {
    id: "searchAllCategories",
    defaultMessage: en.searchAllCategories,
    description:
      "placeholder for search input on Discover tab used by PA Web, PA Mobile",
  },
  generalHealthConditionsDetails: {
    id: "generalHealthConditionsDetails",
    defaultMessage: en.generalHealthConditionsDetails,
    description: "Error message for general health condition details field, EP",
  },
  weTakePrivacySeriously: {
    id: "weTakePrivacySeriously",
    defaultMessage: en.weTakePrivacySeriously,
    description: "placeholder for empty enrollment steps in left sidebar, EP",
  },
  cellMobileOnly: {
    id: "cellMobileOnly",
    defaultMessage: en.cellMobileOnly,
    description: "helper text on mobile phone input EP",
  },
  toContinueVerifyPhone: {
    id: "toContinueVerifyPhone",
    defaultMessage: en.toContinueVerifyPhone,
    description: "subheader on phone number input verification page, EP",
  },
  weWillSendCodeViaSms: {
    id: "weWillSendCodeViaSms",
    defaultMessage: en.weWillSendCodeViaSms,
    description: "notice header on phone number input verification page, EP",
  },
  pleaseHavePhoneAvailable: {
    id: "pleaseHavePhoneAvailable",
    defaultMessage: en.pleaseHavePhoneAvailable,
    description: "notice subheader on phone number input verification page, EP",
  },
  verifyPhoneAndSendCode: {
    id: "verifyPhoneAndSendCode",
    defaultMessage: en.verifyPhoneAndSendCode,
    description: "body header on phone number input verification page, EP",
  },
  sendCodeOnNextPage: {
    id: "sendCodeOnNextPage",
    defaultMessage: en.sendCodeOnNextPage,
    description: "body text on on phone number input verification page, EP",
  },
  fileTypes: {
    id: "fileTypes",
    defaultMessage: en.fileTypes,
    description:
      "placeholder for acceptable file types for insurance card uploads",
  },
  uploadImage: {
    id: "uploadImage",
    defaultMessage: en.uploadImage,
    description: "placeholder for uploading image copy",
  },
  imageFileSize: {
    id: "imageFileSize",
    defaultMessage: en.imageFileSize,
    description: "placeholder for max image size",
  },
  attachImageTroubleShooting: {
    id: "attachImageTroubleShooting",
    defaultMessage: en.attachImageTroubleShooting,
    description:
      "placeholder for troubleshooting coverage and uploading insurance images",
  },
  front: {
    id: "front",
    defaultMessage: en.front,
    description: "placeholder for card front",
  },
  back: {
    id: "back",
    defaultMessage: en.back,
    description: "placeholder for card back",
  },
  upload: {
    id: "upload",
    defaultMessage: en.upload,
    description: "placeholder for upload",
  },
  possibleUpdates: {
    id: "possibleUpdates",
    defaultMessage: en.possibleUpdates,
    description:
      "Header text for possible updates for correted eligibility information",
  },
  suggestedInformation: {
    id: "suggestedInformation",
    defaultMessage: en.suggestedInformation,
    description: "Suggested information for correted eligibility information",
  },
  originalInformation: {
    id: "originalInformation",
    defaultMessage: en.originalInformation,
    description: "Original information for correted eligibility information",
  },
  mobilePhoneNumber: {
    id: "mobilePhoneNumber",
    defaultMessage: en.mobilePhoneNumber,
    description: "mobile phone number label, EP",
  },
  stillHavingTroubleContactUs: {
    id: "stillHavingTroubleContactUs",
    defaultMessage: en.stillHavingTroubleContactUs,
    description: "having trouble, contact us label, EP",
  },
  contentRecommendationForYouName: {
    id: "contentRecommendationForYouName",
    defaultMessage: en.contentRecommendationForYouName,
    description: "Content Recommendation carousel title",
  },
  contentRecommendationForYouDescription: {
    id: "contentRecommendationForYouDescription",
    defaultMessage: en.contentRecommendationForYouDescription,
    description: "Content Recommendation carousel description",
  },
  enterCodeSent: {
    id: "enterCodeSent",
    defaultMessage: en.enterCodeSent,
    description: "enter SMS code label, EP",
  },
  red: {
    id: "red",
    defaultMessage: en.red,
    description: "Copy in corrected eligiibity info",
  },
  optionalPreferredName: {
    id: "optionalPreferredName",
    defaultMessage: en.optionalPreferredName,
    description: "Helper text for preferred name in the enrollment portal",
  },
  mealPlan: {
    id: "mealPlan",
    defaultMessage: en.mealPlan,
    description:
      "Popular search option for Discover search used in PA Web & Mobile",
  },
  snacks: {
    id: "snacks",
    defaultMessage: en.snacks,
    description:
      "Popular search option for Discover search used in PA Web & Mobile",
  },
  vegetables: {
    id: "vegetables",
    defaultMessage: en.vegetables,
    description:
      "Popular search option for Discover search used in PA Web & Mobile",
  },
  breakfast: {
    id: "breakfast",
    defaultMessage: en.breakfast,
    description:
      "Popular search option for Discover search used in PA Web & Mobile",
  },
  diabetesDiagnosis: {
    id: "diabetesDiagnosis",
    defaultMessage: en.diabetesDiagnosis,
    description: "Diabetes diagnosis field, used in EP",
  },
  coverageInformation: {
    id: "coverageInformation",
    defaultMessage: en.coverageInformation,
    description: "Coverage information field, used in EP",
  },
  isOnDialysis: {
    id: "isOnDialysis",
    defaultMessage: en.isOnDialysis,
    description: "Is on dialysis field, used in EP",
  },
  isOnDiabetesMedsNotMetformin: {
    id: "isOnDiabetesMedsNotMetformin",
    defaultMessage: en.isOnDiabetesMedsNotMetformin,
    description: "Is on diabetes meds not metformin field, used in EP",
  },
  hasTakenInsulin2: {
    id: "hasTakenInsulin2",
    defaultMessage: en.hasTakenInsulin2,
    description: "Has taken insulin field 2, used in EP",
  },
  insulinStartYear: {
    id: "insulinStartYear",
    defaultMessage: en.insulinStartYear,
    description: "Insulin start year field, used in EP",
  },
  insulinEndYear: {
    id: "insulinEndYear",
    defaultMessage: en.insulinEndYear,
    description: "Insulin end year field, used in EP",
  },
  hasKnowledgeOfVirtaTreatment: {
    id: "hasKnowledgeOfVirtaTreatment",
    defaultMessage: en.hasKnowledgeOfVirtaTreatment,
    description: "Has knowledge of Virta treatment field, used in EP",
  },
  isReadyToStartTreatment: {
    id: "isReadyToStartTreatment",
    defaultMessage: en.isReadyToStartTreatment,
    description: "Is ready to start treatment field, used in EP",
  },
  referralChannelOpt: {
    id: "referralChannelOpt",
    defaultMessage: en.referralChannelOpt,
    description: "Referral channel option field, used in EP",
  },
  isWillingToAdoptKeto: {
    id: "isWillingToAdoptKeto",
    defaultMessage: en.isWillingToAdoptKeto,
    description: "Is willing to adopt keto field, used in EP",
  },
  shop: {
    id: "shop",
    defaultMessage: en.shop,
    description: "The word Shop, used in PA Web and Mobile",
  },
  virtaStore: {
    id: "virtaStore",
    defaultMessage: en.virtaStore,
    description: "The phrase Virta Store, used in PA Web and Mobile",
  },
  takingMedsReferral: {
    id: "takingMedsReferral",
    defaultMessage: en.takingMedsReferral,
    description:
      "Input to collect referral applicant taking other diabetes medications",
  },
  haveSmartphoneReferral: {
    id: "haveSmartphoneReferral",
    defaultMessage: en.haveSmartphoneReferral,
    description: "Input to check if referral applicant has smartphone",
  },
  smsVerificationCode: {
    id: "smsVerificationCode",
    defaultMessage: en.smsVerificationCode,
    description: "Code your phone was sent on SMS verfication",
  },
  pairMeterCalloutTitle: {
    id: "pairMeterCalloutTitle",
    defaultMessage: en.pairMeterCalloutTitle,
    description:
      "Callout title used when its time to pair keto mojo device. Used in participant_app_ios",
  },
  pairMeterCalloutDescription: {
    id: "pairMeterCalloutDescription",
    defaultMessage: en.pairMeterCalloutDescription,
    description:
      "Callout description telling user to pair their keto mojo device. Used in participant_app_ios",
  },
  pairMeter: {
    id: "pairMeter",
    defaultMessage: en.pairMeter,
    description: "The words Pair meter. Used in participant_app_ios",
  },
  notNow: {
    id: "notNow",
    defaultMessage: en.notNow,
    description: "The words Not now. Used in participant_app_ios",
  },
  meterLookingTitle: {
    id: "meterLookingTitle",
    defaultMessage: en.meterLookingTitle,
    description: "Title for looking step of pairing KM meter. Used in atlas",
  },
  meterDetectedTitle: {
    id: "meterDetectedTitle",
    defaultMessage: en.meterDetectedTitle,
    description: "Title for detected step of pairing KM meter. Used in atlas",
  },
  meterConfirmTitle: {
    id: "meterConfirmTitle",
    defaultMessage: en.meterConfirmTitle,
    description: "Title for confirm step of pairing KM meter. Used in atlas",
  },
  meterSuccessTitle: {
    id: "meterSuccessTitle",
    defaultMessage: en.meterSuccessTitle,
    description: "Title for success step of pairing KM meter. Used in atlas",
  },
  meterLookingDescription: {
    id: "meterLookingDescription",
    defaultMessage: en.meterLookingDescription,
    description:
      "Description for looking step of pairing KM meter. Used in atlas",
  },
  meterDetectedDescription: {
    id: "meterDetectedDescription",
    defaultMessage: en.meterDetectedDescription,
    description:
      "Description for detected step of pairing KM meter. Used in atlas",
  },
  meterConfirmDescriptionTop: {
    id: "meterConfirmDescriptionTop",
    defaultMessage: en.meterConfirmDescriptionTop,
    description:
      "Top half of description for confirm step of pairing KM meter. Used in atlas",
  },
  meterConfirmDescriptionBottom: {
    id: "meterConfirmDescriptionBottom",
    defaultMessage: en.meterConfirmDescriptionBottom,
    description:
      "Bottom half of description for confirm step of pairing KM meter. Used in atlas",
  },
  readSupportArticle: {
    id: "readSupportArticle",
    defaultMessage: en.readSupportArticle,
    description:
      "Link text to read support article during confirmation step of pairing KM meter. Used in atlas",
  },
  meterSuccessDescriptionTop: {
    id: "meterSuccessDescriptionTop",
    defaultMessage: en.meterSuccessDescriptionTop,
    description:
      "Top half of description for success step of pairing KM meter. Used in atlas",
  },
  meterSuccessDescriptionBottom: {
    id: "meterSuccessDescriptionBottom",
    defaultMessage: en.meterSuccessDescriptionBottom,
    description:
      "Bottom half of description for success step of pairing KM meter. Used in atlas",
  },
  pushNotificationSettingsDescription: {
    id: "pushNotificationSettingsDescription",
    defaultMessage: en.pushNotificationSettingsDescription,
    description: "What the push notification setting controls. Used in mobile",
  },
  pushNotificationSettingsWarning: {
    id: "pushNotificationSettingsWarning",
    defaultMessage: en.pushNotificationSettingsWarning,
    description:
      "Why you shouldn't opt out of push notifications. Used in mobile",
  },
  meterErrorTitle: {
    id: "meterErrorTitle",
    defaultMessage: en.meterErrorTitle,
    description:
      "Title for the error screen when pairing KM meter. Used in atlas",
  },
  meterErrorDescriptionTop: {
    id: "meterErrorDescriptionTop",
    defaultMessage: en.meterErrorDescriptionTop,
    description:
      "Top half of description for the error screen when pairing KM meter. Used in atlas",
  },
  meterErrorDescriptionBottom: {
    id: "meterErrorDescriptionBottom",
    defaultMessage: en.meterErrorDescriptionBottom,
    description:
      "Bottom half of description for the error screen when pairing KM meter. Used in atlas",
  },
  goToSettings: {
    id: "goToSettings",
    defaultMessage: en.goToSettings,
    description:
      "The action button text to bring the user to their device's settings. Used in participant_app_ios",
  },
  turnOnBluetoothTitle: {
    id: "turnOnBluetoothTitle",
    defaultMessage: en.turnOnBluetoothTitle,
    description:
      "The title for the modal telling the user to turn on bluetooth. Used in participant_app_ios",
  },
  turnOnBluetoothDescription: {
    id: "turnOnBluetoothDescription",
    defaultMessage: en.turnOnBluetoothDescription,
    description:
      "The description for the modal telling the user to turn on bluetooth. Used in atlas",
  },
  authorizeBluetoothTitle: {
    id: "authorizeBluetoothTitle",
    defaultMessage: en.authorizeBluetoothTitle,
    description:
      "The title for the modal asking the user to authorize bluetooth. Used in participant_app_ios",
  },
  authorizeBluetoothDescription: {
    id: "authorizeBluetoothDescription",
    defaultMessage: en.authorizeBluetoothDescription,
    description:
      "The description for the modal asking the user to authorize bluetooth. Used in atlas",
  },
  ...forms,
  ...login,
  ...navigation,
  ...profile,
  ...primitives,
  ...languages,
  ...months,
  ...numbers,
  ...states,
  ...aboutYou1,
  ...aboutYou2,
  ...aboutYou3,
  ...aboutYou4,
  ...basicInformation,
  ...eligibility,
  ...finalSteps,
  ...healthProfile1,
  ...healthProfile2,
  ...healthProfile3,
  ...healthProfile4,
  ...healthProfile5,
  ...healthProfile6,
  ...healthProfile7,
  ...healthProfile8,
  ...intakeScheduling,
  ...leadCapture,
  ...status,
  ...physicianSearch,
  ...disqualifications,
  ...nonQualifications,
  ...popularFood,
  ...virtaMeter,
};

/**
 * New preferred way of accessing messages. As you can see from the type below,
 * we're expecting a symmetrical, 2-layer deep structure here, for the purposes
 * of typing simplicity. We may need to revisit this if we want a more complex
 * structure.
 */
export const messageTree: Record<
  string,
  Record<string, Record<string, MessageDescriptor>>
> = {
  common: {
    forms,
    login,
    navigation,
    primitives,
    profile,
  },
  constants: {
    languages,
    months,
    numbers,
    states,
  },
  enrollment: {
    aboutYou1,
    aboutYou2,
    aboutYou3,
    aboutYou4,
    basicInformation,
    eligibility,
    finalSteps,
    healthProfile1,
    healthProfile2,
    healthProfile3,
    healthProfile4,
    healthProfile5,
    healthProfile6,
    healthProfile7,
    healthProfile8,
    intakeScheduling,
    leadCapture,
    status,
    physicianSearch,
    disqualifications,
    nonQualifications,
  },
  food: {
    popularFood,
  },
  biomarkers: {
    virtaMeter,
  },
};

/* eslint-enable max-lines */
