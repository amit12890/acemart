import React, { Fragment, Suspense, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { shape, string } from 'prop-types';

import { useSearchPage } from '../../../magento/peregrine/talons/SearchPage/useSearchPage';

import Pagination from '../../components/Pagination';
import defaultClasses from './searchPage.css';
import Image from '../Image';
import searchBanner from '../../../assets/searchBanner.jpg';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { Title } from '@magento/venia-ui/lib/components/Head';

import SearchProducts from './searchProducts';

import SP_DATA from './searchPageData.json';
import { size } from 'lodash-es';
import SearchSort from './searchSort';
import SearchPerPage from './searchPerPage';
import FilterSidebar from './filterSidebar';
import { Link } from 'react-router-dom';
import { SEARCH_PAGE_PATH } from '../../../url.utils';

const POPULAR_SEARCH = [
    'sale',
    'specials',
    'store pickup',
    'popcorn',
    'online price',
    'apron'
];

const SearchPage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useSearchPage(SP_DATA);
    const {
        products,
        searchTerm,
        pagination,
        sortProps,
        filters,
        setSort,
        setPerPage,
        setPage,
        setFilter,
        searchError,
        searchLoading,
        categoryFiltered
    } = talonProps;

    const isProducts = size(products);

    const content = useMemo(() => {
        if (searchLoading) return fullPageLoadingIndicator;

        if (searchError) {
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
                <div>
                    <div className={classes.noResult}>
                        <FormattedMessage
                            id={'searchPage.noResultImportant'}
                            defaultMessage={'No results found!'}
                        />
                    </div>
                    <div>
                        <div>Below are some of our popular searches:</div>
                        <div>
                            {POPULAR_SEARCH.map(keyword => (
                                <div>
                                    <Link
                                        to={`${SEARCH_PAGE_PATH}?query=${keyword}`}
                                    >
                                        {keyword}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <Fragment>
                    <div className={classes.gallery}>
                        <SearchProducts products={products} />
                    </div>
                    <section className={classes.pagination}>
                        <Pagination
                            pageControl={{
                                currentPage: pagination.currentPage,
                                setPage: setPage,
                                totalPages: pagination.totalPages
                            }}
                        />
                    </section>
                </Fragment>
            );
        }
    }, [
        classes.gallery,
        classes.noResult,
        classes.pagination,
        products,
        searchError,
        searchLoading
    ]);

    const searchResultsHeading = !isProducts ? null : searchTerm ? (
        <FormattedMessage
            id={'searchPage.searchTermText'}
            values={{
                highlight: chunks => (
                    <span className={classes.headingHighlight}>"{chunks}"</span>
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

    const maybePageSize = size(pagination) ? (
        <SearchPerPage pagination={pagination} setPerPage={setPerPage} />
    ) : null;

    const maybeSidebar =
        !searchLoading && size(filters) ? (
            <FilterSidebar filters={filters} setFilter={setFilter} categoryFiltered={categoryFiltered} />
        ) : null;

    return (
        <div className={classes.root}>
            <Title>Search : {searchTerm}</Title>
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
                    <Suspense fallback={null}>{maybeSidebar}</Suspense>
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
