import React, { useCallback } from 'react'
import SlickSlider from 'react-slick';
import { get, size } from 'lodash';
import defaultClasses from './brandList.css';
import { useStyle } from '@magento/venia-ui/lib/classify';


/**
 * overridded arrow of products slider in pagebuilder
 */
function CustomArrows(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}
/**
 * brand Data will be taken from the landing page
 * parent
 *      LandingPage
 */
export default ({ data, onItemClick }) => {
    const classes = useStyle(defaultClasses);
    const renderItem = useCallback((item) => {
        const imageUrl = get(item, "brand_thumbnail", "")
        return (
            <div className={classes.root} onClick={onItemClick}>
                <img src={imageUrl} style={{ height: 100, width: 100 }} />
                <div>{item.title}</div>
            </div>
        )
    }, [])

    if (size(data) === 0) return null

    return (
        renderItem(data[0])
    )

    return (
        <SlickSlider
            slidesToScroll={3}
            slidesToShow={3}
            nextArrow={<CustomArrows />}
            prevArrow={<CustomArrows />}>
            {data.map(renderItem)}
        </SlickSlider>
    )
}