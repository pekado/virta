import * as React from "react";
import { waitFor } from "@testing-library/react-native";
import { Form } from "../index";
import { createComponentWithVirtaContext } from "../test";
import { InputField } from "./index";

describe("InputField", () => {
  it("renders the InputField with the correct initial value", async () => {
    const InputFieldContainer = createComponentWithVirtaContext(
      <Form initialValues={{ myInput: "5" }} onSubmit={() => undefined}>
        <InputField name="myInput" testID="myInput" />
      </Form>
    );

    const input = InputFieldContainer.getByTestId("myInput");

    await waitFor(() => {
      expect(input.props.value).toBe("5");
      expect(InputFieldContainer).toMatchSnapshot();
    });
  });
});
