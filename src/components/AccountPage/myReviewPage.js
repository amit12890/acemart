import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useStyle } from '@magento/venia-ui/lib/classify';

import { GET_CUSTOMER_REVIEWS } from './myReviewPage.gql';
import defaultClasses from './myReviewPage.css';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { get, size } from 'lodash';

import RatingMini from '../../@amasty/components/Rating/rating_mini';
import ProductPerPage from '../../RootComponents/Category/productPerPage';

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
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>CREATED</th>
                        <th>PRODUCT NAME</th>
                        <th>RATING</th>
                        <th>REVIEW</th>
                        <th />
                    </tr>
                    {reviewList.map(item => {
                        return (
                            <tr>
                                <td>
                                    {new Date(
                                        item.created_at
                                    ).toLocaleDateString()}
                                </td>
                                <td>{item.product.name}</td>
                                {/* <td>{item.ratings_breakdown.value}</td> */}
                                <td>
                                    <RatingMini
                                        percent={20}
                                        value={5}
                                        showValue={false}
                                    />
                                </td>
                                <td>{item.text}</td>
                                <td>See Details</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <div>
                    {reviewListSize > 1
                        ? `${reviewListSize} Items`
                        : `${reviewListSize} Item`}
                </div>
                <div>
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
