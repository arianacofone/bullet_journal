// Will be the utility function that will check if user is logged in otherwise, it'll reroute them

const React = require('react');
const firebase = require('../../firebase.config');

function requireAuth(nextState, replace, callback) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    callback();
  });
}

module.exports = requireAuth;
