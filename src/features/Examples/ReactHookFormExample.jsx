import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {multiSelectOptions, selectOptions} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import {SelectComponent, MultiSelectMUI, ButtonMUI} from '../../shared';

const ReactHookFormExample = () => {
  // for MultiSelectMUI
  const [item, setItem] = useState([]);
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
    <ExampleLayout>
      <form className='flex flex--column gap-25 max-w-350' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='select'
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <SelectComponent
              onChange={onChange}
              onBlur={onBlur}
              value={selectOptions.find((option) => option?.value === value)}
              options={selectOptions}
            />
          )}
        />

        <Controller
          name='multi_select'
          control={control}
          render={() => (
            <MultiSelectMUI value={item} items={multiSelectOptions} onChange={onSelectChange} label='MultiSelectMUI' />
          )}
        />

        <ButtonMUI className='mx-auto max-w-160' formAction>
          Submit
        </ButtonMUI>
      </form>
    </ExampleLayout>
  );
};

export default ReactHookFormExample;
