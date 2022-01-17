import React, { Fragment } from 'react';
import { number, shape, string } from 'prop-types';
import { useCategory } from './data';
import { useStyle } from '../../venia/classify';

import CategoryContent from './categoryContent';
import defaultClasses from './category.css';
import { Meta, Title } from '@magento/venia-ui/lib/components/Head';
import { GET_PAGE_SIZE } from './category.gql';
import ErrorView from '../../venia/components/ErrorView';
import { get } from 'lodash';
import { replaceSpecialChars } from '../../app.utils';

const Category = props => {
    const { id } = props;

    const talonProps = useCategory({
        id,
        queries: {
            getPageSize: GET_PAGE_SIZE
        }
    });

    const {
        error,
        metaDescription,
        loading,
        categoryData,
        pageControl,
        sortProps,
        pageSize
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);

    if (!categoryData) {
        if (error && pageControl.currentPage === 1) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(error);
            }

            return <ErrorView />;
        }
    }

    const categoryMetaTitle = get(categoryData, 'category.meta_title', '');

    return (
        <Fragment>
            <Title>{replaceSpecialChars(categoryMetaTitle)}</Title>
            <Meta name="title" content={replaceSpecialChars(categoryMetaTitle)} />
            <Meta name="description" content={replaceSpecialChars(metaDescription)} />
            <CategoryContent
                categoryId={id}
                classes={classes}
                data={categoryData}
                isLoading={loading}
                pageControl={pageControl}
                sortProps={sortProps}
                pageSize={pageSize}
            />
        </Fragment>
    );
};

Category.propTypes = {
    classes: shape({
        gallery: string,
        root: string,
        title: string
    }),
    id: number
};

Category.defaultProps = {
    id: 3
};

export default Category;
