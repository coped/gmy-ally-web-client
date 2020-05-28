import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button, TextInputField } from "components/form";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  const props = { classModifiers: "is-info" };
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

  it("has a valid snapshot", () => {
    const component = renderer.create(<Button {...props}>{message}</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("TextInputField", () => {
  const props = {
    label: "Name:",
    name: "nameValue",
    type: "text",
    value: "Your name",
    onChange: () => console.log("changed"),
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TextInputField {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders with correct labels", () => {
    const wrapper = shallow(<TextInputField {...props} />);
    expect(wrapper.find("label").text()).toEqual(props.label);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<TextInputField {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
