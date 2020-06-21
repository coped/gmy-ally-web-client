import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Signup as SignupComponent } from "pages";
import { MemoryRouter } from "react-router-dom";
import AppProviders from "AppProviders";

Enzyme.configure({ adapter: new Adapter() });

const Signup = (
  <AppProviders>
    <MemoryRouter initialEntries={["/signup"]}>
      {<SignupComponent />}
    </MemoryRouter>
  </AppProviders>
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

  it("properly renders changes to controlled input", () => {
    const wrapper = mount(Signup);
    const changeEmail = { target: { name: "email", value: "my-email" } };
    wrapper.find("input[type='email']").simulate("change", changeEmail);
    expect(wrapper.find("input[type='email']").props().value).toEqual(
      changeEmail.target.value
    );
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(Signup);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
