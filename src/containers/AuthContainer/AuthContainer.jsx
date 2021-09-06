import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import {authPath, rootAuthPath, rootMainPath} from '../../helpers/const';
import {PasswordConfirm, PasswordRecovery, SignIn, SignUp} from '../../features/Auth';
import NotFound from '../../shared/NotFound';

import './AuthContainer.scss';

import {ReactComponent as AuthLogo} from '../../assets/images/logo.svg';

const AuthContainer = () => {
  if (localStorage.token) return <Redirect to={rootMainPath} />;

  return (
    <main className='auth-page'>
      <div className='auth-page__bg p-40 w-35'>
        <Link className='auth-page__logo-link good-hover' to={authPath.signIn}>
          <AuthLogo className='auth-page__logo' />
        </Link>
      </div>
      <div className='auth-page__content p-15 w-65'>
        <Switch>
          <Redirect from={rootAuthPath} exact to={authPath.signIn} />
          <Route path={authPath.signIn} exact component={SignIn} />
          <Route path={authPath.signUp} exact component={SignUp} />
          <Route path={authPath.signUpAdmin} exact component={SignUp} />
          <Route path={authPath.passRecovery} exact component={PasswordRecovery} />
          <Route path={authPath.passConfirm} exact component={PasswordConfirm} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </main>
  );
};

export default AuthContainer;
