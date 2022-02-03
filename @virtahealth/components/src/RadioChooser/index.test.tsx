import * as React from "react";
import { Formik, Form } from "formik";
import { createComponentWithVirtaContext } from "../test";
import { RadioChooser, RadioChooserRowField } from "./index";

const radioOptions = ["yes", "no", "unsure"];
const ratioOptionLabels = [
  {
    id: "conditionReporter.label.yes",
    defaultMessage: "Yes",
  },
  {
    id: "conditionReporter.label.no",
    defaultMessage: "No",
  },
  {
    id: "conditionReporter.label.unsure",
    defaultMessage: "Unsure",
  },
];

describe("Radio Input Component", () => {
  it("Checks that the component renders with a header", () => {
    const { getByText } = createComponentWithVirtaContext(
      <RadioChooser
        name="test"
        header={{ id: "testHeader", defaultMessage: "test-header" }}
      />
    );
    expect(getByText("test-header")).toBeTruthy();
  });

  it("Renders a list of options and a formik form", () => {
    const { getByText, getAllByTestId } = createComponentWithVirtaContext(
      <Formik
        initialErrors={{ test: { test1: "Required" } }}
        initialValues={{ test: { test1: "yes", test2: "no", test3: "no" } }}
        onSubmit={(vals: any) => Promise.all(vals)}
      >
        <Form>
          <RadioChooser
            header={{ id: "testOptions", defaultMessage: "options" }}
            key="testradiochooser"
            name="testradiochooser"
            options={radioOptions}
            optionLabelMessages={ratioOptionLabels}
            testID={"radio-chooser-test"}
          >
            <RadioChooserRowField
              name="test.test1"
              labelMessage={{
                id: "conditionReporter.label.test1",
                defaultMessage: "Do you like Atlas?",
              }}
              testID={"radio-chooser-test-field-1"}
            />
            <RadioChooserRowField
              name="test.test2"
              labelMessage={{
                id: "conditionReporter.label.test2",
                defaultMessage: "Are you unsure?",
              }}
              testID={"radio-chooser-test-field-2"}
            />
          </RadioChooser>
        </Form>
      </Formik>
    );

    const firstRow = getByText("Do you like Atlas?");
    const secondRow = getByText("Are you unsure?");
    expect(firstRow).toBeTruthy();
    expect(secondRow).toBeTruthy();

    // check that only two options are checked
    const options = getAllByTestId(
      /radio-chooser-test-field-.*-row-value-button-inner/
    );
    expect(options).toHaveLength(2);

    //check that option headers exist
    ratioOptionLabels.forEach((op) => {
      expect(getByText(op.defaultMessage)).toBeTruthy();
    });
  });
});
