import React, { useState } from "react";
import "./App.scss";
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

export default function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  function setTokens(data) {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider
      value={{ authTokens: authTokens, setAuthTokens: setTokens }}
    >
      <div id="App" className="App container">
        <Router>
          <div className="welcome-title">
            <h1>
              Welcome to <a href="/">Gym Partner</a>
            </h1>
          </div>
          <Route exact component={Welcome} path="/" />
          <Route component={Login} path="/login" />
          <Route component={Signup} path="/signup" />
          <PrivateRoute component={Dashboard} path="/dashboard" />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}
