import React from 'react';

import { toMoment } from '../../utils/toMoment';
import { useBlogConfig } from '../../hooks/useBlogConfig';

const Date = props => {
    const { publish_time, postDate } = props;

    const defaultObject = {
        publicationDateIsEnabled: 1,
        formatDate: 'M d, Y'
    }

    const { design, getData } = useBlogConfig();

    if (design) {
        const { publicationDateIsEnabled, formatDate } = getData(design, defaultObject);

        if (publish_time && publicationDateIsEnabled) {
            return (
                <span className={postDate}>
                    {/* <Moment format={toMoment(formatDate)}>{publish_time}</Moment> */}
                </span>
            )
        }
    }

    return null;
}

export default Date;
