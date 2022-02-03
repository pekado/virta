import { default as Fraction } from "fraction.js";

/**
 * A utility that formats decimal numbers into fraction strings
 * */
export function decimalToFractionString(
  decimal: number,
  threshold = 0.01
): string {
  // handle whole numbers
  const decimalStr = `${decimal}`;
  if (decimalStr.indexOf(".") === -1 || decimal % 1 === 0) {
    return decimalStr;
  }

  // Fraction.simplify() attempts to simplify a rational number to a certain threshold
  // ex:
  //    new Fraction(0.33).simplify(0.01) will be 1/3
  //    new Fraction(0.16).simplify(0.01) will be 1/6
  const { n: numerator, d: denominator } = new Fraction(decimal).simplify(
    threshold
  );

  // Converts 3/2 to 1 1/2
  if (numerator > denominator) {
    const baseStr = Math.floor(numerator / denominator);
    return `${baseStr} ${numerator % denominator}/${denominator}`;
  }

  return `${numerator}/${denominator}`;
}
