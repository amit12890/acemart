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
            <div className={classes.brandItem}>
                <div className={classes.brandImage}>
                    <img src={imageUrl} />
                </div>
            </div>
        )
    }, [])

    if (size(data) === 0) return null

    // return (
    //     renderItem(data[0])
    // )

    return (
        <div className={classes.root} onClick={onItemClick}>
            <div className={classes.homeSection}>
                <h3>Featured Brands</h3>
                <div className={classes.brandWrapper}>
                    {renderItem(data[0])}
                    {renderItem(data[1])}
                    {renderItem(data[2])}
                    {renderItem(data[3])}
                    {renderItem(data[4])}
                    {renderItem(data[5])}
                </div>
            </div>
        </div>
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