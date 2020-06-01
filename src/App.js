import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Login, Signup, Welcome, Dashboard } from "pages";
import { AuthContext, useAuth } from "context/auth";
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
  }

  render() {
    return (
      <div className="App container">
        <AuthContext.Provider value={true}>
          <Router>
            <Route exact component={Welcome} path="/" />
            <Route component={Login} path="/login" />
            <Route component={Signup} path="/signup" />
            <PrivateRoute component={Dashboard} path="/dashboard" />
          </Router>
        </AuthContext.Provider>
      </div>
    );
  }
}
