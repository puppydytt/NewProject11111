import React from "react";
import classes from "./profiledescription.module.css"

const ProfileDescription = (props) => {
    return (
        <React.Fragment>
            <div>
                <div className={classes.description}>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                </div>
            </div>

        </React.Fragment>
    );
}

export default ProfileDescription;