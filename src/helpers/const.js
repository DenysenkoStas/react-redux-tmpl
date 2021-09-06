export const rootAuthPath = '/auth';
export const rootMainPath = '/main';

export const authPath = {
  signIn: `${rootAuthPath}/sign-in`,
  signUp: `${rootAuthPath}/sign-up`,
  signUpAdmin: `${rootAuthPath}/sign-up-admin`,
  passRecovery: `${rootAuthPath}/password-recovery`,
  passConfirm: `${rootAuthPath}/password-confirm`,
};

export const mainPath = {
  dashboard: `${rootMainPath}/dashboard`,
  components: `${rootMainPath}/components`,
  navLink: `${rootMainPath}/nav-link`,
  navLink2: `${rootMainPath}/nav-link-2`,
  navLink3: `${rootMainPath}/nav-link-3`,
};

export const componentsPath = {
  buttonMUI: `${mainPath.components}/button-mui`,
  dialogMUI: `${mainPath.components}/dialog-mui`,
  iconButtonMUI: `${mainPath.components}/icon-button-mui`,
  inputMUI: `${mainPath.components}/input-mui`,
  loaderMUI: `${mainPath.components}/loader-mui`,
  notFound: `${mainPath.components}/not-found`,
  pagination: `${mainPath.components}/pagination`,
  popperMUI: `${mainPath.components}/popper-mui`,
  reCaptchaV2: `${mainPath.components}/re-captcha-v2`,
  selectComponent: `${mainPath.components}/select-component`,
  skeletonMUI: `${mainPath.components}/skeleton-mui`,
  snackbarMUI: `${mainPath.components}/snackbar-mui`,
  tooltipMUI: `${mainPath.components}/tooltip-mui`,
  transitionedBlock: `${mainPath.components}/transitioned-block`,
};
