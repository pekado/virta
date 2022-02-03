export const ACTIVE_FLAG_STATUS = "ACTIVE";

export const FLAG_DISPLAY_TO_TYPE_MAPPING = {
  "Na+ Restriction": "Other",
  "Logging Challenges": "Other",
  "Tech Challenges": "Other",
  "Quick Food Options": "Other",
  "Prefers Eating Out": "Other",
  "Frequent Lapses": "Other",
  "Frequent Travel": "Other",
  "Poor Communication": "Other",
  "Low Health Literacy": "Other",
  "Poor Social Support": "Other",
  "Budget Conscious": "Other",
  "Night Shift Work": "Other",
  "Multiple Shift Work": "Other",
  "Medically Complex": "Other",
  "Mental Health": "Other",
  "Disordered Eating": "Other",
  "Road Warrior": "Other",
  Optimizer: "Other",
  "Med Non-Compliance": "Other",
  "High Touch": "Other",
  "Carb Tolerance": "Other",
  Exercise: "Other",
  CGM: "Other",
  "Insulin Pump": "Other",
  Pescatarian: "Other",
  Vegetarian: "Other",
  Vegan: "Other",
  "Dairy-Free": "Other",
  "Gluten-Free": "Other",
  "In Release": "Release",
  DMOC: "Medications of Concern",
  BMOC: "Medications of Concern",
  Deactivated: "Deactivated",
};

export const FLAG_TYPE_TO_COLOR_MAPPING = {
  Deactivated: "orange",
  Release: "orange",
  "Medications of Concern": "red",
  Other: "purple",
};

export const FLAG_TYPE_DISPLAY_ORDER = [
  "Medications of Concern",
  "Deactivated",
  "Release",
  "Other",
];

export const BMI_CONVERSION_FACTOR = 703;

export const DEFAULT_FLAG_TYPE = "Other";
export const DEFAULT_FLAG_COLOR = "purple";

