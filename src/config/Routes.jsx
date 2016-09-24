import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import App from '../components/App.jsx';
import requireAuth from '../utils/Auth.js';
import Dashboard from '../components/dashboard/Dashboard.jsx';
import Active from '../components/dashboard/active/Active.jsx';
import Snooze from '../components/dashboard/snoozed/Snooze.jsx';
import Archive from '../components/dashboard/archive/Archive.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/:userId" component={App} onEnter={requireAuth}>
          <IndexRoute component={Dashboard} />
          <Route path="/:active" component={Active} />
          <Route path="/:snooze" component={Snooze} />
          <Route path="/:archive" component={Archive} />}
        </Route>
      </Route>
    </Router>
  );
};

export default Routes;
