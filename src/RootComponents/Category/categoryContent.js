import React, { Fragment, Suspense, useMemo } from 'react';
import { array, number, shape, string } from 'prop-types';
import { useCategoryContent } from './data';

import { useStyle } from '../../venia/classify';
import Breadcrumbs from '../../venia/components/Breadcrumbs';
import Gallery from '../../venia/components/Gallery';
import { Title } from '@magento/venia-ui/lib/components/Head';
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

    const categoryResultsHeading =
        totalCount > 0 ? (
            <div>
                Items 1-{Math.floor(totalCount / totalPagesFromData)} of{' '}
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
                        <Pagination pageControl={pageControl} />
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

    const categoryMetaTitle = get(props, "data.category.meta_title", "")

    return (
        <Fragment>
            <Breadcrumbs categoryId={categoryId} />
            <Title>{categoryMetaTitle}</Title>
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
                            <div className={classes.subcategoryWrapper}>
                                <ProductCategory
                                    data={get(data, 'category.children', [])}
                                />
                            </div>
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
