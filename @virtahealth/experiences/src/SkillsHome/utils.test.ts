import { getColorForTile } from "./utils";

describe("getColorForTile", () => {
  it("returns the same color for strings of the same length", () => {
    const label = "Fake Skill Tile Label";
    const labelWithSameLength = "Lebal Elit Lliks Ekaf";
    expect(getColorForTile(label)).toEqual(
      getColorForTile(labelWithSameLength)
    );
  });
  it("returns different colors for strings of different lengths", () => {
    const label = "Fake Skill Tile Label";
    const labelWithSameLength = "Fake Skill Tile Label.";
    expect(getColorForTile(label)).not.toEqual(
      getColorForTile(labelWithSameLength)
    );
  });
});
