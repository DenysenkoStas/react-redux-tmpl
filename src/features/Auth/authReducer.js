import {AUTH} from './authActionTypes';

const INITIAL_STATE = {
  emailVerError: '',
  userInfo: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH.EMAIL_VER_FAIL:
      return {...state, emailVerError: action?.error?.response?.data?.security_token};

    case AUTH.USER_INFO_SUCCESS:
      return {...state, userInfo: action?.payload?.data};
    default:
      return state;
  }
}
