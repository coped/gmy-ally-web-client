import React from "react";
import "./App.scss";
import "bulma/css/bulma.css";
import { Login, Signup, Welcome, Dashboard } from "pages";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "PrivateRoute";

export default function App() {
  return (
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
  );
}
