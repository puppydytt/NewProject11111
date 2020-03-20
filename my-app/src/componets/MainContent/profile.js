import React from 'react';
import classes from './profile.module.css'
import MyPosts from "./MyPosts/myposts";
import ProfileDescription from "./ProfileDescription/profiledescription";


const Profile = () => {
    return (
        <React.Fragment>
            <mtd className={classes.maincontent}>
                <ProfileDescription/>
                <MyPosts/>
            </mtd>
        </React.Fragment>
    );
}


export default Profile