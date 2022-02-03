import MockDate from "mockdate";
import {
  calculateDaysSinceDate,
  convertDate,
  getAdaptationDaysText,
  getRegistrationDateText,
} from "./dateUtils";

const f1 = "MM/dd/yyyy";
const f2 = "yyyy-MM-dd";

describe("convertDate", () => {
  it("returns the date in the correct format", () => {
    const test1 = "01/01/2000";
    expect(convertDate(f1, f2, test1)).toEqual("2000-01-01");

    const test2 = "2000-01-01";
    expect(convertDate(f2, f1, test2)).toEqual("01/01/2000");
  });
  it("returns for correct format round-trip", () => {
    const test = "01/01/2000";
    expect(convertDate(f2, f1, convertDate(f1, f2, test))).toEqual(test);
  });
});

describe("calculateDaysSinceDate", () => {
  beforeEach(() => {
    MockDate.set("Wed Sep 13 2020 16:30:44 GMT-0000");
  });
  afterEach(() => {
    MockDate.reset();
  });
  it("returns null if date is null", () => {
    expect(calculateDaysSinceDate(null)).toBeNull();
  });
  it("returns 3 for a date string for 3 days ago", () => {
    expect(calculateDaysSinceDate("2020-09-10 00:00:00")).toBe(3);
  });
  it("returns -7 for a date string in 7 days", () => {
    expect(calculateDaysSinceDate("2020-09-20 20:00:00")).toBe(-7);
  });
});

describe("getAdaptationDaysText", () => {
  it('returns "Adaptation date not set" if numDays is null', () => {
    expect(getAdaptationDaysText(null)).toEqual("Adaptation date not set");
  });
  it('returns "until adaptation" if numDays is negative', () => {
    expect(getAdaptationDaysText(-3)).toEqual("until adaptation");
  });
  it('returns "into adaptation" if numDays is positive', () => {
    expect(getAdaptationDaysText(10)).toEqual("into adaptation");
  });
});

describe("getRegistrationDateText", () => {
  it('returns "date not set" if date is null', () => {
    expect(getRegistrationDateText(null)).toEqual("date not set");
  });
  it('returns "08/31/2020" if date string is "2020-08-31 22:00:00"', () => {
    expect(getRegistrationDateText("2020-08-31 22:00:00")).toEqual(
      "08/31/2020"
    );
  });
  it('returns "invalid date format" if date string is "2020-08-31 22:00::"', () => {
    expect(getRegistrationDateText("2020-08-31 22:00::")).toEqual(
      "invalid date format"
    );
  });
});
