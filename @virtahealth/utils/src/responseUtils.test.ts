import { formatResponse } from "./responseUtils";

describe("formatResponse", () => {
  it("formats a simple object with nested objects", () => {
    const test1 = {
      snake_title: "hiss",
      inner_snake: [
        {
          fangs: "true",
          lots_of_fangs: "true",
        },
      ],
    };
    const result1 = {
      snakeTitle: "hiss",
      innerSnake: [
        {
          fangs: "true",
          lotsOfFangs: "true",
        },
      ],
    };
    expect(formatResponse(test1)).toEqual(result1);
  });

  it("formats a simple object with nested array of strings", () => {
    const test1 = {
      snake_title: "hiss",
      inner_snake: [
        {
          fangs: "true",
          lots_of_fangs: ["string"],
        },
      ],
    };
    const result1 = {
      snakeTitle: "hiss",
      innerSnake: [
        {
          fangs: "true",
          lotsOfFangs: ["string"],
        },
      ],
    };
    expect(formatResponse(test1)).toEqual(result1);
  });
});
