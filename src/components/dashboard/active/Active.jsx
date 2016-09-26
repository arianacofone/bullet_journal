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
    this.httpDonePatch = this.httpDonePatch.bind(this);
    this.httpSnoozePatch = this.httpSnoozePatch.bind(this);
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
                   Input: todoItem.Input,
                   status: todoItem.status,
                   createDate: todoItem.createDate,
                 };
               });
             }
             this.setState({ items });
           });
  }
  httpPost({ Input, status, createDate }) {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://sync-12ff7.firebaseio.com/users/${userId}/items.json`;
    request.post(url)
           .send({ Input, status, createDate })
           .then(() => {
             this.httpGet();
           });
  }
  httpDonePatch(id) {
    const userId = firebase.auth().currentUser.uid;
    const req = firebase.database().ref(`/users/${userId}/items/${id}`);
    console.log(req);
    req.update({ status: 'done' }).then((data) => {
      document.getElementById(`${id}`).setAttribute('class', 'done');
      this.httpGet();
    });
  }
  httpSnoozePatch(id) {
    const userId = firebase.auth().currentUser.uid;
    const req = firebase.database().ref(`/users/${userId}/items/${id}`);
    console.log(req);
    req.update({ status: 'snooze' }).then((data) => {
      this.httpGet();
    });
  }
  httpDelete(id) {
    const userId = firebase.auth().currentUser.uid;
    const req = firebase.database().ref(`/users/${userId}/items/${id}`);
    req.remove().then((data) => {
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
          httpDonePatch={this.httpDonePatch}
          httpSnoozePatch={this.httpSnoozePatch}
          httpDelete={this.httpDelete}
        />
      </div>
      );
  }
}

export default withRouter(Active);
