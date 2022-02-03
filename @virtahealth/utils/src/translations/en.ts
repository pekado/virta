/* eslint-disable max-lines */

import { en as forms } from "./messages/common/forms";
import { en as login } from "./messages/common/login";
import { en as navigation } from "./messages/common/navigation";
import { en as primitives } from "./messages/common/primitives";
import { en as profile } from "./messages/common/profile";

import { en as languages } from "./messages/constants/languages";
import { en as months } from "./messages/constants/months";
import { en as numbers } from "./messages/constants/numbers";
import { en as states } from "./messages/constants/states";

import { en as aboutYou1 } from "./messages/enrollment/aboutYou1";
import { en as aboutYou2 } from "./messages/enrollment/aboutYou2";
import { en as aboutYou3 } from "./messages/enrollment/aboutYou3";
import { en as aboutYou4 } from "./messages/enrollment/aboutYou4";
import { en as basicInformation } from "./messages/enrollment/basicInformation";
import { en as eligibility } from "./messages/enrollment/eligibility";
import { en as finalSteps } from "./messages/enrollment/finalSteps";
import { en as healthProfile1 } from "./messages/enrollment/healthProfile1";
import { en as healthProfile2 } from "./messages/enrollment/healthProfile2";
import { en as healthProfile3 } from "./messages/enrollment/healthProfile3";
import { en as healthProfile4 } from "./messages/enrollment/healthProfile4";
import { en as healthProfile5 } from "./messages/enrollment/healthProfile5";
import { en as healthProfile6 } from "./messages/enrollment/healthProfile6";
import { en as healthProfile7 } from "./messages/enrollment/healthProfile7";
import { en as healthProfile8 } from "./messages/enrollment/healthProfile8";
import { en as intakeScheduling } from "./messages/enrollment/intakeScheduling";
import { en as leadCapture } from "./messages/enrollment/leadCapture";
import { en as status } from "./messages/enrollment/status";
import { en as physicianSearch } from "./messages/enrollment/physicianSearch";
import { en as disqualifications } from "./messages/enrollment/disqualifications";
import { en as nonQualifications } from "./messages/enrollment/nonQualifications";
import { en as popularFood } from "./messages/food/popular";
import { en as virtaMeter } from "./messages/biomarkers/virtaMeter";

