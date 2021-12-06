import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CheckCircle as CheckIcon } from 'react-feather';

import { Form } from 'informed';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import defaultClasses from './productQuestions.css';

import Checkbox from '../../venia/components/Checkbox';
import TextInput from '../../venia/components/TextInput';
import Button from '../../venia/components/Button';
import Field from '../../venia/components/Field';

import { isRequired } from '../../@amasty/utils/validators';
import { addAnswerMutation } from './productQuestions.gql';

const AddAnswerBlock = ({ questionId }) => {
    const [{ currentUser, isSignedIn }] = useUserContext();
    const [addAnswerHandler, { loading }] = useMutation(addAnswerMutation, {
        fetchPolicy: 'no-cache'
    });
    const classes = useStyle(defaultClasses);
    const [showForm, setShowForm] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = useCallback(
        async formValues => {
            const variables = {
                question_id: questionId,
                nickname_answer: formValues.nickname_answer,
                answer: formValues.answer,
                newsletter: formValues.newsletter ? 1 : 0,
                newsletter_email:
                    formValues.newsletter && isSignedIn
                        ? currentUser.email
                        : '',
                // need purpose
                status: 4
            };

            try {
                const { data } = await addAnswerHandler({
                    variables
                });
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                setSuccessMessage('You submitted your answer');
                const id = setTimeout(() => {
                    setSuccessMessage('');
                    setShowForm(false);
                }, 5000);

                setTimeoutId(id);
            } catch (error) {
                setSuccessMessage('');
            }
        },
        [questionId, isSignedIn, currentUser, timeoutId]
    );

    if (showForm) {
        return (
            <div className={classes.askQuestionWrapper}>
                <div className={classes.subTitle}>Ans this question</div>
                <div className={classes.formWrapper}>
                    <Form
                        id="add-question-form"
                        className="add-question-form"
                        onSubmit={handleSubmit}
                    >
                        <div className={classes.qaFieldWrapper}>
                            <Field label="Nickname">
                                <TextInput
                                    field="nickname_answer"
                                    type="text"
                                    validate={isRequired}
                                    validateOnBlur
                                />
                            </Field>
                        </div>
                        <div className={classes.qaFieldWrapper}>
                            <Field label="Your Answer">
                                <TextInput
                                    field="answer"
                                    type="text"
                                    validate={isRequired}
                                    validateOnBlur
                                />
                            </Field>
                        </div>
                        <div className={classes.qaFieldWrapper}>
                            <Checkbox
                                field="newsletter"
                                label="Sign Up for Newsletter"
                                validateOnBlur
                            />
                        </div>
                        <div className={classes.actionToolbar}>
                            <Button
                                disabled={loading}
                                type="submit"
                                priority="high"
                            >
                                ANSWER THIS QUESTION
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
                {successMessage && (
                    <div>
                        <Icon src={CheckIcon} size={20} />
                        <span>{successMessage}</span>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <Button onClick={() => setShowForm(true)}>
                ANSWER THIS QUESTION
            </Button>
        );
    }
};

export default AddAnswerBlock;
