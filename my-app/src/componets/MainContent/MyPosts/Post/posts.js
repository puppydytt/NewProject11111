import React from 'react';
import classes from './posts.module.css';


const Posts =(props)=> {
    return(
    <div className={classes.item}>
        {props.mood}
    </div>
    );
};
export default Posts;