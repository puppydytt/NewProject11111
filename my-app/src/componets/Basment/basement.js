import React from 'react';
import classes from './basement.module.css';
import {NavLink} from "react-router-dom";


const Basement = () => {
    return (
<React.Fragment>
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="#"> FAQ </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#"> ABOUT US </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to ="#">Support</NavLink>
            </div>


            </div>
</React.Fragment>
    );
}

export default Basement;





