import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Cookie from "js-cookie"

import LandingPage from "./LandingPage.js";
import ProfilePage from "./ProfilePage.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null,
      displayLoading: true,
      displayApp: false,
      displayMessage: 'Loading User Data...'
    }
  }

  componentWillMount() {
    const { dispatch, history } = this.props;
    const token = Cookie.get('easyq_access_token');
    if (token) {
      this.setState({ loading: false });
    } else {
      history.push('/login');
    }
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route
            path="/profile"
            render={props => <ProfilePage {...props} />}
          />
          <Route path="/*" render={props => <h1>NO PAGE FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);