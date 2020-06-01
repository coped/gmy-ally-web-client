import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "pages";

Enzyme.configure({ adapter: new Adapter() });

describe("Login", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a form", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find("form").length).toEqual(1);
  });

  it.todo("sends a login request upon form submit");

  it.todo("changes to input are reflected in state");

  it.todo("test for loginUser()");

  it("has a valid snapshot", () => {
    const component = renderer.create(<Login />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
