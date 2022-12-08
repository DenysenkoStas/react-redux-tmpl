import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import {capitalize} from '../../helpers/functions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './AccordionMUI.module.scss';

const AccordionMUI = ({
  className = '',
  accordionData,
  square = false,
  expandIcon = <ExpandMoreIcon />,
  controlled = true,
  color = 'default',
  minSpaces = false
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  return (
    <div className={`${styles.root}${className && ` ${className}`}`}>
      {accordionData.map(({summary, details, defaultExpanded, disabled}, key) => (
        <Accordion
          key={key}
          classes={{
            root: `${styles.item}${color && ` ${styles[`color${capitalize(color)}`]}`}`,
            rounded: styles.rounded,
            expanded: `${styles.expanded}${minSpaces ? ` ${styles.minSpaces}` : ''}`,
            disabled: styles.disabled
          }}
          defaultExpanded={defaultExpanded}
          disabled={disabled}
          expanded={controlled ? `panel${key}` === expanded : undefined}
          onChange={handleChange(`panel${key}`)}
          square={square}
        >
          <AccordionSummary
            classes={{
              root: styles.summary,
              expanded: styles.expanded,
              focusVisible: styles.focusVisible,
              disabled: styles.disabled,
              content: styles.content,
              expandIcon: styles.expandIcon
            }}
            expandIcon={expandIcon}
          >
            {summary}
          </AccordionSummary>
          <AccordionDetails className={styles.details}>{details}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

AccordionMUI.propTypes = {
  accordionData: PropTypes.array.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  controlled: PropTypes.bool,
  expandIcon: PropTypes.node,
  minSpaces: PropTypes.bool,
  square: PropTypes.bool
};

export default AccordionMUI;
