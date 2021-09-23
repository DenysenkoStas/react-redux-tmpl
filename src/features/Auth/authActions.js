import {AUTH} from './authActionTypes';

export function postSignIn(data) {
  return {
    type: AUTH.SIGN_IN,
    payload: {
      client: 'default',
      request: {
        url: `signin/`,
        method: 'post',
        data,
      },
    },
  };
}

export function postSignUp(data) {
  return {
    type: AUTH.SIGN_UP,
    payload: {
      client: 'default',
      request: {
        url: `sign-up/`,
        method: 'post',
        data,
      },
    },
  };
}

export function postEmailVer(data) {
  return {
    type: AUTH.EMAIL_VER,
    payload: {
      client: 'default',
      request: {
        url: `email-verification/`,
        method: 'post',
        data,
      },
    },
  };
}

export function postPassRecovery(data) {
  return {
    type: AUTH.PASS_RECOVERY,
    payload: {
      client: 'default',
      request: {
        url: `password-recovery/send-email/`,
        method: 'post',
        data,
      },
    },
  };
}

export function postPassConfirm(data) {
  return {
    type: AUTH.PASS_CONFIRM,
    payload: {
      client: 'default',
      request: {
        url: `password-recovery/`,
        method: 'post',
        data,
      },
    },
  };
}

export function getUserinfo() {
  return {
    type: AUTH.USER_INFO,
    payload: {
      client: 'default',
      request: {
        url: `user-info/`,
        method: 'get',
      },
    },
  };
}
