import React from 'react';
import classes from './basement.module.css'

const Basement = () =>{
    return(

        <nav className = {classes.nav}>
        <div className = {classes.item}>
        <a>  FAQ </a>
        </div>
        <div className = {classes.item}>
        <a>  ABOUT US </a>
        </div>
        <div className ={classes.item}>
        <a>Support</a>
        </div>


    </nav>

    );
}

export default Basement;





