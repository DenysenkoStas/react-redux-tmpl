import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {SignIn, SignUp, PasswordRecovery, PasswordConfirm} from '../features/Auth';
import {rootMainPath, rootAuthPath, authPath} from '../helpers/const';
import NotFound from '../shared/NotFound';

const AuthRoutes = () => {
  if (localStorage.token) return <Redirect to={rootMainPath} />;

  return (
    <Switch>
      <Redirect from={rootAuthPath} exact to={authPath.signIn} />
      <Route path={authPath.signIn} exact component={SignIn} />
      <Route path={authPath.signUp} exact component={SignUp} />
      <Route path={authPath.signUpAdmin} exact component={SignUp} />
      <Route path={authPath.passRecovery} exact component={PasswordRecovery} />
      <Route path={authPath.passConfirm} exact component={PasswordConfirm} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default AuthRoutes;
