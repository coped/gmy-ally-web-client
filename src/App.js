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

    this.authenticate = this.authenticate.bind(this);
    this.main = this.main.bind(this);
  }

  main() {
    if (this.state.isAuthenticated) {
      return <Dashboard userData={this.state.userData} />;
    } else {
      return <Login authenticate={this.authenticate} />;
    }
  }

  authenticate(data) {
    this.setState({
      isAuthenticated: true,
      userData: data,
    });
  }

  render() {
    return <div className="App">{this.main()}</div>;
  }
}

export { Login, Dashboard };
