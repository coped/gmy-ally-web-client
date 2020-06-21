import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Dashboard as DashboardComponent } from "pages";
import { MemoryRouter } from "react-router-dom";
import AppProviders from "AppProviders";

Enzyme.configure({ adapter: new Adapter() });

const Dashboard = (
  <AppProviders>
    <MemoryRouter initialEntries={["/dashboard"]}>
      {<DashboardComponent />}
    </MemoryRouter>
  </AppProviders>
);

describe("Dashboard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(Dashboard, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(Dashboard);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
