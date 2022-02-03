import * as border from "./border";
import * as color from "./color";
import * as font from "./font";
import * as space from "./space";
import * as textDecorationLine from "./text-decoration-line";

/**
 * primitives values
 * @module primitives
 * @see border
 * @see color
 * @see font
 * @see space
 * @see textDecorationLine
 */

export interface Primitives {
  border: Border;
  color: Color;
  font: Font;
  space: Space;
  textDecorationLine: TextDecorationLine;
}

type Border = Readonly<typeof border>;
type Color = Readonly<typeof color>;
type Font = Readonly<typeof font>;
type Space = Readonly<typeof space>;
type TextDecorationLine = Readonly<typeof textDecorationLine>;

export const primitives: Primitives = {
  border,
  color,
  font,
  space,
  textDecorationLine,
};
