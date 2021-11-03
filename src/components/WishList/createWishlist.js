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

    const {callApi, response, loading, error} = useApiData({
        url: `https://dev-acemart.magedelight.magentoprojects.net/rest/V1/bsscommerce/multiwishlist/save`,
        method: "post",
        isLazy: true,
        onSuccess: () => props.refreshWishlist()
    })
    const handleCreateList = useCallback((data) => {
        if (loading) return;
        callApi(null, {
            "multiwishlist": {
                "customerId" : props.customerId,
                "wishlist_name": data.name
            }
        })
    }, [props.customerId, loading])

    return (
        <div className={classes.root}>
            
            <div className={classes.form}>
                <Form className={classes.form} initialValues={{ visibility: 'PRIVATE' }} 
                    onSubmit={handleCreateList}>
                    {/* <FormError errors={Array.from(formErrors.values())} /> */}
                    <Field
                        classes={{ root: classes.listName }}
                        label="List Name"
                    >
                        <TextInput
                            field="name"
                            validate={isRequired}
                            validateOnBlur
                        />
                    </Field>
                    <div className={classes.buttons}>
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
