import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Signup as SignupComponent } from "pages";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "context/auth";
import { UserContext } from "context/user";

Enzyme.configure({ adapter: new Adapter() });

const Signup = (
  <AuthContext.Provider
    value={{ authToken: jest.fn(), setAuthContext: jest.fn() }}
  >
    <UserContext.Provider
      value={{ user: jest.fn(), setUserContext: jest.fn() }}
    >
      <MemoryRouter initialEntries={["/signup"]}>
        {<SignupComponent />}
      </MemoryRouter>
    </UserContext.Provider>
  </AuthContext.Provider>
);

describe("Signup", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(Signup, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a Signup form", () => {
    const wrapper = mount(Signup);
    expect(wrapper.find("form").length).toEqual(1);
  });

  // === MODIFY TO TEST BEHAVIOR INSTEAD ===

  // it("changes to input are reflected in signup state", () => {
  //   const wrapper = mount(withContext(<Signup />));
  //   const changeEmail = { target: { name: "email", value: "my-email" } };
  //   const changePassword = {
  //     target: { name: "password", value: "my-password" },
  //   };
  //   wrapper.find("input[id='email-input']").simulate("change", changeEmail);
  //   wrapper
  //     .find("input[id='password-input']")
  //     .simulate("change", changePassword);
  //   expect(wrapper.state().form.email).toEqual("my-email");
  //   expect(wrapper.state().form.password).toEqual("my-password");
  // });

  it("has a valid snapshot", () => {
    const component = renderer.create(Signup);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
