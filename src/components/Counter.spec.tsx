import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("should render the button labels", () => {
    const wrapper = shallow(<Counter />);
    expect(
      wrapper
        .find("button")
        .at(0)
        .prop("children")
    ).toBe("-");
    expect(
      wrapper
        .find("button")
        .at(1)
        .prop("children")
    ).toBe("+");
  });

  it("should default to zero", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find("span").prop("children")).toBe(0);
  });

  it("should allow incrementing counter", async () => {
    const wrapper = shallow(<Counter />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(wrapper.find("span").prop("children")).toBe(1);
  });

  it("should allow decrementing counter", async () => {
    const wrapper = shallow(<Counter />);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(wrapper.find("span").prop("children")).toBe(-1);
  });
});
