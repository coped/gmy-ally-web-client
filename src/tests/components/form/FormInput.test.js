import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FormInput } from "components/form";

Enzyme.configure({ adapter: new Adapter() });

describe("FormInput", () => {
  const props = {
    id: "this-input",
    label: "Label:",
    name: "inputName",
    type: "text",
    value: "Input value.",
    onChange: () => true,
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders with props without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormInput {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("correctly renders props", () => {
    const wrapper = shallow(<FormInput {...props} />);
    expect(wrapper.find("label").text()).toEqual(props.label);
    expect(wrapper.find("input").props().value).toEqual(props.value);
  });

  it("properly calls onChange function on input change", () => {
    const mockCallback = jest.fn();
    const theseProps = { ...props, onChange: mockCallback };
    const wrapper = shallow(<FormInput {...theseProps} />);
    wrapper.find("input").simulate("change");
    expect(mockCallback.mock.calls.length).toEqual(1);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<FormInput {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
