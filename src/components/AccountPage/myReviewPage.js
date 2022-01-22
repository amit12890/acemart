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

            {size(reviewList) ?
                <>
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
                                            <div className={classes.avgRatings}>
                                                <RatingMini
                                                    percent={average_rating}
                                                    value={5}
                                                    showValue={false}
                                                />
                                            </div>
                                            <div className={classes.productReview}>{text}</div>
                                            <div className={classes.reviewDate}>{new Date(created_at).toLocaleDateString()}</div>
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
                </>
                :
                <div className={classes.noResultText}>
                    <i className={classes.iconWrapper}>
                        <svg className={[classes.svgIcon, classes.checkmark].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>warning</title>
                            <path d="M18.281 24.844v-3.406q0-0.219-0.156-0.406t-0.406-0.188h-3.438q-0.25 0-0.406 0.188t-0.156 0.406v3.406q0 0.25 0.156 0.422t0.406 0.172h3.438q0.25 0 0.406-0.172t0.156-0.422zM18.25 18.156l0.313-8.188q0-0.094-0.031-0.188t-0.125-0.156-0.203-0.125-0.234-0.063h-3.938q-0.125 0-0.234 0.063t-0.203 0.125-0.125 0.172-0.031 0.203l0.281 8.156q0 0.188 0.188 0.297t0.438 0.109h3.313q0.219 0 0.406-0.109t0.188-0.297v0zM18 1.469l13.719 25.156q0.281 0.531 0.281 1.125t-0.313 1.125-0.844 0.828-1.125 0.297h-27.438q-0.594 0-1.125-0.297t-0.844-0.828-0.313-1.125 0.281-1.125l13.719-25.156q0.281-0.531 0.828-0.859t1.172-0.328 1.172 0.328 0.828 0.859v0z"></path>
                        </svg>
                    </i>
                    <span>You have submitted no reviews.</span>
                </div>
            }




        </div >
    );
};

export default MyReviewPage;
