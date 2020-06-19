import React from "react";
import "App.scss";
import "bulma/css/bulma.css";
import "bulma-pageloader/dist/css/bulma-pageloader.min.css";

import { Login, Signup, Welcome, Dashboard } from "pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "PrivateRoute";
import { Navbar } from "components/navbar";

export default function App() {
  return (
    <div id="App" className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Route exact component={Welcome} path="/" />
          <Route component={Login} path="/login" />
          <Route component={Signup} path="/signup" />
          <PrivateRoute component={Dashboard} path="/dashboard" />
        </div>
      </Router>
    </div>
  );
}
