import { ObservationData } from "./types";

export const SUPPORTED_VALUE_TYPES = [
  "valueString",
  "valueQuantity",
  "valueRange",
  "valueRatio",
  "valueBoolean",
];

export const HBA1C_PANEL_NAME = "Hemoglobin A1c";
export const METABOLIC_PANEL_NAME = "Metabolic Panel";
export const LIPID_PANEL_NAME = "Lipids";
export const LIPID_NMR_PANEL_NAME = "Lipid NMR";
export const ALBUMIN_CREATININE_PANEL_NAME = "Albumin/Creatinine Ratio, Urine";
export const C_PEPTIDE_PANEL_NAME = "C-Peptide, Serum";

export const OTHER_PANEL_CHECKBOX_LABEL = "Other Panels";

/* There are some observations that overlap between panels
 * Currently, we only have ones that overlap between the Lipid and Lipid NMR panels,
 * So we are using this constant as an identifier for those observations
 */
export const LIPID_OR_LIPID_NMR_PANEL = "lipidOrLipidNmrPanel";
export const LIPID_OR_CLINICAL_TRIAL_PANEL = "lipidOrClinicalTrialPanel";

const hbA1cMap = {
  "4548-4": HBA1C_PANEL_NAME,
  "59261-8": HBA1C_PANEL_NAME,
  "17855-8": HBA1C_PANEL_NAME,
  "LP16413-4": HBA1C_PANEL_NAME,
  "41995-2": HBA1C_PANEL_NAME,
  "17856-6": HBA1C_PANEL_NAME,
  "virta-hba1c": HBA1C_PANEL_NAME,
};

export const hbA1cObservationCodes: ObservationData[] = [
  {
    observationName: "HbA1c",
    codes: Object.keys(hbA1cMap),
    referenceRange: {
      low: { value: 4.8 },
      high: { value: 5.6 },
      text: "4.8 - 5.6",
    },
  },
];

