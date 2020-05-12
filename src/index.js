
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
// pages
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <LandingPage {...props} />} />
      <Route
        path="/profile"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route path="/*" render={props => <h1>NO PAGE FOUND</h1>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
