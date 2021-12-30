import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { get, size } from 'lodash';

import { GET_CUSTOMER_REVIEWS } from './myReviewPage.gql';
import defaultClasses from './myReviewPage.css';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import RatingMini from '../../@amasty/components/Rating/rating_mini';
import ProductPerPage from '../../RootComponents/Category/productPerPage';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { replaceSpecialChars } from "../../app.utils"


const MyReviewPage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const [pageSize, setPageSize] = useState(12);

    const { loading, error, data, refetch } = useQuery(GET_CUSTOMER_REVIEWS, {
        variables: {
            pageSize,
            currentPage: 1
        },
        fetchPolicy: 'cache-and-network'
    });

    if (loading) return fullPageLoadingIndicator;

    if (error) {
        return (
            <div className={classes.noResult}>
                Error while loading review data !
            </div>
        )
    }

    if (!data) {
        return null;
    }

    const reviewList = get(data, 'customer.reviews.items', []);
    const pageInfo = get(data, 'customer.reviews.page_info', {});
    const reviewListSize = size(reviewList);

    const pageSizeSelect = pageNumber => {
        setPageSize(pageNumber);
        refetch({ pageSize: pageNumber });
    };

    return (
        <div className={classes.root}>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    My Product Reviews
                </h1>
            </div>

            <div className={classes.reviewListWrapper}>
                <ul className={classes.orderHistoryTable}>
                    {reviewList.map(item => {
                        const { product, average_rating, created_at, text } = item;
                        const { name, small_image, url_rewrites, url_suffix } = product;
                        const productLink = resourceUrl(
                            `/${get(url_rewrites[0], 'url', '')}${url_suffix || ''}`
                        );

                        return (
                            <li className={classes.reviewRow}>
                                <div className={classes.productImageContainer}>
                                    <img src={get(small_image, 'url')} />
                                </div>

                                <Link to={productLink}>
                                    <div className={classes.productNameContainer}>
                                        <strong>{replaceSpecialChars(name)}</strong>
                                    </div>
                                </Link>
                                <div className={classes.reviewDateContainer}>
                                    <div className={classes.reviewDate}>{created_at}</div>
                                    <div className={classes.avgRatings}>
                                        <RatingMini
                                            percent={average_rating}
                                            value={5}
                                            showValue={false}
                                        />
                                    </div>
                                    <div className={classes.productReview}>{text}</div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={classes.heading}>
                <div className={classes.categoryInfo}>
                    {reviewListSize > 1
                        ? `${reviewListSize} Items`
                        : `${reviewListSize} Item`}
                </div>
                <div className={classes.headerButtons}>
                    <ProductPerPage
                        pageSize={pageSize}
                        pageSizeSelect={pageSizeSelect}
                    />
                </div>

            </div>



        </div >
    );
};

export default MyReviewPage;
