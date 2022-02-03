/* eslint-disable max-lines */
export const BASIC_INFO_SCHEMA = {
  heading: "basicInformationTitle",
  pages: [
    {
      heading: "tellUsAboutYourself",
      description: ["firstStepBI", "freeCallWithEA"],
      sections: [
        {
          description: [
            "assignBenefitConsent",
            "coordPayment",
            "workWithHIC",
            "auth",
            "directPaymentAuth",
          ],
          heading: "consentFormsTitle",
          questions: [
            {
              key: "aobAccepted",
              label: "readAndAcknowledgeAOB",
              type: "checkbox",
              validation: [
                {
                  label: "required",
                  type: "required",
                },
              ],
            },
          ],
        },
        {
          heading: "personalInformation",
          questions: [
            {
              // Hidden test
              key: "hiddenTest",
              label: null,
              type: "hidden",
              defaultValue: "test",
            },
            {
              // API change (from users)
              key: "dob",
              label: "dob",
              type: "date",
              showWhen: [
                {
                  key: "hiddenTest",
                  value: ["test"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "length",
                  value: 10,
                  label: "invalidDate",
                },
              ],
            },
            {
              // API change (from users)
              key: "state",
              label: "residentialState",
              placeholder: "chooseState",
              type: "dropdown",
              options: [
                {
                  label: "alabama",
                  value: "AL",
                },
                // ... [translations]
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              // API change (from users)
              key: "postalCode",
              label: "residentialZip",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "regex",
                  value: /^\d{5}$/i,
                  label: "invalidZip",
                },
              ],
            },
            {
              // API change (from users)
              key: "primaryLanguage",
              label: "primaryLanguage",
              placeholder: "selectLanguage",
              type: "dropdown",
              options: [
                {
                  label: "english",
                  value: "en",
                },
                {
                  label: "spanish",
                  value: "es",
                },
                // ... [translations]
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "canCommunicateInEnglish",
              label: "canYouCommunicateInEnglish",
              type: "radio",
              options: [
                {
                  label: "yes",
                  value: true,
                },
                {
                  label: "no",
                  value: false,
                },
              ],
              showWhen: [
                {
                  key: "primaryLanguage",
                  value: ["es"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "canCommunicateInEnglishWarning",
              label: "languageWarning",
              type: "callout",
              description: "englishIsRequired",
              intent: "warning",
              showWhen: [
                {
                  key: "canCommunicateInEnglish",
                  value: ["false"],
                },
              ],
            },
            {
              key: "phoneSetup",
              label: "phoneSetup",
              type: "radio",
              options: [
                {
                  label: "yes",
                  value: "smartphone",
                },
                {
                  label: "no",
                  value: "none",
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "phoneSetupWarning",
              label: "areYouSure",
              type: "callout",
              description: "smartphoneDef",
              intent: "warning",
              showWhen: [
                {
                  key: "phoneSetup",
                  value: ["none"],
                },
              ],
            },
          ],
        },
        {
          heading: "healthInfo",
          questions: [
            {
              // API change (from users)
              key: "gender",
              label: "gender",
              placeholder: "select",
              type: "dropdown",
              options: [
                {
                  label: "female",
                  value: "f",
                },
                {
                  label: "male",
                  value: "m",
                },
                {
                  label: "other",
                  value: "o",
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              // API change (from users)
              key: "sexAtBirth",
              label: "sexAtBirth",
              placeholder: "select",
              type: "dropdown",
              options: [
                {
                  label: "female",
                  value: "f",
                },
                {
                  label: "male",
                  value: "m",
                },
              ],
              showWhen: [
                {
                  key: "gender",
                  value: ["o"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              // API change
              key: "heightFeet",
              label: "height",
              placeholder: "feet",
              type: "number",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "max",
                  label: "invalidMax",
                  value: 7,
                },
                {
                  type: "min",
                  label: "invalidMin",
                  value: 3,
                },
              ],
            },
            {
              // API change
              key: "heightInches",
              label: null,
              placeholder: "inches",
              type: "number",
              options: [
                {
                  label: "numeralZero",
                  value: 0,
                },
                {
                  label: "numeralOne",
                  value: 1,
                },
                {
                  label: "numeralTwo",
                  value: 2,
                },
                {
                  label: "numeralThree",
                  value: 3,
                },
                {
                  label: "numeralFour",
                  value: 4,
                },
                {
                  label: "numeralFive",
                  value: 5,
                },
                {
                  label: "numeralSix",
                  value: 6,
                },
                {
                  label: "numeralSeven",
                  value: 7,
                },
                {
                  label: "numeralEight",
                  value: 8,
                },
                {
                  label: "numeralNine",
                  value: 9,
                },
                {
                  label: "numeralTen",
                  value: 10,
                },
                {
                  label: "numeralEleven",
                  value: 11,
                },
                {
                  label: "numeralTwelve",
                  value: 12,
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "weightInPounds",
              label: "weight",
              placeholder: "pounds",
              type: "number",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "min",
                  value: 0,
                  label: "invalidWeight",
                },
                {
                  type: "max",
                  value: 999,
                  label: "invalidWeight",
                },
              ],
            },
            {
              key: "diabetesDiagnosis",
              label: "whichDiagnosed",
              type: "radio",
              options: [
                {
                  label: "prediabetes",
                  value: "prediabetes",
                },
                {
                  label: "type1Diabetes",
                  value: "type1",
                },
                {
                  label: "type2Diabetes",
                  value: "type2",
                },
                {
                  label: "noDiabetes",
                  value: "none",
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "isOnDiabetesMedsNotMetformin",
              label: "takingMeds",
              type: "radio",
              options: [
                {
                  label: "yes",
                  value: true,
                },
                {
                  label: "no",
                  value: false,
                },
              ],
              showWhen: [
                {
                  key: "diabetesDiagnosis",
                  value: ["prediabetes", "type1", "type2"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "hasTakenInsulin2",
              label: "takingInsulin",
              type: "radio",
              options: [
                {
                  label: "takingInsulinNow",
                  value: "yes",
                },
                {
                  label: "tookInsulin",
                  value: "noLonger",
                },
                {
                  label: "neverInsulin",
                  value: "never",
                },
                {
                  label: "imNotSure",
                  value: "unsure",
                },
              ],
              showWhen: [
                {
                  key: "diabetesDiagnosis",
                  value: ["prediabetes", "type1", "type2"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              // API change (from users)
              key: "insulinStartYear",
              label: "insulinStartYear",
              type: "number",
              showWhen: [
                {
                  key: "hasTakenInsulin2",
                  value: ["yes", "noLonger"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "min",
                  value: 1900,
                  label: "invalidYear",
                },
                {
                  type: "max",
                  value: 2021,
                  label: "invalidYear",
                },
              ],
            },
            {
              // API change (from users)
              key: "insulinEndYear",
              label: "insulinEndYear",
              type: "number",
              showWhen: [
                {
                  key: "hasTakenInsulin2",
                  value: ["noLonger"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "min",
                  value: 1900,
                  label: "invalidYear",
                },
                {
                  type: "max",
                  value: 2021,
                  label: "invalidYear",
                },
              ],
            },
            {
              key: "isOnDialysis",
              label: "undergoDialysis",
              type: "radio",
              options: [
                {
                  label: "yes",
                  value: true,
                },
                {
                  label: "no",
                  value: false,
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "isOnDialysisCallout",
              label: "areYouSure",
              type: "callout",
              description: "dialysisRx",
              intent: "warning",
              showWhen: [
                {
                  key: "isOnDialysis",
                  value: ["true"],
                },
              ],
            },
          ],
        },
        {
          heading: "coverageInfo",
          questions: [
            {
              key: "employerCoverage",
              label: "howAccessVirta",
              type: "radio",
              options: [
                {
                  label: "iAmCovered",
                  value: "employed",
                  description: "toldIAmCovered",
                },
                {
                  label: "iAmDependent",
                  value: "dependent",
                  description: "coveredDependent",
                },
                {
                  label: "iWillPay",
                  value: "none",
                },
                {
                  label: "iAmVeteran",
                  // API change needed
                  value: "veterans",
                  description: "coveredVHA",
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "payerName",
              label: "whoIsEmployer",
              placeholder: "searchEmployer",
              type: "dropdown",
              skipOptionTranslation: true,
              options: [
                {
                  label: "Automatic Data Processing",
                  value: "Automatic Data Processing",
                },
                // ...
              ],
              showWhen: [
                {
                  key: "employerCoverage",
                  value: ["employed", "dependent"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
              isCreatable: true,
            },
            {
              key: "employerCoverageCallout",
              label: "costOfVirtaTreatment",
              type: "callout",
              description: "oneTimeInitiation",
              intent: "info",
              interpolation: {
                monthlyCost: "$249",
                initiationCost: "$250",
              },
              showWhen: [
                {
                  key: "employerCoverage",
                  value: ["none"],
                },
              ],
            },
            {
              label: "policyholder",
              // label: "insuranceProviderInput",
              key: "insuranceCarrier",
              placeholder: "searchInsurance",
              type: "dropdown",
              skipOptionTranslation: true,
              options: [
                {
                  label: "Aetna",
                  value: "Aetna",
                },
                {
                  label: "Betna",
                  value: "Betna",
                },
                {
                  label: "Cetna",
                  value: "Cetna",
                },
                {
                  label: "Detna",
                  value: "Detna",
                },
                // ...
              ],
              showWhen: [
                {
                  key: "employerCoverage",
                  value: ["employed", "dependent", "none"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              // API change (from users)
              key: "socialSecurity",
              label: "socialSecurity",
              type: "text",
              showWhen: [
                {
                  key: "employerCoverage",
                  value: ["veterans"],
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "length",
                  value: 9,
                  label: "invalidSsn",
                },
              ],
            },
            {
              key: "socialSecurityCallout",
              label: "whyAsking",
              type: "callout",
              description: "infoOnlyUsed",
              intent: "info",
              interpolation: {
                a: "https://www.va.gov/",
              },
              showWhen: [
                {
                  key: "employerCoverage",
                  value: ["veterans"],
                },
              ],
            },
            {
              // API change (addition)
              key: "privacyAccepted",
              // Translation needed
              label: "reviewedPrivacyPractices",
              interpolation: {
                a: "https://www.virtahealth.com/terms",
                a1: "https://www.virtahealth.com/privacypractice",
              },
              type: "checkbox",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "tellUsAboutYourself",
      sections: [
        {
          heading: "commonMedicalQuestions",
          questions: [
            {
              key: "haveSurgeries",
              label: "surgeries",
              description: "haveUndergoneSurgeriesTwentyYears",
              type: "radio",
              options: [
                {
                  label: "yes",
                  value: true,
                },
                {
                  label: "no",
                  value: false,
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "surgeries",
              label: null,
              type: "objectList",
              addLabel: "addSurgery",
              showWhen: [
                {
                  key: "haveSurgeries",
                  value: ["true"],
                },
              ],
              validation: [
                {
                  type: "min",
                  label: "invalidMinArray",
                  value: 1,
                },
              ],
              optionsSchema: [
                {
                  // API change (from users)
                  key: "surgeryName",
                  label: "surgeryNameDescription",
                  type: "text",
                  validation: [
                    {
                      type: "required",
                      label: "required",
                    },
                  ],
                },
                {
                  // API change (from users)
                  key: "surgeryYear",
                  label: "whatYearSurgery",
                  type: "dropdown",
                  skipOptionTranslation: true,
                  options: [
                    {
                      label: "2021",
                      value: 2021,
                    },
                    {
                      label: "2020",
                      value: 2020,
                    },
                    {
                      label: "2019",
                      value: 2019,
                    },
                    {
                      label: "2018",
                      value: 2018,
                    },
                  ],
                  validation: [
                    {
                      type: "required",
                      label: "required",
                    },
                  ],
                },
              ],
            },
            {
              key: "haveConditions",
              label: "haveConditions",
              description: "checkAllThatApply",
              type: "checklist",
              options: [
                { label: "fattyLiverDisease", value: "Fatty liver disease" },
                { label: "gout", value: "Gout" },
                { label: "heartAttack", value: "Heart attack" },
                {
                  label: "highBloodPressure",
                  value: "High blood pressure or hypertension",
                },
                {
                  label: "highCholesterol",
                  value: "High cholesterol or triglycerides",
                },
                { label: "pcos", value: "Polycystic ovarian syndrome (PCOS)" },
                { label: "kidneyStones", value: "Kidney stones" },
                { label: "osa", value: "Sleep apnea (OSA)" },
                { label: "stroke", value: "Stroke" },
                {
                  label: "gestationalDiabetesHistory",
                  value: "Gestational Diabetes History",
                },
              ],
              validation: [],
            },
          ],
        },
        {
          heading: "otherHealth",
          questions: [
            {
              key: "otherHealthHistory",
              label: "otherHealthHistory",
              description: "checkAllThatApply",
              type: "checklist",
              options: [
                {
                  label: "bloodDisease",
                  value: "Blood diseases (e.g. anemia)",
                },
                {
                  label: "brainOrNerve",
                  value: "Brain or nervous system (e.g. TBI)",
                },
                { label: "cancer", value: "Cancer" },
                { label: "ent", value: "Eyes, ears, sinus, nose, or throat" },
                {
                  label: "heartDisease",
                  value: "Heart or blood vessels (e.g. high cholesterol)",
                },
                {
                  label: "hormonal",
                  value: "Hormonal or endocrine system (e.g. thyroid)",
                },
                {
                  label: "kidney",
                  value: "Kidneys or bladder (e.g. low kidney function)",
                },
                { label: "lungs", value: "Lungs (e.g. asthma, COPD)" },
                {
                  label: "muscleBoneJoint",
                  value: "Muscles, bones, or joints (e.g. arthritis)",
                },
                {
                  label: "noAdditional",
                  value:
                    "I do not have any of the above general health problems",
                },
                {
                  label: "pregnancyBreastfeeding",
                  value: "Pregnancy (current/planned) or breastfeeding",
                },
                {
                  label: "psych",
                  value:
                    "Psychiatric or mental health (e.g. anxiety, eating disorder)",
                },
                {
                  label: "reproductiveHealth",
                  value: "Reproductive and sexual health (e.g. infertility)",
                },
                {
                  label: "stomachIntestineLiver",
                  value:
                    "Stomach, intestines, liver, gallbladder, pancreas (e.g. pancreatitis)",
                },
                {
                  label: "none",
                  value: "none",
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "min",
                  label: "invalidMinArray",
                  value: 1,
                },
              ],
              exclusiveWith: "none",
            },
          ],
        },
      ],
    },
    {
      heading: "personalInformation",
      sections: [
        {
          heading: "addressVerification",
          description: ["correctEligibilityInformation"],
          interpolation: {
            styleR: {
              color: "danger",
              weight: "semibold",
            },
          },
          questions: [
            {
              key: "shippingAddress",
              label: null,
              type: "addressValidation",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "personalInformation",
      sections: [
        {
          heading: "findPrimaryCareProvider",
          description: ["correctEligibilityInformation"],
          interpolation: {
            styleR: {
              color: "danger",
              weight: "semibold",
            },
          },
          questions: [
            {
              key: "postalCode",
              label: "postalCode",
              type: "text",
              placeholder: "postalCodeInputPlaceholder",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "personalInformation",
      hideActionButtons: true,
      sections: [
        {
          heading: "addressVerification",
          description: ["correctEligibilityInformation"],
          interpolation: {
            styleR: {
              color: "danger",
              weight: "semibold",
            },
          },
          icon: "CheckedInsuranceCardIcon",
          questions: [],
        },
      ],
    },
  ],
};

export const PHYSICIAN_SEARCH_SCHEMA = {
  heading: "yourHealthProfile",
  pages: [
    {
      sections: [
        {
          heading: "providerContact",
          description: ["providerContactDescription"],
          questions: [
            {
              key: "hasPcp",
              label: "doYouHavePCP",
              type: "radio",
              options: [
                {
                  value: "true",
                  label: "yes",
                },
                {
                  value: "false",
                  label: "no",
                },
              ],
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          heading: "providerInfo",
          questions: [
            {
              key: "postalZip",
              label: "findPrimaryCareProvider",
              placeholder: "postalCodeInputPlaceholder",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "regex",
                  value: /^\d{5}$/i,
                  label: "invalidZip",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          heading: "providerInfo",
          questions: [
            {
              key: "primaryPhysician",
              label: "searchProviderText",
              placeholder: "providerNameInputPlaceholder",
              type: "pcpSearch",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          heading: "providerInfo",
          questions: [
            {
              key: "primaryPhysician.firstName",
              label: "firstName",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "primaryPhysician.lastName",
              label: "lastName",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "min",
                  label: "invalidMin",
                  value: 3,
                },
              ],
            },
            {
              key: "primaryPhysician.phoneNumber",
              label: "phone",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "primaryPhysician.address.address1",
              label: "address1",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "primaryPhysician.address.address2",
              label: "address2",
              type: "text",
            },
            {
              key: "primaryPhysician.address.city",
              label: "city",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "primaryPhysician.address.postalCode",
              label: "postalCode",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
                {
                  type: "regex",
                  value: "\\d{5}",
                  label: "postalCodeInvalid",
                },
              ],
            },
            {
              key: "primaryPhysician.address.province",
              label: "state",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          heading: "providerInfo",
          icon: "CheckedInsuranceCardIcon",
          questions: [],
        },
      ],
    },
  ],
};

export const insuranceProviders = [
  { label: "Aetna", value: "aetna" },
  { label: "Cigna", value: "cigna" },
  { label: "BCBS", value: "bcbs" },
  {
    label: "Horizon Blue Cross Blue Shield",
    value: "horizon-blue-cross-blue-shield",
  },
  { label: "Humana", value: "humana" },
  { label: "IHC Inc.", value: "ihc-inc" },
  {
    label: "Independence Blue Cross",
    value: "independence-blue-cross",
  },
  {
    label: "Independent Health Association, Inc.",
    value: "independent-health-association-inc",
  },
  {
    label: "Inland Empire Health Plan",
    value: "inland-empire-health-plan",
  },
  {
    label: "InnovaCare Health Solutions",
    value: "innova-care-health-solutions",
  },
  { label: "Kaiser Permanente", value: "kaiser-permanente" },
  { label: "Kaleida Health", value: "kaleida-health" },
  {
    label: "Kern Health Systems, Inc.",
    value: "kern-health-systems-inc",
  },
  {
    label: "L.A. Care Health Plan",
    value: "l-a-care-health-plan",
  },
  { label: "Liberty Medical", value: "liberty-medical" },
  {
    label: "LifeWise Health Plan of Oregon",
    value: "life-wise-health-plan-of-oregon",
  },
  {
    label: "Louisiana Medical Serv",
    value: "louisiana-medical-serv",
  },
  { label: "Magellan Health", value: "magellan-health" },
  { label: "Medicare", value: "medicare" },
  {
    label: "Maine Comm Health Options",
    value: "maine-comm-health-options",
  },
  {
    label: "Martin's Point Health Care",
    value: "martin-s-point-health-care",
  },
  {
    label: "Maryland Physicians Care",
    value: "maryland-physicians-care",
  },
  { label: "MassHealth", value: "mass-health" },
  { label: "McLaren Health Plan", value: "mc-laren-health-plan" },
  { label: "MDWise", value: "md-wise" },
  { label: "Medica Health Plans", value: "medica-health-plans" },
  { label: "Medical Mutual", value: "medical-mutual" },
  {
    label: "Medical Mutual of Ohio",
    value: "medical-mutual-of-ohio",
  },
];

export const INSURANCE_ELIGIBILITY_CHECK_SCHEMA = {
  heading: "eligibilityCheckSchema",
  pages: [
    {
      hideBackButton: true,
      heading: "letsCheckYourInsurance",
      sections: [
        {
          questions: [
            {
              key: "insuranceProvider",
              label: "insuranceProviderInput",
              placeholder: "insuranceProviderInput",
              type: "dropdown",
              skipOptionTranslation: true,
              options: insuranceProviders,
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "memberId",
              label: "insuranceMemberInput",
              placeholder: "insuranceMemberInputPlaceholder",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "groupId",
              label: "insuranceGroupInput",
              description: "insuranceGroupInputHelperText",
              placeholder: "insuranceGroupInput",
              type: "text",
            },
          ],
        },
        {
          heading: "assignBenefitConsent",
          questions: [
            {
              key: null,
              label: null,
              type: "callout",
              description: "assignmentOfBenefitConsentParragraph",
              intent: "default",
              interpolation: {
                styleB: {
                  size: "regular",
                  weight: "bold",
                },
                styleCallout: {
                  size: "regular",
                },
              },
            },
            {
              key: "acceptAssignementOfBenefitConsent",
              label: "readAndAcknowledgeAOBBold",
              interpolation: {
                styleB: {
                  size: "small",
                  weight: "semibold",
                },
              },
              type: "checkbox",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      hideActionButtons: true,
      sections: [
        {
          heading: "verifyingCoverage",
          description: ["checkingEligibility"],
          questions: [],
        },
      ],
    },
    {
      hideBackButton: true,
      sections: [
        {
          heading: "goodNewsCovered",
          description: ["congratulationsEligibiltyVerified"],
          icon: "CheckedInsuranceCardIcon",
          questions: [],
        },
      ],
    },
    {
      sections: [
        {
          heading: "insuranceInfoVerification",
          description: ["correctEligibilityInformation"],
          interpolation: {
            styleR: {
              color: "danger",
              weight: "semibold",
            },
          },
          questions: [
            {
              key: "insuranceValidation",
              label: null,
              type: "insuranceValidation",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      backButtonLabel: "skip",
      nextButtonLabel: "editInfo",
      reverseControls: true,
      sections: [
        {
          heading: "somethingsNotRight",
          description: ["troubleShootingCoverage", "insuranceFormHeaderBold"],
          interpolation: {
            styleB: {
              size: "xlarge",
              weight: "bold",
            },
          },
          questions: [
            {
              key: "insuranceFormHeader",
              label: null,
              type: "callout",
              intent: "info",
              description: "formattedInsuranceInfoCallout",
              interpolation: {
                v1: "firstName",
                v2: "lastName",
                v3: "dob",
                v4: "gender",
                v5: "insuranceProvider",
                v6: "groupId",
                v7: "memberId",
                styleB: {
                  size: "small",
                  weight: "semibold",
                },
                styleCallout: {
                  size: "small",
                  weight: "regular",
                  lineHeight: 2,
                },
              },
            },
          ],
        },
      ],
    },
    {
      heading: "insuranceFormHeader",
      hideBackButton: true,
      description: ["primaryInsuranceEntryBelow"],
      sections: [
        {
          questions: [
            {
              key: "firstName",
              label: "firstName",
              type: "text",
            },
            {
              key: "lastName",
              label: "lastName",
              type: "text",
            },
            {
              key: "dob",
              label: "dob",
              type: "text",
            },
            {
              key: "gender",
              label: "gender",
              placeholder: "select",
              type: "dropdown",
              options: [
                {
                  label: "female",
                  value: "f",
                },
                {
                  label: "male",
                  value: "m",
                },
                {
                  label: "other",
                  value: "o",
                },
              ],
            },
            {
              key: "insuranceProvider",
              label: "insuranceProviderInput",
              placeholder: "insuranceProviderInput",
              type: "dropdown",
              skipOptionTranslation: true,
              options: insuranceProviders,
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "memberId",
              label: "insuranceMemberInput",
              placeholder: "insuranceMemberInputPlaceholder",
              type: "text",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "groupId",
              label: "insuranceGroupInput",
              description: "insuranceGroupInputHelperText",
              placeholder: "insuranceGroupInput",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      hideBackButton: true,
      nextButtonLabel: "continue",
      sections: [
        {
          heading: "thanksForSubmittingNoName",
          description: ["verifyingCoverageParagraph"],
          questions: [],
        },
      ],
    },
    {
      backButtonLabel: "skip",
      nextButtonLabel: "upload",
      reverseControls: true,
      sections: [
        {
          heading: "uploadImage",
          description: [
            "attachImageTroubleShooting",
            "fileTypes",
            "imageFileSize",
          ],
          questions: [
            {
              key: "uploadImageFront",
              name: "uploadImageFront",
              label: "front",
              type: "fileUpload",
              description: "uploadImage",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
            {
              key: "uploadImageBack",
              name: "uploadImageBack",
              label: "back",
              type: "fileUpload",
              description: "uploadImage",
              validation: [
                {
                  type: "required",
                  label: "required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      hideBackButton: true,
      nextButtonLabel: "continue",
      sections: [
        {
          heading: "lookingIntoIt",
          description: ["unableToVerifyEligibility"],
          questions: [],
        },
      ],
    },
  ],
};

/* eslint-enable max-lines */
