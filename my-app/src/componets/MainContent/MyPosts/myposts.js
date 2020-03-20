import React from 'react';
import classes from './myposts.module.css'
import Posts from "./Post/posts";

const MyPosts = () => {
    return (
     <React.Fragment>
        <div className={classes.maincontent}>
            <Posts message="Hello does anybody here?"/>
            <Posts message="Hello, I'm here"/>


        </div>

     </React.Fragment>
    );
}

export default MyPosts;