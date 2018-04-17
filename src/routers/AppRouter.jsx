import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Dashboard from "../components/Dashboard/Dashboard";

export const history = createHistory();

const AppRouter = () => (
  <Router history = { history }>
    <div>
      <Switch>
        <Route path = '/dashboard' exact = {true} component = {Dashboard} /> 
        <Redirect path='/index' to = {{ pathname: '/dashboard' }} />>
        <Redirect path='/' to = {{ pathname: '/dashboard' }} />>
      </Switch>
    </div>
  </Router>
)

export default AppRouter;