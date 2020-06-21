import React from "react";
import "App.scss";
import "bulma/css/bulma.css";
import "bulma-pageloader/dist/css/bulma-pageloader.min.css";
import { Login, Signup, Welcome, Dashboard, Exercises } from "pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthenticatedRoute from "AuthenticatedRoute";
import UnauthenticatedRoute from "UnauthenticatedRoute";
import { Navbar } from "components/navbar";
import { Footer } from "components/common";

export default function App() {
  return (
    <div id="App" className="App">
      <Router>
        <Navbar />
        <div className="section container">
          <Route exact component={Welcome} path="/" />
          <Route component={Exercises} path="/exercises" />
          <UnauthenticatedRoute component={Login} path="/login" />
          <UnauthenticatedRoute component={Signup} path="/signup" />
          <AuthenticatedRoute component={Dashboard} path="/dashboard" />
        </div>
        <Footer />
      </Router>
    </div>
  );
}
