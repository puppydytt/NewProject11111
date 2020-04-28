import React from 'react';
import classes from './myposts.module.css'
import Posts from "./Post/posts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../StateData/state";


const MyPosts = (props) => {debugger;

    let PostElement = props.state.emotionPage.emotion
        .map(e=> <Posts id={e.id} mood={e.mood}/>);


    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange =(event)=>{
        let text = event.target.value
        props.dispatch(onPostChangeActionCreator(text))
    };


    return (
        <React.Fragment>
            <div className={classes.maincontent}>
                {PostElement}
                <div>
                    <input className={classes.input}  value={props.state.emotionPage.newEmotionTextElement} onChange={onPostChange}/>
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