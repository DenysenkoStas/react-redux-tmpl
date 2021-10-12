import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {authPath, rootAuthPath, rootMainPath} from './paths';
import {PasswordConfirm, PasswordRecovery, SignIn, SignUp} from '../features/Auth';
import NotFound from '../shared/NotFound';

const AuthRoutes = () => {
  if (localStorage.token) return <Redirect to={rootMainPath} />;

  return (
    <Switch>
      <Redirect from={rootAuthPath} exact to={authPath.signIn} />
      <Route path={authPath.signIn} exact component={SignIn} />
      <Route path={authPath.signUp} exact component={SignUp} />
      {/*<Route path={authPath.signUpWizard} exact component={SignUpWizard} />*/}
      <Route path={authPath.passRecovery} exact component={PasswordRecovery} />
      <Route path={authPath.passConfirm} exact component={PasswordConfirm} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default AuthRoutes;
