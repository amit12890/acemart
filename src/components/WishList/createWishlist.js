import React, { useCallback } from 'react';
import { Form } from 'informed';

import Field from '../../venia/components/Field';
import Button from '../../venia/components/Button';
import TextInput from '../../venia/components/TextInput';
import FormError from '../../venia/components/FormError/formError';

import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { useStyle } from '../../venia/classify';
import { useApiData } from '../../data.utils';
import defaultClasses from './createWishlist.css';


const CreateWishlist = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const { callApi, response, loading, error } = useApiData({
        url: `https://dev-acemart.magedelight.magentoprojects.net/rest/V1/bsscommerce/multiwishlist/save`,
        method: "post",
        isLazy: true,
        onSuccess: () => props.refreshWishlist()
    })
    const handleCreateList = useCallback((data) => {
        if (loading) return;
        callApi(null, {
            "multiwishlist": {
                "customerId": props.customerId,
                "wishlist_name": data.name
            }
        })
    }, [props.customerId, loading])

    return (
        <div className={classes.root}>

            <div className={classes.formWrapper}>
                <Form className={classes.createWishlistform} initialValues={{ visibility: 'PRIVATE' }}
                    onSubmit={handleCreateList}>
                    {/* <FormError errors={Array.from(formErrors.values())} /> */}
                    <Field
                        classes={{ root: classes.listName }}
                    >
                        <TextInput
                            field="name"
                            validate={isRequired}
                            validateOnBlur
                            placeholder="List Name"
                        />
                    </Field>
                    <div className={classes.actionsToolbar}>
                        <Button
                            classes={classes.confirmButton}
                            disabled={loading}
                            priority="high"
                            type="submit"
                        >
                            {loading ? "Loading..." : "Create"}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default CreateWishlist;
