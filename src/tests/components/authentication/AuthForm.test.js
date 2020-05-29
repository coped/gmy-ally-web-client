import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AuthForm, Login, Signup } from "components/authentication";

Enzyme.configure({ adapter: new Adapter() });

describe("AuthForm", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Login", () => {
    const wrapper = mount(<AuthForm />);
    expect(wrapper.find(Login).length).toEqual(1);
  });

  it("renders Signup", () => {
    const wrapper = mount(<AuthForm />);
    wrapper.find("#show-signup").at(0).simulate("click");
    expect(wrapper.find(Signup).length).toEqual(1);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Login></Login>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
