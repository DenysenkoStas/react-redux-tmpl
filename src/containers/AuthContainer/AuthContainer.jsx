import React from 'react';
import SideBg from '../../layout/SideBg';
import AuthRoutes from '../../routes/AuthRoutes';

import './AuthContainer.scss';

const AuthContainer = () => {
  return (
    <main className='auth-page'>
      <SideBg />
      <div className='auth-page__content'>
        <AuthRoutes />
      </div>
    </main>
  );
};

export default AuthContainer;
