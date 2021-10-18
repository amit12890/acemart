import React from 'react';

import { useStyle } from '../../classify';
import defaultClasses from './passwordStrengthMeter.css'


const getStrengthText = (score) => {
    switch (score) {
        case 1:
            return "Very Weak";

        case 2:
            return "Weak";

        case 3:
            return "Strong";

        case 4:
        return "Very Strong";

        case 5:
        return "Super Strong";
    
        default:
            return "Very Weak"
    }
}

const PasswordStrengthMeter = ({score}) => {
    const classes = useStyle(defaultClasses);

    return (
        <div className={classes.meter_wrapper}>
            <div className={classes.meter} style={{width: `${score*20}%`}} />
            <span className={classes.meter_text}>{getStrengthText(score)}</span>
        </div>
    )
}

export default PasswordStrengthMeter