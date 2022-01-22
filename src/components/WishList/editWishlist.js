import React, { useCallback } from 'react';
import { Form } from 'informed';

import Field from '../../venia/components/Field';
import Button from '../../venia/components/Button';
import TextInput from '../../venia/components/TextInput';

import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { useStyle } from '../../venia/classify';
import { useApiData } from '../../data.utils';
import defaultClasses from './wishlistPage.css';
import { HOST_URL } from '../../url.utils';

import { useToasts } from '@magento/peregrine';

import { 
    CheckCircle as CheckCircleIcon,
    AlertCircle as AlertCircleIcon
} from 'react-feather';
import Icon from '../../venia/components/Icon';
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

const EditWishlist = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const [_, { addToast }] = useToasts();

    const { callApi: editWishlist, response, loading, error } = useApiData({
        url: `${HOST_URL}/rest/V1/bsscommerce/multiwishlist/save`,
        method: "post",
        isLazy: true,
        onSuccess: () => {
            props.refreshWishlist()
            addToast({
                type: 'success',
                icon: successIcon,
                message: 'Wishlist name updated successfully.',
                dismissable: true,
                timeout: 3000
            });
        },
        onError: (err) => {
            addToast({
                type: 'error',
                icon: ErrorIcon,
                message: get(err, "data.message", "something went wrong"),
                dismissable: true,
                timeout: 3000
            });
        }
    })

    const { callApi: deleteWishlist, loading: loadingDelete } = useApiData({
        url: `${HOST_URL}/rest/V1/bsscommerce/multiwishlist/delete/${props.multi_wishlist_id}`,
        method: "delete",
        isLazy: true,
        onSuccess: () => {
            props.refreshWishlist()
            addToast({
                type: 'success',
                icon: successIcon,
                message: 'Wishlist deleted successfully.',
                dismissable: true,
                timeout: 3000
            });
        },
        onError: (err) => {
            addToast({
                type: 'error',
                icon: ErrorIcon,
                message: get(err, "data.message", "something went wrong"),
                dismissable: true,
                timeout: 3000
            });
        }
    })

    const handleEditWishlist = useCallback((data) => {
        if (loading) return;

        const postData = {
            "multiwishlist": {
                "customerId": props.customerId,
                "wishlist_name": data.name,
                "multi_wishlist_id": props.multi_wishlist_id,
            }
        }
        editWishlist(null, postData);
    }, [props.customerId, props.multi_wishlist_id, loading])

    const handleDelete = useCallback(() => {
        if (loadingDelete || loading) return;

        deleteWishlist();
    }, [loading, loadingDelete])

    return (
        <div className={classes.root}>
            <div className={classes.editWishlistWrapper}>
                <Form className={classes.editForm} initialValues={{ name: props.name || "" }}
                    onSubmit={handleEditWishlist}>
                    {/* <FormError errors={Array.from(formErrors.values())} /> */}
                    <Field
                        classes={{ root: classes.listName }}
                    >
                        <TextInput
                            field="name"
                            validate={isRequired}
                            validateOnBlur
                        />
                    </Field>
                    <div className={classes.actionsToolbar}>
                        <Button
                            disabled={loading}
                            priority="high"
                            type="submit"

                            classes={{
                                button_small: classes.button_small
                            }}
                        >
                            {loading ? "Loading..." : "Edit"}
                        </Button>
                        {(props.multi_wishlist_id !== 0) &&
                            <Button
                                disabled={loadingDelete}
                                onClick={handleDelete}
                                classes={{
                                    root: classes.confirmButton
                                }}
                            >
                                {loadingDelete ? "Loading..." : "Delete"}
                            </Button>
                        }
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default EditWishlist;
