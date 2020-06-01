import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Input } from "components/form";

Enzyme.configure({ adapter: new Adapter() });

describe("Input", () => {
  const props = {
    label: "Label:",
    name: "inputName",
    text: "text",
    value: "Input value.",
    onChange: () => true,
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders with props without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("correctly renders props", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("label").text()).toEqual(props.label);
    expect(wrapper.find("input").props().value).toEqual(props.value);
  });

  it("properly calls onChange function on input change", () => {
    const mockCallback = jest.fn();
    const theseProps = { ...props, onChange: mockCallback };
    const wrapper = shallow(<Input {...theseProps} />);
    wrapper.find("input").simulate("change");
    expect(mockCallback.mock.calls.length).toEqual(1);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Input {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
