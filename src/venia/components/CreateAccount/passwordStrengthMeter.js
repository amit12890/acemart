import React from 'react';

import { useStyle } from '../../classify';
import defaultClasses from './passwordStrengthMeter.css'


const getMeterConfig = (score) => {
    switch (score) {
        case 0:
            return ["Weak", "25%", "weak"];

        case 1:
            return ["Medium", "50%", "medium"];

        case 2:
            return ["Strong", "75%", "strong"];

        case 3:
            return ["Very Strong", "100%", "very-strong"];
    
        default:
            return ["No Password", "10%", "disabled"];
    }
}

const PasswordStrengthMeter = ({score}) => {
    const classes = useStyle(defaultClasses);
    const [meterText, divWidth, divClass] = getMeterConfig(score);

    return (
        <div className={[classes.meter_wrapper, classes[divClass]].join(" ")}>
            <div className={classes.meter} style={{width: divWidth}} />
            <span className={classes.meter_text}>{meterText}</span>
        </div>
    )
}

export default PasswordStrengthMeter