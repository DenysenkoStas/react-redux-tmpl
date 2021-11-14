import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {history, setupStore} from './app/store';
import {StylesProvider} from '@material-ui/core';
import App from './app/App';
import DateFnsUtils from '@date-io/dayjs';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

const store = setupStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StylesProvider injectFirst>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
