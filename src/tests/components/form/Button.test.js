import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "components/form";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  const props = { classList: ["is-info"] };
  const message = "I'm a button.";

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button {...props}>{message}</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("properly renders children", () => {
    const wrapper = shallow(<Button {...props}>{message}</Button>);
    expect(wrapper.find("button").text()).toEqual(message);
  });

  it("adds classes from classList", () => {
    const classes = ["class", "another-class"];
    const wrapper = shallow(<Button classList={classes} />);
    expect(wrapper.find("button").hasClass(classes[0])).toEqual(true);
    expect(wrapper.find("button").hasClass(classes[1])).toEqual(true);
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
