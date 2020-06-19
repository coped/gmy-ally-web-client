import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar as NavbarComponent } from "components/navbar";
import { MemoryRouter } from "react-router-dom";
import AppProviders from "AppProviders";

Enzyme.configure({ adapter: new Adapter() });

const Navbar = (
  <AppProviders>
    <MemoryRouter initialEntries={["/"]}>{<NavbarComponent />}</MemoryRouter>
  </AppProviders>
);

describe("Navbar", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(Navbar, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("when not logged in", () => {
    it("should link to signup", () => {
      const wrapper = mount(Navbar);
      expect(wrapper.find("a[href='/signup']").length).toEqual(1);
    });
    it("should link to login", () => {
      const wrapper = mount(Navbar);
      expect(wrapper.find("a[href='/login']").length).toEqual(1);
    });
  });

  describe("when logged in", () => {
    it.todo("should link to logout");
    it.todo("should display users name");
  });

  it.todo("has a valid snapshot");
});
