import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Welcome } from "pages";
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Welcome", () => {
  const withContext = (component) => (
    <MemoryRouter initialEntries={["/"]}>{component}</MemoryRouter>
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(withContext(<Welcome />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(withContext(<Welcome />));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
