import { useCallback } from 'react';
import { SORT_DIR } from '../constants';

export const useToolbar = props => {
  const {
    isToolbarDisplayed,
    isSortingEnabled,
    availableOrders,
    isFilteringEnabled,
    availableFilters,
    values,
    onChange,
    loading
  } = props;

  const isShowSorting = isSortingEnabled && availableOrders;
  const isShowFiltering = isFilteringEnabled && availableFilters;

  const changeDirection = useCallback(() => {
    const { amreviewDir } = values;

    const newState = {
      ...values,
      amreviewDir:
        !amreviewDir || amreviewDir === SORT_DIR.DESC
          ? SORT_DIR.ASC
          : SORT_DIR.DESC
    };

    onChange(newState);
  }, [values, onChange]);

  const handleChange = useCallback(
    e => {
      const { name, value, checked, type } = e.target;

      const newState = {
        ...values,
        [name]: type === 'checkbox' ? !!checked : value
      };

      onChange(newState);
    },
    [values, onChange]
  );

  return {
    isShowSorting,
    isShowFiltering,
    isToolbarDisplayed:
      isToolbarDisplayed && (isShowSorting || isShowFiltering),
    values,
    changeDirection,
    handleChange,
    isDisabled: loading
  };
};
