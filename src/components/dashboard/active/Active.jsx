import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';
import firebase from '../../../../firebase.config.js';
import Input from './Input.jsx';
// import ToDoList from 'ToDoList.jsx';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.httpPost = this.httpPost.bind(this);
  }
  componentDidMount() {
    this.httpGet();
  }
  httpGet() {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://lazr-1da5a.firebaseio.com/users/${userId}/items.json`;
    request.get(url)
           .then((response) => {
             const itemsData = response.body;
             let items = [];
             if (itemsData) {
               items = Object.keys(itemsData).map((id) => {
                 const todoItem = itemsData[id];
                 return {
                   id,
                   localInput: todoItem.localInput,
                 };
               });
             }
             this.setState({ items });
           });
  }
  httpPost({ localInput }) {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://lazr-1da5a.firebaseio.com/users/${userId}/items.json`;
    request.post(url)
           .send({ localInput })
           .then(() => {
             this.httpGet();
           });
  }
  render() {
    return (
      <div>
        <h3>ACTIVE</h3>
        <Input handlePost={this.httpPost} />
        {/* <ToDoList /> */}
      </div>
      );
  }
}

export default withRouter(Active);
