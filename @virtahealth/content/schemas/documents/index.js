import { withIntl } from "~/utils/intl-utils";

import actionJourney from "./actions/actionJourney";
import actionSeries from "./actions/actionSeries";
import habitualAction from "./actions/habitualAction";
import oneTimeAction from "./actions/oneTimeAction";
import careProtocol from "./careProtocol";
import article from "./resources/article";
import resourceCollection from "./resources/resourceCollection";
import { recipe, ingredient, unit } from "./resources/recipe";
import tag from "./tag";

export const documents = [
  actionJourney,
  actionSeries,
  article,
  careProtocol,
  habitualAction,
  ingredient,
  oneTimeAction,
  recipe,
  resourceCollection,
  tag,
  unit,
];

// add localization support to all of our documents unless `{i18n: false}` has been explicitly set
export default documents.map((schema) =>
  "i18n" in schema ? schema : withIntl(schema)
);
