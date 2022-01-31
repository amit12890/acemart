import React from 'react';

import { useBlogConfig } from '../../hooks/useBlogConfig';
import { format, parse } from 'date-fns';


const DateComponent = props => {
    const { publish_time, postDate } = props;

    const defaultObject = {
        publicationDateIsEnabled: 1,
        formatDate: 'M d, Y'
    }

    const { design, getData } = useBlogConfig();

    if (design) {
        const { publicationDateIsEnabled } = getData(design, defaultObject);

        if (publish_time && publicationDateIsEnabled) {
            return (
                <span className={postDate}>
                    {format(parse(publish_time, "yyyy-MM-dd HH:mm:ss", new Date()), "MMM dd yyyy")}
                </span>
            )
        }
    }

    return null;
}

export default DateComponent;
