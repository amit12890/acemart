import { useCallback, useState, useMemo, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useAppContext } from '@magento/peregrine/lib/context/app';
import ADD_REVIEW from '../queries/addReview.graphql';

const Y_OFFSET = 120;

const getRatings = values =>
    Object.keys(values).reduce((rat, key) => {
        const ratingId = new RegExp(/^rating_([\d+])/g).exec(key);

        if (ratingId && ratingId[1]) {
            rat[ratingId[1]] = values[key];
        }

        return rat;
    }, {});

export const useReviewForm = props => {
    const { productId } = props;
    const [formApi, setFormApi] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [{ currentUser, isSignedIn, isGettingDetails }] = useUserContext();
    const [, { toggleDrawer }] = useAppContext();
    const [tmpImgPath, setTmpImgPath] = useState([]);
    const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const [addReview] = useMutation(ADD_REVIEW, {
        fetchPolicy: 'no-cache'
    });

    const initialValues = useMemo(() => {
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
            setIsSubmitting(true);

            const ratings = getRatings(formValues);

            delete formValues.review_images;

            const variables = {
                productId,
                ...formValues,
                ratings: JSON.stringify(ratings),
                tmp_images_path: tmpImgPath,
            };

            try {
                const { data } = await addReview({ variables });
                const { addAdvReview } = data || {};
                const { success } = addAdvReview || {};

                if (success) {
                    formApi.reset();
                    setTmpImgPath([]);
                    handleShowMessage();
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
            addReview,
            formApi,
            tmpImgPath,
            setIsSubmitting,
            handleShowMessage
        ]
    );

    const handleSubmitFailure = useCallback(errors => {
        const errorFields = Object.keys(errors);

        if (!Array.isArray(errorFields) || !errorFields.length) {
            return null;
        }

        const el = document.getElementsByName(errorFields[0]);

        if (el && el[0]) {
            window.scrollTo({
                top: el[0].offsetTop - Y_OFFSET,
                left: 0,
                behavior: 'smooth'
            });
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
        formApi
    };
};
