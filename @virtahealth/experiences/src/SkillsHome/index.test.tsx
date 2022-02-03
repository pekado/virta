import * as React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { testClient, WrapComponentWithVirtaContext } from "../test";
import { SkillsHome } from "./index";

describe("Skills Home", () => {
  it("renders", async () => {
    testClient.get.mockReturnValueOnce(Promise.resolve(mockSkillActions));
    const skillsHome = render(
      <WrapComponentWithVirtaContext>
        <SkillsHome virtaId={"123abc"} />
      </WrapComponentWithVirtaContext>
    );
    await waitFor(() => expect(testClient.get).toBeCalled());

    skillsHome.update(
      <WrapComponentWithVirtaContext>
        <SkillsHome virtaId={"123abc"} />
      </WrapComponentWithVirtaContext>
    );

    // TODO - this should work but doesn't due to a bug
    // https://github.com/callstack/react-native-testing-library/issues/553
    // once the bug is fixed, switch back to the original test
    // waitFor(() => {
    //   skillsHome.queryByText("Meal Planning Basics");
    // });
    expect(
      skillsHome.toJSON().children[1].children[0].children[0].children[0]
        .children[0].children[0]
    ).toEqual("Meal Planning Basics");
    expect(skillsHome).toMatchSnapshot();
  });
});

const mockSkillActions = [
  {
    id: 1,
    title: "Meal Planning Basics",
    url: "https://wikipedia.org",
  },
  {
    id: 2,
    title: "Balancing Electrolytes",
    url: "https://my.virtahealth.com",
  },
  {
    id: 3,
    title: "WOOP My Life",
    url: "https://my.virtahealth.com",
  },
  {
    id: 4,
    title: "Emotional Agility",
    url: "https://my.virtahealth.com",
  },
  {
    id: 5,
    title: "Finding the Right Fats",
    url: "https://my.virtahealth.com",
  },
  {
    id: 6,
    title: "Finding the Right Fats ",
    url: "https://my.virtahealth.com",
  },
  {
    id: 7,
    title: "Finding the Right Fats  ",
    url: "https://my.virtahealth.com",
  },
  {
    id: 8,
    title: "Finding the Right Fats   ",
    url: "https://my.virtahealth.com",
  },
  {
    id: 9,
    title: "Finding the Right Fat",
    url: "https://my.virtahealth.com",
  },
];
