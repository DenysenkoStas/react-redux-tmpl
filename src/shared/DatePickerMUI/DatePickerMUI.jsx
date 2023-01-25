import React, {useState} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import InputMUI from '../InputMUI';
import styles from './DatePickerMUI.module.scss';

const inputHandler = (error, helperText, placeholder, inputVariant) => (params) => {
  return (
    <InputMUI
      {...{...params?.InputProps, ...params}}
      error={error}
      helperText={error || helperText || params?.InputProps?.helperText}
      inputProps={{
        ...params?.inputProps,
        placeholder: placeholder || params?.inputProps?.placeholder
      }}
      variant={inputVariant || params?.InputProps?.variant}
    />
  );
};

const errorHandler = (setError, minDate, maxDate, inputFormat, getShouldDisableDateError) => (reason, value) => {
  switch (reason) {
    case 'invalidDate':
      setError('Invalid date format');
      break;
    case 'disablePast':
      setError('Past date are not allowed');
      break;
    case 'disableFuture':
      setError('Future date are not allowed');
      break;
    case 'maxDate':
      setError(`Maximum date is ${dayjs(maxDate).format(inputFormat)}`);
      break;
    case 'minDate':
      setError(`Minimum date is ${dayjs(minDate).format(inputFormat)}`);
      break;
    case 'shouldDisableDate':
      setError(getShouldDisableDateError(value));
      break;
    default:
      setError(null);
  }
};

const DatePickerMUI = ({
  onChange,
  renderInput,
  acceptRegex,
  actionBarButtons,
  className = '',
  closeOnSelect,
  components,
  componentsProps,
  dayOfWeekFormatter,
  defaultCalendarMonth,
  desktopModeMediaQuery,
  DialogProps,
  disabled = false,
  disableFuture = false,
  disableHighlightToday = false,
  disableMaskedInput = false,
  disableOpenPicker = false,
  disablePast = false,
  getOpenDialogAriaText,
  getShouldDisableDateError,
  helperText,
  InputAdornmentProps,
  inputFormat = 'DD/MM/YYYY',
  inputRef,
  inputVariant,
  label,
  loading = false,
  mask,
  maxDate,
  minDate,
  onAccept,
  onClose,
  onError,
  onMonthChange,
  onOpen,
  onViewChange,
  onYearChange,
  open,
  OpenPickerButtonProps,
  openTo = 'day',
  orientation,
  PaperProps,
  placeholder,
  PopperProps,
  readOnly,
  reduceAnimations,
  renderDay,
  renderLoading,
  rifmFormatter,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  showDaysOutsideCurrentMonth = false,
  showToolbar = true,
  ToolbarComponent,
  toolbarFormat,
  toolbarPlaceholder,
  toolbarTitle,
  TransitionComponent,
  value,
  views = ['year', 'month', 'day'],
  ...props
}) => {
  const [error, setError] = useState(null);

  return (
    <DatePicker
      {...props}
      onChange={onChange}
      renderInput={renderInput || inputHandler(error, helperText, placeholder, inputVariant)}
      acceptRegex={acceptRegex}
      className={`${styles.root}${className && ` ${className}`}`}
      closeOnSelect={closeOnSelect}
      components={components}
      componentsProps={{
        actionBar: {
          actions: actionBarButtons
        },
        ...componentsProps
      }}
      dayOfWeekFormatter={dayOfWeekFormatter}
      defaultCalendarMonth={defaultCalendarMonth}
      desktopModeMediaQuery={desktopModeMediaQuery}
      DialogProps={{classes: {root: 'MuiPickersDialog-root'}, ...DialogProps}}
      disabled={disabled}
      disableFuture={disableFuture}
      disableHighlightToday={disableHighlightToday}
      disableMaskedInput={disableMaskedInput}
      disableOpenPicker={disableOpenPicker}
      disablePast={disablePast}
      getOpenDialogAriaText={getOpenDialogAriaText}
      InputAdornmentProps={InputAdornmentProps}
      inputFormat={inputFormat}
      inputRef={inputRef}
      label={label}
      loading={loading}
      mask={mask}
      maxDate={maxDate}
      minDate={minDate}
      onAccept={onAccept}
      onClose={onClose}
      onError={onError || errorHandler(setError, minDate, maxDate, inputFormat, getShouldDisableDateError)}
      onMonthChange={onViewChange}
      onOpen={onOpen}
      onViewChange={onViewChange}
      onYearChange={onYearChange}
      open={open}
      OpenPickerButtonProps={OpenPickerButtonProps}
      openTo={openTo}
      orientation={orientation}
      PaperProps={PaperProps}
      PopperProps={{
        placement: 'bottom-start',
        ...PopperProps
      }}
      readOnly={readOnly}
      reduceAnimations={reduceAnimations}
      renderDay={renderDay}
      renderLoading={renderLoading}
      rifmFormatter={rifmFormatter}
      shouldDisableDate={shouldDisableDate}
      shouldDisableMonth={shouldDisableMonth}
      shouldDisableYear={shouldDisableYear}
      showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
      showToolbar={showToolbar}
      ToolbarComponent={ToolbarComponent}
      toolbarFormat={toolbarFormat}
      toolbarPlaceholder={toolbarPlaceholder}
      toolbarTitle={toolbarTitle}
      TransitionComponent={TransitionComponent}
      value={value}
      views={views}
    />
  );
};

