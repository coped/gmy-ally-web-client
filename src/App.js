import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Login } from "components/authentication";
import { Dashboard } from "components/dashboard/";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userData: "",
    };

    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated(data) {
    this.setState({
      isAuthenticated: true,
      userData: data,
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="App">
        {this.state.isAuthenticated ? (
          <Dashboard userData={userData} />
        ) : (
          <Login isAuthenticated={this.isAuthenticated} />
        )}
      </div>
    );
  }
}
