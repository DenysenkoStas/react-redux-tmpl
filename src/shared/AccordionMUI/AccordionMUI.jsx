import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import {capitalize} from '../../helpers/functions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './AccordionMUI.module.scss';

const AccordionItemMUI = ({
  className,
  details,
  defaultExpanded,
  disabled,
  disableGutters,
  expanded,
  expandIcon,
  onChange,
  square,
  summary
}) => {
  return (
    <Accordion
      className={className}
      classes={{
        root: styles.item,
        rounded: styles.rounded,
        expanded: styles.expanded,
        disabled: styles.disabled,
        gutters: styles.gutters
      }}
      defaultExpanded={!!defaultExpanded}
      disabled={!!disabled}
      disableGutters={disableGutters}
      expanded={expanded}
      onChange={onChange}
      square={square}
    >
      <AccordionSummary
        classes={{
          root: styles.summary,
          expanded: styles.expanded,
          focusVisible: styles.focusVisible,
          disabled: styles.disabled,
          content: styles.content,
          expandIconWrapper: styles.expandIconWrapper
        }}
        expandIcon={expandIcon}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails className={styles.details}>{details}</AccordionDetails>
    </Accordion>
  );
};

AccordionItemMUI.muiName = 'Accordion';
AccordionItemMUI.propTypes = {
  className: PropTypes.string,
  details: PropTypes.node,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  disableGutters: PropTypes.bool,
  expanded: PropTypes.bool,
  expandIcon: PropTypes.node,
  onChange: PropTypes.func,
  square: PropTypes.bool,
  summary: PropTypes.node
};

const AccordionMUI = ({
  accordionData,
  className = '',
  color = 'primary',
  controlled = true,
  disableGutters = false,
  expandIcon = <ExpandMoreIcon />,
  square = false
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  return (
    <div className={`${styles.root}${className && ` ${className}`}`}>
      {accordionData.map(({summary, details, defaultExpanded, disabled}, index) => (
        <AccordionItemMUI
          key={index}
          className={`${color && `${styles[`color${capitalize(color)}`]}`}`}
          details={details}
          defaultExpanded={defaultExpanded}
          disabled={disabled}
          disableGutters={disableGutters}
          expanded={controlled ? `panel${index}` === expanded : undefined}
          expandIcon={expandIcon}
          onChange={handleChange(`panel${index}`)}
          square={square}
          summary={summary}
        />
      ))}
    </div>
  );
};

AccordionMUI.propTypes = {
  accordionData: PropTypes.array.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'error', 'warning']),
  controlled: PropTypes.bool,
  disableGutters: PropTypes.bool,
  expandIcon: PropTypes.node,
  square: PropTypes.bool
};

export default AccordionMUI;
