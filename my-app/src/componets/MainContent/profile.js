import React from 'react';
import classes from './profile.module.css'
import MyPosts from "./MyPosts/myposts";


const Profile =()=> {
    return(
        <div className ={classes.maincontent}>
           <div>
        <img src ="http://pngimg.com/uploads/aston_martin/aston_martin_PNG25.png" alt=""></img>
        </div>
        <div>
        ava + description
        </div>
        <MyPosts/>
        </div>
    );
}









export default Profile