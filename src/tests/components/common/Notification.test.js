import React from "react";
import { Notification } from "components/common";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Notification", () => {
  const props = {
    id: "this-notification",
    classList: ["another-class"],
    type: "primary"
  };
  const message = "I am a notification!";

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Notification />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders props without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Notification {...props}>{message}</Notification>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("correctly applies classList", () => {
    const wrapper = shallow(<Notification {...props} />);
    for (const className of props.classList) {
      expect(wrapper.hasClass(className)).toEqual(true);
    }
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(
      <Notification {...props}>{message}</Notification>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
