import React from 'react';
import { bool } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './productReviews.css';
import Checkbox from '@magento/venia-ui/lib/components/Checkbox';
import Select from '@magento/venia-ui/lib/components/Select';
import { useToolbar } from '../../talons/useToolbar';
import { Form } from 'informed';

const Toolbar = props => {
  const { availableOrders, availableFilters, values } = props;

  const {
    isShowSorting,
    isShowFiltering,
    isToolbarDisplayed,
    changeDirection,
    handleChange,
    isDisabled
  } = useToolbar(props);

  if (!isToolbarDisplayed) {
    return null;
  }

  const classes = mergeClasses(defaultClasses, props.classes);

  const filter = isShowFiltering
    ? availableFilters.map(({ code, label }) => (
        <Checkbox
          key={code}
          field={code}
          label={label}
          onChange={handleChange}
          disabled={isDisabled}
          classes={{
            root: classes.toolbarCheckboxRoot,
            label: classes.toolbarLabel,
            icon: classes.toolbarCheckIcon,
            input: classes.toolbarCheckbox
          }}
        />
      ))
    : null;

  const { amreviewDir } = values || {};

  return (
    <Form className={classes.toolbar}>
      {filter && <div className={classes.filter}>{filter}</div>}

      {isShowSorting && (
        <div className={classes.sort}>
          <span className={classes.toolbarLabel}>{'Sort By'}</span>
          <Select
            classes={{ input: classes.toolbarSelect }}
            field={'amreviewSort'}
            onChange={handleChange}
            disabled={isDisabled}
            items={availableOrders.map(({ code, label }) => ({
              value: code,
              label
            }))}
          />
          <button
            className={classes.arrowBtn}
            onClick={changeDirection}
            disabled={isDisabled}
          >
            <span className={`${classes.arrow} ${classes[amreviewDir]}`} />
          </button>
        </div>
      )}
    </Form>
  );
};

Toolbar.propTypes = {
  isToolbarDisplayed: bool
};

export default Toolbar;
