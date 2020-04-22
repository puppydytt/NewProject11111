import React from 'react';
import classes from './myposts.module.css'
import Posts from "./Post/posts";


const MyPosts = (props) => {

    let PostElement = props.state.emotionPage.emotion
        .map(e=> <Posts id={e.id} mood={e.mood}/>);

    const newPostElement = React.createRef();

    const onPostChange =()=>{
        let text = newPostElement.current.value;
        props.newMessageMoodUpdate(text)
    };

    const addPost = () => {
        let text = newPostElement.current.value;
        props.newUserMood(text);
    };


    return (
        <React.Fragment>
            <div className={classes.maincontent}>
                {PostElement}
                <div>
                    <input className={classes.input} ref={newPostElement} value={props.newEmotionTextElement} onChange={onPostChange}/>
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