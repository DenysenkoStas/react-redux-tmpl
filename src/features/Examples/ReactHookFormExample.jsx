import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {multiSelectOptions, selectOptions} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import {SelectComponent, MultiSelectMUI, ButtonMUI} from '../../shared';

const ReactHookFormExample = () => {
  const schema = yup.object({
    // select: yup.object().required('Field is required')
  });

  const {
    control,
    handleSubmit,
    setError,
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
      <form className='flex flex--column gap-25 max-w-280' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='select'
          control={control}
          render={({field}) => <SelectComponent {...field} options={selectOptions} />}
        />
        <Controller
          name='multi_select'
          control={control}
          render={({field}) => <MultiSelectMUI {...field} label='MultiSelectMUI' options={multiSelectOptions} />}
        />
        <ButtonMUI className='mx-auto max-w-160' formAction>
          Submit
        </ButtonMUI>
      </form>
    </ExampleLayout>
  );
};

export default ReactHookFormExample;
