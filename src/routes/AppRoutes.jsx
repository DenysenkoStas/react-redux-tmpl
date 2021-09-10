import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthContainer from '../containers/AuthContainer';
import MainContainer from '../containers/MainContainer';
import {rootMainPath, rootAuthPath} from '../helpers/const';

const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path='/'
        exact
        render={() => (localStorage.token ? <Redirect to={rootMainPath} /> : <Redirect to={rootAuthPath} />)}
      />
      <Route path={rootAuthPath} component={AuthContainer} />
      <Route path={rootMainPath} component={MainContainer} />
    </Switch>
  );
};

export default AppRoutes;
