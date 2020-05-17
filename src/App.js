import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Login } from "components/authentication";
import { Dashboard } from "components/dashboard";
import { Welcome } from "components/welcome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

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
    console.log("this was ran")
    this.setState({
      isAuthenticated: true,
      userData: data,
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Login authenticate={this.authenticate} />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard userData={this.state.userData} />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        this.state.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export { Login, Dashboard };
