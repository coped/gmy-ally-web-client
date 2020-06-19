import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

import AppComponent from "App";
import { Welcome } from "pages";
import AppProviders from "AppProviders";

Enzyme.configure({ adapter: new Adapter() });

const App = (
  <AppProviders>
    <MemoryRouter initialEntries={["/"]}>{<AppComponent />}</MemoryRouter>
  </AppProviders>
);

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(App, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Login component", () => {
    const wrapper = mount(App);
    expect(wrapper.find(Welcome).length).toEqual(1);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(App);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
