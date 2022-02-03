import {
  BasicDropdown,
  BasicDropdownField,
  LabeledBasicDropdown,
  LabeledBasicDropdownField,
  CreatableDropdownField,
  LabeledCreatableDropdownField,
} from "@virtahealth/components/src";
import { Formik } from "formik";
import * as React from "react";
const DropdownDocs: React.VFC = () => {
  return (
    <div>
      <h1>Dropdown</h1>
      <p>This is the basic dropdown component including form variations</p>
    </div>
  );
};

export default {
  title: "Components / Dropdown",
  component: BasicDropdown,
  parameters: {
    docs: {
      page: DropdownDocs,
    },
  },
};

export const BasicDropdownExample = () => (
  <BasicDropdown
    allowCustomValues={false}
    placeholderMessage={{
      id: "placeholder.fruit",
      defaultMessage: "pick a fruit....",
    }}
    options={[
      { value: "apple", label: { id: "apple", defaultMessage: "Apple" } },
      { value: "pear", label: { id: "pear", defaultMessage: "Pear" } },
      {
        value: "orange",
        label: { id: "orange", defaultMessage: "Orange" },
      },
      { value: "grape", label: { id: "grape", defaultMessage: "Grape" } },
      {
        value: "banana",
        label: { id: "banana", defaultMessage: "Banana" },
      },
    ]}
  />
);

