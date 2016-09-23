import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import Date from './Date.jsx';

class Dashboard extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div id="dashboard">
        <h2> DASHBOARD </h2>
        <Date />
        {/* <Menu /> */}
        {/* <PostInput />
        <PostList /> */}
        {/* <Filters /> */}
        {/* <Logout /> */}
      </div>
    );
  }
}

export default Dashboard;
