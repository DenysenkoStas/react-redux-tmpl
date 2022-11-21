import React from 'react';
import {selectOptions} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import {ButtonMUI, TransitionedBlock, SelectComponent} from '../../shared';

const TransitionedBlockExample = () => {
  return (
    <ExampleLayout propsList='children, className, tag'>
      <div className='flex gap-25 mt-25'>
        <TransitionedBlock>
          <ButtonMUI>Button</ButtonMUI>
        </TransitionedBlock>

        <TransitionedBlock>
          <SelectComponent options={selectOptions} />
        </TransitionedBlock>
      </div>
    </ExampleLayout>
  );
};

export default TransitionedBlockExample;