export const en: Record<string, string> = {
  fillAllFields:
    "Please make sure all the fields have been filled out and retry",
  somethingWrongLoggedOut:
    "Something went wrong, and you appear to be logged out",
  somethingWrongOurEnd:
    "Something went wrong on our end, please retry, and if the issue persists contact support@virtahealth.com",
  bloodPressure: "Blood Pressure",
  glucose: "Blood Glucose",
  ketones: "Ketones",
  symptoms: "Symptoms",
  emptyString: " ",
  greetingMorning: "Good morning, {name}",
  greetingEvening: "Good evening, {name}",
  greetingAfternoon: "Good afternoon, {name}",
  today: "Today",
  history: "History",
  coaching: "Coaching",
  community: "Community",
  more: "More",
  profileTitle: "My Profile",
  learn: "Learn",
  support: "Support",
  test: "Test",
  logOut: "Log out",
  settings: "Settings",
  weeklySummary: "Weekly Summary",
  carePlanTitle: "My Care Plan",
  hrLoveTitle: "❤ Your HR Department",
  skills: "Skills",
  resourceCenter: "Resource Center",
  educationalVideos: "Educational Videos",
  foodGuide: "Food Guide",
  virtaCheatSheet: "Virta Cheat Sheet",
  testNotificationsButton: "Test Push Notifications",
  supportCenter: "Support Center",
  requestSupplies: "Request Supplies",
  coachChangeTitle: "Request Coach Change",
  feedback: "Feedback",
  biomarkerHeading: "Biomarker Tracking",
  symptomFrequency: "As needed",
  biomarkerFrequencyAtLeast: "At least {frequency}x/{cadence}",
  biomarkerFrequencySuggested: "Suggested {frequency}x/{cadence}",
  week: "week",
  day: "day",
  tryAgain: "Try Again",
  delete: "Delete",
  biomarkerSaveError: "The last reading couldn't be uploaded",
  dailyLog: "Daily Log",
  cancel: "Cancel",
  confirm: "Confirm",
  timeOfMeasurementLabel: "Time Measured",
  accessibilityButtonLabel: "{label} button",
  save: "Save",
  over: "over",
  accessibilityInputLabel: "{label} input",
  cuffIssues: "Having issues with your cuff?",
  supportArticleViewLink: "View Support Center article",
  "mg/dl": "mg/dl",
  lbs: "lbs",
  "mmol/L": "mmol/L",
  "mm Hg": "mm Hg",
  g: "g",
  oz: "oz",
  troubleshootingViewLink: "Visit our troubleshooting guide",
  scaleIssues: "Scale not recording automatically?",
  confirmWeight: "Confirm Weight",
  weightConfirmationWarning:
    "The weight you entered is significantly different from your last entry of {latestWeight}. Please check this value and submit again if it is correct.",
  ok: "OK",
  highKetoneInstructions:
    'If your meter reads "HI" as a ketone value, enter {MAX_KETONE_VALUE} and seek emergency care immediately.',
  ketoneSupplyTitle: "Need more supplies?",
  ketoneSupplyLink: "Learn how to order more supplies",
  confirmKetones: "Confirm Ketones",
  highKetonesConfirmationWarning:
    "Ketone readings greater than {WARNING_KETONE_VALUE} are abnormally high. Please confirm this is correct.",
  abnormalKetonesConfirmationWarning:
    "{ketone_value} is much {modifier} than your last reading of {previous_ketone_value}. Please confirm this is correct.",
  abnormalKetonesLess: "less",
  abnormalKetonesGreater: "greater",
  preMeal: "Pre Meal",
  afterMeal: "After meal",
  fasting: "Fasting",
  glucoseFastingDescription:
    "Glucose values taken at least 8 hours after last caloric intake (food or drink)",
  glucoseAfterMealDescription:
    "Glucose values taken after meal (may include bedtime values)",
  glucosePreMealDescription:
    "Glucose values taken just before meal (ideally within 30 minutes prior to eating)",
  timeSinceMeal0: "Immediately",
  timeSinceMeal1: "Within 1 hour",
  timeSinceMeal2: "2 hours",
  timeSinceMeal35: "3-5 hours",
  timeSinceMeal68: "6-8 hours",
  timeSinceMeal8: "More than 8 hours",
  glucoseReadingInstructions:
    "If your glucometer reads 'HI' enter {MAX_GLUCOSE_VALUE}.\nIf it reads 'LO' enter {MIN_GLUCOSE_VALUE}.",
  readingType: "Reading Type",
  timeSinceMealPrompt: "How long after your meal?",
  meterIssues: "Having issues with your meter?",
  headache: "Headache",
  symptomCrampsTwitching: "Muscle Cramps / Twitching",
  dizziness: "Dizziness",
  fatigue: "Fatigue",
  constipation: "Constipation",
  diarrhea: "Diarrhea",
  nausea: "Nausea",
  vomiting: "Vomiting",
  symptomFainting: "Fainting / Passing Out",
  heartPalpitations: "Heart Palpitations",
  great: "Great",
  good: "Good",
  okay: "Okay",
  bad: "Bad",
  no: "No",
  sometimes: "Sometimes",
  often: "Often",
  always: "Always",
  yes: "Yes",
  high: "High",
  medium: "Medium",
  low: "Low",
  veryLow: "Very Low",
  symptomsTroubleshootingQuestion:
    "Would you like more information about your symptom?",
  symptomsCoachQuestion: "Would you like to discuss this with your coach?",
  symptomsTroubleshootingPrompt:
    "We'll ask you a series of troubleshooting questions to help you understand your symptom",
  selectAnswerPrompt: 'Please select an answer for "{question}"',
  additionalDetailsPrompt: "Share more details with your coach (optional)",
  additionalDetailsExcludeInfo:
    "Note: There's no need to enter ketone and glucose values here.",
  otherSymptomsMaxLengthError:
    "Max characters allowed {MAX_OTHER_SYMPTOMS_LENGTH}",
  symptomsPrompt:
    "Let us know how you're feeling. Please only share any new or worsening symptoms.",
  mood: "Mood",
  hunger: "Hunger",
  cravings: "Cravings",
  energy: "Energy",
  validWeightPrompt: "Please enter a valid weight",
  validWeightBetweenPrompt:
    "Please enter a valid weight between {MIN_WEIGHT} and {MAX_WEIGHT} lbs.",
  validGlucosePrompt: "Please enter a valid blood glucose reading.",
  glucoseTooHighPrompt:
    "If your blood glucose reading is above {MAX_GLUCOSE_VALUE}, contact your Health Coach immediately.",
  glucoseTooLowPrompt:
    "If your blood glucose reading is below {MIN_GLUCOSE_VALUE}, contact your Health Coach immediately.",
  measurementTimeRequired:
    "Please choose a time of measurement for your reading",
  measurementTypeRequired: "Please choose a Reading Type",
  measurementAfterMealTimeRequired:
    "Please include the length of time after meal the reading was taken",
  validKetonesPrompt: "Please enter a valid ketones value.",
  singleDecimalPrompt: "Please enter only one decimal place, e.g. 0.5",
  ketonesTooLowPrompt:
    "Please enter valid ketones reading, i.e. a positive number.",
  ketonesTooHighPrompt:
    "Ketone values higher than {MAX_KETONE_VALUE} are very unusual. If you made a mistake please re-enter your value. If this is an actual value, please seek emergency care immediately.",
  validBloodPressurePrompt: "Please enter a valid blood pressure",
  wholeNumberPrompt: "Please enter a whole number",
  validBloodPressureTopBetweenPrompt:
    "Please enter a valid systolic (top) pressure (usually between {MIN_SYSTOLIC_BP_VALUE} and {MAX_SYSTOLIC_BP_VALUE}).",
  validBloodPressureBottomBetweenPrompt:
    "Please enter a valid diastolic (bottom) pressure (usually between {MIN_DIASTOLIC_BP_VALUE} and {MAX_DIASTOLIC_BP_VALUE}).",
  symptomsAtLeastOnePrompt: "Please log at least one item.",
  readingSubmitError: "Failed to submit reading",
  weightSubmitSuccess: "Weight submitted successfully.",
  bloodPressureSubmitSuccess: "Blood pressure submitted successfully.",
  ketonesSubmitSuccess: "Ketones submitted successfully.",
  symptomsSubmitSuccess: "Daily log submitted successfully.",
  glucoseSubmitSuccess: "Glucose submitted successfully.",
  biometricsSubmitSuccess: "Biometrics submitted successfully.",
  done: "Done",
  ketonesReflectonHeader: "Understand Your Ketones",
  glucoseReflectionHeader: "Thanks for reflecting\non your meal",
  glucoseReflectionNutritionGuide:
    "Check out the nutrition guides below to learn more. Use password: virta",
  glucoseChatPartOne: "Chat with your health coach",
  glucoseChatPartTwo: " about any foods you're not sure about.",
  discover: "Discover",
  spanishCalloutTitle: "We’ve added more resources in Spanish!",
  spanishCalloutAction: "Check it out",
  contentFetchErrorMessage: "Could not load content. Please try again.",
  biomarkerInvalidTime: "This date is not valid. Please try again.",
  biomarkerFutureTime: "This date is in the future. Please try again.",
  glucoseFeedbackHeader: "About Your Glucose Value",
  glucoseAccessibilityMessages: "Glucose Messages",
  reflectionAccessibilityMessages: "Reflect",
  gotIt: "Got it!",
  achievementsAccessibilityMessages: "Achievements",
  selectDate: "Select Date",
  selectTime: "Select Time",
  weightEntryInstructions:
    "Step on your Virta scale, or if necessary, add your weight manually.",
  date: "Date",
  bloodPressureTopGreater:
    "Systolic pressure must be higher than diastolic (e.g. 120 over 80).",
  bloodPressureBotLesser:
    "Diastolic pressure must be lower than systolic (e.g. 120 over 80).",
  glucosePrompt: "What are your glucose levels today?",
  bloodPressurePrompt: "What is your blood pressure today?",
  weightPrompt: "What is your weight today?",
  ketonesPrompt: "What is your ketone level today?",
  lastEntryLabel: "Last entry",
  errors: "Errors",
  addBiomarker: "Add additional biomarkers",
  confirmingEmail: "Confirming Email Address",
  pleaseWait: "Please wait while we confirm your email address.",
  confirmDob:
    "As an extra layer of security, please confirm your date of birth.",
  identityConfirmed: "Identity Confirmed!",
  logInToContinueEnrollment: "Please log in to continue enrollment.",
  securityQuestion: "Security Question",
  emailVerificationSent: "Email Verification Instructions Sent",
  instructionsSent: "Instructions to verify your email were sent to:",
  pleaseCheckEmailForEmailVerification:
    "Please check your email inbox and look for email verification instructions from Virta Health.",
  confirmationFailed: "Identity Confirmation Failed",
  accountLockedForSecurity:
    "Sorry, your account has been locked for security reasons. To unlock it, you must verify your identity by contacting {supportEmailLink} for assistance.",
  couldntConfirmIdentityContact:
    "Sorry. We are unable to confirm your identity. Please contact {supportEmailLink} for assistance.",
  checkEmailForPasswordReset:
    "Please check your email inbox and look for password reset instructions from Virta Health.",
  stillHaventReceivedEmail:
    "Still haven’t received the email? Please check that your email address above is correct.",
  passwordResetInstructionsSent: "Password Reset Instructions Sent",
  locationSent:
    "If an account with this email exists, instructions to reset your password were sent to:",
  caseRequirement: "At least one lowercase & one uppercase character",
  characterRequirement: "At least one special character (&, #, !, etc.)",
  continueEnrollment: "Please continue your enrollment.",
  lengthRequirement: "At least 8 characters",
  newReset: "Please <l>click here</l> to send a new password reset email.",
  notVerified:
    "Your email address has not been verified. Please check your email inbox and look for a confirmation email from Virta Health.",
  numberRequirement: "At least one number",
  reinforceSuccess: "You have successfully set your password.",
  passwordRequirements: "Password Requirements",
  resetExpired: "Your password reset email has expired.",
  setToSave:
    "Please choose a password. This will help you save your progress and protect your information.",
  setYourPassword: "Set Your Password",
  successfullySet: "Password Successfully Set",
  verificationEmailExpired: "Verification Email Expired",
  resendVerificationEmail: "Resend Verification Email",
  tryEmailVerificationAgain:
    "We’re sorry, but your verification email has expired. Please enter your email below so we can send you a new verification email.",
  forgotPasswordTitle: "Forgot My Password",
  forgotPasswordInstructions:
    "Please enter your email below so that we can provide instructions to reset your password.",
  sendInstructions: "Send Instructions",
  noAccountApplyNow: "Don’t have an account? <l>Apply Now</l>.",
  continueVirtaEnrollment: "Continue Virta Enrollment",
  invalidLogin:
    "Invalid email or password. Try clicking 'Forgot Password' if you're having trouble signing in.",
  rememberToVerify: "Remember to Verify Your Account",
  ifYouHaventVerified:
    "If you haven’t already, verify your account by clicking continue in the confirmation email.",
  none: "None",
  notConfident: "Not Confident",
  veryConfident: "Very Confident",
  communicationDisqualification: "You cannot communicate in English",
  smartphoneDisqualification: "You don't have access to a smartphone",
  checkEmail: "Check Email",
  complete: "Complete",
  inReview: "In Review",
  inProgress: "In Progress",
  upcoming: "Upcoming",
  yourInfoProtectedAndConfidential:
    "Your health information is protected and is 100% confidential.\n      Virta will only share your health information with authorized\n      persons, which include your providers, persons that administer\n      your health benefits, and third parties that help us provide our\n      services. Virta will never share your health information with\n      people from your employer that are not involved with administering\n      your health benefits or other third parties.",
  biQuestionsContact: "Questions? Email {supportEmailLink}.",
  eligibilityBasedOnCriteria:
    "Eligibility is based on meeting applicable criteria. Submitting an\n      application does not guarantee acceptance into Virta.",
  firstStepInLearningMore:
    "The first step in learning more about the Virta treatment is scheduling a\n      free call with one of our enrollment advisors, who will review how Virta\n      could work for you.",
  basicInformation: "Basic Information",
  basicInformationInstructions:
    "Please provide some basic contact, coverage, and health information so\n      that our team can prepare for the call. You’ll be able to schedule after\n      submitting this information.",
  generalInformation: "General Information",
  accountCreationFailed:
    "Account creation failed. An invalid email was specified.",
  type2: "Type 2 Diabetes",
  preD: "Prediabetes",
  preD35: "Prediabetes with a BMI over 35",
  preD34: "Prediabetes with a BMI over 34",
  type2NotMetformin: "Type 2 Diabetes with a qualifying medication",
  obesity30: "Obesity with BMI over 30",
  notQualified: "Does not meet qualification criteria",
  qualifiedNoDx: "Meets qualification criteria",
  nextStepIsIntakeCall:
    "Your next step is to schedule a call with an Enrollment Advisor who can answer any questions about these criteria.",
  or: "or",
  emailAssistance:
    "If you have any questions or need assistance, please email {supportEmailLink}.",
  contactPleaseEmail: "Questions? Please email our support team:",
  prelaunchHeader: "Thanks for your application.",
  prelaunchInstructions:
    "{payerName} is offering Virta starting on {goLiveDateString}, so we’ve paused your enrollment and added you to the waitlist.",
  prelaunchInstructionsFooter:
    "We’ll reach out as soon as enrollment opens. Please monitor your email for further instructions.",
  instructionsHeader: "Waitlist Instructions",
  prelaunchSubheader: "You’ve been added to the waitlist.",
  invalidHeight: "Invalid height, must be over 2 feet",
  costOfVirta: "Cost of Virta Treatment",
  costOfVirtaSubheader:
    "Your out-of-pocket cost for Virta depends on the details of your plan and deductible status.",
  specialCost:
    "<x>Members with active coverage through {insuranceProvider} pay</x><y>${price} per month</y><z>in out-of-pocket-costs.</z>",
  standardCost:
    "<x>The standard price for Virta is</x><y>*$249 per month</y><z>*There is also a one-time $250 supply kit fee paid upfront. Your kit includes a cellularly-connected body weight scale, blood sugar and blood ketone testing supplies, and more.</z>",
  learnMore: "Learn More",
  noCostToApply:
    "*Please note: There is no fee for the enrollment process, and you can move forward and learn more, without initiating payment.",
  apiError: "Sorry, an unexpected error occurred. Please try again later.",
  communicationAgreement:
    "By checking the box, you agree that we may communicate with you via\n      email and text messages. Additionally, you acknowledge that email\n      and text messaging are not always secure forms of communication and\n      that Virta cannot ensure the security and confidentiality of\n      information exchanged using these methods.",
  limitedCommunication:
    "Virta takes security and privacy very seriously and makes every\n      effort to limit communication on these platforms to only what is\n      essential for your care.",
  mustAcceptTerms:
    "You must accept the Terms of Service and the Privacy Policy",
  badAge: "Please enter age as a whole number",
  badWeight: "Please enter weight as a whole number",
  invalidAge: "Please enter a valid age",
  longPhone: "Number is too long",
  longZip: "Zip code is too long",
  shortPhone: "Number is too short",
  shortZip: "Zip code is too short",
  stepXOfY: "Step {x} of {y}",
  dayUppercase: "Day",
  dob: "Date of Birth",
  faq: "Frequently Asked Questions",
  month: "Month",
  optional: "Optional",
  optionalPreferredName: "Optional (If Other Than First Name)",
  previous: "Previous",
  unsure: "Unsure",
  year: "Year",
  and: "and",
  here: "here",
  loading: "Loading...",
  applicationClosed: "Application Closed",
  sorryYourApplicationClosed:
    "We're sorry. We have closed your Virta application. Please contact {supportEmailLink} if you are still interested in applying to Virta.",
  yourHIP: "Your health insurance provider",
  enrollmentSaved: "Your enrollment progress to date has been saved.",
  allSpotsFilled: "Unfortunately, all the spots on Virta have been filled.",
  limitedSpots:
    "{insuranceProvider} is offering a limited number of spots on Virta.",
  unableToOfferAdditionalSpots:
    "As of now, all the open spots on Virta have been filled, and we are unable to offer additional spots at this time. We apologize for this, and appreciate the time you’ve invested in getting started on Virta.",
  wantMoreInfo: "Want more information?",
  checkYourEmail: "Please check your email for more details.",
  didntReceiveEmail: "Didn’t receive the email?",
  pleaseEmail: "Please email: {supportEmailLink}.",
  thanksForSubmitting: "Thanks for submitting your information, {userName}!",
  getStartedOnFinalStep:
    "You can now get started on the final step of enrollment, which is being medically cleared to join Virta!",
  confirmInformation: "Confirm Information",
  medicalClearance: "Medical Clearance",
  startingVirta: "Starting Virta",
  onceStepsAreComplete:
    "Once these steps are complete, Virta will have everything it needs to approve your enrollment.",
  videoAppointmentTitle: "Video Medical Appointment",
  videoAppointmentDescription:
    "Schedule a free, no-obligation video consultation with a Virta medical provider.",
  scheduleVisit: "Schedule Visit",
  seeVisitDetails: "See Visit Details",
  attendVisit: "Attend Visit",
  rescheduleVisit: "Reschedule Visit",
  intakeCallTitle: "Intake Call",
  intakeCallDescription:
    "Meet your Virta enrollment advisor over the phone and learn more about how Virta works.",
  labsTaskTitle: "Labs Status",
  labsTaskDescription: "Send Virta the results of a basic set of lab work.",
  completeLabs: "Complete Labs",
  roiTitle: "Release of Information",
  roiDescription:
    "Sign our Release of Information (ROI) so that Virta's clinical team can request medical records from your primary care provider.",
  weUnderstand:
    "We understand that in-office lab appointments might not be a good option for many patients due to the coronavirus pandemic. For those who would like to avoid in-office appointments, Virta is offering fully covered at-home methods to collect the basic set of labs required for enrollment. You will discuss the options for in-home labs with your Enrollment Advisor during your intake call.",
  forThose:
    "For those who would still like in-office appointments, you can review Virta's normal enrollment labs options <l>here</l>.",
  labs: "Labs",
  localCoveredClinic: "Local Covered Clinic - Fully Covered",
  ifNearClinic:
    "If you are located near a fully covered clinic, you can complete your labs at no cost to you.",
  labsFirstStep: "Step 1: Generate forms for Labs",
  seeClinicList:
    "To see the list of covered clinics, click the “Get Forms” button below. Make sure to completely fill, download, and print both of your order forms.",
  getForms: "Get Forms",
  labsSecondStep: "Step 2: Complete lab work",
  printOrderForms:
    "Print order forms and take them to a covered clinic to complete your labs.",
  youMustFast:
    "Reminder: You must fast for a minimum of 9 hours prior to getting your lab work done.",
  localCoveredClinicLocation: "Location of local covered clinic",
  clickGetForms:
    "To see the list of local covered clinics and their locations, click the “Get Forms” button above.",
  receiveDocusignEmail:
    "You will receive an email from DocuSign with the access code. If you can’t find the email with the access code, check your spam.",
  labCorpFullyCovered: "Labcorp - Fully Covered",
  ifNearLab:
    "If you are located near a covered lab, you can complete your labs at no cost to you.",
  makeSureToCompleteOrderForm:
    "Make sure to completely fill, download, and print your order form.",
  printMedLabForm:
    "Print the “Medical Lab Order Form” (first page) and take it to a Labcorp facility near you. See below if you need help finding a facility!",
  preferPCP:
    "If you prefer to work through your Primary Care Provider for labs instead of LabCorp, you can provide them with the lab order form, however, you may be responsible for out-of-pocket charges.",
  noApptNecessary: "No appointment is necessary to get your lab work.",
  scheduleApptWithFollowingInfo:
    "However, if you would like to schedule an appointment, use the following information to fill out their <l>appointment request form</l>:",
  selectRoutineLabWork:
    "When asked for “Service”, please select “Routine Labwork”",
  sayYesToFasting: "When asked if you will be fasting, choose “Yes”",
  sayMyEmployerWillPay:
    "When asked how you will pay, please select “My employer or another company is responsible for the visit”",
  doINeedToSchedule:
    "Do I need to schedule an appointment to get my labs done at LabCorp?",
  whereIsMyAccessCode: "Where is my access code for my lab order forms?",
  willReceiveDocusignEmail:
    "You will receive an email from DocuSign with the access code. If you can’t find the email with the access code, check your spam.",
  howMuchLabCost: "How much will the lab work cost?",
  virtaCoversLabCost:
    "Virta covers the cost of labs done at LabCorp with the Virta provided lab order form. If you prefer to work through your Primary Care Physician for labs instead of LabCorp, you can provide them with the lab order form, however, you may be responsible for out-of-pocket charges.",
  whereToSeeResults: "Where can I see my LabCorp results?",
  toSeeResultsGoTo:
    "If you want to see your LabCorp results, just go to <l>patient.labcorp.com</l> and create an account.",
  yourPCPNotCovered: "Your PCP - Not Covered",
  getYourLabs:
    "You can get your labs done at your primary care provider or another clinic of your choice, but there may be out of pocket costs associated with the labs.",
  makeSureForm:
    "Make sure to completely fill, download, and print your order form.",
  printBothOrderForms:
    "Print both order forms and take them to your primary care provider or clinic of your choice. You must ask them to place the order for your labs.",
  whereGetTests: "Where should I go to get these tests done?",
  recommendCallPCP:
    "We recommend calling your primary care provider in advance to see if they can order these tests for you. If they can’t, you can use a local walk-in or urgent care clinic.",
  howMuchLabsCost: "How much will the labs cost?",
  cannotPredictCost:
    "We are unable to tell you how much the labs will cost, since this depends on your provider, health plan, and deductible status - but most patients do not have an issue with the cost of the labs.",
  optionsToCompleteLabs: "Options to complete your labs",
  feelFree:
    "Feel free to check out each option—you can always come back to this page!",
  completeScreening:
    "To complete the medical screening, you must send Virta the results of a basic set of labs.",
  ifRecentLabsFax:
    "If you have recently had these labs performed, please have your healthcare provider fax them to Virta at {virtaFaxNumber}, or you may email them to your Enrollment Advisor. You will discuss labs options with your Enrollment Advisor during your intake call.",
  testsNotRequired:
    "These test results are not required before your appointment with your Virta Provider. These tests will be used as part of the approval process, so the sooner they are in, the faster you can be approved!",
  instructions: "Instructions",
  nearLab:
    "If you are located near a covered lab, you can complete your labs at no cost to you.",
  localClinicFullyCovered: "Local Covered Clinic - Fully Covered",
  nearClinic:
    "If you are located near a fully covered clinic, you can complete your labs at no cost to you.",
  pcpNotCovered: "Your PCP - Not Covered",
  labsElsewhere:
    "You can get your labs done at your primary care provider or another clinic of your choice, but there may be out of pocket costs associated with the labs.",
  paymentInfo: "Payment Information",
  agreeToBeCharged:
    "I agree to be charged to me each month the amount Virta communicated to me by email, to my payment method on the subscription start date, and also to such payment continuing each month on this same day. By submitting my payment information in the form linked below:",
  agreeTerms:
    "I agree to Virta’s subscription <t>Terms of Use</t> and <p>Privacy Policy</p>.",
  authorizeVirta:
    "I authorize Virta (or its payment processor) to automatically continue my subscription and charge the subscription fee (as described in the payment summary above) to my payment method provided to Virta on a monthly basis until I cancel.",
  noRefundsForPartialMonths:
    "There are no refunds or credits for partial months.",
  toCancel:
    "To cancel my subscription, I must provide notice of cancellation by emailing Virta at {supportEmailLink} to be effective for the following month. In the event I am no longer a Virta patient, Virta may terminate this subscription without further notice to me.",
  bySubmitting:
    "By submitting this form with my payment information, I authorize Virta to process it to pay for the Virta services provided to me. I understand that once my payment is processed, my recurring subscription initiates. I also understand that Virta will stop processing these payments when I am no longer a Virta patient, or I request Virta to stop processing these payments (by contacting Virta at {supportEmailLink}). Detailed payment terms can be found <l>here</l>.",
  yourSavedCard: "Your Saved Card",
  noCcInfo: "No Credit Card Information Found",
  clickAddCard:
    'Click "Add Card" to add a payment method to enroll in your Virta Health treatment subscription',
  subscriptionTerms: "Subscription Terms of Use",
  term1:
    '1. Access to Virta is covered via a monthly "subscription." Therefore, enrolling in our automated payment system is required.',
  term2:
    "2. You must submit your payment information via credit or debit card to get access to the treatment.",
  term3:
    "3. This card is required to be kept on file and billed automatically.",
  term4:
    "4. Virta will not charge your first payment (which is the initiation fee + first month fee) until the day you are approved to start treatment.",
  term5:
    "5. Each additional month of payment will be charged 1 month after the first payment date (“your payment date”).",
  term6:
    "6. If your card on file fails or is declined, we will reach out to you within 3 business days. If payment is not received within 2 weeks of your payment date, Virta will initiate the process to release you from treatment, and you will lose access to the app.",
  term7:
    "7. If you decide to discontinue the Virta treatment, you will continue to have access until the end of the last month for which you’ve already been billed.",
  term8: "8. Virta does not offer refunds.",
  termsOfService: "Terms of Service",
  termsOfServiceDetails:
    "Please review and accept the Terms of Service and Privacy Policy",
  addressLineTwo: "Address (continued)",
  confirmPharmacyAddress:
    'Please click "Confirm Address" above to save your address.',
  phoneNumber: "Phone Number",
  reaction: "Reaction",
  listFoodAllergies: "Please list all food allergies and intolerances.",
  noFoodAllergies: "No food allergies or intolerances",
  listMedAllergies: "Please list all medication allergies and intolerances.",
  noMedAllergies: "No medication allergies or intolerances",
  mustMakeFoodSelection:
    'Must either add food allergies or select "No food allergies".',
  mustMakeMedSelection:
    'Must either add medication allergies or select "No medication allergies".',
  preferredName: "Preferred Name",
  requiredByPrevYesResponse: "Required due to previous yes response",
  consentFormsTitle: "Consent Forms",
  pleaseReview:
    "Please review and accept the following terms of service that allow us to deliver your care.",
  nextConsent: "Next Consent",
  startConsent: "Start Consent",
  start: "Start",
  voluntaryAuth:
    "Voluntary Authorization for Disclosure of Protected Health Information",
  protectingData: "Protecting your data:",
  deliverRxParts:
    "To deliver parts of the treatment (like shipping your starter kit), we need your consent to share information with our trusted partners.",
  authPurpose: "Authorization Purpose:",
  allowPHI:
    'The purpose of this Authorization allows Virta to disclose your Protected Health Information ("PHI") to all third party vendors that help Virta (i) provide treatment to you, (ii) operate its services to make treatment available to you, and (iii) collect payment for your treatment (the "Authorization Purposes"). Please see the terms below.',
  duration: "Duration:",
  authInForce:
    'This Authorization shall be in force and effective until you revoke it. <b>You have the right to take back ("revoke") your authorization</b> in writing at any time by sending a signed and dated written statement to Virta Health - 501 Folsom Street, San Francisco, CA 94105, or email us at {supportEmailLink} saying that you are revoking your authorization. Virta will no longer disclose your PHI, except to the extent that it has already done so based on your prior authorization. If you have authorized release of alcohol or substance abuse records, you may revoke this permission verbally.',
  iVoluntarilyAuthorize:
    "I voluntarily authorize Virta Health to disclose my PHI, to all third party vendors that support the Authorization Purposes.",
  readAndConsidered:
    "I have had the opportunity to read and consider the contents of this authorization.",
  furtherUnderstand:
    'I further understand that my participation in the Virta treatment is conditioned on my agreement to the Authorization Purposes as designated by signing this Authorization. By checking the "I Agree" checkbox below, I agree and it is my intent to electronically sign and electronically submit this Authorization, and to be bound with the same force and effect as if I had signed this Authorization on paper by hand.',
  iAcknowledge: "I acknowledge",
  weTakePrivacy:
    "We take the privacy and security of your data very seriously, and you can change your consent at any time. See our <p>Privacy Policy</p> for more details.",
  mustAcceptAuthorization:
    "You must accept the Voluntary Authorization for Disclosure of Protected Health Information",
  mustAcceptAssignment: "You must accept the Assignment of Benefit Consent",
  removeMedication: "Remove Medication",
  remove: "Remove",
  currentMedications: "Current Medications",
  pleaseAddMedDetails: "Please add your complete medication details.",
  addMeds: "Add Medications",
  notTakingMeds: "I am not currently taking any medications",
  mustMakeSelection:
    'Must either add medications or select "I am not currently taking any medications".',
  age: "Age",
  approxHowOld:
    "Approximately how old were you at the time you were diagnosed with prediabetes or diabetes?",
  notSureAboutDiagnosis: "I’m not sure",
  biologicalRelativesSection:
    "The following section refers to biological relatives. If you do not know, please leave blank.",
  fatherHealth: "Father’s Health",
  siblingHealth: "Siblings' Health",
  motherHealth: "Mother’s Health",
  deceased: "Deceased",
  listSiblingMedProblems:
    "Please provide a list of this family member's medical problems:",
  healthHistoryTitle: "Health History",
  thanksForConfirmingBI:
    "Thanks for confirming your basic information! The next step for enrolling in Virta is completing your Health History, which will be used by your Virta medical provider to prepare for your upcoming video medical appointment with them.",
  pleaseNoteYourInfoIsProtected:
    "Please note that your information is 100% private and protected by law through HIPAA.",
  virtaWillNotShareYourInfo:
    "Virta will not share your personal health information with your employer or third parties other than your health care provider.",
  questionsEmail: "Questions? Email {supportEmailLink}.",
  yourInfoProtectedByHIPAA:
    "Your information is private and protected by law through HIPAA.",
  stillHaveGallbladder: "Yes, but I still have my gallbladder",
  gallbladderRemoved: "Yes, I’ve had my gallbladder removed",
  digestiveHistoryTitle: "Digestive Health History",
  pancreaticEnzymes:
    "Do you take pancreatic enzyme supplements (for example, Creon)?",
  pancreasIssuesQuestion:
    "Have you ever had surgery on your pancreas or have you been diagnosed with chronic pancreatitis?",
  liverDiseaseQuestion:
    "Have you ever been diagnosed with any type of liver disease?",
  shortBowelSyndrome: "Have you ever been diagnosed with short bowel syndrome?",
  organTransplantQuestion:
    "Have you received a transplant of any organs in your abdomen?",
  intestinalSurgery:
    "Have you ever had surgery on your intestines? For example, duodenum, jejunum, stomach, or colon",
  gallbladderProblems:
    "Have you ever been told you’ve had any problems with your gallbladder?",
  crohns: "Have you ever been diagnosed with Crohn’s disease?",
  colitis: "Have you ever been diagnosed with Ulcerative Colitis?",
  geneticHistoryTitle: "Genetic History",
  raceIdent:
    "To which racial or ethnic group(s) do you most identify? Please check all that apply to you.",
  heartHistoryTitle: "Heart History",
  hadHeartAttack: "Have you ever had a heart attack?",
  hadCHF:
    "Have you ever been diagnosed with congestive heart failure, also known as CHF?",
  valveProblemsQuestion:
    "Have you ever been told you’ve had a problem with any of the valves in your heart?",
  potsDiagnosed:
    "Have you ever been diagnosed with Postural Orthostatic Tachycardia Syndrome, also known as POTS?",
  svt: "Have you ever been told you’ve had an abnormal heart rhythm like, for example, atrial fibrillation or SVT?",
  prolongedQT:
    "Have you ever been told that you have a “Prolonged QT” or “Prolonged QTc” on an electrocardiogram (also known as an ECG or EKG)?",
  peripheralArterialDisease:
    "Have you ever been diagnosed with peripheral arterial disease?",
  hypertension:
    "Have you ever been diagnosed with high blood pressure, also known as hypertension?",
  lowBloodPressure:
    "Have you ever been told that your blood pressure has been abnormally low, even temporarily?",
  haveYouEverFainted: "Have you ever fainted?",
  steroidMedsQuestion:
    "Have you taken steroid medications in the last 12 months?",
  impairImmunityMeds:
    "Have you received medications that impair your immune system in the last 24 months?",
  nextStepIsHealthHistory:
    "The next step for enrolling in Virta is completing your Health History, which will be used by your Virta medical provider to prepare for your upcoming video medical appointment.",
  commonMedicalQuestions: "Common Medical Questions",
  askingBecauseOfDiabetes:
    "We’re asking because these conditions are normally associated with diabetes.",
  yesNoDetails: "Please provide more details on all “Yes” answers above:",
  primaryCareProvider: "Primary Care Provider",
  listAllSurgeries: "Please list all surgeries you’ve undergone.",
  noSurgeries: "No surgeries",
  addSurgeries: "Add Surgeries",
  mustMakeSurgerySelection:
    'Must either add surgeries or select "No surgeries".',
  clickConfirmAddressAbove:
    'Please click "Confirm Address" above to save your address.',
  homeAddress: "Home Address",
  useDifferentShipping: "I would like to use a different address for shipping.",
  hic: "Health Insurance Coverage",
  waiver: "Waiver",
  pleaseReviewAndAccept: "Please review and accept Waiver",
  iAgreeToWaiver: "I agree to the <l>Waiver</l>",
  mustAcceptWaiver: "You must accept the waiver",
  importantSafetyInformation: "Important Safety Information",
  safeToKeepProvidersUpToDate:
    "We believe it’s important and safe that your other health care providers be kept updated regarding your medication changes and progress with Virta so that all your health care providers can take the best possible care of you.",
  optOutFromProviderUpdateExplanation:
    "We’ll keep your primary care provider updated unless you tell us that you’d prefer that we not. If medical issues arise and you would like your Virta Medical Team to coordinate with another provider, you can discuss this with your Health Coach after enrollment.",
  optOutFromProviderUpdateField:
    "I do not want my health care provider updated on my progress at Virta.",
  faxNumberNoticeRequirement:
    "Currently, we can only update one provider with your progress and <b>must have their fax number</b> to do so.",
  primaryEmail: "Primary Email",
  primaryPhone: "Primary Phone",
  weightInPounds: "Weight",
  heightInInches: "Height",
  communication: "Primary Language",
  selectSpeciality: "Select a speciality",
  address1: "Address 1",
  address2: "Address 2",
  province: "Province",
  postalCode: "Postal Code",
  phone: "Phone Number",
  phoneNumTooShort: "Phone number is too short",
  phoneNumTooLong: "Phone number is too long",
  faxNumTooShort: "Fax number is too short",
  faxNumTooLong: "Fax number is too long",
  editPostalCode: "Edit Postal Code",
  findYour: "Find your {physicianType}",
  postalCodeInvalid: "Postal code is not valid",
  physicianSearch: "Physician Search",
  virtaReferralTitle: "Virta Health Referral Application",
  basicContact:
    "Please provide some basic contact and health information about the applicant you are referring. You'll then be redirected to a calendar page to schedule their phone call with a Virta Enrollment Advisor.",
  ifHaveQuestions:
    "If you have questions or need assistance, please email {supportEmailLink}.",
  legalFName: "Legal First Name",
  fname: "First Name",
  legalLName: "Legal Last Name",
  lname: "Last Name",
  cell: "Cell",
  whichDiagnosesReferral:
    "Which of the following has the applicant been diagnosed with?",
  referralInsulinQuestion: "Has the applicant ever been prescribed insulin?",
  referralCurrentDialysis: "Does the applicant currently undergo dialysis?",
  referralPregnancyQuestion: "Is the applicant currently pregnant?",
  referralTakingInsulin: "Yes, they are currently taking insulin.",
  referralPastInsulin:
    "Yes, but in the past. They don’t currently take insulin.",
  theyNeverInsulin: "They've never taken insulin.",
  referralUnsureInsulin: "They're not sure.",
  selectGender: "Select a gender",
  requiredByPrevResponse: "Required due to previous response",
  enterEmail: "Please enter a valid email",
  backToApplication:
    "<l>Take me back to my application</l> so I can update my information.",
  disappointingNews:
    "We understand this may be disappointing news. This decision was made with your safety in mind—Virta is committed to never compromising patient safety. The current state of technology for remote patient monitoring is limited, and some conditions cannot be monitored safely in the outpatient setting.",
  pleaseNoteOtherPrograms:
    "Please note that your primary care provider, employer, or insurer may have other health programs or treatments that could work for you. We recommend reaching out to them to learn more about your other options.",
  emailSupportWithQuestions: "Email {supportEmailLink} if you have questions.",
  applicationReceived: "Application Received! Next Steps:",
  applicationSubmitted:
    "Your application has been successfully submitted. Next, we'd like you to learn more about how Virta works.",
  step1LearnVirta: "Step 1: Learn about Virta",
  watchVideo:
    "Watch this short video to learn more about the details of the Virta treatment.",
  verifyAccount: "Verify Account to Access Health History",
  pleaseCheckEmail:
    "Please check your email to verify your account. After verifying, you'll be able to access your Health History form.",
  step2CheckEmail: "Step 2: Check your email inbox",
  clickContinueEmail:
    'Click the "Continue" button in your confirmation email to verify your account.',
  emailSentTo: "Email sent to: {applicantEmailAddress}.",
  notReceivedEmail:
    "Haven’t received the email? Please check your email address above or email {supportEmailLink}.",
  pleaseCheckEmailForDetails: "Please check your email for more details.",
  isOffering:
    "{insuranceProvider} is offering a limited number of spots on Virta. As of now, all the open spots on Virta have been filled, and we are unable to offer additional spots at this time.",
  allVirtaSpotsFilled: "All the spots on Virta have been filled.",
  thankYouForApplication: "Thank you for your application.",
  indicatedInsurance:
    "You indicated that you have insurance through Blue Cross and Blue Shield of North Carolina. Our team is checking to see if you have coverage for Virta through your health plan. We’ll reach out as soon as we have more information.",
  englishReferral: "Can the applicant communicate with Virta in English?",
  canFillForm:
    "If you are able to fill out this form and converse in basic English, please select yes.",
  canFillFormReferral:
    "If the applicant is able to converse in basic English, please select yes.",
  contactInformation: "Contact Information",
  smartphoneDefinition:
    'A "smartphone" is a phone that can connect to the internet and use downloaded applications, or "apps".',
  confirmEmailAddress: "Confirm Email Address",
  haveSmartphone: "Do you have a smartphone with internet access?",
  haveSmartphoneReferral:
    "Does the applicant have a smartphone with internet access?",
  emailMismatch: "Email addresses do not match",
  requiredByPrevYes: "Required due to previous yes response",
  ssn: "Social Security Number",
  rxCost: "Cost of Virta Treatment",
  price249PerMonth: "$249 per month",
  initiationFee: "With a one-time $250 initiation fee paid upfront.",
  promoCode: "Promo Code",
  employerNameRequired: "Employer Name Required",
  insurerNameRequired: "Insurer Name Required",
  payOOP: "I’ll pay out of pocket",
  takingMedsReferral:
    "Has the applicant taken any diabetes medications besides metformin?",
  hadInsulin: "Have you ever been prescribed insulin?",
  whenStartInsulin: "In what year did you start taking insulin?",
  whenStopInsulin: "In what year did you stop taking insulin?",
  yesImTakingInsulin: "Yes, I’m currently taking insulin",
  yesInsulinButPast: "Yes, but in the past. I don’t currently take insulin.",
  iveNeverTakenInsulin: "I’ve never taken insulin",
  moreDetailsNeeded:
    "Please provide more details on why you are interested in Virta.",
  mdy: "Month, Day, Year",
  noModification:
    "Note: Even if you are not interested in modifying your diabetes treatment, we can still help you with testing supplies and coaching.",
  readyStartSoon: "I am ready to start a new diabetes treatment!",
  needAnswersFirst:
    "I am not sure if I want to start a new diabetes treatment.",
  learnMoreFirst: "I am not interested in starting a new diabetes treatment.",
  noWrongAnswer: "There is no wrong answer!",
  pleaseReviewTosAndPrivacy:
    "Please review and accept the Terms of Service and Privacy Policy",
  virtaNotEnrollingAdditionalVeterans:
    "Virta is not enrolling additional Veterans at this time.",
  virtaCommittedToVeterans:
    "Virta Health committed to providing free access to the Virta Treatment for a pilot group of 400 Veterans. As of October 23rd 2019, we have exceeded the 400 enrollments and therefore are not enrolling additional Veterans at this time.",
  ifYoudStillLikeToApply:
    "If you’d still like to apply for Virta, we can save your information for now, but you will not be able to move forward with enrollment at this time. We appreciate your interest and will let you know of any upcoming opportunities to enroll as soon as we know.",
  congratsPleaseConfirm:
    "Congratulations! You have completed the first step in applying for Virta. Before we continue, we need to confirm your email address.",
  confirmationEmailSentTo: "A confirmation email was sent to:",
  checkInbox:
    "Please check your email inbox and look for a confirmation email from Virta Health.",
  noConfEmail: "Still haven't received the confirmation email?",
  checkAbove:
    "Please check above to make sure you correctly entered your email address. If it's incorrect, please resubmit your information with the correct email address.",
  congrats: "Congratulations!",
  canStartTreatment: "You can now get started on the Virta treatment.",
  checkEmailForLoginInstructions:
    "Please check your email for instructions on how to log in to the app and meet your coach.",
  ifBSCA:
    "If you have health insurance through Blue Shield of California, you may be eligible to receive full coverage for the cost of Virta.",
  toReceiveFullCoverage:
    "To receive full coverage, you must apply for Virta through Wellvolution, Blue Shield of California’s digital enrollment platform.",
  privacyPolicy: "Privacy Policy",
  telehealthConsent: "Telehealth Consent",
  privacyPractices: "Privacy Practices",
  rightsReserved: "All rights reserved. {copyrightSymbol} {currentYear}.",
  basicInfo: "Basic Information",
  needHelp: "Need help? Contact",
  needHelpWithApplication: "Need help with your application?",
  contactUs: "Contact Us",
  brb: "We'll be right back.",
  scheduledMaintenance:
    "Our application systems are undergoing a bit of scheduled maintenance.",
  apology: "We apologize for the inconvenience and will be back online soon.",
  meantime:
    "In the meantime, check out some of our inspiring <l>patient stories</l> and thank you for your interest in Virta. We look forward to working with you on your journey to metabolic health!",
  ifSeeMsg:
    "If you continue to see this message, please contact {supportEmailLink}.",
  addressConfirmed: "Address Confirmed",
  confirmAddress: "Confirm Address",
  whichVersionOfYourAddress:
    "Which version of your address would you like to use?",
  selectAddress: "Please select an address below",
  submitButton: "Update",
  backButton: "Back",
  finalStepsDescription:
    "Update your shipping address information to receive your starter kit",
  updateAddress: "Update Address",
  confirmInfo: "Confirm Info",
  receiveInfoAboutLabs:
    "You will receive more information about required labs (if any) from your enrollment advisor.",
  eligibilityStatusCoveredHeader: "Great news, you're covered!",
  eligibilityStatusCoveredParagraph:
    "Based on your insurance information, you’re eligible to continue enrolling in the Virta treatment at no cost to you. We’re excited to get you started on your health journey.",
  eligibilityStatusCoveredSecondParagraph:
    "Click Continue to begin filling out your Health History.",
  eligibilityStatusCoveredSecondParagraphNext:
    "Click Next to begin filling out your Health History.",
  eligibilityStatusMoreTimeHeader:
    "We are processing your insurance information",
  eligibilityStatusMoreTimeParagraph:
    "Thanks for submitting your insurance information! We are now checking your eligibility for Virta, and will let you know as soon as we have an answer.",
  eligibilityStatusReviewInsuranceParagraph:
    "Here’s the insurance information we are using to check your coverage. Please let your Enrollment Advisor know if you notice any errors, and they can help you get it updated.",
  eligibilityCoverageCarrierInput: "Insurer",
  eligibilityCoverageGroupIdInput: "Group ID",
  eligibilityCoverageMemberIdInput: "Member ID",
  eligibilityCoverageIssueDateInput: "Issue Date",
  eligibilityCoveragePlanInput: "Plan",
  toScheduleHeader: "Schedule a Call",
  isScheduledHeader: "Call Scheduled",
  toSchduleMessage:
    "Your next step is to schedule a phone consultation with a Virta enrollment advisor.",
  isSchduledMessage:
    "During the call, you’ll learn how Virta works and can get any questions you have answered.",
  thirtyMinutes: "30 minutes",
  isPrimaryInsurance: "Is this your primary insurance?",
  explainPrimarySecondaryInsurance:
    "If you have coverage under a plan from your employer, in addition to coverage \n      from a partner’s or other plan (TRICARE, Medicaid, etc.), your own plan will be primary and \n      the other plan will be secondary.",
  howVirtaWorks: "How Virta Works",
  watchOverviewVideo:
    "Watch this video to get an overview of the Virta treatment\n      and how it can help you achieve your health goals.",
  ifYoureNotInterestedNow:
    "If you're not interested at this time, no problem! You can always reach out to {supportEmailLink}.",
  sessionExpired: "Your session has expired. Please log back in.",
  paymentTermsHeader: "Detailed Payment Terms",
  monthlySubscriptionAutomated:
    "Subscription: Access to Virta is covered via a monthly “subscription”, thus enrolling in our automated payment system is required.",
  virtaRefundPolicy: "No Refunds: Virta does not offer refunds.",
  electronicPaymentRequired:
    "Electronic Payment: You must submit your payment information via credit or debit card to get access to the treatment. This card is required to be kept on file and billed automatically.",
  virtaPaymentSchedule:
    "Payment Start Date: Virta will not charge your first payment (which is initiation fee + first month) until the day you are approved to start treatment. Each additional month of payment will be charged 1 month after the first payment date (“your payment date”).",
  paymentFailure:
    "Payment Failure: If your card on file fails or is declined, we will reach out to you within 3 business days. If payment is not received within 2 weeks of your payment date, Virta will initiate the process to release you from treatment and you will lose access to the app.",
  howToCancel:
    "Cancellation: Virta will stop processing your payments when you are no longer a Virta patient, or whenever you decide to stop them. You can request Virta to stop processing these payments by contacting Virta at {supportEmailLink}. When Virta receives your stop payment request, or when you stop being a patient Virta will stop processing your payments for the next payment that is scheduled after we receive your notice or your patient status ends.",
  restartingVirta:
    "Restarting: If you discontinue the Virta treatment and then decide to restart, the current applicable standard Virta price will be applied.",
  reduceGlareOnCard: "Please make sure to reduce glare on your card image",
  captureSharpImageOfCard:
    "Please make sure to capture a sharp image of your card",
  issueUploadingCard:
    "There was an issue uploading your card, please try again.",
  deseralizeError:
    "Something went wrong on our end, please retry, and if the issue persists contact support@virtahealth.com",
  problemWithForm:
    "There is a problem with the form, please check and correct the following:",
  iWouldLikeToOptOut: "I would like to opt out.",
  optOutConfirmation: "Opt-Out Successful",
  healthInfoExchangeHeader: "Health Information Exchange FAQ",
  optOutHIEAnswer:
    'You can opt out of Virta accessing your information from a HIE by checking the box below and clicking "Submit". Please allow up to two business days for processing your opt-out request.',
  optOutHIEQuestion: "I don’t want to participate. How can I opt out?",
  noActionNeededForHIE:
    "<i>No further action is needed from you</i> if you’d like us to check your past lab values through our Health Information Exchange.",
  whatIsHIEAnswer:
    "A Health Information Exchange is a way of sharing your health information among participating doctors’ offices, hospitals, labs, radiology centers, and other health care providers through secure, electronic means. The purpose is so that each of your participating caregivers can have the benefit of the most recent information available from your other participating caregivers when taking care of you.",
  whatIsHIEQuestion: "What is a Health Information Exchange (HIE)?",
  whyHIEAnswer:
    "By allowing Virta to access your data from a HIE we will see a more complete picture of your health, and make more informed treatment decisions. The goal is for you to receive coordinated care more efficiently. Your health care information is available to participating health care providers where and when they need it without delay.",
  whyHIEQuestion:
    "What can participating in Health Information Exchange HIE do for me?",
  noPrimaryCareProvider: "No Primary Care Provider",
  calorieCount: "Calories",
  carbohydrates: "Carbohydrates",
  fat: "Fat",
  fiber: "Fiber",
  protein: "Protein",
  servingCount: "Yield",
  servingSize: "Serving size",
  sugarAdded: "Added sugar",
  sugarAlcohol: "Sugar alcohol",
  nutritionFacts: "Nutrition Info Per Serving",
  prepTime: "Prep time",
  totalTime: "Total time",
  ingredients: "Ingredients",
  recipeInstructions: "Instructions",
  enable: "Enable",
  pushNotificationsCoach:
    "Get notified about new messages from your health coach",
  pushNotificationsStats: "Stay on top of tracking your health stats",
  pushNotificationsHeader: "Enable Push \nNotifications",
  pushNotificationsInstructions:
    "You can turn off notifications at any time by going to {SETTINGS} under the {MORE} menu.",
  noPCPInstructions:
    "* NOTE: If you do not currently have a Primary Care Provider, please click here:",
  chatSLABannerTitle: "Your care team will respond within 24 hours",
  chatSLABannerDescription: "Tech issues? Supply questions?",
  chatSLABannerLink: "Contact support",
  noSearchResults: "No Results",
  tryPopularSearches: "Try these popular searches",
  tryPopularFoodSearches: "Try these popular food searches",
  recentSearches: "Recent searches",
  bloodSugar: "Blood Sugar",
  food: "Food",
  reviewInsuranceInfoDescription:
    "Review the insurance information we have on file and make any changes if necessary.",
  reviewInsuranceInfoTitle: "Insurance Information",
  updateInfo: "Update Info",
  completeProfile: "Complete Profile",
  confirmEmail: "Confirm Email",
  emailConfirmed: "Email Confirmed!",
  yourEmailVerified: "Your email address has been verified.",
  clickBelowToVerifyEmail:
    "Please click the link below to verify your email address.",
  copyPasteLinkIfNotWorking:
    "If the button doesn't work, copy and paste this link into your browser:",
  emailAssociatedWithVirtaAccount:
    "Please note: <b>This email is associated with an account at Virta Health.</b> If you did not sign up for an account on Virta, please ignore this email and do not click the link",
  ifProblemsContactSupport:
    "If you have any problems, please contact us at {supportEmailLink}",
  cameraDirectionBack: "Back",
  cameraDirectionFront: "Front",
  confirmationHeader: "Insurance submitted!",
  confirmationHeaderHH: "Next Steps",
  getReadySubheader: "Get ready to scan your card",
  getReadyText: "Please have your insurance card ready for this next step.",
  helpScreenDescription:
    "It looks like you might be having trouble scanning your card. Read the tips below and try again. If you’re not able to get an accurate scan, you may enter your insurance information manually.",
  helpScreenHeader: "Having Trouble?",
  helpScreenTip1:
    "Make sure you’re in a well lit room (or outside in direct sunlight)",
  helpScreenTip2:
    "Place your card on a flat surface with a dark background (no patterns)",
  helpScreenTip3:
    "Try to capture as much of the card as possible without cutting any of it off",
  helpScreenTipHeader: "Tips for getting a successful card scan",
  hintBoxHeader: "Get ready to scan your card",
  hintBoxMessage:
    "Please have your insurance card and smart phone ready for this next step.",
  initialInsuranceHeader: "Insurance Information",
  initialInsuranceText:
    "In order to verify your coverage for the Virta treatment, you’ll need to enter your insurance information.",
  insuranceContinueButton: "Next",
  insuranceDescription:
    "In order to verify your coverage for the Virta treatment, you’ll need to enter your insurance information.",
  newInsuranceCoverage:
    "We are working to improve coverage with more insurance plans and encourage you to enter your information in case you qualify for a lower rate.",
  insuranceDisclaimer:
    "By submitting your insurance information, you consent to Virta working with your insurance to potentially reduce your out-of-pocket cost, although we cannot guarantee any reduction to the price you commit to at this time.",
  insuranceGroupInput: "Group ID",
  insuranceGroupInputHelperText: "If Applicable",
  insuranceGroupInputPlaceholder: "e.g. 534654",
  insuranceHeader: "Insurance Information",
  insuranceInput: "Phone Number",
  insuranceInputPlaceholder: "999-999-9999",
  insuranceIssueDateInput: "Issue Date",
  insuranceIssueDateInputPlaceholder: "MM/DD/YYYY",
  insuranceMemberInput: "Member ID",
  insuranceMemberInputPlaceholder: "e.g. 5829434",
  insuranceNextButton: "Next",
  insuranceNextConfirmButton: "This is correct",
  insuranceProviderInputPlaceholder: "e.g. Blue Shield",
  insuranceRetakeButton: "Retry",
  insuranceSMSButton: "Send Link",
  insuranceSMSButtonContinue: "Continue",
  insuranceSMSDescription:
    "We’ll send you a link to scan your insurance card. Please be sure the number you’ve input is correct and click “Send Link”. (Standard message rates apply.)",
  insuranceSMSSentButton: "Resend Link",
  insuranceSMSSentDescription:
    "We’ve sent a link to the phone number listed below. If you have not received the link, check that the phone number below is correct and click “Resend Link”.",
  insuranceScannerErrorMessage: "testing error message",
  insuranceSmsSentSubHeader: "Link Sent",
  insuranceSubHeader: "Verify your information and send the link",
  loadingMessage: "Updating your information...",
  manualInputLink: "Enter insurance information manually",
  manualInsuranceText: "Please enter your insurance information below.",
  nextStepDialogue:
    "Thank you for submitting your insurance information. Your next steps are to schedule your Intake Call and provide a brief overview of your health history.",
  nextStepDirectionContinue: "Click continue to schedule your Intake Call.",
  nextStepDirectionLink: "We’ve sent a link to:",
  nextStepSubheader: "Check your email",
  noInsuranceCard: "I do not have my insurance card",
  nonEmailConfirmationBody:
    "Thank you for submitting your insurance information. Your next step is to provide a brief overview of your health history.",
  nonEmailConfirmationBodytwo:
    "Click next to finish filling out your health history information.",
  nonEmailConfirmationHeader: "Insurance submitted!",
  nonEmailConfirmationSubBody:
    "* Please contact your enrollment advisor for more information around eligibility.",
  nonSubmitMessage:
    "Your next steps are to schedule your Intake Call and provide a brief overview of your health history.",
  primaryInsuranceClarificationLbl:
    "* If you have coverage under a plan from your employer in addition to coverage from a partner’s or other plan (TRICARE, Medicaid, etc.), your own plan will be primary and the other plan will be secondary.",
  primaryInsuranceHeader: "Primary Insurance",
  primaryInsuranceRadioLbl: "Is this your primary insurance?",
  primaryInsuranceRequirementLbl:
    "Please note: Virta is required to bill your primary insurance first.",
  readyButton: "I'm ready",
  requiredErrorText: "Required",
  resendTheEmail: "Resend the email",
  retryButton: "Retry",
  reviewInsuranceInfo: "Review and edit this information if necessary.",
  scanInsuranceHeader: "Scan your insurance card:",
  scannerTroubleBackButton: "Try again",
  scannerTroubleContinueButton: "Continue",
  skipInput: "Skip this step for now.",
  logInHere: "Log in here",
  alreadyHaveAccount: "Already have an account?",
  newHHTitle: "Let's practice what you've learned",
  newHHDescription: "We've added a new healthy habit for you to follow",
  newHHButtonLabel: "Check it out",
  dismiss: "Dismiss",
  eligibilityVerified:
    "Your eligibility for Virta has been verified and we've updated your information on file. You can now log in to the Virta app.",
  coverage: "Coverage",
  lookingIntoIt: "We’re looking into it",
  unableToVerifyEligibility:
    "We weren’t able to verify your eligibility for Virta, so our team is looking into your coverage details. We'll be in touch with next steps as soon as possible.",
  verifyingCoverageParagraph:
    "We’re working on verifying your coverage. We’ll be in touch with any next steps or requests for additional information.",
  skip: "Skip",
  editInfo: "Edit Info",
  insuranceDisclaimerLong:
    "By submitting your insurance information, you consent to Virta working with your insurance provider to potentially reduce your out-of-pocket cost. While we cannot guarantee any reduction to the price you commit to at this time, we are working to improve coverage with more insurance plans and encourage you to enter your information in case you qualify.",
  reviewingHealthInfo:
    "Our team is currently reviewing your health information to make sure that Virta is a good fit for you.",
  invalidAddress:
    "We are unable to verify this is a valid US address. If you feel this information is valid, please confirm below.",
  verifyEmailAddress: "Verify Email Address",
  resendEmail: "Resend Email",
  resendVerificationEmailToConfirm:
    "Resend the verification email to confirm the address we have on file.",
  checkEmailAndFollowLink:
    "Please check your email and follow the link to verify your email address.",
  verificationSentCheckInbox:
    "Verification email sent! Please check your inbox and follow the link to verify your email address.",
  verificationLinkExpired:
    "The verification link appears to be expired. Please request a new link by clicking the button.",
  verificationLinkInvalidOrAlreadyUsed:
    "The verification link appears to be invalid or has already been used. Please check that you entered the link correctly or request a new link by clicking the button.",
  couldNotSendVerificationSMS:
    "There was an issue sending the SMS to your phone, please contact {supportEmailLink}",
  couldNotConfirmPhone: "The code submitted was incorrect, please try again.",
  phoneVerifyHeader: "Verify Mobile Number",
  sentVerificationCodeNoPhone:
    "We’ve sent a verification code to the phone number associated with your account, if one exists. Please enter the 6 digit code below to continue",
  thankYou: "Thank you!",
  verfiedPhone: "Your phone number has been verified.",
  questionsBI: "Questions? Email {supportEmailLink}",
  fetchIntakeCallStatusAndEventsFailedWarning:
    "We could not retrieve your intake call status or scheduled events at this time.",
  contactSupportHeader: "Sorry you're having trouble",
  contactSupportBody:
    "Please contact our support team at {supportEmailLink} so they can assist you.",
  basicInformationCompletedTitle: "Basic Information Complete",
  basicInformationCompletedDescription:
    "You’ve already submitted this form. Your next step is to provide us with some health information.",
  createProfile: "Create Profile",
  encounteredError: "We encountered an unexpected error creating your account.",
  welcomeToVirta: "Welcome to Virta",
  congratsFirstStep:
    "Congrats on taking your first step towards better health. How should we get in touch?",
  recommendPersonalEmailAddress: "We recommend using your personal address",
  cellPhone: "Cell Phone",
  emailSent: "Email Sent",
  startProfile:
    "Start your profile to save your progress and keep your information safe.",
  confirmPassword: "Confirm Password",
  enterEmailAddress: "Please enter an email address",
  passwordMismatch: "Passwords do not match",
  basicInfoComplete: "Basic Information Complete",
  alreadySubmittedFormUnifiedBI:
    "You've already submitted this form. Your next step is to provide us with some health information.",
  weAreSorry: "We're Sorry",
  logInWithAccount: "Already have an account? <l>Log in here.</l>",
  somethingsNotRight: "Something’s not right...",
  timeoutCoverage:
    "We’re working on verifying your coverage. In the meantime, you can continue with your enrollment.",
  eligibilityVerifiedFinalSteps:
    "Your eligibilty for Virta has been verified and we've updated your information on file.",
  eligibilityVerifiedStandAlone:
    "Your eligibility for Virta has been verified and we've updated your information on file. You can now log in to the Virta app.",
  greeting: "Hi, {firstName}",
  searchAllCategories: "Search all categories",
  generalHealthConditionsDetails: "Health Condition Details",
  confirmGlucose: "Confirm Glucose",
  glucoseConfirmationWarning:
    "You entered a number under 20. Did you intend to enter that or did your meter say LO?",
  glucoseReviseWarning: "Please verify the reading, which should be above 20.",
  weTakePrivacySeriously:
    "We take the privacy and security of your information seriously.",
  cellMobileOnly: "Cell/Mobile Phone Only",
  toContinueVerifyPhone:
    "In order to continue, we need to verify that you have access to the mobile phone number you entered.",
  weWillSendCodeViaSms: "We’ll send you a code via SMS",
  pleaseHavePhoneAvailable:
    "Please have your cell phone available for this next step.",
  verifyPhoneAndSendCode: "Verify your phone number and send the code",
  sendCodeOnNextPage:
    "We’ll send you a code to enter on the next page. Please be sure the number you’ve input is correct and click “Send Code”. (Standard message rates apply.)",
  imageFileSize: "\u2022 Maximum file size is 25mb",
  fileTypes: "\u2022 File types accepted are .pdf, .jpg, .png, and .gif",
  uploadImage: "Upload images of your card",
  front: "Front",
  upload: "Upload",
  attachImageTroubleShooting:
    "Sorry, we’re still having trouble. To help us verify your coverage, please attach photos or PDF copies of your insurance card.",
  mobilePhoneNumber: "Mobile Phone Number",
  stillHavingTroubleContactUs: "Still having trouble? {supportEmailLink}",
  contentRecommendationForYouName: "For You",
  contentRecommendationForYouDescription: "Guides recommended just for you.",
  enterCodeSent: "Enter the code from the message sent to your mobile device.",
  possibleUpdates: "We’ve found some possible updates",
  suggestedInformation: "Use Suggested Information",
  originalInformation: "Use Original Information",
  red: "red.",
  mealPlan: "Meal plan",
  snacks: "Snacks",
  vegetables: "Vegetables",
  breakfast: "Breakfast",
  diabetesDiagnosis: "Diabetes Diagnosis",
  coverageInformation: "Coverage Information",
  isOnDialysis: "Dialysis",
  isOnDiabetesMedsNotMetformin: "Diabetes medications besides metformin",
  hasTakenInsulin2: "Prescribed Insulin",
  insulinStartYear: "Start year of taking insulin",
  insulinEndYear: "End year of taking insulin",
  hasKnowledgeOfVirtaTreatment: "Knowledge of Virta treatment",
  isReadyToStartTreatment: "Ready to start treatment",
  referralChannelOpt: "First hear about Virta",
  isWillingToAdoptKeto: "Daily carbohydrate intake",
  shop: "Shop",
  virtaStore: "Virta Store",
  smsVerificationCode: "Code",
  pairMeterCalloutTitle: "Connect your Virta meter and app",
  pairMeterCalloutDescription:
    "Automatically sync your glucose and ketone readings with the Virta app. Set up bluetooth pairing to get started!",
  pairMeter: "Pair meter",
  notNow: "Not now",
  meterLookingTitle: "Looking for your meter",
  meterDetectedTitle: "Meter discovered",
  meterConfirmTitle: "Confirm serial number",
  meterSuccessTitle: "Meter successfully paired",
  meterLookingDescription:
    "Make sure your Virta meter is powered on and nearby.",
  meterDetectedDescription:
    "Your Virta app and meter are currently connecting. Please wait while the connection completes.",
  meterConfirmDescriptionTop:
    "Check that the serial number (SN) on the meter matches the number below.",
  meterConfirmDescriptionBottom: "Not the meter you want to pair with?",
  readSupportArticle: "Read this support article",
  meterSuccessDescriptionTop:
    "Your readings will automatically sync whenever you open the Virta app and your meter is on.",
  meterSuccessDescriptionBottom:
    "It’s best to sync right after using your meter so we have up-to-date data.",
  pushNotificationSettingsDescription:
    "The above setting controls all notifications from the Virta app, including:\n\n• Messages from your coach\n• Glucose logging reminders, if applicable\n• Community notifications",
  pushNotificationSettingsWarning:
    "Opting out of notifications in your phone settings or in the Virta app will prevent you from receiving important safety-related messages and is not recommended.",
  meterErrorTitle: "Pairing issue detected",
  meterErrorDescriptionTop:
    "Make sure your Virta meter is powered on and nearby, then try pairing again.",
  meterErrorDescriptionBottom: "Need more support?",
  goToSettings: "Go to Settings",
  turnOnBluetoothTitle: "Turn on Bluetooth to connect to your meter",
  turnOnBluetoothDescription:
    "You need to enable Bluetooth and allow new connections on your device for this feature to work.",
  authorizeBluetoothTitle: 'Allow "Virta" to use Bluetooth?',
  authorizeBluetoothDescription:
    'To directly sync readings from your meter, you need to enable this in your device settings. Look for the toggle labeled "Bluetooth".',
  ...forms,
  ...login,
  ...navigation,
  ...primitives,
  ...profile,
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
/* eslint-enable max-lines */
