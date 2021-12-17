import React, { Fragment, Suspense, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { shape, string } from 'prop-types';

import { useSearchPage } from '../../../magento/peregrine/talons/SearchPage/useSearchPage';

import Pagination from '../../components/Pagination';
import Gallery from '../Gallery';
import ProductSort from '../ProductSort';
import defaultClasses from './searchPage.css';
import Image from '../Image';
import searchBanner from '../../../assets/searchBanner.jpg';
import SortedByContainer from '../SortedByContainer';
import FilterModalOpenButton from '../FilterModalOpenButton';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

const FilterModal = React.lazy(() => import('../FilterModal'));
const FilterSidebar = React.lazy(() => import('../FilterSidebar'));

import SearchProducts from './searchProducts';

import SP_DATA from './searchPageData.json';
import { size } from 'lodash-es';
import SearchSort from './searchSort';
import SearchPerPage from './searchPerPage';

const SearchPage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useSearchPage(SP_DATA);
    const {
        products,
        searchTerm,
        pagination,
        sortProps,
        filters,
        breadcrumbs,
        filterSummary,
        setSort,
        setPerPage,
        setPage,
    } = talonProps;
    console.log('test : talonProps', talonProps);
    const { loading, error } = props;
    const { formatMessage } = useIntl();

    const isProducts = size(products);

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
                    <div className={classes.gallery}>
                        <SearchProducts products={products} />
                    </div>
                    <section className={classes.pagination}>
                        <Pagination pageControl={{
                            currentPage: pagination.currentPage,
                            setPage: setPage,
                            totalPages: pagination.totalPages,
                        }} />
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
        products
    ]);

    const searchResultsHeading = !isProducts ? null : searchTerm ? (
        <FormattedMessage
            id={'searchPage.searchTermText'}
            values={{
                highlight: chunks => (
                    <span className={classes.headingHighlight}>{chunks}</span>
                ),
                term: searchTerm
            }}
            defaultMessage={'Showing results:'}
        />
    ) : (
        <FormattedMessage
            id={'searchPage.searchTermEmpty'}
            defaultMessage={'Showing all results:'}
        />
    );

    const itemCountHeading =
        isProducts > 0 ? (
            <div>
                Items {pagination.begin}-{pagination.end} of{' '}
                {pagination.totalResults}
            </div>
        ) : null;

    const maybeSortButton = size(sortProps) ? (
        <SearchSort sortProps={sortProps} setSort={setSort} />
    ) : null;

    const maybePageSize = (
        <SearchPerPage pagination={pagination} setPerPage={setPerPage} />
    );

    return (
        <div className={classes.root}>
            <div className={classes.searchHeaderWrapper}>
                <div className={classes.searchHeader}>
                    <h1 className={classes.title}>
                        <div className={classes.searchTitle}>
                            {searchResultsHeading}
                        </div>
                    </h1>
                </div>
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.sidebar}>
                    sidebar Goes Here
                    {/* <Suspense fallback={null}>{maybeSidebar}</Suspense> */}
                </div>

                <div className={classes.searchContent}>

                    <div className={classes.searchBannerWrapper}>
                        <Image src={searchBanner} />
                    </div>
                    <div className={classes.heading}>
                        <div className={classes.searchInfo}>
                            {itemCountHeading}
                        </div>
                        <div className={classes.headerButtons}>
                            {maybePageSize}
                            {maybeSortButton}
                        </div>
                    </div>
                    {content}
                    {/* <Suspense fallback={null}>{maybeFilterModal}</Suspense> */}
                </div>
            </div>

        </div>
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
