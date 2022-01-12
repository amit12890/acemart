import React from 'react';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import classes from './postInfo.css';

const Tags = props => {
    const { tags } = props;

    if (tags.length > 0) {
        return (
            <div className={classes.postTag}>
                <div className={classes.postTags}>
                    <div className={classes.postTagTitle}><FormattedMessage id={'Tags'} /></div>
                    {
                        tags.map(({tag_id, title, tag_url}) =>
                            <Link key={tag_id} to={new URL(tag_url).pathname} title={title}>{title}</Link>
                        )
                    }
                </div>
            </div>
        )
    }

    return null;
}

export default Tags;
