import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {rootMainPath, rootAuthPath, mainPath} from './paths';
import Examples from '../features/Examples';
import Dashboard from '../features/Dashboard';
import NotFound from '../shared/NotFound';

const MainRoutes = () => {
  if (!localStorage.token) return <Redirect to={rootAuthPath} />;

  return (
    <Switch>
      <Redirect from={rootMainPath} exact to={mainPath.dashboard.path} />
      <Route path={mainPath.dashboard.path} component={Dashboard} />
      <Route path={mainPath.examples.path} component={Examples} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default MainRoutes;