const metabolicPanelMap = {
  // Glucose
  "2345-7": METABOLIC_PANEL_NAME,
  "2339-0": METABOLIC_PANEL_NAME,
  "74774-1": METABOLIC_PANEL_NAME,
  "2340-8": METABOLIC_PANEL_NAME,
  "41651-1": METABOLIC_PANEL_NAME,
  "virta-glucose": METABOLIC_PANEL_NAME,
  // BUN
  "3094-0": METABOLIC_PANEL_NAME,
  "6299-2": METABOLIC_PANEL_NAME,
  "11065-0": METABOLIC_PANEL_NAME,
  "virta-bun": METABOLIC_PANEL_NAME,
  // Creatinine
  "2160-0": METABOLIC_PANEL_NAME,
  "38483-4": METABOLIC_PANEL_NAME,
  "11042-9": METABOLIC_PANEL_NAME,
  "11041-1": METABOLIC_PANEL_NAME,
  "virta-creatinine": METABOLIC_PANEL_NAME,
  // BUN/Creatinine
  "3097-3": METABOLIC_PANEL_NAME,
  "virta-bun-cr-ratio": METABOLIC_PANEL_NAME,
  // GFR non-African American
  "48642-3": METABOLIC_PANEL_NAME,
  "88294-4": METABOLIC_PANEL_NAME,
  "77147-7": METABOLIC_PANEL_NAME,
  "69405-9": METABOLIC_PANEL_NAME,
  "33914-3": METABOLIC_PANEL_NAME,
  "62238-1": METABOLIC_PANEL_NAME,
  "50210-4": METABOLIC_PANEL_NAME,
  "70969-1": METABOLIC_PANEL_NAME,
  "virta-egfr-if-non-african-american": METABOLIC_PANEL_NAME,
  // GFR African American
  "48643-1": METABOLIC_PANEL_NAME,
  "88293-6": METABOLIC_PANEL_NAME,
  "virta-egfr-if-african-american": METABOLIC_PANEL_NAME,
  // Sodium
  "2951-2": METABOLIC_PANEL_NAME,
  "2947-0": METABOLIC_PANEL_NAME,
  "77139-4": METABOLIC_PANEL_NAME,
  "39791-9": METABOLIC_PANEL_NAME,
  "virta-sodium": METABOLIC_PANEL_NAME,
  // Potassium
  "2823-3": METABOLIC_PANEL_NAME,
  "6298-4": METABOLIC_PANEL_NAME,
  "32713-0": METABOLIC_PANEL_NAME,
  "virta-potassium": METABOLIC_PANEL_NAME,
  // Chloride
  "2075-0": METABOLIC_PANEL_NAME,
  "77138-6": METABOLIC_PANEL_NAME,
  "virta-chloride": METABOLIC_PANEL_NAME,
  // CO2
  "2028-9": METABOLIC_PANEL_NAME,
  "20565-8": METABOLIC_PANEL_NAME,
  "2027-1": METABOLIC_PANEL_NAME,
  "virta-co2": METABOLIC_PANEL_NAME,
  // HCO3
  "1959-6": METABOLIC_PANEL_NAME,
  "14627-4": METABOLIC_PANEL_NAME,
  "19232-8": METABOLIC_PANEL_NAME,
  "1963-8": METABOLIC_PANEL_NAME,
  "virta-bicarbonate": METABOLIC_PANEL_NAME,
  // Calcium
  "17861-6": METABOLIC_PANEL_NAME,
  "49765-1": METABOLIC_PANEL_NAME,
  "46099-8": METABOLIC_PANEL_NAME,
  "29265-6": METABOLIC_PANEL_NAME,
  "17863-2": METABOLIC_PANEL_NAME,
  "virta-calcium": METABOLIC_PANEL_NAME,
  // Protein
  "2885-2": METABOLIC_PANEL_NAME,
  "virta-total-protein": METABOLIC_PANEL_NAME,
  // Albumin
  "1751-7": METABOLIC_PANEL_NAME,
  "LP6118-6": METABOLIC_PANEL_NAME,
  "54347-0": METABOLIC_PANEL_NAME,
  "13980-8": METABOLIC_PANEL_NAME,
  "61151-7": METABOLIC_PANEL_NAME,
  "virta-albumin": METABOLIC_PANEL_NAME,
  "61152-5": METABOLIC_PANEL_NAME,
  // Globulin
  "10834-0": METABOLIC_PANEL_NAME,
  "2865-4": METABOLIC_PANEL_NAME,
  "2336-6": METABOLIC_PANEL_NAME,
  "9734-5": METABOLIC_PANEL_NAME,
  "13536-8": METABOLIC_PANEL_NAME,
  "virta-globulin": METABOLIC_PANEL_NAME,
  // A/G (Albumin/Globulin)
  "1759-0": METABOLIC_PANEL_NAME,
  "virta-a-g-ratio": METABOLIC_PANEL_NAME,
  // Bilirubin
  "1975-2": METABOLIC_PANEL_NAME,
  "42719-5": METABOLIC_PANEL_NAME,
  "virta-total-bilirubin": METABOLIC_PANEL_NAME,
  // ALP
  "6768-6": METABOLIC_PANEL_NAME,
  "24332-9": METABOLIC_PANEL_NAME,
  "1783-0": METABOLIC_PANEL_NAME,
  "14588-8": METABOLIC_PANEL_NAME,
  "virta-alkaline-phosphatase": METABOLIC_PANEL_NAME,
  // AST
  "1920-8": METABOLIC_PANEL_NAME,
  "30239-8": METABOLIC_PANEL_NAME,
  "virta-ast-sgot": METABOLIC_PANEL_NAME,
  // ALT
  "1742-6": METABOLIC_PANEL_NAME,
  "1743-4": METABOLIC_PANEL_NAME,
  "1744-2": METABOLIC_PANEL_NAME,
  "77144-4": METABOLIC_PANEL_NAME,
  "76625-3": METABOLIC_PANEL_NAME,
  "virta-alt-sgpt": METABOLIC_PANEL_NAME,
};

