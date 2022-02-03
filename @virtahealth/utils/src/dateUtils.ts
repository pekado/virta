import { differenceInDays, format, isValid, parse, startOfDay } from "date-fns";
import { curry } from "lodash";

/**
 * Curried method to convert a date string from one format to another. Since it is curried,
 * providing less than the full set of parameters will return a function that accepts the
 * remaining parameters. For instance, if "fromFormat" and "toFormat" are provided, a new function is
 * returned which can be reused for conversions of the same kind.
 * @param fromFormat Format of the date string being provided in the "date" param. These must match
 * or an error will be thrown.
 * @param toFormat Format of the returned date string.
 * @param date String representation of the date to undergo conversion.
 */
export const convertDate = curry(
  (fromFormat: string, toFormat: string, date: string): string =>
    format(parse(date, fromFormat, startOfDay(new Date())), toFormat)
);

export const calculateDaysSinceDate = (date: string | null) => {
  if (date) {
    const beginningOfToday = startOfDay(new Date());
    return differenceInDays(
      beginningOfToday,
      startOfDay(parse(date, "yyyy-MM-dd H:m:s", new Date()))
    );
  }
  return null;
};

export const getAdaptationDaysText = (numDays: number | null) => {
  if (numDays === null) {
    return "Adaptation date not set";
  } else if (numDays < 0) {
    return "until adaptation";
  } else if (numDays >= 0) {
    return "into adaptation";
  }
};

export const getRegistrationDateText = (date: string | null) => {
  if (date) {
    const parsedDate = new Date(date);
    if (isValid(parsedDate)) {
      const day = format(startOfDay(parsedDate), "MM/dd/yyyy");
      return day;
    }
    return "invalid date format";
  }
  return "date not set";
};
