import React, { Component } from 'react';
import Cookie from 'js-cookie';

class Logout extends Component {

  componentWillMount() {
    if (process.env.NODE_ENV === 'production') {
      Cookie.remove('easyq_access_token')
    }
    else {
      Cookie.remove('easyq_access_token');
    }
    //this.props.history.push("/login");
    window.location.href = ("/login");
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Logout;
