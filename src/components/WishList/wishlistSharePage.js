import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'informed';

import Button from '../../venia/components/Button';
import { apiShareWishlist, myWishlistPage } from '../../url.utils';
import { useStyle } from '../../venia/classify';
import Field from '../../venia/components/Field';
import TextArea from '../../venia/components/TextArea';
import { Title } from '@magento/venia-ui/lib/components/Head';
import { useToasts } from '@magento/peregrine';

import defaultClasses from './wishlistSharePage.css';
import { useApiData } from '../../data.utils';
import {
    CheckCircle as CheckCircleIcon,
    AlertCircle as AlertCircleIcon
} from 'react-feather';
import Icon from '../../venia/components/Icon';
import { isRequired } from '../../venia/util/formValidators';
import { get } from 'lodash';

const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);

const ErrorIcon = <Icon src={AlertCircleIcon} attrs={{ width: 18 }} />;

const WishlistSharePage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const [_, { addToast }] = useToasts();

    const { callApi, response, loading, error } = useApiData({
        url: apiShareWishlist(),
        method: 'post',
        isLazy: true,
        onSuccess: data => {
            addToast({
                type: 'success',
                icon: successIcon,
                message: 'Wishlist shared successfully.',
                dismissable: true,
                timeout: 3000
            });
        },
        onError: err => {
            const message = get(err, 'data.message', '');
            addToast({
                type: 'error',
                icon: ErrorIcon,
                message,
                dismissable: true,
                timeout: 3000
            });
        }
    });

    const handleSubmit = useCallback(
        data => {
            if (loading) return;
            callApi(null, {
                emails: data.emails,
                comments: data.message
            });
        },
        [loading]
    );

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.pageTitleWrapper}>
                    <h1 className={classes.title}>Wish List Sharing</h1>
                </div>

                <div className={classes.shareFormWrapper}>
                    <h2>SHARING INFORMATION</h2>
                    <Form onSubmit={handleSubmit}>
                        <fieldset className={classes.fieldset}>
                            <Field
                                classes={classes.emailAddress}
                                label="Email addresses, separated by commas *"
                                required={true}
                            >
                                <TextArea
                                    field="emails"
                                    fieldName="confirmPassword"
                                    validate={isRequired}
                                    validateOnBlur
                                    rows={6}
                                />
                            </Field>

                            <Field label="Message *">
                                <TextArea
                                    field="message"
                                    fieldName="confirmPassword"
                                    rows={6}
                                    validate={isRequired}
                                />
                            </Field>
                        </fieldset>
                        <div className={classes.actionToolbar}>
                            <Button
                                style={{ marginRight: "10px" }}
                                priority="high" type="submit" disabled={loading} >
                                SHARE WISH LIST
                            </Button>
                            <Link
                                to={myWishlistPage()}
                                className={classes.action}
                            >
                                <i className={classes.iconBackWrapper}>
                                    <svg
                                        className={classes.svgIcon}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                    >
                                        <title>back</title>
                                        <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z" />
                                    </svg>
                                </i>
                                <span>Go Back</span>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default WishlistSharePage;
