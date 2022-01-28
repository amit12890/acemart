import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather'
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useStyle } from '../../classify';
import defaultClasses from './submenuColumn.css';
import PropTypes from 'prop-types';
import { size } from 'lodash';

const MENU_LIMIT = 6

/**
 * The SubmenuColumn component displays columns with categories in submenu
 *
 * @param {MegaMenuCategory} props.category
 */
const SubmenuColumn = props => {
    const { category, mainMenuUrl } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const topCategoryUrl = resourceUrl(
        `/${category.url_path}${category.url_suffix || ''}`
    );

    let children = useMemo(() => {
        if (category && category.children && category.children.length) {
            const showAllBtn = size(category.children) > 6
            const categoryItems = category.children ? category.children.splice(0, MENU_LIMIT) : []
            const childrenItems = categoryItems.map((category, index) => {
                const { url_path, url_suffix, isActive, name } = category;
                const categoryUrl = resourceUrl(`/${url_path}${url_suffix || ''}`);

                return (
                    <li key={index} className={classes.submenuChildItem}>
                        <Link
                            className={isActive ? classes.linkActive : classes.link}
                            to={categoryUrl}
                        >
                            {name}
                        </Link>
                    </li>
                );
            });

            if (showAllBtn) {
                childrenItems.push((
                    <li className={[classes.submenuChildItem, classes.viewAll].join(" ")}>
                        <Link
                            className={classes.link}
                            to={topCategoryUrl}
                        >
                            View All
                        </Link>
                    </li>
                ))
            }

            return <ul className={classes.submenuChild}>{childrenItems}</ul>;
        }
        return null;
    }, [category, topCategoryUrl]);

    return (
        <div className={classes.submenuColumn}>
            <Link className={classes.link} to={topCategoryUrl}>
                <h3 className={classes.heading}>{category.name}</h3>
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
