import React from 'react';
import SideBg from '../../layout/SideBg';
import AuthRoutes from '../../routes/AuthRoutes';
import styles from './AuthContainer.module.scss';

const AuthContainer = () => {
  return (
    <main className={styles.root}>
      <SideBg />
      <div className={styles.content}>
        <AuthRoutes />
      </div>
    </main>
  );
};

export default AuthContainer;
