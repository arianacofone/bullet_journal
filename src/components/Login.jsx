// This file handles login component tied to firebase authorization.

import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
    const { email, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
      })
      .then(() => {
        this.props.router.push('./app')
      });
  }
  render() {
    return (
      <div id="login">
        <h4>LOGIN</h4>
        <div id="login-form">
          <div>
            <input
              name="email"
              onChange={this.handleChange}
              type="text"
              placeholder="email"
            />
          </div>
          <div>
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="password"
            />
          </div>
          <button className="btn" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