DatePickerMUI.muiName = 'DatePicker';
DatePickerMUI.propTypes = {
  onChange: PropTypes.func.isRequired,
  renderInput: PropTypes.func,
  acceptRegex: PropTypes.instanceOf(RegExp),
  actionBarButtons: PropTypes.arrayOf(PropTypes.oneOf(['accept', 'cancel', 'clear', 'today'])),
  className: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  components: PropTypes.object,
  componentsProps: PropTypes.object,
  dayOfWeekFormatter: PropTypes.func,
  defaultCalendarMonth: PropTypes.any,
  desktopModeMediaQuery: PropTypes.string,
  DialogProps: PropTypes.object,
  disabled: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disableHighlightToday: PropTypes.bool,
  disableMaskedInput: PropTypes.bool,
  disableOpenPicker: PropTypes.bool,
  disablePast: PropTypes.bool,
  getOpenDialogAriaText: PropTypes.func,
  getShouldDisableDateError: PropTypes.func,
  helperText: PropTypes.node,
  InputAdornmentProps: PropTypes.object,
  inputFormat: PropTypes.string,
  inputRef: PropTypes.func,
  inputVariant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  label: PropTypes.node,
  loading: PropTypes.bool,
  mask: PropTypes.string,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  onAccept: PropTypes.func,
  onClose: PropTypes.func,
  onError: PropTypes.func,
  onMonthChange: PropTypes.func,
  onOpen: PropTypes.func,
  onViewChange: PropTypes.func,
  onYearChange: PropTypes.func,
  open: PropTypes.bool,
  OpenPickerButtonProps: PropTypes.object,
  openTo: PropTypes.oneOf(['day', 'month', 'year']),
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  PaperProps: PropTypes.object,
  placeholder: PropTypes.string,
  PopperProps: PropTypes.object,
  readOnly: PropTypes.bool,
  reduceAnimations: PropTypes.bool,
  renderDay: PropTypes.func,
  renderLoading: PropTypes.func,
  rifmFormatter: PropTypes.func,
  shouldDisableDate: PropTypes.func,
  shouldDisableMonth: PropTypes.func,
  shouldDisableYear: PropTypes.func,
  showDaysOutsideCurrentMonth: PropTypes.bool,
  showToolbar: PropTypes.bool,
  ToolbarComponent: PropTypes.elementType,
  toolbarFormat: PropTypes.string,
  toolbarPlaceholder: PropTypes.node,
  toolbarTitle: PropTypes.node,
  TransitionComponent: PropTypes.elementType,
  value: PropTypes.any,
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']))
};

export default DatePickerMUI;
