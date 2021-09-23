import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {notifyError, notifySuccess} from '../helpers/notifySnack';
import ErrorBoundary from '../shared/ErrorBoundary';
import {ScrollToTop} from '../helpers/functions';
import AppRoutes from '../routes/AppRoutes';
import {toast, ToastContainer} from 'react-toastify';

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
    <ErrorBoundary>
      <ScrollToTop />
      <AppRoutes />
      <ToastContainer />
    </ErrorBoundary>
  );
};

export default App;
