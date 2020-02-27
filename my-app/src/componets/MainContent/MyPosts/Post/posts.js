import React from 'react';
import classes from './posts.module.css'
import Button from "./button";

const Posts =()=> {
    return(



        <div className = {classes.item}>
        <img  src = "http://pngimg.com/uploads/cloud/cloud_PNG27.png" alt ="" />
        Post 1
        <div>
        <a>
    <Button/>
    </a>
        </div>
    </div>


);
}

export default Posts;