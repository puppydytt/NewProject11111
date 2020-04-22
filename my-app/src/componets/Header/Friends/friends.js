import React from "react";
import classes from "./friends.module.css"




const Friends = (props) => {
    return (
        <React.Fragment>
          <div className={classes.friends}>{props.friendsPage.friends}</div>
        </React.Fragment>
    );
}

export default Friends;