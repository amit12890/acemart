import React from 'react';
import { string } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './comments.css';

const Comment = props => {
  const { nickname, email, message, created_at } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <li className={classes.comment}>
      <p className={classes.author}>
        <span className={classes.name}>{nickname}</span>
        <span className={classes.email}>{email}</span>
      </p>
      <span className={classes.date}>{created_at}</span>
      <span className={classes.message}>{message}</span>
    </li>
  );
};

Comment.propTypes = {
  nickname: string,
  email: string,
  message: string,
  created_at: string
};

export default Comment;
