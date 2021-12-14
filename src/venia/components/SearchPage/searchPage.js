import React, { Fragment, Suspense, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { shape, string } from 'prop-types';

import { useSearchPage } from '../../../magento/peregrine/talons/SearchPage/useSearchPage';

import Pagination from '../../components/Pagination';
import Gallery from '../Gallery';
import ProductSort from '../ProductSort';
import defaultClasses from './searchPage.css';
import SortedByContainer from '../SortedByContainer';
import FilterModalOpenButton from '../FilterModalOpenButton';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

const FilterModal = React.lazy(() => import('../FilterModal'));
const FilterSidebar = React.lazy(() => import('../FilterSidebar'));

import SearchProducts from './searchProducts';

import SP_DATA from './searchPageData.json';

const SearchPage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useSearchPage(SP_DATA);
    const { products } = talonProps;
    const { loading, error } = props;
    const { formatMessage } = useIntl();

    const content = useMemo(() => {
        if (!products && loading) return fullPageLoadingIndicator;

        if (!products && error) {
            return (
                <div className={classes.noResult}>
                    <FormattedMessage
                        id={'searchPage.noResult'}
                        defaultMessage={
                            'No results found. The search term may be missing or invalid.'
                        }
                    />
                </div>
            );
        }

        if (!products) {
            return null;
        }

        if (products.length === 0) {
            return (
                <div className={classes.noResult}>
                    <FormattedMessage
                        id={'searchPage.noResultImportant'}
                        defaultMessage={'No results found!'}
                    />
                </div>
            );
        } else {
            return (
                <Fragment>
                    <section className={classes.gallery}>
                        <SearchProducts products={products} />
                    </section>
                    <section className={classes.pagination}>
                        {/* <Pagination pageControl={pageControl} /> */}
                    </section>
                </Fragment>
            );
        }
    }, [
        classes.gallery,
        classes.noResult,
        classes.pagination,
        error,
        loading,
        products,
    ]);

    return (
        <article className={classes.root}>
            <div className={classes.sidebar}>
                {/* <Suspense fallback={null}>{maybeSidebar}</Suspense> */}
            </div>
            <div className={classes.searchContent}>
                <div className={classes.heading}>
                    <div className={classes.searchInfo}>
                        {/* {searchResultsHeading}
                        {itemCountHeading} */}
                    </div>
                    <div className={classes.headerButtons}>
                        {/* {maybeFilterButtons}
                        {maybeSortButton} */}
                    </div>
                    {/* {maybeSortContainer} */}
                </div>
                {content}
                {/* <Suspense fallback={null}>{maybeFilterModal}</Suspense> */}
            </div>
        </article>
    );

};

export default SearchPage;

SearchPage.propTypes = {
    classes: shape({
        noResult: string,
        root: string,
        totalPages: string
    })
};
