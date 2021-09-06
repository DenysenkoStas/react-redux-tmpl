import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {setupStore, history} from './app/store';
import {StylesProvider} from '@material-ui/core';
import App from './app/App';

const store = setupStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
