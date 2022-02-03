import * as React from "react";
import { createComponentWithVirtaContext } from "../test";
import { Badge } from "./index";

const defaultProps = {
  size: 25,
  label: "1",
};

describe("Badge Component", () => {
  it("Renders a badge with default color", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} />
    );
    expect(wrapper.getByText("1")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders a badge with a 0 label", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} label="0" />
    );
    expect(wrapper.getByText("0")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders an orange badge", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} color="orange" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders a blue badge", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} color="blue" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders a pink badge", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} color="pink" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders a badge using HTML color", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} color="yellow" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders a badge using RGB", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} color="rgb(0, 0, 0)" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders an empty badge", () => {
    const wrapper = createComponentWithVirtaContext(
      <Badge {...defaultProps} label={undefined} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
