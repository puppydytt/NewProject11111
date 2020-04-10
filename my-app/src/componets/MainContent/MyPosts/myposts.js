import React from 'react';
import classes from './myposts.module.css'
import Posts from "./Post/posts";


const newPostElement = React.createRef();
const addPost = (props) => {
    let text = newPostElement.current.value;
    alert(text);
};


const MyPosts = (props) => {
    return (
        <React.Fragment>
            <div className={classes.maincontent}>
                <Posts state={props.state}/>
                <div>
                    <input className={classes.input} ref={newPostElement}/>
                </div>
                <div>

                    <button className={classes.button} onClick={addPost}>Upload</button>
                </div>
                <div>

                </div>
            </div>

        </React.Fragment>
    );
};

export default MyPosts;