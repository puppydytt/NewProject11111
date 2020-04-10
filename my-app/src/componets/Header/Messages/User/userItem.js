import classes from "./userItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


const UserItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default UserItem;