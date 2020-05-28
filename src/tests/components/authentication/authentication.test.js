import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login, LoginForm, SignupForm } from "components/authentication";
import { Logo } from "components/common";

Enzyme.configure({ adapter: new Adapter() });

describe("Login", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a logo", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find(Logo).length).toEqual(1);
  });

  it("renders LoginForm", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find(LoginForm).length).toEqual(1);
  });

  it("renders a SignupForm", () => {
    const wrapper = mount(<Login />);
    wrapper.find("a").at(0).simulate("click");
    expect(wrapper.find(SignupForm).length).toEqual(1);
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

  it("renders a form", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find("form").length).toEqual(1);
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

  it("renders a form", () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<SignupForm></SignupForm>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
