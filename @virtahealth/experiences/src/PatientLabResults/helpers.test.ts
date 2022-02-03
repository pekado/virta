import { isStringValueOutsideRefRange } from "./helpers";

describe("PatientLabResults helpers", () => {
  describe("checkIfStringValueOutsideRefRange", () => {
    it("returns false if the value following the > or < characters can't be parsed as a number", () => {
      const result = isStringValueOutsideRefRange(0, 100, "> asdf123");
      const otherResult = isStringValueOutsideRefRange(
        // @ts-expect-error (11/11/21 Richard) Testing undefined as an input which is not technically allowed right now
        undefined,
        undefined,
        "Not detected"
      );
      expect(result).toBeFalsy();
      expect(otherResult).toBeFalsy();
    });

    it("returns true if the value indicates a result greater than the high threshold", () => {
      const resultThreshold = isStringValueOutsideRefRange(0, 100, "> 100");

      const resultHigherThanThreshold = isStringValueOutsideRefRange(
        0,
        100,
        "> 200"
      );
      expect(resultThreshold).toBeTruthy();
      expect(resultHigherThanThreshold).toBeTruthy();
    });

    it("returns true if the value indicates a result less than the low threshold", () => {
      const resultThreshold = isStringValueOutsideRefRange(100, 200, "<100");

      const resultLowerThanThreshold = isStringValueOutsideRefRange(
        100,
        200,
        "< 20"
      );
      expect(resultThreshold).toBeTruthy();
      expect(resultLowerThanThreshold).toBeTruthy();
    });

    it("returns false if the value indicates a result higher than low threshold", () => {
      const result = isStringValueOutsideRefRange(
        100,
        // @ts-expect-error (11/11/21 Richard) Testing undefined as an input which is not technically allowed right now
        undefined,
        "> 100"
      );
      const resultAboveLowThreshold = isStringValueOutsideRefRange(
        100,
        // @ts-expect-error (11/11/21 Richard) Testing undefined as an input which is not technically allowed right now
        undefined,
        "> 200"
      );
      expect(result).toBeFalsy();
      expect(resultAboveLowThreshold).toBeFalsy();
    });

    it("returns false if the value indicates a result lower than high threshold", () => {
      const result = isStringValueOutsideRefRange(
        // @ts-expect-error (11/11/21 Richard) Testing undefined as an input which is not technically allowed right now
        undefined,
        300,
        "< 300"
      );
      const resultBelowHighThreshold = isStringValueOutsideRefRange(
        // @ts-expect-error (11/11/21 Richard) Testing undefined as an input which is not technically allowed right now
        undefined,
        300,
        "< 200"
      );
      expect(result).toBeFalsy();
      expect(resultBelowHighThreshold).toBeFalsy();
    });
  });
});
