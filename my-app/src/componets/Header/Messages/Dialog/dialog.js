import React from 'react';
import classes from './dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={classes.message}>
            {props.dialog}
        </div>
    );
}

export default Dialog;