export const metabolicPanelObservationCodes: ObservationData[] = [
  {
    observationName: "Glucose",
    codes: [
      "2345-7",
      "2339-0",
      "74774-1",
      "2340-8",
      "41651-1",
      "virta-glucose",
    ],
    referenceRange: {
      low: { value: 65 },
      high: { value: 99 },
      text: "65 - 99",
    },
  },
  {
    observationName: "BUN",
    codes: ["3094-0", "6299-2", "11065-0", "virta-bun"],
    referenceRange: {
      low: { value: 6 },
      high: { value: 24 },
      text: "6 - 24",
    },
  },
  {
    observationName: "Creatinine",
    codes: ["2160-0", "38483-4", "11042-9", "11041-1", "virta-creatinine"],
    referenceRange: {
      low: { value: 0.57 },
      high: { value: 1.0 },
      text: "0.57 - 1.00",
    },
  },
  {
    observationName: "BUN/Creatinine",
    codes: ["3097-3", "virta-bun-cr-ratio"],
    referenceRange: {
      low: { value: 9 },
      high: { value: 23 },
      text: "9 - 23",
    },
  },
  {
    observationName: "eGFR If African Am",
    codes: ["48643-1", "88293-6", "virta-egfr-if-african-american"],
    referenceRange: {
      low: { value: 59 },
      text: "> 59",
    },
  },
  {
    observationName: "eGFR If Non Africn Am",
    codes: [
      "48642-3",
      "88294-4",
      "77147-7",
      "69405-9",
      "33914-3",
      "62238-1",
      "50210-4",
      "70969-1",
      "virta-egfr-if-non-african-american",
    ],
    referenceRange: {
      low: { value: 59 },
      text: "> 59",
    },
  },
  {
    observationName: "Sodium",
    codes: ["2951-2", "2947-0", "77139-4", "39791-9", "virta-sodium"],
    referenceRange: {
      low: { value: 134 },
      high: { value: 144 },
      text: "134 - 144",
    },
  },
  {
    observationName: "Potassium",
    codes: ["2823-3", "6298-4", "32713-0", "virta-potassium"],
    referenceRange: {
      low: { value: 3.5 },
      high: { value: 5.2 },
      text: "3.5 - 5.2",
    },
  },
  {
    observationName: "Chloride",
    codes: ["2075-0", "77138-6", "virta-chloride"],
    referenceRange: {
      low: { value: 96 },
      high: { value: 106 },
      text: "96 - 106",
    },
  },
  {
    observationName: "Carbon Dioxide, Total",
    codes: [
      "2028-9",
      "20565-8",
      "2027-1",
      "1959-6",
      "14627-4",
      "19232-8",
      "1963-8",
      "virta-co2",
      "virta-bicarbonate",
    ],
    referenceRange: {
      low: { value: 20 },
      high: { value: 29 },
      text: "20 - 29",
    },
  },
  {
    observationName: "Calcium",
    codes: [
      "17861-6",
      "49765-1",
      "46099-8",
      "29265-6",
      "17863-2",
      "virta-calcium",
    ],
    referenceRange: {
      low: { value: 8.7 },
      high: { value: 10.2 },
      text: "8.7 - 10.2",
    },
  },
  {
    observationName: "Protein, Total",
    codes: ["2885-2", "virta-total-protein"],
    referenceRange: {
      low: { value: 6.0 },
      high: { value: 8.5 },
      text: "6.0 - 8.5",
    },
  },
  {
    observationName: "Albumin",
    codes: [
      "1751-7",
      "LP6118-6",
      "54347-0",
      "13980-8",
      "61151-7",
      "virta-albumin",
      "61152-5",
    ],
    referenceRange: {
      low: { value: 3.8 },
      high: { value: 4.8 },
      text: "3.8 - 4.8",
    },
  },
  {
    observationName: "Globulin, Total",
    codes: [
      "10834-0",
      "2865-4",
      "2336-6",
      "9734-5",
      "13536-8",
      "virta-globulin",
    ],
    referenceRange: {
      low: { value: 1.5 },
      high: { value: 4.5 },
      text: "1.5 - 4.5",
    },
  },
  {
    observationName: "A/G ratio",
    codes: ["1759-0", "virta-a-g-ratio"],
    referenceRange: {
      low: { value: 1.2 },
      high: { value: 2.2 },
      text: "1.2 - 2.2",
    },
  },
  {
    observationName: "Bilirubin, Total",
    codes: ["1975-2", "42719-5", "virta-total-bilirubin"],
    referenceRange: {
      low: { value: 0.0 },
      high: { value: 1.2 },
      text: "0.0 - 1.2",
    },
  },
  {
    observationName: "Alkaline Phosphatase",
    codes: [
      "6768-6",
      "24332-9",
      "1783-0",
      "14588-8",
      "virta-alkaline-phosphatase",
    ],
    referenceRange: {
      low: { value: 44 },
      high: { value: 121 },
      text: "44 - 121",
    },
  },
  {
    observationName: "ALT (SGPT)",
    codes: [
      "1742-6",
      "1743-4",
      "1744-2",
      "77144-4",
      "76625-3",
      "virta-alt-sgpt",
    ],
    referenceRange: {
      low: { value: 0 },
      high: { value: 32 },
      text: "0 - 32",
    },
  },
  {
    observationName: "AST (SGOT)",
    codes: ["1920-8", "30239-8", "virta-ast-sgot"],
    referenceRange: {
      low: { value: 0 },
      high: { value: 40 },
      text: "0 - 40",
    },
  },
];

