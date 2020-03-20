import React from 'react';
import classes from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <mtd className={classes.header} >
                <dt className={classes.nav}>
            <td className={classes.item}>
                <NavLink to="/profile.js" activeClassName={classes.active}>Profile </NavLink>
            </td>

            <td className={classes.item}>
                <NavLink to="/messages.js" activeClassName={classes.active}>Messages </NavLink>
            </td>

            <td className={classes.item}>
                <NavLink to ="friends.js" activeClassName={classes.active}>Friends </NavLink>
            </td>
            <td className={classes.item}>
                <NavLink to="settings.js" activeClassName={classes.active}>Settings </NavLink>
            </td>
                </dt>
            </mtd>

        </React.Fragment>

);
}

export default Header;