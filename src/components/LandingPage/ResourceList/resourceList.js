import React, { useCallback } from 'react'
import SlickSlider from 'react-slick';
import { get, size } from 'lodash';


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

    const renderItem = useCallback((item) => {
        const postUrl = get(item, "post_url", "")
        // TODO: UI work for individual item
        return (
            <div onClick={onItemClick}>
                <img src={postUrl} style={{ height: '100px', width: '100px' }} />
                <div>{item.title}</div>
            </div>
        )
    }, [])

    if (size(data) === 0) return null

    return (
        <div style={{ height: 200, borderWidth: 1 }}>
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
    )
}