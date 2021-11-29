import React from 'react';
import { number } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './rating.css';

const RatingMini = props => {
    const { percent, value, addReviewLink } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <div className={classes.stars}>
                <div
                    style={{ width: `${percent}%` }}
                    className={classes.starsFilled}
                />
                <div style={{ color: 'red' }}>
                    {value} {value > 1 ? 'review' : 'reviews'}
                </div>
                {!!(addReviewLink) && <div>{addReviewLink}</div>}
            </div>
        </div>
    );
};

RatingMini.propTypes = {
    percent: number,
    value: number
};

export default RatingMini;
