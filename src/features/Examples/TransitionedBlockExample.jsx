import React from 'react';
import ButtonMUI from '../../shared/ButtonMUI';
import TransitionedBlock from '../../shared/TransitionedBlock';
import SelectComponent from '../../shared/SelectComponent';

const TransitionedBlockExample = () => {
  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ];

  return (
    <>
      <h2 className='mb-15'>TransitionedBlock</h2>

      <section className='card-wrap flex gap-25'>
        <TransitionedBlock>
          <ButtonMUI>Button</ButtonMUI>
        </TransitionedBlock>

        <TransitionedBlock>
          <SelectComponent options={options} />
        </TransitionedBlock>
      </section>
    </>
  );
};

export default TransitionedBlockExample;
