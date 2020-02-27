import React from 'react';
import classes from './myposts.module.css'
import Posts from "./Post/posts";

const MyPosts =()=> {
    return(

        <div className ={classes.maincontent}>
      <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>

    </div>


);
}

export default MyPosts;