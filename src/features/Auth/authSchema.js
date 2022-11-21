import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Field is required'),
  password: yup.string().min(8, 'Min 8 characters').required('Field is required')
});

export const signUpSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Field is required'),
  password: yup.string().min(8, 'Min 8 characters').required('Field is required'),
  repeat_password: yup
    .string()
    .min(8, 'Min 8 characters')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});

export const passwordRecoverySchema = yup.object({
  email: yup.string().required('Required').email('Incorrect email')
});

export const passwordConfirmSchema = yup.object({
  password: yup.string().min(8, 'Min 8 characters').required('Field is required'),
  confirm_password: yup
    .string()
    .min(8, 'Min 8 characters')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});
