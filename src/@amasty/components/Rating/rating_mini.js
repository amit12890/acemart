import React from 'react';
import { number } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './rating.css';
import { Link } from 'react-router-dom';

const RatingMini = props => {
    const { percent, value, addReviewLink, showValue = true, productLink } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <div className={classes.stars}>
                <div
                    style={{ width: `${percent}%` }}
                    className={classes.starsFilled}
                />
            </div>
            {!!productLink ?
                <Link className={[classes.ratingValue, classes.ratingValueHover].join(" ")} to={productLink}>
                    {showValue && `${value} ${value > 1 ? 'reviews' : 'review'}`}
                </Link>
                :
                <div className={classes.ratingValue}>
                    {showValue && `${value} ${value > 1 ? 'reviews' : 'review'}`}
                </div>
            }
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
