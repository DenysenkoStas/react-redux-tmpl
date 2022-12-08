import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ReCaptchaV2.module.scss';

export const captchaReset = () => window.grecaptcha.reset();

const ReCaptchaV2 = ({
  center = false,
  className = '',
  onChange,
  reduxForm = false,
  siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  theme = 'light',
}) => {
  return (
    <ReCAPTCHA
      className={`${styles.root}${center ? ` ${styles.positionCenter}` : ''}${className && ` ${className}`}`}
      sitekey={siteKey}
      onChange={reduxForm ? input.onChange : onChange}
      theme={theme}
    />
  );
};

ReCaptchaV2.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  reduxForm: PropTypes.bool,
  siteKey: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default ReCaptchaV2;
