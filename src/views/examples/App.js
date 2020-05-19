import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Cookie from "js-cookie"

import Navbar from "../../components/Navbars/ExamplesNavbar"
import Footer from "../../components/Footers/Footer"

import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";
import Bookings from "./Bookings";
import Events from "./Events";
// import Schedule from "./Schedule";
import Inbox from "./Inbox";
import Chat from "./Chat";
import Messages from "./Messages";
import Buyers from "./Buyers";
import PageNotFound from "./PageNotFound";

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
    const { history } = this.props;
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
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <LandingPage {...props} />}
          />
          <Route
            path="/profile"
            render={props => <ProfilePage {...props} />}
          />
          <Route
            path="/my-store"
            render={props => <Bookings {...props} />}
          />
          <Route
            path="/events"
            render={props => <Events {...props} />}
          />
          {/* <Route
            path="/schedule"
            render={props => <Schedule {...props} />}
          /> */}
          <Route
            path="/inbox"
            render={props => <Inbox {...props} />}
          />
          <Route
            path="/chat"
            render={props => <Chat {...props} />}
          />
          <Route
            path="/messages"
            render={props => <Messages {...props} />}
          />
          <Route
            path="/buyers"
            render={props => <Buyers {...props} />}
          />
          <Route
            path="/*"
            render={props => <PageNotFound {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);