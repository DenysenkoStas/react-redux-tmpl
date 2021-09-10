import React from 'react';
import {Link} from 'react-router-dom';
import {authPath} from '../../helpers/const';
import AuthRoutes from '../../routes/AuthRoutes';

import './AuthContainer.scss';

import {ReactComponent as AuthLogo} from '../../assets/images/logo.svg';

const AuthContainer = () => {
  return (
    <main className='auth-page'>
      <div className='auth-page__bg p-40 w-35'>
        <Link className='auth-page__logo-link good-hover' to={authPath.signIn}>
          <AuthLogo className='auth-page__logo' />
        </Link>
      </div>
      <div className='auth-page__content p-15 w-65'>
        <AuthRoutes />
      </div>
    </main>
  );
};

export default AuthContainer;
