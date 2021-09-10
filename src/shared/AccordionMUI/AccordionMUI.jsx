import React, {useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './AccordionMUI.scss';

const AccordionMUI = ({className = '', accordionData, square, expandIcon, controlled = true, color = '', minSpaces}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={`accordion-mui${className && ` ${className}`}`}>
      {accordionData.map(({summary, details, defaultExpanded, disabled}, key) => (
        <Accordion
          key={key}
          classes={{
            root: `accordion-mui-item${color && ` accordion-mui-item--color-${color}`}`,
            rounded: 'accordion-mui-item--rounded',
            expanded: `accordion-mui-item--expanded${minSpaces ? ' accordion-mui-item--min-spaces' : ''}`,
            disabled: 'accordion-mui-item--disabled',
          }}
          defaultExpanded={defaultExpanded}
          disabled={disabled}
          expanded={controlled ? `panel${key}` === expanded : undefined}
          onChange={handleChange(`panel${key}`)}
          square={square}
        >
          <AccordionSummary
            classes={{
              root: 'accordion-mui-item__summary',
              expanded: 'accordion-mui-item__summary--expanded',
              focused: 'accordion-mui-item__summary--focused',
              focusVisible: 'accordion-mui-item__summary--focus-visible',
              disabled: 'accordion-mui-item__summary--disabled',
              content: 'accordion-mui-item__summary-content',
              expandIcon: 'accordion-mui-item__expand-icon',
            }}
            expandIcon={expandIcon ? expandIcon : <ExpandMoreIcon />}
          >
            {summary}
          </AccordionSummary>
          <AccordionDetails className='accordion-mui-item__details'>{details}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionMUI;
