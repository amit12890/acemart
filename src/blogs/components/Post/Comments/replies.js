import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import {FormattedMessage} from 'react-intl';

import classes from './comments.css';

import AuthSidebarTrigger from '../../AuthSidebarTrigger';
import { toMoment } from '../../../utils/toMoment';
import SubmitComment from './submitComment';

const Replies = (props) => {
    const {
        commentId,
        replies,
        numberOfReplies,
        open,
        setOpen,
        repliesState,
        setReplies,
        addCommentToPostHandler,
        guestComments,
        formatDate,
        privacyPolicy,
        replyStatus,
        statusMessage,
        checked,
        setChecked
    } = props;

    const [limit, setLimit] = useState(numberOfReplies);
    const [{ isSignedIn }] = useUserContext();

    const replyToggleHandler = (event, commentId) => {
        const showReply = open.map((v, i) => {
            return (v = false);
        });
        const isOpen = showReply.slice();
        isOpen[commentId] = true;
        setOpen(isOpen);
    }

    const loadMoreRepliesHandler = (repliesCount) => {
        setLimit(repliesCount);
    }

    const reply = (parentId, commentId) => {
        if (guestComments || isSignedIn) {
            return (
                <div className={classes.cReply}>
                    {
                        replyStatus ?
                            statusMessage() :
                            <SubmitComment
                                state={repliesState}
                                placeholder={'Add a reply...'}
                                setState={setReplies}
                                guestComments={guestComments}
                                isSignedIn={isSignedIn}
                                privacyPolicy={privacyPolicy}
                                checked={checked}
                                setChecked={setChecked}
                                parentId={parentId}
                                commentId={commentId}
                                replyToggleHandler={replyToggleHandler}
                                addCommentToPostHandler={addCommentToPostHandler}
                                reply={true}
                            />
                    }
                </div>
            )
        }

        return <AuthSidebarTrigger />
    }

    return (
        <Fragment>
            <div className={classes.pActions}>
                <Link to="#" title="Reply"
                      onClick={e => replyToggleHandler(e, commentId)}><FormattedMessage id={'Reply'} /></Link>
            </div>
            {open[commentId] ? reply(commentId) : null}
            <div className={classes.pReplies}>
                {
                    replies.slice(0, limit).map(({comment_id, parent_id, creation_time, author_nickname, text}) => (
                        <div key={comment_id} className={classes.cComment}>
                            <div className={classes.cPost}>
                                <div className={classes.pInfo}>
                                    <div className={classes.pName}>{author_nickname}</div>
                                    <div className={classes.publishDate}>
                                        {/* <Moment format={toMoment(formatDate)}>{creation_time}</Moment> */}
                                    </div>
                                </div>
                                <div className={classes.pText}>{text}</div>
                                <div className={classes.pActions}>
                                    <Link to="#" title="Reply"
                                          onClick={e => replyToggleHandler(e, comment_id)}><FormattedMessage id={'Reply'} /></Link>
                                </div>
                                {open[comment_id] ? reply(parent_id) : null}
                            </div>
                        </div>
                    ))
                }
                {
                    limit < replies.length &&
                    <Link
                        to="#"
                        className={classes.cMore}
                        onClick={() => loadMoreRepliesHandler(replies.length)}
                    >
                        <FormattedMessage id={'Show more replies in this thread'} /><i/>
                    </Link>
                }
            </div>
        </Fragment>
    )
}

export default Replies;
