import React, {useState} from 'react';
import DatePickerMUI from '../../../shared/DatePickerMUI';

const DatePickerMUIExample = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <h2 className='mb-15'>DatePickerMUI</h2>

      <section className='card-wrap flex gap-25'>
        <DatePickerMUI label='Label example' value={selectedDate} onChange={handleDateChange} />
      </section>
    </>
  );
};

export default DatePickerMUIExample;
