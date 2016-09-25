import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../../firebase.config.js';
import Date from './Date.jsx';
import Menu from './Menu.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    // this.state = {
    //   loggedIn: false,
    // };
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
        <h2> DASHBOARD </h2>
        <Date />
        <Menu />
        <button id="sign-out" onClick={this.signOut}> logout</button>
      </div>
    );
  }
};


export default withRouter(Dashboard);
