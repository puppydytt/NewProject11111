import React from 'react';
import classes from './posts.module.css';


const Posts =(props)=> {
    return(
    <div className={classes.item}>
        <a>{props.mood}</a>
    </div>
    );
};
export default Posts;