import React, { Component } from 'react';
import Cookie from 'js-cookie';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

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
    return null
  }
}

export default Logout;
