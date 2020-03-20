import React from 'react';
import classes from './basement.module.css';
import {NavLink} from "react-router-dom";


const Basement = () => {
    return (
<React.Fragment>
        <mtd className={classes.nav}>
            <td className={classes.item}>
                <NavLink to="#"> FAQ </NavLink>
            </td>
            <td className={classes.item}>
                <NavLink to="#"> ABOUT US </NavLink>
            </td>
            <td className={classes.item}>
                <NavLink to ="#">Support</NavLink>
            </td>


            </mtd>
</React.Fragment>
    );
}

export default Basement;





