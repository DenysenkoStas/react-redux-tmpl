import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './ReCaptchaV2.scss';

export const captchaReset = () => window.grecaptcha.reset();

const ReCaptchaV2 = ({input}) => {
    return (
        <ReCAPTCHA
            className='re-captcha-v2'
            sitekey='6LcPyr8bAAAAAOzukES36-GsPCVHFjyaZyxLJ6sO'
            onChange={input.onChange}
        />
    );
};

export default ReCaptchaV2;
