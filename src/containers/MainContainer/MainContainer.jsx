import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {rootMainPath, mainPath, rootAuthPath} from '../../helpers/const';
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../../features/Dashboard';
import Components from '../../features/Components';
import NotFound from '../../shared/NotFound';

const MainContainer = () => {
  if (!localStorage.token) return <Redirect to={rootAuthPath} />;

  return (
    <>
      <Header />
      <Switch>
        <Redirect from={rootMainPath} exact to={mainPath.dashboard} />
        <Route path={mainPath.dashboard} component={Dashboard} />
        <Route path={mainPath.components} component={Components} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default MainContainer;
