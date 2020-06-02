import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "pages";
import { AuthContext } from "context/auth";

Enzyme.configure({ adapter: new Adapter() });

describe("Login", () => {
  let [authTokens, setAuthTokens] = ["token", (value) => (authTokens = value)];

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AuthContext.Provider value={(authTokens, setAuthTokens)}>
        <Login />
      </AuthContext.Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a login form", () => {
    const wrapper = mount(
      <AuthContext.Provider value={(authTokens, setAuthTokens)}>
        <Login />
      </AuthContext.Provider>
    );
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("changes to input are reflected in login state", () => {
    const wrapper = mount(
      <AuthContext.Provider value={(authTokens, setAuthTokens)}>
        <Login />
      </AuthContext.Provider>
    );
    const changeEmail = { target: { name: "email", value: "my-email" } };
    const changePassword = {
      target: { name: "password", value: "my-password" },
    };
    wrapper.find("#email-input").hostNodes().simulate("change", changeEmail);
    wrapper
      .find("#password-input")
      .hostNodes()
      .simulate("change", changePassword);
    expect(wrapper.state().form.email).toEqual("my-email");
    expect(wrapper.state().form.password).toEqual("my-password");
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(
      <AuthContext.Provider value={(authTokens, setAuthTokens)}>
        <Login />
      </AuthContext.Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
