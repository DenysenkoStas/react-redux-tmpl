import React from 'react';
import {accordionData} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import AccordionMUI from '../../shared/AccordionMUI';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const AccordionMUIExample = () => {
  return (
    <ExampleLayout propsList='accordionData, className, color, controlled, expandIcon, minSpaces, square'>
      <p className='mb-10 mt-25'>color="default / primary / secondary"</p>
      <div className='flex gap-25'>
        <AccordionMUI accordionData={accordionData} />
        <AccordionMUI accordionData={accordionData} color='primary' />
        <AccordionMUI accordionData={accordionData} color='secondary' />
      </div>

      <p className='mb-10 mt-25'>controlled={'{false}'}</p>
      <AccordionMUI accordionData={accordionData} controlled={false} />

      <p className='mb-10 mt-25'>expandIcon={'{<ArrowDropDownIcon />}'}</p>
      <AccordionMUI accordionData={accordionData} expandIcon={<ArrowDropDownIcon />} />

      <p className='mb-10 mt-25'>minSpaces</p>
      <AccordionMUI accordionData={accordionData} minSpaces />

      <p className='mb-10 mt-25'>square</p>
      <AccordionMUI accordionData={accordionData} square />
    </ExampleLayout>
  );
};

export default AccordionMUIExample;
