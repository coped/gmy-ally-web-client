import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Login from "components/authentication/Login";
import Dashboard from "components/dashboard/Dashboard";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      JWT: "",
    };

    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated(jwt) {
    this.setState({
      isAuthenticated: true,
      JWT: jwt,
    });
  }

  render() {
    return (
      <div className="App section">
        {this.state.isAuthenticated ? (
          <Dashboard />
        ) : (
          <Login isAuthenticated={this.isAuthenticated} />
        )}
      </div>
    );
  }
}
