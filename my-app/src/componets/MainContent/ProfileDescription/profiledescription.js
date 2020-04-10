import React from "react";
import classes from "./profiledescription.module.css"

const ProfileDescription =(props)=>{
    return(
        <React.Fragment>
        <div>
            <div className={classes.description}>ava+description</div>
        </div>
        </React.Fragment>
    );
}

export default ProfileDescription;