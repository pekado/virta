import { parseSingleAction } from "./client";

describe("Action Client Utils", () => {
  it("Parses dates correctly", () => {
    const result = parseSingleAction({
      actionContentId: "123",
      endDateUtc: "2021-10-15 02:37:49+00:00",
      updatedOnUtc: "2021-10-12 00:58:23.082608+00:00",
      createdOnUtc: "2021-10-12 00:58:23.082608+00:00",
    });
    expect(result.endDate).toBeTruthy();
    expect(result.updatedAt).toBeTruthy();
    expect(result.createdAt).toBeTruthy();
    expect(result.endDate?.getTime()).not.toBeNaN();
    expect(result.updatedAt?.getTime()).not.toBeNaN();
    expect(result.createdAt?.getTime()).not.toBeNaN();
  });
});
