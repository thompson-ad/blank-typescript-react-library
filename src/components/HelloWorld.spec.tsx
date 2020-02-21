import React from "react";
import { shallow } from "enzyme";
import HelloWorld from "./HelloWorld";

describe("<HelloWorld />", () => {
  it("should render the button", () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.prop("children")).toBe("Hello World");
  });
});
