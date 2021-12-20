import React from 'react';
import { number } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './rating.css';

const RatingMini = props => {
    const { percent, value, addReviewLink, showValue = true } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <div className={classes.stars}>
                <div
                    style={{ width: `${percent}%` }}
                    className={classes.starsFilled}
                />
            </div>
            <div className={classes.ratingValue}>
                {showValue && `${value} ${value > 1 ? 'review' : 'reviews'}`}
            </div>
            {!!addReviewLink && (
                <div className={classes.addReviewLink}>{addReviewLink}</div>
            )}
        </div>
    );
};

RatingMini.propTypes = {
    percent: number,
    value: number
};

export default RatingMini;
