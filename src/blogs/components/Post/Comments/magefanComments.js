import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import {FormattedMessage} from 'react-intl';

import commentsOperations from './comments.gql';

import { useBlogConfig } from '../../../hooks/useBlogConfig';
import Replies from './replies';
import SubmitComment from './submitComment';
import AuthSidebarTrigger from '../../AuthSidebarTrigger';
import { toMoment } from '../../../utils/toMoment';
import { format } from 'date-fns';

const MagefanComments = (props) => {
    const { postId, classes, commentsCount, setCommentsCount } = props;

    const initialValue = {
        text: '',
        authorNickname: '',
        authorEmail: ''
    }

    const [state, setState] = useState(initialValue);
    const [repliesState, setReplies] = useState(initialValue);
    const [open, setOpen] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const [checked, setChecked] = useState({main: false, reply: false});
    const [status, setStatus] = useState(null);
    const [replyStatus, setReplyStatus] = useState(false);
    const { postView } = useBlogConfig();
    const [{ isSignedIn }] = useUserContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(false)
            setReplyStatus(false)
            if (replyStatus) setOpen([])
        }, 1500);
        return () => clearTimeout(timer);
    }, [status, replyStatus]);

    const defaultCommentsObject = {
        comments: {
            numberOfComments: 0,
            numberOfReplies: 0,
            guestComments: 0,
            privacyPolicy: 0,
            defaultStatus: 0,
            formatDate: ''
        }
    }

    const {
        comments: {
            numberOfComments,
            numberOfReplies,
            guestComments,
            privacyPolicy,
            defaultStatus,
            formatDate
        }
    } = postView || defaultCommentsObject;

    const { queries } = commentsOperations;
    const { mutations } = commentsOperations;
    const { GetCommentsQuery } = queries;
    const { AddCommentToPost } = mutations;

    const { data, error, loading, fetchMore, refetch } = useQuery(GetCommentsQuery, {
        variables: {
            postId,
            pageSize: numberOfComments,
            currentPage: 1
        },
        skip: !numberOfComments,
        fetchPolicy: 'cache-and-network'
    });

    const [addCommentToPost] = useMutation(AddCommentToPost);

    const addCommentToPostHandler = (parentId) => {
        if (!checked.main && !checked.reply && privacyPolicy) return;

        const stateData = !parentId ? state : repliesState;

        addCommentToPost({
            variables: {
                parentId,
                postId,
                pageSize: numberOfComments,
                currentPage: 1,
                ...stateData
            },
            update: (proxy, {data: {addCommentToPost}}) => {
                const totalPages = addCommentToPost.total_pages;
                const items = addCommentToPost.comments;
                const { blogComments } = proxy.readQuery({query: GetCommentsQuery, variables: {
                        postId,
                        pageSize: numberOfComments,
                        currentPage: 1
                    }})
                proxy.writeQuery({
                    query: GetCommentsQuery,
                    variables: {
                        postId,
                        pageSize: numberOfComments,
                        currentPage: 1
                    },
                    data: {
                        blogComments: {
                            ...blogComments,
                            total_pages: totalPages,
                            items
                        }
                    }
                })
            },
        })
            .then(() => {
                setState(initialValue)
                setReplies(initialValue)
                setChecked({main: false, reply: false})
                if (parentId) {
                    setReplyStatus(true)
                } else {
                    setStatus(true)
                }
                setCurrentPage(2)
                refetch()
            })
            .catch(e => console.error(e.message))
    }

    useEffect(() => {
        const commentsCountFromData = data
            ? data.blogComments.total_count
            : null;

        setCommentsCount(commentsCountFromData);

        return () => setCommentsCount(null)
    }, [setCommentsCount, data])

    if (loading && !data || commentsCount === null) return null;
    if (error) return <div>Data Fetch Error</div>;

    const loadMoreHandler = () => {
        fetchMore({
            variables: {currentPage},
            updateQuery: (prev, {fetchMoreResult}) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    blogComments: {
                        ...data.blogComments,
                        items: [...prev.blogComments.items, ...fetchMoreResult.blogComments.items],
                    }
                });
            }
        })
            .then(setCurrentPage(currentPage + 1))
    };

    const defaultBlogCommentsObject = {
        blogComments: {
            total_pages: 0,
            items: []
        }
    }

    const {blogComments: {total_pages, items}} = data || defaultBlogCommentsObject;

    const statusMessage = () => {
        if (defaultStatus === 0) {
            return <div className={classes.alert}><strong>Success! </strong><FormattedMessage id={'You submitted your comment for moderation.'} /></div>;
        } else {
            return <div className={classes.alert}><strong>Success! </strong><FormattedMessage id={'Thank you for your comment.'} /></div>;
        }
    }

    return (
        <div className={classes.blockComments}>
            <div id="postComments">
                <div className={classes.cCount}>
                    <strong>
                        <FormattedMessage
                            id={'{commentsCount} Comment(s)'}
                            defaultMessage={`${commentsCount} Comment(s)`}
                            values={{commentsCount}}
                        />
                    </strong>
                </div>
                {
                    !guestComments && !isSignedIn ?
                        <AuthSidebarTrigger /> : status ?
                        statusMessage() :
                        <div className={classes.cReply}>
                            <SubmitComment
                                state={state}
                                placeholder={'Add a comment...'}
                                setState={setState}
                                guestComments={guestComments}
                                isSignedIn={isSignedIn}
                                privacyPolicy={privacyPolicy}
                                checked={checked}
                                setChecked={setChecked}
                                addCommentToPostHandler={addCommentToPostHandler}
                                reply={false}
                            />
                        </div>
                }
                {
                    items.map(({comment_id, creation_time, author_nickname, text, replies}) => (
                        <div key={comment_id} className={classes.cComments}>
                            <div className={classes.cComment}>
                                <div className={classes.cPost}>
                                    <div className={classes.pInfo}>
                                        <div className={classes.pName}>{author_nickname}</div>
                                        <div className={classes.publishDate}>
                                            {format(new Date(creation_time), "MMM dd, yyyy hh:mm")}
                                        </div>
                                    </div>
                                    <div className={classes.pText}>{text}</div>
                                    <Replies
                                        commentId={comment_id}
                                        replies={replies}
                                        numberOfReplies={numberOfReplies}
                                        open={open}
                                        setOpen={setOpen}
                                        repliesState={repliesState}
                                        setReplies={setReplies}
                                        addCommentToPostHandler={addCommentToPostHandler}
                                        guestComments={guestComments}
                                        formatDate={formatDate ? formatDate : 'MMM dd, yyyy hh:mm'}
                                        privacyPolicy={privacyPolicy}
                                        replyStatus={replyStatus}
                                        statusMessage={statusMessage}
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    currentPage <= total_pages &&
                    <button className={classes.cLoadMoreComments} onClick={loadMoreHandler}>
                        <FormattedMessage id={'Load more comments'} />
                    </button>
                }
            </div>
        </div>
    )
}

export default MagefanComments;
