import React from 'react';
import classes from './button.module.css';
import Posts from "./posts";

const Button = () => {
    return (
        <mtd>
            <button className={classes.button} onClick={() => {
                alert("Uploaded")
            }}>Upload
            </button>

        </mtd>

    );
}

export default Button;