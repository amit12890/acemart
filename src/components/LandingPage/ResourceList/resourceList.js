import React, { useCallback } from 'react'
import SlickSlider from 'react-slick';
import { get, size } from 'lodash';
import defaultClasses from './resourceList.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import RichText from '../../../venia/components/RichText'

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
 * Data will be taken from the landing page
 * parent
 *      LandingPage
 */
export default ({ data, onItemClick }) => {
    const classes = useStyle(defaultClasses);
    const renderItem = useCallback((item) => {
        const imageUrl = get(item, "featured_image", "")
        // TODO: UI work for individual item
        return (
            <div className={classes.resourcesItem}>
                <div className={classes.resouresImage}>
                    <img src={imageUrl} />
                </div>
                <div className={classes.resouresDetails}>
                    <h4>{item.title}</h4>
                    <RichText content={item.short_filtered_content} />
                </div>
            </div>
        )
    }, [])

    if (size(data) === 0) return null

    return (
        <div className={classes.root} onClick={onItemClick}>
            <div className={classes.homeSection}>
                <h3>Resources</h3>
                <div className={classes.resourcesWrapper}>
                    <SlickSlider
                        slidesToScroll={3}
                        slidesToShow={3}
                        arrows={true}
                        draggable={true}
                        variableWidth={true}
                        nextArrow={<CustomArrows />}
                        prevArrow={<CustomArrows />}>
                        {data.map(renderItem)}
                    </SlickSlider>
                </div>
            </div>
        </div>
    )
}