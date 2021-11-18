import React, { useMemo } from 'react'
import { get, size } from 'lodash'

import Image from '../../venia/components/Image'

import { useStyle } from '../../venia/classify';
import defaultClasses from './productCategory.css'

/**
 * render product categories based data size
 */
export default ({ data }) => {
    const classes = useStyle(defaultClasses);
    if (size(data) === 0) return null

    const productCategoryList = useMemo(() => {
        return data.map((item) => {
            const image = get(item, "image", "");
            return (
                <div className={defaultClasses.subcatListItem}>
                    {image &&
                        <Image
                            classes={{image: classes.image}}
                            src={image}
                        />
                    }
                </div>
            )
        })
    }, [data])

    return (
        <div className={defaultClasses.subcatWrapper}>
            {productCategoryList}
        </div>
    )
}
