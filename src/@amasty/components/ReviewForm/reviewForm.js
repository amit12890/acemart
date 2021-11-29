import React, { Fragment } from 'react';
import { bool, string } from 'prop-types';

import { Form } from 'informed';
import {snakeCase} from "lodash";

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import Field from '@magento/venia-ui/lib/components/Field';
import Button from '@magento/venia-ui/lib/components/Button';
import TextArea from '@magento/venia-ui/lib/components/TextArea';
import Checkbox from '@magento/venia-ui/lib/components/Checkbox';
import Icon from '@magento/venia-ui/lib/components/Icon';

import RatingInput from '../RatingInput';
import UploadInput from '../UploadInput';
import { useReviewForm } from '../../talons/useReviewForm';
import { isRequired, isChecked } from '../../utils/validators';
import { useUpload } from '../../talons/useUploadFile';
import { CheckCircle as CheckIcon } from 'react-feather';

import defaultClasses from './reviewForm.css';

const toHTML = str => ({ __html: str });

const ReviewForm = props => {
  const {
    productName,
    productId,
    isProsConsEnabled,
    isAllowImages,
    isRecommendFieldEnabled,
    isGuestEmailShow,
    isAllowGuest,
    isGDPREnabled,
    getGDPRText,
    ratings,
    isImagesRequired
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const {
    isSignedIn,
    handleSignIn,
    initialValues,
    handleSubmit,
    isDisabled,
    isReady,
    setFormApi,
    setTmpImgPath,
    isShowSuccessMessage,
    handleSubmitFailure,
    formApi
  } = useReviewForm({ productId });

  const { handleUpload, loading } = useUpload({ setTmpImgPath, formApi });

  if (!isReady) {
    return null;
  }

  if (isAllowGuest === false && !isSignedIn) {
    return (
      <div className={classes.signInMessage}>
        {'Only registered users can write reviews. Please '}
        <button type="button" onClick={handleSignIn}>
          Sign in
        </button>
        {' or '}
        <button type="button" onClick={handleSignIn}>
          create an account
        </button>
      </div>
    );
  }

  const ratingInputs =
    Array.isArray(ratings) && ratings.length
      ? ratings.map(r => (
          <Field key={r.rating_id} label={r.rating_code} required={true}>
            <RatingInput
              options={r.rating_options}
              validate={isRequired}
              field={snakeCase(r.rating_code)}
            />
          </Field>
        ))
      : null;

  return (
    <div className={classes.root}>
      <Form
        id="review-form"
        className={classes.form}
        initialValues={{ ...initialValues }}
        onSubmit={handleSubmit}
        getApi={setFormApi}
        onSubmitFailure={handleSubmitFailure}
      >
        <div className={classes.title}>
          {`You're reviewing: ${productName}`}
        </div>

        {ratingInputs && <div className={classes.field}>{ratingInputs}</div>}

        <div className={classes.field}>
          <Field label="Nickname">
            <TextInput
              field="nickname"
              type="text"
              validate={isRequired}
              validateOnBlur
            />
          </Field>
        </div>

        {isGuestEmailShow && !isSignedIn && (
          <div className={classes.field}>
            <Field label="Email Address" optional>
              <TextInput
                field="guest_email"
                type="email"
                autoComplete="email"
              />
            </Field>
          </div>
        )}

        <div className={classes.field}>
          <Field label="Summary">
            <TextInput
              field="title"
              type="text"
              validate={isRequired}
              validateOnBlur
            />
          </Field>
        </div>

        <div className={classes.field}>
          <Field label="Review">
            <TextArea
              field="detail"
              validate={isRequired}
              validateOnBlur
              rows={6}
            />
          </Field>
        </div>

        {isProsConsEnabled && (
          <Fragment>
            <div className={classes.field}>
              <Field label="Advantages" optional>
                <TextArea field="like_about" rows={6} />
              </Field>
            </div>

            <div className={classes.field}>
              <Field label="Disadvantages" optional>
                <TextArea field="not_like_about" rows={6} />
              </Field>
            </div>
          </Fragment>
        )}

        {isAllowImages && (
          <div
            className={`${classes.field} ${
              isImagesRequired ? classes.required : ''
            }`}
          >
            <Field label="Add your photo" optional={!isImagesRequired}>
              <UploadInput
                multiple
                field="review_images"
                validate={isImagesRequired ? isRequired : undefined}
                onChange={handleUpload}
                disabled={loading}
                accept="image/*"
              />
            </Field>
          </div>
        )}

        {isRecommendFieldEnabled && (
          <div className={classes.fieldCheckbox}>
            <Checkbox field="is_recommended" label="I recommend this product" />
          </div>
        )}

        {isGuestEmailShow && !isSignedIn && isGDPREnabled && (
          <div className={classes.fieldCheckbox}>
            <Checkbox
              field="gdpr"
              label={
                <span
                  className={classes.chRequired}
                  dangerouslySetInnerHTML={toHTML(getGDPRText)}
                />
              }
              validate={isChecked}
              validateOnBlur
            />
          </div>
        )}

        <Button disabled={isDisabled || loading} type="submit" priority="high">
          {'Submit review'}
        </Button>
      </Form>

      {isShowSuccessMessage && (
        <div className={classes.successMessage}>
          <Icon src={CheckIcon} size={20} />
          <span>{'You submitted your review for moderation.'}</span>
        </div>
      )}
    </div>
  );
};

ReviewForm.propTypes = {
  productName: string,
  isProsConsEnabled: bool,
  isAllowImages: bool,
  isAllowGuest: bool,
  isGDPREnabled: bool,
  isRecommendFieldEnabled: bool,
  getGDPRText: string,
  isGuestEmailShow: bool
};

export default ReviewForm;
