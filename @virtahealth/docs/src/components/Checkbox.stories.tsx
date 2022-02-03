import * as React from "react";

import {
  CheckboxField,
  Checkbox,
  CheckboxList,
  CheckboxListField,
} from "@virtahealth/components";
import { Formik, Form } from "formik";
import { View, Text } from "react-native";
import { action } from "@storybook/addon-actions";

const CheckboxDocs: React.VFC = () => {
  return (
    <div>
      <h1>CheckboxField</h1>
      <p>
        This <code>`CheckboxField`</code> utilizes Formik&rsquo;s&ensp;
        <code>`useField`</code> hook. It seems that Formik&rsquo;s&ensp;
        <code>`checkbox`</code> type for this hook is still a work in progress,
        as there was some possible lack of support with [passing in React Native
        event types] (
        <a href="https://github.com/jaredpalmer/formik/blob/master/packages/formik/src/Formik.tsx#L611">
          https://github.com/jaredpalmer/formik/blob/master/packages/formik/src/Formik.tsx#L611
        </a>
        ) in order to handle multiple checkbox options for one input.
      </p>
      <p>A couple notes for using this component:</p>
      <ul>
        <li>
          - Since these elements are not actual input form elements, Formik
          doesn&rsquo;t automagically associate checkboxes with the same name
          together, so pass in <code>`multiple`</code> when building out a group
          of checkbox options, in addition to passing in the same&ensp;
          <code>`name`</code>.
        </li>
        <li>
          - If you don&rsquo;t pass in a <code>`value`</code> prop, it will
          default to <code>`true`</code>. You must explicitly pass in a&ensp;
          <code>`value`</code> when using <code>`multiple`</code> checkboxes in
          a group.
        </li>
      </ul>
    </div>
  );
};

export default {
  title: "Components / CheckboxField",
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocs,
    },
  },
};

const handleSubmit = action("Pressing checkbox");

const yesLabel = {
  id: "components.checkbox.label.yes",
  description: "The label for the checkbox",
  defaultMessage: "Yes",
};

const noLabel = {
  id: "components.checkbox.label.no",
  description: "The label for the checkbox",
  defaultMessage: "No",
};

const value1Label = {
  id: "components.checkbox.label.value1",
  description: "The label for the checkbox",
  defaultMessage: "Value 1",
};

const value2Label = {
  id: "components.checkbox.label.value2",
  description: "The label for the checkbox",
  defaultMessage: "Value 2",
};

export const MultipleCheckBox = () => (
  <Formik onSubmit={handleSubmit} initialValues={{ testfield: [] }}>
    <View>
      <Text>Choose all CheckboxFields that apply:</Text>
      <CheckboxField
        name={"testfield"}
        multiple={true}
        value={"value1"}
        labelMessage={value1Label}
      />
      <CheckboxField
        name={"testfield"}
        multiple={true}
        value={"value2"}
        labelMessage={value2Label}
      />
    </View>
  </Formik>
);

export const SingleCheckBox = () => (
  <Formik onSubmit={handleSubmit} initialValues={{ testfield: false }}>
    <View>
      <CheckboxField
        name={"testfield"}
        multiple={false}
        labelMessage={{
          id: "testfield.rememberMe",
          defaultMessage: "Remember me",
        }}
      />
    </View>
  </Formik>
);

export const SingleCheckBoxButton = () => (
  <Formik onSubmit={handleSubmit} initialValues={{ testfield: false }}>
    <View>
      <CheckboxField
        name={"testfield"}
        multiple={false}
        isButton
        labelMessage={{
          id: "testfield.rememberMe",
          defaultMessage: "Remember me",
        }}
      />
    </View>
  </Formik>
);

