import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import authReducer from '../features/Auth/authReducer';
import {APP} from './appActionTypes';

const INITIAL_STATE = {
  loading: false,
  buttonLoading: false,
  errorSnack: false,
  errorSnackText: '',
  successSnack: '',
  successSnackText: ''
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP.LOADING:
      return {...state, loading: action.payload};
    case APP.BUTTON_LOADING:
      return {...state, buttonLoading: action.payload};
    case APP.ERROR_SNACK_OPEN:
      return {...state, errorSnack: true, errorSnackText: action.payload};
    case APP.ERROR_SNACK_CLOSE:
      return {...state, errorSnack: false};
    case APP.SUCCESS_SNACK_OPEN:
      return {...state, successSnack: true, successSnackText: action.payload};
    case APP.SUCCESS_SNACK_CLOSE:
      return {...state, successSnack: false};
    default:
      return state;
  }
};

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    app: appReducer,
  });

export default rootReducer;
