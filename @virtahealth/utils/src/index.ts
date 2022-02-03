export {
  isEmpty,
  chunk,
  compact,
  cloneDeep,
  capitalize,
  meanBy,
  startCase,
  noop,
  isNil,
  uniq,
  uniqBy,
  set,
  toNumber,
  isInteger,
  map,
  filter,
  head,
  debounce,
  intersection,
  keyBy,
} from "lodash";
export { isUndefined } from "util";

export {
  format as formatDate,
  formatDistanceToNow,
  isAfter as isAfterDate,
  isBefore as isBeforeDate,
  isEqual as isEqualDate,
  parse as parseDate,
  max as maxDate,
  differenceInYears,
  parseISO,
  startOfDay,
  endOfDay,
  subDays,
  subWeeks,
  subMonths,
} from "date-fns";

export { decimalToFractionString } from "./contentUtils";

export { useActive, useHover } from "react-native-web-hooks";
export { denormalize, normalize, schema } from "normalizr";

export {
  gql,
  useQuery,
  useSubscription,
  useLazyQuery,
  useMutation,
  useGraphQLClient,
  GraphQLProvider,
  GraphQLClient,
  GraphQLInMemoryCache,
  createGraphQLClient,
} from "./graphQl";

export { MockedProvider as MockedGraphQLProvider } from "@apollo/client/testing";

export {
  getPlatformFontFamilySuffix,
  getFontFamilyAndWeight,
} from "./fontUtils";

export {
  calculateDaysSinceDate,
  convertDate,
  getAdaptationDaysText,
  getRegistrationDateText,
} from "./dateUtils";

export { isWindowSm, isWindowMd, isWindowLg, isWindowXL } from "./windowUtils";

export {
  BiomarkerObservation,
  ObservationValue,
  getAvgBiomarkerObservationValue,
  getBiomarkersInDateRange,
  getMostRecentBiomarker,
} from "./biomarkerUtils";

export {
  SingleActionOrSeries,
  SingleAction,
  getAllActions,
  markAction,
} from "./contentPlatform";

export { getFoodDetails } from "./foodContentApi";

export { RefreshBooleans } from "./contentPlatform/types";

export {
  translations,
  messages,
  messageTree,
  formatMessageWithValues,
  initTranslationHelpers,
  intlFormatMessage,
  intlLocale,
} from "./translations";

export { formatBody, formatResponse } from "./responseUtils";

export { addSearchParam } from "./urlUtils";

export { getTestID, tID } from "./getTestId";

export {
  safeIntlFormatMessage,
  VirtaIntlMessage,
  MessageDescriptorObject,
  IntlValues,
  VirtaIntlMessageOrString,
  translationMessageToArgs,
  formatVirtaMessageOrString,
  getMessageId,
  getMessageFromTreeOrKey,
  isVirtaIntlMessage,
} from "./intlUtils";
