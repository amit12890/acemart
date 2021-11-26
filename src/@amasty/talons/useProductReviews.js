import {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
  useMemo,
  useRef
} from 'react';
import { useLazyQuery } from '@apollo/client';
import GET_REVIEWS from '../queries/getReviews.graphql';
import { usePagination } from '@magento/peregrine';
import { useAdvancedReviewsContext } from '../context';
import { SORT_DIR } from '../constants';
import { keysToCamel } from '../utils';
import { useLocation } from 'react-router-dom';

const Y_OFFSET = 80;

const scrollToTop = ref => {
  const { current: el } = ref;

  if (el) {
    window.scrollTo({
      top: el.offsetTop - Y_OFFSET,
      behavior: 'smooth'
    });
  }
};

export const useProductReviews = props => {
  const { id, reviewFormRef, rootRef } = props;
  const { settingsLoading, settings } = useAdvancedReviewsContext();
  const { perPage = 5, isSortingEnabled } = settings || {};
  const location = useLocation();

  const [productReviews, setProductReviews] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [runQuery, queryResponse] = useLazyQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });

  const { loading, error, data } = queryResponse;
  const { advreview } = data || {};

  const { totalRecordsFiltered = 0 } = productReviews || {};

  const [paginationValues, paginationApi] = usePagination();
  const { currentPage, totalPages } = paginationValues;
  const { setCurrentPage, setTotalPages } = paginationApi;

  const initialToolbarValues = useMemo(
    () => (isSortingEnabled ? { amreviewDir: SORT_DIR.DESC } : {}),
    [isSortingEnabled]
  );

  const [toolbarValues, setToolbarValues] = useState(initialToolbarValues);

  const previousToolbar = useRef(toolbarValues);

  useEffect(() => {
    if (advreview) {
      setProductReviews(prev => {
        if (prev && advreview) {
          setIsMounted(true);
        }

        return advreview;
      });
    }
  }, [advreview, rootRef]);

  useEffect(() => {
    const notRequiredVariables = keysToCamel(toolbarValues);

    const variables = {
      page: Number(currentPage),
      productId: id,
      ...notRequiredVariables
    };

    runQuery({ variables });
  }, [id, currentPage, perPage, runQuery, toolbarValues]);

  useEffect(() => {
    const pageCount = Math.ceil(totalRecordsFiltered / perPage);
    setTotalPages(pageCount);

    return () => {
      setTotalPages(null);
    };
  }, [setTotalPages, totalRecordsFiltered, perPage]);

  useEffect(() => {
    if (
      error ||
      JSON.stringify(previousToolbar.current) !== JSON.stringify(toolbarValues)
    ) {
      setCurrentPage(1);
      previousToolbar.current = toolbarValues;
    }
  }, [toolbarValues, error, setCurrentPage, previousToolbar]);

  const goToReviewForm = useCallback(() => scrollToTop(reviewFormRef), [
    reviewFormRef
  ]);

  const pageControl = {
    currentPage,
    setPage: setCurrentPage,
    totalPages
  };

  const handleStarFilter = useCallback(
    stars => {
      const newState = { ...toolbarValues };
      delete newState.stars;

      if (stars) {
        newState.stars = stars;
      }

      setToolbarValues(newState);
    },
    [toolbarValues, setToolbarValues]
  );

  useEffect(() => {
    if (productReviews && isMounted) {
      scrollToTop(rootRef);
    }
  }, [productReviews, isMounted, rootRef]);

  useLayoutEffect(() => {
    if (location.hash.includes('#reviews') && rootRef) {
      scrollToTop(rootRef);
    }
  }, [rootRef, location, productReviews, id]);

  useEffect(() => {
    setProductReviews(null);
    setToolbarValues(initialToolbarValues);
  }, [id, initialToolbarValues]);

  return {
    loading,
    error,
    productReviews,
    goToReviewForm,
    settingsLoading,
    settings,
    pageControl,
    toolbarValues,
    handleChangeToolbar: setToolbarValues,
    handleStarFilter
  };
};
