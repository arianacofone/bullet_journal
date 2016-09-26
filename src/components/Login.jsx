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
        <h3 className="sync-title">SYNC</h3>
        <div id="login-form">
          <div>
            <input
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="Email"
              className="main-inputs"
            />
          </div>
          <div>
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              className="main-inputs"
            />
          </div>
          <button
            onClick={this.handleSubmit}
            className="main-inputs"
            id="login-btn"
          >
          LOG IN
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
