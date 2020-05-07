import React from "react";
import { render } from "@testing-library/react";
import { Button, Logo, TextInputField, Notification } from "components/common";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  const text = "I'm a button";
  const props = {
    classModifiers: "is-link",
    onClick: () => console.log("this is a button"),
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button>{text}</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders children correctly", () => {
    const wrapper = shallow(<Button>{text}</Button>);
    expect(wrapper.find("button").text()).toEqual(text);
  });

  it("renders without crashing with props", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button {...props}>I am a button</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(
      <Button {...props}>I am a button</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Logo", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Logo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Logo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("TextInputField", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TextInputField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<TextInputField />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Notification", () => {
  const props = { type: "info" };
  const message = "I'm a notification.";

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Notification>{message}</Notification>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("properly renders children", () => {
    const wrapper = shallow(
      <Notification {...props}>
        <p>{message}</p>
      </Notification>
    );
    expect(wrapper.find("p").text()).toEqual(message);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(
      <Notification {...props}>{message}</Notification>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
