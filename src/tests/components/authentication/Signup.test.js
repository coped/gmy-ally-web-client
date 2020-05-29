import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Signup } from "components/authentication";

Enzyme.configure({ adapter: new Adapter() });

describe("Signup", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a form", () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Signup />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
