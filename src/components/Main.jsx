// Main component renders login children and deals with logged in/logged out state

import React, { Component } from 'react';
import request from 'superagent';
import firebase from '../../firebase.config.js';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      items: [],
    };
    this.signOut = this.signOut.bind(this);
    // this.handleItemPostOrPatch = this.handleItemPostOrPatch.bind(this);
    this.httpPost = this.httpPost.bind(this);
    this.httpPatch = this.httpPatch.bind(this);
    this.httpDelete = this.httpDelete.bind(this);
  }
  componentDidMount() {
    this.httpGet();
  }
  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('user signed out');
      });
  }
  // signOutButton() {
  //   if (this.state.loggedIn === true) {
  //     return (
  //       <div id="sign-out">
  //         <a href="#" onClick={this.signOut}>Sign Out</a>
  //       </div>
  //     );
  //   }
  // }
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
  // handleItemPostOrPatch({ itemId, itemContent }) {
  //   if ( itemId) {
  //     this.httpPatchToDoItem({ id, itemId, itemContent });
  //   } else {
  //     this.httpPost({ id, itemContent });
  //   }
  // }
  httpPost() {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://lazr-1da5a.firebaseio.com/users/${userId}/items.json`;
    request.post(url)
           .send(data)
           .then(() => {
             this.httpGet();
           });
  }
  httpPatch({ itemId, itemContent }) {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://lazr-1da5a.firebaseio.com/users/${userId}/todo/${itemId}`;
    request.patch(url)
           .send({ itemContent })
           .then(() => {
             this.httpGet();
           });
  }
  httpDelete(itemId) {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://lazr-1da5a.firebaseio.com/users/${userId}/todo/${itemId}`;
    request.del(url)
           .then(() => {
             this.httpGet();
           });
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      items: this.state.items,
      httpPost: this.httpPost,
      httpPatch: this.httpPatch,
      httpDelete: this.httpDelete,
    });
    return (
      <div id="main-component">
        <h3>LAZR</h3>
        {
          this.signOutButton()
        }
        <div id="children-list">
          {childrenWithProps}
        </div>
      </div>
    );
  }
}

export default Main;

Main.propTypes = propTypes;
