import React from "react";
import classes from "./settings.module.css";

const Settings = () => {
    return (
        <React.Fragment>
            <div className={classes.generalSettings}>
                <div className={classes.settings}>
                    Settings Page
                </div>
                <div className={classes.themeSwitcher}>
                    <button>Change Theme of App</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Settings;