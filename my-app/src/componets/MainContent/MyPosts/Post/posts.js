import React from 'react';
import classes from './posts.module.css';
import Button from "./button";

const Posts = (props) => {

    return (


        <div className={classes.item}>
            {props.message}
            <div>
                <a>
                    <Button/>
                </a>
            </div>
        </div>


    );
}

export default Posts;