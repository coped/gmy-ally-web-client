import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Welcome } from "pages";

Enzyme.configure({ adapter: new Adapter() });

describe("Welcome", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Welcome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Welcome />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
