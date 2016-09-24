import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';
import Date from './Date.jsx';
import Menu from './Menu.jsx';

class Dashboard extends Component {

  render() {
    return (
      <div id="dashboard">
        <h2> DASHBOARD </h2>
        <Date />
        <Menu />
        {/* <Filters /> */}
        {/* <Logout /> */}
      </div>
    );
  }
}

export default withRouter(Dashboard);
