import * as React from "react";
import { fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../test";
import { Badge } from "../Badge";
import { SubTabItem } from "./index";

const defaultProps = {
  isSelected: false,
  onPress: jest.fn(),
  testID: "1",
};

describe("Sub Tab Item Component", () => {
  it("Checks that the component renders as unselected", () => {
    const wrapper = createComponentWithVirtaContext(
      <SubTabItem {...defaultProps}>Test Tab</SubTabItem>
    );
    expect(wrapper.getByText("Test Tab")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("Checks that the component renders as selected", () => {
    const wrapper = createComponentWithVirtaContext(
      <SubTabItem {...defaultProps} isSelected={true}>
        Test Tab
      </SubTabItem>
    );
    expect(wrapper.getByText("Test Tab")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("Triggers the onPress handler", () => {
    const wrapper = createComponentWithVirtaContext(
      <SubTabItem {...defaultProps}>Test Tab</SubTabItem>
    );

    const touchableButton = wrapper.getByTestId("1");

    fireEvent(touchableButton, "press");

    expect(defaultProps.onPress).toBeCalled();
  });

  it("Renders an icon", () => {
    const wrapper = createComponentWithVirtaContext(
      <SubTabItem {...defaultProps} iconAfter={<Badge size={25} label="5" />}>
        Test Tab
      </SubTabItem>
    );
    expect(wrapper.getByText("5")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
