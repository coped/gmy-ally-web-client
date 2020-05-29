import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helloMessage: "You're logged in. Welcome to the dashboard.",
    };
  }

  render() {
    return (
      <div>
        <div className="center-column">
          <h1 className="title has-text-light">{this.state.helloMessage}</h1>
        </div>
      </div>
    );
  }
}
