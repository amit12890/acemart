import React, { Fragment, Suspense, useMemo, useCallback, useRef } from 'react';
import { array, number, shape, string } from 'prop-types';
import { useCategoryContent } from './data';

import { useStyle } from '../../venia/classify';
import Breadcrumbs from '../../venia/components/Breadcrumbs';
import Gallery from '../../venia/components/Gallery';
import Pagination from '../../venia/components/Pagination';
import ProductSort from '../../venia/components/ProductSort';
import RichContent from '../../venia/components/RichContent';
import defaultClasses from './category.css';
import NoProductsFound from './NoProductsFound';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import SortedByContainer from '@magento/venia-ui/lib/components/SortedByContainer';
import FilterModalOpenButton from '../../venia/components/FilterModalOpenButton';
import ProductCategory from '../../components/ProductCategory/productCategory';
import { get } from 'lodash-es';
import ProductPerPage from './productPerPage';
import { useLocation, useHistory } from 'react-router-dom';

const FilterModal = React.lazy(() =>
    import('../../venia/components/FilterModal')
);
const FilterSidebar = React.lazy(() =>
    import('../../venia/components/FilterSidebar')
);

const CategoryContent = props => {
    const {
        categoryId,
        data,
        isLoading,
        pageControl,
        sortProps,
        pageSize
    } = props;
    const [currentSort] = sortProps;

    const listRef = useRef();
    const talonProps = useCategoryContent({
        categoryId,
        data,
        pageSize
    });

    const {
        categoryName,
        categoryDescription,
        filters,
        items,
        totalCount,
        totalPagesFromData
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);

    const shouldShowFilterButtons = filters && filters.length;

    const history = useHistory();
    const { search, pathname } = useLocation();
    const pageSizeSelect = useCallback(
        pageNumber => {
            const params = new URLSearchParams(search);
            params.set('product_list_limit', pageNumber);
            history.push({ pathname, search: params.toString() });
            if(listRef && listRef.current) {
                listRef.current.scrollIntoView({behavior: "smooth"})
            }
        },
        [search, pathname, history, listRef]
    );

    // If there are no products we can hide the sort button.
    const shouldShowSortButtons = totalPagesFromData;

    const maybeFilterButtons = shouldShowFilterButtons ? (
        <FilterModalOpenButton filters={filters} />
    ) : null;

    const filtersModal = shouldShowFilterButtons ? (
        <FilterModal filters={filters} />
    ) : null;

    const sidebar = shouldShowFilterButtons ? (
        <FilterSidebar filters={filters} />
    ) : null;

    const maybeSortButton = shouldShowSortButtons ? (
        <ProductSort sortProps={sortProps} />
    ) : null;

    const maybeSortContainer = shouldShowSortButtons ? (
        <SortedByContainer currentSort={currentSort} />
    ) : null;
    
    const startPageNumber = (pageSize * (pageControl.currentPage - 1)) + 1;
    const endPageNumber = (startPageNumber + pageSize) - 1;
    const categoryResultsHeading =
        totalCount > 0
        ? totalCount < endPageNumber
            ? (
                <div>
                    {totalCount} Items
                </div>
            )
            :
            (
                <div>
                    Items {startPageNumber} - {endPageNumber} of{' '}
                    {totalCount}
                </div>
            ) : null;

    const categoryDescriptionElement = categoryDescription ? (
        <RichContent html={categoryDescription} />
    ) : null;

    const content = useMemo(() => {
        if (totalPagesFromData) {
            return (
                <Fragment>
                    <section className={classes.gallery}>
                        <Gallery items={items} />
                    </section>
                    <div className={classes.pagination}>
                        <div className={classes.paginationItem}>
                            <Pagination pageControl={pageControl} />
                        </div>
                        <div className={classes.parPageItem}>
                            <ProductPerPage
                                pageSize={pageSize}
                                pageSizeSelect={pageSizeSelect}
                            />
                        </div>
                    </div>
                </Fragment>
            );
        } else {
            if (isLoading) {
                return fullPageLoadingIndicator;
            } else {
                return <NoProductsFound categoryId={categoryId} />;
            }
        }
    }, [
        categoryId,
        classes.gallery,
        classes.pagination,
        isLoading,
        items,
        pageControl,
        totalPagesFromData
    ]);

    return (
        <Fragment>
            <Breadcrumbs categoryId={categoryId} />
            <div className={classes.root}>
                <div className={classes.contentWrapper}>
                    <div className={classes.sidebar}>
                        <Suspense fallback={null}>{sidebar}</Suspense>
                    </div>
                    <div className={classes.categoryContent}>
                        <div className={classes.categoryHeader}>
                            <h1 className={classes.title}>
                                <div className={classes.categoryTitle}>
                                    {categoryName || '...'}
                                </div>
                            </h1>
                            <div className={classes.categoryDescription}>
                                {categoryDescriptionElement}
                            </div>
                            <div className={classes.subcategoryWrapper} >
                                <ProductCategory
                                    data={get(data, 'category.children', [])}
                                />
                            </div>
                            <div ref={listRef}/>
                        </div>

                        <div className={classes.heading}>
                            <div className={classes.categoryInfo}>
                                {categoryResultsHeading}
                            </div>
                            <div className={classes.headerButtons}>
                                {maybeFilterButtons}
                                {maybeSortButton}
                            </div>
                            {maybeSortContainer}
                        </div>
                        {content}
                        <Suspense fallback={null}>{filtersModal}</Suspense>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CategoryContent;

CategoryContent.propTypes = {
    classes: shape({
        filterContainer: string,
        sortContainer: string,
        gallery: string,
        headerButtons: string,
        filterButton: string,
        pagination: string,
        root: string,
        title: string
    }),
    // sortProps contains the following structure:
    // [{sortDirection: string, sortAttribute: string, sortText: string},
    // React.Dispatch<React.SetStateAction<{sortDirection: string, sortAttribute: string, sortText: string}]
    sortProps: array,
    pageSize: number
};
