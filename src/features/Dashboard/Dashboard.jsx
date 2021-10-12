import React from 'react';
import ButtonMUI from '../../shared/ButtonMUI';
import {notifyError, notifySuccess} from '../../helpers/notifySnack';

import style from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <main className={`${style.dashboard} page-wrap`}>
      <div className={`${style.dashboardInner} container py-24`}>
        <h1>Dashboard</h1>
        <ButtonMUI onClick={() => notifySuccess('Success message')}>Success test</ButtonMUI>
        <ButtonMUI color='secondary' onClick={() => notifyError('Error message')}>
          Error test
        </ButtonMUI>
      </div>
    </main>
  );
};

export default Dashboard;
