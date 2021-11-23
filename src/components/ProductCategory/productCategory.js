import React, { useMemo } from 'react';
import { get, size } from 'lodash';
import { Link } from 'react-router-dom';

import Image from '../../venia/components/Image';

import { useStyle } from '../../venia/classify';
import defaultClasses from './productCategory.css';

const getUrlPath = (path, key) => {
    return '/' + path + '/' + key;
};
/**
 * render product categories based data size
 */
export default ({ data }) => {
    const classes = useStyle(defaultClasses);
    if (size(data) === 0) return null;

    const productCategoryList = useMemo(() => {
        return data.map(item => {
            const image = get(item, 'image', '');
            return (
                <Link
                    to={getUrlPath(item.url_path, item.url_key)}
                    className={defaultClasses.subcatListItem}
                >
                    <Image
                        width="85"
                        classes={{ image: classes.image }}
                        src={image}
                    />
                    <div className={classes.name}>{item.name}</div>
                </Link>
            );
        });
    }, [data]);

    return (
        <div className={defaultClasses.subcatWrapper}>
            {productCategoryList}
        </div>
    );
};
