import React, { useState } from "react";
import "./App.scss";
import "bulma/css/bulma.css";
import { Login, Signup, Welcome, Dashboard } from "pages";
import { AuthContext } from "context/auth";
import { UserContext } from "context/user";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "PrivateRoute";

export default function App(props) {
  const localStorageItem = {
    authToken: "auth-token",
    user: "user",
  };
  const existingToken = JSON.parse(
    localStorage.getItem(localStorageItem.authToken)
  );
  const existingUser = JSON.parse(localStorage.getItem(localStorageItem.user));
  const [authToken, setAuthToken] = useState(existingToken);
  const [user, setUser] = useState(existingUser);

  function setAuthContext(data) {
    if (data === null) {
      localStorage.clear(localStorageItem.authToken);
    } else {
      setAuthToken(data);
      localStorage.setItem(localStorageItem.authToken, JSON.stringify(data));
    }
  }

  function setUserContext(data) {
    if (data === null) {
      localStorage.clear(localStorageItem.user);
    } else {
      setUser(data);
      localStorage.setItem(localStorageItem.user, JSON.stringify(data));
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthContext,
      }}
    >
      <UserContext.Provider value={{ user, setUserContext }}>
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
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
