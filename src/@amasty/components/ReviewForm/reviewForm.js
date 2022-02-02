import React, { Fragment } from 'react';
import { bool, string } from 'prop-types';

import { Form } from 'informed';
import { snakeCase } from 'lodash';
import { X as XIcon } from 'react-feather';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import Field from '../../../venia/components/Field';
import Button from '../../../venia/components/Button';
import TextArea from '@magento/venia-ui/lib/components/TextArea';
import Checkbox from '../../../venia/components/Checkbox';
import Icon from '@magento/venia-ui/lib/components/Icon';
import ReCAPTCHA from 'react-google-recaptcha';

import RatingInput from '../RatingInput';
import UploadInput from '../UploadInput';
import { useReviewForm } from '../../talons/useReviewForm';
import { isRequired, isChecked } from '../../utils/validators';
import { useUpload } from '../../talons/useUploadFile';
import { CheckCircle as CheckIcon } from 'react-feather';
import LoadingButton from '../../../components/LoadingButton';
import LoadingButtonSmall from '../../../components/LoadingButtonSmall';

import defaultClasses from './reviewForm.css';
import RichText from '../../../venia/components/RichText';
import { GOOGLE_RECAPTCHA } from '../../../url.utils';

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
        formApi,
        recaptchaRef,
        isCaptchaRequired
    } = useReviewForm({ productId, ratings });

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
                <Field
                    key={r.rating_id}
                    label={r.rating_code}
                    required={true}
                >
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
                <div className={classes.legend}>
                    <div className={classes.legendLabel}>You're reviewing</div>
                    <RichText
                        content={productName}
                        classes={{ root: classes.legendProductName }}
                    />
                </div>

                {ratingInputs && (
                    <div className={classes.field}>{ratingInputs}</div>
                )}

                <div className={classes.field}>
                    <Field
                        label="Nickname"
                        classes={{ root: classes.reviewFormField }}
                    >
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
                        <Field
                            label="Email Address"
                            classes={{ root: classes.reviewFormField }}
                            optional
                        >
                            <TextInput
                                field="guest_email"
                                type="email"
                                autoComplete="email"
                            />
                        </Field>
                    </div>
                )}

                <div className={classes.field}>
                    <Field
                        label="Summary"
                        classes={{ root: classes.reviewFormField }}
                    >
                        <TextInput
                            field="title"
                            type="text"
                            validate={isRequired}
                            validateOnBlur
                        />
                    </Field>
                </div>

                <div className={classes.field}>
                    <Field
                        label="Review"
                        classes={{ root: classes.reviewFormField }}
                    >
                        <TextArea
                            field="detail"
                            validate={isRequired}
                            validateOnBlur
                            rows={6}
                        />
                    </Field>
                </div>

                <div
                    className={[classes.field, classes.recaptchaField].join(
                        ' '
                    )}
                >
                    <ReCAPTCHA ref={recaptchaRef} sitekey={GOOGLE_RECAPTCHA} />
                    {isCaptchaRequired ? (
                        <div className={classes.errorMessage}>
                            This is a required field.
                        </div>
                    ) : null}
                </div>

                {isProsConsEnabled && (
                    <Fragment>
                        <div className={classes.field}>
                            <Field
                                label="Advantages"
                                classes={{ root: classes.reviewFormField }}
                                optional
                            >
                                <TextArea field="like_about" rows={6} />
                            </Field>
                        </div>

                        <div className={classes.field}>
                            <Field
                                label="Disadvantages"
                                classes={{ root: classes.reviewFormField }}
                                optional
                            >
                                <TextArea field="not_like_about" rows={6} />
                            </Field>
                        </div>
                    </Fragment>
                )}

                {isAllowImages && (
                    <div
                        className={`${classes.field} ${isImagesRequired ? classes.required : ''
                            }`}
                    >
                        <Field
                            label="Upload Product Images"
                            classes={{ 
                                root: classes.reviewFormFileField,
                                fileCancel: classes.fileCancel
                            }}
                            optional={!isImagesRequired}
                        >
                            <UploadInput
                                // multiple
                                field="review_images"
                                validate={
                                    isImagesRequired ? isRequired : undefined
                                }
                                onChange={handleUpload}
                                disabled={loading}
                                accept="image/*"
                            />
                        </Field>
                    </div>
                )}

                {isRecommendFieldEnabled && (
                    <div className={classes.fieldCheckbox}>
                        <Checkbox
                            field="is_recommended"
                            label="I recommend this product"
                        />
                    </div>
                )}

                {isGuestEmailShow && !isSignedIn && isGDPREnabled && (
                    <div className={classes.fieldCheckbox}>
                        <Checkbox
                            field="gdpr"
                            label={
                                <span
                                    className={classes.chRequired}
                                    dangerouslySetInnerHTML={toHTML(
                                        getGDPRText
                                    )}
                                />
                            }
                            validate={isChecked}
                            validateOnBlur
                        />
                    </div>
                )}

                <div className={classes.actionToolbar}>
                    <Button
                        disabled={isDisabled || loading}
                        type="submit"
                        priority="high"
                    >
                        {'Submit review'}
                    </Button>
                </div>
            </Form>
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
