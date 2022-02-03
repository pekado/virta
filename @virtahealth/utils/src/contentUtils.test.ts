import { decimalToFractionString } from "./contentUtils";

describe("decimalToFractionString", () => {
  it("formats a decimal number less than 1", () => {
    expect(decimalToFractionString(0.5)).toBe("1/2");
    expect(decimalToFractionString(0.33)).toBe("1/3");
    expect(decimalToFractionString(0.44)).toBe("4/9");
    expect(decimalToFractionString(0.12)).toBe("1/8");
    expect(decimalToFractionString(0.13)).toBe("1/8");
    expect(decimalToFractionString(0.125)).toBe("1/8");
    expect(decimalToFractionString(0.16)).toBe("1/6");
    expect(decimalToFractionString(0.166)).toBe("1/6");
    expect(decimalToFractionString(0.1667)).toBe("1/6");
    expect(decimalToFractionString(3.14)).toBe("3 1/7");
  });

  it("formats decimal numbers greater than 1", () => {
    expect(decimalToFractionString(1.5)).toBe("1 1/2");
    expect(decimalToFractionString(2.33)).toBe("2 1/3");
    expect(decimalToFractionString(6.44)).toBe("6 4/9");
    expect(decimalToFractionString(6.12)).toBe("6 1/8");
    expect(decimalToFractionString(6.13)).toBe("6 1/8");
    expect(decimalToFractionString(6.125)).toBe("6 1/8");
    expect(decimalToFractionString(10.16)).toBe("10 1/6");
    expect(decimalToFractionString(10.166)).toBe("10 1/6");
    expect(decimalToFractionString(10.1667)).toBe("10 1/6");
  });

  it("formats whole numbers", () => {
    expect(decimalToFractionString(1.0)).toBe("1");
    expect(decimalToFractionString(2)).toBe("2");
    expect(decimalToFractionString(9001.0)).toBe("9001");
  });
});
