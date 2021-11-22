import React, { Fragment, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather'

import { useBreadcrumbs } from '../../../magento/peregrine/talons/Breadcrumbs/useBreadcrumbs';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useStyle } from '../../classify';
import defaultClasses from './breadcrumbs.css';

const DELIMITER = '>';
/**
 * Breadcrumbs! Generates a sorted display of category links.
 *
 * @param {String} props.categoryId the id of the category for which to generate breadcrumbs
 * @param {String} props.currentProduct the name of the product we're currently on, if any.
 */
const Breadcrumbs = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const { categoryId, currentProduct } = props;

    const talonProps = useBreadcrumbs({ categoryId });

    const {
        currentCategory,
        hasError,
        isLoading,
        normalizedData
    } = talonProps;

    // For all links generate a fragment like "/ Text"
    const links = useMemo(() => {
        return normalizedData.map(({ text, path }) => {
            // do not add link if current text is last one in breadcrumbs
            if (!currentProduct && currentCategory === text) {
                return (
                    <Fragment>
                        <span className={classes.divider}><ChevronRight /></span>
                        <span className={classes.currentState}>{text}</span>
                    </Fragment>
                );
            }
            return (
                <Fragment key={text}>
                    <span className={classes.divider}><ChevronRight /></span>
                    <Link className={classes.link} to={resourceUrl(path)}>
                        {text}
                    </Link>
                </Fragment>
            );
        });
    }, [classes.divider, classes.link, normalizedData]);

    // Don't display anything but the empty, static height div when loading or
    // if there was an error.
    if (isLoading || hasError) {
        return <div className={classes.root} />;
    }

    const currentProductNode = currentProduct ? (
        <Fragment>
            <span className={classes.divider}>{DELIMITER}</span>
            <span className={classes.currentState}>{currentProduct}</span>
        </Fragment>
    ) : null;

    return (
        <div className={classes.root}>
            <Link className={classes.link} to="/">
                <FormattedMessage id={'global.home'} defaultMessage={'Home'} />
            </Link>
            {links}
            {currentProductNode}
        </div>
    );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
    categoryId: number.isRequired,
    currentProduct: string
};
