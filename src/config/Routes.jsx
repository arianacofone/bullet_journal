import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import App from '../components/App.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/app" component={App} />
      </Route>
    </Router>
  );
};

export default Routes;
