import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import {notifyError, notifySuccess} from '../helpers/notifySnack';
import {ScrollToTop} from '../helpers/functions';
import {rootAuthPath, rootMainPath} from '../helpers/const';
import AuthContainer from '../containers/AuthContainer';
import MainContainer from '../containers/MainContainer';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/main.scss';

const App = () => {
  toast.configure();

  const {errorSnack, errorSnackText, successSnack, successSnackText} = useSelector(({app}) => app);

  useEffect(() => {
    if (errorSnack) {
      notifyError(errorSnackText);
    }
  }, [errorSnack]);

  useEffect(() => {
    if (successSnack) {
      notifySuccess(successSnackText);
    }
  }, [successSnack]);

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route
          path='/'
          exact
          render={() => (localStorage.token ? <Redirect to={rootMainPath} /> : <Redirect to={rootAuthPath} />)}
        />
        <Route path={rootAuthPath} component={AuthContainer} />
        <Route path={rootMainPath} component={MainContainer} />
      </Switch>
      <ToastContainer />
    </>
  );
};

export default App;
