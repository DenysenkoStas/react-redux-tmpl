import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Examples from '../features/Examples';
import Dashboard from '../features/Dashboard';
import {rootMainPath, rootAuthPath, mainPath} from './paths';
import NotFound from '../shared/NotFound';

const MainRoutes = () => {
  if (!localStorage.token) return <Redirect to={rootAuthPath} />;

  return (
    <Switch>
      <Redirect from={rootMainPath} exact to={mainPath.dashboard} />
      <Route path={mainPath.dashboard} component={Dashboard} />
      <Route path={mainPath.examples} component={Examples} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default MainRoutes;