export const LabeledDropdownExample = () => (
  <LabeledBasicDropdown
    allowCustomValues={false}
    labelMessage={{ id: "dropdown.label", defaultMessage: "Fruit" }}
    placeholderMessage={{
      id: "placeholder.fruit",
      defaultMessage: "pick a fruit....",
    }}
    options={[
      { value: "apple", label: { id: "apple", defaultMessage: "Apple" } },
      { value: "pear", label: { id: "pear", defaultMessage: "Pear" } },
      {
        value: "orange",
        label: { id: "orange", defaultMessage: "Orange" },
      },
      { value: "grape", label: { id: "grape", defaultMessage: "Grape" } },
      {
        value: "banana",
        label: { id: "banana", defaultMessage: "Banana" },
      },
    ]}
  />
);
export const SearchableDropdownExample = () => (
  <Formik onSubmit={() => {}} initialValues={{ fruit: "" }}>
    {() => (
      <BasicDropdownField
        options={[
          { value: "apple", label: { id: "apple", defaultMessage: "apple" } },
          { value: "pear", label: { id: "pear", defaultMessage: "pear" } },
          {
            value: "orange",
            label: { id: "orange", defaultMessage: "orange" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
        ]}
        name=""
        fieldName={"fruit"}
        filterFunction={(item: any, inputValue: any) => {
          return (
            !inputValue ||
            item.label.defaultMessage
              .toLowerCase()
              .includes(inputValue.toLowerCase())
          );
        }}
      />
    )}
  </Formik>
);

export const ScrollableDropdownExample = () => (
  <Formik onSubmit={() => {}} initialValues={{ fruit: "" }}>
    {() => (
      <BasicDropdownField
        options={[
          { value: "apple", label: { id: "apple", defaultMessage: "apple" } },
          { value: "pear", label: { id: "pear", defaultMessage: "pear" } },
          {
            value: "orange",
            label: { id: "orange", defaultMessage: "orange" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
        ]}
        name=""
        fieldName={"fruit"}
        filterFunction={(item: any, inputValue: any) => {
          return item.value.includes(inputValue);
        }}
      />
    )}
  </Formik>
);

export const AddableDropdownExample = () => (
  <Formik onSubmit={() => {}} initialValues={{}}>
    {() => (
      <CreatableDropdownField
        options={[
          {
            value: "anthem",
            label: { id: "anthem", defaultMessage: "Anthem" },
          },
          {
            value: "bcbsca",
            label: {
              id: "bcbsca",
              defaultMessage: "Blue Cross Blue Shield of California",
            },
          },
          {
            value: "bcbsnj",
            label: {
              id: "bcbsnj",
              defaultMessage: "Blue Cross Blue Shield of New Jersey",
            },
          },
          {
            value: "cigna",
            label: { id: "cigna", defaultMessage: "Cigna Health" },
          },
          {
            value: "kaiser",
            label: { id: "kaiser", defaultMessage: "Kaiser Permanente" },
          },
          {
            value: "united",
            label: { id: "united", defaultMessage: "UnitedHealth" },
          },
        ]}
        name=""
        fieldName={"insurer"}
        filterFunction={(item: any, inputValue: any) => {
          if (!inputValue) {
            return true;
          }
          return item.label.defaultMessage
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        }}
      />
    )}
  </Formik>
);

export const LabledAddableDropdownExample = () => (
  <Formik onSubmit={() => {}} initialValues={{ insurer: "" }}>
    {() => (
      <LabeledCreatableDropdownField
        options={[
          {
            value: "anthem",
            label: { id: "anthem", defaultMessage: "Anthem" },
          },
          {
            value: "bcbsca",
            label: {
              id: "bcbsca",
              defaultMessage: "Blue Cross Blue Shield of California",
            },
          },
          {
            value: "bcbsnj",
            label: {
              id: "bcbsnj",
              defaultMessage: "Blue Cross Blue Shield of New Jersey",
            },
          },
          {
            value: "cigna",
            label: { id: "cigna", defaultMessage: "Cigna Health" },
          },
          {
            value: "kaiser",
            label: { id: "kaiser", defaultMessage: "Kaiser Permanente" },
          },
          {
            value: "united",
            label: { id: "united", defaultMessage: "UnitedHealth" },
          },
        ]}
        name=""
        fieldName={"insurer"}
        filterFunction={(item: any, inputValue: any) => {
          return item.label.defaultMessage
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        }}
        labelMessage={{
          id: "label.creatable.dropdownfield",
          defaultMessage: "Insurer",
        }}
      />
    )}
  </Formik>
);

export const LabeledSearchableDropdownExample = () => (
  <Formik onSubmit={() => {}} initialValues={{ fruit: "" }}>
    {() => (
      <LabeledBasicDropdownField
        options={[
          { value: "apple", label: { id: "apple", defaultMessage: "apple" } },
          { value: "pear", label: { id: "pear", defaultMessage: "pear" } },
          {
            value: "orange",
            label: { id: "orange", defaultMessage: "orange" },
          },
          { value: "grape", label: { id: "grape", defaultMessage: "grape" } },
          {
            value: "banana",
            label: { id: "banana", defaultMessage: "banana" },
          },
        ]}
        labelMessage={{
          id: "label.dropdownfield",
          defaultMessage: "Fruit label",
        }}
        name=""
        fieldName={"fruit"}
        filterFunction={(item: any, inputValue: any) => {
          return item.value.includes(inputValue);
        }}
      />
    )}
  </Formik>
);
export const OverlapDropdownExample = () => (
  <div>
    <Formik onSubmit={() => {}} initialValues={{ insurer: "" }}>
      {() => (
        <div>
          <BasicDropdownField
            overlap={true}
            name=""
            options={[
              {
                value: "anthem",
                label: { id: "anthem", defaultMessage: "Anthem" },
              },
              {
                value: "bcbsca",
                label: {
                  id: "bcbsca",
                  defaultMessage: "Blue Cross Blue Shield of California",
                },
              },
              {
                value: "bcbsnj",
                label: {
                  id: "bcbsnj",
                  defaultMessage: "Blue Cross Blue Shield of New Jersey",
                },
              },
              {
                value: "cigna",
                label: { id: "cigna", defaultMessage: "Cigna Health" },
              },
              {
                value: "kaiser",
                label: { id: "kaiser", defaultMessage: "Kaiser Permanente" },
              },
              {
                value: "united",
                label: { id: "united", defaultMessage: "UnitedHealth" },
              },
            ]}
            fieldName={"insurer"}
            filterFunction={(item: any, inputValue: any) => {
              return item.label.defaultMessage
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            }}
            labelMessage={{
              id: "label.creatable.dropdownfield",
              defaultMessage: "Insurer",
            }}
            placeholderMessage={{
              id: "placeholder.insurer",
              defaultMessage: "pick an insurer....",
            }}
          />

          <div>Overlap me!</div>

          <BasicDropdownField
            overlap={true}
            options={[
              {
                value: "anthem",
                label: { id: "anthem", defaultMessage: "Anthem" },
              },
              {
                value: "bcbsca",
                label: {
                  id: "bcbsca",
                  defaultMessage: "Blue Cross Blue Shield of California",
                },
              },
              {
                value: "bcbsnj",
                label: {
                  id: "bcbsnj",
                  defaultMessage: "Blue Cross Blue Shield of New Jersey",
                },
              },
              {
                value: "cigna",
                label: { id: "cigna", defaultMessage: "Cigna Health" },
              },
              {
                value: "kaiser",
                label: { id: "kaiser", defaultMessage: "Kaiser Permanente" },
              },
              {
                value: "united",
                label: { id: "united", defaultMessage: "UnitedHealth" },
              },
            ]}
            fieldName={"secondInsurer"}
            filterFunction={(item: any, inputValue: any) => {
              return item.label.defaultMessage
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            }}
            labelMessage={{
              id: "label.creatable.dropdownfield",
              defaultMessage: "Insurer Two",
            }}
            placeholderMessage={{
              id: "placeholder.secondInsurer",
              defaultMessage: "pick a second insurer....",
            }}
            name=""
          />
        </div>
      )}
    </Formik>
    <div>Overlap me too!</div>
  </div>
);

export const ControlledBasicDropdownExample = () => (
  <Formik onSubmit={() => {}} initialValues={{ fruit: "pear" }}>
    <BasicDropdownField
      name=""
      options={[
        { value: "apple", label: { id: "orange", defaultMessage: "Apple" } },
        { value: "pear", label: { id: "orange", defaultMessage: "Pear" } },
        {
          value: "orange",
          label: { id: "orange", defaultMessage: "Orange" },
        },
        { value: "grape", label: { id: "orange", defaultMessage: "Grape" } },
        {
          value: "banana",
          label: { id: "orange", defaultMessage: "Banana" },
        },
      ]}
      fieldName={"fruit"}
    />
  </Formik>
);
