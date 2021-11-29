import { useQuery } from '@apollo/client';
import GET_WIDGET from '../queries/getWidget.graphql';

export const useWidget = props => {
  const { widgetId, categoryId, productId } = props;

  const { loading, error, data } = useQuery(GET_WIDGET, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {
      widgetId,
      categoryId,
      productId
    }
  });

  const { amReviewWidget } = data || {};
  const { items } = amReviewWidget || {};

  return {
    loading,
    error,
    amReviewWidget,
    isShow: !error && items && items.length
  };
};
