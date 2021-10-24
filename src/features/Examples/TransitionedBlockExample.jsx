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

      <section className='card-wrap'>
        <p>
          <b>Props:</b> children, className, tag
        </p>

        <div className='flex gap-25 mt-25'>
          <TransitionedBlock>
            <ButtonMUI>Button</ButtonMUI>
          </TransitionedBlock>

          <TransitionedBlock>
            <SelectComponent options={options} />
          </TransitionedBlock>
        </div>
      </section>
    </>
  );
};

export default TransitionedBlockExample;
