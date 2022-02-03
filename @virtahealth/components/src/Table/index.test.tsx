import * as React from "react";
import { View, Text } from "react-native";
import { RadioInput } from "../RadioInput";
import { createComponentWithVirtaContext } from "../test";
import { Table, TableRow, TableCell } from "./index";

describe("Table Components", () => {
  it("Table component renders children", () => {
    const { getByText } = createComponentWithVirtaContext(
      <Table>
        <TableRow>
          <TableCell value={"hello"} />
        </TableRow>
      </Table>
    );
    expect(getByText("hello")).toBeTruthy();
  });

  it("Table Row component renders children", () => {
    const { getByText } = createComponentWithVirtaContext(
      <TableRow>
        <TableCell value={"this is a test"} />
      </TableRow>
    );

    expect(getByText("this is a test")).toBeTruthy();
  });

  it("Table Row component renders values in `data` array", () => {
    const dataArr = [
      <Text key={1} testID={"value1"}>
        value1
      </Text>,
      <View key={2} testID={"value2"}>
        value2
      </View>,
      <Text key={3} testID={"value3"}>
        value3
      </Text>,
    ];
    const { getByTestId } = createComponentWithVirtaContext(
      <TableRow data={dataArr} />
    );

    expect(getByTestId("value1")).toBeTruthy();
    expect(getByTestId("value2")).toBeTruthy();
    expect(getByTestId("value3")).toBeTruthy();
  });

  it("Table Row component renders children and values in `data` array", () => {
    const dataArr = [
      <Text key={1} testID={"value1"}>
        value1
      </Text>,
      <View key={2} testID={"value2"}>
        value2
      </View>,
      <Text key={3} testID={"value3"}>
        value3
      </Text>,
    ];
    const { getByTestId, getByText } = createComponentWithVirtaContext(
      <TableRow data={dataArr}>
        <TableCell value={"test"} />
      </TableRow>
    );

    expect(getByTestId("value1")).toBeTruthy();
    expect(getByTestId("value2")).toBeTruthy();
    expect(getByTestId("value3")).toBeTruthy();
    expect(getByText("test")).toBeTruthy();
  });

  it("Table Cell component renders value if it is a component", () => {
    const cellValue = (
      <RadioInput
        labelMessage={{ id: "testRadioInput", defaultMessage: "radio input" }}
      />
    );
    const { getByText } = createComponentWithVirtaContext(
      <TableCell value={cellValue} />
    );

    expect(getByText("radio input")).toBeTruthy();
  });

  it("Table Cell component renders value if it is a string", () => {
    const cellValue = "test component";
    const { getByText } = createComponentWithVirtaContext(
      <TableCell value={cellValue} />
    );

    expect(getByText("test component")).toBeTruthy();
  });
});
