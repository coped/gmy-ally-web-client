import React from "react";
import { render } from "@testing-library/react";
import { Button, Logo, TextInputField, Notification } from "components/common";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button>I am a button</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Button>I am a button</Button>);
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
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Notification>Some notification</Notification>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
