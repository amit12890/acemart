import React, { useCallback, useState, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { CheckCircle as CheckIcon } from 'react-feather';

import { Form, Relevant } from 'informed';
import ReCAPTCHA from "react-google-recaptcha";

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './productQuestions.css';
import { useUserContext } from '@magento/peregrine/lib/context/user';

import Checkbox from '../../venia/components/Checkbox';
import TextInput from '../../venia/components/TextInput';
import Button from '../../venia/components/Button';
import Field from '../../venia/components/Field';
import Icon from '../../venia/components/Icon';

import { isRequired } from '../../@amasty/utils/validators';
import { addQuestionMutation } from './productQuestions.gql';
import { useToasts } from '@magento/peregrine';

import { GOOGLE_RECAPTCHA } from "../../url.utils"

const successIcon = (
    <Icon
        src={CheckIcon}
        attrs={{
            width: 18
        }}
    />
);

const AddQuestionBlock = ({ productId, allowSubscribingQuestion }) => {
    const [{ currentUser, isSignedIn }] = useUserContext();
    const [_, { addToast }] = useToasts();

    const [addQuestionHandler, { loading }] = useMutation(addQuestionMutation, {
        fetchPolicy: 'no-cache',
        onCompleted: data => {
            addToast({
                type: 'success',
                icon: successIcon,
                message: data.addQuestion.success,
                dismissable: true,
                timeout: 3000
            });
        }
    });

    const classes = useStyle(defaultClasses);
    const [showForm, setShowForm] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const recaptchaRef = useRef()

    const handleSubmit = useCallback(
        async formValues => {
            const recaptchaValue = recaptchaRef.current.getValue();
            console.log("🚀 ~ file: addQuestion.js ~ line 59 ~ AddQuestionBlock ~ recaptchaValue", recaptchaValue)
            const variables = {
                product_id: productId,
                nickname_question: formValues.nickname_question,
                question: formValues.question,
                notify: formValues.notify ? 1 : 0,
                // required string
                notify_email: formValues.notify_email || '',
                newsletter: formValues.newsletter ? 1 : 0,
                // required string
                newsletter_email:
                    (isSignedIn
                        ? currentUser.email
                        : formValues.newsletter_email) || '',
                // need purpose
                status: 4,
                per_page: 10
            };

            try {
                const { data } = await addQuestionHandler({
                    variables
                });
                const { addQuestion } = data || {};
                const { success } = addQuestion || {};
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                setSuccessMessage(success);
                const id = setTimeout(() => {
                    setSuccessMessage('');
                    setShowForm(false);
                }, 5000);

                setTimeoutId(id);
            } catch (error) {
                setSuccessMessage('');
            }
        },
        [productId, isSignedIn, currentUser, timeoutId]
    );

    if (showForm) {
        const email = isSignedIn ? currentUser.email : '';

        return (
            <div classes={classes.askQuestionWrapper}>
                <div className={classes.subTitle}>Ask a New Question</div>

                <div className={classes.formWrapper}>
                    <Form
                        id="add-question-form"
                        className="add-question-form"
                        onSubmit={handleSubmit}
                    >
                        <div className={classes.qaFieldWrapper}>
                            <Field label="Nickname">
                                <TextInput
                                    field="nickname_question"
                                    type="text"
                                    validate={isRequired}
                                    validateOnBlur
                                />
                            </Field>
                        </div>
                        <div className={classes.qaFieldWrapper}>
                            <Field label="Your Question">
                                <TextInput
                                    field="question"
                                    type="text"
                                    validate={isRequired}
                                    validateOnBlur
                                />
                            </Field>
                        </div>
                        <div className={classes.qaFieldWrapper}>
                            <Checkbox
                                field="notify"
                                label="Notify me by email when answer received "
                                validateOnBlur
                            />
                        </div>
                        <Relevant
                            when={({ values }) => {
                                return values.notify;
                            }}
                        >
                            <div className={classes.qaFieldWrapper}>
                                <TextInput
                                    field="notify_email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Please, enter email"
                                    validate={isRequired}
                                    value={email}
                                />
                            </div>
                        </Relevant>
                        {allowSubscribingQuestion ?
                            <div className={classes.qaFieldWrapper}>
                                <Checkbox
                                    field="newsletter"
                                    label="Sign Up for Newsletter"
                                    validateOnBlur
                                />
                            </div>
                            :
                            null
                        }
                        <Relevant
                            when={({ values }) => {
                                return values.newsletter && !isSignedIn;
                            }}
                        >
                            <div className={classes.qaFieldWrapper}>
                                <TextInput
                                    field="newsletter_email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Please, enter email"
                                    validate={isRequired}
                                    value={email}
                                />
                            </div>
                        </Relevant>
                        <div className={classes.qaFieldWrapper}>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={GOOGLE_RECAPTCHA}
                            />
                        </div>
                        <div className={classes.actionToolbar}>
                            <Button
                                disabled={loading}
                                type="submit"
                                priority="high"
                            >
                                ADD QUESTION
                            </Button>
                            <Button
                                disabled={false}
                                priority="high"
                                onClick={() => setShowForm(false)}
                            >
                                CANCEL
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    } else {
        return (
            <Button onClick={() => setShowForm(true)}>
                Ask a New Question
            </Button>
        );
    }
};
export default AddQuestionBlock;
