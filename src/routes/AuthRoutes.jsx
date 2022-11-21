import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {authPath, rootAuthPath, rootMainPath} from './paths';
import {PasswordConfirm, PasswordRecovery, SignIn, SignUp} from '../features/Auth';
import NotFound from '../shared/NotFound';

const AuthRoutes = () => {
  if (localStorage.token) return <Redirect to={rootMainPath} />;

  return (
    <Switch>
      <Redirect from={rootAuthPath} exact to={authPath.signIn.path} />
      <Route path={authPath.signIn.path} exact component={SignIn} />
      <Route path={authPath.signUp.path} exact component={SignUp} />
      <Route path={authPath.passRecovery.path} exact component={PasswordRecovery} />
      <Route path={authPath.passConfirm.path} exact component={PasswordConfirm} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default AuthRoutes;
