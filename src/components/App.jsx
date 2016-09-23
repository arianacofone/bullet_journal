import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Dashboard from './dashboard/Dashboard.jsx';

class App extends Component {
  render() {
    return (
      <div id="app-component">
        <Dashboard />
      </div>
    );
  }
}

export default withRouter(App);
