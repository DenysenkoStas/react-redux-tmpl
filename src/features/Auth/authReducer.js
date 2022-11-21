import {AUTH} from './authActionTypes';

const INITIAL_STATE = {
  signInError: {},
  signUpError: {},
  emailVerError: '',
  passRecoveryError: {},
  passConfirmError: {},
  userInfo: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH.SIGN_IN_FAIL:
      return {...state, signInError: action?.error?.response?.data};
    case AUTH.SIGN_UP_FAIL:
      return {...state, signUpError: action?.error?.response?.data};
    case AUTH.EMAIL_VER_FAIL:
      return {...state, emailVerError: action?.error?.response?.data?.security_token};
    case AUTH.PASS_RECOVERY_FAIL:
      return {...state, passRecoveryError: action?.error?.response?.data};
    case AUTH.PASS_CONFIRM_FAIL:
      return {...state, passConfirmError: action?.error?.response?.data};

    case AUTH.USER_INFO_SUCCESS:
      return {...state, userInfo: action?.payload?.data};
    default:
      return state;
  }
}
