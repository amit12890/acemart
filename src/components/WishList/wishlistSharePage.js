import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'informed';

import Button from '../../venia/components/Button';
import { apiShareWishlist, myWishlistPage } from '../../url.utils';
import { useStyle } from '../../venia/classify';
import Field from '@magento/venia-ui/lib/components/Field';
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
            <Title>Wish List Sharing</Title>
            <h3>Wish List Sharing</h3>
            <div>share icon</div>
            <h2>SHARING INFORMATION</h2>
            <div>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <div className={classes.field}>
                            <Field
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
                        </div>
                        <div className={classes.field}>
                            <Field label="Message">
                                <TextArea field="message" rows={6} />
                            </Field>
                        </div>
                    </div>
                    <div>
                        <Button type="submit">SHARE WISH LIST</Button>
                        <Link to={myWishlistPage()}>
                            <Button>BACK</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default WishlistSharePage;
