import React from 'react';
import { shape, string } from 'prop-types';

import { useStyle } from '../../classify';
import defaultClasses from './fieldIcons.css';
import { size } from 'lodash';

const FieldIcons = props => {
    const { after, before, children } = props;

    const classes = useStyle(defaultClasses, props.classes);
    console.log("🚀 ~ file: .js ~ linefieldIcons 11 ~ classes", classes.after)

    const style = {
        '--iconsBefore': before ? 1 : 0,
        '--iconsAfter': after ? 1 : 1
    };

    return (
        <span className={classes.root} style={style}>
            <span className={classes.input}>{children}</span>
            <span className={classes.beforeClass}>{before}</span>
            <span className={[classes.afterClass, size(classes.after) > 0 && classes.after].join(" ")}>{after}</span>
        </span>
    );
};

FieldIcons.propTypes = {
    classes: shape({
        after: string,
        before: string,
        root: string
    })
};

export default FieldIcons;
