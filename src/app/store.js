import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {multiClientMiddleware} from 'redux-axios-middleware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import axios from 'axios';
import {API_BASE_URL, API_SECOND_URL} from '../config';

const api = {
  default: {
    client: axios.create({
      baseURL: API_BASE_URL,
      responseType: 'json',
    }),
  },
  second: {
    client: axios.create({
      baseURL: API_SECOND_URL,
      responseType: 'json',
    }),
  },
};

const axiosMiddlewareOptions = {
  interceptors: {
    request: [
      (action, config) => {
        if (localStorage.token || localStorage.token_res) {
          let token = localStorage.token ? localStorage.token : localStorage.token_res;
          config.headers['Authorization'] = 'Token ' + token;
        }
        return config;
      },
    ],
    response: [
      {
        success: ({dispatch}, response) => {
          return response;
        },
        error: ({dispatch}, error) => {
          if (error.response.status === 401) {
            localStorage.clear();
          }
          return Promise.reject(error);
        },
      },
    ],
  },
};

export const history = createBrowserHistory();

export const setupStore = () => {
  const appRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const createStoreWithMiddleware = applyMiddleware(
    multiClientMiddleware(api, axiosMiddlewareOptions),
    appRouterMiddleware,
    sagaMiddleware,
  )(createStore);

  const store = createStoreWithMiddleware(
    rootReducer(history),
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
