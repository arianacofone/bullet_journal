// Will be the utility function that will check if user is logged in otherwise, it'll reroute them

const React = require('react'),
  firebase = require('../../firebase.config.js');

function requireAuth(nextState, replace) {
  if (firebase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

module.exports = requireAuth;
