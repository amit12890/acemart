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


const EditWishlist = props => {
    const classes = useStyle(defaultClasses, props.classes);
    
    const { callApi: editWishlist, response, loading, error } = useApiData({
        url: `${HOST_URL}/rest/V1/bsscommerce/multiwishlist/save`,
        method: "post",
        isLazy: true,
        onSuccess: () => props.refreshWishlist()
    })
    const { callApi: deleteWishlist, loading: loadingDelete } = useApiData({
        url: `${HOST_URL}/rest/V1/bsscommerce/multiwishlist/delete/${props.multi_wishlist_id}`,
        method: "delete",
        isLazy: true,
        onSuccess: () => props.refreshWishlist()
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
    }, [props.customerId, loading])

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
                            classes={classes.confirmButton}
                            disabled={loading}
                            priority="high"
                            type="submit"
                        >
                            {loading ? "Loading..." : "Edit"}
                        </Button>
                        <Button
                            classes={classes.confirmButton}
                            disabled={loadingDelete}
                            onClick={handleDelete}
                        >
                            {loadingDelete ? "Loading..." : "Delete"}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default EditWishlist;
