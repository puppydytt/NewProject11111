import React from 'react';
import classes from './button.module.css';

const Button =() =>{
    return(
        <div>
       <button className ={classes.button} onClick = { ()=>{alert("Uploaded")}}>Upload</button>
    </div>
    );
}

export default Button;