import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login as LoginComponent } from "pages";
import { MemoryRouter } from "react-router-dom";
import AppProviders from "AppProviders";
import { mockUsers } from "server-handlers";
import { Dashboard } from "pages";

Enzyme.configure({ adapter: new Adapter() });

// Login component with necessary context providers
const Login = (
  <AppProviders>
    <MemoryRouter initialEntries={["/login"]}>
      {<LoginComponent />}
    </MemoryRouter>
  </AppProviders>
);

const user = mockUsers[0];

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

  it("properly renders changes to controlled input", () => {
    const wrapper = mount(Login);
    const changeEmail = { target: { name: "email", value: "my-email" } };
    wrapper.find("input[type='email']").simulate("change", changeEmail);
    expect(wrapper.find("input[type='email']").props().value).toEqual(
      changeEmail.target.value
    );
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(Login);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
