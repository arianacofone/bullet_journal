import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { withRouter } from 'react-router';

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
    const { username, password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({ first_name: '', last_name: '', email: username })
      })
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        this.props.router.push(`/${userId}`);
      });
  }
  render() {
    return (
      <div id="register">
        <h4>REGISTER</h4>
        <div id="register-form">
          <div>
            <input
              name="username"
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
