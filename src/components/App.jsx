import React, { Component } from 'react';
import { withRouter } from 'react-router';

class App extends Component {
  render() {
    return (
      <div id="app-component">
        <h3>Welcome to Lazer</h3>
      </div>
    );
  }
}

export default withRouter(App);
