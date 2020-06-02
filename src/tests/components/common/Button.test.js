import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "components/common";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  const props = {
    id: "this-button",
    classList: ["is-info", "another-class"],
    onClick: () => true,
  };
  const message = "I'm a button!";

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders with props without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button {...props}>{message}</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders children", () => {
    const wrapper = shallow(<Button {...props}>{message}</Button>);
    expect(wrapper.text()).toEqual(message);
  });

  it("uses classes from classList", () => {
    const wrapper = shallow(<Button {...props}></Button>);
    for (const className of props.classList) {
      expect(wrapper.hasClass(className)).toEqual(true);
    }
  });

  it("handles loading animation class", () => {
    const wrapper = shallow(<Button {...props}>{message}</Button>);
    wrapper.setProps({ loading: true });
    expect(wrapper.find("button").hasClass("is-loading")).toEqual(true);
    wrapper.setProps({ loading: false });
    expect(wrapper.find("button").hasClass("is-loading")).toEqual(false);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Button {...props}>{message}</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
