import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login as LoginComponent } from "pages";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "context/auth";
import { UserContext } from "context/user";

Enzyme.configure({ adapter: new Adapter() });

// Login component with necessary context providers
const Login = (
  <AuthContext.Provider
    value={{ authToken: jest.fn(), setAuthContext: jest.fn() }}
  >
    <UserContext.Provider
      value={{ user: jest.fn(), setUserContext: jest.fn() }}
    >
      <MemoryRouter initialEntries={["/login"]}>
        {<LoginComponent />}
      </MemoryRouter>
    </UserContext.Provider>
  </AuthContext.Provider>
);

describe("Login", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(Login, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a login form", () => {
    const wrapper = mount(Login);
    expect(wrapper.find("form").length).toEqual(1);
  });

  // it("changes to input are reflected in login state", () => {
  //   const wrapper = mount(withContext(<Login />));
  //   const changeEmail = { target: { name: "email", value: "my-email" } };
  //   const changePassword = {
  //     target: { name: "password", value: "my-password" },
  //   };
  //   wrapper.find("input[type='email']").simulate("change", changeEmail);
  //   wrapper
  //     .find("input[type='password-input']")
  //     .simulate("change", changePassword);
  //   expect(wrapper.state().form.email).toEqual("my-email");
  //   expect(wrapper.state().form.password).toEqual("my-password");
  // });

  it("has a valid snapshot", () => {
    const component = renderer.create(Login);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
