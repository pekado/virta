import fhirReference from "./fhirReference";
import { recipeIngredient, recipeNutrition, quantity } from "./recipe";
import richText from "./richText";
import video from "./video";
import figure from "./figure";
import calloutBlock from "./calloutBlock";
import tableField from "./table";

export default [
  calloutBlock,
  fhirReference,
  figure,
  quantity,
  recipeIngredient,
  recipeNutrition,
  richText,
  tableField,
  video,
];
