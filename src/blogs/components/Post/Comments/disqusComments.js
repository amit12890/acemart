import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { useBlogConfig } from '../../../hooks/useBlogConfig';

const DisqusComments = (props) => {
    const { postId, postUrl, title } = props;
    const { postView } = useBlogConfig();

    const disqusShortname = postView && postView.comments && postView.comments.disqusSiteShortname || '';
    const disqusConfig = {
        url: postUrl,
        identifier: postId.toString(),
        title: title
    }

    return (
        <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
        />
    )
}

export default DisqusComments;
