import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import MainWebFrame from '../components/MainWebFrame/MainWebFrame'

export const history = createHistory();

const AppRouter = () => (
  <Router history = { history }>
    <div>
      <Switch>
        <Route path = '/dashboard' exact = {true} component = {MainWebFrame} /> 
        <Route path = '/Timeline Page' component = {MainWebFrame} />
        <Redirect path='/index' to = {{ pathname: '/dashboard' }} />
        {/* <Redirect path='/' to = {{ pathname: '/dashboard' }} /> */}
      </Switch>
    </div>
  </Router>
)

export default AppRouter;