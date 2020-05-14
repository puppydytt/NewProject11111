import React from 'react';
import classes from './profile.module.css'
import ProfileDescription from "./ProfileDescription/profiledescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <React.Fragment>
            <div className={classes.maincontent}>
                <ProfileDescription/>
                <MyPostsContainer/>
            </div>
        </React.Fragment>
    );
};


export default Profile;
