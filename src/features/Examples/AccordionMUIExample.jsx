import React from 'react';
import {accordionData} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import AccordionMUI from '../../shared/AccordionMUI';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AccordionMUIExample = () => {
  return (
    <ExampleLayout propsList='accordionData, className, color, controlled, disableGutters, expandIcon, square'>
      <p className='mb-10 mt-25'>color="primary / secondary / info / success / error / warning"</p>
      <div className='flex gap-25'>
        <AccordionMUI accordionData={accordionData} />
        <AccordionMUI accordionData={accordionData} color='secondary' />
        <AccordionMUI accordionData={accordionData} color='success' />
        <AccordionMUI accordionData={accordionData} color='error' />
        <AccordionMUI accordionData={accordionData} color='info' />
        <AccordionMUI accordionData={accordionData} color='warning' />
      </div>

      <p className='mb-10 mt-25'>controlled={'{false}'}</p>
      <AccordionMUI accordionData={accordionData} controlled={false} />

      <p className='mb-10 mt-25'>disableGutters</p>
      <AccordionMUI accordionData={accordionData} disableGutters />

      <p className='mb-10 mt-25'>expandIcon={'{<ArrowDropDownIcon />}'}</p>
      <AccordionMUI accordionData={accordionData} expandIcon={<ArrowDropDownIcon />} />

      <p className='mb-10 mt-25'>square</p>
      <AccordionMUI accordionData={accordionData} square />
    </ExampleLayout>
  );
};

export default AccordionMUIExample;
