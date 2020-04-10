import React from 'react';
import classes from './header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <React.Fragment>
            <div className={classes.header} >
                <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile.js" activeClassName={classes.active}>Profile </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/messages.js" activeClassName={classes.active }>Messages </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to ="friends.js" activeClassName={classes.active}>Friends </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="settings.js" activeClassName={classes.active}>Settings </NavLink>
            </div>
                </div>
            </div>

        </React.Fragment>

);
}

export default Header;