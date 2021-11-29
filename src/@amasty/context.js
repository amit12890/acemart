import React, { createContext, useContext } from 'react';
import { useSettings } from './talons/useSettings';

const AmAdvancedReviewsContext = createContext();
const { Provider } = AmAdvancedReviewsContext;

const AmAdvancedReviewsProvider = props => {
  const { children } = props;

  const talonProps = useSettings();
  const { error } = talonProps;

  if (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(error);
    }

    console.log('Check if Amasty modules has been installed!');
  }

  const contextValue = {
    ...talonProps
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default AmAdvancedReviewsProvider;

export const useAdvancedReviewsContext = () =>
  useContext(AmAdvancedReviewsContext);
