import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppProviders from "AppProviders";
import * as serviceWorker from "./serviceWorker";

// Conditionally require mocking definition
if (process.env.NODE_ENV === "development") require("./mocks");

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
