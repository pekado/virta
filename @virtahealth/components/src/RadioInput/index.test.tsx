import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import { RadioInput } from "./index";

describe("Radio Input Component", () => {
  it("Checks that the component renders with a label", () => {
    const { getByText } = createComponentWithVirtaContext(
      <RadioInput
        labelMessage={{ id: "testRadioInput", defaultMessage: "radio input" }}
      />
    );
    expect(getByText("radio input")).toBeTruthy();
  });

  it("Triggers the onPress handler and validates the radio button toggles", () => {
    let checked = false;
    const { getByLabelText } = createComponentWithVirtaContext(
      <RadioInput
        isChecked={checked}
        onPress={() => {
          checked = true;
        }}
        labelMessage={{ id: "testRadioButton", defaultMessage: "radio button" }}
      />
    );

    const touchableButton = getByLabelText("radioBtn");

    fireEvent(touchableButton, "press", { value: "test" });

    expect(checked).toEqual(true);
  });

  it("Renders the inner radio button when checked", () => {
    const { getByLabelText } = createComponentWithVirtaContext(
      <RadioInput
        isChecked={true}
        labelMessage={{ id: "testRadioButton", defaultMessage: "radio button" }}
      />
    );

    expect(getByLabelText("checked")).toBeTruthy();
  });
});
