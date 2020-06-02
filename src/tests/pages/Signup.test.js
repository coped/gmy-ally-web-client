import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Signup } from "pages";

Enzyme.configure({ adapter: new Adapter() });

describe("Signup", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a Signup form", () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("changes to input are reflected in signup state", () => {
    const wrapper = shallow(<Signup />);
    const changeEmail = { target: { name: "email", value: "my-email" } };
    const changePassword = {
      target: { name: "password", value: "my-password" },
    };
    wrapper.find("#email-input").simulate("change", changeEmail);
    wrapper.find("#password-input").simulate("change", changePassword);
    expect(wrapper.state().form.email).toEqual("my-email");
    expect(wrapper.state().form.password).toEqual("my-password");
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Signup />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});