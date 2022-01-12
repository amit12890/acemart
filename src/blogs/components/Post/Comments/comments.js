import React from 'react';

import classes from './comments.css';

import { useBlogConfig } from '../../../hooks/useBlogConfig';
import MagefanComments from './magefanComments';
import FacebookComments from './facebookComments';
import DisqusComments from './disqusComments';

const Comments = (props) => {
    const { postId, postUrl, title, commentsCount, setCommentsCount } = props;

    const defaultObject = {
        comments: {
            type: 0,
        }
    }

    const { postView } = useBlogConfig();
    const {comments: {type}} = postView || defaultObject;

    if (type === 'magefan') {
        return <MagefanComments postId={postId} classes={classes} commentsCount={commentsCount} setCommentsCount={setCommentsCount} />
    }

    if (type === 'facebook') {
        return <FacebookComments postUrl={postUrl} classes={classes} />
    }

    if (type === 'disqus') {
        return <DisqusComments postId={postId} postUrl={postUrl} title={title} />
    }

    return null;
}

export default Comments;
