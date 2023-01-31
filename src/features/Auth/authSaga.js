import {takeEvery} from 'redux-saga/effects';
import {disableButtonLoader, disableLoader, enableButtonLoader, enableLoader, openErrorSnack} from '../../app/rootSaga';

export function* handleAuthSnacks() {
  yield takeEvery('USER_INFO_FAIL', openErrorSnack);
  yield takeEvery('SIGN_IN_FAIL', openErrorSnack);
  yield takeEvery('SIGN_UP_FAIL', openErrorSnack);
  yield takeEvery('PASS_RECOVERY_FAIL', openErrorSnack);
  yield takeEvery('PASS_CONFIRM_FAIL', openErrorSnack);
}

export function* handleAuthLoaders() {
  yield takeEvery('SIGN_IN', enableButtonLoader);
  yield takeEvery('SIGN_IN_SUCCESS', disableButtonLoader);
  yield takeEvery('SIGN_IN_FAIL', disableButtonLoader);

  yield takeEvery('SIGN_UP', enableLoader);
  yield takeEvery('SIGN_UP_SUCCESS', disableLoader);
  yield takeEvery('SIGN_UP_FAIL', disableLoader);

  yield takeEvery('EMAIL_VER', enableLoader);
  yield takeEvery('EMAIL_VER_SUCCESS', disableLoader);
  yield takeEvery('EMAIL_VER_FAIL', disableLoader);

  yield takeEvery('PASS_RECOVERY', enableLoader);
  yield takeEvery('PASS_RECOVERY_SUCCESS', disableLoader);
  yield takeEvery('PASS_RECOVERY_FAIL', disableLoader);

  yield takeEvery('PASS_CONFIRM', enableLoader);
  yield takeEvery('PASS_CONFIRM_SUCCESS', disableLoader);
  yield takeEvery('PASS_CONFIRM_FAIL', disableLoader);
}
