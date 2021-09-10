import React from 'react';
import {Checkbox} from '@material-ui/core';

import './CheckboxMUI.scss';

const CheckboxMUI = ({className, color = 'primary', defaultChecked}) => {
  return (
    <Checkbox
      className={className}
      classes={{
        root: 'checkbox-mui',
      }}
      color={color}
      defaultChecked={defaultChecked}
    />
  );
};

export default CheckboxMUI;
