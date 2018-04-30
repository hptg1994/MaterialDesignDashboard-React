import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Dashboard from "../components/Dashboard/Dashboard";
import MainWebFrame from "../components/MainWebFrame/MainWebFrame";
import TimelinePage from '../components/Dashboard/TimelinePage';

export const history = createHistory();

const AppRouter = () => (
    <div className = 'displayContent'>
      {/* <Route path = '/' exact component = {MainWebFrame} /> */}
      <Switch>
        <Route path = '/dashboard' component = {Dashboard} /> 
        <Route path = '/Timeline Page' component = {TimelinePage} /> 
        <Redirect path='/index' to = {{ pathname: '/dashboard' }} />
      </Switch>
    </div>
)

export default AppRouter;