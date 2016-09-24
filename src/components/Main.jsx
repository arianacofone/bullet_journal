// Main component renders login children and deals with logged in/logged out state

import React, { Component } from 'react';
import firebase from '../../firebase.config.js';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
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
      <div id="main-component">
        <h3>LAZR</h3>
        <div id="children-list">
          {this.props.children}
        </div>
        <div id="sign-out">
          <a href="#" onClick={this.signOut}>Sign Out</a>
        </div>
      </div>
    );
  }
}

export default Main;

Main.propTypes = propTypes;
