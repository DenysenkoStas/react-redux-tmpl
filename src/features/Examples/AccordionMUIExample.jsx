import React from 'react';
import AccordionMUI from '../../shared/AccordionMUI';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
        <p>
          <b>Props:</b> accordionData, className, color, controlled, expandIcon, minSpaces, square
        </p>

        <p className='mb-10 mt-25'>color="default / primary / secondary"</p>
        <div className='flex gap-25'>
          <AccordionMUI accordionData={list} />
          <AccordionMUI accordionData={list} color='primary' />
          <AccordionMUI accordionData={list} color='secondary' />
        </div>

        <p className='mb-10 mt-25'>controlled={'{false}'}</p>
        <AccordionMUI accordionData={list} controlled={false} />

        <p className='mb-10 mt-25'>expandIcon={'{<ArrowDropDownIcon />}'}</p>
        <AccordionMUI accordionData={list} expandIcon={<ArrowDropDownIcon />} />

        <p className='mb-10 mt-25'>minSpaces</p>
        <AccordionMUI accordionData={list} minSpaces />

        <p className='mb-10 mt-25'>square</p>
        <AccordionMUI accordionData={list} square />
      </section>
    </>
  );
};

export default AccordionMUIExample;
