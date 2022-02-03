import * as React from "react";
import { Form } from "../index";
import { createComponentWithVirtaContext } from "../test";
import { GrowingTextbox } from "./index";

describe("GrowingTextBox", () => {
  it("should render the component with the correct initial value", async () => {
    const expectedValue = "Hey, it's a test";
    const TextboxContainer = createComponentWithVirtaContext(
      <Form
        initialValues={{ providerNotes: expectedValue }}
        onSubmit={() => undefined}
      >
        <GrowingTextbox name="providerNotes" testID="providerNotes" />
      </Form>
    );
    const textbox = TextboxContainer.getByTestId("providerNotes");
    expect(textbox.props.value).toBe(expectedValue);
    expect(TextboxContainer).toMatchSnapshot();
  });
});
