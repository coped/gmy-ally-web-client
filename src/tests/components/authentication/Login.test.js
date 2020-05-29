import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "components/authentication";

Enzyme.configure({ adapter: new Adapter() });

describe("Login", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a form", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Login />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
