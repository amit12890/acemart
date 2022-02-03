import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';

import { has, snakeCase } from 'lodash-es';
import { CheckCircle as CheckIcon } from 'react-feather';

import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useAppContext } from '@magento/peregrine/lib/context/app';

import Icon from '@magento/venia-ui/lib/components/Icon';
import { useToasts } from '@magento/peregrine';
import ADD_REVIEW from '../queries/addReview.graphql';

const Y_OFFSET = 120;

const successIcon = (
    <Icon
        src={CheckIcon}
        attrs={{
            width: 18
        }}
    />
);

export const useReviewForm = props => {
    const { productId, ratings } = props;
    const [formApi, setFormApi] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [{ currentUser, isSignedIn, isGettingDetails }] = useUserContext();
    const [, { toggleDrawer }] = useAppContext();
    const [tmpImgPath, setTmpImgPath] = useState([]);
    const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);
    const [isCaptchaRequired, setCaptcha] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [_, { addToast }] = useToasts();
    const recaptchaRef = useRef()

    const [addReview] = useMutation(ADD_REVIEW, {
        fetchPolicy: 'no-cache',
        onCompleted: data => {
            addToast({
                type: 'success',
                icon: successIcon,
                message: 'You submitted your review for moderation.',
                dismissable: true,
                timeout: 3000
            });
            setCaptcha(false)
        }
    });

    const initialValues = useMemo(() => {
        setCaptcha(false)
        const { firstname, lastname } = currentUser;
        const nickname =
            firstname && lastname ? [firstname, lastname].join(' ') : '';

        return {
            nickname
        };
    }, [currentUser]);

    const handleSignIn = useCallback(() => {
        toggleDrawer('nav');
    }, [toggleDrawer]);

    const handleShowMessage = useCallback(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        setIsShowSuccessMessage(true);
        const id = setTimeout(() => {
            setIsShowSuccessMessage(false);
        }, 5000);

        setTimeoutId(id);
    }, [setIsShowSuccessMessage, setTimeoutId, timeoutId]);

    const handleSubmit = useCallback(
        async formValues => {
            const recaptchaValue = recaptchaRef.current.getValue();
            if(!recaptchaValue) {
                setCaptcha(true)
                return
            }
            setIsSubmitting(true);

            delete formValues.review_images;

            const ratingsObj = {};
            for (let ratInd = 0; ratInd < ratings.length; ratInd++) {
                const currRating = ratings[ratInd];
                const ratingKey = snakeCase(currRating.rating_code);
                if (has(formValues, ratingKey)) {
                    ratingsObj[currRating.rating_id] = formValues[ratingKey];
                }
            }

            const variables = {
                productId,
                ...formValues,
                ratings: JSON.stringify(ratingsObj),
                tmpImgPath: Array.isArray(tmpImgPath) ? tmpImgPath: [tmpImgPath],
                gdpr: has(formValues, 'gdpr') ? formValues.gdpr : false
            };

            try {
                const { data } = await addReview({ variables });
                const { addAdvReview } = data || {};
                const { success } = addAdvReview || {};

                if (success) {
                    formApi.reset();
                    setTmpImgPath([]);
                    handleShowMessage();
                    recaptchaRef.current.reset();
                    document.getElementById("review_images").value = "";
                }

                setIsSubmitting(false);
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(error);
                }
                setIsSubmitting(false);
            }
        },
        [
            productId,
            ratings,
            addReview,
            formApi,
            tmpImgPath,
            setIsSubmitting,
            handleShowMessage
        ]
    );

    const handleSubmitFailure = useCallback(errors => {
        const recaptchaValue = recaptchaRef.current.getValue();
        if(!recaptchaValue) {
            setCaptcha(true)
        }
        const errorFields = Object.keys(errors);
        if (!Array.isArray(errorFields) || !errorFields.length) {
            return null;
        }
        const el = document.getElementById('review-form-wrapper');
        if (el) {
            el.scrollIntoView({behavior: 'smooth'})
        }
    }, []);

    useEffect(() => {
        return () => clearTimeout(timeoutId);
    }, [timeoutId]);

    return {
        isSignedIn,
        handleSignIn,
        initialValues,
        isDisabled: isSubmitting,
        isReady: !isGettingDetails,
        handleSubmit,
        setFormApi,
        setTmpImgPath,
        isShowSuccessMessage,
        handleSubmitFailure,
        formApi,
        recaptchaRef,
        isCaptchaRequired
    };
};
