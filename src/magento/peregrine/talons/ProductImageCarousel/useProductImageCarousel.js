import { useCallback, useEffect } from 'react';
import { useCarousel } from '@magento/peregrine';
import { generateUrlFromContainerWidth } from '@magento/peregrine/lib/util/imageUtils';
import {
    MESSAGE_TYPES,
    VALID_SERVICE_WORKER_ENVIRONMENT,
    sendMessageToSW
} from '@magento/peregrine/lib/util/swUtils';

export const useProductImageCarousel = props => {
    const { images, type, imageWidth, startIndex = 0 } = props;

    const [carouselState, carouselApi] = useCarousel(images, startIndex);
    const { activeItemIndex, sortedImages } = carouselState;
    const { handlePrevious, handleNext, setActiveItemIndex } = carouselApi;

    const handleThumbnailClick = useCallback(
        index => {
            setActiveItemIndex(index);
        },
        [setActiveItemIndex]
    );

    useEffect(() => {
        if (VALID_SERVICE_WORKER_ENVIRONMENT) {
            const urls = images.map(
                ({ url }) =>
                    new URL(
                        generateUrlFromContainerWidth(url, imageWidth, type),
                        location.origin
                    ).href
            );
            sendMessageToSW(MESSAGE_TYPES.PREFETCH_IMAGES, {
                urls
            }).catch(err => {
                console.error(
                    'Unable to send PREFETCH_IMAGES message to SW',
                    err
                );
            });
        }
    }, [images, imageWidth, type]);

    const currentImage = sortedImages[activeItemIndex] || {};
    const altText = currentImage.label || 'image-product';

    return {
        currentImage,
        activeItemIndex,
        altText,
        handleNext,
        handlePrevious,
        handleThumbnailClick,
        sortedImages
    };
};
