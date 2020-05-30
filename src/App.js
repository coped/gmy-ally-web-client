import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { AuthForm } from "components/authentication";
import { Dashboard } from "components/dashboard";
import { AuthContext } from "context/auth";
import { Welcome } from "welcome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import PrivateRoute from "PrivateRoute";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userData: "",
    };

    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(data) {
    this.setState({
      isAuthenticated: true,
      userData: data,
    });
  }

  render() {
    return (
      <div className="App">
        <AuthContext.Provider value={true}>
          <Router>
            <Route exact component={Welcome} path="/" />
            <Route
              component={AuthForm}
              authenticate={this.authenticate}
              path="/login"
            />
            <PrivateRoute component={Dashboard} path={"/dashboard"} />
          </Router>
        </AuthContext.Provider>
      </div>
    );
  }
}
