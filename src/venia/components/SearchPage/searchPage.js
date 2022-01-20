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
                        <i className={classes.iconWrapper}>
                            <svg className={[classes.svgIcon, classes.checkmark].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>warning</title>
                                <path d="M18.281 24.844v-3.406q0-0.219-0.156-0.406t-0.406-0.188h-3.438q-0.25 0-0.406 0.188t-0.156 0.406v3.406q0 0.25 0.156 0.422t0.406 0.172h3.438q0.25 0 0.406-0.172t0.156-0.422zM18.25 18.156l0.313-8.188q0-0.094-0.031-0.188t-0.125-0.156-0.203-0.125-0.234-0.063h-3.938q-0.125 0-0.234 0.063t-0.203 0.125-0.125 0.172-0.031 0.203l0.281 8.156q0 0.188 0.188 0.297t0.438 0.109h3.313q0.219 0 0.406-0.109t0.188-0.297v0zM18 1.469l13.719 25.156q0.281 0.531 0.281 1.125t-0.313 1.125-0.844 0.828-1.125 0.297h-27.438q-0.594 0-1.125-0.297t-0.844-0.828-0.313-1.125 0.281-1.125l13.719-25.156q0.281-0.531 0.828-0.859t1.172-0.328 1.172 0.328 0.828 0.859v0z"></path>
                            </svg>
                        </i>
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
