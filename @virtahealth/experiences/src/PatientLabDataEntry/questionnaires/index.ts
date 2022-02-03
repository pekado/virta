/* Methodology for adding additional lab panels
 * 1. Go to https://lhcformbuilder.nlm.nih.gov/ and click 'Add Item' to search for the desired panel
 *    with 'Import from LOINC' selected
 * 2. After importing, select the JSON Output tab, and make sure STU3 is selected
 * 3. Copy the JSON output into a .json file in this directory
 * 4. Remove extraneous questionnaire items from JSON
 * 5. For each remaining questionnaire item, add a min/max value to the extensions
 *    e.g. {
              "url": "http://hl7.org/fhir/StructureDefinition/minValue",
              "valueDecimal": 5
            }
 * 6. Make sure to include the new panel in the `questionnaireMap` in transformDiagnosticReport.ts
      If it is a custom panel (one without a specific code; e.g. the current hbA1c panel),
      then it may be necessary to map using the item text as well in case nested observations
      do not get saved correctly and the `related` key is not present.
 * 7. To add a checkbox for the panel in the transcription form, add it to the QUESTIONNAIRES map below,
      and add the key it's associated to in this map to the `checkboxOrder` list in the ObservationChooser index
 */
import { labelMessages } from "../messages";

import * as antiGadQuestionnaire from "./antiGad.json";
import * as cmpQuestionnaire from "./cmp.json";
import * as cPeptideQuestionnaire from "./cPeptide.json";
import * as hbA1cQuestionnaire from "./hbA1c.json";
import * as hsCrpQuestionnaire from "./hsCrp.json";
import * as lipidQuestionnaire from "./lipid.json";
import * as microalbuminCreatinineQuestionnaire from "./microalbuminCreatinine.json";
import * as nmrLipoprofileQuestionnaire from "./nmrLipoprofile.json";
import * as serumInsulinQuestionnaire from "./serumInsulin.json";
import * as tshQuestionnaire from "./tsh.json";
import * as clinicalTrialQuestionnaire from "./clinicalTrial.json";
import * as biometricQuestionnaire from "./biometric.json";

export const QUESTIONNAIRES = {
  lipid: {
    displayMessage: labelMessages.lipid,
    loinc: "24331-1",
    linkId: "/24331-1",
    questionnaire: lipidQuestionnaire,
  },
  metabolicPanel: {
    displayMessage: labelMessages.metabolicPanel,
    loinc: "24323-8",
    linkId: "/24323-8",
    questionnaire: cmpQuestionnaire,
  },
  a1c: {
    displayMessage: labelMessages.a1c,
    loinc: "4548-4",
    linkId: "/4548-4",
    questionnaire: hbA1cQuestionnaire,
  },
  antiGad: {
    displayMessage: labelMessages.antiGad,
    loinc: "56540-8",
    linkId: "/56540-8",
    questionnaire: antiGadQuestionnaire,
  },
  cPeptide: {
    displayMessage: labelMessages.cPeptide,
    loinc: "95080-8",
    linkId: "/95080-8",
    questionnaire: cPeptideQuestionnaire,
  },
  hsCrp: {
    displayMessage: labelMessages.hsCrp,
    loinc: "30522-7",
    linkId: "/30522-7",
    questionnaire: hsCrpQuestionnaire,
  },
  albuminCreatinine: {
    displayMessage: labelMessages.albuminCreatinine,
    loinc: "34535-5",
    linkId: "/34535-5",
    questionnaire: microalbuminCreatinineQuestionnaire,
  },
  nmrLipoprofile: {
    displayMessage: labelMessages.nmrLipoprofile,
    loinc: "59062-0",
    linkId: "/59062-0",
    questionnaire: nmrLipoprofileQuestionnaire,
  },
  serumInsulin: {
    displayMessage: labelMessages.serumInsulin,
    loinc: "95110-3",
    linkId: "/95110-3",
    questionnaire: serumInsulinQuestionnaire,
  },
  tsh: {
    displayMessage: labelMessages.tsh,
    loinc: "11580-8",
    linkId: "/11580-8",
    questionnaire: tshQuestionnaire,
  },
  clinicalTrial: {
    displayMessage: labelMessages.clinicalTrial,
    loinc: "clinical-trial",
    linkId: "/clinical-trial",
    questionnaire: clinicalTrialQuestionnaire,
  },
  biometric: {
    displayMessage: labelMessages.biometric,
    loinc: "biometric",
    linkId: "/biometric",
    questionnaire: biometricQuestionnaire,
  },
};

export {
  antiGadQuestionnaire,
  biometricQuestionnaire,
  clinicalTrialQuestionnaire,
  cmpQuestionnaire,
  cPeptideQuestionnaire,
  hbA1cQuestionnaire,
  hsCrpQuestionnaire,
  lipidQuestionnaire,
  microalbuminCreatinineQuestionnaire,
  nmrLipoprofileQuestionnaire,
  serumInsulinQuestionnaire,
  tshQuestionnaire,
};