export const MultipleCheckBoxButtons = () => (
  <Formik onSubmit={handleSubmit} initialValues={{ testfield: [] }}>
    <View>
      <Text>Choose all CheckboxFields that apply:</Text>
      <CheckboxField
        name={"testfield"}
        multiple={true}
        isButton
        value={"value1"}
        labelMessage={value1Label}
      />
      <CheckboxField
        name={"testfield"}
        multiple={true}
        isButton
        value={"value2"}
        labelMessage={value2Label}
      />
    </View>
  </Formik>
);

export const SingleCheckBoxWithError = () => (
  <Formik
    onSubmit={handleSubmit}
    initialValues={{ testfield: "value1" }}
    initialErrors={{ testfield: "This is an error" }}
    initialTouched={{ testfield: true }}
  >
    <View>
      <Checkbox
        onPress={handleSubmit}
        labelMessage={value1Label}
        errorText="Testing error"
      />
      <CheckboxField
        name={"testfield"}
        value={"value1"}
        labelMessage={value2Label}
      />
    </View>
  </Formik>
);

export const CheckboxLists = () => (
  <>
    <CheckboxList
      options={[
        {
          value: "yes",
          label: yesLabel,
        },
        {
          value: "no",
          label: noLabel,
        },
      ]}
      labelMessage={{
        id: "allThatApply",
        defaultMessage: "Select all that apply",
        description: "Label select all that apply component",
      }}
      isButton
      value={["no", "yes"]}
      onChange={action("Pressed checkbox list")}
      errorText="This is error text"
    />
    <CheckboxList
      isLarge
      options={[
        {
          value: "yes",
          label: yesLabel,
        },
        {
          value: "no",
          label: noLabel,
        },
      ]}
      labelMessage={{
        id: "allThatApply",
        defaultMessage: "Select all that apply",
        description: "Label select all that apply component",
      }}
      isButton
      value={[]}
      onChange={action("Pressed checkbox list")}
      errorText="This is an error"
    />
  </>
);

export const CheckboxListFields = () => (
  <Formik
    initialValues={{ onlyOne: ["yes"], selectMultiple: [] }}
    initialErrors={{ onlyOne: "scale error" }}
    initialTouched={{ onlyOne: true }}
    onSubmit={handleSubmit}
  >
    <Form>
      <CheckboxListField
        name="onlyOne"
        options={[
          {
            value: "yes",
            label: yesLabel,
          },
          {
            value: "no",
            label: noLabel,
            description: {
              id: "checkboxList.options.description.no",
              defaultMessage: "This is a description for a checkbox",
            },
          },
        ]}
        labelMessage={{
          id: "onlyOne",
          defaultMessage: "Select one",
          description: "Label for select one component",
        }}
        direction="row"
      />
      <CheckboxListField
        name="selectMultiple"
        isLarge
        options={[
          {
            value: "yes",
            label: yesLabel,
          },
          {
            value: "no",
            label: noLabel,
            description: {
              id: "checkboxList.options.description.no",
              defaultMessage: "This is a description for a checkbox",
            },
          },
        ]}
        labelMessage={{
          id: "selectMultiple",
          defaultMessage: "Select Multiple",
          description: "Label for select multiple component",
        }}
        isButton
      />
      <CheckboxListField
        name="selectMultipleExclusive"
        isLarge
        options={[
          {
            value: "yes",
            label: yesLabel,
          },
          {
            value: "no",
            label: noLabel,
            description: {
              id: "checkboxList.options.description.no",
              defaultMessage: "This is a description for a checkbox",
            },
          },
          {
            value: "none",
            label: {
              id: "checkboxList.options.description.none",
              defaultMessage: "None",
            },
            description: {
              id: "checkboxList.options.description.no",
              defaultMessage: "This is a description for a checkbox",
            },
          },
        ]}
        labelMessage={{
          id: "selectMultipleExclusive",
          defaultMessage: "Select Multiple exclusive with",
          description: "Label for select multiple exclusive with component",
        }}
        isButton
        exclusiveWith="none"
      />
    </Form>
  </Formik>
);
