import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'informed';

import Button from '../../venia/components/Button';
import { myWishlistPage } from '../../url.utils';
import { useStyle } from '../../venia/classify';
import Field from '@magento/venia-ui/lib/components/Field';
import TextArea from '@magento/venia-ui/lib/components/TextArea';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { Title } from '@magento/venia-ui/lib/components/Head';

import defaultClasses from './wishlistSharePage.css';

const WishlistSharePage = props => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div>
            <Title>Wish List Sharing</Title>
            <h3>Wish List Sharing</h3>
            <div>share icon</div>
            <h2>SHARING INFORMATION</h2>
            <div>
                <Form>
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
                        <Button>SHARE WISH LIST</Button>
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
