// This file handles login component tied to firebase authorization.

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const objectState = {};
    const keyState = e.target.name;
    objectState[keyState] = e.target.name;
    this.setState(objectState);
  }
  handleSubmit() {
    const { username, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
      })
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        this.props.router.push(`/${userId}`);
      });
  }
  render() {
    return (
      <div id="login">
        <button
          to="/register"
          id="register-btn"
        >
          <Link to="/register" id="register">SIGN UP</Link>
        </button>
        <div id="login-form">
          <h3 className="sync-title">SYNC</h3>
          <input
            name="username"
            type="text"
            placeholder="Email"
            className="main-inputs"
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="main-inputs"
            onChange={this.handleChange}
          />
          <button
            className="main-inputs"
            id="login-btn"
            onClick={this.handleSubmit}
          >
          LOG IN
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
