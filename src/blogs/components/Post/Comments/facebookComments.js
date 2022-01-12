import React, { Fragment, useEffect } from 'react';
import { Meta } from '@magento/venia-ui/lib/components/Head';

import { useBlogConfig } from '../../../hooks/useBlogConfig';

const FacebookComments = (props) => {
    const { postUrl, classes } = props;

    const { postView, storeLocale } = useBlogConfig();

    useEffect(() => {
        if (!postView) return;

        if (window.FB) {
            FB.XFBML.parse();
        }

        // Load the SDK asynchronously
        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            const js = d.createElement(s);
            js.id = id;
            js.src = `//connect.facebook.net/${storeLocale}/sdk.js#xfbml=1&version=v3.3&appId=${postView.comments.fbAppId}&autoLogAppEvents=1`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    })

    if (postView) {
        return (
            <Fragment>
                {postView.comments.fbAppIdHeader && postView.comments.fbAppId && <Meta name="fb:app_id" content={postView.comments.fbAppId} />}
                <div className={classes.postComments}>
                    <div className="fb-comments" data-href={postUrl} data-numposts={postView.comments.numberOfComments} data-width="100%" />
                </div>
            </Fragment>
        )
    }

    return null;
}

export default FacebookComments;
