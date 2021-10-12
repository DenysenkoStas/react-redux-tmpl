import React from 'react';
import DateFnsUtils from '@date-io/dayjs';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

import './DatePickerMUI.scss';

const DatePickerMUI = ({
  label,
  value,
  onChange,
  format = 'DD/MM/YYYY',
  views = ['year', 'month', 'date'],
  variant = 'inline',
  orientation,
  clearable
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        autoOk
        clearable={clearable}
        format={format}
        views={views}
        variant={variant}
        orientation={orientation}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerMUI;
