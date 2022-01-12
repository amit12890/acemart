import React from 'react';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import Button from '../Button';

import defaultClasses from '@magento/venia-ui/lib/components/AuthBar/authBar.css';

import { useAuthSidebarTrigger } from '../../hooks/useAuthSidebarTrigger';

const AuthSidebarTrigger = props => {
    const { handleOpenAuthSidebar } = useAuthSidebarTrigger();

    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            <Button
                priority="high"
                onClick={() => {
                    handleOpenAuthSidebar();
                }}
            >
                {'Sign In to post a comment'}
            </Button>
        </div>
    )
};

export default AuthSidebarTrigger;