export const sharedLipidObservationsMap = {
  // Total Cholesterol
  "2093-3": LIPID_OR_LIPID_NMR_PANEL,

  // Triglycerides
  "2571-8": LIPID_OR_LIPID_NMR_PANEL,

  // HDL-C
  "2085-9": LIPID_OR_LIPID_NMR_PANEL,

  // LDL-C
  "13457-7": LIPID_OR_LIPID_NMR_PANEL,
};

const lipidClinicalTrialMap = {
  // Apolipoprotein B
  "1884-6": LIPID_OR_CLINICAL_TRIAL_PANEL,
};

export const lipidMap = {
  // Total Cholesterol
  "virta-total-cholesterol": LIPID_PANEL_NAME,
  // Triglycerides
  "3043-7": LIPID_PANEL_NAME,
  "12951-0": LIPID_PANEL_NAME,
  "3048-6": LIPID_PANEL_NAME,
  "virta-triglyceride": LIPID_PANEL_NAME,
  // HDL-C
  "18263-4": LIPID_PANEL_NAME,
  "49130-8": LIPID_PANEL_NAME,
  "27340-9": LIPID_PANEL_NAME,
  "virta-hdl-c": LIPID_PANEL_NAME,
  // LDL-C
  "2089-1": LIPID_PANEL_NAME,
  "57698-3": LIPID_PANEL_NAME,
  "55440-2": LIPID_PANEL_NAME,
  "69419-0": LIPID_PANEL_NAME,
  "18262-6": LIPID_PANEL_NAME,
  "39469-2": LIPID_PANEL_NAME,
  "12773-8": LIPID_PANEL_NAME,
  "virta-ldl-c": LIPID_PANEL_NAME,
  // VLDL
  "13458-5": LIPID_PANEL_NAME,
  "46986-6": LIPID_PANEL_NAME,
  "66126-4": LIPID_PANEL_NAME,
  "34695-7": LIPID_PANEL_NAME,
  "25371-6": LIPID_PANEL_NAME,
  "50194-0": LIPID_PANEL_NAME,
  "virta-vldl": LIPID_PANEL_NAME,
  // LDL/HDL ratio
  "11054-4": LIPID_PANEL_NAME,
  // Apolipoprotein B
  "1871-3": LIPID_PANEL_NAME,
  "virta-apob": LIPID_PANEL_NAME,
  // Total Cholesterol/HDL ratio
  "9830-1": LIPID_PANEL_NAME,
};

export const lipidPanelObservationCodes = [
  {
    observationName: "Total Cholesterol",
    codes: ["2093-3", "virta-total-cholesterol"],
    referenceRange: {
      low: { value: 100 },
      high: { value: 199 },
      text: "100 - 199",
    },
  },
  {
    observationName: "Triglycerides",
    codes: ["2571-8", "3043-7", "12951-0", "3048-6", "virta-triglyceride"],
    referenceRange: {
      low: { value: 0 },
      high: { value: 149 },
      text: "0 - 149",
    },
  },
  {
    observationName: "HDL-C",
    codes: ["2085-9", "18263-4", "49130-8", "27340-9", "virta-hdl-c"],
    referenceRange: {
      low: { value: 39 },
      text: "> 39",
    },
  },
  {
    observationName: "VLDL-C (calc)",
    codes: [
      "13458-5",
      "46986-6",
      "66126-4",
      "34695-7",
      "25371-6",
      "50194-0",
      "virta-vldl",
    ],
    referenceRange: {
      low: { value: 5 },
      high: { value: 40 },
      text: "5 - 40",
    },
  },
  {
    observationName: "LDL-C (calc)",
    codes: [
      "13457-7",
      "2089-1",
      "57698-3",
      "55440-2",
      "69419-0",
      "18262-6",
      "39469-2",
      "12773-8",
      "virta-ldl-c",
    ],
    referenceRange: {
      low: { value: 0 },
      high: { value: 99 },
      text: "0 - 99",
    },
  },
  {
    observationName: "HDL/LDL ratio",
    codes: ["11054-4"],
    referenceRange: {
      low: { value: 0.0 },
      high: { value: 3.2 },
      text: "0.0 - 3.2",
    },
  },
  {
    observationName: "Apolipoprotein B",
    codes: ["1884-6", "1871-3", "virta-apob"],
    referenceRange: {
      high: { value: 90 },
      text: "Desirable < 90\nBorderline High 90 - 99\nHigh 100 - 130\nVery High >130",
    },
  },
  {
    observationName: "Total Cholesterol/HDL ratio",
    codes: ["9830-1"],
    referenceRange: {
      low: { value: 0.0 },
      high: { value: 5.0 },
      text: "0.0 - 5.0",
    },
  },
];

