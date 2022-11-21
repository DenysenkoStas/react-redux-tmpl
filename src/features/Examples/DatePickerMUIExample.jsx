import React, {useState} from 'react';
import {ExampleLayout} from './Examples';
import DatePickerMUI from '../../shared/DatePickerMUI';

const DatePickerMUIExample = () => {
  const [date, setDate] = useState(new Date());
  const [nullDate, setNullDate] = useState(null);

  return (
    <ExampleLayout
      propsList='autoOk, className, clearable, disableFuture, disablePast, disableToolbar, disabled, emptyLabel,
          format, inputVariant, label, maxDate, maxDateMessage, minDate, minDateMessage, onChange, openTo, orientation,
          readOnly, value, variant, views'
    >
      <p className='mb-10 mt-25'>clearable / disableFuture / disablePast / disableToolbar</p>
      <div className='flex gap-25'>
        <DatePickerMUI clearable value={date} onChange={setDate} />
        <DatePickerMUI disableFuture value={date} onChange={setDate} />
        <DatePickerMUI disablePast value={date} onChange={setDate} />
        <DatePickerMUI disableToolbar value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>disabled / emptyLabel="Empty label" / format="YYYY-DD-MM"/ label="Label"</p>
      <div className='flex gap-25'>
        <DatePickerMUI disabled value={date} onChange={setDate} />
        <DatePickerMUI emptyLabel='Empty label' value={nullDate} onChange={setNullDate} />
        <DatePickerMUI format='YYYY-DD-MM' value={date} onChange={setDate} />
        <DatePickerMUI label='Label' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>inputVariant="standard / outlined / filled"</p>
      <div className='flex gap-25'>
        <DatePickerMUI label='Label' inputVariant='standard' value={date} onChange={setDate} />
        <DatePickerMUI label='Label' inputVariant='outlined' value={date} onChange={setDate} />
        <DatePickerMUI label='Label' inputVariant='filled' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>
        maxDate="2021-09-13" maxDateMessage="Max date message" / minDate="2040-09-13" minDateMessage="Min date message"
      </p>
      <div className='flex gap-25'>
        <DatePickerMUI maxDate='2021-09-13' maxDateMessage='Max date message' value={date} onChange={setDate} />
        <DatePickerMUI minDate='2040-09-13' minDateMessage='Min date message' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>openTo="date / year / month"</p>
      <div className='flex gap-25'>
        <DatePickerMUI openTo='date' value={date} onChange={setDate} />
        <DatePickerMUI openTo='year' value={date} onChange={setDate} />
        <DatePickerMUI openTo='month' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>orientation="portrait / landscape"</p>
      <div className='flex gap-25'>
        <DatePickerMUI orientation='portrait' value={date} onChange={setDate} />
        <DatePickerMUI orientation='landscape' value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>readOnly / views={'{["year", "month"]}'}</p>
      <div className='flex gap-25'>
        <DatePickerMUI readOnly value={date} onChange={setDate} />
        <DatePickerMUI views={['year', 'month']} value={date} onChange={setDate} />
      </div>

      <p className='mb-10 mt-25'>variant="dialog / inline / static"</p>
      <div className='flex gap-25'>
        <DatePickerMUI variant='dialog' value={date} onChange={setDate} />
        <DatePickerMUI variant='inline' value={date} onChange={setDate} />
        <DatePickerMUI variant='static' value={date} onChange={setDate} />
      </div>
    </ExampleLayout>
  );
};

export default DatePickerMUIExample;
