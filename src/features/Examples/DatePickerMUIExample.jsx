import React, {useState} from 'react';
import dayjs from 'dayjs';
import {TextField} from '@mui/material';
import {ExampleLayout} from './Examples';
import DatePickerMUI from '../../shared/DatePickerMUI';

const DatePickerMUIExample = () => {
  const [date, setDate] = useState(dayjs(new Date()));
  const [nullDate, setNullDate] = useState(null);

  return (
    <ExampleLayout
      propsList='onChange, renderInput, acceptRegex, actionBarButtons, className, closeOnSelect, components,
    componentsProps, dayOfWeekFormatter, defaultCalendarMonth, desktopModeMediaQuery, DialogProps, disabled,
    disableFuture, disableHighlightToday, disableMaskedInput, disableOpenPicker, disablePast, getOpenDialogAriaText,
    getShouldDisableDateError, helperText, InputAdornmentProps, inputFormat, inputRef, inputVariant, label, loading,
    mask, maxDate, minDate, onAccept, onClose, onError, onMonthChange, onOpen, onViewChange, onYearChange, open,
    OpenPickerButtonProps, openTo, orientation, PaperProps, placeholder, PopperProps, readOnly, reduceAnimations,
    renderDay, renderLoading, rifmFormatter, shouldDisableDate, shouldDisableMonth, shouldDisableYear,
    showDaysOutsideCurrentMonth, showToolbar, ToolbarComponent, toolbarFormat, toolbarPlaceholder, toolbarTitle,
    TransitionComponent, value, views'
    >
      <p className='mb-10 mt-25'>renderInput={'{(props) => <TextField {...props} />}'}</p>
      <div className='flex gap-25'>
        <DatePickerMUI renderInput={(props) => <TextField {...props} />} value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>
        actionBarButtons={'{["cancel", "clear", "today", "accept"]}'} closeOnSelect={'{false}'}
      </p>
      <div className='flex gap-25'>
        <DatePickerMUI
          actionBarButtons={['cancel', 'clear', 'today', 'accept']}
          closeOnSelect={false}
          value={date}
          onChange={setDate}
        />
      </div>

      <p className='mb-10 mt-25'>disabled / disableFuture / disableHighlightToday / disableOpenPicker</p>
      <div className='flex gap-25'>
        <DatePickerMUI disabled value={date} onChange={setDate} />
        <DatePickerMUI disableFuture value={date} onChange={setDate} />
        <DatePickerMUI disableHighlightToday value={date} onChange={setDate} />
        <DatePickerMUI disableOpenPicker value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>disablePast / helperText="Helper text" / inputFormat="YYYY-DD-MM"</p>
      <div className='flex gap-25'>
        <DatePickerMUI disablePast value={date} onChange={setDate} />
        <DatePickerMUI helperText='Helper text' value={date} onChange={setDate} />
        <DatePickerMUI inputFormat='YYYY-DD-MM' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>inputVariant="outlined / filled / standard"</p>
      <div className='flex gap-25'>
        <DatePickerMUI inputVariant='outlined' value={date} onChange={setDate} />
        <DatePickerMUI inputVariant='filled' value={date} onChange={setDate} />
        <DatePickerMUI inputVariant='standard' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>maxDate="2023-03-13" / minDate="2023-01-13"</p>
      <div className='flex gap-25'>
        <DatePickerMUI maxDate='2023-03-13' value={date} onChange={setDate} />
        <DatePickerMUI minDate='2023-01-13' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>openTo="date / year / month"</p>
      <div className='flex gap-25'>
        <DatePickerMUI openTo='day' value={date} onChange={setDate} />
        <DatePickerMUI openTo='year' value={date} onChange={setDate} />
        <DatePickerMUI openTo='month' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>orientation="portrait / landscape"</p>
      <div className='flex gap-25'>
        <DatePickerMUI orientation='portrait' value={date} onChange={setDate} />
        <DatePickerMUI orientation='landscape' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>label="Label" / placeholder="Placeholder" / readOnly / showDaysOutsideCurrentMonth</p>
      <div className='flex gap-25'>
        <DatePickerMUI label='Label' value={date} onChange={setDate} />
        <DatePickerMUI placeholder='Placeholder' value={nullDate} onChange={setNullDate} />
        <DatePickerMUI readOnly value={date} onChange={setDate} />
        <DatePickerMUI showDaysOutsideCurrentMonth value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>
        showToolbar={'{false}'} / toolbarFormat="DD/MM/YYYY" / toolbarPlaceholder="Placeholder" / toolbarTitle="Title"
      </p>
      <div className='flex gap-25'>
        <DatePickerMUI showToolbar={false} value={date} onChange={setDate} />
        <DatePickerMUI toolbarFormat='DD/MM/YYYY' value={date} onChange={setDate} />
        <DatePickerMUI toolbarPlaceholder='Placeholder' value={nullDate} onChange={setNullDate} />
        <DatePickerMUI toolbarTitle='Title' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>views={'{["year",' + ' "month"]}'}</p>
      <div className='flex gap-25'>
        <DatePickerMUI openTo='year' views={['year', 'month']} value={date} onChange={setDate} />
      </div>
    </ExampleLayout>
  );
};

export default DatePickerMUIExample;
