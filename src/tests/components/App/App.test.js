import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App, { Login, Dashboard } from "App";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Login component", () => {
    const wrapper = mount(<App />);
    console.log(wrapper.debug());
    expect(wrapper.find(Login).length).toEqual(1);
  });
});
