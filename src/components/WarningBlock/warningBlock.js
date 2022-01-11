import React from 'react'

import { AlertTriangle } from 'react-feather'
import { useStyle } from '../../venia/classify'
import Icon from '../../venia/components/Icon'

import defaultClasses from './warningBlock.css'


export default ({ label }) => {
    const classes = useStyle(defaultClasses)
    return (
        <div className={classes.block}>
            <Icon src={AlertTriangle} classes={{ icon: classes.icon }} />
            <div className={classes.label}>
                {label}
            </div>
        </div>
    )
}