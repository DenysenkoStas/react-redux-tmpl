import React from 'react';
import AccordionMUI from '../../../shared/AccordionMUI/AccordionMUI';

const AccordionMUIExample = () => {
  const list = [
    {summary: 'AccordionMUI Summary', details: 'Nulla quis lorem ut libero malesuada feugiat.'},
    {summary: 'AccordionMUI Summary 2', details: 'Nulla quis lorem ut libero malesuada feugiat.'},
    {summary: 'AccordionMUI Summary 3', details: 'Nulla quis lorem ut libero malesuada feugiat.'},
  ];

  return (
    <>
      <h2 className='mb-15'>AccordionMUI</h2>

      <section className='card-wrap'>
        <AccordionMUI className='mb-25' accordionData={list} />

        <AccordionMUI accordionData={list} color='default' square minSpaces />
      </section>
    </>
  );
};

export default AccordionMUIExample;
