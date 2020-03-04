import React from 'react';
import classes from './posts.module.css'
import Button from "./button";

const Posts =(props)=> {

    return(



        <div className = {classes.item}>
        <img  src = "http://pngimg.com/uploads/cloud/cloud_PNG27.png" alt ="" />
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