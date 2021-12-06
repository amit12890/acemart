import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CheckCircle as CheckIcon } from 'react-feather';

import { Form } from 'informed';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Icon from '@magento/venia-ui/lib/components/Icon';
import defaultClasses from './productQuestions.css';
import { useUserContext } from '@magento/peregrine/lib/context/user';

import Checkbox from '../../venia/components/Checkbox';
import TextInput from '../../venia/components/TextInput';
import Button from '../../venia/components/Button';
import Field from '../../venia/components/Field';

import { isRequired } from '../../@amasty/utils/validators';
import { addQuestionMutation } from './productQuestions.gql';

const AddQuestionBlock = ({ productId }) => {
    const [{ currentUser, isSignedIn }] = useUserContext();
    const [addQuestionHandler, { loading }] = useMutation(
        addQuestionMutation,
        {
            fetchPolicy: 'no-cache'
        }
    );
    const classes = useStyle(defaultClasses);
    const [showForm, setShowForm] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = useCallback(
        async formValues => {
            const variables = {
                product_id: productId,
                nickname_question: formValues.nickname_question,
                question: formValues.question,
                notify: formValues.notify ? 1 : 0,
                notify_email:
                    formValues.notify && isSignedIn ? currentUser.email : '',
                newsletter: formValues.newsletter ? 1 : 0,
                newsletter_email:
                    formValues.newsletter && isSignedIn
                        ? currentUser.email
                        : '',
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
                Ask a New Question
            </Button>
        );
    }
};
export default AddQuestionBlock;
