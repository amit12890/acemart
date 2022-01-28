import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'informed';

import Button from '../../venia/components/Button';
import { apiShareWishlist, myWishlistPage } from '../../url.utils';
import { useStyle } from '../../venia/classify';
import Field from '../../venia/components/Field';
import TextArea from '@magento/venia-ui/lib/components/TextArea';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { Title } from '@magento/venia-ui/lib/components/Head';
import { useToasts } from '@magento/peregrine';

import defaultClasses from './wishlistSharePage.css';
import { useApiData } from '../../data.utils';
import { CheckCircle as CheckCircleIcon } from 'react-feather';
import Icon from '../../venia/components/Icon';

const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);
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
        }
    });

    const handleSubmit = useCallback(data => {
        if (loading) return;
        callApi(null, {
            emails: data.emails,
            comments: data.message
        });
    }, [loading]);

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.pageTitleWrapper}>
                    <h1 className={classes.title}>
                        Wish List Sharing
                    </h1>
                </div>
                <div className={classes.shareWrapper}>
                    <i className={classes.iconWrapper}>
                        <svg className={[classes.svgIcon, classes.shareThis].join(" ")} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>share</title>
                            <path d="M27 22q-1.063 0-1.984 0.406t-1.609 1.125l-13.469-6.75q0.031-0.188 0.047-0.391t0.016-0.391-0.016-0.391-0.047-0.391l13.469-6.75q0.688 0.719 1.609 1.125t1.984 0.406q2.063 0 3.531-1.469t1.469-3.531-1.469-3.531-3.531-1.469-3.531 1.469-1.469 3.531q0 0.188 0.016 0.391t0.047 0.391l-13.469 6.75q-0.688-0.719-1.609-1.125t-1.984-0.406q-2.063 0-3.531 1.469t-1.469 3.531 1.469 3.531 3.531 1.469q1.063 0 1.984-0.406t1.609-1.125l13.469 6.75q-0.031 0.188-0.047 0.391t-0.016 0.391q0 2.063 1.469 3.531t3.531 1.469 3.531-1.469 1.469-3.531-1.469-3.531-3.531-1.469z"></path>
                        </svg>
                    </i>
                </div>

                <div className={classes.shareFormWrapper}>
                    <h2>SHARING INFORMATION</h2>
                    <Form onSubmit={handleSubmit}>
                        <fieldset className={classes.fieldset}>
                            <Field
                                classes={classes.emailAddress}
                                label="Email addresses, separated by commas"
                                required={true}
                            >
                                <TextArea
                                    field="emails"
                                    validate={isRequired}
                                    validateOnBlur
                                    rows={6}
                                />
                            </Field>

                            <Field label="Message">
                                <TextArea field="message" rows={6} />
                            </Field>

                        </fieldset>
                        <div className={classes.actionToolbar}>
                            <Button
                                className={classes.primary}
                                type="submit">SHARE WISH LIST</Button>
                            <Link to={myWishlistPage()} className={classes.action}>
                                <i className={classes.iconBackWrapper}>
                                    <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>back</title>
                                        <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
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