export const lipidNmrMap = {
  // LDL-P
  "54434-6": LIPID_NMR_PANEL_NAME,
  "35505-7": LIPID_NMR_PANEL_NAME,
  "virta-ldl-p": LIPID_NMR_PANEL_NAME,
  // HDL-P
  "49748-7": LIPID_NMR_PANEL_NAME,
  "86222-7": LIPID_NMR_PANEL_NAME,
  "virta-hdl-p": LIPID_NMR_PANEL_NAME,
  // Small LDL-P
  "43727-7": LIPID_NMR_PANEL_NAME,
  "92715-2": LIPID_NMR_PANEL_NAME,
  "virta-ldl-small": LIPID_NMR_PANEL_NAME,
  // LDL size
  "17782-4": LIPID_NMR_PANEL_NAME,
  "virta-ldl-size": LIPID_NMR_PANEL_NAME,
  // VLDL large
  "43728-5": LIPID_NMR_PANEL_NAME,
  // VLDL size
  "62254-8": LIPID_NMR_PANEL_NAME,
  // LP-IR Score
  "62255-5": LIPID_NMR_PANEL_NAME,
  "virta-lp-ir-score": LIPID_NMR_PANEL_NAME,
  // GlycA
  "82730-3": LIPID_NMR_PANEL_NAME, // DOUBLE CHECK THIS! This is from a search of LabCorp
};

export const lipidNmrPanelObservationCodes = [
  {
    observationName: "LDL-P",
    codes: ["54434-6", "35505-7", "virta-ldl-p"],
    referenceRange: {
      high: { value: 1000 },
      text: "Low < 1000\nModerate 1000 - 1299\nBorderline-High 1300 - 1599\nHigh 1600 - 2000\nVery High > 2000",
    },
  },
  {
    observationName: "Small LDL-P",
    codes: ["43727-7", "92715-2", "virta-ldl-small"],
    referenceRange: {
      high: { value: 527 },
      text: "<= 527",
    },
  },
  {
    observationName: "HDL-P (Total)",
    codes: ["49748-7", "86222-7", "virta-hdl-p"],
    referenceRange: {
      low: { value: 30.5 },
      text: ">= 30.5",
    },
  },
  {
    observationName: "LDL Size",
    codes: ["17782-4", "virta-ldl-size"],
    referenceRange: {
      low: { value: 20.8 },
      text: ">= 20.8",
    },
  },
  {
    observationName: "VLDL large",
    codes: ["43728-5"],
    referenceRange: {
      high: { value: 2.7 },
      text: "<= 2.7",
    },
  },
  {
    observationName: "VLDL Size",
    codes: ["62254-8"],
    referenceRange: {
      high: { value: 46.6 },
      text: "<= 46.6",
    },
  },
  {
    observationName: "LP-IR Score",
    codes: ["62255-5", "virta-lp-ir-score"], // Missing other LOINC codes?
    referenceRange: {
      high: { value: 45 },
      text: "<= 45",
    },
  },
  {
    observationName: "LDL-C (calc)",
    codes: [
      "13457-7",
      "2089-1",
      "57698-3",
      "55440-2",
      "69419-0",
      "18262-6",
      "39469-2",
      "12773-8",
      "virta-ldl-c",
    ],
    referenceRange: {
      low: { value: 0 },
      high: { value: 99 },
      text: "0 - 99",
    },
  },
  {
    observationName: "HDL-C",
    codes: ["2085-9", "18263-4", "49130-8", "27340-9", "virta-hdl-c"],
    referenceRange: {
      low: { value: 39 },
      text: "> 39",
    },
  },
  {
    observationName: "Total Cholesterol",
    codes: ["2093-3", "virta-total-cholesterol"],
    referenceRange: {
      low: { value: 100 },
      high: { value: 199 },
      text: "100 - 199",
    },
  },
  {
    observationName: "Triglycerides",
    codes: ["2571-8", "3043-7", "12951-0", "3048-6", "virta-triglyceride"],
    referenceRange: {
      low: { value: 0 },
      high: { value: 149 },
      text: "0 - 149",
    },
  },
  {
    observationName: "GlycA",
    codes: ["82730-3"],
    referenceRange: {
      high: { value: 400 },
      text: "< 400",
    },
  },
];

