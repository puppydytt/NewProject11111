import React from "react";
import classes from "./friends.module.css"


const Friends = (props) => {
    debugger;
    return (
        <React.Fragment>
            <div className={classes.friendsPage}>

                <div className={classes.userPosts}>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>
                    <img src="https://i.imgur.com/b08hxPY.png"/>

                </div>
                <hr/>
                <div className={classes.friends}>{props.friendsPage}</div>
            </div>
        </React.Fragment>
    );
}

export default Friends;