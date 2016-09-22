// Main component will render all of the children and will deal with logged in/logged out state

import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  render() {
    return (
      <div id="main-component">
        <h3>LAZR</h3>
        <div id="login">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;

Main.propTypes = propTypes;