const albuminCreatinineMap = {
  // Albumin
  "14957-5": ALBUMIN_CREATININE_PANEL_NAME,
  "1753-3": ALBUMIN_CREATININE_PANEL_NAME,
  "6942-7": ALBUMIN_CREATININE_PANEL_NAME,
  "50949-7": ALBUMIN_CREATININE_PANEL_NAME,
  "virta-microalbumin-urine": ALBUMIN_CREATININE_PANEL_NAME,
  "virta-urine-microalbumin": ALBUMIN_CREATININE_PANEL_NAME,
  // Creatinine
  "2161-8": ALBUMIN_CREATININE_PANEL_NAME,
  "14683-7": ALBUMIN_CREATININE_PANEL_NAME,
  "20624-3": ALBUMIN_CREATININE_PANEL_NAME,
  "2164-2": ALBUMIN_CREATININE_PANEL_NAME,
  "35674-1": ALBUMIN_CREATININE_PANEL_NAME,
  "30002-0": ALBUMIN_CREATININE_PANEL_NAME,
  "65634-8": ALBUMIN_CREATININE_PANEL_NAME,
  "virta-creatinine-urine": ALBUMIN_CREATININE_PANEL_NAME,
  // Albumin/Creatinine Ratio
  "9318-7": ALBUMIN_CREATININE_PANEL_NAME,
  "13705-9": ALBUMIN_CREATININE_PANEL_NAME,
  "14959-1": ALBUMIN_CREATININE_PANEL_NAME,
  "89998-9": ALBUMIN_CREATININE_PANEL_NAME,
  "44292-1": ALBUMIN_CREATININE_PANEL_NAME,
  "virta-albumin-cr-ratio": ALBUMIN_CREATININE_PANEL_NAME,
  "virta-microalbumin-creatinine-ratio": ALBUMIN_CREATININE_PANEL_NAME,
};

export const albuminCreatininePanelObservationCodes = [
  {
    observationName: "Albumin, Urine",
    codes: [
      "14957-5",
      "1753-3",
      "6942-7",
      "50949-7",
      "virta-microalbumin-urine",
      "virta-urine-microalbumin",
    ],
    // Reference Range: Not Estab.
  },
  {
    observationName: "Creatinine, Urine",
    codes: [
      "2161-8",
      "14683-7",
      "20624-3",
      "2164-2",
      "35674-1",
      "30002-0",
      "65634-8",
      "virta-creatinine-urine",
    ],
    // Reference Range: Not Estab.
  },
  {
    observationName: "Alb/Creat ratio",
    codes: [
      "9318-7",
      "13705-9",
      "14959-1",
      "89998-9",
      "44292-1",
      "virta-albumin-cr-ratio",
      "virta-microalbumin-creatinine-ratio",
    ],
    referenceRange: {
      low: { value: 0 },
      high: { value: 29 },
      text: "0 - 29",
    },
  },
];

const cPeptideMap = {
  "1986-9": C_PEPTIDE_PANEL_NAME,
  "13032-8": C_PEPTIDE_PANEL_NAME,
  "56516-8": C_PEPTIDE_PANEL_NAME,
  "13037-7": C_PEPTIDE_PANEL_NAME, // Do we need this?
  "virta-c-peptide": C_PEPTIDE_PANEL_NAME,
};

export const cPeptidePanelObservationCodes = [
  {
    observationName: "C-Peptide",
    codes: ["1986-9", "13032-8", "56516-8", "virta-c-peptide"],
    referenceRange: {
      low: { value: 1.1 },
      high: { value: 4.4 },
      text: "1.1 − 4.4",
    },
  },
];

// TODO: figure out how to map non-core panels (e.g. TSH) with virta codes

export const codeToCorePanelMap = {
  /* HbA1c panel codes */
  ...hbA1cMap,
  /* Metabolic Panel codes */
  ...metabolicPanelMap,
  /* Lipid panel codes */
  ...lipidMap,
  /* Lipid NMR panel */
  ...lipidNmrMap,
  /* Albumin/Creatinine panel */
  ...albuminCreatinineMap,
  /* C-Peptide panel */
  ...cPeptideMap,
  /* Observations shared between lipid/lipid NMR panel map */
  ...sharedLipidObservationsMap,
  /* Observation shared between lipid/clinical trial panel map */
  ...lipidClinicalTrialMap,
};
