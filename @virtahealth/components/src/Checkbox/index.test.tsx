import * as React from "react";
import { Formik } from "formik";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import { Checkbox, CheckboxField } from "./index";

describe("Checkbox", () => {
  it("renders when unchecked", () => {
    const { getByLabelText, getByText } = createComponentWithVirtaContext(
      <Checkbox
        onPress={jest.fn()}
        isChecked={false}
        labelMessage={{
          id: "test.checkbox.option1",
          defaultMessage: "Option 1",
        }}
      />
    );
    expect(getByLabelText("checkbox")).toBeTruthy();
    expect(getByText("Option 1")).toBeTruthy();
  });

  it("renders when checked", () => {
    const { getByLabelText, getByTestId } = createComponentWithVirtaContext(
      <Checkbox
        onPress={jest.fn()}
        isChecked={true}
        labelMessage={{
          id: "test.checkbox.option1",
          defaultMessage: "Option 1",
        }}
      />
    );

    expect(getByLabelText("checked")).toBeTruthy();
    // Check that checkmark renders
    expect(getByTestId("check-mark-icon")).toBeTruthy();
  });
});

describe("CheckboxField", () => {
  it("renders unselected checkbox fields", () => {
    const checkboxForm = createComponentWithVirtaContext(
      <Formik initialValues={{ testInput: [] }} onSubmit={jest.fn()}>
        <>
          <CheckboxField
            name={"testInput"}
            multiple={true}
            value={"option1"}
            labelMessage={{
              id: "test.checkbox.option1",
              defaultMessage: "Option 1",
            }}
          />
          <CheckboxField
            name={"testInput"}
            multiple={true}
            value={"option2"}
            labelMessage={{
              id: "test.checkbox.option2",
              defaultMessage: "Option 2",
            }}
          />
        </>
      </Formik>
    );
    expect(checkboxForm).toMatchSnapshot();
    expect(checkboxForm.queryAllByLabelText("checked").length).toBe(0);
  });

  it("renders selected checkbox fields", () => {
    const checkboxForm = createComponentWithVirtaContext(
      <Formik
        initialValues={{ testInput: ["option1", "option2"] }}
        onSubmit={jest.fn()}
      >
        <>
          <CheckboxField
            name={"testInput"}
            multiple={true}
            value={"option1"}
            labelMessage={{
              id: "test.checkbox.option1",
              defaultMessage: "Option 1",
            }}
          />
          <CheckboxField
            name={"testInput"}
            multiple={true}
            value={"option2"}
            labelMessage={{
              id: "test.checkbox.option2",
              defaultMessage: "Option 2",
            }}
          />
        </>
      </Formik>
    );

    expect(checkboxForm).toMatchSnapshot();
    expect(checkboxForm.queryAllByLabelText("checked").length).toBe(2);
  });

  it("handles checking and unchecking multiple checkboxes", async () => {
    const checkboxForm = createComponentWithVirtaContext(
      <Formik initialValues={{ testInput: [] }} onSubmit={jest.fn()}>
        <>
          <CheckboxField
            name={"testInput"}
            multiple={true}
            value={"option1"}
            labelMessage={{
              id: "test.checkbox.option1",
              defaultMessage: "Option 1",
            }}
          />
          <CheckboxField
            name={"testInput"}
            multiple={true}
            value={"option2"}
            labelMessage={{
              id: "test.checkbox.option2",
              defaultMessage: "Option 2",
            }}
          />
        </>
      </Formik>
    );

    // Check that none are selected
    expect(checkboxForm.queryAllByLabelText("checked").length).toBe(0);

    const touchableButton = checkboxForm.getAllByLabelText("checkbox");

    fireEvent(touchableButton[0], "press", { value: "option1" });

    fireEvent(touchableButton[1], "press", { value: "option2" });

    // Check that both are now selected
    expect(checkboxForm.queryAllByLabelText("checked").length).toBe(2);

    fireEvent(touchableButton[0], "press", { value: "option1" });

    // Check that one has been unselected
    await waitFor(() =>
      expect(checkboxForm.queryAllByLabelText("checked").length).toBe(1)
    );
  });
});
