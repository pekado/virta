import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import { ButtonRadioInput } from "./index";

const options = [
  {
    labelMessage: {
      id: "components.buttonradio.test.test1",
      defaultMessage: "one",
    },
    value: "one",
  },
  {
    labelMessage: {
      id: "components.buttonradio.test.test2",
      defaultMessage: "two",
    },
    value: "two",
  },
];
describe("Radio Input Component", () => {
  it("Checks that the component renders with a label", () => {
    const { getByText } = createComponentWithVirtaContext(
      <ButtonRadioInput
        labelMessage={{ id: "testRadioInput", defaultMessage: "radio input" }}
        options={options}
        onPress={() => undefined}
      />
    );
    expect(getByText("radio input")).toBeTruthy();
  });

  it("Triggers the onPress handler and validates the radio button toggles", () => {
    let checked = false;
    const { getByText } = createComponentWithVirtaContext(
      <ButtonRadioInput
        options={options}
        onPress={() => {
          checked = true;
        }}
        labelMessage={{ id: "testRadioInput", defaultMessage: "radio button" }}
      />
    );

    const touchableButton = getByText("one");

    fireEvent(touchableButton, "press");

    expect(checked).toEqual(true);
  });

  it("Renders the inner radio button when checked", () => {
    const { getByText } = createComponentWithVirtaContext(
      <ButtonRadioInput
        options={options}
        value={"one"}
        onPress={() => undefined}
        labelMessage={{ id: "testRadioInput", defaultMessage: "radio button" }}
      />
    );

    expect(getByText("one")).toBeTruthy();
  });
});
