import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FormButton } from "components/form";

Enzyme.configure({ adapter: new Adapter() });

describe("FormButton", () => {
  const props = { id: "this-button", classList: ["is-info"] };
  const message = "I'm a button!";

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders props without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormButton {...props}>{message}</FormButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(
      <FormButton {...props}>{message}</FormButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
