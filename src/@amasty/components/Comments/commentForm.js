import React from 'react';
import { bool, func } from 'prop-types';
import { Form } from 'informed';
import Field from '@magento/venia-ui/lib/components/Field';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import TextArea from '@magento/venia-ui/lib/components/TextArea';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './comments.css';
import Button from '@magento/venia-ui/lib/components/Button';

const CommentForm = props => {
  const {
    initialValues = {},
    handleSubmit,
    isDisabled,
    setFormApi,
    isShowUserFields
  } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.formRoot}>
      <Form
        className={classes.form}
        initialValues={{ ...initialValues }}
        onSubmit={handleSubmit}
        getApi={setFormApi}
      >
        <div className={classes.title}>{'Leave your comment'}</div>

        {isShowUserFields && (
          <div className={classes.field}>
            <Field label="Nickname" required={true}>
              <TextInput
                field="nickname"
                type="text"
                validate={isRequired}
                validateOnBlur
              />
            </Field>
          </div>
        )}

        {isShowUserFields && (
          <div className={classes.field}>
            <Field label="Email Address" required={true}>
              <TextInput
                field="email"
                type="email"
                autoComplete="email"
                validate={isRequired}
              />
            </Field>
          </div>
        )}

        <div className={classes.field}>
          <Field label="Comment" required={true}>
            <TextArea
              field="message"
              validate={isRequired}
              validateOnBlur
              placeholder={
                'Talk about why you like this review, or ask a question.'
              }
              rows={6}
            />
          </Field>
        </div>

        <Button disabled={isDisabled} type="submit" priority="high">
          {'Add comment'}
        </Button>
      </Form>
    </div>
  );
};

CommentForm.propTypes = {
  isDisabled: bool,
  isShowUserFields: bool,
  handleSubmit: func,
  setFormApi: func
};

export default CommentForm;
