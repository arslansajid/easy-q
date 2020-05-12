
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
// pages
import App from "views/examples/App";
import Login from "views/examples/Login";
import Signup from "views/examples/Signup";
import Logout from "views/examples/Logout";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/login" name="Login"
        component={Login} />
      <Route
        exact
        path="/signup" name="Signup"
        component={Signup} />
      <Route
        exact
        path="/logout" name="Logout"
        component={Logout} />
      <Route
        path="/*" name="App"
        component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
