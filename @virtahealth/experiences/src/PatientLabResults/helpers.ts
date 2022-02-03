import {
  lipidMap,
  lipidNmrMap,
  LIPID_NMR_PANEL_NAME,
  LIPID_PANEL_NAME,
  sharedLipidObservationsMap,
} from "./constants";

/*
 * Used to determine whether an observation belongs to the Lipid or Lipid NMR panel.
 * Extracts all the codes for a set of panel results,
 * and then determines whether the result set contains observations from the Lipid NMR panel.
 * If so, then display observation in the Lipid NMR table; otherwise, default to the Lipids table
 */
export const getPanelNameForOverlappingLipidObservations = (
  panelResults: fhir.Observation[]
) => {
  const resultCodes = panelResults.map(
    (result) => result.code.coding && result.code.coding[0].code
  );
  const hasCommonCodes = resultCodes.some(
    (code) => code && !!lipidNmrMap[code as keyof typeof lipidNmrMap]
  );
  return hasCommonCodes ? LIPID_NMR_PANEL_NAME : LIPID_PANEL_NAME;
};

/*
 * Used to determine whether observations belong to to the Lipid panel.
 * Extracts all the codes for a set of panel results,
 * and then determines whether the result set contains observations from the Lipid panel.
 */
export const hasLipidsPanelResults = (panelResults: fhir.Observation[]) => {
  const resultCodes = panelResults.map(
    (result) => result.code.coding && result.code.coding[0].code
  );
  const hasCommonCodes = resultCodes.some(
    (code) =>
      code &&
      !!(
        lipidMap[code as keyof typeof lipidMap] ||
        sharedLipidObservationsMap[
          code as keyof typeof sharedLipidObservationsMap
        ]
      )
  );
  return hasCommonCodes;
};

/*
 * Used for lab values that are strings with `>` or `<` characters in them
 * Returns boolean to help determine if a table cell gets a different style treatment
 */
export const isStringValueOutsideRefRange = (
  lowThreshold: number,
  highThreshold: number,
  value: string
) => {
  const parsedValue = parseFloat(value.replace(/^[><\s]*/, ""));
  // make sure it's still a number
  if (!isNaN(Number(parsedValue))) {
    if (value.includes(">") && highThreshold) {
      // check that the parsed numeric value is equal or above the high threshold
      return parsedValue >= highThreshold;
    } else if (value.includes("<") && lowThreshold) {
      // check that the parsed numeric value is equal or below the low threshold
      return parsedValue <= lowThreshold;
    }
  }

  return false;
};
