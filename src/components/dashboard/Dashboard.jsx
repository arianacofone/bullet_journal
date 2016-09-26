import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../../firebase.config.js';
import Menu from './Menu.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }
  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('user signed out');
      });
  }
  render() {
    return (
      <div id="dashboard">
        <h3 className="sync">SYNC</h3>
        <Menu />
        <button id="sign-out" onClick={this.signOut}> LOG OUT</button>
      </div>
    );
  }
}


export default withRouter(Dashboard);
