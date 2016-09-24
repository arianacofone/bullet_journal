import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import Active from './active/Active.jsx';
import Snooze from './snoozed/Snooze.jsx';
import Archive from './archive/Archive.jsx';

class Menu extends Component {
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
  }
  snoozeHandler() {
    this.setState({
      snooze: true,
      active: false,
      archive: false,
    });
  }
  archiveHandler() {
    this.setState({
      archive: true,
      snooze: false,
      active: false,
    });
  }
  render() {
    return (
      <div id="menu-icons">
        <Link to="/:active" onClick={this.activeHandler}>
          <img
            id="home-icon"
            className="icons"
            role="presentation"
          />
        </Link>
        <Link to="/:snooze" onClick={this.snoozeHandler}>
          <img
            id="snooze-icon"
            className="icons"
            role="presentation"
          />
        </Link>
        <Link to="/:archive" onClick={this.archiveHandler}>
          <img
            id="archive-icon"
            className="icons"
            role="presentation"
          />
        </Link>
        {this.state.active ? <Active activeHandler={this.activeHandler} /> : false }
        {this.state.snooze ? <Snooze snoozeHandler={this.snoozeHandler} /> : false }
        {this.state.archive ? <Archive archiveHandler={this.archiveHandler} /> : false }
      </div>
    );
  }
}

export default withRouter(Menu);
