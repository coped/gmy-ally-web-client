import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login, LoginForm, SignupForm } from "components/authentication";

describe("Login", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Login></Login>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("LoginForm", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginForm></LoginForm>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<LoginForm></LoginForm>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("SignupForm", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SignupForm></SignupForm>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<SignupForm></SignupForm>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
