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
 * brand Data will be taken from the landing page
 * parent
 *      LandingPage
 */
export default ({ data, onItemClick }) => {

    const renderItem = useCallback((item) => {
        const postUrl = get(item, "post_url", "")
        return (
            <div onClick={onItemClick}>
                <img src={postUrl} style={{ height: 100, width: 100 }} />
                <div>{item.title}</div>
            </div>
        )
    }, [])

    if (size(data) === 0) return null

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