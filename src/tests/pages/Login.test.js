import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "pages";
import { AuthContext } from "context/auth";

Enzyme.configure({ adapter: new Adapter() });

describe("Login", () => {
  const withContext = (component) => (
    <AuthContext.Provider
      value={{ authTokens: "token", setAuthTokens: () => true }}
    >
      {component}
    </AuthContext.Provider>
  );

  it("renders a login form", () => {
    const wrapper = mount(withContext(<Login />));
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(withContext(<Login />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("changes to input are reflected in login state", () => {
    const wrapper = mount(withContext(<Login />));
    const changeEmail = { target: { name: "email", value: "my-email" } };
    const changePassword = {
      target: { name: "password", value: "my-password" },
    };
    wrapper.find("input[type='email']").simulate("change", changeEmail);
    wrapper
      .find("input[type='password-input']")
      .simulate("change", changePassword);
    expect(wrapper.state().form.email).toEqual("my-email");
    expect(wrapper.state().form.password).toEqual("my-password");
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(withContext(<Login />));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
