
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
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
    const { name, email, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(name, email, password)
      .catch((err) => {
        console.log(err);
      })
      .then((newUser) => {
        firebase.database().ref('users')
          .child(newUser.uid)
          .set({ name: '', email: email })
      })
      .then(() => {
        this.props.router.push('./app')
      });
  }
  render() {
    return (
      <div id="register">
        <h4>REGISTER</h4>
        <div id="register-form">
          <div>
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="name"
            />
          </div>
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
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
