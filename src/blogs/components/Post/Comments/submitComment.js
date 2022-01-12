import React from 'react';
import { Link } from 'react-router-dom';

import classes from './comments.css';

const SubmitComment = (props) => {
    const {
        state,
        setState,
        guestComments,
        isSignedIn,
        checked,
        setChecked,
        privacyPolicy,
        addCommentToPostHandler,
        placeholder,
        parentId,
        commentId,
        replyToggleHandler,
        reply
    } = props;

    const submitHandler = (e) => {
        e.preventDefault()
    };

    const privacyPolicyInput = (reply) => {
        if (privacyPolicy) {
            return (
                <div className={classes.inputBox}>
                    <input
                        id={reply ? "blog_comment_privacy_comment1" : "blog_comment_privacy_comment2"}
                        type="checkbox"
                        className={classes.requiredEntry}
                        checked={reply ? checked.reply : checked.main}
                        required
                        onChange={reply ?
                            () => setChecked({...checked, reply: !checked.reply}) :
                            () => setChecked({...checked, main: !checked.main})
                        }
                    />
                    <label htmlFor={reply ? "blog_comment_privacy_comment1" : "blog_comment_privacy_comment2"}>
                        Yes, I have read the <Link className={classes.link} target="_blank" to={'/privacy-policy-cookie-restriction-mode'}>privacy policy</Link> and agree to the processing of my personal data.
                    </label>
                </div>
            )
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <textarea
                value={state.text}
                placeholder={placeholder}
                required
                onChange={(e) => setState({...state, text: e.target.value})}
            />
            <div className={classes.cBtnHld}>
                {
                    guestComments && !isSignedIn ?
                    <div className={classes.lrHld}>
                        <div className={classes.leftHld}>
                            <input
                                type="text"
                                value={state.authorNickname}
                                placeholder="Full Name"
                                autoComplete="false"
                                required
                                onChange={(e) => setState({...state, authorNickname: e.target.value})}
                            />
                        </div>
                        <div className={classes.rightHld}>
                            <input
                                type="email"
                                value={state.authorEmail}
                                placeholder="Email"
                                autoComplete="false"
                                required
                                onChange={(e) => setState({...state, authorEmail: e.target.value})}
                            />
                        </div>
                    </div> : ''
                }
                {privacyPolicyInput(reply)}
                {
                    commentId || parentId &&
                    <button
                        type="button"
                        className={classes.cancel}
                        onClick={e => replyToggleHandler(e, commentId)}
                    >
                        Cancel
                    </button>
                }
                <button type="submit" onClick={() => addCommentToPostHandler(parentId || 0)}>Submit</button>
            </div>
        </form>
    )
}

export default SubmitComment;
