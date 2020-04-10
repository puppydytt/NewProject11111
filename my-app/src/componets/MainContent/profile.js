import React from 'react';
import classes from './profile.module.css'
import MyPosts from "./MyPosts/myposts";
import ProfileDescription from "./ProfileDescription/profiledescription";



const Profile = (props) => {
    return (
        <React.Fragment>
            <div className={classes.maincontent}>
                <ProfileDescription/>
                <MyPosts state={props.state}/>
            </div>
        </React.Fragment>
    );
};


export default Profile;