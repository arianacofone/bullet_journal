import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';
import Date from './Date.jsx';
import Menu from './Menu.jsx';
import Active from './active/Active.jsx';
import Snooze from './snoozed/Snooze.jsx';
import Archive from './archive/Archive.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      active: true,
      snooze: false,
      archive: false,
    };
    this.activeHandler = this.activeHandler.bind(this);
    this.snoozeHandler = this.snoozeHandler.bind(this);
    this.archiveHandler = this.archiveHandler.bind(this);
  }
  activeHandler() {
    this.setState({
      active: true,
      snooze: false,
      archive: false,
    });
    console.log(this.state.active)
  }
  snoozeHandler() {
    this.setState({
      snooze: true,
      active: false,
      archive: false,
    });
    console.log(this.state.snooze)
  }
  archiveHandler() {
    this.setState({
      archive: true,
      snooze: false,
      active: false,
    });
    console.log(this.state.archive)
  }
  render() {
    return (
      <div id="dashboard">
        <h2> DASHBOARD </h2>
        <Date />
        <Menu
          activeHandler={this.activeHandler}
          snoozeHandler={this.snoozeHandler}
          archiveHandler={this.archiveHandler}
        />
        {this.state.active ? <Active activeHandler={this.activeHandler} /> : false }
        {this.state.snooze ? <Snooze snoozeHandler={this.snoozeHandler} /> : false }
        {this.state.archive ? <Archive archiveHandler={this.archiveHandler} /> : false }
        {/* <Filters /> */}
        {/* <Logout /> */}
      </div>
    );
  }
}

export default withRouter(Dashboard);
