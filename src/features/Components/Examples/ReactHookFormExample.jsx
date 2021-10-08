import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SelectComponent from '../../../shared/SelectComponent';
import MultiSelectMUI from '../../../shared/MultiSelectMUI';
import ButtonMUI from '../../../shared/ButtonMUI';

const ReactHookFormExample = () => {
  // for SelectComponent
  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
  ];

  // for MultiSelectMUI
  const [item, setItem] = useState([]);
  const selectItems = ['Chocolate', 'Strawberry', 'Vanilla', 'Pineapple', 'Apple'];
  const onSelectChange = (event) => {
    setItem(event.target.value);
    setValue('multi_select', event.target.value);
  };

  const schema = yup.object({
    // select: yup.object().required('Field is required')
  });

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: {errors, isValid}
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      select: '',
      multi_select: []
    }
  });

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <h2 className='mb-15'>React Hook Form</h2>

      <section className='card-wrap'>
        <form className='flex flex--column gap-25 max-w-350' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='select'
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <SelectComponent
                onChange={onChange}
                onBlur={onBlur}
                value={options.find((c) => c.value === value)}
                options={options}
              />
            )}
          />

          <Controller
            name='multi_select'
            control={control}
            render={() => (
              <MultiSelectMUI value={item} items={selectItems} onChange={onSelectChange} label='MultiSelectMUI' />
            )}
          />

          <ButtonMUI className='mx-auto max-w-160' formAction>
            Submit
          </ButtonMUI>
        </form>
      </section>
    </>
  );
};

export default ReactHookFormExample;
