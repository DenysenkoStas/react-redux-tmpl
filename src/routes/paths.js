import AccordionMUIExample from '../features/Components/Examples/AccordionMUIExample';
import ButtonMUIExample from '../features/Components/Examples/ButtonMUIExample';
import CheckboxMUIExample from '../features/Components/Examples/CheckboxMUIExample';
import DialogMUIExample from '../features/Components/Examples/DialogMUIExample';
import IconButtonMUIExample from '../features/Components/Examples/IconButtonMUIExample';
import InputMUIExample from '../features/Components/Examples/InputMUIExample';
import LoaderMUIExample from '../features/Components/Examples/LoaderMUIExample';
import NotFoundExample from '../features/Components/Examples/NotFoundExample';
import PaginationExample from '../features/Components/Examples/PaginationExample';
import PopperMUIExample from '../features/Components/Examples/PopperMUIExample';
import MultiSelectMUIExample from '../features/Components/Examples/MultiSelectMUIExample';
import ReactHookFormExample from '../features/Components/Examples/ReactHookFormExample';
import ReCaptchaV2Example from '../features/Components/Examples/ReCaptchaV2Example';
import SelectComponentExample from '../features/Components/Examples/SelectComponentExample';
import SkeletonMUIExample from '../features/Components/Examples/SkeletonMUIExample';
import SnackbarMUIExample from '../features/Components/Examples/SnackbarMUIExample';
import SwitchMUIExample from '../features/Components/Examples/SwitchMUIExample';
import TabsExample from '../features/Components/Examples/TabsExample';
import TooltipMUIExample from '../features/Components/Examples/TooltipMUIExample';
import TransitionedBlockExample from '../features/Components/Examples/TransitionedBlockExample';
import DatePickerMUIExample from '../features/Components/Examples/DatePickerMUIExample';

export const rootAuthPath = '/auth';
export const rootMainPath = '/main';

export const authPath = {
  signIn: `${rootAuthPath}/sign-in`,
  signUp: `${rootAuthPath}/sign-up`,
  signUpWizard: `${rootAuthPath}/sign-up-wizard`,
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

export const componentsPath = [
  {path: `${mainPath.components}/accordion-mui`, name: 'AccordionMUI', component: AccordionMUIExample},
  {path: `${mainPath.components}/button-mui`, name: 'ButtonMUI', component: ButtonMUIExample},
  {path: `${mainPath.components}/checkbox-mui`, name: 'CheckboxMUI', component: CheckboxMUIExample},
  {path: `${mainPath.components}/date-picker-mui`, name: 'DatePickerMUI', component: DatePickerMUIExample},
  {path: `${mainPath.components}/dialog-mui`, name: 'DialogMUI', component: DialogMUIExample},
  {path: `${mainPath.components}/icon-button-mui`, name: 'IconButtonMUI', component: IconButtonMUIExample},
  {path: `${mainPath.components}/input-mui`, name: 'InputMUI', component: InputMUIExample},
  {path: `${mainPath.components}/loader-mui`, name: 'LoaderMUI', component: LoaderMUIExample},
  {path: `${mainPath.components}/not-found`, name: 'NotFound', component: NotFoundExample},
  {path: `${mainPath.components}/pagination`, name: 'Pagination', component: PaginationExample},
  {path: `${mainPath.components}/popper-mui`, name: 'PopperMUI', component: PopperMUIExample},
  {path: `${mainPath.components}/multi-select-mui`, name: 'MultiSelectMUI', component: MultiSelectMUIExample},
  {path: `${mainPath.components}/react-hook-form`, name: 'React Hook Form', component: ReactHookFormExample},
  {path: `${mainPath.components}/re-captcha-v2`, name: 'ReCaptchaV2', component: ReCaptchaV2Example},
  {path: `${mainPath.components}/select-component`, name: 'SelectComponent', component: SelectComponentExample},
  {path: `${mainPath.components}/skeleton-mui`, name: 'SkeletonMUI', component: SkeletonMUIExample},
  {path: `${mainPath.components}/snackbar-mui`, name: 'SnackbarMUI', component: SnackbarMUIExample},
  {path: `${mainPath.components}/switch-mui`, name: 'SwitchMUI', component: SwitchMUIExample},
  {path: `${mainPath.components}/tabs`, name: 'Tabs', component: TabsExample},
  {path: `${mainPath.components}/tooltip-mui`, name: 'TooltipMUI', component: TooltipMUIExample},
  {path: `${mainPath.components}/transitioned-block`, name: 'TransitionedBlock', component: TransitionedBlockExample}
];
