import React from 'react';
import {Switch} from '@material-ui/core';

import './SwitchMUI.scss';

const SwitchMUI = ({className, color = 'primary', defaultChecked}) => {
  return (
    <Switch
      className={className}
      classes={{
        root: 'switch-mui',
      }}
      color={color}
      defaultChecked={defaultChecked}
    />
  );
};

export default SwitchMUI;