export const STATE_OPTIONS = [
  {
    label: {
      id: "state.options.Alabama",
      description: "Alabama",
      defaultMessage: "Alabama",
    },
    value: "AL",
  },
  {
    label: {
      id: "state.options.Alaska",
      description: "Alaska",
      defaultMessage: "Alaska",
    },
    value: "AK",
  },
  {
    label: {
      id: "state.options.Arizona",
      description: "Arizona",
      defaultMessage: "Arizona",
    },
    value: "AZ",
  },
  {
    label: {
      id: "state.options.Arkansas",
      description: "Arkansas",
      defaultMessage: "Arkansas",
    },
    value: "AR",
  },
  {
    label: {
      id: "state.options.California",
      description: "California",
      defaultMessage: "California",
    },
    value: "CA",
  },
  {
    label: {
      id: "state.options.Colorado",
      description: "Colorado",
      defaultMessage: "Colorado",
    },
    value: "CO",
  },
  {
    label: {
      id: "state.options.Connecticut",
      description: "Connecticut",
      defaultMessage: "Connecticut",
    },
    value: "CT",
  },
  {
    label: {
      id: "state.options.Delaware",
      description: "Delaware",
      defaultMessage: "Delaware",
    },
    value: "DE",
  },
  {
    label: {
      id: "state.options.DistrictOfColumbia",
      description: "District Of Columbia",
      defaultMessage: "District Of Columbia",
    },
    value: "DC",
  },
  {
    label: {
      id: "state.options.Florida",
      description: "Florida",
      defaultMessage: "Florida",
    },
    value: "FL",
  },
  {
    label: {
      id: "state.options.Georgia",
      description: "Georgia",
      defaultMessage: "Georgia",
    },
    value: "GA",
  },
  {
    label: {
      id: "state.options.Hawaii",
      description: "Hawaii",
      defaultMessage: "Hawaii",
    },
    value: "HI",
  },
  {
    label: {
      id: "state.options.Idaho",
      description: "Idaho",
      defaultMessage: "Idaho",
    },
    value: "ID",
  },
  {
    label: {
      id: "state.options.Illinois",
      description: "Illinois",
      defaultMessage: "Illinois",
    },
    value: "IL",
  },
  {
    label: {
      id: "state.options.Indiana",
      description: "Indiana",
      defaultMessage: "Indiana",
    },
    value: "IN",
  },
  {
    label: {
      id: "state.options.Iowa",
      description: "Iowa",
      defaultMessage: "Iowa",
    },
    value: "IA",
  },
  {
    label: {
      id: "state.options.Kansas",
      description: "Kansas",
      defaultMessage: "Kansas",
    },
    value: "KS",
  },
  {
    label: {
      id: "state.options.Kentucky",
      description: "Kentucky",
      defaultMessage: "Kentucky",
    },
    value: "KY",
  },
  {
    label: {
      id: "state.options.Louisiana",
      description: "Louisiana",
      defaultMessage: "Louisiana",
    },
    value: "LA",
  },
  {
    label: {
      id: "state.options.Maine",
      description: "Maine",
      defaultMessage: "Maine",
    },
    value: "ME",
  },
  {
    label: {
      id: "state.options.Maryland",
      description: "Maryland",
      defaultMessage: "Maryland",
    },
    value: "MD",
  },
  {
    label: {
      id: "state.options.Massachusetts",
      description: "Massachusetts",
      defaultMessage: "Massachusetts",
    },
    value: "MA",
  },
  {
    label: {
      id: "state.options.Michigan",
      description: "Michigan",
      defaultMessage: "Michigan",
    },
    value: "MI",
  },
  {
    label: {
      id: "state.options.Minnesota",
      description: "Minnesota",
      defaultMessage: "Minnesota",
    },
    value: "MN",
  },
  {
    label: {
      id: "state.options.Mississippi",
      description: "Mississippi",
      defaultMessage: "Mississippi",
    },
    value: "MS",
  },
  {
    label: {
      id: "state.options.Missouri",
      description: "Missouri",
      defaultMessage: "Missouri",
    },
    value: "MO",
  },
  {
    label: {
      id: "state.options.Montana",
      description: "Montana",
      defaultMessage: "Montana",
    },
    value: "MT",
  },
  {
    label: {
      id: "state.options.Nebraska",
      description: "Nebraska",
      defaultMessage: "Nebraska",
    },
    value: "NE",
  },
  {
    label: {
      id: "state.options.Nevada",
      description: "Nevada",
      defaultMessage: "Nevada",
    },
    value: "NV",
  },
  {
    label: {
      id: "state.options.NewHampshire",
      description: "New Hampshire",
      defaultMessage: "New Hampshire",
    },
    value: "NH",
  },
  {
    label: {
      id: "state.options.NewJersey",
      description: "New Jersey",
      defaultMessage: "New Jersey",
    },
    value: "NJ",
  },
  {
    label: {
      id: "state.options.NewMexico",
      description: "New Mexico",
      defaultMessage: "New Mexico",
    },
    value: "NM",
  },
  {
    label: {
      id: "state.options.NewYork",
      description: "New York",
      defaultMessage: "New York",
    },
    value: "NY",
  },
  {
    label: {
      id: "state.options.NorthCarolina",
      description: "North Carolina",
      defaultMessage: "North Carolina",
    },
    value: "NC",
  },
  {
    label: {
      id: "state.options.NorthDakota",
      description: "North Dakota",
      defaultMessage: "North Dakota",
    },
    value: "ND",
  },
  {
    label: {
      id: "state.options.Ohio",
      description: "Ohio",
      defaultMessage: "Ohio",
    },
    value: "OH",
  },
  {
    label: {
      id: "state.options.Oklahoma",
      description: "Oklahoma",
      defaultMessage: "Oklahoma",
    },
    value: "OK",
  },
  {
    label: {
      id: "state.options.Oregon",
      description: "Oregon",
      defaultMessage: "Oregon",
    },
    value: "OR",
  },
  {
    label: {
      id: "state.options.Pennsylvania",
      description: "Pennsylvania",
      defaultMessage: "Pennsylvania",
    },
    value: "PA",
  },
  {
    label: {
      id: "state.options.Puerto Rico",
      description: "Puerto Rico",
      defaultMessage: "Puerto Rico",
    },
    value: "PR",
  },
  {
    label: {
      id: "state.options.RhodeIsland",
      description: "Rhode Island",
      defaultMessage: "Rhode Island",
    },
    value: "RI",
  },
  {
    label: {
      id: "state.options.SouthCarolina",
      description: "South Carolina",
      defaultMessage: "South Carolina",
    },
    value: "SC",
  },
  {
    label: {
      id: "state.options.SouthDakota",
      description: "South Dakota",
      defaultMessage: "South Dakota",
    },
    value: "SD",
  },
  {
    label: {
      id: "state.options.Tennessee",
      description: "Tennessee",
      defaultMessage: "Tennessee",
    },
    value: "TN",
  },
  {
    label: {
      id: "state.options.Texas",
      description: "Texas",
      defaultMessage: "Texas",
    },
    value: "TX",
  },
  {
    label: {
      id: "state.options.Utah",
      description: "Utah",
      defaultMessage: "Utah",
    },
    value: "UT",
  },
  {
    label: {
      id: "state.options.Vermont",
      description: "Vermont",
      defaultMessage: "Vermont",
    },
    value: "VT",
  },
  {
    label: {
      id: "state.options.Virginia",
      description: "Virginia",
      defaultMessage: "Virginia",
    },
    value: "VA",
  },
  {
    label: {
      id: "state.options.Washington",
      description: "Washington",
      defaultMessage: "Washington",
    },
    value: "WA",
  },
  {
    label: {
      id: "state.options.West Virginia",
      description: "West Virginia",
      defaultMessage: "West Virginia",
    },
    value: "WV",
  },
  {
    label: {
      id: "state.options.Wisconsin",
      description: "Wisconsin",
      defaultMessage: "Wisconsin",
    },
    value: "WI",
  },
  {
    label: {
      id: "state.options.Wyoming",
      description: "Wyoming",
      defaultMessage: "Wyoming",
    },
    value: "WY",
  },
];
