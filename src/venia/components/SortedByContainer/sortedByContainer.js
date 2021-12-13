import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import defaultClasses from './sortedByContainer.css';

import { useStyle } from '@magento/venia-ui/lib/classify';

const SortedByContainer = props => {
    const { currentSort } = props;

    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <FormattedMessage
                id={'searchPage.sortContainer'}
                defaultMessage={'Items sorted by '}
            />
            <span className={classes.sortText}>
                <FormattedMessage
                    id={currentSort.sortId}
                    defaultMessage={currentSort.sortText}
                />
            </span>
        </div>
    );
};

export default SortedByContainer;

SortedByContainer.propTypes = {
    shouldDisplay: PropTypes.bool,
    currentSort: PropTypes.shape({
        sortId: PropTypes.string,
        sortText: PropTypes.string
    })
};
