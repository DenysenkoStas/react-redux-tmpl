import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {StyledEngineProvider} from '@mui/material/styles';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {history, setupStore} from './app/store';
import App from './app/App';

const store = setupStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StyledEngineProvider injectFirst>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </StyledEngineProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
