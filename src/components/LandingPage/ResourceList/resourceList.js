import React, { useCallback } from 'react'
import SlickSlider from 'react-slick';
import { get, size } from 'lodash';
import defaultClasses from './resourceList.css';
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
 * Data will be taken from the landing page
 * parent
 *      LandingPage
 */
export default ({ data, onItemClick }) => {
    const classes = useStyle(defaultClasses);
    const renderItem = useCallback((item) => {
        const postUrl = get(item, "post_url", "")
        // TODO: UI work for individual item
        return (
            <div className={classes.resourcesItem}>
                <div className={classes.resouresImage}>

                    <img src={postUrl} style={{ height: '100px', width: '100px' }} />
                </div>
                <div className={classes.resouresDetails}>{item.title}</div>
            </div>
        )
    }, [])

    if (size(data) === 0) return null

    return (
        <div className={classes.root} onClick={onItemClick}>
            <div className={classes.homeSection}>
                <h3>Resources</h3>
                <div className={classes.resourcesWrapper}>
                    {renderItem(data[0])}
                </div>
            </div>
        </div>
    )
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
                        nextArrow={<CustomArrows />}
                        prevArrow={<CustomArrows />}>
                        {data.map(renderItem)}
                    </SlickSlider>
                </div>
            </div>
        </div>
    )
}