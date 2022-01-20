import React, { Fragment, Suspense, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { shape, string } from 'prop-types';
import { AlertTriangle } from 'react-feather';

import { useSearchPage } from '../../../magento/peregrine/talons/SearchPage/useSearchPage';

import Pagination from '../../components/Pagination';
import defaultClasses from './searchPage.css';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { Title, Meta } from '@magento/venia-ui/lib/components/Head';

import SearchProducts from './searchProducts';

import { size } from 'lodash-es';
import SearchSort from './searchSort';
import SearchPerPage from './searchPerPage';
import FilterSidebar from './filterSidebar';
import { Link } from 'react-router-dom';
import { searchPage } from '../../../url.utils';
import RichContent from '../RichContent/richContent';
import RichText from '../RichText';

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
    const talonProps = useSearchPage();
    const { formatMessage } = useIntl();

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
        categoryFiltered,
        header,
        didYouMean
    } = talonProps;

    const hasProducts = !!size(products) && !searchLoading;

    const searchResultsHeading = searchTerm ? (
        <FormattedMessage
            id={'searchPage.searchTermText'}
            values={{
                highlight: chunks => (
                    <span className={classes.headingHighlight}>"{chunks}"</span>
                ),
                term: searchTerm
            }}
            defaultMessage={'Search Results for :'}
        />
    ) : (
        <FormattedMessage
            id={'searchPage.searchTermEmpty'}
            defaultMessage={'Showing all results:'}
        />
    );

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
                <div className={classes.noResultWrapper}>

                    <div className={classes.noResultText}>
                        <AlertTriangle />
                        <span>
                            Sorry no results found for "{searchTerm}"
                        </span>
                    </div>
                    {didYouMean ? (
                        <div className={classes.didYouMean}>
                            Did you mean: <Link to={`${searchPage()}?q=${didYouMean.query}`}><RichText content={didYouMean.highlighted} /></Link>?
                        </div>
                    ) : null}
                    <div className={classes.popularSearchWrapper}>
                        <div className={classes.searchReference}>Below are some of our popular searches:</div>
                        <ol className={classes.searchItems}>
                            {POPULAR_SEARCH.map(keyword => (
                                <li className={classes.searchListItem}>
                                    <Link
                                        to={`${searchPage()}?q=${keyword}`}
                                    >
                                        {keyword}
                                    </Link>
                                </li>
                            ))}
                        </ol>
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

    const itemCountHeading =
        hasProducts ? (
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
            <Meta
                name="description"
                content={formatMessage({ id: "landingPage.description" })}
            />
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
                {maybeSidebar ?
                    <div className={classes.sidebar}>
                        {maybeSidebar}
                    </div>
                    :
                    null
                }

                <div className={classes.searchContent}>
                    <div className={classes.searchBannerWrapper}>
                        {header.map((item) => {
                            return (
                                <RichContent html={item} />
                            )
                        })}
                    </div>
                    {hasProducts ? (
                        <div className={classes.heading}>
                            <div className={classes.searchInfo}>
                                {itemCountHeading}
                            </div>
                            <div className={classes.headerButtons}>
                                {maybePageSize}
                                {maybeSortButton}
                            </div>
                        </div>
                    ) : null}
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
