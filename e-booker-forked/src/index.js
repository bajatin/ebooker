import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
// ReactDOM.render(<App />, document.getElementById("root"));
