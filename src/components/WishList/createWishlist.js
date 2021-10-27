import React from 'react';
import { shape, string } from 'prop-types';
import { PlusSquare } from 'react-feather';
import { Form } from 'informed';

import { useCreateWishlist } from '@magento/peregrine/lib/talons/WishlistPage/useCreateWishlist';

import Field from '../../venia/components/Field';
import Button from '../../venia/components/Button';
import TextInput from '../../venia/components/TextInput';
import FormError from '../../venia/components/FormError/formError';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { useStyle } from '../../venia/classify';

import defaultClasses from './createWishlist.css';

const CreateWishlist = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const talonProps = useCreateWishlist();
    const {
        handleCreateList,
        formErrors,
        loading,
        // shouldRender
    } = talonProps;

    return (
        <div className={classes.root}>
            
            <div className={classes.form}>
                <Form className={classes.form} initialValues={{ visibility: 'PRIVATE' }} 
                    onSubmit={handleCreateList}>
                    <FormError errors={Array.from(formErrors.values())} />
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

CreateWishlist.propTypes = {
    classes: shape({
        body: string,
        buttons: string,
        createButton: string,
        icon: string,
        labelContainer: string,
        listName: string,
        radioLabel: string,
        radioMessage: string,
        radioRoot: string,
        root: string
    })
};
