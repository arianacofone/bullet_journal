import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';
import firebase from '../../../../firebase.config.js';
import Input from './Input.jsx';
import Date from './../Date.jsx';
import ToDoList from './ToDoList.jsx';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.httpPost = this.httpPost.bind(this);
    this.httpPatch = this.httpPatch.bind(this);
    this.httpDelete = this.httpDelete.bind(this);
  }
  componentDidMount() {
    this.httpGet();
  }
  httpGet() {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://sync-12ff7.firebaseio.com/users/${userId}/items.json`;
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
                   status: todoItem.status,
                   createDate: todoItem.createDate,
                 };
               });
             }
             this.setState({ items });
           });
  }
  httpPost({ localInput, status, createDate }) {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://sync-12ff7.firebaseio.com/users/${userId}/items.json`;
    request.post(url)
           .send({ localInput, status, createDate })
           .then(() => {
             this.httpGet();
           });
  }
  httpPatch({ id, localInput, status, createDate }) {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://sync-12ff7.firebaseio.com/users/${userId}/todo/${id}`;
    request.patch(url)
           .send({ localInput, status, createDate })
           .then(() => {
             this.httpGet();
           });
  }
  httpDelete(id) {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://sync-12ff7.firebaseio.com/users/${userId}/todo/${id}`;
    request.del(url)
           .then(() => {
             this.httpGet();
           });
  }
  render() {
    return (
      <div>
        <Input
          httpPost={this.httpPost}
        />
        <Date />
        <ToDoList
          items={this.state.items}
          httpPatch={this.httpPatch}
          httpDelete={this.httpDelete}
        />
      </div>
      );
  }
}

export default withRouter(Active);
