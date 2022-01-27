import React from 'react';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';

import Button from '../Button';
import { useStyle } from '../../classify';
import defaultClasses from './californiaPopup.css';

export default function UnavailablePopup(props) {
    const { onClose, isPopupVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask
                    isActive={isPopupVisible}
                    dismiss={onClose}
                />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={onClose}>
                                    <i className={classes.iconWrapper}>
                                        <svg
                                            className={classes.svgIcon}
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                        >
                                            <title>remove</title>
                                            <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z" />
                                        </svg>
                                    </i>
                                </Button>
                            </div>
                        </div>
                        <div className={classes.content}>
                            <div className={classes.heading}>
                                store only
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
