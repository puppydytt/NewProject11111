import React from 'react';
import classes from './profile.module.css'
import MyPosts from "./MyPosts/myposts";
import ProfileDescription from "./ProfileDescription/profiledescription";



const Profile = (props) => {
    return (
        <React.Fragment>
            <div className={classes.maincontent}>
                <ProfileDescription/>
                <MyPosts state={props.state} newEmotionTextElement={props.state.emotionPage.newEmotionTextElement} newUserMood={props.newUserMood} newMessageMoodUpdate={props.newMessageMoodUpdate} />
            </div>
        </React.Fragment>
    );
};


export default Profile;