import {
  AccordionMUIExample,
  ButtonMUIExample,
  CheckboxMUIExample,
  DatePickerMUIExample,
  DialogMUIExample,
  ErrorBoundaryExample,
  IconButtonMUIExample,
  InputMUIExample,
  LoaderMUIExample,
  MultiSelectMUIExample,
  NotFoundExample,
  PaginationExample,
  RadioMUIExample,
  ReactHookFormExample,
  ReactToastifyExample,
  ReCaptchaV2Example,
  SelectComponentExample,
  SkeletonMUIExample,
  SnackbarMUIExample,
  SwitchMUIExample,
  TabsExample,
  TooltipMUIExample,
  TransitionedBlockExample
} from '../features/Examples';

export const rootAuthPath = '/auth';
export const rootMainPath = '/main';

export const authPath = {
  signIn: `${rootAuthPath}/sign-in`,
  signUp: `${rootAuthPath}/sign-up`,
  signUpWizard: `${rootAuthPath}/sign-up-wizard`,
  passRecovery: `${rootAuthPath}/password-recovery`,
  passConfirm: `${rootAuthPath}/password-confirm`
};

export const mainPath = {
  dashboard: `${rootMainPath}/dashboard`,
  examples: `${rootMainPath}/examples`,
  navLink: `${rootMainPath}/nav-link`,
};

export const examplesPath = [
  {path: `${mainPath.examples}/accordion-mui`, name: 'AccordionMUI', component: AccordionMUIExample},
  {path: `${mainPath.examples}/button-mui`, name: 'ButtonMUI', component: ButtonMUIExample},
  {path: `${mainPath.examples}/checkbox-mui`, name: 'CheckboxMUI', component: CheckboxMUIExample},
  {path: `${mainPath.examples}/date-picker-mui`, name: 'DatePickerMUI', component: DatePickerMUIExample},
  {path: `${mainPath.examples}/dialog-mui`, name: 'DialogMUI', component: DialogMUIExample},
  {path: `${mainPath.examples}/error-boundary`, name: 'ErrorBoundary', component: ErrorBoundaryExample},
  {path: `${mainPath.examples}/icon-button-mui`, name: 'IconButtonMUI', component: IconButtonMUIExample},
  {path: `${mainPath.examples}/input-mui`, name: 'InputMUI', component: InputMUIExample},
  {path: `${mainPath.examples}/loader-mui`, name: 'LoaderMUI', component: LoaderMUIExample},
  {path: `${mainPath.examples}/multi-select-mui`, name: 'MultiSelectMUI', component: MultiSelectMUIExample},
  {path: `${mainPath.examples}/not-found`, name: 'NotFound', component: NotFoundExample},
  {path: `${mainPath.examples}/pagination`, name: 'Pagination', component: PaginationExample},
  {path: `${mainPath.examples}/radio-mui`, name: 'RadioMUI', component: RadioMUIExample},
  {path: `${mainPath.examples}/react-hook-form`, name: 'React Hook Form', component: ReactHookFormExample},
  {path: `${mainPath.examples}/react-toastify`, name: 'React-Toastify', component: ReactToastifyExample},
  {path: `${mainPath.examples}/re-captcha-v2`, name: 'ReCaptchaV2', component: ReCaptchaV2Example},
  {path: `${mainPath.examples}/select-component`, name: 'SelectComponent', component: SelectComponentExample},
  {path: `${mainPath.examples}/skeleton-mui`, name: 'SkeletonMUI', component: SkeletonMUIExample},
  {path: `${mainPath.examples}/snackbar-mui`, name: 'SnackbarMUI', component: SnackbarMUIExample},
  {path: `${mainPath.examples}/switch-mui`, name: 'SwitchMUI', component: SwitchMUIExample},
  {path: `${mainPath.examples}/tabs`, name: 'Tabs', component: TabsExample},
  {path: `${mainPath.examples}/tooltip-mui`, name: 'TooltipMUI', component: TooltipMUIExample},
  {path: `${mainPath.examples}/transitioned-block`, name: 'TransitionedBlock', component: TransitionedBlockExample}
];
