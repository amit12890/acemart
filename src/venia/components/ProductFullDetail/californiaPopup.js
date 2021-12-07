import React from 'react'
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';

import Button from '../Button';
import { useStyle } from '../../classify';
import Image from '../Image';
import smallWarning from '../../../assets/small_warning.png';
import defaultClasses from './californiaPopup.css';

export default function CaliforniaPopup(props) {
    const { closeCaliforniaPopup, isPopupVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask isActive={isPopupVisible} dismiss={closeCaliforniaPopup} />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={closeCaliforniaPopup}>
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
                                Proposition 65
                            </div>
                            <div className={classes.contentContainer}>
                                <div className={classes.propWarning}>
                                    <div className={classes.iconWarning}>
                                        <Image src={smallWarning} /> <span>Warning</span>
                                    </div>
                                    <h3>The manufacturer has not supplied information regarding specific chemical hazards that may or may not be attributed to this product. Therefore, we are required by California Proposition 65 to provide the following warning:
                                    </h3>
                                    <p>This product contains one or more chemicals known to the State of California to cause cancer and/or reproductive toxicity.
                                    </p>
                                </div>
                                <div className={classes.propContent}>
                                    <h5>What is California Proposition 65?</h5>
                                    <p>California's Proposition 65 entitles California consumers to special warnings for certain products that contain chemicals known to the State of California to cause cancer, birth defects, or other reproductive harm if those products expose consumers to these chemicals above specific threshold levels. For more information on California Proposition 65, please visit https://oehha.ca.gov/proposition-65.

                                    </p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
