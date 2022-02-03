import { deserializeTimeToComplete, ContentResponseItem } from "./serializers";

describe("deserializeTimeToComplete", () => {
  const mockTimeToComplete: ContentResponseItem["timeToComplete"] = {
    amount: 0,
    unit: {
      label: "minute",
    },
  };
  it("returns an empty string when amount is 0", () => {
    expect(deserializeTimeToComplete(mockTimeToComplete)).toEqual("");
  });
  it("returns an empty string when timeToComplete is undefined", () => {
    expect(deserializeTimeToComplete(undefined)).toEqual("");
  });
  it("returns a string with the abbreviated unit", () => {
    const timeToComplete: ContentResponseItem["timeToComplete"] = {
      amount: 10,
      unit: {
        abbreviation: "min",
        label: "minute",
      },
    };
    expect(deserializeTimeToComplete(timeToComplete)).toEqual("10 min");
  });
  it("returns a string with a computed plural label", () => {
    const timeToComplete: ContentResponseItem["timeToComplete"] = {
      amount: 10,
      unit: {
        label: "minute",
      },
    };
    expect(deserializeTimeToComplete(timeToComplete)).toEqual("10 minutes");
  });
  it("returns a string with a singular label", () => {
    const timeToComplete: ContentResponseItem["timeToComplete"] = {
      amount: 1,
      unit: {
        label: "minute",
        label_plural: "minutes",
      },
    };
    expect(deserializeTimeToComplete(timeToComplete)).toEqual("1 minute");
  });
  it("returns a string with a plural label", () => {
    const timeToComplete: ContentResponseItem["timeToComplete"] = {
      amount: 10,
      unit: {
        label: "minute",
        label_plural: "minutes",
      },
    };
    expect(deserializeTimeToComplete(timeToComplete)).toEqual("10 minutes");
  });
});
