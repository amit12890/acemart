import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useStyle } from '@magento/venia-ui/lib/classify';

import { GET_CUSTOMER_REVIEWS } from './myReviewPage.gql';
import defaultClasses from './myReviewPage.css';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { get, size } from 'lodash';

import RatingMini from '../../@amasty/components/Rating/rating_mini';
import ProductPerPage from '../../RootComponents/Category/productPerPage';
import RichText from '../../venia/components/RichText';
import { Link } from 'react-router-dom';
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
        return <div className={classes.noResult}>No review yet</div>;
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
                <table className={[classes.data, classes.table].join(" ")}>
                    <thead>
                        <tr>
                            <th className={[classes.col, classes.date].join(" ")}>CREATED</th>
                            <th className={[classes.col, classes.name].join(" ")}>PRODUCT NAME</th>
                            <th className={[classes.col, classes.rating].join(" ")}>RATING</th>
                            <th className={[classes.col, classes.review].join(" ")}>REVIEW</th>
                            <th className={[classes.col, classes.action].join(" ")}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviewList.map(item => {
                            const { product, created_at, text } = item;
                            const { name, url_rewrites, url_suffix } = product;
                            const productLink = resourceUrl(
                                `/${get(url_rewrites[0], 'url', '')}${url_suffix ||
                                    ''}`
                            );
                            return (
                                <tr>
                                    <td className={[classes.col, classes.date].join(" ")}>
                                        <Link to={productLink}>
                                            {new Date(created_at).toLocaleDateString()}
                                        </Link>
                                    </td>
                                    <td className={[classes.col, classes.name].join(" ")}>
                                        {replaceSpecialChars(name)}
                                    </td>
                                    <td className={[classes.col, classes.rating].join(" ")}>
                                        <RatingMini
                                            percent={20}
                                            value={5}
                                            showValue={false}
                                        />
                                    </td>
                                    <td className={[classes.col, classes.review].join(" ")}>
                                        {text}
                                    </td>
                                    <td className={[classes.col, classes.action].join(" ")}>
                                        <span>See Details</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
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



        </div>
    );
};

export default MyReviewPage;
