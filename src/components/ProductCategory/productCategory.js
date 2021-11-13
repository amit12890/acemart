import { get, size } from 'lodash'
import React, { useMemo } from 'react'

import Image from '../../venia/components/Image'

import defaultClasses from './productCategory.css'

/**
 * render product categories based data size
 */
export default ({ data }) => {
    console.log("🚀 ~ file: productCategory.js ~ line 12 ~ data", data)
    if (size(data) === 0) return null

    const productCategoryList = useMemo(() => {
        return data.map((item) => {
            const image = get(item, "image", "")
            return (
                <div>
                    <Image src={image} />
                </div>
            )
        })
    }, [data])

    return (
        <div className={defaultClasses.container}>
            {productCategoryList}
        </div>
    )
}
