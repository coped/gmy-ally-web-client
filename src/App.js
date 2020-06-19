import React from "react";
import "App.scss";
import "bulma/css/bulma.css";
import "bulma-pageloader/dist/css/bulma-pageloader.min.css";
import { Login, Signup, Welcome, Dashboard } from "pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthenticatedRoute from "AuthenticatedRoute";
import UnauthenticatedRoute from "UnauthenticatedRoute";
import { Navbar } from "components/navbar";

export default function App() {
  return (
    <div id="App" className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Route exact component={Welcome} path="/" />
          <UnauthenticatedRoute component={Login} path="/login" />
          <UnauthenticatedRoute component={Signup} path="/signup" />
          <AuthenticatedRoute component={Dashboard} path="/dashboard" />
        </div>
      </Router>
    </div>
  );
}
