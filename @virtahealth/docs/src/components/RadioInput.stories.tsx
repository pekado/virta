import * as React from "react";
import {
  RadioInputField,
  RadioInputList,
  RadioInputListField,
  RadioInput,
  Row,
  SubstrateBody,
} from "@virtahealth/components";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Formik, Form } from "formik";

const yesLabel = {
  id: "components.radio.label.yes",
  description: "The label for the radio button",
  defaultMessage: "Yes",
};

const noLabel = {
  id: "components.radio.label.no",
  description: "The label for the radio button",
  defaultMessage: "No",
};

export default {
  title: "Components / RadioInput",
  component: RadioInput,
};

const submitHandler = () => {};

export const Example = () => (
  <>
    <Formik initialValues={{ testfield: "yes" }} onSubmit={submitHandler}>
      <Row style={{ marginBottom: 8 }}>
        <RadioInputField value="yes" name="testfield" labelMessage={yesLabel} />
        <RadioInputField value="no" name="testfield" labelMessage={noLabel} />
      </Row>
    </Formik>
    <RadioInput
      id="test-id"
      labelMessage={{
        id: "components.radio.label.default",
        description: "The label for the radio button",
        defaultMessage: "radio button",
      }}
      isChecked={boolean("radioValue", false)}
      onPress={action("pressed")}
    />
  </>
);

export const Sizes = () => (
  <Formik
    initialValues={{ small: "yes", medium: "yes", large: "yes" }}
    onSubmit={submitHandler}
  >
    <Form>
      <SubstrateBody>Small</SubstrateBody>
      <Row style={{ marginBottom: 8 }}>
        <RadioInputField
          value="yes"
          name="small"
          labelMessage={yesLabel}
          size="small"
        />
        <RadioInputField
          value="no"
          name="small"
          labelMessage={noLabel}
          size="small"
          descriptionMessage={{
            id: "checkboxList.options.description.no",
            defaultMessage: "This is a description for a checkbox",
          }}
        />
      </Row>
      <SubstrateBody>Medium</SubstrateBody>
      <Row style={{ marginBottom: 8 }}>
        <RadioInputField
          value="yes"
          name="medium"
          labelMessage={yesLabel}
          size="medium"
        />
        <RadioInputField
          value="no"
          name="medium"
          labelMessage={noLabel}
          size="medium"
          descriptionMessage={{
            id: "checkboxList.options.description.no",
            defaultMessage: "This is a description for a checkbox",
          }}
        />
      </Row>
      <SubstrateBody>Large</SubstrateBody>
      <Row style={{ marginBottom: 8 }}>
        <RadioInputField
          value="yes"
          name="large"
          labelMessage={yesLabel}
          size="large"
        />
        <RadioInputField
          value="no"
          name="large"
          labelMessage={noLabel}
          size="large"
          descriptionMessage={{
            id: "checkboxList.options.description.no",
            defaultMessage: "This is a description for a checkbox",
          }}
        />
      </Row>
    </Form>
  </Formik>
);

export const ButtonType = () => (
  <Formik initialValues={{ xlScale: "yes" }} onSubmit={submitHandler}>
    <Form>
      <RadioInputField
        value="yes"
        name="xlScale"
        labelMessage={yesLabel}
        isButton
        style={{ marginBottom: 8 }}
      />
      <RadioInputField
        value="no"
        name="xlScale"
        labelMessage={noLabel}
        isButton
        descriptionMessage={{
          id: "checkboxList.options.description.no",
          defaultMessage: "This is a description for a checkbox",
        }}
      />
    </Form>
  </Formik>
);

export const RadioLists = () => (
  <>
    <RadioInputList
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
        id: "xlScale",
        defaultMessage: "XL Scale",
        description: "Label for xlScale component",
      }}
      value={"no"}
      direction="row"
      onChange={action("Pressed radio list")}
    />
    <RadioInputList
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
        id: "xlScale",
        defaultMessage: "XL Scale",
        description: "Label for xlScale component",
      }}
      value={"no"}
      direction="row"
      onChange={action("Pressed radio list")}
      error="This is an error"
    />
    <RadioInputList
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
        id: "xlScale",
        defaultMessage: "XL Scale",
        description: "Label for xlScale component",
      }}
      isButton
      value={"yes"}
      onChange={action("Pressed radio list")}
    />
    <RadioInputList
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
        id: "xlScale",
        defaultMessage: "XL Scale",
        description: "Label for xlScale component",
      }}
      isButton
      value={"yes"}
      onChange={action("Pressed radio list")}
      error="This is an error"
    />
  </>
);

export const RadioListFields = () => (
  <Formik
    initialValues={{ xlScale: "yes", isBmoc: "no" }}
    onSubmit={submitHandler}
  >
    <Form>
      <RadioInputListField
        name="xlScale"
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
          id: "xlScale",
          defaultMessage: "XL Scale",
          description: "Label for xlScale component",
        }}
        direction="row"
      />
      <RadioInputListField
        name="isBmoc"
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
          id: "isBmoc",
          defaultMessage: "BMOC",
          description: "Label for isBmoc component",
        }}
        isButton
      />
    </Form>
  </Formik>
);
