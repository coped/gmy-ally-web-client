import React, { useState } from "react";
import "./App.scss";
import "bulma/css/bulma.css";
import { Login, Signup, Welcome, Dashboard } from "pages";
import { AuthContext } from "context/auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "PrivateRoute";

export default function App(props) {
  const existingToken = JSON.parse(localStorage.getItem("gym-partner-token"));
  const [authToken, setAuthToken] = useState(existingToken);

  function setToken(data) {
    localStorage.setItem("gym-partner-token", JSON.stringify(data));
    setAuthToken(data);
  }

  function removeAuthToken() {
    localStorage.removeItem("gym-partner-token");
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken: setToken,
        removeAuthToken,
      }}
    >
      <div id="App" className="App container">
        <Router>
          <div className="welcome-title">
            <h1>
              Welcome to <Link to="/">Gym Partner</Link>
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
