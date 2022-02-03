import * as React from "react";
import { GrowingTextbox, Form } from "@virtahealth/components";

const GrowingTextboxDocs: React.VFC = () => {
  return (
    <div>
      <h1>Growing Textbox</h1>
      <p>
        This component is an augmented version of default TextInput. As you type
        in, the component grows in height. It accepts the following props:
      </p>
      <ul>
        <li>name - name of the Formik field</li>
        <li>width - width of textbox container</li>
        <li>minHeight - Minimum height of the text box</li>
        <li>maxLength - Maximum characters allowed in text box</li>
        <li>
          hideCharacterCountLabel - if true, the character count label is not
          shown
        </li>
      </ul>
    </div>
  );
};

export default {
  title: "Components / GrowingTextbox",
  component: GrowingTextbox,
  parameters: {
    docs: {
      page: GrowingTextboxDocs,
    },
  },
};

export const Example = () => (
  <Form
    initialValues={{ providerNotes: "This is a sample text" }}
    onSubmit={() => undefined}
  >
    <GrowingTextbox name={"providerNotes"} />
  </Form>
);
