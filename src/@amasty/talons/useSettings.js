import { useQuery } from '@apollo/client';
import GET_SETTINGS from '../queries/getSettings.graphql';

export const useSettings = () => {
  const { loading, error, data } = useQuery(GET_SETTINGS);

  const { amReviewSetting: settings } = data || {};

  return {
    settingsLoading: loading,
    error,
    settings
  };
};
