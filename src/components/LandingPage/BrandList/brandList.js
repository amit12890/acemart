import React from 'react';
import { get, size } from 'lodash';
import defaultClasses from './brandList.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


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

    if (size(data) === 0) return null

    return (
        <div className={classes.root}>
            <div className={classes.homeSection}>
                <h3>Featured Brands</h3>
                <div className={classes.brandWrapper}>
                    <CarouselProvider
                        className={classes.brandCarouselProvider}
                        naturalSlideWidth={120}
                        naturalSlideHeight={60}
                        isPlaying={true}
                        visibleSlides={6}
                        totalSlides={size(data)}
                        infinite={true}
                        isIntrinsicHeight={true}
                    >
                        <div className={classes.brandSliderWrapper}>
                            <Slider
                                className={classes.brandSliderList}
                            >
                                {data.map((item, i) => {
                                    const imageUrl = get(item, "brand_thumbnail", "")
                                    return (
                                        <Slide
                                            className={classes.mycustomclass}
                                            index={i}>
                                            <div className={classes.brandItem}
                                                onClick={() => onItemClick(get(item, "brand_label"))}
                                            >
                                                <div className={classes.brandImage}>
                                                    <img src={imageUrl} />
                                                </div>
                                            </div>
                                        </Slide>
                                    )
                                })}
                            </Slider>
                            <ButtonBack className={[classes.navArrorw, classes.previous].join(" ")}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="32" viewBox="0 0 12 32">
                                    <title>previous</title>
                                    <path d="M11.188 10q0 0.094-0.047 0.219t-0.109 0.188l-7.031 7.031 7.031 7q0.063 0.094 0.109 0.203t0.047 0.203q0 0.125-0.047 0.234t-0.109 0.203l-0.906 0.875q-0.094 0.094-0.203 0.141t-0.203 0.047q-0.125 0-0.234-0.047t-0.172-0.141l-8.344-8.313q-0.063-0.094-0.109-0.203t-0.047-0.203q0-0.125 0.047-0.234t0.109-0.172l8.344-8.344q0.063-0.063 0.172-0.109t0.234-0.047q0.094 0 0.203 0.047t0.203 0.109l0.906 0.906q0.063 0.063 0.109 0.172t0.047 0.234v0z"></path>
                                </svg>
                            </ButtonBack>
                            <ButtonNext className={[classes.navArrorw, classes.next].join(" ")}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="32" viewBox="0 0 11 32">
                                    <title>next</title>
                                    <path d="M10.625 17.438q0 0.094-0.047 0.203t-0.141 0.203l-8.313 8.313q-0.094 0.094-0.203 0.141t-0.203 0.047q-0.125 0-0.234-0.047t-0.172-0.141l-0.906-0.875q-0.063-0.094-0.125-0.203t-0.063-0.234q0-0.094 0.063-0.203t0.125-0.203l7.031-7-7.031-7.031q-0.063-0.063-0.125-0.188t-0.063-0.219 0.063-0.219 0.125-0.188l0.906-0.906q0.063-0.063 0.172-0.109t0.234-0.047q0.094 0 0.203 0.047t0.203 0.109l8.313 8.344q0.094 0.063 0.141 0.172t0.047 0.234v0z"></path>
                                </svg>

                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}