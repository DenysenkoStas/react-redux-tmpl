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
  SelectComponentExample,
  SkeletonMUIExample,
  SwitchMUIExample,
  TableExample,
  TabsExample,
  TooltipMUIExample,
  TransitionedBlockExample
} from '../features/Examples';

export const rootAuthPath = '/auth';
export const rootMainPath = '/main';

export const authPath = {
  signIn: {path: `${rootAuthPath}/sign-in`, name: 'Sign In'},
  signUp: {path: `${rootAuthPath}/sign-up`, name: 'Sign up'},
  passRecovery: {path: `${rootAuthPath}/password-recovery`, name: 'Password recovery'},
  passConfirm: {path: `${rootAuthPath}/password-confirm`, name: 'Reset password'}
};

export const mainPath = {
  dashboard: {path: `${rootMainPath}/dashboard`, name: 'Dashboard'},
  examples: {path: `${rootMainPath}/examples`, name: 'Examples'},
  navLink: {path: `${rootMainPath}/nav-link`, name: 'Nav link'}
};

export const examplesPath = {
  accordionMUI: {
    path: `${mainPath.examples.path}/accordion-mui`,
    name: 'AccordionMUI',
    component: AccordionMUIExample
  },
  buttonMUI: {path: `${mainPath.examples.path}/button-mui`, name: 'ButtonMUI', component: ButtonMUIExample},
  checkboxMUI: {path: `${mainPath.examples.path}/checkbox-mui`, name: 'CheckboxMUI', component: CheckboxMUIExample},
  datePickerMUI: {
    path: `${mainPath.examples.path}/date-picker-mui`,
    name: 'DatePickerMUI',
    component: DatePickerMUIExample
  },
  dialogMUI: {path: `${mainPath.examples.path}/dialog-mui`, name: 'DialogMUI', component: DialogMUIExample},
  errorBoundary: {
    path: `${mainPath.examples.path}/error-boundary`,
    name: 'ErrorBoundary',
    component: ErrorBoundaryExample
  },
  iconButtonMUI: {
    path: `${mainPath.examples.path}/icon-button-mui`,
    name: 'IconButtonMUI',
    component: IconButtonMUIExample
  },
  inputMUI: {path: `${mainPath.examples.path}/input-mui`, name: 'InputMUI', component: InputMUIExample},
  loaderMUI: {path: `${mainPath.examples.path}/loader-mui`, name: 'LoaderMUI', component: LoaderMUIExample},
  multiSelectMUI: {
    path: `${mainPath.examples.path}/multi-select-mui`,
    name: 'MultiSelectMUI',
    component: MultiSelectMUIExample
  },
  notFound: {path: `${mainPath.examples.path}/not-found`, name: 'NotFound', component: NotFoundExample},
  pagination: {path: `${mainPath.examples.path}/pagination`, name: 'Pagination', component: PaginationExample},
  radioMUI: {path: `${mainPath.examples.path}/radio-mui`, name: 'RadioMUI', component: RadioMUIExample},
  reactHookForm: {
    path: `${mainPath.examples.path}/react-hook-form`,
    name: 'React Hook Form',
    component: ReactHookFormExample
  },
  reactToastify: {
    path: `${mainPath.examples.path}/react-toastify`,
    name: 'React-Toastify',
    component: ReactToastifyExample
  },
  selectComponent: {
    path: `${mainPath.examples.path}/select-component`,
    name: 'SelectComponent',
    component: SelectComponentExample
  },
  skeletonMUI: {path: `${mainPath.examples.path}/skeleton-mui`, name: 'SkeletonMUI', component: SkeletonMUIExample},
  switchMUI: {path: `${mainPath.examples.path}/switch-mui`, name: 'SwitchMUI', component: SwitchMUIExample},
  table: {path: `${mainPath.examples.path}/table`, name: 'Table', component: TableExample},
  tabs: {path: `${mainPath.examples.path}/tabs`, name: 'Tabs', component: TabsExample},
  tooltipMUI: {path: `${mainPath.examples.path}/tooltip-mui`, name: 'TooltipMUI', component: TooltipMUIExample},
  transitionedBlock: {
    path: `${mainPath.examples.path}/transitioned-block`,
    name: 'TransitionedBlock',
    component: TransitionedBlockExample
  }
};
