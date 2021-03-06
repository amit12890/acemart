import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather'
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useStyle } from '../../classify';
import defaultClasses from './submenuColumn.css';
import PropTypes from 'prop-types';

/**
 * The SubmenuColumn component displays columns with categories in submenu
 *
 * @param {MegaMenuCategory} props.category
 */
const SubmenuColumn = props => {
    const { category } = props;
    const classes = useStyle(defaultClasses, props.classes);

    const categoryUrl = resourceUrl(
        `/${category.canonical_url}${category.url_suffix || ''}`
    );
    let children = null;

    if (category.children.length) {
        const childrenItems = category.children.map((subCategory, index) => {
            const { url_path: sub_url_path, url_suffix: sub_url_suffix, isActive, name, canonical_url } = subCategory;
            const subcategoryUrl = resourceUrl(`/${canonical_url}${sub_url_suffix || ''}`);

            return (
                <li key={index} className={classes.submenuChildItem}>
                    <Link
                        className={isActive ? classes.linkActive : classes.link}
                        to={subcategoryUrl}
                    >
                        {name}
                    </Link>
                </li>
            );
        });

        children = <ul className={classes.submenuChild}>{childrenItems}</ul>;
    }

    return (
        <div className={classes.submenuColumn}>
            <Link className={classes.link} to={categoryUrl}>
                <h3 className={classes.heading}>{category.name}</h3>
                <ChevronRight />
            </Link>
            {children}
        </div>
    );
};

export default SubmenuColumn;

SubmenuColumn.propTypes = {
    category: PropTypes.shape({
        children: PropTypes.array,
        id: PropTypes.number.isRequired,
        include_in_menu: PropTypes.number,
        isActive: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.array.isRequired,
        position: PropTypes.number.isRequired,
        url_path: PropTypes.string.isRequired,
        url_suffix: PropTypes.string
    }).isRequired
};
