import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
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
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit() {
    const { name, username, password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({ first_name: name, email: username });
      })
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        this.props.router.push(`/${userId}`);
      });
  }
  render() {
    return (
      <div id="registration-form">
        <h3 className="sync-title">SYNC</h3>
        <input
          className="main-inputs"
          name="name"
          onChange={this.handleChange}
          type="text"
          placeholder="name"
        />
        <input
          className="main-inputs"
          name="username"
          onChange={this.handleChange}
          type="text"
          placeholder="email"
        />
        <input
          className="main-inputs"
          name="password"
          onChange={this.handleChange}
          type="password"
          placeholder="password"
        />
        <button className="main-inputs" id="register" onClick={this.handleSubmit}>
          SIGN UP
        </button>
      </div>
    );
  }
}

export default withRouter(Register);
